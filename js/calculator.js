/**
 * Calcolo Dimensionamento Fotovoltaico — Motore di calcolo
 * Motore di calcolo trasparente per dimensionamento fotovoltaico residenziale.
 */

const FISCAL = {
  DETRAZIONE_PERCENTUALE: 0.5,
  ANNI_DETRAZIONE: 10,
};

const AUTOCONSUMO = {
  /** Tasso base quando produzione ≤ consumo */
  TASSO_BASE: 0.70,
  /** Tasso minimo per impianti molto sovradimensionati */
  TASSO_MINIMO: 0.20,
  /** Riduzione per ogni unità di rapporto P/C oltre 1 */
  RIDUZIONE_PER_RATIO: 0.29,
};

const PAYBACK_THRESHOLDS = {
  VERDE: 5,
  ARANCIONE: 10,
};

/**
 * Calcola il tasso di autoconsumo istantaneo in base al rapporto produzione/consumo.
 * Impianti più grandi rispetto al consumo hanno tasso più basso (più energia immessa).
 */
function calcolaTassoAutoconsumo(produzione, consumo) {
  if (consumo <= 0 || produzione <= 0) return 0;
  const ratio = produzione / consumo;
  if (ratio <= 1) return AUTOCONSUMO.TASSO_BASE;
  const tasso = AUTOCONSUMO.TASSO_BASE - (ratio - 1) * AUTOCONSUMO.RIDUZIONE_PER_RATIO;
  return Math.max(AUTOCONSUMO.TASSO_MINIMO, tasso);
}

/**
 * Formatta un numero con separatori italiani.
 */
