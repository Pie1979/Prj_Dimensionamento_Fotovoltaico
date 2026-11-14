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
          <li
            key={label}
            className={i + 1 === current ? 'current' : i + 1 < current ? 'complete' : ''}
            aria-current={current === i + 1 ? 'step' : undefined}
          >
            {i + 1 < current ? (
              <button type="button" onClick={() => onNavigate(i + 1)}>
                <span aria-hidden="true">✓</span> {label}
              </button>
            ) : (
              <span>
                <span aria-hidden="true">0{i + 1}</span> {label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
