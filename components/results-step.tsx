'use client';
import dynamic from 'next/dynamic';
import { eur, fmt0, fmt2, fmt1pct, kwh } from '@/lib/format';
import {
  InvestmentComparison,
  CashFlowTable,
  SensitivityScenarios,
} from '@/components/investment-comparison';
import { calcolaConfrontoFiscale } from '@/lib/solar-calc';
import { findRegion, type ProductionChoice } from '@/lib/production-estimate';
import type { SimInput, SimResult, UsageContext } from '@/lib/types';
import type { AnnualEstimate } from '@/lib/annualize';
import type { SupportView } from '@/components/support-views';
const PaybackChart = dynamic(
  () => import('@/components/payback-chart').then((m) => m.PaybackChart),
  {
    ssr: false,
    loading: () => (
      <p className="chart-loading" role="status">
        Caricamento del grafico…
      </p>
    ),
  },
);
type ResultData = {
  input: SimInput;
  result: SimResult;
  productionChoice: ProductionChoice;
  usageContext: UsageContext;
};
export function ResultsStep({
  input,
  result,
  productionChoice,
  usageContext,
  annualEstimate,
  onEdit,
  onRestart,
  onOpen,
}: ResultData & {
  annualEstimate: AnnualEstimate | null;
  onEdit: (target?: string) => void;
  onRestart: () => void;
  onOpen: (view: SupportView) => void;
}) {
  const comparison = calcolaConfrontoFiscale(input);
  const share = (result.autoconsumo / result.produzioneLorda) * 100;
  const rows = [
    ['Risparmio sulla bolletta', result.risparmio],
    ['Ricavi energia immessa', result.ricavoGse],
    ['Recupero fiscale', result.quotaDetrazione],
    ...(input.manutenzioneAnnua > 0 ? [['Costi ricorrenti', -input.manutenzioneAnnua]] : []),
  ] as [string, number][];
  return (
    <div className="results-layout">
      {annualEstimate && (
        <div className="warning-note">
          <strong>Dati annualizzati · da verificare</strong>
          <p>
            Stima iniziale da un periodo di {annualEstimate.months} mesi. Verifica la
            rappresentatività prima di decidere.
            {(input.consumoKwh !== annualEstimate.annualConsumption ||
              input.spesaAnnua !== annualEstimate.annualSpending) &&
              ' I valori annuali sono stati modificati dopo la stima.'}
          </p>
        </div>
      )}
      <InvestmentComparison input={input} comparison={comparison} onEdit={onEdit} />
      <div className="results-columns">
        <section className="panel result-section" aria-labelledby="benefits-title">
          <h2 id="benefits-title">Da dove arrivano i benefici</h2>
          <p className="section-caption">Importi annuali · scenario scelto</p>
          <dl className="benefit-list">
            {rows.map(([label, value]) => (
              <div className="value-row" key={label}>
                <dt>{label}</dt>
                <dd>{eur(value)}</dd>
              </div>
            ))}
          </dl>
          <div className="soft-note">
            <strong>
              Beneficio annuo
              {input.aliquotaDetrazione > 0 ? ' (anni 1–10)' : ''}: {eur(result.beneficioTotale10)}
            </strong>
            <p>
              {eur(result.risparmio)} risparmio + {eur(result.ricavoGse)} ricavi
              {input.aliquotaDetrazione > 0
                ? ' + ' + eur(result.quotaDetrazione) + ' recupero fiscale'
                : ''}
              {input.manutenzioneAnnua > 0 ? ' − ' + eur(input.manutenzioneAnnua) + ' costi' : ''}.
            </p>
          </div>
          {input.manutenzioneAnnua === 0 ? (
            <div className="warning-note">
              <strong>Costi ricorrenti: non inclusi</strong>
              <p>
                Manutenzione e assicurazione sono escluse, non gratuite. Le sostituzioni
                straordinarie non sono modellate.
              </p>
              <button
                id="costs-link"
                type="button"
                className="back-link"
                onClick={() => onEdit('manutenzione')}
              >
                Inserisci i costi →
              </button>
            </div>
          ) : (
            <p className="field-hint">
              Beneficio dopo i costi inseriti. Sostituzioni straordinarie escluse.
            </p>
          )}
          {input.aliquotaDetrazione > 0 && (
            <p className="field-hint">
              Dall’11° anno la quota fiscale termina: {eur(result.beneficioOperativo)}/anno. I costi
              esclusi non sono necessariamente nulli.
            </p>
          )}
        </section>
        <section className="panel result-section" aria-labelledby="energy-title">
          <h2 id="energy-title">Come si distribuisce l’energia</h2>
          <strong className="energy-total">
            {kwh(result.produzioneLorda)} prodotti in un anno
          </strong>
          <div className="energy-bar" aria-hidden="true">
            <span style={{ width: share + '%' }} />
            <span style={{ width: 100 - share + '%' }} />
          </div>
          <dl>
            <div className="value-row">
              <dt>Usata in casa · {fmt0(share)}%</dt>
              <dd>{kwh(result.autoconsumo)}</dd>
            </div>
            <div className="value-row">
              <dt>Immessa in rete · {fmt0(100 - share)}%</dt>
              <dd>{kwh(result.sovrapproduzione)}</dd>
            </div>
          </dl>
          <div className="neutral-note">
            <strong>Da acquistare: {kwh(input.consumoKwh - result.autoconsumo)}/anno</strong>
            <p>
              Il {fmt1pct(((input.consumoKwh - result.autoconsumo) / input.consumoKwh) * 100)} dei
              consumi. I costi fissi restano.
            </p>
          </div>
          <p className="field-hint">
            La quota del {fmt0(input.quotaAutoconsumo * 100)}% si riferisce alla produzione, non ai
            tuoi consumi. Il bilancio annuo non dimostra l’autonomia dalla rete.
          </p>
        </section>
      </div>
      <section className="panel result-section chart-section" aria-labelledby="chart-title">
        <h2 id="chart-title">Quando recuperi l’investimento?</h2>
        <p className="section-caption">
          Saldo cumulato · euro,{' '}
          {input.manutenzioneAnnua === 0 ? 'prima dei costi esclusi' : 'dopo i costi inseriti'}
        </p>
        <PaybackChart
          result={result}
          withoutTax={comparison.senzaDetrazione}
          hasTax={input.aliquotaDetrazione > 0}
        />
        <div className="soft-note">
          <strong>
            Saldo a 10 anni: senza {eur(comparison.senzaDetrazione.saldo10)}
            {input.aliquotaDetrazione > 0 ? ' · con ' + eur(result.saldo10) : ''}
          </strong>
          <p>
            {input.aliquotaDetrazione > 0
              ? 'Il recupero fiscale aggiunge ' +
                eur(result.detrazioneTotale) +
                ' nei primi 10 anni e poi termina. '
              : 'Nessuna detrazione inclusa. '}
            {!result.payback.reached
              ? 'Rientro non raggiunto entro 50 anni.'
              : result.payback.years > 15
                ? 'Il rientro stimato è oltre i 15 anni mostrati.'
                : ''}
          </p>
        </div>
        <button id="flows-link" className="back-link" type="button" onClick={() => onOpen('flows')}>
          Vedi i flussi anno per anno →
        </button>
      </section>
      <section className="panel desktop-scenarios result-section">
        <h2>E se autoconsumo e prezzi cambiassero?</h2>
        <SensitivityScenarios input={input} />
      </section>
      <button
        id="scenarios-link"
        className="panel mobile-support"
        type="button"
        onClick={() => onOpen('scenarios')}
      >
        <strong>
          Scenari: autoconsumo e prezzi <span>+</span>
        </strong>
        <span>Quota ±10 punti · prezzi ±10% · ipotesi illustrative</span>
      </button>
      <section className="warning-note desktop-limits">
        <h2>Ipotesi e limiti, in chiaro</h2>
        <ResultLimits
          input={input}
          result={result}
          productionChoice={productionChoice}
          usageContext={usageContext}
        />
      </section>
      <button
        id="limits-link"
        className="warning-note mobile-support"
        type="button"
        onClick={() => onOpen('limits')}
      >
        <strong>
          Ipotesi e limiti, in chiaro <span>+</span>
        </strong>
        <span>PVGIS, prezzi, detrazione e costi esclusi</span>
      </button>
      <div className="result-actions">
        <button type="button" className="button primary" onClick={() => onEdit()}>
          Modifica e ricalcola →
        </button>
        <button type="button" className="button secondary" onClick={onRestart}>
          Nuova simulazione
        </button>
      </div>
    </div>
  );
}
function ResultLimits({ input, result, productionChoice, usageContext }: ResultData) {
  const region = findRegion(productionChoice.regionCode);
  return (
    <div className="limits-content">
      <p>
        {productionChoice.mode === 'region'
          ? 'Regione: ' + region?.name + '. '
          : 'Resa del preventivo. '}
        Resa {fmt0(input.irraggiamento)} kWh/kWp/anno. Potenza {fmt2(input.kwp)} kWp. Produzione
        relativa {fmt0(input.scenario * 100)}%. Autoconsumo {fmt0(input.quotaAutoconsumo * 100)}%
        della produzione, limitato al consumo: {kwh(result.autoconsumo)}, il{' '}
        {fmt1pct((result.autoconsumo / input.consumoKwh) * 100)} del fabbisogno.
      </p>
      <p>
        Prezzi: {eur(input.prezzoEvitato)}/kWh evitato; {eur(input.prezzoVendita)}/kWh immesso.
        Detrazione {fmt0(input.aliquotaDetrazione * 100)}%, ipotizzata su 10 anni e non verificata.{' '}
        {input.manutenzioneAnnua === 0
          ? 'Costi ricorrenti esclusi.'
          : 'Costi ricorrenti ' + eur(input.manutenzioneAnnua) + '/anno.'}
      </p>
      <p>
        {productionChoice.mode === 'region'
          ? 'Resa: elaborazione SunSize su PVGIS 5.3/SARAH3 (2005–2023), sud, 30°, perdite di sistema 14% già comprese. La media regionale non descrive il singolo tetto. '
          : ''}
        Rientro semplice, non un rendimento percentuale; nessuna attualizzazione, finanziamento,
        inflazione, degrado o sostituzione straordinaria. Quote fiscali attribuite a fine anno,
        rientro frazionario interpolato.
      </p>
      <p>
        Orari:{' '}
        {
          {
            unknown: 'non noti',
            evening: 'soprattutto serali',
            mixed: 'distribuiti nella giornata',
            daytime: 'soprattutto diurni',
          }[usageContext.timing]
        }
        . Batteria:{' '}
        {
          {
            unknown: 'da valutare',
            yes: 'prevista, non simulata',
            no: 'non prevista',
          }[usageContext.battery]
        }
        . Nessuna simulazione oraria. Prezzi e produzione costanti; aliquota, spese ammesse,
        massimali e capienza fiscale da verificare. La spesa annua non coincide con il risparmio.
      </p>
      <details className="help-details">
        <summary>Formule del calcolo</summary>
        <p>
          Produzione = kWp × resa × produzione relativa. Autoconsumo = min(produzione × quota,
          consumo). Immessa = produzione − autoconsumo. Saldo = − costo completo + risparmi + ricavi
          + quote fiscali − costi ricorrenti cumulati. Il recupero fiscale termina dopo 10 anni. Il
          rientro è il primo saldo non negativo entro 50 anni; i flussi successivi possono cambiare.
        </p>
      </details>
    </div>
  );
}
export function ResultsSupport({
  view,
  input,
  result,
  productionChoice,
  usageContext,
  onBack,
}: ResultData & {
  view: 'flows' | 'scenarios' | 'limits';
  onBack: () => void;
}) {
  return (
    <section className={`panel helper-panel ${view === 'flows' ? 'wide-helper' : ''}`}>
      <h1 id="step-title" tabIndex={-1}>
        {view === 'flows'
          ? 'Flussi anno per anno'
          : view === 'scenarios'
            ? 'Scenari: autoconsumo e prezzi'
            : 'Ipotesi e limiti'}
      </h1>
      {view === 'flows' ? (
        <CashFlowTable input={input} comparison={calcolaConfrontoFiscale(input)} />
      ) : view === 'scenarios' ? (
        <SensitivityScenarios input={input} />
      ) : (
        <ResultLimits
          input={input}
          result={result}
          productionChoice={productionChoice}
          usageContext={usageContext}
        />
      )}
      <button type="button" className="back-link" onClick={onBack}>
        ← Torna ai risultati
      </button>
    </section>
  );
}
