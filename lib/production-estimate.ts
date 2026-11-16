import data from './regional-yields.json' with { type: 'json' };

export type ProductionChoice = {
  mode: 'region' | 'manual';
  regionCode: string;
  manualYield: number;
};
export const INITIAL_PRODUCTION_CHOICE: ProductionChoice = {
  mode: 'region',
  regionCode: '',
  manualYield: 0,
};
export const REGIONAL_YIELDS = [...data.regions].sort((a, b) => a.name.localeCompare(b.name, 'it'));
export const REGIONAL_SOURCE = data.metadata;
export function findRegion(code: string) {
  return REGIONAL_YIELDS.find((region) => region.code === code);
}
export function resolveProductionYield(choice: ProductionChoice): number {
  return choice.mode === 'manual'
    ? choice.manualYield
    : (findRegion(choice.regionCode)?.annualYield ?? 0);
}
