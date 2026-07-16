import { cn } from '@/lib/utils';
import { STEP_LABELS } from '@/lib/types';

type StepProgressProps = {
  current: number;
  className?: string;
};

export function StepProgress({ current, className }: StepProgressProps) {
  const progress = ((current - 1) / (STEP_LABELS.length - 1)) * 100;

  return (
    <div
      className={cn(
        'sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md',
        className,
      )}
      aria-label={`Passo ${current} di ${STEP_LABELS.length}`}
    >
      <div className="mx-auto max-w-3xl px-4 py-3">
        <div className="mb-2 flex items-center justify-between gap-2">
          {STEP_LABELS.map((label, index) => {
            const n = index + 1;
            const done = n < current;
            const active = n === current;
            return (
              <div key={label} className="flex min-w-0 flex-1 flex-col items-center gap-1">
                <div
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-200',
                    done && 'bg-[#0F766E] text-white',
                    active && 'scale-110 bg-[#0F766E] text-white shadow-md ring-2 ring-[#0F766E]/30',
                    !done && !active && 'bg-slate-100 text-slate-400',
                  )}
                >
                  {done ? '✓' : n}
                </div>
                <span
                  className={cn(
                    'max-w-full truncate text-[10px] font-semibold sm:text-xs',
                    active ? 'text-[#0F766E]' : 'text-slate-500',
                  )}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#0F766E] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
