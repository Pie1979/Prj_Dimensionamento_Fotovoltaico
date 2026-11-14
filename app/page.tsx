'use client';
import { useEffect, useRef, useState } from 'react';
import {
  INITIAL_PRODUCTION_CHOICE,
  resolveProductionYield,
  type ProductionChoice,
} from '@/lib/production-estimate';
import { ConsumptionStep } from '@/components/consumption-step';
import { PlantStep } from '@/components/plant-step';
import { ResultsStep, ResultsSupport } from '@/components/results-step';
import { StepProgress } from '@/components/step-progress';
import {
  AnnualizeView,
  AssumptionView,
  RegionalSource,
  PrivacyView,
  type SupportView,
} from '@/components/support-views';
import { calcolaSimulazione, isValidSimulation } from '@/lib/solar-calc';
import {
  DEFAULT_INPUT,
  DEFAULT_USAGE_CONTEXT,
  type UsageContext,
  type SimInput,
} from '@/lib/types';
import type { AnnualEstimate } from '@/lib/annualize';
const introductions = [
  [
    'IL FOTOVOLTAICO, CON CHIAREZZA',
    'Il tuo sole. I tuoi numeri.',
    'Parti dai tuoi consumi. Comprendi il tuo investimento.',
  ],
  [
    '02 / IL TUO IMPIANTO',
    'Un impianto, le tue abitudini.',
    'Parti dal preventivo e controlla le ipotesi prima del calcolo.',
  ],
  [
    '03 / RISULTATI',
    'I numeri del tuo impianto.',
    'Una stima spiegata, non una promessa di rendimento.',
  ],
];
export default function HomePage() {
  const [step, setStep] = useState(1);
  const [view, setView] = useState<SupportView | null>(null);
  const [input, setInput] = useState<SimInput>({ ...DEFAULT_INPUT });
  const [productionChoice, setProductionChoice] = useState<ProductionChoice>({
    ...INITIAL_PRODUCTION_CHOICE,
  });
  const [usageContext, setUsageContext] = useState<UsageContext>({
    ...DEFAULT_USAGE_CONTEXT,
  });
  const [annualEstimate, setAnnualEstimate] = useState<AnnualEstimate | null>(null);
  const invoker = useRef<string | null>(null);
  const returnFocus = useRef(false);
  const initial = useRef(true);
  const patch = (values: Partial<SimInput>) => setInput((current) => ({ ...current, ...values }));
  const result = isValidSimulation(input) ? calcolaSimulazione(input) : null;
  function openView(next: SupportView) {
    invoker.current =
      document.activeElement instanceof HTMLElement ? document.activeElement.id : null;
    setView(next);
  }
  function closeView() {
    returnFocus.current = true;
    setView(null);
  }
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    if (!view && returnFocus.current) {
      returnFocus.current = false;
      const target = invoker.current && document.getElementById(invoker.current);
      if (target) {
        target.focus();
        return;
      }
    }
    document.getElementById('step-title')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [step, view]);
  const intro = introductions[step - 1];
  return (
    <div className={`app-shell step-${step}`}>
      <a className="skip-link" href="#main-content">
        Vai alla simulazione
      </a>
      <header className="site-header">
        <a href="#main-content" className="wordmark" aria-label="SunSize, simulatore fotovoltaico">
          SunSize
        </a>
        <span className="maker">
          <span className="desktop-maker">by </span>PCODING
          <span className="desktop-maker"> Software</span>
        </span>
      </header>
      <main id="main-content" className="main-layout">
        {!view ? (
          <>
            <StepProgress current={step} onNavigate={setStep} />
            <div className="page-intro">
              <span className="eyebrow">{intro[0]}</span>
              {step === 1 ? (
                <>
                  <h2>
                    <span>Il tuo sole.</span> <span>I tuoi numeri.</span>
                  </h2>
                  <p>{intro[2]}</p>
                </>
              ) : (
                <>
                  <h1 id="step-title" tabIndex={-1}>
                    {intro[1]}
                  </h1>
                  <p>{intro[2]}</p>
                </>
              )}
            </div>
            {step === 1 && (
              <ConsumptionStep
                input={input}
                annualEstimate={annualEstimate}
                onEstimate={() => openView('annualize')}
                onChange={patch}
                onContinue={() => {
                  if (
                    input.consumoKwh > 0 &&
                    input.spesaAnnua > 0 &&
                    Number.isFinite(input.consumoKwh) &&
                    Number.isFinite(input.spesaAnnua)
                  )
                    setStep(2);
                }}
              />
            )}
            {step === 2 && (
              <PlantStep
                input={input}
                productionChoice={productionChoice}
                usageContext={usageContext}
                onUsageChange={setUsageContext}
                onProductionChange={(choice) => {
                  setProductionChoice(choice);
                  patch({ irraggiamento: resolveProductionYield(choice) });
                }}
                onChange={patch}
                onOpen={openView}
                onCalculate={() => {
                  if (isValidSimulation(input)) setStep(3);
                }}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && result && (
              <ResultsStep
                input={input}
                result={result}
                productionChoice={productionChoice}
                usageContext={usageContext}
                annualEstimate={annualEstimate}
                onOpen={openView}
                onEdit={(target) => {
                  if (target === 'detrazione' || target === 'manutenzione') openView('economics');
                  else setStep(2);
                }}
                onRestart={() => {
                  if (
                    window.confirm(
                      'Vuoi iniziare una nuova simulazione? I dati inseriti verranno cancellati.',
                    )
                  ) {
                    setInput({ ...DEFAULT_INPUT });
                    setProductionChoice({ ...INITIAL_PRODUCTION_CHOICE });
                    setUsageContext({ ...DEFAULT_USAGE_CONTEXT });
                    setAnnualEstimate(null);
                    setStep(1);
                  }
                }}
              />
            )}
          </>
        ) : (
          <>
            {view === 'annualize' && (
              <AnnualizeView
                previous={annualEstimate}
                onSave={(estimate) => {
                  patch({
                    consumoKwh: estimate.annualConsumption,
                    spesaAnnua: estimate.annualSpending,
                  });
                  setAnnualEstimate(estimate);
                  closeView();
                }}
                onCancel={closeView}
              />
            )}
            {(view === 'quota' || view === 'economics') && (
              <AssumptionView
                key={view}
                kind={view}
                input={input}
                onSave={(values) => {
                  patch(values);
                  closeView();
                }}
                onCancel={closeView}
              />
            )}
            {view === 'source' && <RegionalSource onBack={closeView} />}
            {view === 'privacy' && <PrivacyView onBack={closeView} />}
            {(view === 'flows' || view === 'scenarios' || view === 'limits') && result && (
              <ResultsSupport
                view={view}
                input={input}
                result={result}
                productionChoice={productionChoice}
                usageContext={usageContext}
                onBack={closeView}
              />
            )}
          </>
        )}
      </main>
      <footer className="site-footer">
        <p>SunSize · PCODING Software</p>
        <p>Simulazione indicativa, non un preventivo.</p>
        {(!view || view === 'privacy') && (
          <button
            type="button"
            id="privacy-link"
            className="footer-link"
            onClick={() => (view === 'privacy' ? closeView() : openView('privacy'))}
          >
            Dati e funzionamento
          </button>
        )}
      </footer>
    </div>
  );
}
