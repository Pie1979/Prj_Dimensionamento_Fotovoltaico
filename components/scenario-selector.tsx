'use client';

import { cn } from '@/lib/utils';

const SCENARIOS = [
  { value: 1, label: '100%', description: 'Produzione reale' },
  { value: 0.8, label: '80%', description: 'Scenario prudente' },
  { value: 0.5, label: '50%', description: 'Scenario pessimistico' },
] as const;

type ScenarioSelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

export function ScenarioSelector({ value, onChange }: ScenarioSelectorProps) {
  return (
    <div role="group" aria-label="Scenario di produzione">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Scenario produzione
      </p>
      <div className="grid grid-cols-3 gap-2">
        {SCENARIOS.map((s) => (
          <button
            key={s.value}
            type="button"
            onClick={() => onChange(s.value)}
            aria-pressed={value === s.value}
            className={cn(
              'min-h-[44px] rounded-xl border-2 px-2 py-2.5 text-sm font-semibold transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2',
              value === s.value
                ? 'border-[#0F766E] bg-[#0F766E] text-white shadow-md'
                : 'border-slate-200 bg-white text-slate-600 hover:border-[#0D9488]',
            )}
          >
            {s.label}
            <span className="mt-0.5 block text-[10px] font-normal opacity-80">{s.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
