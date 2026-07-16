'use client';

import { FileUp, Upload } from 'lucide-react';
import { useCallback, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type UploadState = 'idle' | 'loading' | 'success' | 'error';

type BillUploadDropzoneProps = {
  onFile: (file: File) => void;
  state: UploadState;
  progress?: number;
  errorMessage?: string;
  fileName?: string;
  disabled?: boolean;
};

export function BillUploadDropzone({
  onFile,
  state,
  errorMessage,
  fileName,
  disabled,
}: BillUploadDropzoneProps) {
  const hintId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback(
    (file?: File) => {
      if (!file || disabled) return;
      if (file.size > 10 * 1024 * 1024) {
        onFile(Object.assign(file, { __tooLarge: true } as Partial<File>) as File);
        return;
      }
      onFile(file);
    },
    [disabled, onFile],
  );

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Carica bolletta elettrica in PDF o immagine"
      aria-describedby={`${hintId}-hint`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragEnter={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        handleFile(e.dataTransfer.files[0]);
      }}
      onClick={() => !disabled && inputRef.current?.click()}
      className={cn(
        'flex min-h-[200px] cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2',
        dragOver
          ? 'border-[#0F766E] bg-teal-50 shadow-md'
          : 'border-teal-200 bg-gradient-to-br from-teal-50/50 to-white hover:border-[#0D9488] hover:shadow-sm',
        disabled && 'pointer-events-none opacity-60',
      )}
    >
      <input
        ref={inputRef}
        id={hintId}
        type="file"
        className="sr-only"
        accept=".pdf,.png,.jpg,.jpeg,.webp,.txt,application/pdf,image/*,text/plain"
        capture="environment"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E]">
        <Upload className="h-7 w-7" aria-hidden />
      </div>
      <div>
        <p className="text-base font-semibold text-slate-800">
          {state === 'loading' ? 'Analisi in corso…' : fileName ? fileName : 'Trascina qui la bolletta'}
        </p>
        <p id={`${hintId}-hint`} className="mt-1 text-sm text-slate-500">
          PDF, foto o TXT — max 10 MB. Tocca per aprire la fotocamera.
        </p>
        {errorMessage && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
      </div>
      <span className="inline-flex items-center gap-2 text-xs font-medium text-[#0F766E]">
        <FileUp className="h-4 w-4" aria-hidden />
        oppure seleziona un file
      </span>
    </div>
  );
}
