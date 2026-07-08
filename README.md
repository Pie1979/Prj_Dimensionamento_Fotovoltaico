# Simulatore FV + Batteria – Analisi di Convenienza 2026

Strumento web self-contained per la simulazione di impianti fotovoltaici residenziali, con calcoli trasparenti organizzati in 4 passi.

## URL pubblico

- **Vercel (principale):** https://prj-dimensionamento-fotovoltaico.vercel.app
- **GitHub Pages:** https://pie1979.github.io/Prj_Dimensionamento_Fotovoltaico/

## Vercel Analytics

Il progetto include `@vercel/analytics`. Per attivare le statistiche:

1. Apri il [dashboard Vercel](https://vercel.com/pm79/prj-dimensionamento-fotovoltaico)
2. Vai su **Analytics → Enable Web Analytics**
3. Ogni push su `main` aggiorna il deploy automaticamente (repo collegato)

## Avvio locale

Apri `index.html` nel browser, oppure:

```bash
python3 -m http.server 8080
```

Poi visita [http://localhost:8080](http://localhost:8080).

## Struttura (4 Passi)

| Passo | Contenuto |
|-------|-----------|
| **1 — Identikit Bolletta** | Consumo, spesa annua → costo reale energia (€/kWh) |
| **2 — Dimensionamento** | Irraggiamento, kWp, batteria (futuro), produzione, autoconsumo, sovraproduzione, copertura |
| **3 — Simulazione Economica** | Risparmio bolletta, ricavo GSE, detrazione 50% / 10 anni |
| **4 — Verdetto** | Investimento netto, payback colorato, grafico cumulativo 15 anni |

## Scenari

- **Produzione Reale (100%)**
- **Simulazione 80%**
- **Simulazione 50%**

## Modello di calcolo

```
Produzione lorda     = kWp × Irraggiamento × Scenario
Autoconsumo          = min(Produzione, Consumo)
Sovraproduzione      = max(0, Produzione − Consumo)
Copertura            = (Produzione / Consumo) × 100

Risparmio bolletta   = Autoconsumo × (Spesa / Consumo)
Ricavo GSE           = Sovraproduzione × 0,09 €/kWh
Investimento netto   = Costo × 50%
Quota detrazione     = (Costo × 50%) / 10 anni
```

## Dipendenze (CDN)

- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js 4](https://www.chartjs.org/)
- Google Fonts (Inter)

Nessuna installazione richiesta — tutto in un unico file `index.html`.

## Deploy

Push su `main` → deploy automatico via GitHub Actions su GitHub Pages.
