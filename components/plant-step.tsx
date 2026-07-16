'use client';

import { Calculator } from 'lucide-react';
import { ScenarioSelector } from '@/components/scenario-selector';
import { eur, fmt3, kwh } from '@/lib/format';
import type { SimInput } from '@/lib/types';
import { actionBtnBase, cn } from '@/lib/utils';

type PlantStepProps = {
  input: SimInput;
  manualMode?: boolean;
  onChange: (patch: Partial<SimInput>) => void;
  onCalculate: () => void;
  canCalculate: boolean;
};

function NumField({
  id,
  label,
  hint,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  placeholder: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        placeholder={placeholder}
        value={value > 0 ? String(value).replace('.', ',') : ''}
        onChange={(e) => {
          const raw = e.target.value.replace(/\s/g, '').replace(',', '.');
          onChange(parseFloat(raw) || 0);
        }}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-base tabular-nums outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
      />
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

export function PlantStep({ input, manualMode, onChange, onCalculate, canCalculate }: PlantStepProps) {
  const costoEnergia = input.consumoKwh > 0 ? input.spesaAnnua / input.consumoKwh : 0;

  return (
    <div className="space-y-6">
      {manualMode && (
        <p className="rounded-xl border border-teal-100 bg-teal-50/80 px-4 py-3 text-sm leading-relaxed text-slate-700">
          Compila i campi sotto con i dati della tua bolletta e dell&apos;impianto che vuoi simulare.
          Puoi modificarli in qualsiasi momento.
        </p>
      )}

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-base font-semibold text-slate-800">
          {manualMode ? 'Inserisci i dati della bolletta' : 'Dati dalla bolletta'}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumField
            id="consumo"
            label="Consumo annuo (kWh)"
            hint="Consumo elettrico annuo totale"
            placeholder="2301"
            value={input.consumoKwh}
            onChange={(consumoKwh) => onChange({ consumoKwh })}
          />
          <NumField
            id="spesa"
            label="Spesa annua (€)"
            hint="Tasse incluse, annualizzata se bimestrale"
            placeholder="892,92"
            value={input.spesaAnnua}
            onChange={(spesaAnnua) => onChange({ spesaAnnua })}
          />
          <div className="sm:col-span-2 rounded-lg bg-teal-50 px-4 py-3 text-sm">
            <span className="text-slate-600">Costo reale energia: </span>
            <strong className="tabular-nums text-[#0F766E]">{fmt3(costoEnergia)} €/kWh</strong>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-base font-semibold text-slate-800">Configura l&apos;impianto</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumField
            id="kwp"
            label="Potenza impianto (kWp)"
            placeholder="4,5"
            value={input.kwp}
            onChange={(kwp) => onChange({ kwp })}
          />
          <NumField
            id="costo"
            label="Costo chiavi in mano (€)"
            placeholder="6990"
            value={input.costoImpianto}
            onChange={(costoImpianto) => onChange({ costoImpianto })}
          />
          <NumField
            id="irraggiamento"
            label="Irraggiamento (kWh/kWp)"
            hint="Valore tipico Italia centrale ~1.400"
            placeholder="1400"
            value={input.irraggiamento}
            onChange={(irraggiamento) => onChange({ irraggiamento })}
          />
        </div>
      </section>

      <ScenarioSelector value={input.scenario} onChange={(scenario) => onChange({ scenario })} />

      {input.consumoKwh > 0 && (
        <p className="text-center text-xs text-slate-500">
          Riferimento: {kwh(input.consumoKwh)} · {eur(input.spesaAnnua)}/anno
        </p>
      )}

      <button
        type="button"
        onClick={onCalculate}
        disabled={!canCalculate}
        className={cn(
          actionBtnBase,
          'border-transparent bg-[#0F766E] text-white shadow-md hover:bg-[#0D9488] disabled:pointer-events-none disabled:opacity-40 sm:w-full',
        )}
      >
        <span className="flex items-center justify-center gap-2">
          <Calculator className="h-5 w-5 shrink-0" aria-hidden />
          Calcola risultati
        </span>
      </button>
    </div>
  );
}
