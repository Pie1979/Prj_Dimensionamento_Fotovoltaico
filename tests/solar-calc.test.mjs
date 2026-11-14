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

test('tax comparison preserves full upfront cost and only changes tax cash flows', async () => {
  const { calcolaConfrontoFiscale } = await import('../lib/solar-calc.ts');
  const c = calcolaConfrontoFiscale({
    ...base,
    irraggiamento: 1440,
    aliquotaDetrazione: 0.5,
    manutenzioneAnnua: 100,
  });
  close(c.senzaDetrazione.serie.saldoInvestimento[0], -6990);
  close(c.conDetrazione.serie.saldoInvestimento[0], -6990);
  close(c.conDetrazione.beneficioOperativo, 897.92);
  close(c.conDetrazione.quotaDetrazione, 349.5);
  close(c.flussi[10].saldoCon - c.flussi[10].saldoSenza, 3495);
  close(c.flussi[11].recuperoFiscale, 0);
  close(c.flussi[11].flussoCon, c.flussi[11].flussoSenza);
  for (const row of c.flussi.slice(1)) {
    close(row.flussoSenza, row.risparmio + row.ricavi - row.costi);
    close(row.flussoCon, row.flussoSenza + row.recuperoFiscale);
  }
});

test('payback after tax relief ends is computed from annual flows rather than permanent relief', async () => {
  const { calcolaConfrontoFiscale } = await import('../lib/solar-calc.ts');
  const c = calcolaConfrontoFiscale({
    ...base,
    kwp: 1,
    irraggiamento: 1000,
    consumoKwh: 1000,
    costoImpianto: 3000,
    quotaAutoconsumo: 1,
    prezzoEvitato: 0.1,
    aliquotaDetrazione: 0.5,
  });
  close(c.senzaDetrazione.payback.years, 30);
  close(c.conDetrazione.payback.years, 15);
  close(c.flussi[10].saldoCon, -500);
  close(c.flussi[15].saldoCon, 0);
});

test('tax benefit alone may never repay the cost and a zero rate creates no tax advantage', async () => {
  const { calcolaConfrontoFiscale } = await import('../lib/solar-calc.ts');
  const zero = calcolaConfrontoFiscale(base);
  assert.deepEqual(zero.conDetrazione.serie, zero.senzaDetrazione.serie);
  const insufficient = calcolaConfrontoFiscale({
    ...base,
    prezzoEvitato: 0,
    prezzoVendita: 0,
    aliquotaDetrazione: 0.5,
  });
  assert.equal(insufficient.conDetrazione.payback.reached, false);
});

test('sensitivity changes stated assumptions and clamps the annual energy balance', async () => {
  const { calcolaScenariSensibilita } = await import('../lib/solar-calc.ts');
  const cases = calcolaScenariSensibilita({ ...base, quotaAutoconsumo: 0.95, consumoKwh: 1000 });
  close(cases[0].input.quotaAutoconsumo, 0.85);
  close(cases[2].input.quotaAutoconsumo, 1);
  close(cases[0].input.prezzoEvitato, 0.225);
  close(cases[2].input.prezzoVendita, 0.099);
  for (const c of cases) {
    assert.ok(c.result.autoconsumo <= 1000);
    close(c.result.autoconsumo + c.result.sovrapproduzione, c.result.produzioneLorda);
    close(c.input.manutenzioneAnnua, base.manutenzioneAnnua);
    close(c.input.irraggiamento, base.irraggiamento);
  }
});
