'use client';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { eur } from '@/lib/format';
import type { SimResult } from '@/lib/types';

export function PaybackChart({ result }: { result: SimResult }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, {
      type: 'line',
      data: {
        labels: result.serie.labels,
        datasets: [
          {
            label: 'Saldo stimato',
            data: result.serie.saldoInvestimento,
            borderColor: '#0f766e',
            backgroundColor: '#0f766e',
            borderWidth: 3,
            pointRadius: 2,
            tension: 0,
          },
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
        animation: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? false
          : { duration: 250 },
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
  }, [result]);
  return (
    <div className="payback-chart">
      <canvas
        ref={ref}
        role="img"
        aria-label="Saldo stimato dell’investimento nei primi 15 anni. I dati sono disponibili nella tabella sottostante."
      />
    </div>
  );
}
