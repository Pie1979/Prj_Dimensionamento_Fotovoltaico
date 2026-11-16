export type SimInput = {
  consumoKwh: number;
  spesaAnnua: number;
  irraggiamento: number;
  kwp: number;
  costoImpianto: number;
  scenario: number;
  quotaAutoconsumo: number;
  prezzoEvitato: number;
  prezzoVendita: number;
  aliquotaDetrazione: number;
  manutenzioneAnnua: number;
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
  manutenzioneAnnua: number;
  payback: { years: number; reached: boolean };
  colore: PaybackColor;
  saldo10: number;
  serie: PaybackSerie;
};

export const DEFAULT_INPUT: SimInput = {
  consumoKwh: 0,
  spesaAnnua: 0,
  irraggiamento: 0,
  kwp: 0,
  costoImpianto: 0,
  scenario: 1,
  quotaAutoconsumo: 0.4,
  prezzoEvitato: 0.25,
  prezzoVendita: 0.09,
  aliquotaDetrazione: 0,
  manutenzioneAnnua: 0,
};

export const STEP_LABELS = ['Consumi', 'Impianto', 'Risultati'] as const;

export type UsageContext = {
  timing: 'unknown' | 'evening' | 'mixed' | 'daytime';
  battery: 'unknown' | 'no' | 'yes';
};
export const DEFAULT_USAGE_CONTEXT: UsageContext = { timing: 'unknown', battery: 'unknown' };
