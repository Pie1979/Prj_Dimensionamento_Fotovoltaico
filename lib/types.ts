export type SimInput = {
  consumoKwh: number;
  spesaAnnua: number;
  irraggiamento: number;
  kwp: number;
  costoImpianto: number;
  scenario: number;
};

export type PaybackColor = 'green' | 'orange' | 'red';

export type PaybackSerie = {
  labels: string[];
  saldoInvestimento: number[];
  bollettaCumulativa: number[];
  cumRisparmio: number[];
  cumGse: number[];
  cumDetrazione: number[];
};

export type SimResult = {
  costoEnergia: number;
  produzioneLorda: number;
  autoconsumo: number;
  sovrapproduzione: number;
  indiceCopertura: number;
  risparmio: number;
  ricavoGse: number;
  investimentoNetto: number;
  detrazioneTotale: number;
  quotaDetrazione: number;
  beneficioOperativo: number;
  beneficioTotale10: number;
  payback: { years: number; reached: boolean };
  colore: PaybackColor;
  saldo10: number;
  serie: PaybackSerie;
};

export const DEFAULT_INPUT: SimInput = {
  consumoKwh: 0,
  spesaAnnua: 0,
  irraggiamento: 1400,
  kwp: 0,
  costoImpianto: 0,
  scenario: 1,
};

export const STEP_LABELS = ['Bolletta', 'Impianto', 'Risultati'] as const;
