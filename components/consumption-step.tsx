'use client';
import { NumField } from '@/components/num-field';
import { eur, kwh } from '@/lib/format';
import type { AnnualEstimate } from '@/lib/annualize';
import type { SimInput } from '@/lib/types';
export function ConsumptionStep({
  input,
  annualEstimate,
  onChange,
  onContinue,
  onEstimate,
}: {
  input: SimInput;
  annualEstimate: AnnualEstimate | null;
  onChange: (patch: Partial<SimInput>) => void;
  onContinue: () => void;
  onEstimate: () => void;
}) {
  return (
    <div className="consumption-layout">
      <aside className="story-panel">
        <span className="eyebrow">UNA SCELTA PIÙ CONSAPEVOLE</span>
        <h2>
          Prima di scegliere i pannelli,
          <br />
          fai chiarezza.
        </h2>
        <p>
          Esplora produzione, benefici e tempo di rientro. Le ipotesi restano sempre sotto il tuo
          controllo.
        </p>
        <div className="story-points">
          {[
            ['01  Dati che conosci', 'Consumi e spesa dalla tua bolletta.'],
            ['02  Ipotesi che controlli', 'Produzione, autoconsumo e prezzi.'],
            ['03  Risultati spiegati', 'Ogni beneficio ha una formula.'],
          ].map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="small">Senza registrazione. Calcolo nel browser.</p>
      </aside>
      <form
        className="panel consumption-panel"
        aria-labelledby="step-title"
        onSubmit={(e) => {
          e.preventDefault();
          onContinue();
        }}
      >
        <span className="eyebrow">01 / CONSUMI</span>
        <h1 id="step-title" tabIndex={-1}>
          Quanto consumi in un anno?
        </h1>
        <p className="intro">Bastano due dati dalla bolletta per iniziare.</p>
        {annualEstimate ? (
          <div className="warning-note">
            <strong>Dati annualizzati · da verificare</strong>
            <p>
              Da {kwh(annualEstimate.consumption)} e {eur(annualEstimate.spending)} in{' '}
              {annualEstimate.months} mesi. Non è un consumo annuo misurato.
              {(input.consumoKwh !== annualEstimate.annualConsumption ||
                input.spesaAnnua !== annualEstimate.annualSpending) &&
                ' I valori annuali sono stati modificati dopo la stima.'}
            </p>
            <button type="button" className="back-link" id="edit-estimate" onClick={onEstimate}>
              Rivedi il periodo →
            </button>
          </div>
        ) : (
          <div className="soft-note">
            <strong>Tieni a portata di mano una bolletta</strong>
            <p>
              Cerca il riepilogo dei consumi degli ultimi 12 mesi e somma gli importi dello stesso
              periodo.
            </p>
          </div>
        )}
        <div className="field-grid">
          <NumField
            id="consumo"
            label="Consumo annuo"
            unit="kWh/anno"
            hint={
              annualEstimate
                ? 'Stima estrapolata dal periodo indicato. Correggila se hai il dato annuale.'
                : 'Il totale degli ultimi 12 mesi.'
            }
            placeholder="Es. 3.000"
            value={input.consumoKwh}
            onChange={(consumoKwh) => onChange({ consumoKwh })}
          />
          <NumField
            id="spesa"
            label="Spesa annua complessiva"
            unit="€/anno"
            hint={
              annualEstimate
                ? 'Stima della spesa annua, tasse incluse.'
                : 'Tutte le bollette, tasse incluse.'
            }
            placeholder="Es. 900"
            value={input.spesaAnnua}
            onChange={(spesaAnnua) => onChange({ spesaAnnua })}
          />
        </div>
        <div className="warning-note">
          <strong>La spesa non è il risparmio</strong>
          <p>
            Include costi fissi e tasse. Il risparmio sarà stimato sull’energia che non acquisterai,
            usando il prezzo evitato.
          </p>
        </div>
        <button className="button primary" type="submit">
          Continua: configura l’impianto →
        </button>
        <button id="annualize-link" className="button secondary" type="button" onClick={onEstimate}>
          Non ho dati annuali: aiutami a stimare
        </button>
        <p className="field-hint">Puoi partire da una stima e correggerla prima del calcolo.</p>
        <p className="field-hint">Nessuna registrazione. I dati restano in questa pagina.</p>
      </form>
    </div>
  );
}
