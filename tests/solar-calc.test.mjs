import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcolaSimulazione, isValidSimulation } from '../lib/solar-calc.ts';
import { DEFAULT_INPUT } from '../lib/types.ts';
import { parseNumeroInput } from '../lib/parse.ts';
const base = {
  ...DEFAULT_INPUT,
  irraggiamento: 1400,
  consumoKwh: 3000,
  spesaAnnua: 900,
  kwp: 4.5,
  costoImpianto: 6990,
};
const close = (actual, expected) =>
  assert.ok(Math.abs(actual - expected) < 1e-8, `${actual} != ${expected}`);
test('energy is conserved, self-consumption is a share of production and grid purchases remain', () => {
  const r = calcolaSimulazione(base);
  close(r.produzioneLorda, 6300);
  close(r.autoconsumo, 2520);
  close(r.sovrapproduzione, 3780);
  close(r.autoconsumo + r.sovrapproduzione, r.produzioneLorda);
  close(r.risparmio, 630);
  close(r.ricavoGse, 340.2);
  close(r.beneficioOperativo, 970.2);
  close(r.serie.saldoInvestimento[0], -6990);
  close(r.payback.years, 6990 / 970.2);
});
test('tax relief is counted once, over ten years, with full upfront cost', () => {
  const r = calcolaSimulazione({ ...base, aliquotaDetrazione: 0.5 });
  close(r.serie.saldoInvestimento[0], -6990);
  close(r.detrazioneTotale, 3495);
  close(r.quotaDetrazione, 349.5);
  close(r.serie.cumDetrazione[10], 3495);
  close(r.serie.cumDetrazione[15], 3495);
  close(r.saldo10, -6990 + 970.2 * 10 + 3495);
  close(r.payback.years, 6990 / (970.2 + 349.5));
  close(r.serie.saldoInvestimento[11] - r.serie.saldoInvestimento[10], 970.2);
});
test('self-consumption cannot exceed demand, including the entire surplus in exports', () => {
  const r = calcolaSimulazione({ ...base, quotaAutoconsumo: 1 });
  close(r.autoconsumo, 3000);
  close(r.sovrapproduzione, 3300);
});
test('recurring costs can prevent payback and fiscal benefit ends after year ten', () => {
  const r = calcolaSimulazione({ ...base, manutenzioneAnnua: 1100, aliquotaDetrazione: 0.5 });
  assert.equal(r.payback.reached, false);
  assert.ok(r.serie.saldoInvestimento[15] < r.serie.saldoInvestimento[10]);
});
test('lower-production scenarios recompute energy before economic benefits', () => {
  const r = calcolaSimulazione({ ...base, scenario: 0.5 });
  close(r.produzioneLorda, 3150);
  close(r.autoconsumo, 1260);
  close(r.sovrapproduzione, 1890);
});
test('invalid input does not generate a plausible result', () => {
  for (const patch of [
    { kwp: -1 },
    { scenario: 1.5 },
    { quotaAutoconsumo: 1.1 },
    { aliquotaDetrazione: -0.1 },
    { prezzoEvitato: NaN },
    { manutenzioneAnnua: -10 },
  ]) {
    assert.equal(isValidSimulation({ ...base, ...patch }), false);
    assert.throws(() => calcolaSimulazione({ ...base, ...patch }), RangeError);
  }
});
test('Italian numbers, negatives and malformed input are not silently reinterpreted', () => {
  close(parseNumeroInput('6.990,50'), 6990.5);
  close(parseNumeroInput('0,125'), 0.125);
  close(parseNumeroInput('4.5'), 4.5);
  close(parseNumeroInput('0.125'), 0.125);
  close(parseNumeroInput('1.400'), 1400);
  close(parseNumeroInput('-1'), -1);
  assert.ok(Number.isNaN(parseNumeroInput('1,2,3')));
  assert.ok(Number.isNaN(parseNumeroInput('abc')));
});
