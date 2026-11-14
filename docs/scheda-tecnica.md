# SunSize V2 — Scheda tecnica di realizzazione

Aggiornamento: **14 novembre 2026**. Implementazione di riferimento: [commit 0f90d86](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/tree/0f90d865f9007919e335660fb3585f9188a95aaf), ramo `codex/sunsize-ux`, [PR #9](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/pull/9).

Questa scheda descrive il comportamento del codice. Il [documento Figma integrale](specifiche-figma-v2.md) conserva anche inventario, misure, testi e appendici del canvas: 41 contenitori, 2.437 livelli, 1.614 testi e 121 interazioni. Il documento è voluminoso; su GitHub può essere necessario aprire **Raw**. La [provenienza dell’esportazione](specifiche-figma-v2.provenienza.json) ne registra origine e hash.

## Documenti collegati

| Documento | Contenuto |
| --- | --- |
| [Logiche di calcolo](logiche-calcolo.md) | Input, formule, flussi, rientro, scenari e casi numerici |
| [Rese regionali](rese-regionali.md) | Fonti PVGIS, metodo, tabella delle 20 regioni e riproducibilità |
| [Verifiche e rilascio](verifiche-e-rilascio.md) | Test locali/remoti, comandi, CI e attività prima della produzione |
| [Figma V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7/SunSize?node-id=15-150) | Riferimento visivo |
| [Scheda originale in Figma](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7/SunSize?node-id=39-335) | Documento sorgente delle specifiche |

## 1. Scopo e architettura

SunSize stima produzione elettrica, autoconsumo, benefici annuali e tempo di rientro semplice di un impianto fotovoltaico. Il percorso è **Consumi → Impianto → Risultati**. Il risultato dipende dai dati e dalle ipotesi dichiarate, senza certificare il singolo tetto o il diritto a un’agevolazione.

Stack: Next.js 15.5.20, React 19.1, TypeScript, CSS con token locali e font Inter. Chart.js viene caricato dinamicamente per il grafico dei risultati. Il calcolo avviene nel browser; per le funzioni attuali non occorrono account, database o API di calcolo.

| Responsabilità | File |
| --- | --- |
| Stato, navigazione, focus e reset | [app/page.tsx](../app/page.tsx) |
| Tipi e valori iniziali | [lib/types.ts](../lib/types.ts) |
| Annualizzazione | [lib/annualize.ts](../lib/annualize.ts) |
| Motore, confronto fiscale e sensibilità | [lib/solar-calc.ts](../lib/solar-calc.ts) |
| Selezione e risoluzione della resa | [lib/production-estimate.ts](../lib/production-estimate.ts) |
| Dati regionali inclusi nel client | [lib/regional-yields.json](../lib/regional-yields.json) |
| Parsing e formattazione | [lib/parse.ts](../lib/parse.ts), [lib/format.ts](../lib/format.ts) |
| Moduli principali | [consumption-step.tsx](../components/consumption-step.tsx), [plant-step.tsx](../components/plant-step.tsx) |
| Controlli numerici e produzione | [num-field.tsx](../components/num-field.tsx), [production-estimate.tsx](../components/production-estimate.tsx) |
| Viste di supporto | [support-views.tsx](../components/support-views.tsx) |
| Risultati e limiti | [results-step.tsx](../components/results-step.tsx) |
| Confronto, flussi e scenari | [investment-comparison.tsx](../components/investment-comparison.tsx) |
| Grafico dinamico | [payback-chart.tsx](../components/payback-chart.tsx) |
| Aspetto e responsive | [app/globals.css](../app/globals.css) |

Il motore è la fonte delle grandezze economiche e delle serie. I componenti presentano i valori derivati: non devono introdurre una seconda formula di rientro.

## 2. Stato dell’applicazione

| Stato | Dati | Regola |
| --- | --- | --- |
| `step` | 1, 2 o 3 | Passo principale corrente |
| `view` | `null` o una vista di supporto | Sostituisce temporaneamente il contenuto principale |
| `input` | `SimInput` | Parametri numerici del motore |
| `productionChoice` | `mode`, `regionCode`, `manualYield` | Conserva separatamente regione e resa manuale |
| `usageContext` | `timing`, `battery` | Contesto descrittivo, separato dagli input numerici |
| `annualEstimate` | Periodo originario e stima annua, oppure `null` | Mantiene la provenienza dei dati annualizzati |

I passaggi avvengono nella stessa pagina tramite stato React, senza una rotta distinta per ogni schermata. Le frecce del browser non sono una navigazione interna dedicata ai passi. Gli input restano in memoria: refresh o chiusura della pagina perdono la simulazione. Nessun salvataggio degli input in localStorage, sessionStorage o backend nel percorso implementato.

## 3. Passo Consumi

- Richiedere consumo annuo e spesa complessiva dello stesso periodo, entrambi positivi e finiti.
- Il valore della spesa non determina il prezzo evitato e non viene trattato come risparmio.
- La compilazione iniziale è vuota, con esempi nei placeholder.
- Il comando “Non ho dati annuali” apre la stima da un periodo di **1–12 mesi interi**.
- Applicando la stima, compilare i due campi annuali e mantenere il badge “Dati annualizzati · da verificare”, i valori di origine e l’avviso sull’estrapolazione.
- La correzione successiva dei valori annuali conserva la provenienza iniziale e segnala che i valori sono stati modificati.
- Annullare la stima lascia invariati i dati della simulazione.

La formula e i limiti dell’annualizzazione sono in [logiche di calcolo](logiche-calcolo.md).

## 4. Passo Impianto

Richiedere potenza nominale e costo completo del preventivo, prima delle detrazioni. L’eventuale batteria va inclusa nel costo del preventivo; la sua prestazione non viene simulata.

### Regione o preventivo

- Modalità iniziale: regionale, senza regione preselezionata.
- Se manca la regione, il tentativo di calcolo mostra l’errore vicino al selettore e ne porta il focus al campo.
- La selezione risolve una delle 20 rese incluse e aggiorna la produzione indicativa.
- La modalità manuale richiede una resa positiva in **kWh/kWp/anno**. Se il preventivo indica kWh annui totali, dividerli per i kWp.
- Cambiare modalità conserva sia il codice regionale sia il valore manuale; conta soltanto la resa risolta nella modalità attiva.
- `irraggiamento` è un nome storico del modello: contiene la **resa elettrica specifica**, non l’irraggiamento in kWh/m².
- Il 14% delle perdite di sistema del riferimento PVGIS è già compreso. Non sottrarlo una seconda volta.

### Orari, batteria e autoconsumo

Orari ammessi: “Non lo so”, “Soprattutto la sera”, “Durante tutta la giornata”, “Soprattutto di giorno”. Batteria: “Non so / da valutare”, “No”, “Sì”. I valori iniziali sono quelli non noti.

Queste risposte non assegnano una quota automatica. Sono disponibili 25%, 40% e 60%, oltre alla personalizzazione 0–100%. Il valore iniziale 40% è un’ipotesi, non una misura o una deduzione dalle abitudini. Mostrare la quantità annua risultante e la sua incidenza sul consumo, con avviso sulla coincidenza temporale.

### Ipotesi economiche e produzione relativa

I prezzi sono visibili e modificabili. Detrazione e costi si modificano nella vista dedicata, con aliquota iniziale 0% e costi iniziali esclusi. Una sezione aggiuntiva permette di ridurre la produzione rispetto alla stima: fattore iniziale 100%, ammesso maggiore di 0 e non superiore a 100%.

Il riepilogo desktop mostra produzione annua, energia usata in casa ed esborso iniziale. Senza dati sufficienti indica che la grandezza è da stimare o inserire.

## 5. Viste di supporto e transizioni

| Vista | Apertura | Conferma e ritorno |
| --- | --- | --- |
| `annualize` | Consumi | Applica consumo/spesa annuali e provenienza; Annulla conserva i dati precedenti |
| `quota` | Impianto | Copia temporanea della quota; Salva applica, Annulla scarta |
| `economics` | Impianto o risultati | Copia temporanea di aliquota/costi; Salva applica e ricalcola; Annulla scarta; torna al passo di origine |
| `source` | Selezione della resa | Fonte, metodo e 20 rese; ritorno senza modifiche |
| `flows` | Grafico dei risultati | Anni 0–15; ritorno ai risultati |
| `scenarios` | Risultati mobile | Tre combinazioni di quota/prezzi; ritorno ai risultati |
| `limits` | Risultati mobile | Ipotesi, formule e limiti; ritorno ai risultati |
| `privacy` | Footer del percorso principale | Informazioni sul funzionamento e sui dati; ritorno alla simulazione |

Le viste di supporto sostituiscono il contenuto del passo; non sono finestre modali. Il focus va al titolo all’apertura. Al ritorno si ripristina sul comando di origine quando disponibile, altrimenti sul titolo del passo. I collegamenti della V2 Figma descrivono il prototipo; la logica di Salva/Annulla è realizzata dal codice.

## 6. Risultati e comunicazione dei numeri

1. Confrontare il rientro senza detrazione con quello dell’aliquota inserita, mantenendo invariati gli altri input. Con aliquota zero, il secondo caso mostra “Da impostare”.
2. Esporre l’esborso completo, il recupero fiscale totale e annuo, il beneficio dei primi 10 anni e quello successivo.
3. Separare risparmio sulla bolletta, ricavi dall’immissione, quote fiscali e costi ricorrenti.
4. Se i costi sono zero, indicarli come **esclusi**, non come gratuiti. Le sostituzioni straordinarie restano fuori dal modello anche inserendo costi annuali.
5. Distinguere energia prodotta, usata in casa, immessa e ancora da acquistare. Il rapporto produzione/consumo non dimostra l’autonomia dalla rete.
6. Mostrare il saldo cumulato fino all’anno 15; la curva fiscale compare soltanto con aliquota positiva. Non rappresentare un rientro successivo al quindicesimo anno come se avvenisse sul bordo del grafico.
7. Consentire la lettura degli stessi flussi in tabella desktop/tablet e schede annuali mobile.
8. Presentare gli scenari come combinazioni illustrative, senza probabilità o garanzie.

Il KPI è un **tempo di rientro semplice**, non un ROI percentuale, VAN o TIR. Le formule e la convenzione di interpolazione sono documentate separatamente.

## 7. Validazione, tastiera e formattazione

- I campi numerici usano input testuali con tastiera decimale, label esplicite, unità, aiuti e messaggi collegati con `aria-describedby`.
- Gli errori sono segnalati visivamente e con `aria-invalid`/messaggio annunciabile. La compilazione iniziale non mostra errori prematuri.
- Il form rifiuta dati fuori limite. La prima grandezza non valida riceve il focus; una sezione chiusa che contiene il campo viene aperta.
- Quando il blur precede un clic su un pulsante, evitare il riassetto del messaggio che sposterebbe il comando sotto il puntatore. Salva segnala l’errore tramite la validazione; Annulla scarta la modifica.
- Formato italiano: virgola decimale, punto delle migliaia; importi a due decimali, kWh interi nella presentazione, prezzi degli scenari a tre decimali e percentuali di copertura a un decimale dove previsto.
- Il rientro del codice è espresso in anni/mesi, arrotondato al mese più vicino. Il campione Figma può usare anni a un decimale. I saldi non vengono calcolati con i valori arrotondati dell’interfaccia.

I dettagli del parsing e del contratto numerico sono in [logiche di calcolo](logiche-calcolo.md).

## 8. Design e responsive

Inter, pesi prevalenti 400/600. Token principali: fondo `#F4F7F6`, superficie bianca, testo `#203738`, secondario `#52676B`, brand `#0F766E`, brand scuro `#115E59`, soft `#EDF7F3`, bordo `#DCE5E2`, sole `#FFCC45`, avviso `#FFF5DA` e testo avviso `#5C400E`. Pannelli con raggio prevalente 20 px, campi e pulsanti con raggi dedicati.

Il riferimento Figma è disegnato a 1440 e 390 px. Il codice adatta il layout anche alle larghezze intermedie: regole principali a 1100, 800, 600 e 359 px; il comportamento effettivo è in `app/globals.css`. Consumi e impianto hanno colonne desktop e una colonna mobile. I risultati economici ed energetici passano a colonna singola; sotto 600 px i dettagli sono navigabili in viste dedicate e i flussi diventano schede annuali.

Non usare le altezze dei frame come altezze fisse delle pagine. Le dimensioni devono adattarsi ai testi e ai dati. I controlli automatici effettuati non sostituiscono la prova con zoom e tecnologie assistive.

## 9. Reset, dati e contenuto storico

“Nuova simulazione” richiede conferma: confermando ripristina input, scelta produttiva, contesto e provenienza iniziali; annullando conserva tutto. La normale navigazione indietro mantiene invece i valori.

La vista “Dati e funzionamento” descrive l’elaborazione locale. L’informativa definitiva deve riflettere titolare, hosting ed eventuali servizi effettivamente usati nel deployment. La V2 non propone il vecchio caricamento simulato della bolletta: `public/legacy` è un archivio, non un OCR o il motore attivo.

## 10. Stato di consegna

La V2 e le sue logiche sono nel ramo di revisione. La [verifica remota](verifiche-e-rilascio.md) dell’anteprima sul commit di riferimento è completata. La PR è in bozza e non è stata promossa in produzione. Le attività residue di rilascio sono elencate nel documento di verifica.
