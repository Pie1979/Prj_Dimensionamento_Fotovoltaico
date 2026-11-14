'use client';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { eur } from '@/lib/format';
import type { SimResult } from '@/lib/types';

export function PaybackChart({
  result,
  withoutTax,
  hasTax,
}: {
  result: SimResult;
  withoutTax: SimResult;
  hasTax: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, {
      type: 'line',
      data: {
        labels: result.serie.labels,
        datasets: [
          {
            label: 'Senza detrazione',
            data: withoutTax.serie.saldoInvestimento,
            borderColor: '#0f766e',
            backgroundColor: '#0f766e',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0,
          },
          ...(hasTax
            ? [
                {
                  label: 'Con detrazione ipotizzata',
                  data: result.serie.saldoInvestimento,
                  borderColor: '#5c400e',
                  backgroundColor: '#5c400e',
                  borderWidth: 2,
                  pointRadius: 0,
                  tension: 0,
                },
              ]
            : []),
          {
            label: 'Pareggio',
            data: result.serie.labels.map(() => 0),
            borderColor: '#718086',
            borderWidth: 1.5,
            borderDash: [5, 5],
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { family: 'Inter, sans-serif', size: 12 },
              usePointStyle: true,
              padding: 20,
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ${eur(context.parsed.y ?? 0)}`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              maxTicksLimit: 6,
              maxRotation: 0,
              font: { family: 'Inter, sans-serif', size: 11 },
            },
          },
          y: {
            grid: { color: '#e7eded' },
            ticks: {
              callback: (value) =>
                new Intl.NumberFormat('it-IT', {
                  notation: 'compact',
                  maximumFractionDigits: 1,
                }).format(Number(value)) + ' €',
              font: { family: 'Inter, sans-serif', size: 11 },
            },
          },
        },
      },
    });
    return () => chart.destroy();
  }, [result, withoutTax, hasTax]);
  return (
    <div className="payback-chart">
      <canvas
        ref={ref}
        role="img"
        aria-label="Confronto del saldo dell’investimento con e senza detrazione nei primi 15 anni. Apri “Vedi i flussi anno per anno” per leggere gli stessi valori."
      />
    </div>
  );
}
