'use client';

import { PenLine } from 'lucide-react';
import { actionBtnBase, actionBtnTitleRow, cn } from '@/lib/utils';

type UploadStepActionsProps = {
  onManualEntry: () => void;
  onContinue: () => void;
  canContinue: boolean;
};

export function UploadStepActions({
  onManualEntry,
  onContinue,
  canContinue,
}: UploadStepActionsProps) {
  return (
    <div className="grid gap-3 sm:flex sm:flex-row sm:gap-3">
      <button
        type="button"
        onClick={onManualEntry}
        className={cn(
          actionBtnBase,
          'border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
        )}
      >
        <span className={actionBtnTitleRow}>
          <PenLine className="h-5 w-5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
          Inserisci tu i valori
        </span>
        <span className="text-xs font-normal text-slate-500 sm:hidden">
          Compila consumo e spesa a mano
        </span>
      </button>

      <button
        type="button"
        onClick={onContinue}
        disabled={!canContinue}
        className={cn(
          actionBtnBase,
          'border-transparent bg-[#0F766E] text-white shadow-md hover:bg-[#0D9488] disabled:pointer-events-none disabled:opacity-40',
        )}
      >
        <span className={actionBtnTitleRow}>
          {/* Spacer uguale all&apos;icona del pulsante sopra → stessa altezza riga titolo */}
          <span className="inline-block h-5 w-5 shrink-0 sm:hidden" aria-hidden />
          Analizza e continua
        </span>
        <span className="text-xs font-normal text-white/80 sm:hidden">
          {canContinue ? 'Vai al dimensionamento impianto' : 'Carica prima la bolletta'}
        </span>
      </button>
    </div>
  );
}
