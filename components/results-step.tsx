'use client';
import dynamic from 'next/dynamic';
import { ArrowLeft, ArrowRight, TrendingUp, Sun, Home, Zap, RotateCcw } from 'lucide-react';
import { eur, formatPayback, kwh, fmt2 } from '@/lib/format';
import {
  InvestmentComparison,
  CashFlowTable,
  SensitivityScenarios,
} from '@/components/investment-comparison';
import { calcolaConfrontoFiscale } from '@/lib/solar-calc';
import { findRegion, type ProductionChoice } from '@/lib/production-estimate';
import type { SimInput, SimResult, UsageContext } from '@/lib/types';
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

export function ResultsStep({
  input,
  result,
  productionChoice,
  usageContext,
  onEdit,
  onRestart,
}: {
  input: SimInput;
  result: SimResult;
  productionChoice: ProductionChoice;
  usageContext: UsageContext;
  onEdit: (target?: string) => void;
  onRestart: () => void;
}) {
  const comparison = calcolaConfrontoFiscale(input);
  const selectedRegion = findRegion(productionChoice.regionCode);
  const payback = result.payback.reached
    ? formatPayback(result.payback.years)
    : 'Non raggiunto entro 50 anni';
  const benefitRows = [
    {
      label: 'Risparmio sulla bolletta',
      value: result.risparmio,
      detail: `${kwh(result.autoconsumo)} autoconsumati × ${eur(input.prezzoEvitato)}/kWh`,
      className: 'teal',
    },
    {
      label: 'Ricavi dall’energia immessa',
      value: result.ricavoGse,
      detail: `${kwh(result.sovrapproduzione)} immessi × ${eur(input.prezzoVendita)}/kWh`,
      className: 'blue',
    },
    {
      label: 'Recupero fiscale annuo',
      value: result.quotaDetrazione,
      detail:
        input.aliquotaDetrazione > 0
          ? `${Math.round(input.aliquotaDetrazione * 100)}% di ${eur(input.costoImpianto)} ÷ 10 anni, se spettante`
          : 'Nessuna detrazione inclusa',
      className: 'amber',
    },
    {
      label: 'Costi ricorrenti',
      value: -input.manutenzioneAnnua,
      detail:
        input.manutenzioneAnnua > 0
          ? 'Importo annuale inserito nelle ipotesi'
          : 'Esclusi dalla simulazione: importo impostato a zero',
      className: 'muted',
    },
  ];
  return (
    <div className="panel results-panel">
      <span className="eyebrow">La tua simulazione, spiegata</span>
      <h1 id="step-title" tabIndex={-1}>
        I numeri del tuo impianto
      </h1>
      <p className="intro">Una stima basata sui dati e sulle ipotesi che hai scelto.</p>
      <section className="payback-card" aria-labelledby="payback-title">
        <span className="result-tag">
          <TrendingUp size={15} aria-hidden="true" /> Stima indicativa
        </span>
        <h2 id="payback-title">Tempo di rientro stimato</h2>
        <p className="payback-number">{payback}</p>
        <p>
          Partendo dall’esborso iniziale completo di <strong>{eur(input.costoImpianto)}</strong>.
        </p>
        <p className="fiscal-note">
          {input.aliquotaDetrazione > 0
            ? 'La detrazione è recuperata nei primi 10 anni, se spettante.'
            : 'Il calcolo non include detrazioni fiscali.'}
        </p>
        {input.manutenzioneAnnua === 0 && (
          <p className="fiscal-note">
            Rientro prima di manutenzione e altri costi esclusi. Puoi inserirli nelle ipotesi.
          </p>
        )}
      </section>
      <button className="back-link quick-edit" type="button" onClick={() => onEdit()}>
        Modifica le ipotesi e ricalcola →
      </button>
      <InvestmentComparison input={input} comparison={comparison} onEdit={onEdit} />
      <section aria-labelledby="benefits-title">
        <h2 id="benefits-title">Da dove arrivano i benefici</h2>
        <p className="section-caption">Importi annuali nello scenario scelto</p>
        <div className="benefit-list">
          {benefitRows.map((row) => (
            <div className="benefit-row" key={row.label}>
              <span className={`benefit-dot ${row.className}`} />
              <div>
                <strong>{row.label}</strong>
                <p>{row.detail}</p>
              </div>
              <span className="benefit-value">
                {row.value > 0 ? '+' : ''}
                {eur(row.value === 0 ? 0 : row.value)}
              </span>
            </div>
          ))}
        </div>
        <div className="benefit-total">
          <div>
            <strong>
              {input.manutenzioneAnnua === 0
                ? 'Beneficio annuo prima dei costi esclusi'
                : 'Beneficio annuo dopo i costi inseriti'}
            </strong>
            <span>
              {input.aliquotaDetrazione > 0
                ? 'Nei primi 10 anni, inclusa la quota fiscale'
                : 'Risparmio + ricavi − costi ricorrenti'}
            </span>
          </div>
          <strong>{eur(result.beneficioTotale10)}</strong>
        </div>
        {input.aliquotaDetrazione > 0 && (
          <p className="field-hint">
            Dall’11° anno, terminata la detrazione: {eur(result.beneficioOperativo)}/anno.
          </p>
        )}
      </section>
      <section className="energy-section" aria-labelledby="energy-title">
        <h2 id="energy-title">Come si distribuisce l’energia</h2>
        <div className="energy-grid">
          {[
            { icon: Sun, label: 'Prodotta', value: result.produzioneLorda },
            { icon: Home, label: 'Usata in casa', value: result.autoconsumo },
            { icon: Zap, label: 'Immessa in rete', value: result.sovrapproduzione },
          ].map((item) => (
            <div className="energy-card" key={item.label}>
              <item.icon size={20} aria-hidden="true" />
              <span>{item.label}</span>
              <strong>{kwh(item.value)}</strong>
            </div>
          ))}
        </div>
        <p className="field-hint">
          Energia ancora da acquistare: {kwh(input.consumoKwh - result.autoconsumo)}/anno. La
          produzione annua non coincide con l’autonomia dalla rete.
        </p>
      </section>
      <section className="chart-section" aria-labelledby="chart-title">
        <h2 id="chart-title">Quando recuperi l’investimento?</h2>
        <p className="section-caption">
          Il saldo parte da −{eur(input.costoImpianto)}. Il pareggio è il punto in cui raggiunge
          zero.
        </p>
        <PaybackChart
          result={result}
          withoutTax={comparison.senzaDetrazione}
          hasTax={input.aliquotaDetrazione > 0}
        />
        <p className="chart-summary">
          Saldo stimato a 10 anni: <strong>{eur(result.saldo10)}</strong>.{' '}
          {result.payback.years > 15
            ? 'Il rientro stimato è oltre i 15 anni mostrati nel grafico.'
            : ''}
        </p>
        <CashFlowTable input={input} comparison={comparison} />
      </section>
      <SensitivityScenarios input={input} />
      <p className="field-hint">
        Contesto dichiarato:{' '}
        {usageContext.timing === 'evening'
          ? 'consumi soprattutto serali'
          : usageContext.timing === 'daytime'
            ? 'consumi soprattutto diurni'
            : usageContext.timing === 'mixed'
              ? 'consumi distribuiti nella giornata'
              : 'orari non noti'}
        ;{' '}
        {usageContext.battery === 'yes'
          ? 'batteria prevista, non simulata'
          : usageContext.battery === 'no'
            ? 'senza batteria'
            : 'batteria da valutare'}
        . La quota di autoconsumo resta un’ipotesi esplicita:{' '}
        {Math.round(input.quotaAutoconsumo * 100)}% della produzione, equivalente al{' '}
        {Math.round((result.autoconsumo / input.consumoKwh) * 100)}% dei consumi.
      </p>
      <p className="field-hint">
        Origine della resa:{' '}
        {productionChoice.mode === 'region'
          ? `${selectedRegion?.name ?? '—'} · elaborazione SunSize su PVGIS 5.3 (2005–2023), sud, 30°, perdite di sistema 14%`
          : 'valore del preventivo inserito dall’utente'}
        .{' '}
        {productionChoice.mode === 'region'
          ? 'La media regionale non descrive il singolo tetto.'
          : ''}
      </p>
      <details className="assumptions">
        <summary>
          Ipotesi, formule e limiti <span>Leggi</span>
        </summary>
        <div className="assumptions-content">
          <dl className="formula-list">
            <div>
              <dt>Produzione annua</dt>
              <dd>
                {fmt2(input.kwp)} kWp × {input.irraggiamento} kWh/kWp/anno ×{' '}
                {Math.round(input.scenario * 100)}%
              </dd>
            </div>
            <div>
              <dt>Autoconsumo</dt>
              <dd>
                Il minore tra produzione × {Math.round(input.quotaAutoconsumo * 100)}% e consumo
                annuo. È un’approssimazione annuale, senza simulazione oraria o della batteria.
              </dd>
            </div>
            <div>
              <dt>Energia immessa</dt>
              <dd>Produzione − autoconsumo.</dd>
            </div>
            <div>
              <dt>Saldo dell’investimento</dt>
              <dd>
                − costo totale + risparmi cumulati + ricavi cumulati + detrazioni maturate − costi
                ricorrenti cumulati.
              </dd>
            </div>
          </dl>
          <p>
            Prezzi e produzione restano costanti nel tempo. Non sono modellati inflazione,
            finanziamento, degrado dei pannelli, sostituzione dell’inverter e variazioni normative.{' '}
            {input.manutenzioneAnnua === 0 ? 'Manutenzione e assicurazione non sono incluse.' : ''}{' '}
            Il rientro è semplice, senza attualizzazione; la quota fiscale è attribuita a fine anno
            e il rientro frazionario è interpolato.
          </p>
          <p>
            La detrazione è un’ipotesi inserita dall’utente: verifica aliquota, limiti di spesa,
            requisiti e capienza fiscale. La spesa annua della bolletta è un riferimento; i costi
            fissi non sono considerati evitati.
          </p>
        </div>
      </details>
      <button type="button" className="button primary" onClick={() => onEdit()}>
        Modifica dati e confronta <ArrowRight size={18} aria-hidden="true" />
      </button>
      <div className="result-actions">
        <button type="button" className="back-link" onClick={() => onEdit()}>
          <ArrowLeft size={16} aria-hidden="true" /> Torna all’impianto
        </button>
        <button type="button" className="back-link" onClick={onRestart}>
          <RotateCcw size={15} aria-hidden="true" /> Nuova simulazione
        </button>
      </div>
    </div>
  );
}
