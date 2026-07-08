# PV Sizing Dashboard v3

Strumento web per il dimensionamento fotovoltaico residenziale con calcoli trasparenti, organizzato in 4 passi.

## Avvio rapido

Apri `index.html` direttamente nel browser, oppure avvia un server locale:

```bash
python3 -m http.server 8080
```

Poi visita [http://localhost:8080](http://localhost:8080).

## Struttura

| Passo | Contenuto |
|-------|-----------|
| **1 — Identikit Bolletta** | Consumo, spesa annua, irraggiamento → costo €/kWh |
| **2 — Dimensionamento** | kWp, costo impianto, produzione, autoconsumo, sovrapproduzione, copertura |
| **3 — Simulazione Economica** | Risparmio autoconsumo, vendita GSE, detrazione fiscale 50% / 10 anni |
| **4 — Verdetto** | Payback colorato + grafico Chart.js vs bolletta |

## Scenari

Il selettore in alto aggiorna tutti i calcoli e il grafico:

- **Reale (100%)** — irraggiamento pieno
- **80%** — scenario conservativo
- **50%** — scenario pessimistico

## Modello di calcolo

```
Produzione lorda     = kWp × Irraggiamento × Scenario
Autoconsumo          = min(Consumo, Produzione × tasso dinamico)
Sovrapproduzione     = Produzione − Autoconsumo
Copertura            = Autoconsumo ÷ Consumo × 100

Costo netto          = Costo impianto × 50%
Quota detrazione     = Costo netto ÷ 10 anni  (sommata al beneficio, anni 1–10)
Beneficio operativo  = Autoconsumo × €/kWh + Sovrapproduzione × Prezzo GSE
```

Il tasso di autoconsumo diminuisce al crescere del rapporto produzione/consumo (impianti sovradimensionati immessi di più in rete).

## Valori di riferimento

Con i default precompilati si ottiene ~**3 anni e 1 mese** di payback:

| Parametro | Valore |
|-----------|--------|
| Consumo | 2.301 kWh |
| Spesa | 892,92 € |
| Irraggiamento | 1.400 kWh/kWp |
| Potenza | 4,5 kWp |
| Costo impianto | 6.990 € |

## File

```
index.html          UI principale
css/styles.css      Stili
js/calculator.js    Motore di calcolo
js/app.js           Controller UI e grafico payback
```

## Dipendenze

- [Chart.js 4](https://www.chartjs.org/) — caricato via CDN, nessuna installazione richiesta
