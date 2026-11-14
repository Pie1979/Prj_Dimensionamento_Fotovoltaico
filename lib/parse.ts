/** Formato italiano; accetta anche il punto decimale se non separa le migliaia. */
export function parseNumeroInput(value: string | null | undefined): number {
  const text = (value ?? '').trim().replace(/\s/g, '');
  if (!text) return 0;
  if (/^-?0\.\d+$/.test(text)) return Number(text);
  if (/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(text))
    return Number(text.replace(/\./g, '').replace(',', '.'));
  if (/^-?\d+\.\d+$/.test(text)) return Number(text);
  return Number.NaN;
}
export function formatNumeroInput(value: number): string {
  return Number.isFinite(value) ? String(value).replace('.', ',') : '';
}
export function sanitizeNumeroInput(raw: string): string {
  return raw;
}
