'use client';
import { ArrowRight, FileText, Info } from 'lucide-react';
import { NumField } from '@/components/num-field';
import type { SimInput } from '@/lib/types';

export function ConsumptionStep({
  input,
  onChange,
  onContinue,
}: {
  input: SimInput;
  onChange: (patch: Partial<SimInput>) => void;
  onContinue: () => void;
}) {
  return (
    <form
      className="panel"
      aria-labelledby="step-title"
      onSubmit={(e) => {
        e.preventDefault();
        onContinue();
      }}
    >
      <span className="eyebrow">Partiamo dai tuoi dati</span>
      <h1 id="step-title" tabIndex={-1}>
        Quanto consumi in un anno?
      </h1>
      <p className="intro">Due dati dalla bolletta per capire come il fotovoltaico può aiutarti.</p>
      <div className="soft-note">
        <FileText size={21} aria-hidden="true" />
        <div>
          <strong>La tua bolletta, a portata di mano</strong>
          <p>Cerca il riepilogo dei consumi degli ultimi 12 mesi.</p>
        </div>
      </div>
      <div className="field-grid">
        <NumField
          id="consumo"
          label="Consumo annuo"
          unit="kWh/anno"
          hint="Il consumo totale degli ultimi 12 mesi, non quello della singola fattura."
          placeholder="Es. 3.000"
          value={input.consumoKwh}
          onChange={(consumoKwh) => onChange({ consumoKwh })}
        />
        <NumField
          id="spesa"
          label="Spesa annua complessiva"
          unit="€/anno"
          hint="Il totale delle bollette elettriche di un anno, tasse incluse."
          placeholder="Es. 900"
          value={input.spesaAnnua}
          onChange={(spesaAnnua) => onChange({ spesaAnnua })}
        />
      </div>
      <details className="help-details">
        <summary>Dove trovo questi dati?</summary>
        <p>
          Il consumo annuo è spesso riportato nella sezione “Consumi storici” o “Consumo annuo”. Per
          la spesa, somma le fatture degli ultimi 12 mesi. Moltiplicare una sola bolletta per 6 o 12
          può essere poco attendibile se i consumi cambiano con le stagioni.
        </p>
      </details>
      <div className="inline-note">
        <Info size={18} aria-hidden="true" />
        <p>
          La spesa comprende anche costi fissi: non coincide con il risparmio ottenibile. Nel
          prossimo passo potrai impostare il prezzo dell’energia evitato.
        </p>
      </div>
      <button className="button primary" type="submit">
        Continua: configura l’impianto <ArrowRight size={18} aria-hidden="true" />
      </button>
      <p className="form-footnote">
        Nessuna registrazione. I dati della simulazione restano in questa pagina.
      </p>
    </form>
  );
}
