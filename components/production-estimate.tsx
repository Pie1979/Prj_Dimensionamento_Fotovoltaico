'use client';
import { useState } from 'react';
import { NumField } from '@/components/num-field';
import { fmt0, fmt2, kwh } from '@/lib/format';
import { findRegion, REGIONAL_YIELDS, type ProductionChoice } from '@/lib/production-estimate';
export function ProductionEstimate({
  choice,
  onChange,
  kwp,
  scenario,
  onSource,
}: {
  choice: ProductionChoice;
  onChange: (choice: ProductionChoice) => void;
  kwp: number;
  scenario: number;
  onSource: () => void;
}) {
  const [error, setError] = useState(false);
  const region = findRegion(choice.regionCode);
  return (
    <section className="regional-estimate" aria-labelledby="production-heading">
      <h2 id="production-heading">Dove installerai l’impianto?</h2>
      <p>Scegli la regione: la resa si compila automaticamente.</p>
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
          Valore del preventivo
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
            >
              <option value="">Seleziona la tua regione</option>
              {REGIONAL_YIELDS.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            <p id="regione-hint" className="field-hint">
              Seleziona una delle 20 regioni italiane.
            </p>
            {error && (
              <p id="regione-error" className="field-error" role="alert">
                Seleziona una regione oppure inserisci il valore del preventivo.
              </p>
            )}
          </div>
          {region && (
            <div className="regional-yield" role="status">
              <span>Resa annua indicativa · {region.name}</span>
              <strong>{fmt0(region.annualYield)} kWh/kWp/anno</strong>
              {kwp > 0 && Number.isFinite(kwp) && scenario > 0 && scenario <= 1 && (
                <p>
                  {fmt2(kwp)} kWp × {fmt0(region.annualYield)}
                  {scenario !== 1 ? ' × ' + fmt0(scenario * 100) + '%' : ''} ={' '}
                  {kwh(kwp * region.annualYield * scenario)}/anno
                </p>
              )}
            </div>
          )}
          <p className="field-hint">
            Elaborazione SunSize su PVGIS 5.3 · 2005–2023. Sud, 30°, perdite di sistema 14%. La
            media regionale non descrive il singolo tetto.
          </p>
          <button
            type="button"
            className="back-link"
            onClick={() => {
              setError(false);
              onChange({ ...choice, mode: 'manual' });
            }}
          >
            Ho la resa del preventivo →
          </button>
        </>
      ) : (
        <>
          <NumField
            id="produzione"
            label="Resa annua del preventivo"
            unit="kWh/kWp/anno"
            hint="Se il preventivo riporta la produzione totale annua, dividila per i kWp. Esempio: 6.300 kWh ÷ 4,5 kWp = 1.400 kWh/kWp/anno. Non sottrarre nuovamente il 14%."
            placeholder="Es. 1.400"
            value={choice.manualYield}
            onChange={(manualYield) => onChange({ ...choice, manualYield })}
          />
          <button
            type="button"
            className="back-link"
            onClick={() => onChange({ ...choice, mode: 'region' })}
          >
            Usa la stima regionale →
          </button>
        </>
      )}
      <button id="source-link" type="button" className="back-link" onClick={onSource}>
        Fonte e metodo dei valori regionali →
      </button>
    </section>
  );
}
