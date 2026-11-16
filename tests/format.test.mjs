import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatPayback } from '../lib/format.ts';

test('positive paybacks below one month never display zero months', () => {
  for (const years of [0.001, 0.04, 0.08]) {
    assert.equal(formatPayback(years), 'Meno di 1 mese');
  }
  assert.equal(formatPayback(1 / 12), '1 mese');
  assert.equal(formatPayback(11.9 / 12), '1 anno');
  assert.equal(formatPayback(5 + 4 / 12), '5 anni e 4 mesi');
  for (const years of [0, -1, NaN, Infinity]) assert.equal(formatPayback(years), '—');
  assert.equal(formatPayback(51), 'Oltre 50 anni');
});
