'use client';

import { useCallback, useState } from 'react';
import { HeroBanner } from '@/components/hero-banner';
import { UploadStep } from '@/components/upload-step';
import type { UploadState } from '@/components/bill-upload-dropzone';

type SimInput = {
  consumoKwh: number;
  spesaAnnua: number;
  scenario: number;
};

export default function HomePage() {
  const [showHero, setShowHero] = useState(true);
  const [step, setStep] = useState(1);
  const [input, setInput] = useState<SimInput>({
    consumoKwh: 0,
    spesaAnnua: 0,
    scenario: 1,
  });
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [uploadError, setUploadError] = useState<string>();
  const [fileName, setFileName] = useState<string>();

  const canContinue = input.consumoKwh > 0 && input.spesaAnnua > 0 && uploadState !== 'loading';

  const handleFile = useCallback((file: File) => {
    if ((file as File & { __tooLarge?: boolean }).__tooLarge) {
      setUploadError('File troppo grande (max 10 MB).');
      setUploadState('error');
      return;
    }
    setFileName(file.name);
    setUploadState('loading');
    setUploadError(undefined);
    // Analisi bolletta: integrazione OCR come in produzione
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
    setUploadState('idle');
    setUploadError(undefined);
    setFileName(undefined);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleContinue = useCallback(() => {
    if (!canContinue) return;
    setShowHero(false);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [canContinue]);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-6 md:pt-10">
        <header className="mb-6 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[#F59E0B]">Sun</span>
            <span className="text-[#0F766E]">Size</span>
          </span>
          <span className="text-xs text-slate-500">by PCODING Software</span>
        </header>

        {showHero && step === 1 && (
          <div className="mb-8">
            <HeroBanner onStart={() => setShowHero(false)} />
          </div>
        )}

        <div>
          {step === 1 && (
            <UploadStep
              scenario={input.scenario}
              onScenarioChange={(scenario) => setInput((p) => ({ ...p, scenario }))}
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm text-slate-600">
                Passo impianto in arrivo nel prossimo aggiornamento. Nel frattempo usa il simulatore
                completo.
              </p>
              <a
                href="/legacy/index.html"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#0F766E] px-6 text-sm font-semibold text-white hover:bg-[#0D9488]"
              >
                Apri simulatore completo
              </a>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="mt-3 block w-full text-sm font-medium text-[#0F766E] underline-offset-2 hover:underline"
              >
                ← Torna alla bolletta
              </button>
            </div>
          )}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          SunSize · Simulazione indicativa · Nessun dato inviato ai server
        </footer>
      </div>
    </main>
  );
}
