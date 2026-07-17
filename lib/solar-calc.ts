import type { PaybackColor, PaybackSerie, SimInput, SimResult } from '@/lib/types';

const FISCAL = { DETRAZIONE: 0.5, ANNI: 10 };
export const PREZZO_GSE = 0.09;
export const ANNI_GRAFICO = 15;

function calcolaBeneficioTotale(
  risparmio: number,
  ricavoGse: number,
  quotaDetrazione: number,
  anno: number,
) {
  const base = risparmio + ricavoGse;
  return anno <= FISCAL.ANNI ? base + quotaDetrazione : base;
}

function calcolaPayback(
  investimentoNetto: number,
  risparmio: number,
  ricavoGse: number,
  quotaDetrazione: number,
) {
  if (investimentoNetto <= 0) return { years: 0, reached: true };

  let cumulativo = -investimentoNetto;
  for (let anno = 1; anno <= 50; anno++) {
    const beneficio = calcolaBeneficioTotale(risparmio, ricavoGse, quotaDetrazione, anno);
    const precedente = cumulativo;
    cumulativo += beneficio;
    if (cumulativo >= 0) {
      const frazione = beneficio > 0 ? -precedente / beneficio : 1;
      return { years: anno - 1 + frazione, reached: true };
    }
  }
  return { years: 51, reached: false };
}

function colorePayback(years: number): PaybackColor {
  if (years <= 3) return 'green';
  if (years <= 5) return 'orange';
  return 'red';
}

export function commentoCopertura(produzione: number, consumo: number): string {
  if (consumo <= 0 && produzione > 0) {
    return 'Inserisci il consumo annuo per calcolare copertura e autoconsumo';
  }
  if (consumo <= 0) return '';
  const ratio = produzione / consumo;
  if (ratio >= 2.8) return 'Produce quasi il triplo dei consumi';
  if (ratio >= 1.8) return 'Produce quasi il doppio dei consumi';
  if (ratio >= 1.2) return 'Copre ampiamente i consumi annui';
  if (ratio >= 0.9) return 'Copre quasi interamente i consumi';
  if (ratio >= 0.5) return 'Copre circa la metà dei consumi';
  return 'Impianto sottodimensionato rispetto al consumo';
}

export function generaSeriePayback(
  investimentoNetto: number,
  risparmio: number,
  ricavoGse: number,
  quotaDetrazione: number,
  spesaAnnua: number,
): PaybackSerie {
  const labels: string[] = [];
  const saldoInvestimento: number[] = [];
  const cumRisparmio: number[] = [];
  const cumGse: number[] = [];
  const cumDetrazione: number[] = [];
  const bollettaCumulativa: number[] = [];
  let saldo = -investimentoNetto;
  let cumBolletta = 0;
  let cR = 0;
  let cG = 0;
  let cD = 0;

  for (let y = 0; y <= ANNI_GRAFICO; y++) {
    labels.push(`Anno ${y}`);
    if (y === 0) {
      saldoInvestimento.push(-investimentoNetto);
      cumRisparmio.push(0);
      cumGse.push(0);
      cumDetrazione.push(0);
      bollettaCumulativa.push(0);
      continue;
    }
    cumBolletta += spesaAnnua;
    bollettaCumulativa.push(cumBolletta);
    cR += risparmio;
    cG += ricavoGse;
    if (y <= FISCAL.ANNI) cD += quotaDetrazione;
    cumRisparmio.push(cR);
    cumGse.push(cG);
    cumDetrazione.push(cD);
    saldo += calcolaBeneficioTotale(risparmio, ricavoGse, quotaDetrazione, y);
    saldoInvestimento.push(saldo);
  }

  return { labels, saldoInvestimento, bollettaCumulativa, cumRisparmio, cumGse, cumDetrazione };
}

export function calcolaSimulazione(input: SimInput): SimResult {
  const { consumoKwh: consumo, spesaAnnua: spesa, irraggiamento, kwp, costoImpianto: costo, scenario } =
    input;

  const costoEnergia = consumo > 0 ? spesa / consumo : 0;
  const produzioneLorda = kwp * irraggiamento * scenario;
  const autoconsumo = Math.min(produzioneLorda, consumo);
  const sovrapproduzione = Math.max(0, produzioneLorda - consumo);
  const indiceCopertura = consumo > 0 ? (produzioneLorda / consumo) * 100 : 0;
  const risparmio = autoconsumo * costoEnergia;
  const ricavoGse = sovrapproduzione * PREZZO_GSE;
  const investimentoNetto = costo * FISCAL.DETRAZIONE;
  const detrazioneTotale = costo * FISCAL.DETRAZIONE;
  const quotaDetrazione = (costo * FISCAL.DETRAZIONE) / FISCAL.ANNI;
  const beneficioOperativo = risparmio + ricavoGse;
  const beneficioTotale10 = beneficioOperativo + quotaDetrazione;
  const payback = calcolaPayback(investimentoNetto, risparmio, ricavoGse, quotaDetrazione);
  const colore = colorePayback(payback.years);

  const serie = generaSeriePayback(investimentoNetto, risparmio, ricavoGse, quotaDetrazione, spesa);
  const idx10 = Math.min(FISCAL.ANNI, ANNI_GRAFICO);
  const saldo = serie.saldoInvestimento[idx10];

  return {
    costoEnergia,
    produzioneLorda,
    autoconsumo,
    sovrapproduzione,
    indiceCopertura,
    risparmio,
    ricavoGse,
    investimentoNetto,
    detrazioneTotale,
    quotaDetrazione,
    beneficioOperativo,
    beneficioTotale10,
    payback,
    colore,
    saldo10: saldo,
    serie,
  };
}

export const VERDICT_STYLES: Record<
  PaybackColor,
  { box: string; badge: string; label: string }
> = {
  green: {
    box: 'border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700',
    badge: 'bg-emerald-600 text-white',
    label: 'Investimento conveniente',
  },
  orange: {
    box: 'border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-800',
    badge: 'bg-amber-500 text-white',
    label: 'Da valutare con attenzione',
  },
  red: {
    box: 'border-red-400 bg-gradient-to-br from-red-50 to-rose-50 text-red-700',
    badge: 'bg-red-600 text-white',
    label: 'Payback lungo — rivedi i parametri',
  },
};
