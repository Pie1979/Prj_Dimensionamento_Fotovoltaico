/**
 * Calcolo Dimensionamento Fotovoltaico — UI Controller
 */

let currentScenario = 1;
let paybackChart = null;

const SCENARIO_LABELS = {
  1: 'Reale (100%)',
  0.8: '80%',
  0.5: '50%',
};

const PAYBACK_COLORS = {
  green: { bg: 'rgba(34, 197, 94, 0.15)', border: '#16a34a', verdict: 'verdict--green' },
  orange: { bg: 'rgba(249, 115, 22, 0.15)', border: '#ea580c', verdict: 'verdict--orange' },
  red: { bg: 'rgba(239, 68, 68, 0.15)', border: '#dc2626', verdict: 'verdict--red' },
};

function $(id) {
  return document.getElementById(id);
}

function readInputs() {
  return {
    consumo: parseFloat($('consumo').value) || 0,
    spesa: parseFloat($('spesa').value) || 0,
    irraggiamento: parseFloat($('irraggiamento').value) || 0,
    kwp: parseFloat($('kwp').value) || 0,
    costo: parseFloat($('costo').value) || 0,
    prezzoGse: parseFloat($('prezzo-gse').value) || 0,
    scenarioFactor: currentScenario,
  };
}

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}

function aggiornaUI() {
  const params = readInputs();
  const result = calcolaPV(params);
  const scenarioLabel = SCENARIO_LABELS[currentScenario];

  // Passo 1
  setText('out-costo-energia', formatCurrency(result.costoEnergia) + '/kWh');

  // Passo 2
  setText('out-produzione', formatKwh(result.produzioneLorda));
  setText('out-produzione-detail',
    `${formatNumber(params.kwp, 1)} kWp × ${formatNumber(params.irraggiamento, 0)} × ${Math.round(currentScenario * 100)}%`
  );
  setText('out-autoconsumo', formatKwh(result.autoconsumoKwh));
  setText('out-autoconsumo-detail',
    `Tasso autoconsumo: ${formatPercent(result.tassoAutoconsumo * 100)}`
  );
  setText('out-sovrapproduzione', formatKwh(result.sovrapproduzioneKwh));
  setText('out-sovraproduzione-detail', 'Energia immessa in rete');
  setText('out-copertura', formatPercent(result.indiceCopertura));

  // Passo 3
  setText('out-autoconsumo-calc',
    `${formatKwh(result.autoconsumoKwh)} × ${formatCurrency(result.costoEnergia)}/kWh`
  );
  setText('out-risparmio-autoconsumo', formatCurrency(result.risparmioAutoconsumo) + '/anno');
  setText('out-gse-calc',
    `${formatKwh(result.sovrapproduzioneKwh)} × ${formatNumber(params.prezzoGse, 2)} €/kWh`
  );
  setText('out-ricavo-gse', formatCurrency(result.ricavoGse) + '/anno');
  setText('out-detrazione-calc',
    `50% di ${formatCurrency(params.costo)} ÷ ${FISCAL.ANNI_DETRAZIONE} anni`
  );
  setText('out-quota-detrazione', formatCurrency(result.quotaDetrazioneAnnua) + '/anno');
  setText('out-beneficio-operativo', formatCurrency(result.beneficioOperativo) + '/anno');
  setText('out-beneficio-totale', formatCurrency(result.beneficioTotaleAnni110) + '/anno');
  setText('out-costo-netto', formatCurrency(result.costoNetto));

  // Passo 4
  const paybackYears = result.payback.years;
  setText('out-payback', formatPayback(paybackYears));
  setText('out-verdict-message', getVerdictMessage(paybackYears, result.paybackColor));
  setText('out-bill-comparison', getBillComparisonMessage(paybackYears, params.spesa));
  setText('out-scenario-label', scenarioLabel);

  const verdictCard = $('verdict-card');
  verdictCard.className = 'verdict__main ' + PAYBACK_COLORS[result.paybackColor].verdict;

  aggiornaGrafico(result);
}

function aggiornaGrafico(result) {
  const canvas = $('payback-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  const colors = PAYBACK_COLORS[result.paybackColor];
  const { labels, bollettaCumulativa, investimentoSaldo } = result.seriePayback;

  const paybackIndex = result.payback.reached
    ? Math.min(Math.ceil(result.payback.years), labels.length - 1)
    : null;

  if (paybackChart) {
    paybackChart.destroy();
  }

  paybackChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Costo cumulativo bolletta (senza FV)',
          data: bollettaCumulativa,
          borderColor: '#64748b',
          backgroundColor: 'rgba(100, 116, 139, 0.08)',
          borderWidth: 2,
          borderDash: [6, 4],
          fill: true,
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 4,
        },
        {
          label: 'Saldo investimento (con FV)',
          data: investimentoSaldo,
          borderColor: colors.border,
          backgroundColor: colors.bg,
          borderWidth: 3,
          fill: true,
          tension: 0.1,
          pointRadius: investimentoSaldo.map((_, i) => (i === paybackIndex ? 6 : 0)),
          pointBackgroundColor: investimentoSaldo.map((_, i) =>
            i === paybackIndex ? colors.border : 'transparent'
          ),
          pointBorderColor: investimentoSaldo.map((_, i) =>
            i === paybackIndex ? '#fff' : 'transparent'
          ),
          pointBorderWidth: 2,
          segment: {
            borderColor: (ctx) => {
              const idx = ctx.p1DataIndex;
              if (paybackIndex !== null && idx <= paybackIndex) return colors.border;
              return colors.border + '99';
            },
          },
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true, padding: 16, font: { family: 'Inter, system-ui, sans-serif' } },
        },
        tooltip: {
          callbacks: {
            label(ctx) {
              const val = ctx.parsed.y;
              const prefix = val >= 0 ? '+' : '';
              return `${ctx.dataset.label}: ${prefix}${formatCurrency(val)}`;
            },
          },
        },
        annotation: paybackIndex
          ? undefined
          : undefined,
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { maxTicksLimit: 13, font: { size: 11 } },
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            callback: (v) => formatNumber(v, 0) + ' €',
            font: { size: 11 },
          },
        },
      },
    },
  });

  const legendEl = $('chart-legend');
  const colorLabel = result.paybackColor === 'green' ? '≤ 5 anni' : result.paybackColor === 'orange' ? '5–10 anni' : '> 10 anni';
  legendEl.innerHTML = `
    <span class="legend-item"><span class="legend-dot legend-dot--${result.paybackColor}"></span> Payback ${colorLabel}</span>
    <span class="legend-item"><span class="legend-dot legend-dot--grey"></span> Bolletta senza FV</span>
  `;
}

function initScenarioButtons() {
  document.querySelectorAll('.scenario-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scenario-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentScenario = parseFloat(btn.dataset.scenario);
      aggiornaUI();
    });
  });
}

function initInputs() {
  const inputIds = ['consumo', 'spesa', 'irraggiamento', 'kwp', 'costo', 'prezzo-gse'];
  inputIds.forEach((id) => {
    const el = $(id);
    if (el) {
      el.addEventListener('input', aggiornaUI);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScenarioButtons();
  initInputs();
  aggiornaUI();
});
