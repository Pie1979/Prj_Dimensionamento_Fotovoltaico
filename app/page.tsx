'use client';
import { useEffect, useRef, useState } from 'react';
import { Sun, ShieldCheck } from 'lucide-react';
import {
  INITIAL_PRODUCTION_CHOICE,
  resolveProductionYield,
  type ProductionChoice,
} from '@/lib/production-estimate';
import { ConsumptionStep } from '@/components/consumption-step';
import { PlantStep } from '@/components/plant-step';
import { ResultsStep } from '@/components/results-step';
import { StepProgress } from '@/components/step-progress';
import { calcolaSimulazione, isValidSimulation } from '@/lib/solar-calc';
import {
  DEFAULT_INPUT,
  DEFAULT_USAGE_CONTEXT,
  type UsageContext,
  type SimInput,
} from '@/lib/types';

export default function HomePage() {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState<SimInput>({ ...DEFAULT_INPUT });
  const [productionChoice, setProductionChoice] = useState<ProductionChoice>({
    ...INITIAL_PRODUCTION_CHOICE,
  });
  const [usageContext, setUsageContext] = useState<UsageContext>({ ...DEFAULT_USAGE_CONTEXT });
  const editTarget = useRef<string | undefined>(undefined);
  const previousStep = useRef(1);
  const patch = (values: Partial<SimInput>) => setInput((current) => ({ ...current, ...values }));
  const result = isValidSimulation(input) ? calcolaSimulazione(input) : null;
  useEffect(() => {
    if (previousStep.current === step) return;
    previousStep.current = step;
    if (step === 2 && editTarget.current) {
      const field = document.getElementById(editTarget.current);
      const details = field?.closest('details');
      if (details) details.open = true;
      field?.focus();
      field?.scrollIntoView({ block: 'center' });
      editTarget.current = undefined;
      return;
    }
    document.getElementById('step-title')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [step]);
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Vai alla simulazione
      </a>
      <header className="site-header">
        <a href="#main-content" className="wordmark" aria-label="SunSize, simulatore fotovoltaico">
          <span className="logo-icon">
            <Sun size={24} aria-hidden="true" />
          </span>
          <span>
            Sun<span className="brand-color">Size</span>
          </span>
        </a>
        <span className="maker">by PCODING Software</span>
      </header>
      <main id="main-content" className="main-layout">
        <aside className="page-context">
          <span className="eyebrow">Il fotovoltaico, con chiarezza</span>
          <h2>
            Parti dai tuoi consumi.
            <br /> Comprendi il tuo investimento.
          </h2>
          <p>Una simulazione trasparente per esplorare produzione, benefici e tempo di rientro.</p>
          <div className="context-line" />
          <div className="context-item">
            <span>01</span>
            <p>
              <strong>Dati che conosci</strong>Consumi e spesa dalla tua bolletta.
            </p>
          </div>
          <div className="context-item">
            <span>02</span>
            <p>
              <strong>Ipotesi che controlli</strong>Produzione, autoconsumo e prezzi.
            </p>
          </div>
          <div className="context-item">
            <span>03</span>
            <p>
              <strong>Risultati spiegati</strong>Ogni beneficio ha una formula.
            </p>
          </div>
          <p className="privacy-line">
            <ShieldCheck size={18} aria-hidden="true" /> Calcolo nel browser, senza registrazione.
          </p>
        </aside>
        <div className="wizard">
          <StepProgress current={step} onNavigate={setStep} />
          {step === 1 && (
            <ConsumptionStep
              input={input}
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
              onEdit={(target) => {
                editTarget.current = target;
                setStep(2);
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
                  setStep(1);
                }
              }}
            />
          )}
        </div>
      </main>
      <footer className="site-footer">
        <span>SunSize · PCODING Software</span>
        <span>Simulazione indicativa, non un preventivo.</span>
      </footer>
    </div>
  );
}
