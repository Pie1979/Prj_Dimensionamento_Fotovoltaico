'use client';

import { RotateCcw } from 'lucide-react';
import { ScenarioSelector } from '@/components/scenario-selector';
import { eur, fmt1pct, formatPayback, kwh } from '@/lib/format';
import { VERDICT_STYLES } from '@/lib/solar-calc';
import type { SimInput, SimResult } from '@/lib/types';
import { actionBtnBase, cn } from '@/lib/utils';

type ResultsStepProps = {
  input: SimInput;
  result: SimResult;
  onScenarioChange: (scenario: number) => void;
  onRestart: () => void;
};

export function ResultsStep({ input, result, onScenarioChange, onRestart }: ResultsStepProps) {
  const verdict = VERDICT_STYLES[result.colore];
  const paybackLabel = result.payback.reached
    ? formatPayback(result.payback.years)
    : 'Oltre 50 anni';

  return (
    <div className="space-y-6 pb-6">
      <ScenarioSelector value={input.scenario} onChange={onScenarioChange} />

      <section>
        <h2 className="mb-3 text-sm font-semibold text-slate-800">Dimensionamento</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">Produzione annua</p>
            <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">{kwh(result.produzioneLorda)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Autoconsumo</p>
            <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">{kwh(result.autoconsumo)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">Copertura consumi</p>
            <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">{fmt1pct(result.indiceCopertura)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Beneficio annuo (10 anni)</p>
            <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">{eur(result.beneficioTotale10)}/anno</p>
          </div>
        </div>
      </section>

      <div
        className={cn('rounded-2xl border-2 p-8 text-center shadow-lg md:p-10', verdict.box)}
        aria-live="polite"
      >
        <span
          className={cn(
            'mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide',
            verdict.badge,
          )}
        >
          {result.payback.reached && result.payback.years <= 50 ? verdict.label : 'Payback non raggiunto'}
        </span>
        <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Tempo di rientro</p>
        <p className="mt-2 text-4xl font-extrabold tabular-nums md:text-5xl">{paybackLabel}</p>
        <p className="mt-3 text-sm opacity-80">
          {result.payback.reached
            ? `Investimento netto ${eur(result.investimentoNetto)} recuperato con risparmi, GSE e detrazione`
            : 'Rivedi potenza impianto o costo con i parametri attuali'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
          <span className="block text-[10px] font-semibold uppercase text-slate-500">Investito</span>
          <span className="mt-1 block text-sm font-bold tabular-nums">{eur(result.investimentoNetto)}</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
          <span className="block text-[10px] font-semibold uppercase text-slate-500">Rientro</span>
          <span className="mt-1 block text-sm font-bold tabular-nums text-[#0F766E]">{paybackLabel}</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
          <span className="block text-[10px] font-semibold uppercase text-slate-500">Saldo 10 anni</span>
          <span className="mt-1 block text-sm font-bold tabular-nums text-emerald-700">
            {result.saldo10 >= 0 ? '+' : ''}
            {eur(result.saldo10)}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className={cn(
          actionBtnBase,
          'border-transparent bg-[#0F766E] text-white shadow-md hover:bg-[#0D9488] sm:mx-auto sm:max-w-md',
        )}
      >
        <span className="flex items-center justify-center gap-2.5">
          <RotateCcw className="h-5 w-5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
          Nuova simulazione
        </span>
        <span className="text-xs font-normal text-white/80 sm:hidden">
          Torna alla home e inizia un nuovo calcolo
        </span>
      </button>
    </div>
  );
}
