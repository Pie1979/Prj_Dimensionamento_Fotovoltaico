'use client';
import { useEffect, useRef, useState } from 'react';
import { formatNumeroInput, parseNumeroInput } from '@/lib/parse';
type Props = {
  id: string;
  label: string;
  hint?: string;
  placeholder: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  required?: boolean;
  allowZero?: boolean;
};
export function NumField({
  id,
  label,
  hint,
  placeholder,
  value,
  onChange,
  unit,
  min = 0,
  max,
  required = true,
  allowZero = false,
}: Props) {
  const [text, setText] = useState(() =>
    value === 0 && !allowZero ? '' : formatNumeroInput(value),
  );
  const focused = useRef(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!focused.current) setText(value === 0 && !allowZero ? '' : formatNumeroInput(value));
  }, [value, allowZero]);
  const validate = (element: HTMLInputElement) => {
    const number = parseNumeroInput(element.value);
    const invalid =
      !Number.isFinite(number) ||
      number < min ||
      (!allowZero && number === 0) ||
      (max !== undefined && number > max);
    const message =
      required && !element.value.trim()
        ? 'Inserisci questo dato per continuare.'
        : invalid
          ? `Inserisci un numero ${allowZero ? 'da ' + min : 'maggiore di ' + min}${max !== undefined ? ' e non superiore a ' + max : ''}.`
          : '';
    element.setCustomValidity(message);
    return message;
  };
  return (
    <div className="number-field">
      <label htmlFor={id}>
        {label}
        {!required && <span className="muted"> · facoltativo</span>}
      </label>
      <div className={`input-wrap ${error ? 'has-error' : ''}`}>
        <input
          id={id}
          name={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          required={required}
          placeholder={placeholder}
          value={text}
          aria-invalid={!!error}
          aria-describedby={
            [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
          }
          onFocus={() => {
            focused.current = true;
          }}
          onChange={(e) => {
            const next = e.target.value;
            setText(next);
            onChange(parseNumeroInput(next));
            validate(e.target);
            setError('');
          }}
          onBlur={(e) => {
            focused.current = false;
            const message = validate(e.target);
            // Keep a clicked action in place until its click completes. Submit
            // reports invalid data through onInvalid; Cancel discards the draft.
            if (!(e.relatedTarget instanceof HTMLButtonElement)) setError(message);
            if (!message) setText(formatNumeroInput(parseNumeroInput(e.target.value)));
          }}
          onInvalid={(e) => {
            const field = e.currentTarget;
            setError(validate(field));
            // Custom validation can reflow the form before the browser places focus.
            requestAnimationFrame(() =>
              field.form?.querySelector<HTMLElement>('input:invalid, select:invalid')?.focus(),
            );
          }}
        />
        {unit && (
          <span className="input-unit" aria-hidden="true">
            {unit}
          </span>
        )}
      </div>
      {hint && (
        <p className="field-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
