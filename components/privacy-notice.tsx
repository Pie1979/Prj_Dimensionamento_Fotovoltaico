import { ShieldCheck } from 'lucide-react';

export function PrivacyNotice() {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-left">
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" aria-hidden />
      <p className="text-xs leading-relaxed text-slate-600">
        <strong className="font-semibold text-slate-800">Privacy garantita.</strong>{' '}
        La bolletta viene analizzata solo sul tuo dispositivo. Nessun dato viene inviato ai server in
        questa versione.
      </p>
    </div>
  );
}
