'use client';

import { RotateCcw } from 'lucide-react';
import { PaybackChart } from '@/components/payback-chart';
import { ScenarioSelector } from '@/components/scenario-selector';
import { eur, formatPayback } from '@/lib/format';
import { ANNI_GRAFICO, VERDICT_STYLES } from '@/lib/solar-calc';
import type { SimInput, SimResult } from '@/lib/types';
import { actionBtnBase, cn } from '@/lib/utils';

const FISCAL_ANNI = 10;

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
  const idx10 = Math.min(FISCAL_ANNI, ANNI_GRAFICO);
  const { serie } = result;
  const spesa10 = input.spesaAnnua * FISCAL_ANNI;

  return (
    <div className="space-y-6 pb-6">
      <ScenarioSelector value={input.scenario} onChange={onScenarioChange} />

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

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <p className="mb-1 text-sm font-semibold text-slate-700">Il tuo ritorno sull&apos;investimento</p>
        <p className="mb-4 text-xs leading-relaxed text-slate-500">
          {result.investimentoNetto > 0
            ? `In quanti anni recuperi i ${eur(result.investimentoNetto)} investiti di tasca tua?`
            : 'In quanti anni recuperi l\'investimento netto?'}
        </p>

        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="block text-[10px] font-semibold uppercase text-slate-500">Investito</span>
            <span className="mt-1 block text-sm font-bold tabular-nums">{eur(result.investimentoNetto)}</span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="block text-[10px] font-semibold uppercase text-slate-500">Rientro</span>
            <span className="mt-1 block text-sm font-bold tabular-nums text-[#0F766E]">{paybackLabel}</span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="block text-[10px] font-semibold uppercase text-slate-500">Guadagno 10 anni</span>
            <span className="mt-1 block text-sm font-bold tabular-nums text-emerald-700">
              {result.saldo10 >= 0 ? '+' : ''}
              {eur(result.saldo10)}
            </span>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-1.5 text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-wide text-emerald-600">Bolletta</span>
            <span className="mt-0.5 block text-xs font-bold tabular-nums text-emerald-800">
              +{eur(serie.cumRisparmio[idx10])}
            </span>
          </div>
          <div className="rounded-lg border border-sky-100 bg-sky-50 px-2 py-1.5 text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-wide text-sky-600">GSE</span>
            <span className="mt-0.5 block text-xs font-bold tabular-nums text-sky-800">
              +{eur(serie.cumGse[idx10])}
            </span>
          </div>
          <div className="rounded-lg border border-amber-100 bg-amber-50 px-2 py-1.5 text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-wide text-amber-600">Detrazione</span>
            <span className="mt-0.5 block text-xs font-bold tabular-nums text-amber-800">
              +{eur(serie.cumDetrazione[idx10])}
            </span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-100 px-2 py-1.5 text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500">Investito</span>
            <span className="mt-0.5 block text-xs font-bold tabular-nums text-slate-700">
              −{eur(result.investimentoNetto)}
            </span>
          </div>
        </div>

        <p className="mb-2 text-xs leading-relaxed text-slate-500">
          Le aree colorate mostrano da dove arriva il guadagno (bolletta, GSE, detrazione). La linea scura è il
          saldo netto: quando tocca il pareggio, l&apos;impianto è ripagato.
        </p>

        <PaybackChart result={result} />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Senza fotovoltaico</p>
            <p className="text-sm leading-relaxed text-slate-600">
              In {FISCAL_ANNI} anni spendi {eur(spesa10)} in bolletta elettrica, senza recuperare nulla.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">Con fotovoltaico</p>
            <p className="text-sm leading-relaxed text-slate-700">
              {result.payback.reached
                ? `In ${FISCAL_ANNI} anni il tuo saldo netto è ${result.saldo10 >= 0 ? '+' : ''}${eur(result.saldo10)} (rientro in ${paybackLabel}).`
                : 'Il pareggio non viene raggiunto entro 50 anni con i parametri attuali.'}
            </p>
          </div>
        </div>
      </section>

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
