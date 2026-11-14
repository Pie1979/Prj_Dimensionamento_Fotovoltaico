'use client';
import { useState } from 'react';
import { NumField } from '@/components/num-field';
import { fmt0 } from '@/lib/format';
import { findRegion, REGIONAL_YIELDS, type ProductionChoice } from '@/lib/production-estimate';

export function ProductionEstimate({
  choice,
  onChange,
}: {
  choice: ProductionChoice;
  onChange: (choice: ProductionChoice) => void;
}) {
  const [error, setError] = useState(false);
  const region = findRegion(choice.regionCode);
  return (
    <section className="regional-estimate" aria-labelledby="production-heading">
      <h2 id="production-heading">Dove installerai l’impianto?</h2>
      <fieldset className="production-mode">
        <legend className="sr-only">Come stimare la produzione</legend>
        <label>
          <input
            type="radio"
            name="production-mode"
            checked={choice.mode === 'region'}
            onChange={() => onChange({ ...choice, mode: 'region' })}
          />{' '}
          Stima dalla regione
        </label>
        <label>
          <input
            type="radio"
            name="production-mode"
            checked={choice.mode === 'manual'}
            onChange={() => {
              setError(false);
              onChange({ ...choice, mode: 'manual' });
            }}
          />{' '}
          Ho il valore del preventivo
        </label>
      </fieldset>
      {choice.mode === 'region' ? (
        <>
          <div className="number-field">
            <label htmlFor="regione">Regione dell’impianto</label>
            <select
              id="regione"
              name="regione"
              value={choice.regionCode}
              required
              aria-invalid={error}
              aria-describedby={`regione-hint${error ? ' regione-error' : ''}`}
              onChange={(e) => {
                setError(false);
                onChange({ ...choice, regionCode: e.target.value });
              }}
              onInvalid={() => setError(true)}
              onBlur={(e) => {
                if (e.currentTarget.matches(':user-invalid'))
                  setError(!e.currentTarget.validity.valid);
              }}
            >
              <option value="">Seleziona la tua regione</option>
              {REGIONAL_YIELDS.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            <p id="regione-hint" className="field-hint">
              Una prima stima, senza dover conoscere inclinazione ed esposizione del tetto.
            </p>
            {error && (
              <p id="regione-error" className="field-error">
                Seleziona una regione oppure inserisci il valore del preventivo.
              </p>
            )}
          </div>
          {region && (
            <div className="regional-yield" role="status">
              <span>Resa annua indicativa · {region.name}</span>
              <strong>
                {fmt0(region.annualYield)} <small>kWh/kWp/anno</small>
              </strong>
              <p>
                Elaborazione SunSize su dati PVGIS della Commissione europea. Non è una valutazione
                del tuo tetto.
              </p>
            </div>
          )}
          <p className="field-hint">
            Riferimento: pannelli verso sud, inclinazione 30°, perdite di sistema 14%. Esposizione e
            ombre locali possono modificare la produzione.
          </p>
        </>
      ) : (
        <NumField
          id="produzione"
          label="Resa annua del preventivo"
          unit="kWh/kWp/anno"
          hint="Se il preventivo riporta la produzione totale annua, dividila per i kWp. Esempio: 6.300 kWh ÷ 4,5 kWp = 1.400 kWh/kWp/anno."
          placeholder="Es. 1.400"
          value={choice.manualYield}
          onChange={(manualYield) => onChange({ ...choice, manualYield })}
        />
      )}
      <details className="help-details">
        <summary>Fonte e metodo della stima regionale</summary>
        <p>
          Le rese sono medie indicative di più punti distribuiti sul territorio di ogni regione,
          arrotondate a 10 kWh/kWp/anno. Fonte:{' '}
          <a
            href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en"
            target="_blank"
            rel="noreferrer"
          >
            PVGIS 5.3, Commissione europea
          </a>
          , database SARAH3, periodo 2005–2023. Non sono medie ufficiali pubblicate per regione né
          medie dei tetti abitati.
        </p>
        <p>
          Il valore è già una resa elettrica che comprende le perdite impostate: non sottrarre di
          nuovo il 14%. Puoi sostituirlo con la stima dell’installatore scegliendo “Ho il valore del
          preventivo”.
        </p>
      </details>
    </section>
  );
}
