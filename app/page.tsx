'use client';

import { useCallback, useMemo, useState } from 'react';
import { HeroBanner } from '@/components/hero-banner';
import { PlantStep } from '@/components/plant-step';
import { ResultsStep } from '@/components/results-step';
import { StepProgress } from '@/components/step-progress';
import { UploadStep } from '@/components/upload-step';
import type { UploadState } from '@/components/bill-upload-dropzone';
import { calcolaSimulazione } from '@/lib/solar-calc';
import { DEFAULT_INPUT, type SimInput } from '@/lib/types';

export default function HomePage() {
  const [showHero, setShowHero] = useState(true);
  const [step, setStep] = useState(1);
  const [manualMode, setManualMode] = useState(false);
  const [input, setInput] = useState<SimInput>({ ...DEFAULT_INPUT });
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [uploadError, setUploadError] = useState<string>();
  const [fileName, setFileName] = useState<string>();

  const canContinue =
    input.consumoKwh > 0 && input.spesaAnnua > 0 && uploadState !== 'loading';

  const canCalculate =
    input.consumoKwh > 0 &&
    input.spesaAnnua > 0 &&
    input.kwp > 0 &&
    input.costoImpianto > 0 &&
    input.irraggiamento > 0;

  const result = useMemo(() => calcolaSimulazione(input), [input]);

  const patchInput = useCallback((patch: Partial<SimInput>) => {
    setInput((prev) => ({ ...prev, ...patch }));
  }, []);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRestart = useCallback(() => {
    setInput({ ...DEFAULT_INPUT });
    setStep(1);
    setShowHero(true);
    setManualMode(false);
    setUploadState('idle');
    setUploadError(undefined);
    setFileName(undefined);
    scrollTop();
  }, [scrollTop]);

  const handleFile = useCallback((file: File) => {
    if ((file as File & { __tooLarge?: boolean }).__tooLarge) {
      setUploadError('File troppo grande (max 10 MB).');
      setUploadState('error');
      return;
    }
    setFileName(file.name);
    setUploadState('loading');
    setUploadError(undefined);
    setTimeout(() => {
      setUploadState('success');
      setInput((prev) => ({
        ...prev,
        consumoKwh: prev.consumoKwh || 2301,
        spesaAnnua: prev.spesaAnnua || 892.92,
      }));
    }, 800);
  }, []);

  const handleManualEntry = useCallback(() => {
    setShowHero(false);
    setManualMode(true);
    setUploadState('idle');
    setUploadError(undefined);
    setFileName(undefined);
    setStep(2);
    scrollTop();
  }, [scrollTop]);

  const handleContinue = useCallback(() => {
    if (!canContinue) return;
    setShowHero(false);
    setManualMode(false);
    setStep(2);
    scrollTop();
  }, [canContinue, scrollTop]);

  const handleCalculate = useCallback(() => {
    if (!canCalculate) return;
    setStep(3);
    scrollTop();
  }, [canCalculate, scrollTop]);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-6 md:pt-10">
        <header className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={step > 1 ? handleRestart : undefined}
            className={step > 1 ? 'text-left transition-opacity hover:opacity-80' : 'text-left'}
            aria-label={step > 1 ? 'Torna alla home SunSize' : 'SunSize'}
          >
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[#F59E0B]">Sun</span>
              <span className="text-[#0F766E]">Size</span>
            </span>
          </button>
          <span className="text-xs text-slate-500">by PCODING Software</span>
        </header>

        {showHero && step === 1 && (
          <div className="mb-8">
            <HeroBanner onStart={() => setShowHero(false)} />
          </div>
        )}

        {(step > 1 || !showHero) && <StepProgress current={step} className="-mx-4 mb-6" />}

        <div>
          {step === 1 && (
            <UploadStep
              scenario={input.scenario}
              onScenarioChange={(scenario) => patchInput({ scenario })}
              uploadState={uploadState}
              uploadError={uploadError}
              fileName={fileName}
              onFile={handleFile}
              onManualEntry={handleManualEntry}
              onContinue={handleContinue}
              canContinue={canContinue}
            />
          )}

          {step === 2 && (
            <>
              <PlantStep
                input={input}
                manualMode={manualMode}
                onChange={patchInput}
                onCalculate={handleCalculate}
                canCalculate={canCalculate}
              />
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  scrollTop();
                }}
                className="mt-6 text-sm font-medium text-[#0F766E] underline-offset-2 hover:underline"
              >
                ← Torna alla bolletta
              </button>
            </>
          )}

          {step === 3 && (
            <ResultsStep
              input={input}
              result={result}
              onScenarioChange={(scenario) => patchInput({ scenario })}
              onRestart={handleRestart}
            />
          )}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          SunSize · Simulazione indicativa · Nessun dato inviato ai server
        </footer>
      </div>
    </main>
  );
}
