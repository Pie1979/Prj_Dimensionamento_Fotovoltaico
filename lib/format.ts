export const fmt0 = (v: number) =>
  new Intl.NumberFormat('it-IT', { maximumFractionDigits: 0 }).format(v);
export const fmt2 = (v: number) =>
  new Intl.NumberFormat('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);
export const fmt3 = (v: number) =>
  new Intl.NumberFormat('it-IT', { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(v);
export const fmt1pct = (v: number) =>
  new Intl.NumberFormat('it-IT', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(v) + '%';
export const eur = (v: number) => fmt2(v) + ' €';
export const kwh = (v: number) => fmt0(v) + ' kWh';

export function formatPayback(years: number): string {
  if (!isFinite(years) || years <= 0) return '—';
  if (years > 50) return 'Oltre 50 anni';
  const mesiTotali = Math.round(years * 12);
  const anni = Math.floor(mesiTotali / 12);
  const mesi = mesiTotali % 12;
  if (anni === 0) return `${mesi} ${mesi === 1 ? 'mese' : 'mesi'}`;
  if (mesi === 0) return `${anni} ${anni === 1 ? 'anno' : 'anni'}`;
  return `${anni} ${anni === 1 ? 'anno' : 'anni'} e ${mesi} ${mesi === 1 ? 'mese' : 'mesi'}`;
}
