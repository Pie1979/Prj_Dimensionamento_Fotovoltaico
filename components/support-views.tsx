'use client';
import { useState } from 'react';
import { NumField } from '@/components/num-field';
import { annualizePeriod, type AnnualEstimate, type PeriodInput } from '@/lib/annualize';
import { eur, fmt0, fmt2, kwh } from '@/lib/format';
import { REGIONAL_YIELDS } from '@/lib/production-estimate';
import type { SimInput } from '@/lib/types';

export type SupportView =
  'annualize' | 'quota' | 'economics' | 'source' | 'flows' | 'scenarios' | 'limits' | 'privacy';

export function AnnualizeView({
  previous,
  onSave,
  onCancel,
}: {
  previous: AnnualEstimate | null;
  onSave: (estimate: AnnualEstimate) => void;
  onCancel: () => void;
}) {
  const [period, setPeriod] = useState<PeriodInput>(
    previous ?? { consumption: 0, spending: 0, months: 0 },
  );
  let estimate: AnnualEstimate | null = null;
  try {
    estimate = annualizePeriod(period);
  } catch {
    /* The form explains invalid fields. */
  }
  return (
    <form
      className="panel helper-panel"
      onSubmit={(e) => {
        e.preventDefault();
        if (estimate) onSave(estimate);
      }}
    >
      <h1 id="step-title" tabIndex={-1}>
        Hai solo i dati di un periodo?
      </h1>
      <p className="intro">Possiamo ricavare una stima annua, da verificare prima del calcolo.</p>
      <NumField
        id="consumo-periodo"
        label="Consumo del periodo"
        unit="kWh"
        placeholder="Es. 500"
        value={period.consumption}
        onChange={(consumption) => setPeriod({ ...period, consumption })}
        hint="Il consumo effettivo riportato nelle bollette del periodo."
      />
      <NumField
        id="spesa-periodo"
        label="Spesa del periodo"
        unit="€"
        placeholder="Es. 150"
        value={period.spending}
        onChange={(spending) => setPeriod({ ...period, spending })}
        hint="Gli importi delle bollette dello stesso periodo, tasse incluse."
      />
      <div className="number-field">
        <label htmlFor="mesi-periodo">Mesi coperti dalle bollette</label>
        <select
          id="mesi-periodo"
          name="mesi-periodo"
          required
          value={period.months || ''}
          onChange={(e) => setPeriod({ ...period, months: Number(e.target.value) })}
        >
          <option value="">Seleziona il periodo</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} {i === 0 ? 'mese' : 'mesi'}
            </option>
          ))}
        </select>
        <p className="field-hint">
          Da 1 a 12 mesi interi. Consumi e spesa devono riferirsi agli stessi mesi.
        </p>
      </div>
      <div className="soft-note">
        <strong>Come stimiamo un anno</strong>
        {estimate ? (
          <>
            <p>
              {fmt0(period.consumption)} ÷ {period.months} × 12 = {kwh(estimate.annualConsumption)}
              /anno
            </p>
            <p>
              {eur(period.spending)} ÷ {period.months} × 12 = {eur(estimate.annualSpending)}/anno
            </p>
          </>
        ) : (
          <p>Consumo e spesa del periodo ÷ mesi × 12. Inserisci i dati per vedere la stima.</p>
        )}
      </div>
      <p className="field-hint">
        È un’estrapolazione, non il consumo annuo misurato: stagioni, riscaldamento e abitudini
        possono cambiare il risultato. Se non conosci neppure questi dati, recuperali prima dal
        fornitore.
      </p>
      <button type="submit" className="button primary">
        Usa la stima e controlla i dati →
      </button>
      <button type="button" className="back-link" onClick={onCancel}>
        ← Torna ai consumi
      </button>
    </form>
  );
}

