# SunSize

**Il dimensionamento fotovoltaico basato sui dati**

---

## PCODING Software

**PCODING Software** sviluppa software utili e concreti, pensati per risolvere problematiche comuni della vita quotidiana. L'obiettivo è trasformare dati reali — bollette, consumi, costi — in strumenti chiari che aiutino a prendere decisioni informate, senza tecnicismi inutili.

**SunSize** nasce da questa filosofia: installare un impianto fotovoltaico è una scelta importante, ma spesso manca uno strumento semplice che mostri *come* si arriva ai numeri e *cosa* si ottiene davvero.

---

## Il ragionamento alla base

La maggior parte delle simulazioni fotovoltaiche parte da stime generiche. **SunSize** fa il contrario: **parte dai tuoi dati reali**.

Il percorso è strutturato in **4 passi trasparenti**:

1. **Identikit Bolletta** — Inserisci (o carica) consumo annuo e spesa annua. Da qui si ricava il **costo reale dell'energia** (€/kWh), il vero punto di partenza per ogni calcolo economico.
2. **Dimensionamento & Sovrapproduzione** — Definisci irraggiamento locale e potenza dell'impianto (kWp). Il simulatore calcola produzione annua, autoconsumo, energia immessa in rete e **indice di copertura** del fabbisogno.
3. **Simulazione Economica** — Stima il beneficio annuo: risparmio in bolletta (autoconsumo), ricavo dalla vendita al GSE e **detrazione fiscale** (50% in 10 anni).
4. **Verdetto** — Confronta l'investimento netto con i benefici cumulati e mostra il **tempo di rientro** (payback), con grafico a 15 anni.

Ogni passaggio mostra i valori intermedi e le formule applicate: nessun numero è una scatola nera.

In più, puoi simulare **3 scenari di produzione** (100%, 80%, 50%) per capire quanto l'investimento resista anche in condizioni meno favorevoli.

---

## Il risultato che si ottiene

Al termine dell'analisi ottieni una risposta chiara a domande concrete:

- **Quanto produce** il tuo impianto in un anno?
- **Quanta energia consumi direttamente** e quanta vendi in rete?
- **Quanto risparmi** in bolletta ogni anno?
- **Quanto incide la detrazione fiscale** sul rendimento?
- **In quanti anni rientri** dell'investimento?
- **Conviene** rispetto a continuare a pagare la bolletta?

Il verdetto finale include un **payback colorato** (verde, arancione, rosso) e un **grafico cumulativo** che confronta il costo senza fotovoltaico con il saldo dell'investimento nel tempo.

---

## Prova subito

- **Vercel (principale):** https://prj-dimensionamento-fotovoltaico.vercel.app
- **GitHub Pages:** https://pie1979.github.io/Prj_Dimensionamento_Fotovoltaico/

Carica la tua bolletta con **"La mia fattura"** (PDF o immagine) oppure inserisci i dati manualmente.

---

## Funzionalità principali

| Funzione | Descrizione |
|----------|-------------|
| Caricamento bolletta | Estrazione automatica di consumo e spesa da PDF/immagine (OCR) |
| 3 scenari | Produzione Reale (100%), Simulazione 80%, Simulazione 50% |
| Calcoli trasparenti | Ogni KPI mostra valore, formula e spiegazione |
| Modello fiscale | Detrazione 50% ripartita su 10 anni |
| Grafico payback | Confronto cumulativo investimento vs bolletta su 15 anni |

---

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

---

## Avvio locale

Apri `index.html` nel browser, oppure:

```bash
python3 -m http.server 8080
```

Poi visita [http://localhost:8080](http://localhost:8080).

Nessuna installazione richiesta — tutto in un unico file `index.html` con dipendenze via CDN (Tailwind CSS, Chart.js, Poppins).

---

## Deploy

Push su `main` → deploy automatico su GitHub Pages e Vercel.

---

<p align="center">
  <strong>Realizzato da</strong> <a href="#">PCODING Software</a>
</p>
