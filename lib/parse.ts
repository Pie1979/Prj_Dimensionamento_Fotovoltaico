/** Converte input utente (formato IT) in numero. */
export function parseNumeroInput(val: string | null | undefined): number {
  if (val === null || val === undefined || val === '') return 0;
  let s = String(val).trim().replace(/\s/g, '');
  if (/,\d{1,2}$/.test(s) && s.includes('.')) {
    s = s.replace(/\./g, '').replace(',', '.');
  } else if (s.includes(',') && !s.includes('.')) {
    s = s.replace(',', '.');
  } else if (/^\d{1,3}(\.\d{3})+$/.test(s)) {
    s = s.replace(/\./g, '');
  }
  const n = parseFloat(s);
  return Number.isNaN(n) ? 0 : n;
}

/** Mostra un numero con virgola decimale (solo se necessario). */
export function formatNumeroInput(value: number): string {
  if (!value || value <= 0) return '';
  const s = String(value);
  return s.includes('.') ? s.replace('.', ',') : s;
}

/** Accetta solo cifre, virgola e punto durante la digitazione. */
export function sanitizeNumeroInput(raw: string): string {
  return raw.replace(/\s/g, '').replace(/[^\d.,]/g, '');
}
