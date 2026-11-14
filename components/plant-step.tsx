'use client';
import { ArrowLeft, ArrowRight, SlidersHorizontal, Sun, Info } from 'lucide-react';
import { ProductionEstimate } from '@/components/production-estimate';
import type { ProductionChoice } from '@/lib/production-estimate';
import { NumField } from '@/components/num-field';
import { eur, kwh } from '@/lib/format';
import type { SimInput } from '@/lib/types';

export function PlantStep({
  input,
  productionChoice,
  onProductionChange,
  onChange,
  onCalculate,
  onBack,
}: {
  input: SimInput;
  productionChoice: ProductionChoice;
  onProductionChange: (choice: ProductionChoice) => void;
  onChange: (patch: Partial<SimInput>) => void;
  onCalculate: () => void;
  onBack: () => void;
}) {
  const production = input.kwp * input.irraggiamento * input.scenario;
  const profiles = [
    { value: 0.25, label: 'Di sera', hint: 'Poco presente di giorno' },
    { value: 0.4, label: 'Misto', hint: 'Consumi distribuiti' },
    { value: 0.6, label: 'Di giorno', hint: 'Spesso presente in casa' },
  ];
  return (
    <form
      className="panel"
      onInvalidCapture={(e) => {
        const details = (e.target as HTMLElement).closest('details');
        if (details) details.open = true;
      }}
      aria-labelledby="step-title"
      onSubmit={(e) => {
        e.preventDefault();
        onCalculate();
      }}
    >
      <span className="eyebrow">Un impianto adatto alle tue abitudini</span>
      <h1 id="step-title" tabIndex={-1}>
        Configura il tuo impianto
      </h1>
      <p className="intro">Usa i dati del preventivo. Le ipotesi si possono sempre modificare.</p>
      <div className="data-summary">
        <span>
          {kwh(input.consumoKwh)}/anno <span aria-hidden="true">·</span> {eur(input.spesaAnnua)}
          /anno
        </span>
        <button type="button" onClick={onBack}>
          Modifica consumi
        </button>
      </div>
      <div className="field-grid">
        <NumField
          id="kwp"
          label="Potenza impianto"
          unit="kWp"
          hint="La potenza nominale indicata nel preventivo."
          placeholder="Es. 4,5"
          value={input.kwp}
          onChange={(kwp) => onChange({ kwp })}
        />
        <NumField
          id="costo"
          label="Costo totale dell’impianto"
          unit="€"
          hint="L’importo completo da pagare, prima di eventuali detrazioni."
          placeholder="Es. 6.990"
          value={input.costoImpianto}
          onChange={(costoImpianto) => onChange({ costoImpianto })}
        />
      </div>
      <ProductionEstimate choice={productionChoice} onChange={onProductionChange} />
      <fieldset className="profile-group">
        <legend>Quando consumi più energia?</legend>
        <div className="profile-options">
          {profiles.map((profile) => (
            <label
              className={`profile-option ${input.quotaAutoconsumo === profile.value ? 'selected' : ''}`}
              key={profile.value}
            >
              <input
                type="radio"
                name="profilo"
                value={profile.value}
                checked={input.quotaAutoconsumo === profile.value}
                onChange={() => onChange({ quotaAutoconsumo: profile.value })}
              />
              <strong>{profile.label}</strong>
              <span>{profile.hint}</span>
            </label>
          ))}
        </div>
        <p className="field-hint">
          Ipotesi indicative di autoconsumo: 25%, 40% e 60% della produzione. Non sono misure dei
          tuoi consumi orari. Puoi impostare una quota diversa qui sotto.
        </p>
      </fieldset>
      <details className="assumptions">
        <summary>
          <SlidersHorizontal size={18} aria-hidden="true" /> Ipotesi di produzione e benefici{' '}
          <span>Modifica</span>
        </summary>
        <div className="assumptions-content">
          <p className="field-hint">
            Sono parametri di simulazione, non tariffe ufficiali o agevolazioni garantite.
          </p>
          <div className="field-grid">
            <NumField
              id="quota"
              label="Quota di produzione autoconsumata"
              unit="%"
              allowZero
              max={100}
              placeholder="40"
              value={input.quotaAutoconsumo * 100}
              onChange={(v) => onChange({ quotaAutoconsumo: v / 100 })}
              hint="Limitata anche dal consumo annuo. Nessun modello specifico della batteria."
            />
            <NumField
              id="scenario"
              label="Produzione rispetto alla stima"
              unit="%"
              max={100}
              placeholder="100"
              value={input.scenario * 100}
              onChange={(v) => onChange({ scenario: v / 100 })}
              hint="100% è lo scenario base; prova 80% o 50% per ridurre la produzione."
            />
            <NumField
              id="prezzo-evitato"
              label="Prezzo evitato dell’energia"
              unit="€/kWh"
              allowZero
              placeholder="0,25"
              value={input.prezzoEvitato}
              onChange={(prezzoEvitato) => onChange({ prezzoEvitato })}
              hint="Stima iniziale 0,25 €/kWh: considera solo le componenti variabili che non pagheresti autoconsumando."
            />
            <NumField
              id="prezzo-vendita"
              label="Prezzo dell’energia immessa"
              unit="€/kWh"
              allowZero
              placeholder="0,09"
              value={input.prezzoVendita}
              onChange={(prezzoVendita) => onChange({ prezzoVendita })}
              hint="Stima iniziale 0,09 €/kWh. Il prezzo effettivo può variare e non è garantito."
            />
            <NumField
              id="detrazione"
              label="Detrazione fiscale ipotizzata"
              unit="%"
              allowZero
              max={100}
              placeholder="0"
              value={input.aliquotaDetrazione * 100}
              onChange={(v) => onChange({ aliquotaDetrazione: v / 100 })}
              hint="Esclusa per impostazione iniziale. Inserisci solo l’aliquota applicabile al tuo caso, verificando requisiti e capienza fiscale. Ripartizione su 10 anni."
            />
            <NumField
              id="manutenzione"
              label="Costi ricorrenti annuali"
              unit="€/anno"
              allowZero
              placeholder="0"
              value={input.manutenzioneAnnua}
              onChange={(manutenzioneAnnua) => onChange({ manutenzioneAnnua })}
              hint="Manutenzione, assicurazione o altri costi. Zero significa che questi costi sono esclusi."
            />
          </div>
        </div>
      </details>
      <div className="inline-note">
        <Info size={18} aria-hidden="true" />
        <p>
          Stime attive: autoconsumo{' '}
          {Number.isFinite(input.quotaAutoconsumo) ? Math.round(input.quotaAutoconsumo * 100) : '—'}
          %, energia evitata {eur(input.prezzoEvitato)}/kWh, detrazione{' '}
          {Math.round(input.aliquotaDetrazione * 100)}%. Controlla le ipotesi prima di continuare.
        </p>
      </div>
      {Number.isFinite(production) && production > 0 && (
        <div className="production-preview">
          <Sun size={23} aria-hidden="true" />
          <div>
            <span>Produzione annua nello scenario scelto</span>
            <strong>{kwh(production)}</strong>
          </div>
          <span className="estimate-tag">Stima</span>
        </div>
      )}
      <button className="button primary" type="submit">
        Mostra la mia simulazione <ArrowRight size={18} aria-hidden="true" />
      </button>
      <button className="back-link" type="button" onClick={onBack}>
        <ArrowLeft size={16} aria-hidden="true" /> Torna ai consumi
      </button>
    </form>
  );
}