export function AssumptionView({
  kind,
  input,
  onSave,
  onCancel,
}: {
  kind: 'quota' | 'economics';
  input: SimInput;
  onSave: (patch: Partial<SimInput>) => void;
  onCancel: () => void;
}) {
  const [draft, setDraft] = useState(input);
  const quota = kind === 'quota';
  const production = draft.kwp * draft.irraggiamento * draft.scenario;
  const used = Math.min(production * draft.quotaAutoconsumo, draft.consumoKwh);
  const validPreview =
    Number.isFinite(used) &&
    production > 0 &&
    draft.consumoKwh > 0 &&
    draft.quotaAutoconsumo >= 0 &&
    draft.quotaAutoconsumo <= 1;
  return (
    <form
      className="panel helper-panel"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(
          quota
            ? { quotaAutoconsumo: draft.quotaAutoconsumo }
            : {
                aliquotaDetrazione: draft.aliquotaDetrazione,
                manutenzioneAnnua: draft.manutenzioneAnnua,
              },
        );
      }}
    >
      <h1 id="step-title" tabIndex={-1}>
        {quota ? 'Personalizza l’autoconsumo' : 'Detrazione e costi'}
      </h1>
      <p className="intro">
        {quota
          ? 'Indica la parte della produzione che pensi di usare mentre l’impianto produce.'
          : 'Controlla anche i costi: possono cambiare il tempo di rientro.'}
      </p>
      {quota ? (
        <>
          <NumField
            id="quota"
            label="Quota della produzione usata in casa"
            unit="%"
            allowZero
            max={100}
            placeholder="40"
            value={draft.quotaAutoconsumo * 100}
            onChange={(v) => setDraft({ ...draft, quotaAutoconsumo: v / 100 })}
            hint="Valore ammesso: da 0% a 100%. Non è una percentuale del consumo."
          />
          <div className="soft-note">
            <strong>Con la configurazione attuale</strong>
            {validPreview ? (
              <>
                <p>
                  {kwh(production)} × {fmt2(draft.quotaAutoconsumo * 100)}%: {kwh(used)}/anno usati
                  in casa, limitati al fabbisogno.
                </p>
                <p>
                  Consumo annuo: {kwh(draft.consumoKwh)}. Da acquistare:{' '}
                  {kwh(draft.consumoKwh - used)}.
                </p>
              </>
            ) : (
              <p>Completa potenza, resa e consumi per vedere il bilancio energetico.</p>
            )}
          </div>
          <p className="field-hint">
            È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il
            preventivo o misure dei carichi possono aiutarti a scegliere la quota.
          </p>
        </>
      ) : (
        <>
          <NumField
            id="detrazione"
            label="Detrazione fiscale ipotizzata · facoltativa"
            unit="%"
            allowZero
            max={100}
            placeholder="0"
            value={draft.aliquotaDetrazione * 100}
            onChange={(v) => setDraft({ ...draft, aliquotaDetrazione: v / 100 })}
            hint="Nessuna aliquota presunta. Zero esclude il recupero. Quote su 10 anni, se interamente recuperabili."
          />
          <NumField
            id="manutenzione"
            label="Costi ricorrenti annuali"
            unit="€/anno"
            allowZero
            placeholder="0"
            value={draft.manutenzioneAnnua}
            onChange={(manutenzioneAnnua) => setDraft({ ...draft, manutenzioneAnnua })}
            hint="Manutenzione e assicurazione. Zero significa che questi costi sono esclusi, non che siano gratuiti."
          />
          <div className="soft-note">
            <strong>Stesso esborso, benefici diversi</strong>
            <p>
              Il costo completo di {eur(input.costoImpianto)} resta da pagare all’inizio.
              L’eventuale recupero fiscale entra nei flussi dei primi 10 anni; i costi ricorrenti
              riducono il beneficio ogni anno.
            </p>
          </div>
          <p className="field-hint">
            Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la
            detrazione verifica aliquota, spese ammesse, requisiti, massimali e capienza fiscale.
          </p>
        </>
      )}
      <button type="submit" className="button primary">
        {quota ? 'Usa questa quota →' : 'Salva le ipotesi →'}
      </button>
      <button type="button" className="back-link" onClick={onCancel}>
        Annulla e torna {quota ? 'all’impianto' : 'ai dati'}
      </button>
    </form>
  );
}

export function RegionalSource({ onBack }: { onBack: () => void }) {
  return (
    <section className="panel helper-panel">
      <h1 id="step-title" tabIndex={-1}>
        Da dove arriva la resa regionale?
      </h1>
      <p className="intro">Una prima stima trasparente, da affinare con il preventivo.</p>
      <div className="soft-note">
        <strong>PVGIS 5.3 · SARAH3 · 2005–2023</strong>
        <p>
          Impianto da 1 kWp, silicio cristallino ventilato, sud, inclinazione 30°, perdite di
          sistema impostate al 14%, già comprese nella resa elettrica.
        </p>
      </div>
      <p>
        209 punti distribuiti nelle 20 regioni. Media spaziale approssimata, pesata per l’area delle
        celle e arrotondata a 10 kWh/kWp/anno: non è una media ufficiale regionale né una
        valutazione dei tetti abitati.
      </p>
      <p>
        Località, esposizione e ombre possono modificare la produzione. Preferisci una stima del
        preventivo se disponibile. Non sottrarre di nuovo il 14%.
      </p>
      <table className="region-table">
        <caption>Rese indicative · kWh/kWp/anno</caption>
        <thead>
          <tr>
            <th scope="col">Regione</th>
            <th scope="col">Resa</th>
          </tr>
        </thead>
        <tbody>
          {REGIONAL_YIELDS.map((r) => (
            <tr key={r.code}>
              <th scope="row">{r.name}</th>
              <td>{fmt0(r.annualYield)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="field-hint">
        Fonte:{' '}
        <a
          href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en"
          target="_blank"
          rel="noreferrer"
        >
          Commissione europea · PVGIS
        </a>{' '}
        © European Communities. Confini: Eurostat/GISCO NUTS 2024.{' '}
        <a
          href="https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/blob/codex/sunsize-ux/docs/rese-regionali.md"
          target="_blank"
          rel="noreferrer"
        >
          Metodo e campioni verificabili
        </a>
        . Nessuna chiamata a PVGIS durante la simulazione.
      </p>
      <button type="button" className="back-link" onClick={onBack}>
        ← Torna all’impianto
      </button>
    </section>
  );
}

export function PrivacyView({ onBack }: { onBack: () => void }) {
  return (
    <section className="panel helper-panel">
      <h1 id="step-title" tabIndex={-1}>
        Dati e funzionamento
      </h1>
      <p>
        SunSize è un simulatore di PCODING Software. I valori che inserisci vengono elaborati nel
        browser, senza registrazione e senza invio a un servizio di calcolo.
      </p>
      <p>
        La simulazione rimane nella memoria della pagina: non viene salvata in un account o
        nell’archiviazione del browser. Ricaricando o chiudendo la pagina perdi i dati. “Nuova
        simulazione” li cancella dopo la conferma.
      </p>
      <p>
        Le rese regionali sono incluse nell’app. I collegamenti alle fonti aprono siti esterni
        soltanto quando li selezioni. Il servizio che ospita il sito può trattare dati tecnici di
        connessione per erogare le pagine.
      </p>
      <p>
        La stima è indicativa e dipende dalle ipotesi inserite. Non verifica la fiscalità
        applicabile e non sostituisce una valutazione del tetto o un preventivo professionale.
      </p>
      <button type="button" className="back-link" onClick={onBack}>
        ← Torna alla simulazione
      </button>
    </section>
  );
}
