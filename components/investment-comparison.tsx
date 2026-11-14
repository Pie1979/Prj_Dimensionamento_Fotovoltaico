'use client';
import { eur, fmt3, formatPayback } from '@/lib/format';
import { calcolaConfrontoFiscale, calcolaScenariSensibilita } from '@/lib/solar-calc';
import type { SimInput } from '@/lib/types';

export function paybackText(result: ReturnType<typeof calcolaConfrontoFiscale>['senzaDetrazione']) {
  return result.payback.reached
    ? formatPayback(result.payback.years)
    : 'Non raggiunto entro 50 anni';
}

export function InvestmentComparison({
  input,
  comparison,
  onEdit,
}: {
  input: SimInput;
  comparison: ReturnType<typeof calcolaConfrontoFiscale>;
  onEdit: (target?: string) => void;
}) {
  const hasTax = input.aliquotaDetrazione > 0;
  return (
    <section className="fiscal-comparison" aria-labelledby="fiscal-comparison-title">
      <h2 id="fiscal-comparison-title">Quanto incide la detrazione?</h2>
      <p className="section-caption">
        Stesso investimento, stessa energia e stessi costi. Cambia solo il recupero fiscale
        ipotizzato.
      </p>
      <div className="comparison-grid">
        <div className="comparison-card">
          <h3>Senza detrazione</h3>
          <strong>{paybackText(comparison.senzaDetrazione)}</strong>
          <p>{eur(comparison.senzaDetrazione.beneficioOperativo)}/anno dopo i costi inseriti.</p>
        </div>
        <div className="comparison-card with-tax">
          <h3>Con la detrazione ipotizzata</h3>
          {hasTax ? (
            <>
              <strong>{paybackText(comparison.conDetrazione)}</strong>
              <p>
                Aliquota inserita: {Math.round(input.aliquotaDetrazione * 100)}%. Non è una verifica
                del diritto all’agevolazione.
              </p>
            </>
          ) : (
            <>
              <strong>Da impostare</strong>
              <p>
                Nessuna aliquota presunta. Puoi esplorare un’ipotesi verificata per il tuo caso.
              </p>
            </>
          )}
          <button type="button" className="back-link" onClick={() => onEdit('detrazione')}>
            {hasTax ? 'Modifica ipotesi fiscale →' : 'Imposta ipotesi fiscale →'}
          </button>
        </div>
      </div>
      <div className="fiscal-recovery">
        <p>
          <strong>Esborso iniziale completo: {eur(input.costoImpianto)}</strong>. La detrazione non
          è uno sconto al momento dell’acquisto.
        </p>
        {hasTax && (
          <>
            <p>
              Recupero fiscale totale ipotizzato:{' '}
              <strong>{eur(comparison.conDetrazione.detrazioneTotale)}</strong>, cioè{' '}
              <strong>{eur(comparison.conDetrazione.quotaDetrazione)}/anno per 10 anni</strong>.
            </p>
            <p>
              Beneficio annuo nei primi 10 anni:{' '}
              <strong>{eur(comparison.conDetrazione.beneficioTotale10)}</strong>; dall’11° anno:{' '}
              <strong>{eur(comparison.conDetrazione.beneficioOperativo)}</strong>.
            </p>
          </>
        )}
        <p>
          Ripartizione ipotizzata in 10 anni con recupero integrale delle quote. Verifica aliquota,
          requisiti, spese ammesse, massimali e capienza fiscale. Il rientro usa i flussi annuali e
          non una divisione che prolunghi la detrazione oltre il decimo anno.
        </p>
      </div>
      {input.manutenzioneAnnua === 0 ? (
        <p className="cost-warning">
          Costi ricorrenti esclusi, non necessariamente nulli.{' '}
          <button type="button" onClick={() => onEdit('manutenzione')}>
            Inserisci manutenzione e altri costi →
          </button>
        </p>
      ) : (
        <p className="field-hint">
          Costi ricorrenti inclusi in entrambi i casi: {eur(input.manutenzioneAnnua)}/anno. Le
          sostituzioni straordinarie restano escluse.
        </p>
      )}
    </section>
  );
}

export function CashFlowTable({
  input,
  comparison,
}: {
  input: SimInput;
  comparison: ReturnType<typeof calcolaConfrontoFiscale>;
}) {
  const hasTax = input.aliquotaDetrazione > 0;
  return (
    <details className="help-details cash-flow-details">
      <summary>Come cambia il saldo anno per anno?</summary>
      <div className="table-scroll">
        <table>
          <caption>
            Anno 0: esborso completo. Dal primo anno: risparmio + ricavi − costi inseriti, con
            eventuali quote fiscali nei primi 10 anni. Valori in euro.
          </caption>
          <thead>
            <tr>
              <th scope="col">Anno</th>
              <th scope="col">Risparmio</th>
              <th scope="col">Ricavi</th>
              <th scope="col">Costi / esborso</th>
              <th scope="col">Quota fiscale</th>
              <th scope="col">Saldo senza detrazione</th>
              {hasTax && <th scope="col">Saldo con detrazione</th>}
            </tr>
          </thead>
          <tbody>
            {comparison.flussi.map((row) => (
              <tr key={row.anno}>
                <th scope="row">{row.anno}</th>
                <td>{eur(row.risparmio)}</td>
                <td>{eur(row.ricavi)}</td>
                <td>{eur(row.costi)}</td>
                <td>{eur(row.recuperoFiscale)}</td>
                <td>{eur(row.saldoSenza)}</td>
                {hasTax && <td>{eur(row.saldoCon)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="field-hint">
        Quote fiscali attribuite a fine anno; rientro frazionario interpolato tra due saldi annuali.
        Nessuna attualizzazione dei flussi.
      </p>
    </details>
  );
}

export function SensitivityScenarios({ input }: { input: SimInput }) {
  const scenarios = calcolaScenariSensibilita(input);
  return (
    <details className="assumptions sensitivity">
      <summary>
        Scenari: autoconsumo e prezzi <span>Esplora</span>
      </summary>
      <div className="assumptions-content">
        <p>
          Tre combinazioni illustrative: quota autoconsumata −10 / +10 punti percentuali e prezzi
          dell’energia evitata e venduta −10% / +10%. Produzione, investimento, costi ricorrenti e
          ipotesi fiscale restano invariati. Non sono probabilità, garanzie o un intervallo di
          incertezza completo.
        </p>
        <div className="sensitivity-grid">
          {scenarios.map((s) => (
            <div className="sensitivity-card" key={s.key}>
              <h3>{s.label}</h3>
              <strong>{paybackText(s.result)}</strong>
              <p>
                Autoconsumo ipotizzato: {Math.round(s.input.quotaAutoconsumo * 100)}% della
                produzione, limitato ai consumi annui.
              </p>
              <p>
                Prezzi: {fmt3(s.input.prezzoEvitato)} €/kWh evitato · {fmt3(s.input.prezzoVendita)}{' '}
                €/kWh immesso.
              </p>
              <p>
                Beneficio annuo{input.aliquotaDetrazione > 0 ? ' nei primi 10 anni' : ''}:{' '}
                {eur(s.result.beneficioTotale10)}.
              </p>
            </div>
          ))}
        </div>
        <p>
          Una quota maggiore non implica sempre un vantaggio maggiore: dipende anche dal confronto
          fra prezzo evitato e prezzo di vendita. Modifica le ipotesi per esplorare il tuo caso.
        </p>
      </div>
    </details>
  );
}
