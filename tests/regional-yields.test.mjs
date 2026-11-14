import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  REGIONAL_YIELDS,
  findRegion,
  resolveProductionYield,
  INITIAL_PRODUCTION_CHOICE,
} from '../lib/production-estimate.ts';
const raw = JSON.parse(
  fs.readFileSync(new URL('../data/pvgis/observations.json', import.meta.url)),
);
test('20 regions use all 209 verified observations, with compatible units and assumptions', () => {
  assert.equal(REGIONAL_YIELDS.length, 20);
  assert.equal(new Set(REGIONAL_YIELDS.map((r) => r.code)).size, 20);
  assert.equal(raw.observations.length, 209);
  assert.equal(
    REGIONAL_YIELDS.reduce((sum, r) => sum + r.sampleCount, 0),
    209,
  );
  for (const r of REGIONAL_YIELDS) {
    const points = raw.observations.filter((p) => p.regionCode === r.code);
    assert.equal(points.length, r.sampleCount);
    assert.ok(points.length >= 5);
    let sum = 0,
      weights = 0;
    for (const point of points) {
      assert.equal(point.inputs.meteo_data.radiation_db, 'PVGIS-SARAH3');
      assert.equal(point.inputs.meteo_data.year_min, 2005);
      assert.equal(point.inputs.meteo_data.year_max, 2023);
      assert.equal(point.inputs.pv_module.peak_power, 1);
      assert.equal(point.inputs.pv_module.system_loss, 14);
      assert.equal(point.inputs.mounting_system.fixed.slope.value, 30);
      assert.equal(point.inputs.mounting_system.fixed.azimuth.value, 0);
      const w = Math.cos((point.latitude * Math.PI) / 180);
      sum += point.totals.E_y * w;
      weights += w;
    }
    assert.equal(Math.floor(sum / weights / 10 + 0.5) * 10, r.annualYield);
    assert.ok(r.annualYield >= 800 && r.annualYield <= 2000);
  }
});
test('missing region is not silently replaced with a default', () => {
  assert.equal(resolveProductionYield(INITIAL_PRODUCTION_CHOICE), 0);
  assert.equal(findRegion('unknown'), undefined);
});
test('region selection and manual override resolve without subtracting losses again', () => {
  const choice = { mode: 'region', regionCode: 'ITI4', manualYield: 1600 };
  assert.equal(resolveProductionYield(choice), 1440);
  assert.equal(resolveProductionYield({ ...choice, mode: 'manual' }), 1600);
  assert.equal(resolveProductionYield({ ...choice, regionCode: 'ITG1' }), 1550);
  assert.equal(resolveProductionYield({ ...choice, mode: 'manual', manualYield: 0 }), 0);
});
