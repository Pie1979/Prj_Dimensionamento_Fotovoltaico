'use client';

import { PREZZO_GSE, commentoCopertura } from '@/lib/solar-calc';
import { eur, fmt0, fmt1pct, fmt2, fmt3, kwh } from '@/lib/format';
import type { SimInput, SimResult } from '@/lib/types';

type PlantEnergyPreviewProps = {
  input: SimInput;
  preview: SimResult;
};

function KpiCard({
  label,
  value,
  detail,
  hint,
  accent,
}: {
  label: string;
  value: string;
  detail?: string;
  hint?: string;
  accent: 'teal' | 'emerald' | 'sky' | 'blue' | 'amber';
}) {
  const borderClass = {
    teal: 'border-l-teal-500',
    emerald: 'border-l-emerald-500',
    sky: 'border-l-sky-500',
    blue: 'border-l-blue-500',
    amber: 'border-l-amber-500',
  }[accent];

  const labelClass = {
    teal: 'text-teal-600',
    emerald: 'text-emerald-600',
    sky: 'text-sky-600',
    blue: 'text-blue-600',
    amber: 'text-amber-600',
  }[accent];

  return (
    <div className={`rounded-xl border border-slate-200 border-l-4 bg-white p-4 shadow-sm ${borderClass}`}>
      <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>{label}</p>
      <p className="mt-2 text-2xl font-extrabold tabular-nums text-slate-900">{value}</p>
      {detail && <p className="mt-1 text-xs text-slate-500">{detail}</p>}
      {hint && <p className="mt-2 text-xs leading-relaxed text-slate-500">{hint}</p>}
    </div>
  );
}

export function PlantEnergyPreview({ input, preview }: PlantEnergyPreviewProps) {
  const hasPlant = input.kwp > 0 && input.irraggiamento > 0;
  const hasBill = input.consumoKwh > 0 && input.spesaAnnua > 0;

  if (!hasPlant) {
    return (
      <section className="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 p-5 text-center">
        <p className="text-sm text-slate-600">
          Inserisci potenza impianto e irraggiamento per vedere produzione, risparmi e sovrapproduzione in tempo reale.
        </p>
      </section>
    );
  }

  const formula = `${fmt2(input.kwp)} kWp × ${fmt0(input.irraggiamento)} × ${Math.round(input.scenario * 100)}%`;
  const coperturaCommento = commentoCopertura(preview.produzioneLorda, input.consumoKwh);

  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-800">Anteprima impianto</h3>
        <p className="mt-1 text-xs text-slate-500">
          I valori si aggiornano mentre modifichi i campi sopra.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <KpiCard
          accent="teal"
          label="Produzione annua"
          value={kwh(preview.produzioneLorda)}
          detail={formula}
          hint="Tutta l'energia che i pannelli generano in un anno."
        />
        <KpiCard
          accent="emerald"
          label="Autoconsumo stimato"
          value={hasBill ? kwh(preview.autoconsumo) : '—'}
          detail={hasBill ? 'Energia usata subito in casa' : 'Serve il consumo annuo dalla bolletta'}
          hint="Ti fa risparmiare sulla bolletta elettrica."
        />
        <KpiCard
          accent="sky"
          label="Sovrapproduzione"
          value={hasBill ? kwh(preview.sovrapproduzione) : '—'}
          detail={hasBill ? 'Energia immessa in rete (GSE)' : 'Serve il consumo annuo dalla bolletta'}
          hint="Energia in eccesso rispetto a quanto consumi: viene venduta al GSE."
        />
        <KpiCard
          accent="blue"
          label="Copertura consumi"
          value={hasBill ? fmt1pct(preview.indiceCopertura) : '—'}
          detail={hasBill ? coperturaCommento : 'Inserisci consumo e spesa per calcolarla'}
          hint="Sopra il 100% produci più di quanto consumi in un anno."
        />
      </div>

      {hasBill ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Risparmio in bolletta</p>
            <p className="mt-1 text-xs text-slate-500">
              {kwh(preview.autoconsumo)} × {fmt3(preview.costoEnergia)} €/kWh
            </p>
            <p className="mt-2 text-xl font-bold tabular-nums text-emerald-700">
              {eur(preview.risparmio)}/anno
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Ricavo GSE</p>
            <p className="mt-1 text-xs text-slate-500">
              {kwh(preview.sovrapproduzione)} × {fmt2(PREZZO_GSE)} €/kWh
            </p>
            <p className="mt-2 text-xl font-bold tabular-nums text-sky-700">
              {eur(preview.ricavoGse)}/anno
            </p>
          </div>
        </div>
      ) : (
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Compila anche <strong>consumo</strong> e <strong>spesa annua</strong> per vedere risparmio bolletta,
          sovrapproduzione e ricavo GSE.
        </p>
      )}
    </section>
  );
}
