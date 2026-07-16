'use client';

import { useEffect, useState } from 'react';
import { formatNumeroInput, parseNumeroInput, sanitizeNumeroInput } from '@/lib/parse';

type NumFieldProps = {
  id: string;
  label: string;
  hint?: string;
  placeholder: string;
  value: number;
  onChange: (v: number) => void;
};

export function NumField({ id, label, hint, placeholder, value, onChange }: NumFieldProps) {
  const [text, setText] = useState(() => formatNumeroInput(value));
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!focused) {
      setText(formatNumeroInput(value));
    }
  }, [value, focused]);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        placeholder={placeholder}
        value={text}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          const parsed = parseNumeroInput(text);
          onChange(parsed);
          setText(formatNumeroInput(parsed));
        }}
        onChange={(e) => {
          const next = sanitizeNumeroInput(e.target.value);
          setText(next);
          onChange(parseNumeroInput(next));
        }}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-base tabular-nums outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
      />
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
    </div>
  );
}
