import { Check } from 'lucide-react';
import { STEP_LABELS } from '@/lib/types';
export function StepProgress({
  current,
  onNavigate,
}: {
  current: number;
  onNavigate: (step: number) => void;
}) {
  return (
    <nav className="step-progress" aria-label="Passi della simulazione">
      <ol>
        {STEP_LABELS.map((label, i) => (
          <li key={label} aria-current={current === i + 1 ? 'step' : undefined}>
            <button type="button" onClick={() => onNavigate(i + 1)} disabled={i + 1 > current}>
              <span className={`step-dot ${i + 1 <= current ? 'active' : ''}`}>
                {i + 1 < current ? <Check size={15} aria-hidden="true" /> : i + 1}
              </span>
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
