'use client';

import Chart from 'chart.js/auto';
import type { ChartOptions, Plugin } from 'chart.js';
import { useEffect, useRef } from 'react';
import { ANNI_GRAFICO } from '@/lib/solar-calc';
import { fmt0, fmt2, formatPayback } from '@/lib/format';
import type { SimResult } from '@/lib/types';

const zeroLinePlugin: Plugin = {
  id: 'zeroLine',
  afterDraw(chart) {
    const { ctx, chartArea, scales } = chart;
    const yZero = scales.y.getPixelForValue(0);
    if (yZero < chartArea.top || yZero > chartArea.bottom) return;
    ctx.save();
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.3)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(chartArea.left, yZero);
    ctx.lineTo(chartArea.right, yZero);
    ctx.stroke();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
    ctx.font = '600 10px Poppins, system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Pareggio (0 €)', chartArea.left + 6, yZero - 6);
    ctx.restore();
  },
};

function creaPaybackMarkerPlugin(paybackIdx: number | null, paybackLabel: string | null): Plugin {
  return {
    id: `paybackMarker-${paybackIdx ?? 'none'}`,
    afterDraw(chart) {
      if (paybackIdx == null || paybackIdx <= 0) return;
      const { ctx, chartArea, scales } = chart;
      const x = scales.x.getPixelForValue(paybackIdx);
      if (x < chartArea.left || x > chartArea.right) return;
      ctx.save();
      ctx.strokeStyle = 'rgba(13, 148, 136, 0.85)';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      const label = paybackLabel || 'Ripagato!';
      ctx.font = '700 11px Poppins, system-ui, sans-serif';
      const tw = ctx.measureText(label).width;
      const boxW = tw + 16;
      const boxH = 22;
      let boxX = x - boxW / 2;
      boxX = Math.max(chartArea.left + 4, Math.min(boxX, chartArea.right - boxW - 4));
      const boxY = chartArea.top + 6;
      ctx.fillStyle = '#0d9488';
      if (typeof ctx.roundRect === 'function') {
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 6);
        ctx.fill();
      } else {
        ctx.fillRect(boxX, boxY, boxW, boxH);
      }
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, boxX + boxW / 2, boxY + boxH / 2);
      ctx.restore();
    },
  };
}

type PaybackChartProps = {
  result: SimResult;
};

export function PaybackChart({ result }: PaybackChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { labels, saldoInvestimento, cumRisparmio, cumGse, cumDetrazione } = result.serie;
    const paybackIdx = result.payback.reached
      ? Math.min(Math.ceil(result.payback.years), ANNI_GRAFICO)
      : null;
    const paybackLabel = result.payback.reached
      ? `Ripagato · ${formatPayback(result.payback.years)}`
      : null;
    const isMobile = window.innerWidth < 640;

    chartRef.current?.destroy();

    const options: ChartOptions<'line'> = {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 10,
            font: { family: 'Poppins', size: isMobile ? 9 : 10 },
            boxWidth: 8,
          },
        },
        tooltip: {
          callbacks: {
            title(items) {
              return items[0]?.label ?? '';
            },
            label(ctx) {
              const v = ctx.parsed.y ?? 0;
              return `${ctx.dataset.label}: ${v >= 0 ? '+' : ''}${fmt2(v)} €`;
            },
            footer(items) {
              const idx = items[0]?.dataIndex ?? 0;
              const saldo = saldoInvestimento[idx] ?? 0;
              return `Saldo netto: ${saldo >= 0 ? '+' : ''}${fmt2(saldo)} €`;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          ticks: {
            maxTicksLimit: isMobile ? 6 : 8,
            font: { size: 10, family: 'Poppins' },
          },
        },
        y: {
          stacked: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            callback: (v) => fmt0(Number(v)) + ' €',
            font: { size: 10, family: 'Poppins' },
          },
        },
      },
    };

    chartRef.current = new Chart(canvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Risparmio bolletta',
            data: cumRisparmio,
            stack: 'benefici',
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.42)',
            borderWidth: 1,
            fill: true,
            tension: 0.2,
            pointRadius: 0,
            order: 3,
          },
          {
            label: 'Ricavo GSE',
            data: cumGse,
            stack: 'benefici',
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.38)',
            borderWidth: 1,
            fill: true,
            tension: 0.2,
            pointRadius: 0,
            order: 3,
          },
          {
            label: 'Detrazione fiscale',
            data: cumDetrazione,
            stack: 'benefici',
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.38)',
            borderWidth: 1,
            fill: true,
            tension: 0.2,
            pointRadius: 0,
            order: 3,
          },
          {
            label: 'Saldo netto',
            data: saldoInvestimento,
            borderColor: '#0f766e',
            backgroundColor: 'transparent',
            borderWidth: 3,
            fill: false,
            tension: 0.2,
            pointRadius: saldoInvestimento.map((_, i) =>
              i === paybackIdx ? 8 : i === 0 || i === ANNI_GRAFICO ? 4 : 0,
            ),
            pointBackgroundColor: saldoInvestimento.map((_, i) =>
              i === paybackIdx ? '#0d9488' : '#0f766e',
            ),
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            order: 1,
          },
        ],
      },
      options,
      plugins: [zeroLinePlugin, creaPaybackMarkerPlugin(paybackIdx, paybackLabel)],
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [result]);

  return (
    <div className="relative h-80 sm:h-72">
      <canvas ref={canvasRef} aria-label="Grafico payback investimento fotovoltaico" />
    </div>
  );
}
