export type PeriodInput = {
  consumption: number;
  spending: number;
  months: number;
};
export type AnnualEstimate = PeriodInput & {
  annualConsumption: number;
  annualSpending: number;
};

/** Linear extrapolation, deliberately distinct from measured annual data. */
export function annualizePeriod(period: PeriodInput): AnnualEstimate {
  if (
    !Object.values(period).every(Number.isFinite) ||
    period.consumption <= 0 ||
    period.spending <= 0 ||
    !Number.isInteger(period.months) ||
    period.months < 1 ||
    period.months > 12
  ) {
    throw new RangeError('Inserisci consumi e spesa positivi e un periodo da 1 a 12 mesi interi.');
  }
  return {
    ...period,
    annualConsumption: (period.consumption / period.months) * 12,
    annualSpending: (period.spending / period.months) * 12,
  };
}
