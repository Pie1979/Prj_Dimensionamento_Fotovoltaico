'use client';
import { ProductionEstimate } from '@/components/production-estimate';
import { NumField } from '@/components/num-field';
import { eur, kwh, fmt1pct } from '@/lib/format';
import type { ProductionChoice } from '@/lib/production-estimate';
import type { SupportView } from '@/components/support-views';
import type { SimInput, UsageContext } from '@/lib/types';
export function PlantStep({
  input,
  productionChoice,
  onProductionChange,
  usageContext,
  onUsageChange,
  onChange,
  onCalculate,
  onBack,
  onOpen,
}: {
  input: SimInput;
  productionChoice: ProductionChoice;
  onProductionChange: (choice: ProductionChoice) => void;
  usageContext: UsageContext;
  onUsageChange: (context: UsageContext) => void;
  onChange: (patch: Partial<SimInput>) => void;
  onCalculate: () => void;
  onBack: () => void;
  onOpen: (view: SupportView) => void;
}) {
  const production = input.kwp * input.irraggiamento * input.scenario;
  const used = Math.min(production * input.quotaAutoconsumo, input.consumoKwh);
  const preview = Number.isFinite(production) && production > 0;
  return (
    <div className="plant-layout">
      <form
        className="panel plant-panel"
        aria-label="Configurazione e ipotesi"
        onInvalidCapture={(e) => {
          const details = (e.target as HTMLElement).closest('details');
          if (details) details.open = true;
        }}
        onSubmit={(e) => {
          e.preventDefault();
          onCalculate();
        }}
      >
        <div className="data-summary">
          <strong>
            {kwh(input.consumoKwh)}/anno · {eur(input.spesaAnnua)}/anno
          </strong>
          <button type="button" className="back-link" onClick={onBack}>
            Modifica consumi
          </button>
        </div>
        <div className="field-grid">
          <NumField
            id="kwp"
            label="Potenza impianto"
            unit="kWp"
            hint="La potenza nominale nel preventivo."
            placeholder="Es. 4,5"
            value={input.kwp}
            onChange={(kwp) => onChange({ kwp })}
          />
          <NumField
            id="costo"
            label="Costo totale"
            unit="€"
            hint="Esborso iniziale, prima delle detrazioni."
            placeholder="Es. 6.990"
            value={input.costoImpianto}
            onChange={(costoImpianto) => onChange({ costoImpianto })}
          />
        </div>
        <ProductionEstimate
          choice={productionChoice}
          kwp={input.kwp}
          scenario={input.scenario}
          onChange={onProductionChange}
          onSource={() => onOpen('source')}
        />
        <section className="usage-context" aria-label="Contesto dei consumi">
          <div className="number-field">
            <label htmlFor="orario-consumi">Quando consumi di più?</label>
            <select
              id="orario-consumi"
              name="orario-consumi"
              value={usageContext.timing}
              onChange={(e) =>
                onUsageChange({
                  ...usageContext,
                  timing: e.target.value as UsageContext['timing'],
                })
              }
            >
              <option value="unknown">Non lo so</option>
              <option value="evening">Soprattutto la sera</option>
              <option value="mixed">Durante tutta la giornata</option>
              <option value="daytime">Soprattutto di giorno</option>
            </select>
            <p className="field-hint">
              Contesto dichiarato: non assegna automaticamente una percentuale.
            </p>
          </div>
          <div className="number-field">
            <label htmlFor="batteria">È prevista una batteria?</label>
            <select
              id="batteria"
              name="batteria"
              value={usageContext.battery}
              onChange={(e) =>
                onUsageChange({
                  ...usageContext,
                  battery: e.target.value as UsageContext['battery'],
                })
              }
            >
              <option value="unknown">Non so / da valutare</option>
              <option value="no">No</option>
              <option value="yes">Sì</option>
            </select>
            <p className="field-hint">
              Una batteria non viene simulata: servono capacità e profili orari. Il suo costo va
              incluso nel preventivo.
            </p>
          </div>
        </section>
        <fieldset className="profile-group">
          <legend>Quale quota di produzione userai in casa?</legend>
          <div className="profile-options">
            {[0.25, 0.4, 0.6].map((value) => (
              <label
                className={`profile-option ${input.quotaAutoconsumo === value ? 'selected' : ''}`}
                key={value}
              >
                <input
                  type="radio"
                  name="profilo"
                  value={value}
                  checked={input.quotaAutoconsumo === value}
                  onChange={() => onChange({ quotaAutoconsumo: value })}
                />
                <strong>
                  {input.quotaAutoconsumo === value ? '✓ ' : ''}Quota {value * 100}%
                </strong>
                <span>{value * 100}%</span>
              </label>
            ))}
          </div>
          <p className="field-hint">
            {preview && input.consumoKwh > 0
              ? `Ipotesi ${input.quotaAutoconsumo * 100}%: ${kwh(used)}/anno, cioè il ${fmt1pct((used / input.consumoKwh) * 100)} dei consumi. Verifica la coincidenza con la produzione nelle ore di sole.`
              : 'Completa i dati per confrontare questa quota con il fabbisogno.'}
          </p>
          <p className="field-hint">
            Quote illustrative, non misurate né dedotte dagli orari o dalla batteria. Puoi
            personalizzarle.
          </p>
          <button
            id="quota-link"
            type="button"
            className="back-link"
            onClick={() => onOpen('quota')}
          >
            Personalizza autoconsumo →
          </button>
        </fieldset>
        <section className="economic-assumptions" aria-labelledby="economic-title">
          <h2 id="economic-title">Ipotesi economiche</h2>
          <div className="field-grid">
            <NumField
              id="prezzo-evitato"
              label="Energia non acquistata"
              unit="€/kWh"
              allowZero
              placeholder="0,25"
              value={input.prezzoEvitato}
              onChange={(prezzoEvitato) => onChange({ prezzoEvitato })}
              hint="Prezzo evitato, senza costi fissi."
            />
            <NumField
              id="prezzo-vendita"
              label="Energia immessa"
              unit="€/kWh"
              allowZero
              placeholder="0,09"
              value={input.prezzoVendita}
              onChange={(prezzoVendita) => onChange({ prezzoVendita })}
              hint="Ipotesi di ricavo, non tariffa garantita."
            />
          </div>
          <p className="field-hint">
            Fonte: valori dello scenario iniziale, non tariffe verificate. Aggiornali con i tuoi
            dati.
          </p>
          <button
            id="economics-link"
            type="button"
            className="back-link"
            onClick={() => onOpen('economics')}
          >
            {input.aliquotaDetrazione > 0
              ? `Detrazione ipotizzata ${input.aliquotaDetrazione * 100}%`
              : 'Detrazione non impostata'}{' '}
            ·{' '}
            {input.manutenzioneAnnua > 0
              ? eur(input.manutenzioneAnnua) + '/anno di costi'
              : 'costi esclusi'}{' '}
            · Modifica →
          </button>
        </section>
        <details className="help-details">
          <summary>Vuoi ridurre la produzione stimata?</summary>
          <NumField
            id="scenario"
            label="Produzione rispetto alla stima"
            unit="%"
            max={100}
            placeholder="100"
            value={input.scenario * 100}
            onChange={(v) => onChange({ scenario: v / 100 })}
            hint="100% è lo scenario base; prova 80% o 50%. Questa riduzione non sostituisce una valutazione del tetto."
          />
        </details>
        <button type="submit" className="button primary">
          Calcola la simulazione →
        </button>
        <button type="button" className="back-link" onClick={onBack}>
          ← Torna ai consumi
        </button>
      </form>
      <aside className="story-panel plant-summary">
        <span className="eyebrow">LA TUA CONFIGURAZIONE</span>
        <h2>Un primo quadro, prima di decidere.</h2>
        {[
          ['Produzione annua', preview ? kwh(production) : 'Da stimare'],
          ['Usata in casa', preview && Number.isFinite(used) ? kwh(used) : 'Da stimare'],
          ['Esborso iniziale', input.costoImpianto > 0 ? eur(input.costoImpianto) : 'Da inserire'],
        ].map(([label, value]) => (
          <div className="summary-metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <p>
          Puoi rivedere ogni valore prima di decidere. Questa simulazione non sostituisce una
          valutazione del tetto.
        </p>
        <div className="solar-note">
          <strong>Prima del calcolo</strong>
          <p>
            Usa valori positivi per consumi, potenza e costo. Verifica unità e separatori decimali.
          </p>
        </div>
      </aside>
    </div>
  );
}