function formatNumber(value, decimals = 0) {
  return new Intl.NumberFormat('it-IT', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function formatCurrency(value) {
  return formatNumber(value, 2) + ' €';
}

function formatKwh(value) {
  return formatNumber(value, 0) + ' kWh';
}

function formatPercent(value) {
  return formatNumber(value, 1) + '%';
}

/**
 * Converte anni decimali in stringa leggibile (es. "3 anni e 1 mese").
 */
function formatPayback(years) {
  if (!isFinite(years) || years <= 0) return '—';
  if (years > 50) return 'Oltre 50 anni';

  const totalMonths = Math.round(years * 12);
  const anni = Math.floor(totalMonths / 12);
  const mesi = totalMonths % 12;

  if (anni === 0) return `${mesi} ${mesi === 1 ? 'mese' : 'mesi'}`;
  if (mesi === 0) return `${anni} ${anni === 1 ? 'anno' : 'anni'}`;
  return `${anni} ${anni === 1 ? 'anno' : 'anni'} e ${mesi} ${mesi === 1 ? 'mese' : 'mesi'}`;
}

/**
 * Calcolo principale — restituisce tutti i valori intermedi e il payback.
 */
function calcolaPV(params) {
  const {
    consumo,
    spesa,
    irraggiamento,
    kwp,
    costo,
    prezzoGse,
    scenarioFactor,
  } = params;

  const costoEnergia = consumo > 0 ? spesa / consumo : 0;
  const produzioneLorda = kwp * irraggiamento * scenarioFactor;

  const tassoAutoconsumo = calcolaTassoAutoconsumo(produzioneLorda, consumo);
  const autoconsumoKwh = Math.min(consumo, produzioneLorda * tassoAutoconsumo);
  const sovrapproduzioneKwh = Math.max(0, produzioneLorda - autoconsumoKwh);
  const indiceCopertura = consumo > 0 ? (autoconsumoKwh / consumo) * 100 : 0;

  const risparmioAutoconsumo = autoconsumoKwh * costoEnergia;
  const ricavoGse = sovrapproduzioneKwh * prezzoGse;
  const beneficioOperativo = risparmioAutoconsumo + ricavoGse;

  const detrazioneTotale = costo * FISCAL.DETRAZIONE_PERCENTUALE;
  const costoNetto = detrazioneTotale;
  const quotaDetrazioneAnnua = detrazioneTotale / FISCAL.ANNI_DETRAZIONE;
  const beneficioTotaleAnni110 = beneficioOperativo + quotaDetrazioneAnnua;

  const payback = calcolaPayback(costoNetto, beneficioOperativo, quotaDetrazioneAnnua);
  const seriePayback = generaSeriePayback({
    spesaAnnua: spesa,
    costoNetto,
    beneficioOperativo,
    quotaDetrazioneAnnua,
    anni: 25,
  });

  const paybackColor = getPaybackColor(payback.years);

  return {
    costoEnergia,
    produzioneLorda,
    tassoAutoconsumo,
    autoconsumoKwh,
    sovrapproduzioneKwh,
    indiceCopertura,
    risparmioAutoconsumo,
    ricavoGse,
    beneficioOperativo,
    detrazioneTotale,
    costoNetto,
    quotaDetrazioneAnnua,
    beneficioTotaleAnni110,
    payback,
    seriePayback,
    paybackColor,
  };
}

/**
 * Calcola il payback interpolando nel tempo in cui il saldo cumulativo raggiunge zero.
 */
function calcolaPayback(costoNetto, beneficioOperativo, quotaDetrazione) {
  if (costoNetto <= 0) {
    return { years: 0, reached: true };
  }

  let cumulativo = -costoNetto;
  let year = 0;

  while (year < 50) {
    year += 1;
    const beneficioAnno = beneficioOperativo + (year <= FISCAL.ANNI_DETRAZIONE ? quotaDetrazione : 0);
    const precedente = cumulativo;
    cumulativo += beneficioAnno;

    if (cumulativo >= 0) {
      const frazione = beneficioAnno > 0 ? (-precedente) / beneficioAnno : 1;
      return { years: (year - 1) + frazione, reached: true };
    }
  }

  return { years: 51, reached: false };
}

/**
 * Genera le serie per il grafico payback.
 */
function generaSeriePayback({ spesaAnnua, costoNetto, beneficioOperativo, quotaDetrazioneAnnua, anni }) {
  const labels = [];
  const bollettaCumulativa = [];
  const investimentoSaldo = [];

  let cumBolletta = 0;
  let saldo = -costoNetto;

  for (let y = 0; y <= anni; y++) {
    labels.push(`Anno ${y}`);

    if (y === 0) {
      bollettaCumulativa.push(0);
      investimentoSaldo.push(-costoNetto);
      continue;
    }

    cumBolletta += spesaAnnua;
    bollettaCumulativa.push(cumBolletta);

    const beneficio = beneficioOperativo + (y <= FISCAL.ANNI_DETRAZIONE ? quotaDetrazioneAnnua : 0);
    saldo += beneficio;
    investimentoSaldo.push(saldo);
  }

  return { labels, bollettaCumulativa, investimentoSaldo };
}

function getPaybackColor(years) {
  if (years <= PAYBACK_THRESHOLDS.VERDE) return 'green';
  if (years <= PAYBACK_THRESHOLDS.ARANCIONE) return 'orange';
  return 'red';
}

function getVerdictMessage(years, color) {
  if (color === 'green') {
    return `Ottimo investimento: il rientro avviene in ${formatPayback(years)}, ben prima del confronto con la bolletta tradizionale.`;
  }
  if (color === 'orange') {
    return `Investimento moderato: payback in ${formatPayback(years)}. Valuta attentamente costi e incentivi.`;
  }
  return `Payback lungo (${formatPayback(years)}): valuta riduzione costi, ottimizzazione potenza o accumulo.`;
}

function getBillComparisonMessage(paybackYears, spesa) {
  const bolletta5anni = spesa * 5;
  const bolletta10anni = spesa * 10;
  return `Continuando a pagare la bolletta spenderesti ${formatCurrency(bolletta5anni)} in 5 anni e ${formatCurrency(bolletta10anni)} in 10 anni, senza generare alcun valore patrimoniale. Con il fotovoltaico, dopo ${formatPayback(paybackYears)} inizi a essere in attivo.`;
}

// Export per uso in app.js e test
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calcolaPV,
    calcolaTassoAutoconsumo,
    formatPayback,
    formatCurrency,
    formatKwh,
    formatPercent,
    formatNumber,
    FISCAL,
    PAYBACK_THRESHOLDS,
  };
}
