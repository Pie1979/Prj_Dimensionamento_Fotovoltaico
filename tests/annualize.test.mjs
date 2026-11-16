import { test } from 'node:test';
import assert from 'node:assert/strict';
import { annualizePeriod } from '../lib/annualize.ts';

test('partial bills extrapolate consumption and spending for the same period, preserving provenance', () => {
  assert.deepEqual(annualizePeriod({ consumption: 500, spending: 150, months: 2 }), {
    consumption: 500,
    spending: 150,
    months: 2,
    annualConsumption: 3000,
    annualSpending: 900,
  });
  const year = annualizePeriod({ consumption: 3000, spending: 900, months: 12 });
  assert.equal(year.annualConsumption, 3000);
});

test('annualization rejects empty, negative, nonfinite and unsupported periods', () => {
  for (const patch of [
    { months: 0 },
    { months: 13 },
    { months: 1.5 },
    { consumption: 0 },
    { spending: -1 },
    { consumption: NaN },
    { months: Infinity },
  ]) {
    assert.throws(
      () => annualizePeriod({ consumption: 500, spending: 150, months: 2, ...patch }),
      RangeError,
    );
  }
});
