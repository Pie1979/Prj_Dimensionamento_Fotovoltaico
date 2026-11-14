# SunSize V2 — Specifiche per la realizzazione

**Aggiornamento implementazione:** V2 disponibile nel ramo di revisione. [Anteprima navigabile](https://prj-dimensionamento-fotovoltaico-git-codex-sunsize-ux-pm79.vercel.app), generata dall’integrazione Vercel esistente; può richiedere accesso del proprietario. Produzione non promossa.

Revisione tecnica del **14 novembre 2026**: rilievo della pagina **SunSize V2** confrontato con il codice del ramo `codex/sunsize-ux`, commit [0f90d86](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/tree/0f90d865f9007919e335660fb3585f9188a95aaf). Questa revisione modifica la scheda tecnica; le schermate e le appendici di rilievo restano invariate. La [PR #9](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/pull/9) è in bozza: non rappresenta il sito già pubblicato.

## 1. Come usare questo documento

- **Rilevato**: misure, contenuti, stili e collegamenti estratti dal progetto effettivo.
- **Verificato nel codice**: regole riscontrate nel commit di riferimento e nei test, distinte dal rilievo del canvas. Il prototipo Figma non esegue calcoli; il repository contiene già il motore numerico.
- **Da definire / raccomandazione**: aspetti non presenti nel disegno, da concordare prima del rilascio.
- Tutte le misure sono in **px di progetto a scala 1:1**. Le altezze sono quelle dei campioni, non altezze fisse obbligatorie delle pagine web.
- Le appendici riportano tutti i livelli e i testi con riferimenti alla sorgente. I nomi dei livelli possono essere storici: per le diciture usare il **testo effettivo**.
- Le appendici restano il rilievo fotografico del canvas, non una certificazione dell’applicazione. Questa revisione verifica codice, dati inclusi e test del ramo indicato; non certifica il deployment pubblicato, la fiscalità applicabile o le licenze degli asset.

## 2. Ambito e inventario

SunSize stima produzione fotovoltaica, autoconsumo, benefici economici e rientro dell’investimento. Percorso principale: **Consumi → Impianto → Risultati**. Inclusi annualizzazione, fonte regionale, resa del preventivo, quota personalizzata, detrazione e costi, scenari, limiti, flussi annuali e stato senza aliquota.

| **Schermata / riferimento** | **ID** | **Larghezza × altezza px** |
|---|---|---|
| [Componenti SunSize V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-62) | 15:62 | 800 × 10 |
| [Desktop · 1 Consumi · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-70) | 15:70 | 1440 × 1313 |
| [Desktop · 2 Impianto · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-86) | 15:86 | 1440 × 2300 |
| [Desktop · 3 Risultati · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-102) | 15:102 | 1440 × 2745 |
| [Mobile · 1 Consumi · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-118) | 15:118 | 390 × 1370 |
| [Mobile · 2 Impianto · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-134) | 15:134 | 390 × 2605 |
| [Mobile · 3 Risultati · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-150) | 15:150 | 390 × 3221 |
| [Desktop · Hai solo i dati di un periodo? · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-142) | 22:142 | 1440 × 1117 |
| [Desktop · Consumi annualizzati da verificare · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-173) | 22:173 | 1440 × 1422 |
| [Desktop · Personalizza l’autoconsumo · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-241) | 22:241 | 1440 × 845 |
| [Desktop · Impianto con resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-264) | 22:264 | 1440 × 2179 |
| [Desktop · Risultati con resa del preventivo · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-366) | 22:366 | 1440 × 2724 |
| [Desktop · Da dove arriva la resa regionale? · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-517) | 22:517 | 1440 × 1402 |
| [Mobile · Hai solo i dati di un periodo? · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-566) | 22:566 | 390 × 1124 |
| [Mobile · Consumi annualizzati da verificare · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-597) | 22:597 | 390 × 1492 |
| [Mobile · Personalizza l’autoconsumo · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-650) | 22:650 | 390 × 939 |
| [Mobile · Impianto con resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-673) | 22:673 | 390 × 2481 |
| [Mobile · Risultati con resa del preventivo · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-756) | 22:756 | 390 × 3221 |
| [Mobile · Da dove arriva la resa regionale? · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-895) | 22:895 | 390 × 1520 |
| [Desktop · Detrazione e costi · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-274) | 25:274 | 1440 × 1002 |
| [Desktop · Detrazione e costi · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-308) | 25:308 | 1440 × 1002 |
| [Mobile · Detrazione e costi · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-342) | 25:342 | 390 × 1083 |
| [Mobile · Detrazione e costi · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-376) | 25:376 | 390 × 1114 |
| [Mobile · Scenari: autoconsumo e prezzi · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-410) | 25:410 | 390 × 1359 |
| [Mobile · Ipotesi e limiti · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-436) | 25:436 | 390 × 473 |
| [Mobile · Scenari: autoconsumo e prezzi · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-449) | 25:449 | 390 × 1359 |
| [Mobile · Ipotesi e limiti · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-475) | 25:475 | 390 × 452 |
| [Stati del selettore Regione · specifiche V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-494) | 25:494 | 480 × 600 |
| [SunSize V2 · guida alla revisione](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=26-306) | 26:306 | 1440 × 615 |
| [Desktop · Personalizza l’autoconsumo · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=27-308) | 27:308 | 1440 × 845 |
| [Mobile · Personalizza l’autoconsumo · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=27-332) | 27:332 | 390 × 939 |
| [Desktop · Detrazione non impostata · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-550) | 33:550 | 1440 × 2582 |
| [Mobile · Detrazione non impostata · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-666) | 33:666 | 390 × 2951 |
| [Desktop · Flussi annuali · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-789) | 33:789 | 1440 × 1028 |
| [Mobile · Flussi annuali · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-942) | 33:942 | 390 × 3013 |
| [Desktop · Flussi annuali · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1056) | 33:1056 | 1440 × 1028 |
| [Mobile · Flussi annuali · resa manuale · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1209) | 33:1209 | 390 × 3013 |
| [Desktop · Flussi annuali · aliquota non impostata · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1317) | 33:1317 | 1440 × 1028 |
| [Mobile · Flussi annuali · aliquota non impostata · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1464) | 33:1464 | 390 × 3013 |
| [Mobile · Scenari senza detrazione impostata · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=34-433) | 34:433 | 390 × 1296 |
| [Mobile · Ipotesi e limiti · aliquota non impostata · V2](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=35-380) | 35:380 | 390 × 452 |

## 3. Impaginazione e responsive

### Desktop — riferimento 1440 px

- Pagina principale: padding **64 px** sui quattro lati, area utile **1312 px**, gap verticale **32 px**. Intestazione 1312 × 31 px a (64,64); avanzamento 1312 × 53 px a (64,127); introduzione a (64,212); area principale a (64,363).
- Consumi: colonne **440 + 32 + 840 px**; scheda introduttiva 440 × 599 px, modulo 840 × 804 px, padding 32 px. Campi consumo/spesa da **376 px** ciascuno, gap 24 px nell’area da 776 px.
- Impianto: colonne **864 + 32 + 416 px**. Modulo 864 × 1791 px, padding 32 px, contenuto 800 px. Riepilogo 416 × 705 px, padding 28 px. Campi potenza/costo da 388 px ciascuno, gap 24 px.
- Risultati: sezioni verticali con gap 24 px. Economia/energia: **644 + 24 + 644 px**; padding schede principali 28 px. Azioni finali: due pulsanti **648 × 56 px**, gap 16 px.
- Grafico saldo: area interna **1256 × 290 px** nella scheda da 1312 px. Assi, linee, marker e testi sono misurati in appendice.

### Mobile — riferimento 390 px

- Pagina: padding **16 px verticale / 20 px orizzontale**, contenuto **350 px**, gap esterno **16 px**. Intestazione 350 × 31 px; avanzamento 350 × 41 px.
- Moduli e principali schede risultati: padding **16 px verticale / 20 px orizzontale**, contenuto **310 px**, raggio 20 px. Gap interno tipico 16 px. Alcune schede KPI hanno padding 24 px: prevale il rilievo puntuale.
- Campi e azioni in colonna; pulsanti principali alti 56 px. Pannello promozionale e riepilogo laterale desktop non sono presenti nei percorsi mobili principali.
- Titolo iniziale Consumi **28 px / 120%**; titoli principali Impianto/Risultati **26 px / 120%**.
- Risultati: confronto fiscale e schede in verticale, modifica rapida, scenari e limiti in schermate dedicate. I collegamenti del prototipo dimostrano navigazione, non espansione locale.
- Grafico saldo **310 × 290 px**. Flussi: schede annuali verticali al posto della tabella desktop, anni 0–15.

### Larghezze intermedie — da concordare

Sono disegnati **1440 e 390 px**; breakpoint tablet, larghezza massima oltre desktop e interpolazione margini non sono specificati. Raccomandazione: contenitore fluido, una colonna prima di perdere leggibilità, altezze automatiche, nessuno scorrimento orizzontale. Le coordinate documentano il campione, non impongono posizionamento assoluto. Un riepilogo sticky non è confermato.

## 4. Tipografia

Famiglia usata: **Inter**. Pesi effettivi **400 Regular** e **600 Semi Bold**, tracking **0**, nessun corsivo rilevato. Procurare i font e verificarne le condizioni d’uso. Il fallback di sistema è una scelta implementativa e può cambiare gli a capo.

| **Stile locale V2** | **Font / peso** | **Dimensione px** | **Interlinea** |
|---|---|---|---|
| SunSize V2/micro | Inter Regular | 14 | 150% = 21 px |
| SunSize V2/label | Inter Semi Bold | 14 | 150% = 21 px |
| SunSize V2/body | Inter Regular | 16 | 150% = 24 px |
| SunSize V2/strong | Inter Semi Bold | 16 | 150% = 24 px |
| SunSize V2/subhead | Inter Semi Bold | 20 | 150% = 30 px |
| SunSize V2/h2 | Inter Semi Bold | 26 | 120% = 31.2 px |
| SunSize V2/h1 | Inter Semi Bold | 36 | 120% = 43.2 px |
| SunSize V2/display | Inter Semi Bold | 48 | 120% = 57.6 px |
| SunSize V2/metric | Inter Semi Bold | 56 | 120% = 67.2 px |

Gli stili senza prefisso V2 sono preesistenti e non vanno adottati automaticamente. V2/metric da 56 px è disponibile ma non rilevato sui testi delle schermate; i KPI principali usano 26 px. L’eccezione Consumi mobile è 28 px. Le altezze dei box Figma sono talvolta arrotondate: privilegiare font, peso e interlinea.

## 5. Colori e token

| **Variabile locale** | **Tipo** | **Valore / alias risolto** |
|---|---|---|
| primitive/background | COLOR | #F4F7F6 |
| color/background | COLOR | primitive/background → #F4F7F6 |
| primitive/surface | COLOR | #FFFFFF |
| color/surface | COLOR | primitive/surface → #FFFFFF |
| primitive/foreground | COLOR | #203738 |
| color/foreground | COLOR | primitive/foreground → #203738 |
| primitive/muted | COLOR | #52676B |
| color/muted | COLOR | primitive/muted → #52676B |
| primitive/brand | COLOR | #0F766E |
| color/brand | COLOR | primitive/brand → #0F766E |
| primitive/brand-dark | COLOR | #115E59 |
| color/brand-dark | COLOR | primitive/brand-dark → #115E59 |
| primitive/brand-soft | COLOR | #EDF7F3 |
| color/brand-soft | COLOR | primitive/brand-soft → #EDF7F3 |
| primitive/border | COLOR | #DCE5E2 |
| color/border | COLOR | primitive/border → #DCE5E2 |
| primitive/accent | COLOR | #F2AC39 |
| color/accent | COLOR | primitive/accent → #F2AC39 |
| radius/panel | FLOAT | 20 |
| solar | COLOR | #FFCC45 |
| solar-soft | COLOR | #FFF5DA |
| solar-ink | COLOR | #5C400E |

Ruoli principali: sfondo **#F4F7F6**, superficie **#FFFFFF**, testo **#203738**, secondario/bordo input **#52676B**, azione **#0F766E**, pannello scuro **#115E59**, informazione soft **#EDF7F3**, bordo secondario **#DCE5E2**, sole **#FFCC45**, avviso soft **#FFF5DA**, testo avviso **#5C400E**, errore Regione **#A52D2D**.

**primitive/accent #F2AC39** è distinto da **solar #FFCC45**: non sostituirli indiscriminatamente. Nessuna ombra o sfocatura rilevata.

## 6. Componenti, bordi e spaziature

- **SunSize V2/Button**: master locale **320 × 56 px**, orizzontale, padding laterale **16 px**, raggio **12 px**, testo centrato Inter 600 **16/24 px**. Le istanze si adattano al contenitore.
- Primario: brand/bianco. Secondario: bianco/brand, bordo **1 px #DCE5E2**. Azioni testuali anche **34 px**, testo 14/21 px, raggio 0; altre alte 36 px. Prevalgono le misure delle singole istanze.
- **SunSize V2/NumField**: master **320 × 114 px**, verticale, gap **8 px**. Label 14/21 px; input **56 px**; aiuto 14/21 px. Input: bordo **1 px #52676B**, raggio **10 px**, padding **13 px verticale / 16 px orizzontale**; valore Inter 400 **16/24 px**. Aiuti multilinea fanno crescere il gruppo.
- Schede: raggio tipico **20 px**; rilevati anche 0, 10, 12 e 16 px.
- Avanzamento: tre passi; corrente brand/bianco, completato soft/brand con spunta, futuro bianco/testo.
- Quote: 25%, 40%, 60%, selezione con spunta e brand; illustrative, non misurate.
- Spaziature: 8, 12, 16, 20, 24, 28, 32 px; pagina desktop 64 px. Presenti micro-gap 2 e 6 px: non normalizzare senza approvazione.
- Hover, pressed, focus, disabled, caricamento ed errori generali non sono completamente disegnati: da specificare.

## 7. Campi, unità e validazione

| **Dato** | **Esempio / unità** | **Regola disponibile** |
|---|---|---|
| Consumo annuo | 3.000 kWh/anno | Positivo; misurato o annualizzato e dichiarato |
| Spesa annua | 900 €/anno | Stesso periodo, tasse comprese; non è il risparmio |
| Periodo | 500 kWh; 150 €; 2 mesi | Fra 1 e 12 mesi; mesi frazionari non specificati |
| Potenza | 4,5 kWp | Positiva, nominale del preventivo |
| Costo totale | 6.990 € | Positivo, esborso completo prima delle detrazioni |
| Modalità resa | Regione / Preventivo | Conservare valori nel cambio modalità |
| Regione | Nessuna iniziale; Lazio nel campione | Una delle 20 regioni se modalità regionale |
| Resa manuale | 1.440 kWh/kWp/anno | Resa elettrica; non sottrarre nuovamente 14% |
| Orario | Durante tutta la giornata | Solo contesto; non modifica automaticamente la quota |
| Batteria | Non so / da valutare | Non simulata; costo nel preventivo se pertinente |
| Autoconsumo | 25%, 40%, 60%; personalizzato 0–100% | Quota della produzione, limitata dal consumo |
| Prezzo evitato | 0,25 €/kWh | Senza costi fissi; valore scenario non verificato |
| Prezzo immissione | 0,09 €/kWh | Ipotesi, non tariffa garantita |
| Aliquota | Non impostata / 0% / esempio 50% | Non presumere aliquota; 0 esclude il recupero |
| Costi ricorrenti | 0 €/anno | Zero significa esclusi, non gratuiti |

### Regione: tre stati espliciti

1. Iniziale: **“Seleziona la tua regione ⌄”**, nessuna preselezione, resa e produzione indisponibili.
2. Errore dopo tentativo di continuare: **“Seleziona una regione oppure inserisci il valore del preventivo.”** Messaggio vicino al campo e focus al selettore.
3. Compilato: Lazio, resa proposta 1.440 kWh/kWp/anno. Valori conservati nel cambio modalità e nei ritorni.

**Valori iniziali nel codice:** nessuna regione; modalità regionale; resa manuale, consumo, spesa, potenza e costo non compilati; quota autoconsumo 40%; fattore produzione 100%; prezzi 0,25/0,09 €/kWh; aliquota 0%; costi ricorrenti 0. Il 40% è un’ipotesi modificabile, non una misura. Orario iniziale “Non lo so”, con opzioni “Soprattutto la sera”, “Durante tutta la giornata”, “Soprattutto di giorno”. Batteria iniziale “Non so / da valutare”, con alternative “No” e “Sì”. Le risposte non modificano numericamente la quota. Il Lazio è esclusivamente il campione grafico.

### Annualizzazione

Consumo annuo = consumo periodo ÷ mesi × 12; spesa annua = spesa periodo ÷ mesi × 12. Esempio: 500 ÷ 2 × 12 = 3.000 kWh/anno; 150 ÷ 2 × 12 = 900 €/anno. Badge **“Dati annualizzati · da verificare”**, provenienza **“Da 500 kWh e 150 € in 2 mesi”**. È estrapolazione, non misura; stagioni, riscaldamento e abitudini possono cambiarne l’esito.

## 8. Motore di simulazione — regole verificate

Regole confrontate con `lib/solar-calc.ts` del commit di riferimento. Il prototipo è illustrativo; il motore è già implementato nel repository. Calcolo a precisione piena, arrotondamenti soltanto in presentazione. Nelle formule descrittive seguenti quota, aliquota e produzione relativa sono percentuali UI; il modello memorizza frazioni 0–1.

- Produzione **P** = potenza × resa × (produzione relativa / 100). Valore iniziale produzione relativa 100%; il campione Figma usa quindi fattore 1. Questa riduzione di scenario non è una seconda applicazione automatica delle perdite PVGIS.
- Autoconsumo **A** = min(P × quota richiesta / 100, consumo annuo **C**).
- Immessa **I** = P − A; da acquistare **G** = C − A.
- Risparmio **R** = A × prezzo evitato; ricavi **V** = I × prezzo immissione.
- Operativo **B** = R + V − costi ricorrenti inseriti. Se non modellati, segnalarne l’esclusione, non l’assenza.
- Recupero fiscale totale **D** = costo × aliquota / 100, assumendo nell’esempio l’intero costo ammissibile. Base ammissibile, massimali, requisiti e capienza reale richiedono verifica esterna.
- Quota fiscale = D/10 negli anni 1–10, 0 dall’11°. Nel codice attuale aliquota assente e 0 esplicito hanno la stessa rappresentazione numerica e producono recupero nullo; il confronto mostra “Da impostare” con aliquota 0. Il 50% è un esempio, non un default o un diritto verificato.
- Saldo senza all’anno n = −costo + n × B. Saldo con = −costo + n × B + min(n,10) × D/10.
- Rientro: primo saldo non negativo, interpolato fra gli anni. Fra n−1 e n: (n−1) + valore assoluto del saldo precedente ÷ incremento dell’anno. Non usare sempre costo/(B+D/10) quando il rientro supera il decimo anno.
- Rientro ricercato negli anni 1–50; se nessun saldo raggiunge zero mostrare **“Non raggiunto entro 50 anni”**. Non dividere per benefici nulli o negativi. Verificare comunque i saldi annuali: un operativo negativo può coesistere con un beneficio temporaneo positivo. Grafico e flussi mostrano gli anni **0–15**; un pareggio successivo non va collocato al quindicesimo anno. L’interpolazione è una convenzione indicativa: quote attribuite a fine anno, non una previsione del giorno d’incasso.
- Sensibilità: tre combinazioni con quota **−10 / 0 / +10 punti percentuali** e entrambi i prezzi **×0,9 / ×1 / ×1,1**. Limitare la quota richiesta a **0–100%**, quindi A al consumo. Produzione (compreso il fattore relativo), investimento, costi e aliquota restano invariati. Etichette neutrali: quota/prezzi ridotti, ipotesi inserite, quota/prezzi aumentati. Non sono probabilità o garanzie; maggiore autoconsumo non implica sempre più beneficio se il prezzo venduto supera quello evitato.

### Caso numerico di collaudo

| **Indicatore** | **Valore atteso** |
|---|---|
| Produzione | 4,5 × 1.440 = 6.480 kWh/anno |
| Autoconsumo | 2.592 kWh; 40% produzione, 86,4% consumi |
| Immessa / da acquistare | 3.888 / 408 kWh/anno |
| Risparmio / ricavi | 648,00 / 349,92 €/anno |
| Operativo, costi esclusi | 997,92 €/anno |
| Recupero 50% | 3.495,00 € totali, 349,50 €/anno per 10 anni |
| Beneficio con ipotesi, anni 1–10 / dall’11° | 1.347,42 / 997,92 €/anno |
| Rientro senza / con ipotesi | ≈ 7,0 / ≈ 5,2 anni |
| Saldo anno 7 senza | −4,56 €: 7,0 è arrotondato |
| Saldo anno 10 senza / con | +2.989,20 / +6.484,20 € |
| Saldo anno 15 senza / con | +7.978,80 / +11.473,80 € |
| Costi 100 €/anno | B 897,92 €; rientro ≈ 7,8 / ≈ 5,6 anni |
| Quota 30%, prezzi 0,225/0,081 | Operativo 804,82 €/anno; con fisco 1.154,32 €/anno; ≈ 6,1 anni |
| Quota 50%, prezzi 0,275/0,099 | A limitato a 3.000 kWh; operativo 1.169,52 €/anno; con fisco 1.519,02 €/anno; ≈ 4,6 anni |

## 9. Fonte regionale e limiti

Fonte dichiarata: elaborazione SunSize su **209 campioni PVGIS 5.3/SARAH3 (2005–2023)**, 20 regioni, sud, 30°, silicio cristallino, perdite di sistema **14% già comprese**. Media spaziale approssimata arrotondata a 10 kWh/kWp/anno, non media regionale ufficiale o valutazione del singolo tetto. Confini citati: Eurostat/GISCO NUTS 2024. Metodo e dati inclusi riscontrati nel repository: [docs/rese-regionali.md](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/blob/0f90d865f9007919e335660fb3585f9188a95aaf/docs/rese-regionali.md). I test confermano la coerenza delle 20 rese con tutte le 209 osservazioni archiviate. Questa revisione non scarica un nuovo dataset remoto e non certifica l’accuratezza del singolo tetto. La resa è energia elettrica specifica, non irraggiamento in kWh/m². Aggregazione con pesi cos(latitudine), griglia 0,5° o 0,25° dove i punti sarebbero meno di cinque; Trento/Bolzano uniti nella regione Trentino-Alto Adige. La tabella delle 20 rese è trascritta integralmente nei testi della schermata fonte in appendice.

Nessuna seconda riduzione del 14%, neppure per resa del preventivo. Località, esposizione e ombre possono cambiare la produzione. Nessuna simulazione oraria/batteria. Rientro non attualizzato, senza inflazione, degrado, finanziamento e sostituzioni straordinarie; manutenzione/assicurazione solo se inserite. Detrazione ipotizzata, non verificata né sconto immediato. Scenari non probabilità o garanzie. Simulazione indicativa, non preventivo.

## 10. Navigazione, stato e formattazione

- Percorsi regione/preventivo hanno destinazioni distinte per personalizzazione, detrazione, risultati e flussi: conservare la provenienza nei ritorni.
- Salvataggio e annullamento sono azioni distinte anche se il prototipo arriva allo stesso frame: il collegamento non dimostra persistenza o ricalcolo.
- **Nel codice**, “Nuova simulazione” chiede conferma della cancellazione. Confermare azzera dati, regione, resa manuale e contesto e ripristina le ipotesi iniziali; annullare conserva la simulazione. Nei ritorni ordinari i dati rimangono; il collegamento rapido a detrazione/costi apre le ipotesi e mette a fuoco il relativo campo. Il solo collegamento Figma non esegue queste operazioni.
- Formato italiano: virgola decimale, punto migliaia; importi a due decimali, energia a interi nella presentazione. Negli scenari i prezzi usano tre decimali (0,225 e 0,081), evitando di nascondere la variazione. Il codice esprime il rientro in anni/mesi arrotondati al mese più vicino; Figma usa anche anni a un decimale. Il motore non usa tali arrotondamenti nel saldo. Parsing: `6.990,50` → 6990,5; `4.5` → 4,5; `1.400` → 1400; stringhe malformate e valori non finiti sono rifiutati. Unità: kWh, kWp, kWh/kWp/anno, €/kWh, €/anno.
- Nel percorso esaminato gli input sono in stato React in memoria: nessun salvataggio degli input in localStorage, sessionStorage o backend, né invio a PVGIS durante la compilazione. Un refresh perde la simulazione. Non è una verifica dell’intero deployment o di eventuali servizi aggiunti esternamente; privacy e analytics vanno controllati prima della pubblicazione.

## 11. Risorse e accessibilità

Nessun riempimento raster rilevato nelle schermate analizzate. SunSize e PCODING sono testo; frecce/spunte/selettori sono anche caratteri. Grafici e forme sono livelli editabili con misure e colori in appendice. Non risultano fotografie da consegnare; verificare asset eventualmente esterni a questa pagina.

**Raccomandazioni, non stati grafici approvati:** label associate ai campi, gruppi radio per modalità/quote, passo corrente semantico, uso completo da tastiera, focus visibile, errori annunciati e non solo cromatici, equivalente tabellare del grafico, titoli gerarchici, confronto fiscale accessibile. Verificare aree interattive delle azioni da 34–36 px, contrasto, zoom 200%, testi lunghi e assenza di overflow.

## 12. Stato di realizzazione e verifiche da completare

1. **V2 implementata nel codice.** Layout, tipografia Inter, token cromatici, moduli, riepilogo impianto e risultati riprendono il canvas. Sono state confrontate visivamente le schermate principali; la revisione finale dell’anteprima resta necessaria prima del rilascio, senza dichiarare una certificazione 1:1 di ogni stato.
2. **Annualizzazione implementata.** Periodo selezionabile da **1 a 12 mesi interi**; consumo e spesa positivi riferiti allo stesso periodo, formula ×12/mesi. Provenienza, badge e avvisi rimangono visibili fino ai risultati. Le correzioni successive ai valori annuali sono segnalate; nessuna estrapolazione viene presentata come misura annuale.
3. **Stato fiscale:** aliquota numerica iniziale 0; sia assente sia 0 esplicito escludono il recupero e mostrano “Da impostare”. Il modello non conserva una scelta distinta “nessuna detrazione applicabile”. Il 50% del canvas resta solo un esempio.
4. **Viste di supporto implementate:** autoconsumo e detrazione/costi usano valori temporanei. Salva applica, Annulla scarta. Regione e resa manuale restano distinte e conservate nei ritorni. Fonte, flussi, scenari e limiti sono navigabili; focus ripristinato sul comando di apertura.
5. **Responsive verificato nel browser a 1440, 768, 390 e 320 px.** Flussi in tabella su desktop/tablet, con contenitore scorrevole accessibile da tastiera; su mobile schede per gli anni 0–15. I grafici derivano dai dati del motore, non dalle curve statiche del campione Figma.
6. **Accessibilità:** Axe non rileva violazioni A/AA nelle viste controllate. Sono verificati errori, focus, ritorni e operazioni da tastiera. Restano da completare le prove manuali con lettori di schermo, zoom 200% e dispositivi reali. Il clic su Salva non viene perso quando un errore numerico modifica l’altezza del modulo.
7. Restano esterne al modello la verifica della fiscalità applicabile, delle spese ammissibili e della capienza; una futura base agevolabile distinta dal costo totale richiede un input dedicato. Nessuna aliquota legale è certificata da questa scheda.
8. **Preparazione al rilascio:** presente la vista “Dati e funzionamento”; gli input restano in memoria e si perdono dopo refresh. Completare le informazioni privacy/titolare adatte all’hosting effettivo, confermare dominio e destinazione di produzione e revisionare l’anteprima prima di integrare la PR.
9. I nomi storici dei livelli non sono identificatori di calcolo o testi del prodotto. Le appendici restano il rilievo invariato del canvas; i testi del campione vanno adattati ai dati reali e ai relativi stati.

## 13. Checklist di accettazione

**Verifica tecnica eseguita sul commit di riferimento:** 16 test unitari e 5 test end-to-end superati il 14 novembre 2026; build, lint e TypeScript validi. Playwright verifica il percorso completo a 1440, 768, 390 e 320 px; Axe controlla le viste principali e i flussi. Queste prove non certificano la fiscalità o la conformità visiva completa.

- [x] 20 regioni e 209 osservazioni coerenti, nessuna regione implicita, precedenza manuale solo nella modalità corrispondente.
- [x] Conservazione dell’energia, autoconsumo non oltre consumo/produzione e ricalcolo quando cambia la produzione.
- [x] Esborso intero, detrazione contata una sola volta e interrotta dopo l’anno 10.
- [x] Confronto fiscale omogeneo e identità dei flussi; aliquota zero senza vantaggio fiscale.
- [x] Rientro dopo il decimo anno e casi senza rientro gestiti; costi elevati non producono un risultato finito inventato.
- [x] Sensibilità con prezzi/quote dichiarati, quota limitata a 0–100% e autoconsumo limitato al fabbisogno.
- [x] Parsing italiano e rifiuto degli input numerici non validi.
- [ ] Collaudo visivo 1:1 di tutte le schermate V2 a 1440 e 390 px, con layout fluido anche a 320 px e tablet.
- [x] Annualizzazione con provenienza, avviso e aiuti coerenti; periodo limitato a 1–12 mesi interi.
- [ ] Verifica completa da tastiera, contrasto, zoom e lettore di schermo.
- [x] Test end-to-end di Salva/Annulla, ritorni con focus, ricalcolo e flussi in schede mobile. Revisione finale delle schermate in anteprima ancora da effettuare.
- [ ] Conferma delle verifiche esterne fiscali e del deployment prima della pubblicazione.

## 14. Indicazioni operative per la realizzazione

### Fonti e struttura del codice

Riferimento riproducibile: [albero del commit 0f90d86](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/tree/0f90d865f9007919e335660fb3585f9188a95aaf). Il progetto usa Next.js 15.5.20, React 19.1 e TypeScript; il calcolo è locale al browser. Non è necessario introdurre un backend per le funzioni attuali.

| **Responsabilità** | **File nel repository** | **Regola** |
|---|---|---|
| Modello numerico | [lib/solar-calc.ts](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/blob/0f90d865f9007919e335660fb3585f9188a95aaf/lib/solar-calc.ts) | Unica logica per simulazione, confronto fiscale e sensibilità; non duplicare formule nei componenti |
| Tipi e valori iniziali | lib/types.ts | `SimInput` contiene numeri; `UsageContext` raccoglie orario/batteria separatamente |
| Selezione della resa | lib/production-estimate.ts e lib/regional-yields.json | Regione/manuale e valori distinti; `irraggiamento` è il nome storico della **resa elettrica specifica**, non kWh/m² |
| Formattazione e parsing | lib/format.ts e lib/parse.ts | Precisione interna piena; conversione percentuali soltanto al confine UI/modello |
| Stato e navigazione | app/page.tsx | Tre passi, conservazione dati, focus del passo o del campo da modificare, reset confermato |
| Confronto e flussi | components/investment-comparison.tsx | Stessi input nei due casi tranne aliquota; anni 0–15, quota fiscale zero dall’11° |
| Grafico e risultati | components/payback-chart.tsx e components/results-step.tsx | Serie derivate dal motore; seconda curva solo con aliquota positiva; tabella equivalente |
| Prove riproducibili | tests/solar-calc.test.mjs e tests/regional-yields.test.mjs | Eseguire `npm test`; completare lint, TypeScript e build dopo modifiche al codice |

### Viste e annualizzazione

Il codice della V2 usa anche components/support-views.tsx per le viste dedicate e lib/annualize.ts per la stima da bollette parziali. La suite e2e/sunsize.spec.ts e playwright.config.ts verifica il percorso nel browser; il workflow Validate SunSize esegue i controlli sulle PR e sul ramo di lavoro.

### Contratto degli input e dei risultati

- Tutti gli input numerici devono essere finiti. Consumo, spesa annua, kWp, costo e resa devono essere >0. Prezzi e costi ricorrenti >=0; quota e aliquota in \[0,1\]; fattore produzione in (0,1\].
- In UI quote/aliquota/fattore produzione sono percentuali. Nel modello **40% = 0,4**, **50% = 0,5**, **100% = 1**: non dividere due volte per 100.
- L’attuale campo spesa annua è richiesto ma non determina il prezzo evitato, i risparmi o il rientro. Il prezzo evitato resta un’ipotesi separata riferita alle componenti variabili.
- I risultati non validi non si renderizzano come simulazioni plausibili: il motore rifiuta i parametri con `RangeError`, mentre il form segnala il campo da correggere.
- Il nome storico `investimentoNetto` nel risultato vale il costo completo, **senza sottrarre la detrazione**. `produzioneLorda` contiene la produzione stimata dalla resa già comprensiva del modello PVGIS delle perdite; non rappresenta energia prima del 14%.
- `payback.reached=false` significa “non raggiunto entro 50 anni”. L’eventuale sentinella numerica interna non è un tempo di rientro da presentare. Non interpretare il limite di ricerca come prova di mancato rientro per sempre.
- Il KPI è il **tempo di rientro semplice**, non un ROI percentuale, un VAN o un TIR. Il primo attraversamento dello zero non garantisce che il saldo resterà positivo se i flussi successivi diventano negativi: il grafico e i saldi devono restare visibili.

### Ulteriori casi di collaudo

| **Caso** | **Input specifici** | **Risultato atteso** |
|---|---|---|
| Scenario di produzione al 50% | Caso Lazio centrale, fattore 0,5 | P=3.240; A=1.296; I=1.944 kWh; operativo 498,96 €/anno con costi esclusi |
| Rientro dopo fine agevolazione | C=1.000 kWh; kWp=1; resa=1.000; quota=100%; costo=3.000 €; evitato=0,10 €/kWh; aliquota=50%; costi=0 | Operativo 100 €/anno; quota 150 €/anno per 10 anni; rientro 30 anni senza / 15 con; saldo con anno 10 = −500 € |
| Sola detrazione insufficiente | Caso centrale, prezzi entrambi 0, aliquota=50%, costi=0 | Recupero totale 3.495 €; nessun rientro entro 50 anni |
| Costi ricorrenti elevati | Caso centrale, 1.100 €/anno, aliquota=50% | Operativo −102,08 €/anno; nessun rientro entro 50 anni, saldo decrescente dopo anno 10 |
| Aliquota zero | Qualsiasi caso valido con aliquota=0 | Quote fiscali nulle; serie senza/con numericamente identiche, seconda curva omessa |
| Quota al limite negli scenari | Quota centrale 95%, variante +10 punti | Richiesta limitata al 100%, poi autoconsumo limitato al consumo; nessuna energia creata |

Questi criteri completano le regole funzionali; non implicano che tutti i flussi e i dettagli visivi V2 siano già stati realizzati nel codice.

## Appendici tecniche

## Appendice A — Matrice delle interazioni effettive

**121 occorrenze** di interazione. La matrice descrive navigazione e configurazioni del prototipo, non dimostra calcolo, salvataggio o reset. I nomi dei livelli possono essere storici: la seconda colonna usa i testi effettivi.

| **Origine** | **Elemento / ID** | **Interazione** | **Trigger e azioni rilevate** |
|---|---|---|---|
| Desktop · 1 Consumi · V2 | Continua: configura l’impianto → \\[15:205\\] | 22:556 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 1 Consumi · V2 | Non ho dati annuali: aiutami a stimare \\[15:207\\] | 22:557 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Hai solo i dati di un periodo? · V2 \\[22:142\\] {"type":"NAVIGATE\\_TO","destinationId":"22:142","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | ✓  Consumi \\[15:91\\] | 25:488 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | Modifica consumi \\[15:247\\] | 22:558 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | Ho la resa del preventivo → \\[21:135\\] | 22:559 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Impianto con resa manuale · V2 \\[22:264\\] {"type":"NAVIGATE\\_TO","destinationId":"22:264","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | Fonte e metodo dei valori regionali → \\[21:137\\] | 22:560 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Da dove arriva la resa regionale? · V2 \\[22:517\\] {"type":"NAVIGATE\\_TO","destinationId":"22:517","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | Personalizza autoconsumo → \\[15:288\\] | 22:561 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Personalizza l’autoconsumo · V2 \\[22:241\\] {"type":"NAVIGATE\\_TO","destinationId":"22:241","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | Detrazione ipotizzata 50% · costi esclusi · Modifica → \\[25:302\\] | 25:304 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · V2 \\[25:274\\] {"type":"NAVIGATE\\_TO","destinationId":"25:274","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | Calcola la simulazione → \\[15:306\\] | 22:562 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 3 Risultati · V2 \\[15:102\\] {"type":"NAVIGATE\\_TO","destinationId":"15:102","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 2 Impianto · V2 | ← Torna ai consumi \\[15:308\\] | 22:563 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 3 Risultati · V2 | ✓  Consumi \\[15:107\\] | 25:489 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 3 Risultati · V2 | ✓  Impianto \\[15:109\\] | 25:490 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 3 Risultati · V2 | Modifica ipotesi fiscale → \\[33:778\\] | 33:780 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · V2 \\[25:274\\] {"type":"NAVIGATE\\_TO","destinationId":"25:274","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 3 Risultati · V2 | Inserisci i costi → \\[25:305\\] | 25:307 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · V2 \\[25:274\\] {"type":"NAVIGATE\\_TO","destinationId":"25:274","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 3 Risultati · V2 | Vedi i flussi anno per anno → \\[33:901\\] | 33:903 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Flussi annuali · V2 \\[33:789\\] {"type":"NAVIGATE\\_TO","destinationId":"33:789","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 3 Risultati · V2 | Modifica e ricalcola → \\[15:495\\] | 22:564 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · 3 Risultati · V2 | Nuova simulazione \\[15:497\\] | 22:565 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 1 Consumi · V2 | Continua: impianto → \\[15:235\\] | 22:934 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 1 Consumi · V2 | Non ho dati annuali \\[15:237\\] | 22:935 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Hai solo i dati di un periodo? · V2 \\[22:566\\] {"type":"NAVIGATE\\_TO","destinationId":"22:566","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | ✓  Consumi \\[15:139\\] | 25:491 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | Modifica consumi \\[15:335\\] | 22:936 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | Ho la resa del preventivo → \\[21:152\\] | 22:937 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Impianto con resa manuale · V2 \\[22:673\\] {"type":"NAVIGATE\\_TO","destinationId":"22:673","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | Fonte e metodo dei valori regionali → \\[21:154\\] | 22:938 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Da dove arriva la resa regionale? · V2 \\[22:895\\] {"type":"NAVIGATE\\_TO","destinationId":"22:895","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | Personalizza autoconsumo → \\[15:376\\] | 22:939 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Personalizza l’autoconsumo · V2 \\[22:650\\] {"type":"NAVIGATE\\_TO","destinationId":"22:650","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | Detrazione ipotizzata 50% · costi esclusi · Modifica → \\[25:370\\] | 25:372 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · V2 \\[25:342\\] {"type":"NAVIGATE\\_TO","destinationId":"25:342","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | Calcola la simulazione → \\[15:394\\] | 22:940 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 3 Risultati · V2 \\[15:150\\] {"type":"NAVIGATE\\_TO","destinationId":"15:150","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 2 Impianto · V2 | ← Torna ai consumi \\[15:396\\] | 22:941 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | ✓  Consumi \\[15:155\\] | 25:492 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | ✓  Impianto \\[15:157\\] | 25:493 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Modifica ipotesi fiscale → \\[33:931\\] | 33:933 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · V2 \\[25:342\\] {"type":"NAVIGATE\\_TO","destinationId":"25:342","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Modifica le ipotesi e ricalcola → \\[21:176\\] | 22:942 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Inserisci i costi → \\[25:373\\] | 25:375 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · V2 \\[25:342\\] {"type":"NAVIGATE\\_TO","destinationId":"25:342","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Vedi i flussi anno per anno → \\[33:1032\\] | 33:1034 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Flussi annuali · V2 \\[33:942\\] {"type":"NAVIGATE\\_TO","destinationId":"33:942","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Scenari: autoconsumo e prezzi  + · Quota ±10 punti · prezzi ±10% · ipotesi illustrative \\[15:574\\] | 34:404 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Scenari: autoconsumo e prezzi · V2 \\[25:410\\] {"type":"NAVIGATE\\_TO","destinationId":"25:410","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Ipotesi e limiti, in chiaro  + · PVGIS, prezzi, detrazione e costi esclusi \\[15:591\\] | 25:448 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Ipotesi e limiti · V2 \\[25:436\\] {"type":"NAVIGATE\\_TO","destinationId":"25:436","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Modifica e ricalcola → \\[15:596\\] | 22:943 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · 3 Risultati · V2 | Nuova simulazione \\[15:598\\] | 22:944 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Hai solo i dati di un periodo? · V2 | Usa la stima e controlla i dati → \\[22:169\\] | 22:239 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Consumi annualizzati da verificare · V2 \\[22:173\\] {"type":"NAVIGATE\\_TO","destinationId":"22:173","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Hai solo i dati di un periodo? · V2 | ← Torna ai consumi \\[22:171\\] | 22:240 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Consumi annualizzati da verificare · V2 | Continua: configura l’impianto → \\[22:217\\] | 22:237 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Consumi annualizzati da verificare · V2 | Non ho la bolletta: aiutami a stimare \\[22:218\\] | 22:238 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Hai solo i dati di un periodo? · V2 \\[22:142\\] {"type":"NAVIGATE\\_TO","destinationId":"22:142","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Personalizza l’autoconsumo · V2 | Usa questa quota → \\[22:258\\] | 22:262 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Personalizza l’autoconsumo · V2 | Annulla e torna all’impianto \\[22:260\\] | 22:263 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Impianto con resa manuale · V2 | Modifica consumi \\[22:283\\] | 22:509 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Impianto con resa manuale · V2 | Torna alla stima regionale → \\[22:363\\] | 22:365 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Impianto con resa manuale · V2 | Personalizza autoconsumo → \\[22:313\\] | 27:331 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Personalizza l’autoconsumo · resa manuale · V2 \\[27:308\\] {"type":"NAVIGATE\\_TO","destinationId":"27:308","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Impianto con resa manuale · V2 | Detrazione ipotizzata 50% · costi esclusi · Modifica → \\[25:336\\] | 25:338 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · resa manuale · V2 \\[25:308\\] {"type":"NAVIGATE\\_TO","destinationId":"25:308","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Impianto con resa manuale · V2 | Calcola la simulazione → \\[22:322\\] | 22:511 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Risultati con resa del preventivo · V2 \\[22:366\\] {"type":"NAVIGATE\\_TO","destinationId":"22:366","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Impianto con resa manuale · V2 | ← Torna ai consumi \\[22:323\\] | 22:512 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Risultati con resa del preventivo · V2 | Modifica ipotesi fiscale → \\[33:1045\\] | 33:1047 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · resa manuale · V2 \\[25:308\\] {"type":"NAVIGATE\\_TO","destinationId":"25:308","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Risultati con resa del preventivo · V2 | Inserisci i costi → \\[25:339\\] | 25:341 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · resa manuale · V2 \\[25:308\\] {"type":"NAVIGATE\\_TO","destinationId":"25:308","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Risultati con resa del preventivo · V2 | Vedi i flussi anno per anno → \\[33:1168\\] | 33:1170 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Flussi annuali · resa manuale · V2 \\[33:1056\\] {"type":"NAVIGATE\\_TO","destinationId":"33:1056","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Risultati con resa del preventivo · V2 | Modifica e ricalcola → \\[22:476\\] | 22:515 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Impianto con resa manuale · V2 \\[22:264\\] {"type":"NAVIGATE\\_TO","destinationId":"22:264","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Risultati con resa del preventivo · V2 | Nuova simulazione \\[22:477\\] | 22:516 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Da dove arriva la resa regionale? · V2 | ← Torna all’impianto \\[22:553\\] | 22:555 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Hai solo i dati di un periodo? · V2 | Usa la stima e controlla i dati → \\[22:593\\] | 22:648 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Consumi annualizzati da verificare · V2 \\[22:597\\] {"type":"NAVIGATE\\_TO","destinationId":"22:597","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Hai solo i dati di un periodo? · V2 | ← Torna ai consumi \\[22:595\\] | 22:649 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Consumi annualizzati da verificare · V2 | Continua: impianto → \\[22:626\\] | 22:646 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Consumi annualizzati da verificare · V2 | Non ho la bolletta \\[22:627\\] | 22:647 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Hai solo i dati di un periodo? · V2 \\[22:566\\] {"type":"NAVIGATE\\_TO","destinationId":"22:566","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Personalizza l’autoconsumo · V2 | Usa questa quota → \\[22:667\\] | 22:671 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Personalizza l’autoconsumo · V2 | Annulla e torna all’impianto \\[22:669\\] | 22:672 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Impianto con resa manuale · V2 | Modifica consumi \\[22:692\\] | 22:885 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Impianto con resa manuale · V2 | Torna alla stima regionale → \\[22:753\\] | 22:755 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Impianto con resa manuale · V2 | Personalizza autoconsumo → \\[22:722\\] | 27:355 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Personalizza l’autoconsumo · resa manuale · V2 \\[27:332\\] {"type":"NAVIGATE\\_TO","destinationId":"27:332","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Impianto con resa manuale · V2 | Detrazione ipotizzata 50% · costi esclusi · Modifica → \\[25:404\\] | 25:406 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · resa manuale · V2 \\[25:376\\] {"type":"NAVIGATE\\_TO","destinationId":"25:376","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Impianto con resa manuale · V2 | Calcola la simulazione → \\[22:731\\] | 22:887 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Risultati con resa del preventivo · V2 \\[22:756\\] {"type":"NAVIGATE\\_TO","destinationId":"22:756","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Impianto con resa manuale · V2 | ← Torna ai consumi \\[22:732\\] | 22:888 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Modifica ipotesi fiscale → \\[33:1198\\] | 33:1200 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · resa manuale · V2 \\[25:376\\] {"type":"NAVIGATE\\_TO","destinationId":"25:376","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Modifica le ipotesi e ricalcola → \\[22:788\\] | 22:892 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Impianto con resa manuale · V2 \\[22:673\\] {"type":"NAVIGATE\\_TO","destinationId":"22:673","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Inserisci i costi → \\[25:407\\] | 25:409 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · resa manuale · V2 \\[25:376\\] {"type":"NAVIGATE\\_TO","destinationId":"25:376","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Vedi i flussi anno per anno → \\[33:1299\\] | 33:1301 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Flussi annuali · resa manuale · V2 \\[33:1209\\] {"type":"NAVIGATE\\_TO","destinationId":"33:1209","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Scenari: autoconsumo e prezzi  + · Quota ±10 punti · prezzi ±10% · ipotesi illustrative \\[22:845\\] | 34:432 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Scenari: autoconsumo e prezzi · resa manuale · V2 \\[25:449\\] {"type":"NAVIGATE\\_TO","destinationId":"25:449","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Ipotesi e limiti, in chiaro  + · PVGIS, prezzi, detrazione e costi esclusi \\[22:848\\] | 25:487 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Ipotesi e limiti · resa manuale · V2 \\[25:475\\] {"type":"NAVIGATE\\_TO","destinationId":"25:475","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Modifica e ricalcola → \\[22:852\\] | 22:893 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Impianto con resa manuale · V2 \\[22:673\\] {"type":"NAVIGATE\\_TO","destinationId":"22:673","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Risultati con resa del preventivo · V2 | Nuova simulazione \\[22:853\\] | 22:894 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Da dove arriva la resa regionale? · V2 | ← Torna all’impianto \\[22:931\\] | 22:933 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione e costi · V2 | Salva le ipotesi → \\[25:296\\] | 25:300 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione e costi · V2 | Annulla e torna all’impianto \\[25:298\\] | 25:301 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione e costi · resa manuale · V2 | Salva le ipotesi → \\[25:330\\] | 25:334 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Impianto con resa manuale · V2 \\[22:264\\] {"type":"NAVIGATE\\_TO","destinationId":"22:264","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione e costi · resa manuale · V2 | Annulla e torna all’impianto \\[25:332\\] | 25:335 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Impianto con resa manuale · V2 \\[22:264\\] {"type":"NAVIGATE\\_TO","destinationId":"22:264","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione e costi · V2 | Salva le ipotesi → \\[25:364\\] | 25:368 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione e costi · V2 | Annulla e torna all’impianto \\[25:366\\] | 25:369 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione e costi · resa manuale · V2 | Salva le ipotesi → \\[25:398\\] | 25:402 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Impianto con resa manuale · V2 \\[22:673\\] {"type":"NAVIGATE\\_TO","destinationId":"22:673","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione e costi · resa manuale · V2 | Annulla e torna all’impianto \\[25:400\\] | 25:403 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Impianto con resa manuale · V2 \\[22:673\\] {"type":"NAVIGATE\\_TO","destinationId":"22:673","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Scenari: autoconsumo e prezzi · V2 | ← Torna ai risultati \\[34:401\\] | 34:403 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 3 Risultati · V2 \\[15:150\\] {"type":"NAVIGATE\\_TO","destinationId":"15:150","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Ipotesi e limiti · V2 | ← Torna ai risultati \\[25:445\\] | 25:447 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 3 Risultati · V2 \\[15:150\\] {"type":"NAVIGATE\\_TO","destinationId":"15:150","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Scenari: autoconsumo e prezzi · resa manuale · V2 | ← Torna ai risultati \\[34:429\\] | 34:431 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Risultati con resa del preventivo · V2 \\[22:756\\] {"type":"NAVIGATE\\_TO","destinationId":"22:756","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Ipotesi e limiti · resa manuale · V2 | ← Torna ai risultati \\[25:484\\] | 25:486 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Risultati con resa del preventivo · V2 \\[22:756\\] {"type":"NAVIGATE\\_TO","destinationId":"22:756","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| SunSize V2 · guida alla revisione | Inizia il percorso Desktop → \\[26:310\\] | 26:314 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| SunSize V2 · guida alla revisione | Inizia il percorso Mobile → \\[26:312\\] | 26:315 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| SunSize V2 · guida alla revisione | Apri lo stato senza aliquota · Desktop → \\[34:462\\] | 34:464 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione non impostata · V2 \\[33:550\\] {"type":"NAVIGATE\\_TO","destinationId":"33:550","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| SunSize V2 · guida alla revisione | Apri lo stato senza aliquota · Mobile → \\[34:465\\] | 34:467 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione non impostata · V2 \\[33:666\\] {"type":"NAVIGATE\\_TO","destinationId":"33:666","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Personalizza l’autoconsumo · resa manuale · V2 | Usa questa quota → \\[27:320\\] | 27:329 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Impianto con resa manuale · V2 \\[22:264\\] {"type":"NAVIGATE\\_TO","destinationId":"22:264","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Personalizza l’autoconsumo · resa manuale · V2 | Annulla e torna all’impianto \\[27:321\\] | 27:330 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Impianto con resa manuale · V2 \\[22:264\\] {"type":"NAVIGATE\\_TO","destinationId":"22:264","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Personalizza l’autoconsumo · resa manuale · V2 | Usa questa quota → \\[27:344\\] | 27:353 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Impianto con resa manuale · V2 \\[22:673\\] {"type":"NAVIGATE\\_TO","destinationId":"22:673","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Personalizza l’autoconsumo · resa manuale · V2 | Annulla e torna all’impianto \\[27:345\\] | 27:354 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Impianto con resa manuale · V2 \\[22:673\\] {"type":"NAVIGATE\\_TO","destinationId":"22:673","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione non impostata · V2 | ✓  Consumi \\[33:555\\] | 25:489 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione non impostata · V2 | ✓  Impianto \\[33:557\\] | 25:490 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione non impostata · V2 | Imposta ipotesi fiscale → \\[33:1312\\] | 33:1314 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · V2 \\[25:274\\] {"type":"NAVIGATE\\_TO","destinationId":"25:274","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione non impostata · V2 | Inserisci i costi → \\[33:601\\] | 34:468 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione e costi · V2 \\[25:274\\] {"type":"NAVIGATE\\_TO","destinationId":"25:274","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione non impostata · V2 | Vedi i flussi anno per anno → \\[33:1429\\] | 33:1431 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Flussi annuali · aliquota non impostata · V2 \\[33:1317\\] {"type":"NAVIGATE\\_TO","destinationId":"33:1317","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione non impostata · V2 | Modifica e ricalcola → \\[33:661\\] | 34:469 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 2 Impianto · V2 \\[15:86\\] {"type":"NAVIGATE\\_TO","destinationId":"15:86","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Detrazione non impostata · V2 | Nuova simulazione \\[33:662\\] | 34:470 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 1 Consumi · V2 \\[15:70\\] {"type":"NAVIGATE\\_TO","destinationId":"15:70","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | ✓  Consumi \\[33:671\\] | 25:492 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | ✓  Impianto \\[33:673\\] | 25:493 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Imposta ipotesi fiscale → \\[33:1459\\] | 33:1461 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · V2 \\[25:342\\] {"type":"NAVIGATE\\_TO","destinationId":"25:342","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Modifica le ipotesi e ricalcola → \\[33:698\\] | 34:471 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Inserisci i costi → \\[33:718\\] | 34:472 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione e costi · V2 \\[25:342\\] {"type":"NAVIGATE\\_TO","destinationId":"25:342","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Vedi i flussi anno per anno → \\[33:1554\\] | 33:1556 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Flussi annuali · aliquota non impostata · V2 \\[33:1464\\] {"type":"NAVIGATE\\_TO","destinationId":"33:1464","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Scenari: autoconsumo e prezzi  + · Quota ±10 punti · prezzi ±10% · ipotesi illustrative \\[33:756\\] | 34:461 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Scenari senza detrazione impostata · V2 \\[34:433\\] {"type":"NAVIGATE\\_TO","destinationId":"34:433","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Ipotesi e limiti, in chiaro  + · PVGIS, prezzi, detrazione e costi esclusi \\[33:759\\] | 35:392 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Ipotesi e limiti · aliquota non impostata · V2 \\[35:380\\] {"type":"NAVIGATE\\_TO","destinationId":"35:380","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Modifica e ricalcola → \\[33:763\\] | 34:473 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 2 Impianto · V2 \\[15:134\\] {"type":"NAVIGATE\\_TO","destinationId":"15:134","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Detrazione non impostata · V2 | Nuova simulazione \\[33:764\\] | 34:474 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 1 Consumi · V2 \\[15:118\\] {"type":"NAVIGATE\\_TO","destinationId":"15:118","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Flussi annuali · V2 | ← Torna ai risultati \\[33:898\\] | 33:900 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · 3 Risultati · V2 \\[15:102\\] {"type":"NAVIGATE\\_TO","destinationId":"15:102","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Flussi annuali · V2 | ← Torna ai risultati \\[33:1029\\] | 33:1031 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · 3 Risultati · V2 \\[15:150\\] {"type":"NAVIGATE\\_TO","destinationId":"15:150","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Flussi annuali · resa manuale · V2 | ← Torna ai risultati \\[33:1165\\] | 33:1167 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Risultati con resa del preventivo · V2 \\[22:366\\] {"type":"NAVIGATE\\_TO","destinationId":"22:366","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Flussi annuali · resa manuale · V2 | ← Torna ai risultati \\[33:1296\\] | 33:1298 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Risultati con resa del preventivo · V2 \\[22:756\\] {"type":"NAVIGATE\\_TO","destinationId":"22:756","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Desktop · Flussi annuali · aliquota non impostata · V2 | ← Torna ai risultati \\[33:1426\\] | 33:1428 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Desktop · Detrazione non impostata · V2 \\[33:550\\] {"type":"NAVIGATE\\_TO","destinationId":"33:550","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Flussi annuali · aliquota non impostata · V2 | ← Torna ai risultati \\[33:1551\\] | 33:1553 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione non impostata · V2 \\[33:666\\] {"type":"NAVIGATE\\_TO","destinationId":"33:666","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Scenari senza detrazione impostata · V2 | ← Torna ai risultati \\[34:458\\] | 34:460 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione non impostata · V2 \\[33:666\\] {"type":"NAVIGATE\\_TO","destinationId":"33:666","transition":{"type":"INSTANT"},"resetScrollPosition":true} |
| Mobile · Ipotesi e limiti · aliquota non impostata · V2 | ← Torna ai risultati \\[35:389\\] | 35:391 | {"type":"ON\\_CLICK"}; NAVIGATE\\_TO → Mobile · Detrazione non impostata · V2 \\[33:666\\] {"type":"NAVIGATE\\_TO","destinationId":"33:666","transition":{"type":"INSTANT"},"resetScrollPosition":true} |

## Appendice B — Rilievo completo per schermata

**Legenda:** righe in ordine gerarchico; numero iniziale = profondità nel contenitore. **X/Y locali rispetto al genitore**, non posizione della pagina web. L/H in px, inclusi i livelli delle istanze. Padding in ordine **alto/destra/basso/sinistra**. Dimensionamento **H/V**: HUG = contenuto, FILL = disponibile, FIXED = fisso nel campione. Le coordinate della riga radice sono posizione sulla tela, non margini dell’interfaccia. Testi effettivi integrali in tabelle separate. Valori arrotondati a due decimali.

### Componenti SunSize V2 — 15:62

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-62) · **800 × 10 px** · sfondo nessuno.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 15:62 · FRAME | Componenti SunSize V2 | 0 / -500 | 800 × 10 | HORIZONTAL; pad 0/0/0/0; gap 40; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip true |
| 1 · 15:63 · COMPONENT | SunSize V2/Button | 0 / 0 | 320 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 2 · 15:64 · TEXT | Continua | 16 / 16 | 288 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 1 · 15:65 · COMPONENT | SunSize V2/NumField | 360 / 0 | 320 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 2 · 15:66 · TEXT | Consumo annuo | 0 / 0 | 320 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 15:67 · FRAME | Input | 0 / 29 | 320 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 3 · 15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 286 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 320 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 15:64 | Continua | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 15:66 | Consumo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:68 | 3.000 kWh/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:69 | Consumo totale degli ultimi 12 mesi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

#### Definizioni dei componenti locali

- **SunSize V2/Button** \[15:63\]: proprietà {"Label#2:0":{"type":"TEXT","defaultValue":"Continua"}}.
- **SunSize V2/NumField** \[15:65\]: proprietà {"Label#2:1":{"type":"TEXT","defaultValue":"Consumo annuo"},"Value#2:2":{"type":"TEXT","defaultValue":"3.000 kWh/anno"},"Hint#2:3":{"type":"TEXT","defaultValue":"Consumo totale degli ultimi 12 mesi."}}.

### Desktop · 1 Consumi · V2 — 15:70

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-70) · **1440 × 1313 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 15:70 · FRAME | Desktop · 1 Consumi · V2 | 0 / 0 | 1440 × 1313 | VERTICAL; pad 64/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 15:71 · FRAME | Intestazione | 64 / 64 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:72 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:73 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:74 · FRAME | Avanzamento | 64 / 127 | 1312 × 53 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:75 · FRAME | Passo 1 | 0 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:76 · TEXT | 01  Consumi | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 15:77 · FRAME | Passo 2 | 442.67 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:78 · TEXT | 02  Impianto | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:79 · FRAME | Passo 3 | 885.33 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:80 · TEXT | 03  Risultati | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:81 · FRAME | Introduzione | 64 / 212 | 1312 × 119 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:166 · TEXT | IL FOTOVOLTAICO, CON CHIAREZZA | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:167 · TEXT | Il tuo sole. I tuoi numeri. | 0 / 29 | 1312 × 58 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 15:168 · TEXT | Parti dai tuoi consumi. Comprendi il tuo inv | 0 / 95 | 1312 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:82 · FRAME | Area principale | 64 / 363 | 1312 × 804 | HORIZONTAL; pad 0/0/0/0; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:169 · FRAME | Perché SunSize | 0 / 0 | 440 × 599 | VERTICAL; pad 32/32/32/32; gap 28; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #115E59 → primitive/brand-dark; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:170 · TEXT | UNA SCELTA PIÙ CONSAPEVOLE | 32 / 32 | 376 × 21 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 3 · 15:171 · TEXT | Prima di scegliere i pannelli,<br>fai chiarezza | 32 / 81 | 376 × 129 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:172 · TEXT | Esplora produzione, benefici e tempo di rien | 32 / 238 | 376 × 48 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:173 · FRAME | Valore del percorso | 32 / 314 | 376 × 204 | VERTICAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:174 · FRAME | Dati che conosci | 0 / 0 | 376 × 52 | VERTICAL; pad 0/0/0/0; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:175 · TEXT | 01  Dati che conosci | 0 / 0 | 376 × 24 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 15:176 · TEXT | Consumi e spesa dalla tua bolletta. | 0 / 28 | 376 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 15:177 · FRAME | Ipotesi che controlli | 0 / 76 | 376 × 52 | VERTICAL; pad 0/0/0/0; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:178 · TEXT | 02  Ipotesi che controlli | 0 / 0 | 376 × 24 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 15:179 · TEXT | Produzione, autoconsumo e prezzi. | 0 / 28 | 376 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 15:180 · FRAME | Risultati spiegati | 0 / 152 | 376 × 52 | VERTICAL; pad 0/0/0/0; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:181 · TEXT | 03  Risultati spiegati | 0 / 0 | 376 × 24 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 15:182 · TEXT | Ogni beneficio ha una formula. | 0 / 28 | 376 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:183 · TEXT | Senza registrazione. Calcolo nel browser. | 32 / 546 | 376 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 15:184 · FRAME | Dati dalla bolletta | 472 / 0 | 840 × 804 | VERTICAL; pad 32/32/32/32; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:185 · TEXT | 01 / CONSUMI | 32 / 32 | 776 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 15:186 · TEXT | Quanto consumi in un anno? | 32 / 77 | 776 × 43 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 15:187 · TEXT | Bastano due dati dalla bolletta per iniziare | 32 / 144 | 776 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:188 · FRAME | Come trovare i dati | 32 / 192 | 776 × 83 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:189 · TEXT | Tieni a portata di mano una bolletta | 16 / 16 | 744 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:190 · TEXT | Cerca il riepilogo dei consumi degli ultimi | 16 / 46 | 744 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:191 · FRAME | Consumo e spesa | 32 / 299 | 776 × 114 | HORIZONTAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:192 · INSTANCE | SunSize V2/NumField | 0 / 0 | 376 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:192;15:66 · TEXT | Consumo annuo | 0 / 0 | 376 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:192;15:67 · FRAME | Input | 0 / 29 | 376 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:192;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 342 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:192;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 376 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:197 · INSTANCE | SunSize V2/NumField | 400 / 0 | 376 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:197;15:66 · TEXT | Consumo annuo | 0 / 0 | 376 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:197;15:67 · FRAME | Input | 0 / 29 | 376 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:197;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 342 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:197;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 376 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 15:202 · FRAME | Spesa e risparmio | 32 / 437 | 776 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:203 · TEXT | La spesa non è il risparmio | 16 / 16 | 744 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 15:204 · TEXT | Include costi fissi e tasse. Il risparmio sa | 16 / 48 | 744 × 21 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 15:205 · INSTANCE | SunSize V2/Button | 32 / 546 | 776 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:205;15:64 · TEXT | Continua | 16 / 16 | 744 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 15:207 · INSTANCE | SunSize V2/Button | 32 / 626 | 776 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:207;15:64 · TEXT | Continua | 17 / 16 | 742 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 15:209 · TEXT | Puoi partire da una stima e correggerla prim | 32 / 706 | 776 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:210 · TEXT | Nessuna registrazione. I dati restano in que | 32 / 751 | 776 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:83 · FRAME | Footer | 64 / 1199 | 1312 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:84 · TEXT | SunSize · PCODING Software | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:85 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 15:72 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:73 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:76 | 01  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:78 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:80 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:166 | IL FOTOVOLTAICO, CON CHIAREZZA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:167 | Il tuo sole. I tuoi numeri. | Inter Semi Bold; 48px; LH 120% (57.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/display |
| 15:168 | Parti dai tuoi consumi. Comprendi il tuo investimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:170 | UNA SCELTA PIÙ CONSAPEVOLE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:171 | Prima di scegliere i pannelli,<br>fai chiarezza. | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 15:172 | Esplora produzione, benefici e tempo di rientro. Le ipotesi restano sempre sotto il tuo controllo. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:175 | 01  Dati che conosci | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:176 | Consumi e spesa dalla tua bolletta. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:178 | 02  Ipotesi che controlli | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:179 | Produzione, autoconsumo e prezzi. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:181 | 03  Risultati spiegati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:182 | Ogni beneficio ha una formula. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:183 | Senza registrazione. Calcolo nel browser. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:185 | 01 / CONSUMI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:186 | Quanto consumi in un anno? | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 15:187 | Bastano due dati dalla bolletta per iniziare. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:189 | Tieni a portata di mano una bolletta | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:190 | Cerca il riepilogo dei consumi degli ultimi 12 mesi e somma gli importi dello stesso periodo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:192;15:66 | Consumo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:192;15:68 | 3.000 kWh/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:192;15:69 | Il totale degli ultimi 12 mesi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:197;15:66 | Spesa annua complessiva | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:197;15:68 | 900 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:197;15:69 | Tutte le bollette, tasse incluse. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:203 | La spesa non è il risparmio | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:204 | Include costi fissi e tasse. Il risparmio sarà stimato sull’energia che non acquisterai, usando il prezzo evitato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:205;15:64 | Continua: configura l’impianto → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I15:207;15:64 | Non ho dati annuali: aiutami a stimare | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 15:209 | Puoi partire da una stima e correggerla prima del calcolo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:210 | Nessuna registrazione. I dati restano in questa pagina. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:84 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:85 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · 2 Impianto · V2 — 15:86

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-86) · **1440 × 2300 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 15:86 · FRAME | Desktop · 2 Impianto · V2 | 1560 / 0 | 1440 × 2300 | VERTICAL; pad 64/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 15:87 · FRAME | Intestazione | 64 / 64 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:88 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:89 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:90 · FRAME | Avanzamento | 64 / 127 | 1312 × 53 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:91 · FRAME | Passo 1 | 0 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:92 · TEXT | ✓  Consumi | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 15:93 · FRAME | Passo 2 | 442.67 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:94 · TEXT | 02  Impianto | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 15:95 · FRAME | Passo 3 | 885.33 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:96 · TEXT | 03  Risultati | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:97 · FRAME | Introduzione | 64 / 212 | 1312 × 119 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:241 · TEXT | 02 / IL TUO IMPIANTO | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:242 · TEXT | Un impianto, le tue abitudini. | 0 / 29 | 1312 × 58 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 15:243 · TEXT | Parti dal preventivo e controlla le ipotesi | 0 / 95 | 1312 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:98 · FRAME | Area principale | 64 / 363 | 1312 × 1791 | HORIZONTAL; pad 0/0/0/0; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:244 · FRAME | Configurazione e ipotesi | 0 / 0 | 864 × 1791 | VERTICAL; pad 32/32/32/32; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:245 · FRAME | Consumi inseriti | 32 / 32 | 800 × 98 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:246 · TEXT | 3.000 kWh/anno · 900 €/anno | 16 / 16 | 768 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:247 · INSTANCE | SunSize V2/Button | 16 / 48 | 768 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:247;15:64 · TEXT | Continua | 16 / 6.5 | 736 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:249 · FRAME | Dati dal preventivo | 32 / 154 | 800 × 114 | HORIZONTAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:250 · INSTANCE | SunSize V2/NumField | 0 / 0 | 388 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:250;15:66 · TEXT | Consumo annuo | 0 / 0 | 388 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:250;15:67 · FRAME | Input | 0 / 29 | 388 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:250;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 354 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:250;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 388 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:255 · INSTANCE | SunSize V2/NumField | 412 / 0 | 388 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:255;15:66 · TEXT | Consumo annuo | 0 / 0 | 388 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:255;15:67 · FRAME | Input | 0 / 29 | 388 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:255;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 354 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:255;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 388 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 15:260 · FRAME | Produzione stimata | 32 / 292 | 800 × 509 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 21:122 · TEXT | Dove installerai l’impianto? | 0 / 0 | 800 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 21:123 · TEXT | Scegli la regione: la resa si compila automaticamente. | 0 / 42 | 800 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 21:124 · TEXT | ● Stima dalla regione ○ Valore del preventivo | 0 / 78 | 800 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 21:125 · INSTANCE | Regione · selettore a 20 opzioni | 0 / 111 | 800 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I21:125;15:66 · TEXT | Consumo annuo | 0 / 0 | 800 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I21:125;15:67 · FRAME | Input | 0 / 29 | 800 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I21:125;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 766 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I21:125;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 800 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 21:130 · FRAME | Resa regionale proposta | 0 / 237 | 800 × 126 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 16; vincoli MIN/MIN; clip true |
| 5 · 21:131 · TEXT | Resa annua indicativa · Lazio | 16 / 16 | 768 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 21:132 · TEXT | 1.440 kWh/kWp/anno | 16 / 48 | 768 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 21:133 · TEXT | 4,5 kWp × 1.440 = 6.480 kWh/anno | 16 / 86 | 768 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 21:134 · TEXT | Elaborazione SunSize su PVGIS 5.3 · 2005–2023. Sud, 30°, perdite di sistema 14%. La media regionale non descrive il singolo tetto. | 0 / 375 | 800 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 21:135 · INSTANCE | Apri inserimento manuale resa | 0 / 429 | 800 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I21:135;15:64 · TEXT | Continua | 16 / 6.5 | 768 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 21:137 · INSTANCE | Apri fonte e metodo | 0 / 475 | 800 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I21:137;15:64 · TEXT | Continua | 16 / 6.5 | 768 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:274 · FRAME | Profilo di autoconsumo | 32 / 825 | 800 × 491 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 33:1557 · FRAME | Contesto dei consumi e accumulo | 0 / 0 | 800 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1558 · INSTANCE | SunSize V2/NumField | 0 / 0 | 800 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1558;15:66 · TEXT | Consumo annuo | 0 / 0 | 800 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1558;15:67 · FRAME | Input | 0 / 29 | 800 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1558;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 766 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1558;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 800 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1563 · INSTANCE | SunSize V2/NumField | 0 / 130 | 800 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1563;15:66 · TEXT | Consumo annuo | 0 / 0 | 800 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1563;15:67 · FRAME | Input | 0 / 29 | 800 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1563;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 766 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1563;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 800 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:275 · TEXT | Quando consumi più energia? | 0 / 256 | 800 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:276 · FRAME | Seleziona un profilo | 0 / 298 | 800 × 81 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:277 · FRAME | Di sera | 0 / 0 | 261.33 × 81 | VERTICAL; pad 16/16/16/16; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 15:278 · TEXT | Di sera | 16 / 16 | 229.33 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 15:279 · TEXT | 25% | 16 / 41 | 229.33 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:280 · FRAME | Misto | 269.33 / 0 | 261.33 × 81 | VERTICAL; pad 16/16/16/16; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 20; vincoli MIN/MIN; clip true |
| 6 · 15:281 · TEXT | ✓ Misto | 16 / 16 | 229.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 6 · 15:282 · TEXT | 40% | 16 / 41 | 229.33 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 5 · 15:283 · FRAME | Di giorno | 538.67 / 0 | 261.33 × 81 | VERTICAL; pad 16/16/16/16; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 15:284 · TEXT | Di giorno | 16 / 16 | 229.33 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 15:285 · TEXT | 60% | 16 / 41 | 229.33 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:286 · TEXT | Misto: 40% della produzione usata in casa, c | 0 / 391 | 800 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:287 · TEXT | Profili indicativi, non misure orarie. L’aut | 0 / 424 | 800 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:288 · INSTANCE | SunSize V2/Button | 0 / 457 | 800 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:288;15:64 · TEXT | Continua | 16 / 6.5 | 768 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:290 · FRAME | Ipotesi economiche visibili | 32 / 1340 | 800 × 281 | VERTICAL; pad 16/16/16/16; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:291 · TEXT | Ipotesi economiche | 16 / 16 | 768 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:292 · FRAME | Prezzi dell’energia | 16 / 62 | 768 × 114 | HORIZONTAL; pad 0/0/0/0; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:293 · INSTANCE | SunSize V2/NumField | 0 / 0 | 374 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I15:293;15:66 · TEXT | Consumo annuo | 0 / 0 | 374 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:293;15:67 · FRAME | Input | 0 / 29 | 374 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I15:293;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 340 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:293;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 374 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 15:298 · INSTANCE | SunSize V2/NumField | 394 / 0 | 374 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I15:298;15:66 · TEXT | Consumo annuo | 0 / 0 | 374 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:298;15:67 · FRAME | Input | 0 / 29 | 374 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I15:298;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 340 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:298;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 374 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:303 · TEXT | Fonte: valori dello scenario iniziale, non t | 16 / 192 | 768 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 25:302 · INSTANCE | Detrazione 0% · costi esclusi · Modifica → | 16 / 229 | 768 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I25:302;15:64 · TEXT | Continua | 16 / 7.5 | 736 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:306 · INSTANCE | SunSize V2/Button | 32 / 1645 | 800 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:306;15:64 · TEXT | Continua | 16 / 16 | 768 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 15:308 · INSTANCE | SunSize V2/Button | 32 / 1725 | 800 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 4 · I15:308;15:64 · TEXT | Continua | 16 / 6.5 | 768 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 15:310 · FRAME | Riepilogo della configurazione | 896 / 0 | 416 × 705 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #115E59 → primitive/brand-dark; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:311 · TEXT | IL TUO SCENARIO | 28 / 28 | 360 × 21 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 3 · 15:312 · TEXT | Le ipotesi,<br>sotto controllo. | 28 / 69 | 360 × 86 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:313 · FRAME | Potenza | 28 / 175 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:314 · TEXT | Potenza | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 15:315 · TEXT | 4,5 kWp | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:316 · FRAME | Produzione annua | 28 / 249 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:317 · TEXT | Produzione annua | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 15:318 · TEXT | 6.300 kWh | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:319 · FRAME | Usata in casa | 28 / 323 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:320 · TEXT | Usata in casa | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 15:321 · TEXT | 2.520 kWh | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:322 · FRAME | Esborso iniziale | 28 / 397 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:323 · TEXT | Esborso iniziale | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 15:324 · TEXT | 6.990 € | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:325 · TEXT | Puoi rivedere ogni valore prima di decidere. | 28 / 471 | 360 × 72 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 15:326 · FRAME | Controllo dati | 28 / 563 | 360 × 114 | VERTICAL; pad 20/20/20/20; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFCC45 → solar; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:327 · TEXT | Prima del calcolo | 20 / 20 | 320 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 15:328 · TEXT | Usa valori positivi per consumi, potenza e c | 20 / 52 | 320 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 15:99 · FRAME | Footer | 64 / 2186 | 1312 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:100 · TEXT | SunSize · PCODING Software | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:101 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 15:88 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:89 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:92 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:94 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:96 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:241 | 02 / IL TUO IMPIANTO | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:242 | Un impianto, le tue abitudini. | Inter Semi Bold; 48px; LH 120% (57.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/display |
| 15:243 | Parti dal preventivo e controlla le ipotesi prima del calcolo. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:246 | 3.000 kWh/anno · 900 €/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| I15:247;15:64 | Modifica consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I15:250;15:66 | Potenza impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:250;15:68 | 4,5 kWp | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:250;15:69 | La potenza nominale nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:255;15:66 | Costo totale | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:255;15:68 | 6.990 € | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:255;15:69 | Esborso iniziale, prima delle detrazioni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 21:122 | Dove installerai l’impianto? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 21:123 | Scegli la regione: la resa si compila automaticamente. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 21:124 | ● Stima dalla regione    ○ Valore del preventivo | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I21:125;15:66 | Regione dell’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I21:125;15:68 | Lazio  ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I21:125;15:69 | Seleziona una delle 20 regioni italiane. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 21:131 | Resa annua indicativa · Lazio | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 21:132 | 1.440 kWh/kWp/anno | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 21:133 | 4,5 kWp × 1.440 = 6.480 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 21:134 | Elaborazione SunSize su PVGIS 5.3 · 2005–2023. Sud, 30°, perdite di sistema 14%. La media regionale non descrive il singolo tetto. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I21:135;15:64 | Ho la resa del preventivo → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I21:137;15:64 | Fonte e metodo dei valori regionali → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I33:1558;15:66 | Quando consumi di più? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1558;15:68 | Durante tutta la giornata ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1558;15:69 | Contesto dichiarato: non assegna automaticamente una percentuale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1563;15:66 | È prevista una batteria? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1563;15:68 | Non so / da valutare ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1563;15:69 | Una batteria non viene simulata: servono capacità e profili orari. Il suo costo va incluso nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:275 | Quale quota di produzione userai in casa? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:278 | Quota 25% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:279 | 25% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:281 | ✓ Quota 40% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:282 | 40% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:284 | Quota 60% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:285 | 60% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:286 | Ipotesi 40%: 2.592 kWh/anno, cioè l’86,4% dei consumi. Verifica la coincidenza con la produzione nelle ore di sole. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:287 | Quote illustrative, non misurate né dedotte dagli orari o dalla batteria. Puoi personalizzarle. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:288;15:64 | Personalizza autoconsumo → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 15:291 | Ipotesi economiche | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| I15:293;15:66 | Energia non acquistata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:293;15:68 | 0,25 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:293;15:69 | Prezzo evitato, senza costi fissi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:298;15:66 | Energia immessa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:298;15:68 | 0,09 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:298;15:69 | Ipotesi di ricavo, non tariffa garantita. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:303 | Fonte: valori dello scenario iniziale, non tariffe verificate. Aggiornali con i tuoi dati. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:302;15:64 | Detrazione ipotizzata 50% · costi esclusi · Modifica → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I15:306;15:64 | Calcola la simulazione → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I15:308;15:64 | ← Torna ai consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 15:311 | IL TUO SCENARIO | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:312 | Le ipotesi,<br>sotto controllo. | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 15:314 | Potenza | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:315 | 4,5 kWp | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:317 | Produzione annua | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:318 | 6.480 kWh | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:320 | Usata in casa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:321 | 2.592 kWh | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:323 | Esborso iniziale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:324 | 6.990 € | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:325 | Puoi rivedere ogni valore prima di decidere. Questa simulazione non sostituisce una valutazione del tetto. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:327 | Prima del calcolo | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:328 | Usa valori positivi per consumi, potenza e costo. Verifica unità e separatori decimali. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:100 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:101 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · 3 Risultati · V2 — 15:102

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-102) · **1440 × 2745 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 15:102 · FRAME | Desktop · 3 Risultati · V2 | 3120 / 0 | 1440 × 2745 | VERTICAL; pad 64/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 15:103 · FRAME | Intestazione | 64 / 64 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:104 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:105 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:106 · FRAME | Avanzamento | 64 / 127 | 1312 × 53 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:107 · FRAME | Passo 1 | 0 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:108 · TEXT | ✓  Consumi | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 15:109 · FRAME | Passo 2 | 442.67 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:110 · TEXT | ✓  Impianto | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 15:111 · FRAME | Passo 3 | 885.33 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:112 · TEXT | 03  Risultati | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 1 · 15:113 · FRAME | Introduzione | 64 / 212 | 1312 × 119 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:398 · TEXT | 03 / RISULTATI | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:399 · TEXT | I numeri del tuo impianto. | 0 / 29 | 1312 × 58 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 15:400 · TEXT | Una stima spiegata, non una promessa di rend | 0 / 95 | 1312 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:114 · FRAME | Area principale | 64 / 363 | 1312 × 2236 | VERTICAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:401 · FRAME | Indicatori principali | 0 / 0 | 1312 × 415 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:768 · TEXT | Tempo di rientro: senza e con detrazione | 0 / 0 | 1312 × 31 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:769 · FRAME | Confronto fiscale | 0 / 47 | 1312 × 193 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:770 · FRAME | Rientro senza detrazione | 0 / 0 | 648 × 145 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:771 · TEXT | SENZA DETRAZIONE | 24 / 24 | 600 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:772 · TEXT | ≈ 7,0 anni | 24 / 57 | 600 × 31 | H/V FIXED/HUG | #115E59 → color/brand-dark; vincoli MIN/MIN |
| 5 · 33:773 · TEXT | 997,92 €/anno dopo i costi inseriti. | 24 / 100 | 600 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 33:774 · FRAME | Rientro con ipotesi fiscale | 664 / 0 | 648 × 193 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:775 · TEXT | CON LA DETRAZIONE IPOTIZZATA | 24 / 24 | 600 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:776 · TEXT | ≈ 5,2 anni | 24 / 57 | 600 × 31 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:777 · TEXT | 50% inserito come esempio, non aliquota presunta o diritto verificato. | 24 / 100 | 600 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:778 · INSTANCE | Modifica ipotesi fiscale → | 24 / 133 | 600 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I33:778;15:64 · TEXT | Continua | 16 / 7.5 | 568 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:781 · TEXT | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | 0 / 256 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:782 · FRAME | Recupero fiscale ipotizzato | 0 / 293 | 1312 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:783 · TEXT | Recupero fiscale ipotizzato | 16 / 16 | 1280 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:784 · TEXT | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | 16 / 48 | 1280 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:785 · TEXT | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | 0 / 394 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 15:417 · FRAME | Economia ed energia | 0 / 439 | 1312 × 571 | HORIZONTAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 15:418 · FRAME | Da dove arrivano i benefici | 0 / 0 | 644 × 571 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:419 · TEXT | Da dove arrivano i benefici | 28 / 28 | 588 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:420 · TEXT | Importi annuali · scenario centrale | 28 / 78 | 588 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:421 · FRAME | Risparmio sulla bolletta | 28 / 119 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:422 · TEXT | Risparmio sulla bolletta | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:423 · TEXT | +630,00 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:424 · FRAME | Ricavi energia immessa | 28 / 163 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:425 · TEXT | Ricavi energia immessa | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:426 · TEXT | +340,20 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:427 · FRAME | Recupero fiscale | 28 / 207 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:428 · TEXT | Recupero fiscale | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:429 · TEXT | 0,00 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:430 · FRAME | Beneficio prima dei costi esclusi | 28 / 251 | 588 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 15:431 · TEXT | Beneficio annuo: 970,20 € | 16 / 16 | 556 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 5 · 15:432 · TEXT | 630,00 € di risparmio + 340,20 € di ricavi. | 16 / 48 | 556 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:433 · FRAME | Costi non inclusi | 28 / 356 | 588 × 146 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 15:434 · TEXT | Costi ricorrenti: non inclusi | 16 / 16 | 556 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 15:435 · TEXT | Manutenzione, assicurazione e sostituzioni n | 16 / 46 | 556 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 25:305 · INSTANCE | Inserisci i costi → | 16 / 94 | 556 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I25:305;15:64 · TEXT | Continua | 16 / 7.5 | 524 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:786 · TEXT | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | 28 / 522 | 588 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 15:436 · FRAME | Come si distribuisce l’energia | 668 / 0 | 644 × 415 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:437 · TEXT | Come si distribuisce l’energia | 28 / 28 | 588 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:438 · TEXT | 6.300 kWh prodotti in un anno | 28 / 78 | 588 × 31 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:439 · FRAME | Ripartizione della produzione | 28 / 129 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 0; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip true |
| 5 · 15:440 · RECTANGLE | Usata in casa | 0 / 0 | 235.2 × 24 | H/V FIXED/FIXED | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 15:441 · RECTANGLE | Immessa in rete | 235.2 / 0 | 352.8 × 24 | H/V FIXED/FIXED | #0F766E → primitive/brand; vincoli MIN/MIN |
| 4 · 15:442 · FRAME | Usata in casa · 40% | 28 / 173 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:443 · TEXT | Usata in casa · 40% | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:444 · TEXT | 2.520 kWh | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:445 · FRAME | Immessa in rete · 60% | 28 / 217 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:446 · TEXT | Immessa in rete · 60% | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:447 · TEXT | 3.780 kWh | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:448 · FRAME | Energia ancora acquistata | 28 / 261 | 588 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 5 · 15:449 · TEXT | Da acquistare: 480 kWh/anno | 16 / 16 | 556 × 24 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 5 · 15:450 · TEXT | Il 16% dei 3.000 kWh consumati. I costi fiss | 16 / 48 | 556 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:451 · TEXT | La quota del 40% si riferisce alla produzion | 28 / 366 | 588 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:452 · FRAME | Quando recuperi l’investimento | 0 / 1034 | 1312 × 582 | VERTICAL; pad 28/28/28/28; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:453 · TEXT | Quando recuperi l’investimento? | 28 / 28 | 1256 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 15:454 · TEXT | Saldo cumulato · euro, prima dei costi esclu | 28 / 74 | 1256 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:455 · FRAME | Saldo cumulato · scala anni ed euro | 28 / 111 | 1256 × 290 | NONE; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:456 · VECTOR | Riferimento -6990 | 70 / 180.43 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 15:457 · TEXT | −6.990 | 0 / 170.43 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:458 · VECTOR | Riferimento 0 | 70 / 128 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #52676B → primitive/muted; vincoli MIN/MIN; tratteggio 4/4; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 15:459 · TEXT | 0 € | 0 / 118 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:460 · VECTOR | Riferimento 12000 | 70 / 38 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 15:461 · TEXT | +7.500 | 0 / 28 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:462 · VECTOR | Saldo senza detrazione | 70 / 68.16 | 1162 × 112.27 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #0F766E → color/brand; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 112.26599884033203 L 77.46666717529297 104.78160095214844 L 154.93333435058594 97.29720306396484 L 232.39999389648438 89.81279754638672 L 309.8666687011719 82.32839965820312 L 387.3333435058594 74.84400177001953 L 464.79998779296875 67.3595962524414 L 542.2666625976562 59.87519836425781 L 619.7333374023438 52.39080047607422 L 697.2000122070312 44.90639877319336 L 774.6666870117188 37.422000885009766 L 852.1333618164062 29.937599182128906 L 929.5999755859375 22.45319938659668 L 1007.066650390625 14.968799591064453 L 1084.5333251953125 7.484399795532227 L 1162 0"}\\] |
| 4 · 15:463 · TEXT | 0 | 56 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:464 · TEXT | 5 | 443.33 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:465 · TEXT | 10 | 830.67 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:466 · TEXT | 15 | 1218 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:467 · TEXT | anni | 1216 / 252 | 40 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:468 · ELLIPSE | Pareggio a circa 7,2 anni | 606.62 / 122 | 12 × 12 | H/V FIXED/FIXED | #FFCC45 → solar; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:469 · TEXT | Pareggio ≈ 7,2 anni | 381 / 0 | 400 × 21 | H/V FIXED/FIXED | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:787 · VECTOR | Saldo con recupero fiscale | 70 / 41.95 | 1162 × 138.48 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #5C400E → solar-ink; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 138.47850036621094 L 77.46666717529297 128.3728485107422 L 154.93333435058594 118.26719665527344 L 232.39999389648438 108.16155242919922 L 309.8666687011719 98.05590057373047 L 387.3333435058594 87.95024871826172 L 464.79998779296875 77.84459686279297 L 542.2666625976562 67.73895263671875 L 619.7333374023438 57.63330078125 L 697.2000122070312 47.52764892578125 L 774.6666870117188 37.422000885009766 L 852.1333618164062 29.937599182128906 L 929.5999755859375 22.45319938659668 L 1007.066650390625 14.968799591064453 L 1084.5333251953125 7.484399795532227 L 1162 0"}\\] |
| 4 · 33:788 · ELLIPSE | Pareggio con detrazione ipotizzata | 465.87 / 122 | 12 × 12 | H/V FIXED/FIXED | #5C400E → solar-ink; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 3 · 15:470 · FRAME | Saldo dopo dieci anni | 28 / 417 | 1256 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:471 · TEXT | Saldo a 10 anni: +2.712,00 € | 16 / 16 | 1224 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:472 · TEXT | −6.990 € + 10 × 970,20 €. Prezzi e produzion | 16 / 48 | 1224 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:901 · INSTANCE | Vedi i flussi anno per anno → | 28 / 518 | 1256 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:901;15:64 · TEXT | Continua | 16 / 7.5 | 1224 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 15:473 · FRAME | Quanto cambia al variare della produzione | 0 / 1640 | 1312 × 298 | VERTICAL; pad 28/28/28/28; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:904 · TEXT | E se autoconsumo e prezzi cambiano? | 28 / 28 | 1256 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:905 · TEXT | Tre combinazioni illustrative: quota ±10 punti e prezzi ±10%. Produzione, investimento, costi e ipotesi fiscale restano invariati. Non sono probabilità o garanzie. | 28 / 74 | 1256 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:906 · FRAME | Scenari di autoconsumo e prezzi | 28 / 111 | 1256 × 159 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:907 · FRAME | Quota e prezzi ridotti | 0 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:908 · TEXT | Quota e prezzi ridotti | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:909 · TEXT | ≈ 6,1 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:910 · TEXT | 30% richiesto · prezzi 0,225/0,081 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:911 · TEXT | 1.154,32 €/anno nei primi 10 anni | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 33:912 · FRAME | Ipotesi inserite | 422.67 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:913 · TEXT | Ipotesi inserite | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:914 · TEXT | ≈ 5,2 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:915 · TEXT | 40% richiesto · prezzi 0,250/0,090 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:916 · TEXT | 1.347,42 €/anno nei primi 10 anni | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 33:917 · FRAME | Quota e prezzi aumentati | 845.33 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:918 · TEXT | Quota e prezzi aumentati | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:919 · TEXT | ≈ 4,6 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:920 · TEXT | 50% richiesto · prezzi 0,275/0,099 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:921 · TEXT | 1.519,02 €/anno nei primi 10 anni | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 15:490 · FRAME | Ipotesi formule e limiti | 0 / 1962 | 1312 × 194 | VERTICAL; pad 28/28/28/28; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:491 · TEXT | Ipotesi e limiti, in chiaro | 28 / 28 | 1256 × 30 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 15:492 · TEXT | Produzione: 4,5 kWp × 1.400 kWh/kWp. Autocon | 28 / 70 | 1256 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 15:493 · TEXT | Valori dello scenario iniziale, non tariffe | 28 / 124 | 1256 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 15:494 · FRAME | Azioni finali | 0 / 2180 | 1312 × 56 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 15:495 · INSTANCE | SunSize V2/Button | 0 / 0 | 648 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:495;15:64 · TEXT | Continua | 16 / 16 | 616 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 15:497 · INSTANCE | SunSize V2/Button | 664 / 0 | 648 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:497;15:64 · TEXT | Continua | 17 / 16 | 614 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 1 · 15:115 · FRAME | Footer | 64 / 2631 | 1312 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:116 · TEXT | SunSize · PCODING Software | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:117 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 15:104 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:105 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:108 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:110 | ✓  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:112 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:398 | 03 / RISULTATI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:399 | I numeri del tuo impianto. | Inter Semi Bold; 48px; LH 120% (57.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/display |
| 15:400 | Una stima spiegata, non una promessa di rendimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:768 | Tempo di rientro: senza e con detrazione | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:771 | SENZA DETRAZIONE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:772 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #115E59 → color/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:773 | 997,92 €/anno dopo i costi inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:775 | CON LA DETRAZIONE IPOTIZZATA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:776 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:777 | 50% inserito come esempio, non aliquota presunta o diritto verificato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:778;15:64 | Modifica ipotesi fiscale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:781 | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:783 | Recupero fiscale ipotizzato | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:784 | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:785 | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:419 | Da dove arrivano i benefici | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:420 | Importi annuali · scenario centrale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:422 | Risparmio sulla bolletta | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:423 | +648,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:425 | Ricavi energia immessa | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:426 | +349,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:428 | Recupero fiscale | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:429 | 349,50 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:431 | Beneficio annuo (anni 1–10): 1.347,42 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:432 | 648,00 € risparmio + 349,92 € ricavi + 349,50 € recupero fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:434 | Costi ricorrenti: non inclusi | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:435 | Manutenzione, assicurazione e sostituzioni non sono pari a zero: non sono modellate in questa stima. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:305;15:64 | Inserisci i costi → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:786 | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:437 | Come si distribuisce l’energia | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:438 | 6.480 kWh prodotti in un anno | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:443 | Usata in casa · 40% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:444 | 2.592 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:446 | Immessa in rete · 60% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:447 | 3.888 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:449 | Da acquistare: 408 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:450 | Il 13,6% dei 3.000 kWh consumati. I costi fissi restano. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:451 | La quota del 40% si riferisce alla produzione, non ai tuoi consumi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:453 | Quando recuperi l’investimento? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:454 | Saldo cumulato · euro, prima dei costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:457 | −6.990 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:459 | 0 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:461 | +12.000 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:463 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:464 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:465 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:466 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:467 | anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:469 | Senza ≈ 7,0 · con ≈ 5,2 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:471 | Saldo a 10 anni: senza +2.989,20 € · con +6.484,20 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:472 | Il recupero fiscale aggiunge 3.495 € nei primi 10 anni e poi termina. Verde: senza detrazione; ambra: con ipotesi fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:901;15:64 | Vedi i flussi anno per anno → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:904 | E se autoconsumo e prezzi cambiano? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:905 | Tre combinazioni illustrative: quota ±10 punti e prezzi ±10%. Produzione, investimento, costi e ipotesi fiscale restano invariati. Non sono probabilità o garanzie. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:908 | Quota e prezzi ridotti | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:909 | ≈ 6,1 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:910 | 30% richiesto · prezzi 0,225/0,081 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:911 | 1.154,32 €/anno nei primi 10 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:913 | Ipotesi inserite | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:914 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:915 | 40% richiesto · prezzi 0,250/0,090 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:916 | 1.347,42 €/anno nei primi 10 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:918 | Quota e prezzi aumentati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:919 | ≈ 4,6 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:920 | 50% richiesto · prezzi 0,275/0,099 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:921 | 1.519,02 €/anno nei primi 10 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:491 | Ipotesi e limiti, in chiaro | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:492 | Regione: Lazio. Resa regionale: 1.440 kWh/kWp/anno. Potenza: 4,5 kWp. Autoconsumo: 40%. Prezzo evitato: 0,25 €/kWh. Vendita: 0,09 €/kWh. Detrazione ipotizzata: 50% in 10 anni, se spettante. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:493 | Resa: elaborazione SunSize su PVGIS 5.3/SARAH3 (2005–2023), sud, 30°, perdite di sistema 14%. Rientro semplice, senza finanziamento, inflazione, degrado, manutenzione o sostituzioni se non inserite. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:495;15:64 | Modifica e ricalcola → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I15:497;15:64 | Nuova simulazione | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 15:116 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:117 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · 1 Consumi · V2 — 15:118

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-118) · **390 × 1370 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 15:118 · FRAME | Mobile · 1 Consumi · V2 | 0 / 2700 | 390 × 1370 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 15:119 · FRAME | Intestazione | 20 / 16 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:120 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:121 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:122 · FRAME | Avanzamento | 20 / 63 | 350 × 41 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:123 · FRAME | Passo 1 | 0 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:124 · TEXT | 01  Consumi | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 15:125 · FRAME | Passo 2 | 119.33 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:126 · TEXT | 02  Impianto | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:127 · FRAME | Passo 3 | 238.67 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:128 · TEXT | 03  Risultati | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:129 · FRAME | Introduzione | 20 / 120 | 350 × 153 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:211 · TEXT | IL FOTOVOLTAICO, CON CHIAREZZA | 0 / 0 | 350 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:212 · TEXT | Il tuo sole.<br>I tuoi numeri. | 0 / 29 | 350 × 68 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 15:213 · TEXT | Parti dai tuoi consumi. Comprendi il tuo inv | 0 / 105 | 350 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:130 · FRAME | Area principale | 20 / 289 | 350 × 999 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:214 · FRAME | Dati dalla bolletta | 0 / 0 | 350 × 999 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:215 · TEXT | 01 / CONSUMI | 20 / 16 | 310 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 15:216 · TEXT | Quanto consumi in un anno? | 20 / 53 | 310 × 62 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 15:217 · TEXT | Bastano due dati dalla bolletta per iniziare | 20 / 131 | 310 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:218 · FRAME | Come trovare i dati | 20 / 195 | 310 × 125 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:219 · TEXT | Tieni a portata di mano una bolletta | 16 / 16 | 278 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:220 · TEXT | Cerca il riepilogo dei consumi degli ultimi | 16 / 46 | 278 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:221 · FRAME | Consumo e spesa | 20 / 336 | 310 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:222 · INSTANCE | SunSize V2/NumField | 0 / 0 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:222;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:222;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:222;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:222;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:227 · INSTANCE | SunSize V2/NumField | 0 / 130 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:227;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:227;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:227;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:227;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 15:232 · FRAME | Spesa e risparmio | 20 / 596 | 310 × 127 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:233 · TEXT | La spesa non è il risparmio | 16 / 16 | 278 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 15:234 · TEXT | Include costi fissi e tasse. Il risparmio sa | 16 / 48 | 278 × 63 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 15:235 · INSTANCE | SunSize V2/Button | 20 / 739 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:235;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 15:237 · INSTANCE | SunSize V2/Button | 20 / 811 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:237;15:64 · TEXT | Continua | 17 / 16 | 276 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 15:239 · TEXT | Puoi partire da una stima e correggerla prim | 20 / 883 | 310 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:240 · TEXT | Nessuna registrazione. I dati restano in que | 20 / 941 | 310 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:131 · FRAME | Footer | 20 / 1304 | 350 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:132 · TEXT | SunSize · PCODING Software | 0 / 0 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:133 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 15:120 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:121 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:124 | 01  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:126 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:128 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:211 | IL FOTOVOLTAICO, CON CHIAREZZA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:212 | Il tuo sole.<br>I tuoi numeri. | Inter Semi Bold; 28px; LH 120% (33.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; senza stile |
| 15:213 | Parti dai tuoi consumi. Comprendi il tuo investimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:215 | 01 / CONSUMI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:216 | Quanto consumi in un anno? | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:217 | Bastano due dati dalla bolletta per iniziare. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:219 | Tieni a portata di mano una bolletta | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:220 | Cerca il riepilogo dei consumi degli ultimi 12 mesi e somma gli importi dello stesso periodo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:222;15:66 | Consumo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:222;15:68 | 3.000 kWh/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:222;15:69 | Il totale degli ultimi 12 mesi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:227;15:66 | Spesa annua complessiva | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:227;15:68 | 900 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:227;15:69 | Tutte le bollette, tasse incluse. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:233 | La spesa non è il risparmio | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:234 | Include costi fissi e tasse. Il risparmio sarà stimato sull’energia che non acquisterai, usando il prezzo evitato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:235;15:64 | Continua: impianto → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I15:237;15:64 | Non ho dati annuali | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 15:239 | Puoi partire da una stima e correggerla prima del calcolo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:240 | Nessuna registrazione. I dati restano in questa pagina. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:132 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:133 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · 2 Impianto · V2 — 15:134

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-134) · **390 × 2605 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 15:134 · FRAME | Mobile · 2 Impianto · V2 | 1560 / 2700 | 390 × 2605 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 15:135 · FRAME | Intestazione | 20 / 16 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:136 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:137 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:138 · FRAME | Avanzamento | 20 / 63 | 350 × 41 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:139 · FRAME | Passo 1 | 0 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:140 · TEXT | ✓  Consumi | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 15:141 · FRAME | Passo 2 | 119.33 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:142 · TEXT | 02  Impianto | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 15:143 · FRAME | Passo 3 | 238.67 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:144 · TEXT | 03  Risultati | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:145 · FRAME | Introduzione | 20 / 120 | 350 × 147 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:329 · TEXT | 02 / IL TUO IMPIANTO | 0 / 0 | 350 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:330 · TEXT | Un impianto, le tue abitudini. | 0 / 29 | 350 × 62 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 15:331 · TEXT | Parti dal preventivo e controlla le ipotesi | 0 / 99 | 350 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:146 · FRAME | Area principale | 20 / 283 | 350 × 2240 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:332 · FRAME | Configurazione e ipotesi | 0 / 0 | 350 × 2240 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:333 · FRAME | Consumi inseriti | 20 / 16 | 310 × 98 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:334 · TEXT | 3.000 kWh/anno · 900 €/anno | 16 / 16 | 278 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:335 · INSTANCE | SunSize V2/Button | 16 / 48 | 278 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:335;15:64 · TEXT | Continua | 16 / 6.5 | 246 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:337 · FRAME | Dati dal preventivo | 20 / 130 | 310 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:338 · INSTANCE | SunSize V2/NumField | 0 / 0 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:338;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:338;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:338;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:338;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:343 · INSTANCE | SunSize V2/NumField | 0 / 130 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:343;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:343;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I15:343;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I15:343;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 15:348 · FRAME | Produzione stimata | 20 / 390 | 310 × 575 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 21:139 · TEXT | Dove installerai l’impianto? | 0 / 0 | 310 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 21:140 · TEXT | Scegli la regione: la resa si compila automaticamente. | 0 / 42 | 310 × 48 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 21:141 · TEXT | ● Stima dalla regione ○ Valore del preventivo | 0 / 102 | 310 × 42 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 21:142 · INSTANCE | Regione · selettore a 20 opzioni | 0 / 156 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I21:142;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I21:142;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I21:142;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I21:142;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 21:147 · FRAME | Resa regionale proposta | 0 / 282 | 310 × 126 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 16; vincoli MIN/MIN; clip true |
| 5 · 21:148 · TEXT | Resa annua indicativa · Lazio | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 21:149 · TEXT | 1.440 kWh/kWp/anno | 16 / 48 | 278 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 21:150 · TEXT | 4,5 kWp × 1.440 = 6.480 kWh/anno | 16 / 86 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 21:151 · TEXT | Elaborazione SunSize su PVGIS 5.3 · 2005–2023. Sud, 30°, perdite di sistema 14%. La media regionale non descrive il singolo tetto. | 0 / 420 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 21:152 · INSTANCE | Apri inserimento manuale resa | 0 / 495 | 310 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I21:152;15:64 · TEXT | Continua | 16 / 6.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 21:154 · INSTANCE | Apri fonte e metodo | 0 / 541 | 310 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I21:154;15:64 · TEXT | Continua | 16 / 6.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:362 · FRAME | Profilo di autoconsumo | 20 / 981 | 310 × 673 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 33:1568 · FRAME | Contesto dei consumi e accumulo | 0 / 0 | 310 × 307 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1569 · INSTANCE | SunSize V2/NumField | 0 / 0 | 310 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1569;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1569;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1569;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1569;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1574 · INSTANCE | SunSize V2/NumField | 0 / 151 | 310 × 156 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1574;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1574;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1574;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1574;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 63 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:363 · TEXT | Quando consumi più energia? | 0 / 319 | 310 × 60 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:364 · FRAME | Seleziona un profilo | 0 / 391 | 310 × 86 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:365 · FRAME | Di sera | 0 / 0 | 98 × 72 | VERTICAL; pad 8/8/8/8; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 15:366 · TEXT | Di sera | 8 / 8 | 82 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 15:367 · TEXT | 25% | 8 / 33 | 82 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:368 · FRAME | Misto | 106 / 0 | 98 × 86 | VERTICAL; pad 8/8/8/8; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 20; vincoli MIN/MIN; clip true |
| 6 · 15:369 · TEXT | ✓ Misto | 8 / 8 | 82 × 42 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 6 · 15:370 · TEXT | 40% | 8 / 54 | 82 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 5 · 15:371 · FRAME | Di giorno | 212 / 0 | 98 × 72 | VERTICAL; pad 8/8/8/8; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 15:372 · TEXT | Di giorno | 8 / 8 | 82 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 15:373 · TEXT | 60% | 8 / 33 | 82 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:374 · TEXT | Misto: 40% della produzione usata in casa, c | 0 / 489 | 310 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:375 · TEXT | Profili indicativi, non misure orarie. L’aut | 0 / 564 | 310 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:376 · INSTANCE | SunSize V2/Button | 0 / 639 | 310 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I15:376;15:64 · TEXT | Continua | 16 / 6.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:378 · FRAME | Ipotesi economiche visibili | 20 / 1670 | 310 × 432 | VERTICAL; pad 16/16/16/16; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:379 · TEXT | Ipotesi economiche | 16 / 16 | 278 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:380 · FRAME | Prezzi dell’energia | 16 / 62 | 278 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:381 · INSTANCE | SunSize V2/NumField | 0 / 0 | 278 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I15:381;15:66 · TEXT | Consumo annuo | 0 / 0 | 278 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:381;15:67 · FRAME | Input | 0 / 29 | 278 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I15:381;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 244 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:381;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 278 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 15:386 · INSTANCE | SunSize V2/NumField | 0 / 130 | 278 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I15:386;15:66 · TEXT | Consumo annuo | 0 / 0 | 278 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:386;15:67 · FRAME | Input | 0 / 29 | 278 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I15:386;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 244 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I15:386;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 278 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 15:391 · TEXT | Fonte: valori dello scenario iniziale, non t | 16 / 322 | 278 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 25:370 · INSTANCE | Detrazione 0% · costi esclusi · Modifica → | 16 / 380 | 278 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I25:370;15:64 · TEXT | Continua | 16 / -3 | 246 × 42 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 15:394 · INSTANCE | SunSize V2/Button | 20 / 2118 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:394;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 15:396 · INSTANCE | SunSize V2/Button | 20 / 2190 | 310 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 4 · I15:396;15:64 · TEXT | Continua | 16 / 6.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 15:147 · FRAME | Footer | 20 / 2539 | 350 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:148 · TEXT | SunSize · PCODING Software | 0 / 0 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:149 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 15:136 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:137 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:140 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:142 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:144 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:329 | 02 / IL TUO IMPIANTO | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:330 | Un impianto, le tue abitudini. | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:331 | Parti dal preventivo e controlla le ipotesi prima del calcolo. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:334 | 3.000 kWh/anno · 900 €/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| I15:335;15:64 | Modifica consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I15:338;15:66 | Potenza impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:338;15:68 | 4,5 kWp | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:338;15:69 | La potenza nominale nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:343;15:66 | Costo totale | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:343;15:68 | 6.990 € | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:343;15:69 | Esborso iniziale, prima delle detrazioni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 21:139 | Dove installerai l’impianto? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 21:140 | Scegli la regione: la resa si compila automaticamente. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 21:141 | ● Stima dalla regione    ○ Valore del preventivo | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I21:142;15:66 | Regione dell’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I21:142;15:68 | Lazio  ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I21:142;15:69 | Seleziona una delle 20 regioni italiane. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 21:148 | Resa annua indicativa · Lazio | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 21:149 | 1.440 kWh/kWp/anno | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 21:150 | 4,5 kWp × 1.440 = 6.480 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 21:151 | Elaborazione SunSize su PVGIS 5.3 · 2005–2023. Sud, 30°, perdite di sistema 14%. La media regionale non descrive il singolo tetto. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I21:152;15:64 | Ho la resa del preventivo → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I21:154;15:64 | Fonte e metodo dei valori regionali → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I33:1569;15:66 | Quando consumi di più? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1569;15:68 | Durante tutta la giornata ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1569;15:69 | Contesto dichiarato: non assegna automaticamente una percentuale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1574;15:66 | È prevista una batteria? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1574;15:68 | Non so / da valutare ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1574;15:69 | Una batteria non viene simulata: servono capacità e profili orari. Il suo costo va incluso nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:363 | Quale quota di produzione userai in casa? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:366 | Quota 25% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:367 | 25% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:369 | ✓ Quota 40% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:370 | 40% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:372 | Quota 60% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:373 | 60% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:374 | Ipotesi 40%: 2.592 kWh/anno, cioè l’86,4% dei consumi. Verifica la coincidenza con la produzione nelle ore di sole. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:375 | Quote illustrative, non misurate né dedotte dagli orari o dalla batteria. Puoi personalizzarle. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:376;15:64 | Personalizza autoconsumo → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 15:379 | Ipotesi economiche | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| I15:381;15:66 | Energia non acquistata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:381;15:68 | 0,25 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:381;15:69 | Prezzo evitato, senza costi fissi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:386;15:66 | Energia immessa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I15:386;15:68 | 0,09 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I15:386;15:69 | Ipotesi di ricavo, non tariffa garantita. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:391 | Prezzi dello scenario iniziale, non tariffe verificate. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:370;15:64 | Detrazione ipotizzata 50% · costi esclusi · Modifica → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I15:394;15:64 | Calcola la simulazione → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I15:396;15:64 | ← Torna ai consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 15:148 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:149 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · 3 Risultati · V2 — 15:150

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=15-150) · **390 × 3221 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 15:150 · FRAME | Mobile · 3 Risultati · V2 | 3120 / 2700 | 390 × 3221 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 15:151 · FRAME | Intestazione | 20 / 16 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:152 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:153 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:154 · FRAME | Avanzamento | 20 / 63 | 350 × 41 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:155 · FRAME | Passo 1 | 0 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:156 · TEXT | ✓  Consumi | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 15:157 · FRAME | Passo 2 | 119.33 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:158 · TEXT | ✓  Impianto | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 15:159 · FRAME | Passo 3 | 238.67 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 15:160 · TEXT | 03  Risultati | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 1 · 15:161 · FRAME | Introduzione | 20 / 120 | 350 × 116 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:499 · TEXT | 03 / RISULTATI | 0 / 0 | 350 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 15:500 · TEXT | I numeri del tuo impianto. | 0 / 29 | 350 × 31 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 15:501 · TEXT | Una stima spiegata, non una promessa di rend | 0 / 68 | 350 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 15:162 · FRAME | Area principale | 20 / 252 | 350 × 2887 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:502 · FRAME | Indicatori principali | 0 / 0 | 350 × 773 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:922 · TEXT | Tempo di rientro: senza e con detrazione | 0 / 0 | 350 × 60 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:923 · FRAME | Rientro senza detrazione | 0 / 76 | 350 × 145 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:924 · TEXT | SENZA DETRAZIONE | 24 / 24 | 302 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:925 · TEXT | ≈ 7,0 anni | 24 / 57 | 302 × 31 | H/V FIXED/HUG | #115E59 → color/brand-dark; vincoli MIN/MIN |
| 4 · 33:926 · TEXT | 997,92 €/anno dopo i costi inseriti. | 24 / 100 | 302 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:927 · FRAME | Rientro con ipotesi fiscale | 0 / 237 | 350 × 214 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:928 · TEXT | CON LA DETRAZIONE IPOTIZZATA | 24 / 24 | 302 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 33:929 · TEXT | ≈ 5,2 anni | 24 / 57 | 302 × 31 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 33:930 · TEXT | 50% inserito come esempio, non aliquota presunta o diritto verificato. | 24 / 100 | 302 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 33:931 · INSTANCE | Modifica ipotesi fiscale → | 24 / 154 | 302 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I33:931;15:64 · TEXT | Continua | 16 / 7.5 | 270 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:934 · TEXT | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | 0 / 467 | 350 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:935 · FRAME | Recupero fiscale ipotizzato | 0 / 546 | 350 × 127 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:936 · TEXT | Recupero fiscale ipotizzato | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:937 · TEXT | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | 16 / 48 | 318 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:938 · TEXT | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | 0 / 689 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 21:176 · INSTANCE | Modifica rapida risultati | 0 / 789 | 350 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 3 · I21:176;15:64 · TEXT | Continua | 16 / 6.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 15:518 · FRAME | Economia ed energia | 0 / 839 | 350 × 999 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 15:519 · FRAME | Da dove arrivano i benefici | 0 / 0 | 350 × 585 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:520 · TEXT | Da dove arrivano i benefici | 20 / 16 | 310 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:521 · TEXT | Importi annuali · scenario centrale | 20 / 62 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:522 · FRAME | Risparmio sulla bolletta | 20 / 99 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:523 · TEXT | Risparmio sulla bolletta | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:524 · TEXT | +630,00 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:525 · FRAME | Ricavi energia immessa | 20 / 139 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:526 · TEXT | Ricavi energia immessa | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:527 · TEXT | +340,20 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:528 · FRAME | Recupero fiscale | 20 / 179 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:529 · TEXT | Recupero fiscale | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:530 · TEXT | 0,00 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:531 · FRAME | Beneficio prima dei costi esclusi | 20 / 219 | 310 × 130 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 15:532 · TEXT | Beneficio annuo: 970,20 € | 16 / 16 | 278 × 48 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 5 · 15:533 · TEXT | 630,00 € di risparmio + 340,20 € di ricavi. | 16 / 72 | 278 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:534 · FRAME | Costi non inclusi | 20 / 365 | 310 × 146 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 15:535 · TEXT | Costi ricorrenti: non inclusi | 16 / 16 | 278 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 15:536 · TEXT | Manutenzione, assicurazione e sostituzioni n | 16 / 46 | 278 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 25:373 · INSTANCE | Inserisci i costi → | 16 / 94 | 278 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I25:373;15:64 · TEXT | Continua | 16 / 7.5 | 246 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:939 · TEXT | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | 20 / 527 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 15:537 · FRAME | Come si distribuisce l’energia | 0 / 601 | 350 × 398 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:538 · TEXT | Come si distribuisce l’energia | 20 / 16 | 310 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:539 · TEXT | 6.300 kWh prodotti in un anno | 20 / 62 | 310 × 62 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:540 · FRAME | Ripartizione della produzione | 20 / 140 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 0; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip true |
| 5 · 15:541 · RECTANGLE | Usata in casa | 0 / 0 | 124 × 24 | H/V FIXED/FIXED | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 15:542 · RECTANGLE | Immessa in rete | 124 / 0 | 186 × 24 | H/V FIXED/FIXED | #0F766E → primitive/brand; vincoli MIN/MIN |
| 4 · 15:543 · FRAME | Usata in casa · 40% | 20 / 180 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:544 · TEXT | Usata in casa · 40% | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:545 · TEXT | 2.520 kWh | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:546 · FRAME | Immessa in rete · 60% | 20 / 220 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 15:547 · TEXT | Immessa in rete · 60% | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 15:548 · TEXT | 3.780 kWh | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 15:549 · FRAME | Energia ancora acquistata | 20 / 260 | 310 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 5 · 15:550 · TEXT | Da acquistare: 480 kWh/anno | 16 / 16 | 278 × 24 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 5 · 15:551 · TEXT | Il 16% dei 3.000 kWh consumati. I costi fiss | 16 / 48 | 278 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:552 · TEXT | La quota del 40% si riferisce alla produzion | 20 / 361 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:553 · FRAME | Quando recuperi l’investimento | 0 / 1854 | 350 × 654 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 15:554 · TEXT | Quando recuperi l’investimento? | 20 / 16 | 310 × 60 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 15:555 · TEXT | Saldo cumulato · euro, prima dei costi esclu | 20 / 92 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 15:556 · FRAME | Saldo cumulato · scala anni ed euro | 20 / 129 | 310 × 290 | NONE; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip true |
| 4 · 15:557 · VECTOR | Riferimento -6990 | 56 / 180.43 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 15:558 · TEXT | −6.990 | 0 / 170.43 | 48 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:559 · VECTOR | Riferimento 0 | 56 / 128 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #52676B → primitive/muted; vincoli MIN/MIN; tratteggio 4/4; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 15:560 · TEXT | 0 € | 0 / 118 | 48 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:561 · VECTOR | Riferimento 12000 | 56 / 38 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 15:562 · TEXT | +7.500 | 0 / 28 | 48 × 42 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:563 · VECTOR | Saldo senza detrazione | 56 / 68.16 | 240 × 112.27 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #0F766E → color/brand; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 112.26599884033203 L 16 104.78160095214844 L 32 97.29720306396484 L 48 89.81279754638672 L 64 82.32839965820312 L 80 74.84400177001953 L 96 67.3595962524414 L 112 59.87519836425781 L 128 52.39080047607422 L 144 44.90639877319336 L 160 37.422000885009766 L 176 29.937599182128906 L 192 22.45319938659668 L 208 14.968799591064453 L 224 7.484399795532227 L 240 0"}\\] |
| 4 · 15:564 · TEXT | 0 | 42 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:565 · TEXT | 5 | 122 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:566 · TEXT | 10 | 202 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:567 · TEXT | 15 | 282 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:568 · TEXT | anni | 270 / 252 | 40 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 15:569 · ELLIPSE | Pareggio a circa 7,2 anni | 162.07 / 122 | 12 × 12 | H/V FIXED/FIXED | #FFCC45 → solar; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:570 · TEXT | Pareggio ≈ 7,2 anni | 56 / 0 | 240 × 21 | H/V FIXED/FIXED | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:940 · VECTOR | Saldo con recupero fiscale | 56 / 41.95 | 240 × 138.48 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #5C400E → solar-ink; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 138.47850036621094 L 16 128.3728485107422 L 32 118.26719665527344 L 48 108.16155242919922 L 64 98.05590057373047 L 80 87.95024871826172 L 96 77.84459686279297 L 112 67.73895263671875 L 128 57.63330078125 L 144 47.52764892578125 L 160 37.422000885009766 L 176 29.937599182128906 L 192 22.45319938659668 L 208 14.968799591064453 L 224 7.484399795532227 L 240 0"}\\] |
| 4 · 33:941 · ELLIPSE | Pareggio con detrazione ipotizzata | 133 / 122 | 12 × 12 | H/V FIXED/FIXED | #5C400E → solar-ink; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 3 · 15:571 · FRAME | Saldo dopo dieci anni | 20 / 435 | 310 × 151 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 15:572 · TEXT | Saldo a 10 anni: +2.712,00 € | 16 / 16 | 278 × 48 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 15:573 · TEXT | −6.990 € + 10 × 970,20 €. Prezzi e produzion | 16 / 72 | 278 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:1032 · INSTANCE | Vedi i flussi anno per anno → | 20 / 602 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:1032;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 15:574 · FRAME | Quanto cambia al variare della produzione | 0 / 2524 | 350 × 114 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 21:195 · TEXT | Scenari: autoconsumo e prezzi + | 20 / 16 | 310 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 21:196 · TEXT | Quota ±10 punti · prezzi ±10% · ipotesi illustrative | 20 / 56 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 15:591 · FRAME | Ipotesi formule e limiti | 0 / 2654 | 350 × 89 | VERTICAL; pad 16/20/16/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 21:201 · TEXT | Ipotesi e limiti, in chiaro + | 20 / 16 | 310 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 21:202 · TEXT | PVGIS, prezzi, detrazione e costi esclusi | 20 / 52 | 310 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 15:595 · FRAME | Azioni finali | 0 / 2759 | 350 × 128 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 15:596 · INSTANCE | SunSize V2/Button | 0 / 0 | 350 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:596;15:64 · TEXT | Continua | 16 / 16 | 318 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 15:598 · INSTANCE | SunSize V2/Button | 0 / 72 | 350 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I15:598;15:64 · TEXT | Continua | 17 / 16 | 316 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 1 · 15:163 · FRAME | Footer | 20 / 3155 | 350 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 15:164 · TEXT | SunSize · PCODING Software | 0 / 0 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 15:165 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 15:152 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:153 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:156 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:158 | ✓  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:160 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:499 | 03 / RISULTATI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 15:500 | I numeri del tuo impianto. | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:501 | Una stima spiegata, non una promessa di rendimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:922 | Tempo di rientro: senza e con detrazione | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:924 | SENZA DETRAZIONE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:925 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #115E59 → color/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:926 | 997,92 €/anno dopo i costi inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:928 | CON LA DETRAZIONE IPOTIZZATA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:929 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:930 | 50% inserito come esempio, non aliquota presunta o diritto verificato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:931;15:64 | Modifica ipotesi fiscale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:934 | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:936 | Recupero fiscale ipotizzato | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:937 | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:938 | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I21:176;15:64 | Modifica le ipotesi e ricalcola → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 15:520 | Da dove arrivano i benefici | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:521 | Importi annuali · scenario centrale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:523 | Risparmio sulla bolletta | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:524 | +648,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:526 | Ricavi energia immessa | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:527 | +349,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:529 | Recupero fiscale | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:530 | 349,50 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:532 | Beneficio annuo (anni 1–10): 1.347,42 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:533 | 648,00 € risparmio + 349,92 € ricavi + 349,50 € recupero fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:535 | Costi ricorrenti: non inclusi | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:536 | Manutenzione, assicurazione e sostituzioni sono escluse, non gratuite. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:373;15:64 | Inserisci i costi → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:939 | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:538 | Come si distribuisce l’energia | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:539 | 6.480 kWh prodotti in un anno | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 15:544 | Usata in casa · 40% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:545 | 2.592 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:547 | Immessa in rete · 60% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 15:548 | 3.888 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 15:550 | Da acquistare: 408 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:551 | Il 13,6% dei consumi. I costi fissi restano. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:552 | Il 40% è una quota della produzione. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:554 | Quando recuperi l’investimento? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 15:555 | Saldo cumulato · euro, prima dei costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:558 | −6.990 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:560 | 0 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:562 | +12.000 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:564 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:565 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:566 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:567 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:568 | anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 15:570 | Senza ≈ 7,0 · con ≈ 5,2 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 15:572 | Saldo a 10 anni: senza +2.989,20 € · con +6.484,20 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 15:573 | Il recupero fiscale aggiunge 3.495 € nei primi 10 anni e poi termina. Verde: senza detrazione; ambra: con ipotesi fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1032;15:64 | Vedi i flussi anno per anno → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 21:195 | Scenari: autoconsumo e prezzi  + | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 21:196 | Quota ±10 punti · prezzi ±10% · ipotesi illustrative | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 21:201 | Ipotesi e limiti, in chiaro  + | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 21:202 | PVGIS, prezzi, detrazione e costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I15:596;15:64 | Modifica e ricalcola → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I15:598;15:64 | Nuova simulazione | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 15:164 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 15:165 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Hai solo i dati di un periodo? · V2 — 22:142

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-142) · **1440 × 1117 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:142 · FRAME | Desktop · Hai solo i dati di un periodo? · V2 | 4800 / 0 | 1440 × 1117 | VERTICAL; pad 40/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 22:143 · FRAME | Intestazione | 64 / 40 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:144 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:145 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:146 · FRAME | Hai solo i dati di un periodo? | 64 / 103 | 900 × 897 | VERTICAL; pad 36/36/36/36; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 22:147 · TEXT | Hai solo i dati di un periodo? | 36 / 36 | 828 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:148 · TEXT | Usa un periodo che conosci: ricaviamo un riferimento annuale da controllare. | 36 / 101 | 828 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:150 · INSTANCE | SunSize V2/NumField | 36 / 147 | 828 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:150;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:150;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:150;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:150;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:155 · INSTANCE | SunSize V2/NumField | 36 / 283 | 828 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:155;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:155;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:155;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:155;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:160 · INSTANCE | SunSize V2/NumField | 36 / 419 | 828 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:160;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:160;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:160;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:160;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:165 · FRAME | Riferimento annualizzato | 36 / 555 | 828 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:166 · TEXT | Riferimento annualizzato | 16 / 16 | 796 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:167 · TEXT | 500 ÷ 2 × 12 = 3.000 kWh/anno 150 ÷ 2 × 12 = 900 €/anno | 16 / 48 | 796 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:168 · TEXT | È un’estrapolazione, non il consumo annuo misurato: stagioni, riscaldamento e abitudini possono cambiare il risultato. Se non conosci neppure questi dati, recuperali prima dal fornitore. | 36 / 683 | 828 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:169 · INSTANCE | Usa la stima e controlla i dati → | 36 / 747 | 828 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:169;15:64 · TEXT | Continua | 16 / 16 | 796 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 22:171 · INSTANCE | ← Torna ai consumi | 36 / 825 | 828 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:171;15:64 · TEXT | Continua | 16 / 7.5 | 796 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 22:149 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 64 / 1032 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:144 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:145 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:147 | Hai solo i dati di un periodo? | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 22:148 | Usa un periodo che conosci: ricaviamo un riferimento annuale da controllare. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:150;15:66 | Consumo del periodo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:150;15:68 | 500 kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:150;15:69 | Letture, bolletta o app del fornitore. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:155;15:66 | Spesa dello stesso periodo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:155;15:68 | 150 € | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:155;15:69 | Includi tutti gli importi elettrici del periodo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:160;15:66 | Durata del periodo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:160;15:68 | 2 mesi | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:160;15:69 | Indica un periodo fra 1 e 12 mesi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:166 | Riferimento annualizzato | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:167 | 500 ÷ 2 × 12 = 3.000 kWh/anno<br>150 ÷ 2 × 12 = 900 €/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:168 | È un’estrapolazione, non il consumo annuo misurato: stagioni, riscaldamento e abitudini possono cambiare il risultato. Se non conosci neppure questi dati, recuperali prima dal fornitore. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:169;15:64 | Usa la stima e controlla i dati → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:171;15:64 | ← Torna ai consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:149 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Consumi annualizzati da verificare · V2 — 22:173

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-173) · **1440 × 1422 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:173 · FRAME | Desktop · Consumi annualizzati da verificare · V2 | 6360 / 3300 | 1440 × 1422 | VERTICAL; pad 64/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 22:174 · FRAME | Intestazione | 64 / 64 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:175 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:176 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:177 · FRAME | Avanzamento | 64 / 127 | 1312 × 53 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:178 · FRAME | Passo 1 | 0 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:179 · TEXT | 01  Consumi | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 22:180 · FRAME | Passo 2 | 442.67 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:181 · TEXT | 02  Impianto | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:182 · FRAME | Passo 3 | 885.33 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:183 · TEXT | 03  Risultati | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:184 · FRAME | Introduzione | 64 / 212 | 1312 × 119 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:185 · TEXT | IL FOTOVOLTAICO, CON CHIAREZZA | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:186 · TEXT | Il tuo sole. I tuoi numeri. | 0 / 29 | 1312 × 58 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 22:187 · TEXT | Parti dai tuoi consumi. Comprendi il tuo inv | 0 / 95 | 1312 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:188 · FRAME | Area principale | 64 / 363 | 1312 × 913 | HORIZONTAL; pad 0/0/0/0; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:189 · FRAME | Perché SunSize | 0 / 0 | 440 × 599 | VERTICAL; pad 32/32/32/32; gap 28; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #115E59 → primitive/brand-dark; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:190 · TEXT | UNA SCELTA PIÙ CONSAPEVOLE | 32 / 32 | 376 × 21 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 3 · 22:191 · TEXT | Prima di scegliere i pannelli,<br>fai chiarezza | 32 / 81 | 376 × 129 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:192 · TEXT | Esplora produzione, benefici e tempo di rien | 32 / 238 | 376 × 48 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:193 · FRAME | Valore del percorso | 32 / 314 | 376 × 204 | VERTICAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:194 · FRAME | Dati che conosci | 0 / 0 | 376 × 52 | VERTICAL; pad 0/0/0/0; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:195 · TEXT | 01  Dati che conosci | 0 / 0 | 376 × 24 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 22:196 · TEXT | Consumi e spesa dalla tua bolletta. | 0 / 28 | 376 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 22:197 · FRAME | Ipotesi che controlli | 0 / 76 | 376 × 52 | VERTICAL; pad 0/0/0/0; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:198 · TEXT | 02  Ipotesi che controlli | 0 / 0 | 376 × 24 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 22:199 · TEXT | Produzione, autoconsumo e prezzi. | 0 / 28 | 376 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 22:200 · FRAME | Risultati spiegati | 0 / 152 | 376 × 52 | VERTICAL; pad 0/0/0/0; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:201 · TEXT | 03  Risultati spiegati | 0 / 0 | 376 × 24 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 22:202 · TEXT | Ogni beneficio ha una formula. | 0 / 28 | 376 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:203 · TEXT | Senza registrazione. Calcolo nel browser. | 32 / 546 | 376 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 22:204 · FRAME | Dati dalla bolletta | 472 / 0 | 840 × 913 | VERTICAL; pad 32/32/32/32; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:205 · TEXT | 01 / CONSUMI | 32 / 32 | 776 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 22:224 · FRAME | Dati annualizzati · da verificare | 32 / 77 | 776 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:225 · TEXT | Dati annualizzati · da verificare | 16 / 16 | 744 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 22:226 · TEXT | Da 500 kWh e 150 € in 2 mesi. Correggi questi valori se hai un riepilogo annuale. | 16 / 48 | 744 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:206 · TEXT | Quanto consumi in un anno? | 32 / 186 | 776 × 43 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 22:207 · TEXT | Bastano due dati dalla bolletta per iniziare | 32 / 253 | 776 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:208 · FRAME | Come trovare i dati | 32 / 301 | 776 × 83 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:209 · TEXT | Tieni a portata di mano una bolletta | 16 / 16 | 744 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:210 · TEXT | Cerca il riepilogo dei consumi degli ultimi | 16 / 46 | 744 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:211 · FRAME | Consumo e spesa | 32 / 408 | 776 × 114 | HORIZONTAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:212 · INSTANCE | SunSize V2/NumField | 0 / 0 | 376 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:212;15:66 · TEXT | Consumo annuo | 0 / 0 | 376 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:212;15:67 · FRAME | Input | 0 / 29 | 376 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:212;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 342 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:212;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 376 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:213 · INSTANCE | SunSize V2/NumField | 400 / 0 | 376 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:213;15:66 · TEXT | Consumo annuo | 0 / 0 | 376 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:213;15:67 · FRAME | Input | 0 / 29 | 376 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:213;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 342 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:213;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 376 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:214 · FRAME | Spesa e risparmio | 32 / 546 | 776 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:215 · TEXT | La spesa non è il risparmio | 16 / 16 | 744 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 22:216 · TEXT | Include costi fissi e tasse. Il risparmio sa | 16 / 48 | 744 × 21 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 22:217 · INSTANCE | SunSize V2/Button | 32 / 655 | 776 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:217;15:64 · TEXT | Continua | 16 / 16 | 744 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 22:218 · INSTANCE | SunSize V2/Button | 32 / 735 | 776 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:218;15:64 · TEXT | Continua | 17 / 16 | 742 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 22:219 · TEXT | Puoi partire da una stima e correggerla prim | 32 / 815 | 776 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:220 · TEXT | Nessuna registrazione. I dati restano in que | 32 / 860 | 776 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:221 · FRAME | Footer | 64 / 1308 | 1312 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:222 · TEXT | SunSize · PCODING Software | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:223 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:175 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:176 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:179 | 01  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:181 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:183 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:185 | IL FOTOVOLTAICO, CON CHIAREZZA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:186 | Il tuo sole. I tuoi numeri. | Inter Semi Bold; 48px; LH 120% (57.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/display |
| 22:187 | Parti dai tuoi consumi. Comprendi il tuo investimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:190 | UNA SCELTA PIÙ CONSAPEVOLE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:191 | Prima di scegliere i pannelli,<br>fai chiarezza. | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 22:192 | Esplora produzione, benefici e tempo di rientro. Le ipotesi restano sempre sotto il tuo controllo. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:195 | 01  Dati che conosci | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:196 | Consumi e spesa dalla tua bolletta. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:198 | 02  Ipotesi che controlli | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:199 | Produzione, autoconsumo e prezzi. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:201 | 03  Risultati spiegati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:202 | Ogni beneficio ha una formula. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:203 | Senza registrazione. Calcolo nel browser. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:205 | 01 / CONSUMI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:225 | Dati annualizzati · da verificare | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:226 | Da 500 kWh e 150 € in 2 mesi. Correggi questi valori se hai un riepilogo annuale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:206 | Quanto consumi in un anno? | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 22:207 | Bastano due dati dalla bolletta per iniziare. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:209 | Tieni a portata di mano una bolletta | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:210 | Cerca il riepilogo dei consumi degli ultimi 12 mesi e somma gli importi dello stesso periodo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:212;15:66 | Consumo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:212;15:68 | 3.000 kWh/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:212;15:69 | Il totale degli ultimi 12 mesi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:213;15:66 | Spesa annua complessiva | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:213;15:68 | 900 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:213;15:69 | Tutte le bollette, tasse incluse. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:215 | La spesa non è il risparmio | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:216 | Include costi fissi e tasse. Il risparmio sarà stimato sull’energia che non acquisterai, usando il prezzo evitato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:217;15:64 | Continua: configura l’impianto → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:218;15:64 | Non ho la bolletta: aiutami a stimare | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 22:219 | Puoi partire da una stima e correggerla prima del calcolo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:220 | Nessuna registrazione. I dati restano in questa pagina. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:222 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:223 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Personalizza l’autoconsumo · V2 — 22:241

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-241) · **1440 × 845 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:241 · FRAME | Desktop · Personalizza l’autoconsumo · V2 | 6360 / 0 | 1440 × 845 | VERTICAL; pad 40/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 22:242 · FRAME | Intestazione | 64 / 40 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:243 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:244 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:245 · FRAME | Personalizza l’autoconsumo | 64 / 103 | 900 × 625 | VERTICAL; pad 36/36/36/36; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 22:246 · TEXT | Personalizza l’autoconsumo | 36 / 36 | 828 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:247 · TEXT | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | 36 / 101 | 828 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:249 · INSTANCE | SunSize V2/NumField | 36 / 147 | 828 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:249;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:249;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:249;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:249;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:254 · FRAME | Con la configurazione attuale | 36 / 283 | 828 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:255 · TEXT | Con la configurazione attuale | 16 / 16 | 796 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:256 · TEXT | 6.480 × 40% = 2.592 kWh/anno usati in casa. Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | 16 / 48 | 796 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:257 · TEXT | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | 36 / 411 | 828 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:258 · INSTANCE | Usa questa quota → | 36 / 475 | 828 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:258;15:64 · TEXT | Continua | 16 / 16 | 796 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 22:260 · INSTANCE | Annulla e torna all’impianto | 36 / 553 | 828 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:260;15:64 · TEXT | Continua | 16 / 7.5 | 796 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 22:248 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 64 / 760 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:243 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:244 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:246 | Personalizza l’autoconsumo | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 22:247 | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:249;15:66 | Quota della produzione usata in casa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:249;15:68 | 40 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:249;15:69 | Valore ammesso: da 0% a 100%. Non è una percentuale del consumo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:255 | Con la configurazione attuale | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:256 | 6.480 × 40% = 2.592 kWh/anno usati in casa.<br>Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:257 | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:258;15:64 | Usa questa quota → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:260;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:248 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Impianto con resa manuale · V2 — 22:264

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-264) · **1440 × 2179 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:264 · FRAME | Desktop · Impianto con resa manuale · V2 | 7920 / 3300 | 1440 × 2179 | VERTICAL; pad 64/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 22:265 · FRAME | Intestazione | 64 / 64 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:266 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:267 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:268 · FRAME | Avanzamento | 64 / 127 | 1312 × 53 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:269 · FRAME | Passo 1 | 0 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:270 · TEXT | ✓  Consumi | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 22:271 · FRAME | Passo 2 | 442.67 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:272 · TEXT | 02  Impianto | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 22:273 · FRAME | Passo 3 | 885.33 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:274 · TEXT | 03  Risultati | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:275 · FRAME | Introduzione | 64 / 212 | 1312 × 119 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:276 · TEXT | 02 / IL TUO IMPIANTO | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:277 · TEXT | Un impianto, le tue abitudini. | 0 / 29 | 1312 × 58 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 22:278 · TEXT | Parti dal preventivo e controlla le ipotesi | 0 / 95 | 1312 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:279 · FRAME | Area principale | 64 / 363 | 1312 × 1670 | HORIZONTAL; pad 0/0/0/0; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:280 · FRAME | Configurazione e ipotesi | 0 / 0 | 864 × 1670 | VERTICAL; pad 32/32/32/32; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:281 · FRAME | Consumi inseriti | 32 / 32 | 800 × 98 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:282 · TEXT | 3.000 kWh/anno · 900 €/anno | 16 / 16 | 768 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:283 · INSTANCE | SunSize V2/Button | 16 / 48 | 768 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:283;15:64 · TEXT | Continua | 16 / 6.5 | 736 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:284 · FRAME | Dati dal preventivo | 32 / 154 | 800 × 114 | HORIZONTAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:285 · INSTANCE | SunSize V2/NumField | 0 / 0 | 388 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:285;15:66 · TEXT | Consumo annuo | 0 / 0 | 388 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:285;15:67 · FRAME | Input | 0 / 29 | 388 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:285;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 354 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:285;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 388 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:286 · INSTANCE | SunSize V2/NumField | 412 / 0 | 388 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:286;15:66 · TEXT | Consumo annuo | 0 / 0 | 388 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:286;15:67 · FRAME | Input | 0 / 29 | 388 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:286;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 354 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:286;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 388 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:287 · FRAME | Produzione stimata | 32 / 292 | 800 × 388 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:352 · TEXT | Ho il valore del preventivo | 0 / 0 | 800 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 22:353 · TEXT | ○ Stima dalla regione ● Valore del preventivo | 0 / 42 | 800 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 22:354 · INSTANCE | SunSize V2/NumField | 0 / 75 | 800 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:354;15:66 · TEXT | Consumo annuo | 0 / 0 | 800 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:354;15:67 · FRAME | Input | 0 / 29 | 800 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:354;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 766 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:354;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 800 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:359 · FRAME | Produzione risultante | 0 / 201 | 800 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:360 · TEXT | Produzione risultante | 16 / 16 | 768 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 22:361 · TEXT | 4,5 kWp × 1.440 = 6.480 kWh/anno | 16 / 48 | 768 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:362 · TEXT | Valore inserito dall’utente. Non applichiamo una seconda riduzione del 14%: usa la resa elettrica già stimata dall’installatore. | 0 / 298 | 800 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:363 · INSTANCE | Torna alla stima regionale → | 0 / 352 | 800 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I22:363;15:64 · TEXT | Continua | 16 / 7.5 | 768 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:299 · FRAME | Profilo di autoconsumo | 32 / 704 | 800 × 491 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 33:1579 · FRAME | Contesto dei consumi e accumulo | 0 / 0 | 800 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1580 · INSTANCE | SunSize V2/NumField | 0 / 0 | 800 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1580;15:66 · TEXT | Consumo annuo | 0 / 0 | 800 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1580;15:67 · FRAME | Input | 0 / 29 | 800 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1580;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 766 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1580;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 800 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1585 · INSTANCE | SunSize V2/NumField | 0 / 130 | 800 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1585;15:66 · TEXT | Consumo annuo | 0 / 0 | 800 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1585;15:67 · FRAME | Input | 0 / 29 | 800 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1585;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 766 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1585;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 800 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:300 · TEXT | Quando consumi più energia? | 0 / 256 | 800 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:301 · FRAME | Seleziona un profilo | 0 / 298 | 800 × 81 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:302 · FRAME | Di sera | 0 / 0 | 261.33 × 81 | VERTICAL; pad 16/16/16/16; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 22:303 · TEXT | Di sera | 16 / 16 | 229.33 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 22:304 · TEXT | 25% | 16 / 41 | 229.33 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:305 · FRAME | Misto | 269.33 / 0 | 261.33 × 81 | VERTICAL; pad 16/16/16/16; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 20; vincoli MIN/MIN; clip true |
| 6 · 22:306 · TEXT | ✓ Misto | 16 / 16 | 229.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 6 · 22:307 · TEXT | 40% | 16 / 41 | 229.33 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 5 · 22:308 · FRAME | Di giorno | 538.67 / 0 | 261.33 × 81 | VERTICAL; pad 16/16/16/16; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 22:309 · TEXT | Di giorno | 16 / 16 | 229.33 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 22:310 · TEXT | 60% | 16 / 41 | 229.33 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:311 · TEXT | Misto: 40% della produzione usata in casa, c | 0 / 391 | 800 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:312 · TEXT | Profili indicativi, non misure orarie. L’aut | 0 / 424 | 800 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:313 · INSTANCE | SunSize V2/Button | 0 / 457 | 800 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:313;15:64 · TEXT | Continua | 16 / 6.5 | 768 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:314 · FRAME | Ipotesi economiche visibili | 32 / 1219 | 800 × 281 | VERTICAL; pad 16/16/16/16; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:315 · TEXT | Ipotesi economiche | 16 / 16 | 768 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:316 · FRAME | Prezzi dell’energia | 16 / 62 | 768 × 114 | HORIZONTAL; pad 0/0/0/0; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:317 · INSTANCE | SunSize V2/NumField | 0 / 0 | 374 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I22:317;15:66 · TEXT | Consumo annuo | 0 / 0 | 374 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:317;15:67 · FRAME | Input | 0 / 29 | 374 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I22:317;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 340 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:317;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 374 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 22:318 · INSTANCE | SunSize V2/NumField | 394 / 0 | 374 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I22:318;15:66 · TEXT | Consumo annuo | 0 / 0 | 374 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:318;15:67 · FRAME | Input | 0 / 29 | 374 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I22:318;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 340 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:318;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 374 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:319 · TEXT | Fonte: valori dello scenario iniziale, non t | 16 / 192 | 768 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 25:336 · INSTANCE | Detrazione 0% · costi esclusi · Modifica → | 16 / 229 | 768 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I25:336;15:64 · TEXT | Continua | 16 / 7.5 | 736 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:322 · INSTANCE | SunSize V2/Button | 32 / 1524 | 800 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:322;15:64 · TEXT | Continua | 16 / 16 | 768 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 22:323 · INSTANCE | SunSize V2/Button | 32 / 1604 | 800 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 4 · I22:323;15:64 · TEXT | Continua | 16 / 6.5 | 768 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 22:324 · FRAME | Riepilogo della configurazione | 896 / 0 | 416 × 705 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #115E59 → primitive/brand-dark; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:325 · TEXT | IL TUO SCENARIO | 28 / 28 | 360 × 21 | H/V FILL/HUG | #FFCC45 → solar; vincoli MIN/MIN |
| 3 · 22:326 · TEXT | Le ipotesi,<br>sotto controllo. | 28 / 69 | 360 × 86 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:327 · FRAME | Potenza | 28 / 175 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:328 · TEXT | Potenza | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 22:329 · TEXT | 4,5 kWp | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:330 · FRAME | Produzione annua | 28 / 249 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:331 · TEXT | Produzione annua | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 22:332 · TEXT | 6.300 kWh | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:333 · FRAME | Usata in casa | 28 / 323 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:334 · TEXT | Usata in casa | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 22:335 · TEXT | 2.520 kWh | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:336 · FRAME | Esborso iniziale | 28 / 397 | 360 × 54 | VERTICAL; pad 0/0/0/0; gap 2; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:337 · TEXT | Esborso iniziale | 0 / 0 | 360 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 4 · 22:338 · TEXT | 6.990 € | 0 / 23 | 360 × 31 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:339 · TEXT | Puoi rivedere ogni valore prima di decidere. | 28 / 471 | 360 × 72 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 3 · 22:340 · FRAME | Controllo dati | 28 / 563 | 360 × 114 | VERTICAL; pad 20/20/20/20; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFCC45 → solar; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:341 · TEXT | Prima del calcolo | 20 / 20 | 320 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 22:342 · TEXT | Usa valori positivi per consumi, potenza e c | 20 / 52 | 320 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 22:343 · FRAME | Footer | 64 / 2065 | 1312 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:344 · TEXT | SunSize · PCODING Software | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:345 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:266 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:267 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:270 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:272 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:274 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:276 | 02 / IL TUO IMPIANTO | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:277 | Un impianto, le tue abitudini. | Inter Semi Bold; 48px; LH 120% (57.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/display |
| 22:278 | Parti dal preventivo e controlla le ipotesi prima del calcolo. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:282 | 3.000 kWh/anno · 900 €/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| I22:283;15:64 | Modifica consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I22:285;15:66 | Potenza impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:285;15:68 | 4,5 kWp | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:285;15:69 | La potenza nominale nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:286;15:66 | Costo totale | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:286;15:68 | 6.990 € | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:286;15:69 | Esborso iniziale, prima delle detrazioni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:352 | Ho il valore del preventivo | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:353 | ○ Stima dalla regione    ● Valore del preventivo | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:354;15:66 | Resa annua del preventivo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:354;15:68 | 1.440 kWh/kWp/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:354;15:69 | Se hai i kWh annui totali, dividili per i kWp dell’impianto. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:360 | Produzione risultante | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:361 | 4,5 kWp × 1.440 = 6.480 kWh/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:362 | Valore inserito dall’utente. Non applichiamo una seconda riduzione del 14%: usa la resa elettrica già stimata dall’installatore. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:363;15:64 | Torna alla stima regionale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I33:1580;15:66 | Quando consumi di più? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1580;15:68 | Durante tutta la giornata ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1580;15:69 | Contesto dichiarato: non assegna automaticamente una percentuale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1585;15:66 | È prevista una batteria? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1585;15:68 | Non so / da valutare ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1585;15:69 | Una batteria non viene simulata: servono capacità e profili orari. Il suo costo va incluso nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:300 | Quale quota di produzione userai in casa? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:303 | Quota 25% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:304 | 25% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:306 | ✓ Quota 40% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:307 | 40% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:309 | Quota 60% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:310 | 60% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:311 | Ipotesi 40%: 2.592 kWh/anno, cioè l’86,4% dei consumi. Verifica la coincidenza con la produzione nelle ore di sole. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:312 | Quote illustrative, non misurate né dedotte dagli orari o dalla batteria. Puoi personalizzarle. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:313;15:64 | Personalizza autoconsumo → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:315 | Ipotesi economiche | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| I22:317;15:66 | Energia non acquistata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:317;15:68 | 0,25 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:317;15:69 | Prezzo evitato, senza costi fissi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:318;15:66 | Energia immessa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:318;15:68 | 0,09 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:318;15:69 | Ipotesi di ricavo, non tariffa garantita. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:319 | Fonte: valori dello scenario iniziale, non tariffe verificate. Aggiornali con i tuoi dati. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:336;15:64 | Detrazione ipotizzata 50% · costi esclusi · Modifica → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I22:322;15:64 | Calcola la simulazione → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:323;15:64 | ← Torna ai consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:325 | IL TUO SCENARIO | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFCC45 → solar; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:326 | Le ipotesi,<br>sotto controllo. | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 22:328 | Potenza | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:329 | 4,5 kWp | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:331 | Produzione annua | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:332 | 6.480 kWh | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:334 | Usata in casa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:335 | 2.592 kWh | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:337 | Esborso iniziale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:338 | 6.990 € | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:339 | Puoi rivedere ogni valore prima di decidere. Questa simulazione non sostituisce una valutazione del tetto. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:341 | Prima del calcolo | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:342 | Usa valori positivi per consumi, potenza e costo. Verifica unità e separatori decimali. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:344 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:345 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Risultati con resa del preventivo · V2 — 22:366

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-366) · **1440 × 2724 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:366 · FRAME | Desktop · Risultati con resa del preventivo · V2 | 9480 / 3300 | 1440 × 2724 | VERTICAL; pad 64/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 22:367 · FRAME | Intestazione | 64 / 64 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:368 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:369 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:370 · FRAME | Avanzamento | 64 / 127 | 1312 × 53 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:371 · FRAME | Passo 1 | 0 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:372 · TEXT | ✓  Consumi | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 22:373 · FRAME | Passo 2 | 442.67 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:374 · TEXT | ✓  Impianto | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 22:375 · FRAME | Passo 3 | 885.33 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:376 · TEXT | 03  Risultati | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 1 · 22:377 · FRAME | Introduzione | 64 / 212 | 1312 × 119 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:378 · TEXT | 03 / RISULTATI | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:379 · TEXT | I numeri del tuo impianto. | 0 / 29 | 1312 × 58 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 22:380 · TEXT | Una stima spiegata, non una promessa di rend | 0 / 95 | 1312 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:381 · FRAME | Area principale | 64 / 363 | 1312 × 2215 | VERTICAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:382 · FRAME | Indicatori principali | 0 / 0 | 1312 × 415 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:1035 · TEXT | Tempo di rientro: senza e con detrazione | 0 / 0 | 1312 × 31 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:1036 · FRAME | Confronto fiscale | 0 / 47 | 1312 × 193 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1037 · FRAME | Rientro senza detrazione | 0 / 0 | 648 × 145 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1038 · TEXT | SENZA DETRAZIONE | 24 / 24 | 600 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1039 · TEXT | ≈ 7,0 anni | 24 / 57 | 600 × 31 | H/V FIXED/HUG | #115E59 → color/brand-dark; vincoli MIN/MIN |
| 5 · 33:1040 · TEXT | 997,92 €/anno dopo i costi inseriti. | 24 / 100 | 600 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 33:1041 · FRAME | Rientro con ipotesi fiscale | 664 / 0 | 648 × 193 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1042 · TEXT | CON LA DETRAZIONE IPOTIZZATA | 24 / 24 | 600 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:1043 · TEXT | ≈ 5,2 anni | 24 / 57 | 600 × 31 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:1044 · TEXT | 50% inserito come esempio, non aliquota presunta o diritto verificato. | 24 / 100 | 600 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1045 · INSTANCE | Modifica ipotesi fiscale → | 24 / 133 | 600 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I33:1045;15:64 · TEXT | Continua | 16 / 7.5 | 568 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:1048 · TEXT | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | 0 / 256 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1049 · FRAME | Recupero fiscale ipotizzato | 0 / 293 | 1312 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1050 · TEXT | Recupero fiscale ipotizzato | 16 / 16 | 1280 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:1051 · TEXT | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | 16 / 48 | 1280 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1052 · TEXT | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | 0 / 394 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:398 · FRAME | Economia ed energia | 0 / 439 | 1312 × 571 | HORIZONTAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 22:399 · FRAME | Da dove arrivano i benefici | 0 / 0 | 644 × 571 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:400 · TEXT | Da dove arrivano i benefici | 28 / 28 | 588 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:401 · TEXT | Importi annuali · scenario centrale | 28 / 78 | 588 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:402 · FRAME | Risparmio sulla bolletta | 28 / 119 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:403 · TEXT | Risparmio sulla bolletta | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:404 · TEXT | +630,00 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:405 · FRAME | Ricavi energia immessa | 28 / 163 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:406 · TEXT | Ricavi energia immessa | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:407 · TEXT | +340,20 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:408 · FRAME | Recupero fiscale | 28 / 207 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:409 · TEXT | Recupero fiscale | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:410 · TEXT | 0,00 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:411 · FRAME | Beneficio prima dei costi esclusi | 28 / 251 | 588 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:412 · TEXT | Beneficio annuo: 970,20 € | 16 / 16 | 556 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 5 · 22:413 · TEXT | 630,00 € di risparmio + 340,20 € di ricavi. | 16 / 48 | 556 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:414 · FRAME | Costi non inclusi | 28 / 356 | 588 × 146 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:415 · TEXT | Costi ricorrenti: non inclusi | 16 / 16 | 556 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 22:416 · TEXT | Manutenzione, assicurazione e sostituzioni n | 16 / 46 | 556 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 25:339 · INSTANCE | Inserisci i costi → | 16 / 94 | 556 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I25:339;15:64 · TEXT | Continua | 16 / 7.5 | 524 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:1053 · TEXT | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | 28 / 522 | 588 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:417 · FRAME | Come si distribuisce l’energia | 668 / 0 | 644 × 415 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:418 · TEXT | Come si distribuisce l’energia | 28 / 28 | 588 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:419 · TEXT | 6.300 kWh prodotti in un anno | 28 / 78 | 588 × 31 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:420 · FRAME | Ripartizione della produzione | 28 / 129 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 0; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip true |
| 5 · 22:421 · RECTANGLE | Usata in casa | 0 / 0 | 235.2 × 24 | H/V FIXED/FIXED | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 22:422 · RECTANGLE | Immessa in rete | 235.2 / 0 | 352.8 × 24 | H/V FIXED/FIXED | #0F766E → primitive/brand; vincoli MIN/MIN |
| 4 · 22:423 · FRAME | Usata in casa · 40% | 28 / 173 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:424 · TEXT | Usata in casa · 40% | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:425 · TEXT | 2.520 kWh | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:426 · FRAME | Immessa in rete · 60% | 28 / 217 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:427 · TEXT | Immessa in rete · 60% | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:428 · TEXT | 3.780 kWh | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:429 · FRAME | Energia ancora acquistata | 28 / 261 | 588 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:430 · TEXT | Da acquistare: 480 kWh/anno | 16 / 16 | 556 × 24 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 5 · 22:431 · TEXT | Il 16% dei 3.000 kWh consumati. I costi fiss | 16 / 48 | 556 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:432 · TEXT | La quota del 40% si riferisce alla produzion | 28 / 366 | 588 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:433 · FRAME | Quando recuperi l’investimento | 0 / 1034 | 1312 × 582 | VERTICAL; pad 28/28/28/28; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:434 · TEXT | Quando recuperi l’investimento? | 28 / 28 | 1256 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 22:435 · TEXT | Saldo cumulato · euro, prima dei costi esclu | 28 / 74 | 1256 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:436 · FRAME | Saldo cumulato · scala anni ed euro | 28 / 111 | 1256 × 290 | NONE; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:437 · VECTOR | Riferimento -6990 | 70 / 180.43 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 22:438 · TEXT | −6.990 | 0 / 170.43 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:439 · VECTOR | Riferimento 0 | 70 / 128 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #52676B → primitive/muted; vincoli MIN/MIN; tratteggio 4/4; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 22:440 · TEXT | 0 € | 0 / 118 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:441 · VECTOR | Riferimento 12000 | 70 / 38 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 22:442 · TEXT | +7.500 | 0 / 28 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:443 · VECTOR | Saldo senza detrazione | 70 / 68.16 | 1162 × 112.27 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #0F766E → color/brand; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 112.26599884033203 L 77.46666717529297 104.78160095214844 L 154.93333435058594 97.29720306396484 L 232.39999389648438 89.81279754638672 L 309.8666687011719 82.32839965820312 L 387.3333435058594 74.84400177001953 L 464.79998779296875 67.3595962524414 L 542.2666625976562 59.87519836425781 L 619.7333374023438 52.39080047607422 L 697.2000122070312 44.90639877319336 L 774.6666870117188 37.422000885009766 L 852.1333618164062 29.937599182128906 L 929.5999755859375 22.45319938659668 L 1007.066650390625 14.968799591064453 L 1084.5333251953125 7.484399795532227 L 1162 0"}\\] |
| 4 · 22:444 · TEXT | 0 | 56 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:445 · TEXT | 5 | 443.33 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:446 · TEXT | 10 | 830.67 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:447 · TEXT | 15 | 1218 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:448 · TEXT | anni | 1216 / 252 | 40 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:449 · ELLIPSE | Pareggio a circa 7,2 anni | 606.62 / 122 | 12 × 12 | H/V FIXED/FIXED | #FFCC45 → solar; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:450 · TEXT | Pareggio ≈ 7,2 anni | 381 / 0 | 400 × 21 | H/V FIXED/FIXED | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:1054 · VECTOR | Saldo con recupero fiscale | 70 / 41.95 | 1162 × 138.48 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #5C400E → solar-ink; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 138.47850036621094 L 77.46666717529297 128.3728485107422 L 154.93333435058594 118.26719665527344 L 232.39999389648438 108.16155242919922 L 309.8666687011719 98.05590057373047 L 387.3333435058594 87.95024871826172 L 464.79998779296875 77.84459686279297 L 542.2666625976562 67.73895263671875 L 619.7333374023438 57.63330078125 L 697.2000122070312 47.52764892578125 L 774.6666870117188 37.422000885009766 L 852.1333618164062 29.937599182128906 L 929.5999755859375 22.45319938659668 L 1007.066650390625 14.968799591064453 L 1084.5333251953125 7.484399795532227 L 1162 0"}\\] |
| 4 · 33:1055 · ELLIPSE | Pareggio con detrazione ipotizzata | 465.87 / 122 | 12 × 12 | H/V FIXED/FIXED | #5C400E → solar-ink; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 3 · 22:451 · FRAME | Saldo dopo dieci anni | 28 / 417 | 1256 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:452 · TEXT | Saldo a 10 anni: +2.712,00 € | 16 / 16 | 1224 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:453 · TEXT | −6.990 € + 10 × 970,20 €. Prezzi e produzion | 16 / 48 | 1224 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:1168 · INSTANCE | Vedi i flussi anno per anno → | 28 / 518 | 1256 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:1168;15:64 · TEXT | Continua | 16 / 7.5 | 1224 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 22:454 · FRAME | Quanto cambia al variare della produzione | 0 / 1640 | 1312 × 298 | VERTICAL; pad 28/28/28/28; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:1171 · TEXT | E se autoconsumo e prezzi cambiano? | 28 / 28 | 1256 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:1172 · TEXT | Tre combinazioni illustrative: quota ±10 punti e prezzi ±10%. Produzione, investimento, costi e ipotesi fiscale restano invariati. Non sono probabilità o garanzie. | 28 / 74 | 1256 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1173 · FRAME | Scenari di autoconsumo e prezzi | 28 / 111 | 1256 × 159 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1174 · FRAME | Quota e prezzi ridotti | 0 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1175 · TEXT | Quota e prezzi ridotti | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:1176 · TEXT | ≈ 6,1 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1177 · TEXT | 30% richiesto · prezzi 0,225/0,081 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1178 · TEXT | 1.154,32 €/anno nei primi 10 anni | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 33:1179 · FRAME | Ipotesi inserite | 422.67 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1180 · TEXT | Ipotesi inserite | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:1181 · TEXT | ≈ 5,2 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1182 · TEXT | 40% richiesto · prezzi 0,250/0,090 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1183 · TEXT | 1.347,42 €/anno nei primi 10 anni | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 33:1184 · FRAME | Quota e prezzi aumentati | 845.33 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1185 · TEXT | Quota e prezzi aumentati | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:1186 · TEXT | ≈ 4,6 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1187 · TEXT | 50% richiesto · prezzi 0,275/0,099 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1188 · TEXT | 1.519,02 €/anno nei primi 10 anni | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:471 · FRAME | Ipotesi formule e limiti | 0 / 1962 | 1312 × 173 | VERTICAL; pad 28/28/28/28; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:472 · TEXT | Ipotesi e limiti, in chiaro | 28 / 28 | 1256 × 30 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 22:473 · TEXT | Produzione: 4,5 kWp × 1.400 kWh/kWp. Autocon | 28 / 70 | 1256 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 22:474 · TEXT | Valori dello scenario iniziale, non tariffe | 28 / 124 | 1256 × 21 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 22:475 · FRAME | Azioni finali | 0 / 2159 | 1312 × 56 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 22:476 · INSTANCE | SunSize V2/Button | 0 / 0 | 648 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:476;15:64 · TEXT | Continua | 16 / 16 | 616 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 22:477 · INSTANCE | SunSize V2/Button | 664 / 0 | 648 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:477;15:64 · TEXT | Continua | 17 / 16 | 614 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 1 · 22:478 · FRAME | Footer | 64 / 2610 | 1312 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:479 · TEXT | SunSize · PCODING Software | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:480 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:368 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:369 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:372 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:374 | ✓  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:376 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:378 | 03 / RISULTATI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:379 | I numeri del tuo impianto. | Inter Semi Bold; 48px; LH 120% (57.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/display |
| 22:380 | Una stima spiegata, non una promessa di rendimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1035 | Tempo di rientro: senza e con detrazione | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1038 | SENZA DETRAZIONE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1039 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #115E59 → color/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1040 | 997,92 €/anno dopo i costi inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1042 | CON LA DETRAZIONE IPOTIZZATA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1043 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1044 | 50% inserito come esempio, non aliquota presunta o diritto verificato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1045;15:64 | Modifica ipotesi fiscale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1048 | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1050 | Recupero fiscale ipotizzato | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1051 | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1052 | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:400 | Da dove arrivano i benefici | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:401 | Importi annuali · scenario centrale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:403 | Risparmio sulla bolletta | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:404 | +648,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:406 | Ricavi energia immessa | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:407 | +349,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:409 | Recupero fiscale | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:410 | 349,50 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:412 | Beneficio annuo (anni 1–10): 1.347,42 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:413 | 648,00 € risparmio + 349,92 € ricavi + 349,50 € recupero fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:415 | Costi ricorrenti: non inclusi | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:416 | Manutenzione, assicurazione e sostituzioni non sono pari a zero: non sono modellate in questa stima. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:339;15:64 | Inserisci i costi → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1053 | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:418 | Come si distribuisce l’energia | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:419 | 6.480 kWh prodotti in un anno | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:424 | Usata in casa · 40% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:425 | 2.592 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:427 | Immessa in rete · 60% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:428 | 3.888 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:430 | Da acquistare: 408 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:431 | Il 13,6% dei 3.000 kWh consumati. I costi fissi restano. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:432 | La quota del 40% si riferisce alla produzione, non ai tuoi consumi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:434 | Quando recuperi l’investimento? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:435 | Saldo cumulato · euro, prima dei costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:438 | −6.990 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:440 | 0 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:442 | +12.000 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:444 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:445 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:446 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:447 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:448 | anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:450 | Senza ≈ 7,0 · con ≈ 5,2 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:452 | Saldo a 10 anni: senza +2.989,20 € · con +6.484,20 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:453 | Il recupero fiscale aggiunge 3.495 € nei primi 10 anni e poi termina. Verde: senza detrazione; ambra: con ipotesi fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1168;15:64 | Vedi i flussi anno per anno → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1171 | E se autoconsumo e prezzi cambiano? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:1172 | Tre combinazioni illustrative: quota ±10 punti e prezzi ±10%. Produzione, investimento, costi e ipotesi fiscale restano invariati. Non sono probabilità o garanzie. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1175 | Quota e prezzi ridotti | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1176 | ≈ 6,1 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1177 | 30% richiesto · prezzi 0,225/0,081 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1178 | 1.154,32 €/anno nei primi 10 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1180 | Ipotesi inserite | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1181 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1182 | 40% richiesto · prezzi 0,250/0,090 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1183 | 1.347,42 €/anno nei primi 10 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1185 | Quota e prezzi aumentati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1186 | ≈ 4,6 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1187 | 50% richiesto · prezzi 0,275/0,099 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1188 | 1.519,02 €/anno nei primi 10 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:472 | Ipotesi e limiti, in chiaro | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:473 | Valore del preventivo. Resa: 1.440 kWh/kWp/anno. Potenza: 4,5 kWp. Autoconsumo: 40%. Prezzo evitato: 0,25 €/kWh. Vendita: 0,09 €/kWh. Detrazione ipotizzata: 50% in 10 anni, se spettante. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:474 | Resa inserita dal preventivo: 1.440 kWh/kWp/anno. Ipotesi economiche e di autoconsumo restano quelle indicate. Nessun finanziamento, inflazione o degrado; costi esclusi se non inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:476;15:64 | Modifica e ricalcola → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:477;15:64 | Nuova simulazione | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 22:479 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:480 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Da dove arriva la resa regionale? · V2 — 22:517

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-517) · **1440 × 1402 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:517 · FRAME | Desktop · Da dove arriva la resa regionale? · V2 | 7920 / 0 | 1440 × 1402 | VERTICAL; pad 40/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 22:518 · FRAME | Intestazione | 64 / 40 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:519 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:520 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:521 · FRAME | Da dove arriva la resa regionale? | 64 / 103 | 900 × 1182 | VERTICAL; pad 36/36/36/36; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 22:522 · TEXT | Da dove arriva la resa regionale? | 36 / 36 | 828 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:523 · TEXT | Una prima stima semplice, con fonte e ipotesi visibili. | 36 / 101 | 828 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:525 · FRAME | Dati ufficiali, elaborazione SunSize | 36 / 147 | 828 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:526 · TEXT | Dati ufficiali, elaborazione SunSize | 16 / 16 | 796 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:527 · TEXT | PVGIS 5.3 · Commissione europea / JRC Database SARAH3, media 2005–2023. | 16 / 48 | 796 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:528 · TEXT | Pannelli verso sud, inclinazione 30°, perdite di sistema 14%, silicio cristallino. La resa elettrica comprende già le perdite del modello. | 36 / 275 | 828 × 48 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:529 · TEXT | 209 punti distribuiti nelle 20 regioni. Media spaziale approssimata, arrotondata a 10 kWh/kWp/anno: non è una media ufficiale regionale né una valutazione dei tetti abitati. | 36 / 345 | 828 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:530 · TEXT | Località, esposizione e ombre possono modificare la produzione. Preferisci una stima del preventivo se disponibile. | 36 / 409 | 828 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:531 · FRAME | Tabella delle 20 rese regionali | 36 / 452 | 828 × 572 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:532 · TEXT | Piemonte · 1260 kWh/kWp/anno | 0 / 0 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:533 · TEXT | Valle d’Aosta · 1240 kWh/kWp/anno | 0 / 29 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:534 · TEXT | Liguria · 1310 kWh/kWp/anno | 0 / 58 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:535 · TEXT | Lombardia · 1300 kWh/kWp/anno | 0 / 87 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:536 · TEXT | Trentino-Alto Adige · 1220 kWh/kWp/anno | 0 / 116 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:537 · TEXT | Veneto · 1280 kWh/kWp/anno | 0 / 145 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:538 · TEXT | Friuli-Venezia Giulia · 1230 kWh/kWp/anno | 0 / 174 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:539 · TEXT | Emilia-Romagna · 1330 kWh/kWp/anno | 0 / 203 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:540 · TEXT | Toscana · 1380 kWh/kWp/anno | 0 / 232 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:541 · TEXT | Umbria · 1340 kWh/kWp/anno | 0 / 261 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:542 · TEXT | Marche · 1330 kWh/kWp/anno | 0 / 290 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:543 · TEXT | Lazio · 1440 kWh/kWp/anno | 0 / 319 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:544 · TEXT | Abruzzo · 1350 kWh/kWp/anno | 0 / 348 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:545 · TEXT | Molise · 1390 kWh/kWp/anno | 0 / 377 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:546 · TEXT | Campania · 1350 kWh/kWp/anno | 0 / 406 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:547 · TEXT | Puglia · 1470 kWh/kWp/anno | 0 / 435 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:548 · TEXT | Basilicata · 1410 kWh/kWp/anno | 0 / 464 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:549 · TEXT | Calabria · 1390 kWh/kWp/anno | 0 / 493 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:550 · TEXT | Sicilia · 1550 kWh/kWp/anno | 0 / 522 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:551 · TEXT | Sardegna · 1500 kWh/kWp/anno | 0 / 551 | 828 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:552 · TEXT | Fonte: joint-research-centre.ec.europa.eu · PVGIS © European Communities. Confini: Eurostat/GISCO NUTS 2024. Metodo e campioni verificabili nel progetto SunSize. | 36 / 1046 | 828 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:553 · INSTANCE | ← Torna all’impianto | 36 / 1110 | 828 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:553;15:64 · TEXT | Continua | 16 / 7.5 | 796 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 22:524 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 64 / 1317 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:519 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:520 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:522 | Da dove arriva la resa regionale? | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 22:523 | Una prima stima semplice, con fonte e ipotesi visibili. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:526 | Dati ufficiali, elaborazione SunSize | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:527 | PVGIS 5.3 · Commissione europea / JRC<br>Database SARAH3, media 2005–2023. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:528 | Pannelli verso sud, inclinazione 30°, perdite di sistema 14%, silicio cristallino. La resa elettrica comprende già le perdite del modello. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:529 | 209 punti distribuiti nelle 20 regioni. Media spaziale approssimata, arrotondata a 10 kWh/kWp/anno: non è una media ufficiale regionale né una valutazione dei tetti abitati. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:530 | Località, esposizione e ombre possono modificare la produzione. Preferisci una stima del preventivo se disponibile. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:532 | Piemonte · 1260 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:533 | Valle d’Aosta · 1240 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:534 | Liguria · 1310 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:535 | Lombardia · 1300 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:536 | Trentino-Alto Adige · 1220 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:537 | Veneto · 1280 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:538 | Friuli-Venezia Giulia · 1230 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:539 | Emilia-Romagna · 1330 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:540 | Toscana · 1380 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:541 | Umbria · 1340 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:542 | Marche · 1330 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:543 | Lazio · 1440 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:544 | Abruzzo · 1350 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:545 | Molise · 1390 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:546 | Campania · 1350 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:547 | Puglia · 1470 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:548 | Basilicata · 1410 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:549 | Calabria · 1390 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:550 | Sicilia · 1550 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:551 | Sardegna · 1500 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:552 | Fonte: joint-research-centre.ec.europa.eu · PVGIS © European Communities. Confini: Eurostat/GISCO NUTS 2024. Metodo e campioni verificabili nel progetto SunSize. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:553;15:64 | ← Torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:524 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Hai solo i dati di un periodo? · V2 — 22:566

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-566) · **390 × 1124 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:566 · FRAME | Mobile · Hai solo i dati di un periodo? · V2 | 4800 / 3300 | 390 × 1124 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 22:567 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:568 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:569 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:570 · FRAME | Hai solo i dati di un periodo? | 20 / 71 | 350 × 971 | VERTICAL; pad 20/20/20/20; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 22:571 · TEXT | Hai solo i dati di un periodo? | 20 / 20 | 310 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:572 · TEXT | Usa un periodo che conosci: ricaviamo un riferimento annuale da controllare. | 20 / 104 | 310 × 48 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:574 · INSTANCE | SunSize V2/NumField | 20 / 174 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:574;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:574;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:574;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:574;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:579 · INSTANCE | SunSize V2/NumField | 20 / 310 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:579;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:579;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:579;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:579;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:584 · INSTANCE | SunSize V2/NumField | 20 / 446 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:584;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:584;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:584;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:584;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:589 · FRAME | Riferimento annualizzato | 20 / 582 | 310 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:590 · TEXT | Riferimento annualizzato | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:591 · TEXT | 500 ÷ 2 × 12 = 3.000 kWh/anno 150 ÷ 2 × 12 = 900 €/anno | 16 / 48 | 278 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:592 · TEXT | È un’estrapolazione, non il consumo annuo misurato: stagioni, riscaldamento e abitudini possono cambiare il risultato. Se non conosci neppure questi dati, recuperali prima dal fornitore. | 20 / 710 | 310 × 105 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:593 · INSTANCE | Usa la stima e controlla i dati → | 20 / 837 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:593;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 22:595 · INSTANCE | ← Torna ai consumi | 20 / 915 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:595;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 22:573 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 20 / 1062 | 350 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:568 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:569 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:571 | Hai solo i dati di un periodo? | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:572 | Usa un periodo che conosci: ricaviamo un riferimento annuale da controllare. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:574;15:66 | Consumo del periodo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:574;15:68 | 500 kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:574;15:69 | Letture, bolletta o app del fornitore. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:579;15:66 | Spesa dello stesso periodo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:579;15:68 | 150 € | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:579;15:69 | Includi tutti gli importi elettrici del periodo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:584;15:66 | Durata del periodo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:584;15:68 | 2 mesi | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:584;15:69 | Indica un periodo fra 1 e 12 mesi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:590 | Riferimento annualizzato | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:591 | 500 ÷ 2 × 12 = 3.000 kWh/anno<br>150 ÷ 2 × 12 = 900 €/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:592 | È un’estrapolazione, non il consumo annuo misurato: stagioni, riscaldamento e abitudini possono cambiare il risultato. Se non conosci neppure questi dati, recuperali prima dal fornitore. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:593;15:64 | Usa la stima e controlla i dati → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:595;15:64 | ← Torna ai consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:573 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Consumi annualizzati da verificare · V2 — 22:597

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-597) · **390 × 1492 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:597 · FRAME | Mobile · Consumi annualizzati da verificare · V2 | 5280 / 6500 | 390 × 1492 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 22:598 · FRAME | Intestazione | 20 / 16 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:599 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:600 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:601 · FRAME | Avanzamento | 20 / 63 | 350 × 41 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:602 · FRAME | Passo 1 | 0 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:603 · TEXT | 01  Consumi | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 22:604 · FRAME | Passo 2 | 119.33 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:605 · TEXT | 02  Impianto | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:606 · FRAME | Passo 3 | 238.67 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:607 · TEXT | 03  Risultati | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:608 · FRAME | Introduzione | 20 / 120 | 350 × 153 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:609 · TEXT | IL FOTOVOLTAICO, CON CHIAREZZA | 0 / 0 | 350 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:610 · TEXT | Il tuo sole.<br>I tuoi numeri. | 0 / 29 | 350 × 68 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 22:611 · TEXT | Parti dai tuoi consumi. Comprendi il tuo inv | 0 / 105 | 350 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:612 · FRAME | Area principale | 20 / 289 | 350 × 1121 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:613 · FRAME | Dati dalla bolletta | 0 / 0 | 350 × 1121 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:614 · TEXT | 01 / CONSUMI | 20 / 16 | 310 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 22:633 · FRAME | Dati annualizzati · da verificare | 20 / 53 | 310 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:634 · TEXT | Dati annualizzati · da verificare | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 22:635 · TEXT | Da 500 kWh e 150 € in 2 mesi. Correggi questi valori se hai un riepilogo annuale. | 16 / 48 | 278 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:615 · TEXT | Quanto consumi in un anno? | 20 / 175 | 310 × 62 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 22:616 · TEXT | Bastano due dati dalla bolletta per iniziare | 20 / 253 | 310 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:617 · FRAME | Come trovare i dati | 20 / 317 | 310 × 125 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:618 · TEXT | Tieni a portata di mano una bolletta | 16 / 16 | 278 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:619 · TEXT | Cerca il riepilogo dei consumi degli ultimi | 16 / 46 | 278 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:620 · FRAME | Consumo e spesa | 20 / 458 | 310 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:621 · INSTANCE | SunSize V2/NumField | 0 / 0 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:621;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:621;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:621;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:621;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:622 · INSTANCE | SunSize V2/NumField | 0 / 130 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:622;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:622;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:622;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:622;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:623 · FRAME | Spesa e risparmio | 20 / 718 | 310 × 127 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:624 · TEXT | La spesa non è il risparmio | 16 / 16 | 278 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 22:625 · TEXT | Include costi fissi e tasse. Il risparmio sa | 16 / 48 | 278 × 63 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 22:626 · INSTANCE | SunSize V2/Button | 20 / 861 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:626;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 22:627 · INSTANCE | SunSize V2/Button | 20 / 933 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:627;15:64 · TEXT | Continua | 17 / 16 | 276 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 3 · 22:628 · TEXT | Puoi partire da una stima e correggerla prim | 20 / 1005 | 310 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:629 · TEXT | Nessuna registrazione. I dati restano in que | 20 / 1063 | 310 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:630 · FRAME | Footer | 20 / 1426 | 350 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:631 · TEXT | SunSize · PCODING Software | 0 / 0 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:632 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:599 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:600 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:603 | 01  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:605 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:607 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:609 | IL FOTOVOLTAICO, CON CHIAREZZA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:610 | Il tuo sole.<br>I tuoi numeri. | Inter Semi Bold; 28px; LH 120% (33.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; senza stile |
| 22:611 | Parti dai tuoi consumi. Comprendi il tuo investimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:614 | 01 / CONSUMI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:634 | Dati annualizzati · da verificare | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:635 | Da 500 kWh e 150 € in 2 mesi. Correggi questi valori se hai un riepilogo annuale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:615 | Quanto consumi in un anno? | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:616 | Bastano due dati dalla bolletta per iniziare. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:618 | Tieni a portata di mano una bolletta | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:619 | Cerca il riepilogo dei consumi degli ultimi 12 mesi e somma gli importi dello stesso periodo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:621;15:66 | Consumo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:621;15:68 | 3.000 kWh/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:621;15:69 | Il totale degli ultimi 12 mesi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:622;15:66 | Spesa annua complessiva | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:622;15:68 | 900 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:622;15:69 | Tutte le bollette, tasse incluse. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:624 | La spesa non è il risparmio | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:625 | Include costi fissi e tasse. Il risparmio sarà stimato sull’energia che non acquisterai, usando il prezzo evitato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:626;15:64 | Continua: impianto → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:627;15:64 | Non ho la bolletta | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 22:628 | Puoi partire da una stima e correggerla prima del calcolo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:629 | Nessuna registrazione. I dati restano in questa pagina. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:631 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:632 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Personalizza l’autoconsumo · V2 — 22:650

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-650) · **390 × 939 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:650 · FRAME | Mobile · Personalizza l’autoconsumo · V2 | 5280 / 3300 | 390 × 939 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 22:651 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:652 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:653 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:654 · FRAME | Personalizza l’autoconsumo | 20 / 71 | 350 × 786 | VERTICAL; pad 20/20/20/20; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 22:655 · TEXT | Personalizza l’autoconsumo | 20 / 20 | 310 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:656 · TEXT | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | 20 / 104 | 310 × 72 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:658 · INSTANCE | SunSize V2/NumField | 20 / 198 | 310 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:658;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:658;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I22:658;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I22:658;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:663 · FRAME | Con la configurazione attuale | 20 / 355 | 310 × 148 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:664 · TEXT | Con la configurazione attuale | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:665 · TEXT | 6.480 × 40% = 2.592 kWh/anno usati in casa. Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | 16 / 48 | 278 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:666 · TEXT | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | 20 / 525 | 310 × 105 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:667 · INSTANCE | Usa questa quota → | 20 / 652 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:667;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 22:669 · INSTANCE | Annulla e torna all’impianto | 20 / 730 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:669;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 22:657 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 20 / 877 | 350 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:652 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:653 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:655 | Personalizza l’autoconsumo | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:656 | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:658;15:66 | Quota della produzione usata in casa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:658;15:68 | 40 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:658;15:69 | Valore ammesso: da 0% a 100%. Non è una percentuale del consumo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:664 | Con la configurazione attuale | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:665 | 6.480 × 40% = 2.592 kWh/anno usati in casa.<br>Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:666 | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:667;15:64 | Usa questa quota → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:669;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:657 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Impianto con resa manuale · V2 — 22:673

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-673) · **390 × 2481 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:673 · FRAME | Mobile · Impianto con resa manuale · V2 | 5760 / 6500 | 390 × 2481 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 22:674 · FRAME | Intestazione | 20 / 16 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:675 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:676 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:677 · FRAME | Avanzamento | 20 / 63 | 350 × 41 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:678 · FRAME | Passo 1 | 0 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:679 · TEXT | ✓  Consumi | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 22:680 · FRAME | Passo 2 | 119.33 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:681 · TEXT | 02  Impianto | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 2 · 22:682 · FRAME | Passo 3 | 238.67 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:683 · TEXT | 03  Risultati | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:684 · FRAME | Introduzione | 20 / 120 | 350 × 147 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:685 · TEXT | 02 / IL TUO IMPIANTO | 0 / 0 | 350 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:686 · TEXT | Un impianto, le tue abitudini. | 0 / 29 | 350 × 62 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 22:687 · TEXT | Parti dal preventivo e controlla le ipotesi | 0 / 99 | 350 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:688 · FRAME | Area principale | 20 / 283 | 350 × 2116 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:689 · FRAME | Configurazione e ipotesi | 0 / 0 | 350 × 2116 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:690 · FRAME | Consumi inseriti | 20 / 16 | 310 × 98 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:691 · TEXT | 3.000 kWh/anno · 900 €/anno | 16 / 16 | 278 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:692 · INSTANCE | SunSize V2/Button | 16 / 48 | 278 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:692;15:64 · TEXT | Continua | 16 / 6.5 | 246 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:693 · FRAME | Dati dal preventivo | 20 / 130 | 310 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:694 · INSTANCE | SunSize V2/NumField | 0 / 0 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:694;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:694;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:694;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:694;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:695 · INSTANCE | SunSize V2/NumField | 0 / 130 | 310 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:695;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:695;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:695;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:695;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:696 · FRAME | Produzione stimata | 20 / 390 | 310 × 451 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:742 · TEXT | Ho il valore del preventivo | 0 / 0 | 310 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 22:743 · TEXT | ○ Stima dalla regione ● Valore del preventivo | 0 / 42 | 310 × 42 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 22:744 · INSTANCE | SunSize V2/NumField | 0 / 96 | 310 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:744;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:744;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 6 · I22:744;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · I22:744;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:749 · FRAME | Produzione risultante | 0 / 243 | 310 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:750 · TEXT | Produzione risultante | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 22:751 · TEXT | 4,5 kWp × 1.440 = 6.480 kWh/anno | 16 / 48 | 278 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:752 · TEXT | Valore inserito dall’utente. Non applichiamo una seconda riduzione del 14%: usa la resa elettrica già stimata dall’installatore. | 0 / 340 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:753 · INSTANCE | Torna alla stima regionale → | 0 / 415 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I22:753;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:708 · FRAME | Profilo di autoconsumo | 20 / 857 | 310 × 673 | VERTICAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 4 · 33:1590 · FRAME | Contesto dei consumi e accumulo | 0 / 0 | 310 × 307 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1591 · INSTANCE | SunSize V2/NumField | 0 / 0 | 310 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1591;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1591;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1591;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1591;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1596 · INSTANCE | SunSize V2/NumField | 0 / 151 | 310 × 156 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I33:1596;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1596;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I33:1596;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I33:1596;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 63 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:709 · TEXT | Quando consumi più energia? | 0 / 319 | 310 × 60 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:710 · FRAME | Seleziona un profilo | 0 / 391 | 310 × 86 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:711 · FRAME | Di sera | 0 / 0 | 98 × 72 | VERTICAL; pad 8/8/8/8; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 22:712 · TEXT | Di sera | 8 / 8 | 82 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 22:713 · TEXT | 25% | 8 / 33 | 82 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:714 · FRAME | Misto | 106 / 0 | 98 × 86 | VERTICAL; pad 8/8/8/8; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 20; vincoli MIN/MIN; clip true |
| 6 · 22:715 · TEXT | ✓ Misto | 8 / 8 | 82 × 42 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 6 · 22:716 · TEXT | 40% | 8 / 54 | 82 × 24 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 5 · 22:717 · FRAME | Di giorno | 212 / 0 | 98 × 72 | VERTICAL; pad 8/8/8/8; gap 4; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 6 · 22:718 · TEXT | Di giorno | 8 / 8 | 82 × 21 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 6 · 22:719 · TEXT | 60% | 8 / 33 | 82 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:720 · TEXT | Misto: 40% della produzione usata in casa, c | 0 / 489 | 310 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:721 · TEXT | Profili indicativi, non misure orarie. L’aut | 0 / 564 | 310 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:722 · INSTANCE | SunSize V2/Button | 0 / 639 | 310 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 5 · I22:722;15:64 · TEXT | Continua | 16 / 6.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:723 · FRAME | Ipotesi economiche visibili | 20 / 1546 | 310 × 432 | VERTICAL; pad 16/16/16/16; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:724 · TEXT | Ipotesi economiche | 16 / 16 | 278 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:725 · FRAME | Prezzi dell’energia | 16 / 62 | 278 × 244 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:726 · INSTANCE | SunSize V2/NumField | 0 / 0 | 278 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I22:726;15:66 · TEXT | Consumo annuo | 0 / 0 | 278 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:726;15:67 · FRAME | Input | 0 / 29 | 278 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I22:726;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 244 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:726;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 278 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 22:727 · INSTANCE | SunSize V2/NumField | 0 / 130 | 278 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 6 · I22:727;15:66 · TEXT | Consumo annuo | 0 / 0 | 278 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:727;15:67 · FRAME | Input | 0 / 29 | 278 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 7 · I22:727;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 244 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 6 · I22:727;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 278 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 22:728 · TEXT | Fonte: valori dello scenario iniziale, non t | 16 / 322 | 278 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 25:404 · INSTANCE | Detrazione 0% · costi esclusi · Modifica → | 16 / 380 | 278 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I25:404;15:64 · TEXT | Continua | 16 / -3 | 246 × 42 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:731 · INSTANCE | SunSize V2/Button | 20 / 1994 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:731;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 22:732 · INSTANCE | SunSize V2/Button | 20 / 2066 | 310 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 4 · I22:732;15:64 · TEXT | Continua | 16 / 6.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 22:733 · FRAME | Footer | 20 / 2415 | 350 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:734 · TEXT | SunSize · PCODING Software | 0 / 0 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:735 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:675 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:676 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:679 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:681 | 02  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:683 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:685 | 02 / IL TUO IMPIANTO | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:686 | Un impianto, le tue abitudini. | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:687 | Parti dal preventivo e controlla le ipotesi prima del calcolo. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:691 | 3.000 kWh/anno · 900 €/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| I22:692;15:64 | Modifica consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I22:694;15:66 | Potenza impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:694;15:68 | 4,5 kWp | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:694;15:69 | La potenza nominale nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:695;15:66 | Costo totale | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:695;15:68 | 6.990 € | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:695;15:69 | Esborso iniziale, prima delle detrazioni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:742 | Ho il valore del preventivo | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:743 | ○ Stima dalla regione    ● Valore del preventivo | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:744;15:66 | Resa annua del preventivo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:744;15:68 | 1.440 kWh/kWp/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:744;15:69 | Se hai i kWh annui totali, dividili per i kWp dell’impianto. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:750 | Produzione risultante | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:751 | 4,5 kWp × 1.440 = 6.480 kWh/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:752 | Valore inserito dall’utente. Non applichiamo una seconda riduzione del 14%: usa la resa elettrica già stimata dall’installatore. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:753;15:64 | Torna alla stima regionale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I33:1591;15:66 | Quando consumi di più? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1591;15:68 | Durante tutta la giornata ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1591;15:69 | Contesto dichiarato: non assegna automaticamente una percentuale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1596;15:66 | È prevista una batteria? | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I33:1596;15:68 | Non so / da valutare ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I33:1596;15:69 | Una batteria non viene simulata: servono capacità e profili orari. Il suo costo va incluso nel preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:709 | Quale quota di produzione userai in casa? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:712 | Quota 25% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:713 | 25% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:715 | ✓ Quota 40% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:716 | 40% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:718 | Quota 60% | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:719 | 60% | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:720 | Ipotesi 40%: 2.592 kWh/anno, cioè l’86,4% dei consumi. Verifica la coincidenza con la produzione nelle ore di sole. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:721 | Quote illustrative, non misurate né dedotte dagli orari o dalla batteria. Puoi personalizzarle. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:722;15:64 | Personalizza autoconsumo → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:724 | Ipotesi economiche | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| I22:726;15:66 | Energia non acquistata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:726;15:68 | 0,25 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:726;15:69 | Prezzo evitato, senza costi fissi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:727;15:66 | Energia immessa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I22:727;15:68 | 0,09 €/kWh | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I22:727;15:69 | Ipotesi di ricavo, non tariffa garantita. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:728 | Prezzi dello scenario iniziale, non tariffe verificate. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:404;15:64 | Detrazione ipotizzata 50% · costi esclusi · Modifica → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I22:731;15:64 | Calcola la simulazione → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:732;15:64 | ← Torna ai consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:734 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:735 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Risultati con resa del preventivo · V2 — 22:756

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-756) · **390 × 3221 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:756 · FRAME | Mobile · Risultati con resa del preventivo · V2 | 6240 / 6500 | 390 × 3221 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 22:757 · FRAME | Intestazione | 20 / 16 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:758 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:759 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:760 · FRAME | Avanzamento | 20 / 63 | 350 × 41 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:761 · FRAME | Passo 1 | 0 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:762 · TEXT | ✓  Consumi | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 22:763 · FRAME | Passo 2 | 119.33 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:764 · TEXT | ✓  Impianto | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 22:765 · FRAME | Passo 3 | 238.67 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 22:766 · TEXT | 03  Risultati | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 1 · 22:767 · FRAME | Introduzione | 20 / 120 | 350 × 116 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:768 · TEXT | 03 / RISULTATI | 0 / 0 | 350 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:769 · TEXT | I numeri del tuo impianto. | 0 / 29 | 350 × 31 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 22:770 · TEXT | Una stima spiegata, non una promessa di rend | 0 / 68 | 350 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:771 · FRAME | Area principale | 20 / 252 | 350 × 2887 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:772 · FRAME | Indicatori principali | 0 / 0 | 350 × 773 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:1189 · TEXT | Tempo di rientro: senza e con detrazione | 0 / 0 | 350 × 60 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:1190 · FRAME | Rientro senza detrazione | 0 / 76 | 350 × 145 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1191 · TEXT | SENZA DETRAZIONE | 24 / 24 | 302 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:1192 · TEXT | ≈ 7,0 anni | 24 / 57 | 302 × 31 | H/V FIXED/HUG | #115E59 → color/brand-dark; vincoli MIN/MIN |
| 4 · 33:1193 · TEXT | 997,92 €/anno dopo i costi inseriti. | 24 / 100 | 302 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1194 · FRAME | Rientro con ipotesi fiscale | 0 / 237 | 350 × 214 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1195 · TEXT | CON LA DETRAZIONE IPOTIZZATA | 24 / 24 | 302 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 33:1196 · TEXT | ≈ 5,2 anni | 24 / 57 | 302 × 31 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 33:1197 · TEXT | 50% inserito come esempio, non aliquota presunta o diritto verificato. | 24 / 100 | 302 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 33:1198 · INSTANCE | Modifica ipotesi fiscale → | 24 / 154 | 302 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I33:1198;15:64 · TEXT | Continua | 16 / 7.5 | 270 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:1201 · TEXT | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | 0 / 467 | 350 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1202 · FRAME | Recupero fiscale ipotizzato | 0 / 546 | 350 × 127 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1203 · TEXT | Recupero fiscale ipotizzato | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:1204 · TEXT | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | 16 / 48 | 318 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1205 · TEXT | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | 0 / 689 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:788 · INSTANCE | Modifica rapida risultati | 0 / 789 | 350 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 3 · I22:788;15:64 · TEXT | Continua | 16 / 6.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 22:789 · FRAME | Economia ed energia | 0 / 839 | 350 × 999 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 22:790 · FRAME | Da dove arrivano i benefici | 0 / 0 | 350 × 585 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:791 · TEXT | Da dove arrivano i benefici | 20 / 16 | 310 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:792 · TEXT | Importi annuali · scenario centrale | 20 / 62 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:793 · FRAME | Risparmio sulla bolletta | 20 / 99 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:794 · TEXT | Risparmio sulla bolletta | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:795 · TEXT | +630,00 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:796 · FRAME | Ricavi energia immessa | 20 / 139 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:797 · TEXT | Ricavi energia immessa | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:798 · TEXT | +340,20 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:799 · FRAME | Recupero fiscale | 20 / 179 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:800 · TEXT | Recupero fiscale | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:801 · TEXT | 0,00 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:802 · FRAME | Beneficio prima dei costi esclusi | 20 / 219 | 310 × 130 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:803 · TEXT | Beneficio annuo: 970,20 € | 16 / 16 | 278 × 48 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 5 · 22:804 · TEXT | 630,00 € di risparmio + 340,20 € di ricavi. | 16 / 72 | 278 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:805 · FRAME | Costi non inclusi | 20 / 365 | 310 × 146 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:806 · TEXT | Costi ricorrenti: non inclusi | 16 / 16 | 278 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 22:807 · TEXT | Manutenzione, assicurazione e sostituzioni n | 16 / 46 | 278 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 25:407 · INSTANCE | Inserisci i costi → | 16 / 94 | 278 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I25:407;15:64 · TEXT | Continua | 16 / 7.5 | 246 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:1206 · TEXT | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | 20 / 527 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 22:808 · FRAME | Come si distribuisce l’energia | 0 / 601 | 350 × 398 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:809 · TEXT | Come si distribuisce l’energia | 20 / 16 | 310 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:810 · TEXT | 6.300 kWh prodotti in un anno | 20 / 62 | 310 × 62 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:811 · FRAME | Ripartizione della produzione | 20 / 140 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 0; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip true |
| 5 · 22:812 · RECTANGLE | Usata in casa | 0 / 0 | 124 × 24 | H/V FIXED/FIXED | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 22:813 · RECTANGLE | Immessa in rete | 124 / 0 | 186 × 24 | H/V FIXED/FIXED | #0F766E → primitive/brand; vincoli MIN/MIN |
| 4 · 22:814 · FRAME | Usata in casa · 40% | 20 / 180 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:815 · TEXT | Usata in casa · 40% | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:816 · TEXT | 2.520 kWh | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:817 · FRAME | Immessa in rete · 60% | 20 / 220 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 22:818 · TEXT | Immessa in rete · 60% | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 22:819 · TEXT | 3.780 kWh | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 22:820 · FRAME | Energia ancora acquistata | 20 / 260 | 310 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 5 · 22:821 · TEXT | Da acquistare: 480 kWh/anno | 16 / 16 | 278 × 24 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 5 · 22:822 · TEXT | Il 16% dei 3.000 kWh consumati. I costi fiss | 16 / 48 | 278 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:823 · TEXT | La quota del 40% si riferisce alla produzion | 20 / 361 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:824 · FRAME | Quando recuperi l’investimento | 0 / 1854 | 350 × 654 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:825 · TEXT | Quando recuperi l’investimento? | 20 / 16 | 310 × 60 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 22:826 · TEXT | Saldo cumulato · euro, prima dei costi esclu | 20 / 92 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 22:827 · FRAME | Saldo cumulato · scala anni ed euro | 20 / 129 | 310 × 290 | NONE; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip true |
| 4 · 22:828 · VECTOR | Riferimento -6990 | 56 / 180.43 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 22:829 · TEXT | −6.990 | 0 / 170.43 | 48 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:830 · VECTOR | Riferimento 0 | 56 / 128 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #52676B → primitive/muted; vincoli MIN/MIN; tratteggio 4/4; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 22:831 · TEXT | 0 € | 0 / 118 | 48 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:832 · VECTOR | Riferimento 12000 | 56 / 38 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 22:833 · TEXT | +7.500 | 0 / 28 | 48 × 42 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:834 · VECTOR | Saldo senza detrazione | 56 / 68.16 | 240 × 112.27 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #0F766E → color/brand; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 112.26599884033203 L 16 104.78160095214844 L 32 97.29720306396484 L 48 89.81279754638672 L 64 82.32839965820312 L 80 74.84400177001953 L 96 67.3595962524414 L 112 59.87519836425781 L 128 52.39080047607422 L 144 44.90639877319336 L 160 37.422000885009766 L 176 29.937599182128906 L 192 22.45319938659668 L 208 14.968799591064453 L 224 7.484399795532227 L 240 0"}\\] |
| 4 · 22:835 · TEXT | 0 | 42 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:836 · TEXT | 5 | 122 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:837 · TEXT | 10 | 202 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:838 · TEXT | 15 | 282 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:839 · TEXT | anni | 270 / 252 | 40 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 22:840 · ELLIPSE | Pareggio a circa 7,2 anni | 162.07 / 122 | 12 × 12 | H/V FIXED/FIXED | #FFCC45 → solar; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:841 · TEXT | Pareggio ≈ 7,2 anni | 56 / 0 | 240 × 21 | H/V FIXED/FIXED | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:1207 · VECTOR | Saldo con recupero fiscale | 56 / 41.95 | 240 × 138.48 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #5C400E → solar-ink; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 138.47850036621094 L 16 128.3728485107422 L 32 118.26719665527344 L 48 108.16155242919922 L 64 98.05590057373047 L 80 87.95024871826172 L 96 77.84459686279297 L 112 67.73895263671875 L 128 57.63330078125 L 144 47.52764892578125 L 160 37.422000885009766 L 176 29.937599182128906 L 192 22.45319938659668 L 208 14.968799591064453 L 224 7.484399795532227 L 240 0"}\\] |
| 4 · 33:1208 · ELLIPSE | Pareggio con detrazione ipotizzata | 133 / 122 | 12 × 12 | H/V FIXED/FIXED | #5C400E → solar-ink; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 3 · 22:842 · FRAME | Saldo dopo dieci anni | 20 / 435 | 310 × 151 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 22:843 · TEXT | Saldo a 10 anni: +2.712,00 € | 16 / 16 | 278 × 48 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 22:844 · TEXT | −6.990 € + 10 × 970,20 €. Prezzi e produzion | 16 / 72 | 278 × 63 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:1299 · INSTANCE | Vedi i flussi anno per anno → | 20 / 602 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:1299;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 22:845 · FRAME | Quanto cambia al variare della produzione | 0 / 2524 | 350 × 114 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:846 · TEXT | Scenari: autoconsumo e prezzi + | 20 / 16 | 310 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:847 · TEXT | Quota ±10 punti · prezzi ±10% · ipotesi illustrative | 20 / 56 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:848 · FRAME | Ipotesi formule e limiti | 0 / 2654 | 350 × 89 | VERTICAL; pad 16/20/16/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:849 · TEXT | Ipotesi e limiti, in chiaro + | 20 / 16 | 310 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:850 · TEXT | PVGIS, prezzi, detrazione e costi esclusi | 20 / 52 | 310 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:851 · FRAME | Azioni finali | 0 / 2759 | 350 × 128 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 22:852 · INSTANCE | SunSize V2/Button | 0 / 0 | 350 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:852;15:64 · TEXT | Continua | 16 / 16 | 318 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 22:853 · INSTANCE | SunSize V2/Button | 0 / 72 | 350 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I22:853;15:64 · TEXT | Continua | 17 / 16 | 316 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 1 · 22:854 · FRAME | Footer | 20 / 3155 | 350 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:855 · TEXT | SunSize · PCODING Software | 0 / 0 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 22:856 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:758 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:759 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:762 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:764 | ✓  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:766 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:768 | 03 / RISULTATI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 22:769 | I numeri del tuo impianto. | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:770 | Una stima spiegata, non una promessa di rendimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1189 | Tempo di rientro: senza e con detrazione | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:1191 | SENZA DETRAZIONE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1192 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #115E59 → color/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1193 | 997,92 €/anno dopo i costi inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1195 | CON LA DETRAZIONE IPOTIZZATA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1196 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1197 | 50% inserito come esempio, non aliquota presunta o diritto verificato. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1198;15:64 | Modifica ipotesi fiscale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1201 | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1203 | Recupero fiscale ipotizzato | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1204 | 3.495 € totali: 349,50 €/anno per 10 anni. Beneficio anni 1–10: 1.347,42 €/anno; dall’11° anno: 997,92 €/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1205 | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:788;15:64 | Modifica le ipotesi e ricalcola → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:791 | Da dove arrivano i benefici | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:792 | Importi annuali · scenario centrale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:794 | Risparmio sulla bolletta | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:795 | +648,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:797 | Ricavi energia immessa | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:798 | +349,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:800 | Recupero fiscale | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:801 | 349,50 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:803 | Beneficio annuo (anni 1–10): 1.347,42 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:804 | 648,00 € risparmio + 349,92 € ricavi + 349,50 € recupero fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:806 | Costi ricorrenti: non inclusi | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:807 | Manutenzione, assicurazione e sostituzioni sono escluse, non gratuite. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:407;15:64 | Inserisci i costi → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1206 | Dall’11° anno la quota fiscale termina. I costi esclusi non sono necessariamente nulli. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:809 | Come si distribuisce l’energia | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:810 | 6.480 kWh prodotti in un anno | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:815 | Usata in casa · 40% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:816 | 2.592 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:818 | Immessa in rete · 60% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:819 | 3.888 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 22:821 | Da acquistare: 408 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:822 | Il 13,6% dei consumi. I costi fissi restano. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:823 | Il 40% è una quota della produzione. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:825 | Quando recuperi l’investimento? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 22:826 | Saldo cumulato · euro, prima dei costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:829 | −6.990 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:831 | 0 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:833 | +12.000 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:835 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:836 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:837 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:838 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:839 | anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 22:841 | Senza ≈ 7,0 · con ≈ 5,2 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 22:843 | Saldo a 10 anni: senza +2.989,20 € · con +6.484,20 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:844 | Il recupero fiscale aggiunge 3.495 € nei primi 10 anni e poi termina. Verde: senza detrazione; ambra: con ipotesi fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1299;15:64 | Vedi i flussi anno per anno → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:846 | Scenari: autoconsumo e prezzi  + | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:847 | Quota ±10 punti · prezzi ±10% · ipotesi illustrative | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:849 | Ipotesi e limiti, in chiaro  + | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:850 | PVGIS, prezzi, detrazione e costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:852;15:64 | Modifica e ricalcola → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I22:853;15:64 | Nuova simulazione | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 22:855 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:856 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Da dove arriva la resa regionale? · V2 — 22:895

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=22-895) · **390 × 1520 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 22:895 · FRAME | Mobile · Da dove arriva la resa regionale? · V2 | 5760 / 3300 | 390 × 1520 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 22:896 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 22:897 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 22:898 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 22:899 · FRAME | Da dove arriva la resa regionale? | 20 / 71 | 350 × 1367 | VERTICAL; pad 20/20/20/20; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 22:900 · TEXT | Da dove arriva la resa regionale? | 20 / 20 | 310 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:901 · TEXT | Una prima stima semplice, con fonte e ipotesi visibili. | 20 / 104 | 310 × 48 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:903 · FRAME | Dati ufficiali, elaborazione SunSize | 20 / 174 | 310 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:904 · TEXT | Dati ufficiali, elaborazione SunSize | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 22:905 · TEXT | PVGIS 5.3 · Commissione europea / JRC Database SARAH3, media 2005–2023. | 16 / 48 | 278 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:906 · TEXT | Pannelli verso sud, inclinazione 30°, perdite di sistema 14%, silicio cristallino. La resa elettrica comprende già le perdite del modello. | 20 / 302 | 310 × 96 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:907 · TEXT | 209 punti distribuiti nelle 20 regioni. Media spaziale approssimata, arrotondata a 10 kWh/kWp/anno: non è una media ufficiale regionale né una valutazione dei tetti abitati. | 20 / 420 | 310 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:908 · TEXT | Località, esposizione e ombre possono modificare la produzione. Preferisci una stima del preventivo se disponibile. | 20 / 526 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:909 · FRAME | Tabella delle 20 rese regionali | 20 / 611 | 310 × 572 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 3 · 22:910 · TEXT | Piemonte · 1260 kWh/kWp/anno | 0 / 0 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:911 · TEXT | Valle d’Aosta · 1240 kWh/kWp/anno | 0 / 29 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:912 · TEXT | Liguria · 1310 kWh/kWp/anno | 0 / 58 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:913 · TEXT | Lombardia · 1300 kWh/kWp/anno | 0 / 87 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:914 · TEXT | Trentino-Alto Adige · 1220 kWh/kWp/anno | 0 / 116 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:915 · TEXT | Veneto · 1280 kWh/kWp/anno | 0 / 145 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:916 · TEXT | Friuli-Venezia Giulia · 1230 kWh/kWp/anno | 0 / 174 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:917 · TEXT | Emilia-Romagna · 1330 kWh/kWp/anno | 0 / 203 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:918 · TEXT | Toscana · 1380 kWh/kWp/anno | 0 / 232 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:919 · TEXT | Umbria · 1340 kWh/kWp/anno | 0 / 261 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:920 · TEXT | Marche · 1330 kWh/kWp/anno | 0 / 290 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:921 · TEXT | Lazio · 1440 kWh/kWp/anno | 0 / 319 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:922 · TEXT | Abruzzo · 1350 kWh/kWp/anno | 0 / 348 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:923 · TEXT | Molise · 1390 kWh/kWp/anno | 0 / 377 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:924 · TEXT | Campania · 1350 kWh/kWp/anno | 0 / 406 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:925 · TEXT | Puglia · 1470 kWh/kWp/anno | 0 / 435 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:926 · TEXT | Basilicata · 1410 kWh/kWp/anno | 0 / 464 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:927 · TEXT | Calabria · 1390 kWh/kWp/anno | 0 / 493 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:928 · TEXT | Sicilia · 1550 kWh/kWp/anno | 0 / 522 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 22:929 · TEXT | Sardegna · 1500 kWh/kWp/anno | 0 / 551 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 22:930 · TEXT | Fonte: joint-research-centre.ec.europa.eu · PVGIS © European Communities. Confini: Eurostat/GISCO NUTS 2024. Metodo e campioni verificabili nel progetto SunSize. | 20 / 1205 | 310 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 22:931 · INSTANCE | ← Torna all’impianto | 20 / 1311 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I22:931;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 22:902 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 20 / 1458 | 350 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 22:897 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:898 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:900 | Da dove arriva la resa regionale? | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 22:901 | Una prima stima semplice, con fonte e ipotesi visibili. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:904 | Dati ufficiali, elaborazione SunSize | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 22:905 | PVGIS 5.3 · Commissione europea / JRC<br>Database SARAH3, media 2005–2023. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:906 | Pannelli verso sud, inclinazione 30°, perdite di sistema 14%, silicio cristallino. La resa elettrica comprende già le perdite del modello. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 22:907 | 209 punti distribuiti nelle 20 regioni. Media spaziale approssimata, arrotondata a 10 kWh/kWp/anno: non è una media ufficiale regionale né una valutazione dei tetti abitati. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:908 | Località, esposizione e ombre possono modificare la produzione. Preferisci una stima del preventivo se disponibile. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:910 | Piemonte · 1260 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:911 | Valle d’Aosta · 1240 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:912 | Liguria · 1310 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:913 | Lombardia · 1300 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:914 | Trentino-Alto Adige · 1220 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:915 | Veneto · 1280 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:916 | Friuli-Venezia Giulia · 1230 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:917 | Emilia-Romagna · 1330 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:918 | Toscana · 1380 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:919 | Umbria · 1340 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:920 | Marche · 1330 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:921 | Lazio · 1440 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:922 | Abruzzo · 1350 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:923 | Molise · 1390 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:924 | Campania · 1350 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:925 | Puglia · 1470 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:926 | Basilicata · 1410 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:927 | Calabria · 1390 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:928 | Sicilia · 1550 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:929 | Sardegna · 1500 kWh/kWp/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 22:930 | Fonte: joint-research-centre.ec.europa.eu · PVGIS © European Communities. Confini: Eurostat/GISCO NUTS 2024. Metodo e campioni verificabili nel progetto SunSize. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I22:931;15:64 | ← Torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 22:902 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Detrazione e costi · V2 — 25:274

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-274) · **1440 × 1002 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:274 · FRAME | Desktop · Detrazione e costi · V2 | 9480 / 0 | 1440 × 1002 | VERTICAL; pad 40/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 25:275 · FRAME | Intestazione | 64 / 40 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 25:276 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 25:277 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 25:278 · FRAME | Detrazione e costi | 64 / 103 | 900 × 782 | VERTICAL; pad 36/36/36/36; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 25:279 · TEXT | Detrazione e costi | 36 / 36 | 828 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 25:280 · TEXT | Controlla anche i costi: possono cambiare il tempo di rientro. | 36 / 101 | 828 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:282 · INSTANCE | SunSize V2/NumField | 36 / 147 | 828 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:282;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:282;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:282;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:282;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:287 · INSTANCE | SunSize V2/NumField | 36 / 304 | 828 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:287;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:287;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:287;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:287;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:292 · FRAME | Un esempio per capire l’effetto | 36 / 440 | 828 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 25:293 · TEXT | Un esempio per capire l’effetto | 16 / 16 | 796 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 25:294 · TEXT | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | 16 / 48 | 796 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:295 · TEXT | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | 36 / 568 | 828 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:296 · INSTANCE | Salva le ipotesi → | 36 / 632 | 828 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:296;15:64 · TEXT | Continua | 16 / 16 | 796 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 25:298 · INSTANCE | Annulla e torna all’impianto | 36 / 710 | 828 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:298;15:64 · TEXT | Continua | 16 / 7.5 | 796 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 25:281 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 64 / 917 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 25:276 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:277 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:279 | Detrazione e costi | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 25:280 | Controlla anche i costi: possono cambiare il tempo di rientro. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:282;15:66 | Detrazione fiscale ipotizzata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:282;15:68 | 50 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:282;15:69 | Esempio ipotetico modificabile; non è un’aliquota spettante verificata. Zero esclude il recupero. Quote su 10 anni, se interamente recuperabili. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:287;15:66 | Costi ricorrenti annuali | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:287;15:68 | 0 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:287;15:69 | Manutenzione e assicurazione. Zero significa che questi costi sono esclusi, non che siano gratuiti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:293 | Un esempio per capire l’effetto | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 25:294 | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:295 | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:296;15:64 | Salva le ipotesi → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I25:298;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 25:281 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Detrazione e costi · resa manuale · V2 — 25:308

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-308) · **1440 × 1002 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:308 · FRAME | Desktop · Detrazione e costi · resa manuale · V2 | 11040 / 0 | 1440 × 1002 | VERTICAL; pad 40/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 25:309 · FRAME | Intestazione | 64 / 40 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 25:310 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 25:311 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 25:312 · FRAME | Detrazione e costi · resa manuale | 64 / 103 | 900 × 782 | VERTICAL; pad 36/36/36/36; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 25:313 · TEXT | Detrazione e costi · resa manuale | 36 / 36 | 828 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 25:314 · TEXT | Controlla anche i costi: possono cambiare il tempo di rientro. | 36 / 101 | 828 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:316 · INSTANCE | SunSize V2/NumField | 36 / 147 | 828 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:316;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:316;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:316;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:316;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:321 · INSTANCE | SunSize V2/NumField | 36 / 304 | 828 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:321;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:321;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:321;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:321;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:326 · FRAME | Un esempio per capire l’effetto | 36 / 440 | 828 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 25:327 · TEXT | Un esempio per capire l’effetto | 16 / 16 | 796 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 25:328 · TEXT | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | 16 / 48 | 796 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:329 · TEXT | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | 36 / 568 | 828 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:330 · INSTANCE | Salva le ipotesi → | 36 / 632 | 828 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:330;15:64 · TEXT | Continua | 16 / 16 | 796 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 25:332 · INSTANCE | Annulla e torna all’impianto | 36 / 710 | 828 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:332;15:64 · TEXT | Continua | 16 / 7.5 | 796 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 25:315 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 64 / 917 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 25:310 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:311 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:313 | Detrazione e costi · resa manuale | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 25:314 | Controlla anche i costi: possono cambiare il tempo di rientro. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:316;15:66 | Detrazione fiscale ipotizzata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:316;15:68 | 50 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:316;15:69 | Esempio ipotetico modificabile; non è un’aliquota spettante verificata. Zero esclude il recupero. Quote su 10 anni, se interamente recuperabili. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:321;15:66 | Costi ricorrenti annuali | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:321;15:68 | 0 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:321;15:69 | Manutenzione e assicurazione. Zero significa che questi costi sono esclusi, non che siano gratuiti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:327 | Un esempio per capire l’effetto | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 25:328 | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:329 | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:330;15:64 | Salva le ipotesi → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I25:332;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 25:315 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Detrazione e costi · V2 — 25:342

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-342) · **390 × 1083 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:342 · FRAME | Mobile · Detrazione e costi · V2 | 6240 / 3300 | 390 × 1083 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 25:343 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 25:344 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 25:345 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 25:346 · FRAME | Detrazione e costi | 20 / 71 | 350 × 930 | VERTICAL; pad 20/20/20/20; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 25:347 · TEXT | Detrazione e costi | 20 / 20 | 310 × 31 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 25:348 · TEXT | Controlla anche i costi: possono cambiare il tempo di rientro. | 20 / 73 | 310 × 48 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:350 · INSTANCE | SunSize V2/NumField | 20 / 143 | 310 × 177 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:350;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:350;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:350;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:350;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 84 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:355 · INSTANCE | SunSize V2/NumField | 20 / 342 | 310 × 156 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:355;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:355;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:355;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:355;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 63 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:360 · FRAME | Un esempio per capire l’effetto | 20 / 520 | 310 × 148 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 25:361 · TEXT | Un esempio per capire l’effetto | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 25:362 · TEXT | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | 16 / 48 | 278 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:363 · TEXT | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | 20 / 690 | 310 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:364 · INSTANCE | Salva le ipotesi → | 20 / 796 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:364;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 25:366 · INSTANCE | Annulla e torna all’impianto | 20 / 874 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:366;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 25:349 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 20 / 1021 | 350 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 25:344 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:345 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:347 | Detrazione e costi | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:348 | Controlla anche i costi: possono cambiare il tempo di rientro. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:350;15:66 | Detrazione fiscale ipotizzata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:350;15:68 | 50 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:350;15:69 | Esempio ipotetico modificabile; non è un’aliquota spettante verificata. Zero esclude il recupero. Quote su 10 anni, se interamente recuperabili. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:355;15:66 | Costi ricorrenti annuali | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:355;15:68 | 0 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:355;15:69 | Manutenzione e assicurazione. Zero significa che questi costi sono esclusi, non che siano gratuiti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:361 | Un esempio per capire l’effetto | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 25:362 | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:363 | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:364;15:64 | Salva le ipotesi → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I25:366;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 25:349 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Detrazione e costi · resa manuale · V2 — 25:376

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-376) · **390 × 1114 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:376 · FRAME | Mobile · Detrazione e costi · resa manuale · V2 | 6720 / 3300 | 390 × 1114 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 25:377 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 25:378 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 25:379 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 25:380 · FRAME | Detrazione e costi · resa manuale | 20 / 71 | 350 × 961 | VERTICAL; pad 20/20/20/20; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 25:381 · TEXT | Detrazione e costi · resa manuale | 20 / 20 | 310 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 25:382 · TEXT | Controlla anche i costi: possono cambiare il tempo di rientro. | 20 / 104 | 310 × 48 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:384 · INSTANCE | SunSize V2/NumField | 20 / 174 | 310 × 177 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:384;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:384;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:384;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:384;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 84 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:389 · INSTANCE | SunSize V2/NumField | 20 / 373 | 310 × 156 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I25:389;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:389;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I25:389;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I25:389;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 63 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:394 · FRAME | Un esempio per capire l’effetto | 20 / 551 | 310 × 148 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 25:395 · TEXT | Un esempio per capire l’effetto | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 25:396 · TEXT | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | 16 / 48 | 278 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:397 · TEXT | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | 20 / 721 | 310 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 25:398 · INSTANCE | Salva le ipotesi → | 20 / 827 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:398;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 25:400 · INSTANCE | Annulla e torna all’impianto | 20 / 905 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I25:400;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 25:383 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 20 / 1052 | 350 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 25:378 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:379 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:381 | Detrazione e costi · resa manuale | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:382 | Controlla anche i costi: possono cambiare il tempo di rientro. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:384;15:66 | Detrazione fiscale ipotizzata | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:384;15:68 | 50 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:384;15:69 | Esempio ipotetico modificabile; non è un’aliquota spettante verificata. Zero esclude il recupero. Quote su 10 anni, se interamente recuperabili. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:389;15:66 | Costi ricorrenti annuali | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:389;15:68 | 0 €/anno | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:389;15:69 | Manutenzione e assicurazione. Zero significa che questi costi sono esclusi, non che siano gratuiti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:395 | Un esempio per capire l’effetto | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 25:396 | Con 100 €/anno di costi, il beneficio operativo scende a 897,92 €. Rientro: circa 7,8 anni senza detrazione; circa 5,6 con l’ipotesi del 50%. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:397 | Sostituzioni straordinarie, finanziamento e degrado restano fuori dal modello. Per la detrazione verifica requisiti, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:398;15:64 | Salva le ipotesi → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I25:400;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 25:383 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Scenari: autoconsumo e prezzi · V2 — 25:410

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-410) · **390 × 1359 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:410 · FRAME | Mobile · Scenari: autoconsumo e prezzi · V2 | 0 / 6400 | 390 × 1359 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 34:377 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 34:378 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 34:379 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 34:380 · TEXT | Scenari: autoconsumo e prezzi | 20 / 71 | 350 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:381 · TEXT | Quote ±10 punti percentuali e prezzi ±10%. Produzione, costo, manutenzione e ipotesi fiscale restano invariati. Nessuna probabilità o garanzia. | 20 / 153 | 350 × 96 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 34:382 · FRAME | Quota e prezzi ridotti | 20 / 269 | 350 × 290 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:383 · TEXT | Quota e prezzi ridotti | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:384 · TEXT | ≈ 6,1 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:385 · TEXT | Quota richiesta: 30% della produzione. Autoconsumo limitato al fabbisogno: 1944 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:386 · TEXT | Prezzo evitato: 0,225 €/kWh. Vendita: 0,081 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:387 · TEXT | 1.154,32 €/anno nei primi 10 anni, inclusa quota fiscale. | 20 / 228 | 310 × 42 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:388 · FRAME | Ipotesi inserite | 20 / 579 | 350 × 290 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:389 · TEXT | Ipotesi inserite | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:390 · TEXT | ≈ 5,2 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:391 · TEXT | Quota richiesta: 40% della produzione. Autoconsumo limitato al fabbisogno: 2592 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:392 · TEXT | Prezzo evitato: 0,250 €/kWh. Vendita: 0,090 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:393 · TEXT | 1.347,42 €/anno nei primi 10 anni, inclusa quota fiscale. | 20 / 228 | 310 × 42 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:394 · FRAME | Quota e prezzi aumentati | 20 / 889 | 350 × 290 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:395 · TEXT | Quota e prezzi aumentati | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:396 · TEXT | ≈ 4,6 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:397 · TEXT | Quota richiesta: 50% della produzione. Autoconsumo limitato al fabbisogno: 3000 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:398 · TEXT | Prezzo evitato: 0,275 €/kWh. Vendita: 0,099 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:399 · TEXT | 1.519,02 €/anno nei primi 10 anni, inclusa quota fiscale. | 20 / 228 | 310 × 42 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:400 · TEXT | Le percentuali non sono dedotte dagli orari di consumo o dalla presenza della batteria. Nessuna simulazione oraria. I costi esclusi possono allungare il rientro. | 20 / 1199 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 34:401 · INSTANCE | ← Torna ai risultati | 20 / 1303 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I34:401;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 34:378 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:379 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:380 | Scenari: autoconsumo e prezzi | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:381 | Quote ±10 punti percentuali e prezzi ±10%. Produzione, costo, manutenzione e ipotesi fiscale restano invariati. Nessuna probabilità o garanzia. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 34:383 | Quota e prezzi ridotti | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:384 | ≈ 6,1 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:385 | Quota richiesta: 30% della produzione. Autoconsumo limitato al fabbisogno: 1944 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:386 | Prezzo evitato: 0,225 €/kWh. Vendita: 0,081 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:387 | 1.154,32 €/anno nei primi 10 anni, inclusa quota fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:389 | Ipotesi inserite | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:390 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:391 | Quota richiesta: 40% della produzione. Autoconsumo limitato al fabbisogno: 2592 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:392 | Prezzo evitato: 0,250 €/kWh. Vendita: 0,090 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:393 | 1.347,42 €/anno nei primi 10 anni, inclusa quota fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:395 | Quota e prezzi aumentati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:396 | ≈ 4,6 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:397 | Quota richiesta: 50% della produzione. Autoconsumo limitato al fabbisogno: 3000 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:398 | Prezzo evitato: 0,275 €/kWh. Vendita: 0,099 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:399 | 1.519,02 €/anno nei primi 10 anni, inclusa quota fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:400 | Le percentuali non sono dedotte dagli orari di consumo o dalla presenza della batteria. Nessuna simulazione oraria. I costi esclusi possono allungare il rientro. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I34:401;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Ipotesi e limiti · V2 — 25:436

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-436) · **390 × 473 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:436 · FRAME | Mobile · Ipotesi e limiti · V2 | 450 / 6400 | 390 × 473 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 25:437 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 25:438 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 25:439 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 25:440 · TEXT | Ipotesi e limiti | 20 / 71 | 350 × 31 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 25:441 · FRAME | Ipotesi e limiti, in chiaro · stato aperto mobile | 20 / 122 | 350 × 275 | VERTICAL; pad 16/20/16/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 2 · 25:442 · TEXT | Ipotesi e limiti, in chiaro | 20 / 16 | 310 × 30 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 25:443 · TEXT | Produzione: 4,5 kWp × 1.400 kWh/kWp. Autocon | 20 / 58 | 310 × 84 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 25:444 · TEXT | Valori dello scenario iniziale, non tariffe | 20 / 154 | 310 × 105 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 25:445 · INSTANCE | ← Torna ai risultati | 20 / 417 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I25:445;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 25:438 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:439 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:440 | Ipotesi e limiti | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:442 | Ipotesi e limiti, in chiaro | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 25:443 | Regione: Lazio. 4,5 kWp × 1.440 kWh/kWp/anno. Autoconsumo: 40%. Prezzi: 0,25 €/kWh evitato; 0,09 €/kWh immesso. Detrazione ipotizzata: 50% in 10 anni, se spettante. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:444 | Resa: elaborazione SunSize su PVGIS 5.3/SARAH3 (2005–2023), sud, 30°, perdite 14%. Rientro semplice; nessun finanziamento, inflazione o degrado. Manutenzione e sostituzioni escluse se non inserite. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:445;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Scenari: autoconsumo e prezzi · resa manuale · V2 — 25:449

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-449) · **390 × 1359 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:449 · FRAME | Mobile · Scenari: autoconsumo e prezzi · resa manuale · V2 | 900 / 6400 | 390 × 1359 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 34:405 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 34:406 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 34:407 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 34:408 · TEXT | Scenari: autoconsumo e prezzi | 20 / 71 | 350 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:409 · TEXT | Quote ±10 punti percentuali e prezzi ±10%. Produzione, costo, manutenzione e ipotesi fiscale restano invariati. Nessuna probabilità o garanzia. | 20 / 153 | 350 × 96 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 34:410 · FRAME | Quota e prezzi ridotti | 20 / 269 | 350 × 290 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:411 · TEXT | Quota e prezzi ridotti | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:412 · TEXT | ≈ 6,1 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:413 · TEXT | Quota richiesta: 30% della produzione. Autoconsumo limitato al fabbisogno: 1944 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:414 · TEXT | Prezzo evitato: 0,225 €/kWh. Vendita: 0,081 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:415 · TEXT | 1.154,32 €/anno nei primi 10 anni, inclusa quota fiscale. | 20 / 228 | 310 × 42 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:416 · FRAME | Ipotesi inserite | 20 / 579 | 350 × 290 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:417 · TEXT | Ipotesi inserite | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:418 · TEXT | ≈ 5,2 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:419 · TEXT | Quota richiesta: 40% della produzione. Autoconsumo limitato al fabbisogno: 2592 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:420 · TEXT | Prezzo evitato: 0,250 €/kWh. Vendita: 0,090 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:421 · TEXT | 1.347,42 €/anno nei primi 10 anni, inclusa quota fiscale. | 20 / 228 | 310 × 42 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:422 · FRAME | Quota e prezzi aumentati | 20 / 889 | 350 × 290 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:423 · TEXT | Quota e prezzi aumentati | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:424 · TEXT | ≈ 4,6 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:425 · TEXT | Quota richiesta: 50% della produzione. Autoconsumo limitato al fabbisogno: 3000 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:426 · TEXT | Prezzo evitato: 0,275 €/kWh. Vendita: 0,099 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:427 · TEXT | 1.519,02 €/anno nei primi 10 anni, inclusa quota fiscale. | 20 / 228 | 310 × 42 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:428 · TEXT | Le percentuali non sono dedotte dagli orari di consumo o dalla presenza della batteria. Nessuna simulazione oraria. I costi esclusi possono allungare il rientro. | 20 / 1199 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 34:429 · INSTANCE | ← Torna ai risultati | 20 / 1303 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I34:429;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 34:406 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:407 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:408 | Scenari: autoconsumo e prezzi | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:409 | Quote ±10 punti percentuali e prezzi ±10%. Produzione, costo, manutenzione e ipotesi fiscale restano invariati. Nessuna probabilità o garanzia. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 34:411 | Quota e prezzi ridotti | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:412 | ≈ 6,1 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:413 | Quota richiesta: 30% della produzione. Autoconsumo limitato al fabbisogno: 1944 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:414 | Prezzo evitato: 0,225 €/kWh. Vendita: 0,081 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:415 | 1.154,32 €/anno nei primi 10 anni, inclusa quota fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:417 | Ipotesi inserite | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:418 | ≈ 5,2 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:419 | Quota richiesta: 40% della produzione. Autoconsumo limitato al fabbisogno: 2592 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:420 | Prezzo evitato: 0,250 €/kWh. Vendita: 0,090 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:421 | 1.347,42 €/anno nei primi 10 anni, inclusa quota fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:423 | Quota e prezzi aumentati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:424 | ≈ 4,6 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:425 | Quota richiesta: 50% della produzione. Autoconsumo limitato al fabbisogno: 3000 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:426 | Prezzo evitato: 0,275 €/kWh. Vendita: 0,099 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:427 | 1.519,02 €/anno nei primi 10 anni, inclusa quota fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:428 | Le percentuali non sono dedotte dagli orari di consumo o dalla presenza della batteria. Nessuna simulazione oraria. I costi esclusi possono allungare il rientro. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I34:429;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Ipotesi e limiti · resa manuale · V2 — 25:475

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-475) · **390 × 452 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:475 · FRAME | Mobile · Ipotesi e limiti · resa manuale · V2 | 1350 / 6400 | 390 × 452 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 25:476 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 25:477 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 25:478 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 25:479 · TEXT | Ipotesi e limiti | 20 / 71 | 350 × 31 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 25:480 · FRAME | Ipotesi e limiti, in chiaro · stato aperto mobile | 20 / 122 | 350 × 254 | VERTICAL; pad 16/20/16/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 2 · 25:481 · TEXT | Ipotesi e limiti, in chiaro | 20 / 16 | 310 × 30 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 25:482 · TEXT | Produzione: 4,5 kWp × 1.400 kWh/kWp. Autocon | 20 / 58 | 310 × 84 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 25:483 · TEXT | Valori dello scenario iniziale, non tariffe | 20 / 154 | 310 × 84 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 25:484 · INSTANCE | ← Torna ai risultati | 20 / 396 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I25:484;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 25:477 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:478 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:479 | Ipotesi e limiti | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 25:481 | Ipotesi e limiti, in chiaro | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 25:482 | Valore del preventivo: 4,5 kWp × 1.440 kWh/kWp/anno. Autoconsumo: 40%. Prezzi: 0,25 €/kWh evitato; 0,09 €/kWh immesso. Detrazione ipotizzata: 50% in 10 anni, se spettante. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:483 | Resa dal preventivo: 1.440 kWh/kWp/anno. Modello annuale con prezzi e produzione costanti, senza finanziamento, inflazione e degrado. Costi esclusi se non inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:484;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Stati del selettore Regione · specifiche V2 — 25:494

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=25-494) · **480 × 600 px** · sfondo #FFFFFF → color/surface.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 25:494 · FRAME | Stati del selettore Regione · specifiche V2 | 2100 / 6400 | 480 × 600 | VERTICAL; pad 24/24/24/24; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 1 · 25:495 · TEXT | Regione: tre stati da implementare | 24 / 24 | 432 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 25:496 · INSTANCE | SunSize V2/NumField | 24 / 78 | 432 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 2 · I25:496;15:66 · TEXT | Consumo annuo | 0 / 0 | 432 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · I25:496;15:67 · FRAME | Input | 0 / 29 | 432 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 3 · I25:496;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 398 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · I25:496;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 432 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 25:501 · INSTANCE | SunSize V2/NumField | 24 / 237 | 432 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 2 · I25:501;15:66 · TEXT | Consumo annuo | 0 / 0 | 432 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · I25:501;15:67 · FRAME | Input | 0 / 29 | 432 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 3 · I25:501;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 398 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · I25:501;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 432 × 21 | H/V FILL/HUG | #A52D2D; vincoli MIN/MIN |
| 1 · 25:506 · INSTANCE | SunSize V2/NumField | 24 / 375 | 432 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 2 · I25:506;15:66 · TEXT | Consumo annuo | 0 / 0 | 432 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · I25:506;15:67 · FRAME | Input | 0 / 29 | 432 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 3 · I25:506;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 398 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · I25:506;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 432 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 25:511 · TEXT | Validazione dopo il tentativo di continuare; messaggio vicino al campo e focus sul selettore. Cambio modalità e ritorno ai dati conservano i valori. | 24 / 513 | 432 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 25:495 | Regione: tre stati da implementare | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| I25:496;15:66 | Regione dell’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:496;15:68 | Seleziona la tua regione ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:496;15:69 | Nessun valore preselezionato. Resa e produzione non ancora disponibili. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:501;15:66 | Regione dell’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:501;15:68 | Seleziona la tua regione ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:501;15:69 | Seleziona una regione oppure inserisci il valore del preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #A52D2D; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I25:506;15:66 | Regione dell’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I25:506;15:68 | Lazio ⌄ | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I25:506;15:69 | Resa proposta: 1.440 kWh/kWp/anno. Sud, 30°, perdite 14%. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 25:511 | Validazione dopo il tentativo di continuare; messaggio vicino al campo e focus sul selettore. Cambio modalità e ritorno ai dati conservano i valori. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### SunSize V2 · guida alla revisione — 26:306

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=26-306) · **1440 × 615 px** · sfondo #FFFFFF → color/surface.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 26:306 · FRAME | SunSize V2 · guida alla revisione | 0 / -1250 | 1440 × 615 | VERTICAL; pad 48/48/48/48; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 1 · 26:307 · TEXT | SunSize V2 · Regione e percorsi semplificati | 48 / 48 | 1344 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 26:308 · TEXT | Prototipo UX collegato. Esempio: Lazio, 1.440 kWh/kWp/anno, 4,5 kWp, costo 6.990 €, quota 40%, costi ricorrenti esclusi. Confronto senza detrazione (circa 7 anni) e con un’ipotesi del 50% (circa 5 anni e 2 mesi), non un’aliquota presunta. Le varianti “Detrazione non impostata” mostrano lo stato iniziale. I campi Figma non eseguono calcoli. | 48 / 113 | 1344 × 48 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 26:309 · TEXT | Percorsi: Consumi → Impianto → Risultati. Aiuti: annualizzazione dei dati, quota personalizzata, resa del preventivo, detrazione e costi. Nei risultati mobili si aprono scenari e limiti; i collegamenti riportano al percorso principale. | 48 / 183 | 1344 × 48 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 26:310 · INSTANCE | Inizia il percorso Desktop → | 48 / 253 | 500 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 2 · I26:310;15:64 · TEXT | Continua | 16 / 16 | 468 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 1 · 26:312 · INSTANCE | Inizia il percorso Mobile → | 48 / 331 | 500 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 2 · I26:312;15:64 · TEXT | Continua | 16 / 16 | 468 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 1 · 26:316 · TEXT | Fonte delle rese: elaborazione SunSize su 209 campioni PVGIS 5.3/SARAH3 (2005–2023), con sud, 30°, perdite di sistema 14%. Tabella di riferimento regionale approssimata; il singolo tetto può differire. Metodo e dati nel repository: docs/rese-regionali.md. | 48 / 409 | 1344 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 34:462 · INSTANCE | Apri lo stato senza aliquota · Desktop → | 48 / 473 | 600 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I34:462;15:64 · TEXT | Continua | 16 / 7.5 | 568 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 34:465 · INSTANCE | Apri lo stato senza aliquota · Mobile → | 48 / 531 | 600 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I34:465;15:64 · TEXT | Continua | 16 / 7.5 | 568 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 26:307 | SunSize V2 · Regione e percorsi semplificati | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 26:308 | Prototipo UX collegato. Esempio: Lazio, 1.440 kWh/kWp/anno, 4,5 kWp, costo 6.990 €, quota 40%, costi ricorrenti esclusi. Confronto senza detrazione (circa 7 anni) e con un’ipotesi del 50% (circa 5 anni e 2 mesi), non un’aliquota presunta. Le varianti “Detrazione non impostata” mostrano lo stato iniziale. I campi Figma non eseguono calcoli. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 26:309 | Percorsi: Consumi → Impianto → Risultati. Aiuti: annualizzazione dei dati, quota personalizzata, resa del preventivo, detrazione e costi. Nei risultati mobili si aprono scenari e limiti; i collegamenti riportano al percorso principale. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I26:310;15:64 | Inizia il percorso Desktop → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I26:312;15:64 | Inizia il percorso Mobile → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 26:316 | Fonte delle rese: elaborazione SunSize su 209 campioni PVGIS 5.3/SARAH3 (2005–2023), con sud, 30°, perdite di sistema 14%. Tabella di riferimento regionale approssimata; il singolo tetto può differire. Metodo e dati nel repository: docs/rese-regionali.md. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I34:462;15:64 | Apri lo stato senza aliquota · Desktop → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| I34:465;15:64 | Apri lo stato senza aliquota · Mobile → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Desktop · Personalizza l’autoconsumo · resa manuale · V2 — 27:308

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=27-308) · **1440 × 845 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 27:308 · FRAME | Desktop · Personalizza l’autoconsumo · resa manuale · V2 | 12600 / 0 | 1440 × 845 | VERTICAL; pad 40/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 27:309 · FRAME | Intestazione | 64 / 40 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 27:310 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 27:311 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 27:312 · FRAME | Personalizza l’autoconsumo | 64 / 103 | 900 × 625 | VERTICAL; pad 36/36/36/36; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 27:313 · TEXT | Personalizza l’autoconsumo | 36 / 36 | 828 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 27:314 · TEXT | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | 36 / 101 | 828 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:315 · INSTANCE | SunSize V2/NumField | 36 / 147 | 828 × 114 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I27:315;15:66 · TEXT | Consumo annuo | 0 / 0 | 828 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I27:315;15:67 · FRAME | Input | 0 / 29 | 828 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I27:315;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 794 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I27:315;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 828 × 21 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:316 · FRAME | Con la configurazione attuale | 36 / 283 | 828 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 27:317 · TEXT | Con la configurazione attuale | 16 / 16 | 796 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 27:318 · TEXT | 6.480 × 40% = 2.592 kWh/anno usati in casa. Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | 16 / 48 | 796 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:319 · TEXT | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | 36 / 411 | 828 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:320 · INSTANCE | Usa questa quota → | 36 / 475 | 828 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I27:320;15:64 · TEXT | Continua | 16 / 16 | 796 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 27:321 · INSTANCE | Annulla e torna all’impianto | 36 / 553 | 828 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I27:321;15:64 · TEXT | Continua | 16 / 7.5 | 796 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 27:322 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 64 / 760 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 27:310 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 27:311 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 27:313 | Personalizza l’autoconsumo | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 27:314 | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I27:315;15:66 | Quota della produzione usata in casa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I27:315;15:68 | 40 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I27:315;15:69 | Valore ammesso: da 0% a 100%. Non è una percentuale del consumo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 27:317 | Con la configurazione attuale | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 27:318 | 6.480 × 40% = 2.592 kWh/anno usati in casa.<br>Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 27:319 | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I27:320;15:64 | Usa questa quota → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I27:321;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 27:322 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Personalizza l’autoconsumo · resa manuale · V2 — 27:332

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=27-332) · **390 × 939 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 27:332 · FRAME | Mobile · Personalizza l’autoconsumo · resa manuale · V2 | 7200 / 3300 | 390 × 939 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 27:333 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 27:334 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 27:335 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 27:336 · FRAME | Personalizza l’autoconsumo | 20 / 71 | 350 × 786 | VERTICAL; pad 20/20/20/20; gap 22; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 27:337 · TEXT | Personalizza l’autoconsumo | 20 / 20 | 310 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 27:338 · TEXT | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | 20 / 104 | 310 × 72 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:339 · INSTANCE | SunSize V2/NumField | 20 / 198 | 310 × 135 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip false |
| 3 · I27:339;15:66 · TEXT | Consumo annuo | 0 / 0 | 310 × 21 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I27:339;15:67 · FRAME | Input | 0 / 29 | 310 × 56 | VERTICAL; pad 13/16/13/16; gap 0; main CENTER; cross MIN; wrap NO\\_WRAP; H/V FILL/FIXED | #FFFFFF → color/surface; bordo 1px INSIDE: #52676B → color/muted; r 10; vincoli MIN/MIN; clip true |
| 4 · I27:339;15:68 · TEXT | 3.000 kWh/anno | 17 / 16 | 276 × 24 | H/V FILL/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · I27:339;15:69 · TEXT | Consumo totale degli ultimi 12 mesi. | 0 / 93 | 310 × 42 | H/V FILL/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:340 · FRAME | Con la configurazione attuale | 20 / 355 | 310 × 148 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 27:341 · TEXT | Con la configurazione attuale | 16 / 16 | 278 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 27:342 · TEXT | 6.480 × 40% = 2.592 kWh/anno usati in casa. Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | 16 / 48 | 278 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:343 · TEXT | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | 20 / 525 | 310 × 105 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 27:344 · INSTANCE | Usa questa quota → | 20 / 652 | 310 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 3 · I27:344;15:64 · TEXT | Continua | 16 / 16 | 278 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 2 · 27:345 · INSTANCE | Annulla e torna all’impianto | 20 / 730 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 3 · I27:345;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 1 · 27:346 · TEXT | SunSize · PCODING Software · Simulazione indicativa | 20 / 877 | 350 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 27:334 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 27:335 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 27:337 | Personalizza l’autoconsumo | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 27:338 | Indica la parte della produzione che pensi di usare mentre l’impianto produce. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I27:339;15:66 | Quota della produzione usata in casa | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| I27:339;15:68 | 40 % | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| I27:339;15:69 | Valore ammesso: da 0% a 100%. Non è una percentuale del consumo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 27:341 | Con la configurazione attuale | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 27:342 | 6.480 × 40% = 2.592 kWh/anno usati in casa.<br>Consumo annuo: 3.000 kWh. Da acquistare: 408 kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 27:343 | L’autoconsumo è limitato anche dal consumo annuo. È una stima annuale: nessuna simulazione oraria o specifica della batteria. Il preventivo o misure dei carichi possono aiutarti a scegliere la quota. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I27:344;15:64 | Usa questa quota → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I27:345;15:64 | Annulla e torna all’impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 27:346 | SunSize · PCODING Software · Simulazione indicativa | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Detrazione non impostata · V2 — 33:550

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-550) · **1440 × 2582 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:550 · FRAME | Desktop · Detrazione non impostata · V2 | 15000 / 3500 | 1440 × 2582 | VERTICAL; pad 64/64/64/64; gap 32; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 33:551 · FRAME | Intestazione | 64 / 64 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:552 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:553 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:554 · FRAME | Avanzamento | 64 / 127 | 1312 × 53 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:555 · FRAME | Passo 1 | 0 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 33:556 · TEXT | ✓  Consumi | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 33:557 · FRAME | Passo 2 | 442.67 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 33:558 · TEXT | ✓  Impianto | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 33:559 · FRAME | Passo 3 | 885.33 / 0 | 426.67 × 53 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 33:560 · TEXT | 03  Risultati | 16 / 16 | 394.67 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 1 · 33:561 · FRAME | Introduzione | 64 / 212 | 1312 × 119 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:562 · TEXT | 03 / RISULTATI | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:563 · TEXT | I numeri del tuo impianto. | 0 / 29 | 1312 × 58 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 33:564 · TEXT | Una stima spiegata, non una promessa di rend | 0 / 95 | 1312 × 24 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:565 · FRAME | Area principale | 64 / 363 | 1312 × 2073 | VERTICAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:566 · FRAME | Indicatori principali | 0 / 0 | 1312 × 314 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:1302 · TEXT | Tempo di rientro: senza e con detrazione | 0 / 0 | 1312 × 31 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:1303 · FRAME | Confronto fiscale | 0 / 47 | 1312 × 193 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1304 · FRAME | Rientro senza detrazione | 0 / 0 | 648 × 145 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1305 · TEXT | SENZA DETRAZIONE | 24 / 24 | 600 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1306 · TEXT | ≈ 7,0 anni | 24 / 57 | 600 × 31 | H/V FIXED/HUG | #115E59 → color/brand-dark; vincoli MIN/MIN |
| 5 · 33:1307 · TEXT | 997,92 €/anno dopo i costi inseriti. | 24 / 100 | 600 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 33:1308 · FRAME | Rientro con ipotesi fiscale | 664 / 0 | 648 × 193 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1309 · TEXT | CON LA DETRAZIONE IPOTIZZATA | 24 / 24 | 600 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:1310 · TEXT | Da impostare | 24 / 57 | 600 × 31 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:1311 · TEXT | Nessuna aliquota viene presunta. Inserisci solo un’ipotesi verificata per il tuo caso. | 24 / 100 | 600 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1312 · INSTANCE | Imposta ipotesi fiscale → | 24 / 133 | 600 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I33:1312;15:64 · TEXT | Continua | 16 / 7.5 | 568 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:1315 · TEXT | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | 0 / 256 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1316 · TEXT | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | 0 / 293 | 1312 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:582 · FRAME | Economia ed energia | 0 / 338 | 1312 × 530 | HORIZONTAL; pad 0/0/0/0; gap 24; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:583 · FRAME | Da dove arrivano i benefici | 0 / 0 | 644 × 530 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:584 · TEXT | Da dove arrivano i benefici | 28 / 28 | 588 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:585 · TEXT | Importi annuali · scenario centrale | 28 / 78 | 588 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:586 · FRAME | Risparmio sulla bolletta | 28 / 119 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:587 · TEXT | Risparmio sulla bolletta | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:588 · TEXT | +630,00 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:589 · FRAME | Ricavi energia immessa | 28 / 163 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:590 · TEXT | Ricavi energia immessa | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:591 · TEXT | +340,20 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:592 · FRAME | Recupero fiscale | 28 / 207 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:593 · TEXT | Recupero fiscale | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:594 · TEXT | 0,00 € | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:595 · FRAME | Beneficio prima dei costi esclusi | 28 / 251 | 588 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:596 · TEXT | Beneficio annuo: 970,20 € | 16 / 16 | 556 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 5 · 33:597 · TEXT | 630,00 € di risparmio + 340,20 € di ricavi. | 16 / 48 | 556 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:598 · FRAME | Costi non inclusi | 28 / 356 | 588 × 146 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:599 · TEXT | Costi ricorrenti: non inclusi | 16 / 16 | 556 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:600 · TEXT | Manutenzione, assicurazione e sostituzioni n | 16 / 46 | 556 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:601 · INSTANCE | Inserisci i costi → | 16 / 94 | 556 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I33:601;15:64 · TEXT | Continua | 16 / 7.5 | 524 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:602 · FRAME | Come si distribuisce l’energia | 668 / 0 | 644 × 415 | VERTICAL; pad 28/28/28/28; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:603 · TEXT | Come si distribuisce l’energia | 28 / 28 | 588 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:604 · TEXT | 6.300 kWh prodotti in un anno | 28 / 78 | 588 × 31 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:605 · FRAME | Ripartizione della produzione | 28 / 129 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 0; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip true |
| 5 · 33:606 · RECTANGLE | Usata in casa | 0 / 0 | 235.2 × 24 | H/V FIXED/FIXED | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 33:607 · RECTANGLE | Immessa in rete | 235.2 / 0 | 352.8 × 24 | H/V FIXED/FIXED | #0F766E → primitive/brand; vincoli MIN/MIN |
| 4 · 33:608 · FRAME | Usata in casa · 40% | 28 / 173 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:609 · TEXT | Usata in casa · 40% | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:610 · TEXT | 2.520 kWh | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:611 · FRAME | Immessa in rete · 60% | 28 / 217 | 588 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:612 · TEXT | Immessa in rete · 60% | 0 / 0 | 416 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:613 · TEXT | 3.780 kWh | 428 / 0 | 160 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:614 · FRAME | Energia ancora acquistata | 28 / 261 | 588 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:615 · TEXT | Da acquistare: 480 kWh/anno | 16 / 16 | 556 × 24 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 5 · 33:616 · TEXT | Il 16% dei 3.000 kWh consumati. I costi fiss | 16 / 48 | 556 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:617 · TEXT | La quota del 40% si riferisce alla produzion | 28 / 366 | 588 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 33:618 · FRAME | Quando recuperi l’investimento | 0 / 892 | 1312 × 582 | VERTICAL; pad 28/28/28/28; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:619 · TEXT | Quando recuperi l’investimento? | 28 / 28 | 1256 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 33:620 · TEXT | Saldo cumulato · euro, prima dei costi esclu | 28 / 74 | 1256 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:621 · FRAME | Saldo cumulato · scala anni ed euro | 28 / 111 | 1256 × 290 | NONE; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip true |
| 4 · 33:622 · VECTOR | Riferimento -6990 | 70 / 180.43 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 33:623 · TEXT | −6.990 | 0 / 170.43 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:624 · VECTOR | Riferimento 0 | 70 / 128 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #52676B → primitive/muted; vincoli MIN/MIN; tratteggio 4/4; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 33:625 · TEXT | 0 € | 0 / 118 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:626 · VECTOR | Riferimento 12000 | 70 / 38 | 1162 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 1162 0"}\\] |
| 4 · 33:627 · TEXT | +7.500 | 0 / 28 | 62 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:628 · VECTOR | Saldo senza detrazione | 70 / 68.16 | 1162 × 112.27 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #0F766E → color/brand; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 112.26599884033203 L 77.46666717529297 104.78160095214844 L 154.93333435058594 97.29720306396484 L 232.39999389648438 89.81279754638672 L 309.8666687011719 82.32839965820312 L 387.3333435058594 74.84400177001953 L 464.79998779296875 67.3595962524414 L 542.2666625976562 59.87519836425781 L 619.7333374023438 52.39080047607422 L 697.2000122070312 44.90639877319336 L 774.6666870117188 37.422000885009766 L 852.1333618164062 29.937599182128906 L 929.5999755859375 22.45319938659668 L 1007.066650390625 14.968799591064453 L 1084.5333251953125 7.484399795532227 L 1162 0"}\\] |
| 4 · 33:629 · TEXT | 0 | 56 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:630 · TEXT | 5 | 443.33 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:631 · TEXT | 10 | 830.67 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:632 · TEXT | 15 | 1218 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:633 · TEXT | anni | 1216 / 252 | 40 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:634 · ELLIPSE | Pareggio a circa 7,2 anni | 606.62 / 122 | 12 × 12 | H/V FIXED/FIXED | #FFCC45 → solar; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:635 · TEXT | Pareggio ≈ 7,2 anni | 381 / 0 | 400 × 21 | H/V FIXED/FIXED | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 3 · 33:636 · FRAME | Saldo dopo dieci anni | 28 / 417 | 1256 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:637 · TEXT | Saldo a 10 anni: +2.712,00 € | 16 / 16 | 1224 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:638 · TEXT | −6.990 € + 10 × 970,20 €. Prezzi e produzion | 16 / 48 | 1224 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:1429 · INSTANCE | Vedi i flussi anno per anno → | 28 / 518 | 1256 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:1429;15:64 · TEXT | Continua | 16 / 7.5 | 1224 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:639 · FRAME | Quanto cambia al variare della produzione | 0 / 1498 | 1312 × 298 | VERTICAL; pad 28/28/28/28; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:1432 · TEXT | E se autoconsumo e prezzi cambiano? | 28 / 28 | 1256 × 30 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:1433 · TEXT | Tre combinazioni illustrative: quota ±10 punti e prezzi ±10%. Produzione, investimento, costi e ipotesi fiscale restano invariati. Non sono probabilità o garanzie. | 28 / 74 | 1256 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1434 · FRAME | Scenari di autoconsumo e prezzi | 28 / 111 | 1256 × 159 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1435 · FRAME | Quota e prezzi ridotti | 0 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1436 · TEXT | Quota e prezzi ridotti | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:1437 · TEXT | ≈ 8,7 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1438 · TEXT | 30% richiesto · prezzi 0,225/0,081 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1439 · TEXT | 804,82 €/anno | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 33:1440 · FRAME | Ipotesi inserite | 422.67 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1441 · TEXT | Ipotesi inserite | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:1442 · TEXT | ≈ 7,0 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1443 · TEXT | 40% richiesto · prezzi 0,250/0,090 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1444 · TEXT | 997,92 €/anno | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 4 · 33:1445 · FRAME | Quota e prezzi aumentati | 845.33 / 0 | 410.67 × 159 | VERTICAL; pad 16/16/16/16; gap 10; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:1446 · TEXT | Quota e prezzi aumentati | 16 / 16 | 378.67 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 5 · 33:1447 · TEXT | ≈ 6,0 anni | 16 / 50 | 378.67 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 5 · 33:1448 · TEXT | 50% richiesto · prezzi 0,275/0,099 €/kWh | 16 / 91 | 378.67 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 5 · 33:1449 · TEXT | 1.169,52 €/anno | 16 / 122 | 378.67 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:656 · FRAME | Ipotesi formule e limiti | 0 / 1820 | 1312 × 173 | VERTICAL; pad 28/28/28/28; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:657 · TEXT | Ipotesi e limiti, in chiaro | 28 / 28 | 1256 × 30 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 33:658 · TEXT | Produzione: 4,5 kWp × 1.400 kWh/kWp. Autocon | 28 / 70 | 1256 × 21 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 3 · 33:659 · TEXT | Valori dello scenario iniziale, non tariffe | 28 / 103 | 1256 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 33:660 · FRAME | Azioni finali | 0 / 2017 | 1312 × 56 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:661 · INSTANCE | SunSize V2/Button | 0 / 0 | 648 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:661;15:64 · TEXT | Continua | 16 / 16 | 616 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 33:662 · INSTANCE | SunSize V2/Button | 664 / 0 | 648 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:662;15:64 · TEXT | Continua | 17 / 16 | 614 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 1 · 33:663 · FRAME | Footer | 64 / 2468 | 1312 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:664 · TEXT | SunSize · PCODING Software | 0 / 0 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 33:665 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 1312 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:552 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:553 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:556 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:558 | ✓  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:560 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:562 | 03 / RISULTATI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:563 | I numeri del tuo impianto. | Inter Semi Bold; 48px; LH 120% (57.6px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/display |
| 33:564 | Una stima spiegata, non una promessa di rendimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1302 | Tempo di rientro: senza e con detrazione | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1305 | SENZA DETRAZIONE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1306 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #115E59 → color/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1307 | 997,92 €/anno dopo i costi inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1309 | CON LA DETRAZIONE IPOTIZZATA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1310 | Da impostare | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1311 | Nessuna aliquota viene presunta. Inserisci solo un’ipotesi verificata per il tuo caso. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1312;15:64 | Imposta ipotesi fiscale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1315 | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1316 | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:584 | Da dove arrivano i benefici | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:585 | Importi annuali · scenario centrale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:587 | Risparmio sulla bolletta | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:588 | +648,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:590 | Ricavi energia immessa | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:591 | +349,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:593 | Recupero fiscale | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:594 | 0,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:596 | Beneficio annuo: 997,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:597 | 648,00 € di risparmio + 349,92 € di ricavi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:599 | Costi ricorrenti: non inclusi | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:600 | Manutenzione, assicurazione e sostituzioni non sono pari a zero: non sono modellate in questa stima. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:601;15:64 | Inserisci i costi → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:603 | Come si distribuisce l’energia | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:604 | 6.480 kWh prodotti in un anno | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:609 | Usata in casa · 40% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:610 | 2.592 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:612 | Immessa in rete · 60% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:613 | 3.888 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:615 | Da acquistare: 408 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:616 | Il 13,6% dei 3.000 kWh consumati. I costi fissi restano. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:617 | La quota del 40% si riferisce alla produzione, non ai tuoi consumi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:619 | Quando recuperi l’investimento? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:620 | Saldo cumulato · euro, prima dei costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:623 | −6.990 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:625 | 0 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:627 | +12.000 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:629 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:630 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:631 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:632 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:633 | anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:635 | Senza detrazione ≈ 7,0 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:637 | Saldo a 10 anni: +2.989,20 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:638 | −6.990 € + 10 × 997,92 €. Nessuna detrazione. Prezzi e produzione costanti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1429;15:64 | Vedi i flussi anno per anno → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1432 | E se autoconsumo e prezzi cambiano? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:1433 | Tre combinazioni illustrative: quota ±10 punti e prezzi ±10%. Produzione, investimento, costi e ipotesi fiscale restano invariati. Non sono probabilità o garanzie. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1436 | Quota e prezzi ridotti | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1437 | ≈ 8,7 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1438 | 30% richiesto · prezzi 0,225/0,081 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1439 | 804,82 €/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1441 | Ipotesi inserite | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1442 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1443 | 40% richiesto · prezzi 0,250/0,090 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1444 | 997,92 €/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1446 | Quota e prezzi aumentati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1447 | ≈ 6,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1448 | 50% richiesto · prezzi 0,275/0,099 €/kWh | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1449 | 1.169,52 €/anno | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:657 | Ipotesi e limiti, in chiaro | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:658 | Regione: Lazio. Resa regionale: 1.440 kWh/kWp/anno. Potenza: 4,5 kWp. Autoconsumo: 40%. Prezzo evitato: 0,25 €/kWh. Vendita: 0,09 €/kWh. Detrazione: 0%. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:659 | Resa: elaborazione SunSize su PVGIS 5.3/SARAH3 (2005–2023), sud, 30°, perdite di sistema 14%. Rientro semplice, senza finanziamento, inflazione, degrado, manutenzione o sostituzioni se non inserite. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:661;15:64 | Modifica e ricalcola → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I33:662;15:64 | Nuova simulazione | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 33:664 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:665 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Mobile · Detrazione non impostata · V2 — 33:666

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-666) · **390 × 2951 px** · sfondo #F4F7F6 → primitive/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:666 · FRAME | Mobile · Detrazione non impostata · V2 | 10000 / 3500 | 390 × 2951 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; vincoli MIN/MIN; clip false |
| 1 · 33:667 · FRAME | Intestazione | 20 / 16 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:668 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:669 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:670 · FRAME | Avanzamento | 20 / 63 | 350 × 41 | HORIZONTAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:671 · FRAME | Passo 1 | 0 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 33:672 · TEXT | ✓  Consumi | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 33:673 · FRAME | Passo 2 | 119.33 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 12; vincoli MIN/MIN; clip true |
| 3 · 33:674 · TEXT | ✓  Impianto | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 2 · 33:675 · FRAME | Passo 3 | 238.67 / 0 | 111.33 × 41 | VERTICAL; pad 10/10/10/10; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #0F766E → primitive/brand; r 12; vincoli MIN/MIN; clip true |
| 3 · 33:676 · TEXT | 03  Risultati | 10 / 10 | 91.33 × 21 | H/V FILL/HUG | #FFFFFF → primitive/surface; vincoli MIN/MIN |
| 1 · 33:677 · FRAME | Introduzione | 20 / 120 | 350 × 116 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:678 · TEXT | 03 / RISULTATI | 0 / 0 | 350 × 21 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:679 · TEXT | I numeri del tuo impianto. | 0 / 29 | 350 × 31 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 2 · 33:680 · TEXT | Una stima spiegata, non una promessa di rend | 0 / 68 | 350 × 48 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:681 · FRAME | Area principale | 20 / 252 | 350 × 2617 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:682 · FRAME | Indicatori principali | 0 / 0 | 350 × 630 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:1450 · TEXT | Tempo di rientro: senza e con detrazione | 0 / 0 | 350 × 60 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 3 · 33:1451 · FRAME | Rientro senza detrazione | 0 / 76 | 350 × 145 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → color/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1452 · TEXT | SENZA DETRAZIONE | 24 / 24 | 302 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 4 · 33:1453 · TEXT | ≈ 7,0 anni | 24 / 57 | 302 × 31 | H/V FIXED/HUG | #115E59 → color/brand-dark; vincoli MIN/MIN |
| 4 · 33:1454 · TEXT | 997,92 €/anno dopo i costi inseriti. | 24 / 100 | 302 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1455 · FRAME | Rientro con ipotesi fiscale | 0 / 237 | 350 × 214 | VERTICAL; pad 24/24/24/24; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:1456 · TEXT | CON LA DETRAZIONE IPOTIZZATA | 24 / 24 | 302 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 33:1457 · TEXT | Da impostare | 24 / 57 | 302 × 31 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 4 · 33:1458 · TEXT | Nessuna aliquota viene presunta. Inserisci solo un’ipotesi verificata per il tuo caso. | 24 / 100 | 302 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 4 · 33:1459 · INSTANCE | Imposta ipotesi fiscale → | 24 / 154 | 302 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 5 · I33:1459;15:64 · TEXT | Continua | 16 / 7.5 | 270 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:1462 · TEXT | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | 0 / 467 | 350 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 3 · 33:1463 · TEXT | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | 0 / 546 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:698 · INSTANCE | Modifica rapida risultati | 0 / 646 | 350 × 34 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip false |
| 3 · I33:698;15:64 · TEXT | Continua | 16 / 6.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:699 · FRAME | Economia ed energia | 0 / 696 | 350 × 917 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:700 · FRAME | Da dove arrivano i benefici | 0 / 0 | 350 × 503 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:701 · TEXT | Da dove arrivano i benefici | 20 / 16 | 310 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:702 · TEXT | Importi annuali · scenario centrale | 20 / 62 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:703 · FRAME | Risparmio sulla bolletta | 20 / 99 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:704 · TEXT | Risparmio sulla bolletta | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:705 · TEXT | +630,00 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:706 · FRAME | Ricavi energia immessa | 20 / 139 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:707 · TEXT | Ricavi energia immessa | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:708 · TEXT | +340,20 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:709 · FRAME | Recupero fiscale | 20 / 179 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:710 · TEXT | Recupero fiscale | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:711 · TEXT | 0,00 € | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:712 · FRAME | Beneficio prima dei costi esclusi | 20 / 219 | 310 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:713 · TEXT | Beneficio annuo: 970,20 € | 16 / 16 | 278 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 5 · 33:714 · TEXT | 630,00 € di risparmio + 340,20 € di ricavi. | 16 / 48 | 278 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:715 · FRAME | Costi non inclusi | 20 / 341 | 310 × 146 | VERTICAL; pad 16/16/16/16; gap 6; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:716 · TEXT | Costi ricorrenti: non inclusi | 16 / 16 | 278 × 24 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:717 · TEXT | Manutenzione, assicurazione e sostituzioni n | 16 / 46 | 278 × 42 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 5 · 33:718 · INSTANCE | Inserisci i costi → | 16 / 94 | 278 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 6 · I33:718;15:64 · TEXT | Continua | 16 / 7.5 | 246 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:719 · FRAME | Come si distribuisce l’energia | 0 / 519 | 350 × 398 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:720 · TEXT | Come si distribuisce l’energia | 20 / 16 | 310 × 30 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:721 · TEXT | 6.300 kWh prodotti in un anno | 20 / 62 | 310 × 62 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:722 · FRAME | Ripartizione della produzione | 20 / 140 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 0; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip true |
| 5 · 33:723 · RECTANGLE | Usata in casa | 0 / 0 | 124 × 24 | H/V FIXED/FIXED | #FFCC45 → solar; vincoli MIN/MIN |
| 5 · 33:724 · RECTANGLE | Immessa in rete | 124 / 0 | 186 × 24 | H/V FIXED/FIXED | #0F766E → primitive/brand; vincoli MIN/MIN |
| 4 · 33:725 · FRAME | Usata in casa · 40% | 20 / 180 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:726 · TEXT | Usata in casa · 40% | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:727 · TEXT | 2.520 kWh | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:728 · FRAME | Immessa in rete · 60% | 20 / 220 | 310 × 24 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 5 · 33:729 · TEXT | Immessa in rete · 60% | 0 / 0 | 186 × 24 | H/V FIXED/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 5 · 33:730 · TEXT | 3.780 kWh | 198 / 0 | 112 × 24 | H/V FIXED/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 4 · 33:731 · FRAME | Energia ancora acquistata | 20 / 260 | 310 × 85 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → primitive/background; r 20; vincoli MIN/MIN; clip true |
| 5 · 33:732 · TEXT | Da acquistare: 480 kWh/anno | 16 / 16 | 278 × 24 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 5 · 33:733 · TEXT | Il 16% dei 3.000 kWh consumati. I costi fiss | 16 / 48 | 278 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:734 · TEXT | La quota del 40% si riferisce alla produzion | 20 / 361 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 33:735 · FRAME | Quando recuperi l’investimento | 0 / 1629 | 350 × 609 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:736 · TEXT | Quando recuperi l’investimento? | 20 / 16 | 310 × 60 | H/V FILL/HUG | #203738 → primitive/foreground; vincoli MIN/MIN |
| 3 · 33:737 · TEXT | Saldo cumulato · euro, prima dei costi esclu | 20 / 92 | 310 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:738 · FRAME | Saldo cumulato · scala anni ed euro | 20 / 129 | 310 × 290 | NONE; H/V FIXED/FIXED | nessuno; vincoli MIN/MIN; clip true |
| 4 · 33:739 · VECTOR | Riferimento -6990 | 56 / 180.43 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 33:740 · TEXT | −6.990 | 0 / 170.43 | 48 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:741 · VECTOR | Riferimento 0 | 56 / 128 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #52676B → primitive/muted; vincoli MIN/MIN; tratteggio 4/4; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 33:742 · TEXT | 0 € | 0 / 118 | 48 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:743 · VECTOR | Riferimento 12000 | 56 / 38 | 240 × 0 | H/V FIXED/FIXED | nessuno; bordo 1px CENTER: #DCE5E2 → primitive/border; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONZERO","data":"M 0 0 L 240 0"}\\] |
| 4 · 33:744 · TEXT | +7.500 | 0 / 28 | 48 × 42 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:745 · VECTOR | Saldo senza detrazione | 56 / 68.16 | 240 × 112.27 | H/V FIXED/FIXED | nessuno; bordo 3px CENTER: #0F766E → color/brand; vincoli MIN/MIN; tracciati \\[{"windingRule":"NONE","data":"M 0 112.26599884033203 L 16 104.78160095214844 L 32 97.29720306396484 L 48 89.81279754638672 L 64 82.32839965820312 L 80 74.84400177001953 L 96 67.3595962524414 L 112 59.87519836425781 L 128 52.39080047607422 L 144 44.90639877319336 L 160 37.422000885009766 L 176 29.937599182128906 L 192 22.45319938659668 L 208 14.968799591064453 L 224 7.484399795532227 L 240 0"}\\] |
| 4 · 33:746 · TEXT | 0 | 42 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:747 · TEXT | 5 | 122 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:748 · TEXT | 10 | 202 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:749 · TEXT | 15 | 282 / 224 | 28 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:750 · TEXT | anni | 270 / 252 | 40 × 21 | H/V FIXED/FIXED | #52676B → primitive/muted; vincoli MIN/MIN |
| 4 · 33:751 · ELLIPSE | Pareggio a circa 7,2 anni | 162.07 / 122 | 12 × 12 | H/V FIXED/FIXED | #FFCC45 → solar; bordo 2px INSIDE: #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:752 · TEXT | Pareggio ≈ 7,2 anni | 56 / 0 | 240 × 21 | H/V FIXED/FIXED | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 3 · 33:753 · FRAME | Saldo dopo dieci anni | 20 / 435 | 310 × 106 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #EDF7F3 → primitive/brand-soft; r 20; vincoli MIN/MIN; clip true |
| 4 · 33:754 · TEXT | Saldo a 10 anni: +2.712,00 € | 16 / 16 | 278 × 24 | H/V FILL/HUG | #115E59 → primitive/brand-dark; vincoli MIN/MIN |
| 4 · 33:755 · TEXT | −6.990 € + 10 × 970,20 €. Prezzi e produzion | 16 / 48 | 278 × 42 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 3 · 33:1554 · INSTANCE | Vedi i flussi anno per anno → | 20 / 557 | 310 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:1554;15:64 · TEXT | Continua | 16 / 7.5 | 278 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:756 · FRAME | Quanto cambia al variare della produzione | 0 / 2254 | 350 × 114 | VERTICAL; pad 16/20/16/20; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → primitive/surface; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:757 · TEXT | Scenari: autoconsumo e prezzi + | 20 / 16 | 310 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:758 · TEXT | Quota ±10 punti · prezzi ±10% · ipotesi illustrative | 20 / 56 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:759 · FRAME | Ipotesi formule e limiti | 0 / 2384 | 350 × 89 | VERTICAL; pad 16/20/16/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 3 · 33:760 · TEXT | Ipotesi e limiti, in chiaro + | 20 / 16 | 310 × 24 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 3 · 33:761 · TEXT | PVGIS, prezzi, detrazione e costi esclusi | 20 / 52 | 310 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:762 · FRAME | Azioni finali | 0 / 2489 | 350 × 128 | VERTICAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 3 · 33:763 · INSTANCE | SunSize V2/Button | 0 / 0 | 350 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #0F766E → color/brand; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:763;15:64 · TEXT | Continua | 16 / 16 | 318 × 24 | H/V FILL/HUG | #FFFFFF → color/surface; vincoli MIN/MIN |
| 3 · 33:764 · INSTANCE | SunSize V2/Button | 0 / 72 | 350 × 56 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | #FFFFFF → primitive/surface; bordo 1px INSIDE: #DCE5E2 → primitive/border; r 12; vincoli MIN/MIN; clip false |
| 4 · I33:764;15:64 · TEXT | Continua | 17 / 16 | 316 × 24 | H/V FILL/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 1 · 33:765 · FRAME | Footer | 20 / 2885 | 350 × 50 | VERTICAL; pad 0/0/0/0; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:766 · TEXT | SunSize · PCODING Software | 0 / 0 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 2 · 33:767 · TEXT | Simulazione indicativa, non un preventivo. | 0 / 29 | 350 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:668 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:669 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:672 | ✓  Consumi | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:674 | ✓  Impianto | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:676 | 03  Risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #FFFFFF → primitive/surface; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:678 | 03 / RISULTATI | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:679 | I numeri del tuo impianto. | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:680 | Una stima spiegata, non una promessa di rendimento. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1450 | Tempo di rientro: senza e con detrazione | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:1452 | SENZA DETRAZIONE | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1453 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #115E59 → color/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1454 | 997,92 €/anno dopo i costi inseriti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1456 | CON LA DETRAZIONE IPOTIZZATA | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1457 | Da impostare | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1458 | Nessuna aliquota viene presunta. Inserisci solo un’ipotesi verificata per il tuo caso. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1459;15:64 | Imposta ipotesi fiscale → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:1462 | Esborso completo: 6.990 € in entrambi i casi. Stessa energia e stessi costi; cambia soltanto il recupero fiscale. Costi ricorrenti esclusi nell’esempio. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1463 | La detrazione non è uno sconto immediato. Ripartizione ipotizzata in 10 anni con quote interamente recuperabili: verifica aliquota, requisiti, spese ammesse, massimali e capienza fiscale. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:698;15:64 | Modifica le ipotesi e ricalcola → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:701 | Da dove arrivano i benefici | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:702 | Importi annuali · scenario centrale | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:704 | Risparmio sulla bolletta | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:705 | +648,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:707 | Ricavi energia immessa | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:708 | +349,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:710 | Recupero fiscale | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:711 | 0,00 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:713 | Beneficio annuo: 997,92 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:714 | 648,00 € di risparmio + 349,92 € di ricavi. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:716 | Costi ricorrenti: non inclusi | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:717 | Manutenzione, assicurazione e sostituzioni sono escluse, non gratuite. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:718;15:64 | Inserisci i costi → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:720 | Come si distribuisce l’energia | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:721 | 6.480 kWh prodotti in un anno | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:726 | Usata in casa · 40% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:727 | 2.592 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:729 | Immessa in rete · 60% | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:730 | 3.888 kWh | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/strong |
| 33:732 | Da acquistare: 408 kWh/anno | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:733 | Il 13,6% dei consumi. I costi fissi restano. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:734 | Il 40% è una quota della produzione. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:736 | Quando recuperi l’investimento? | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #203738 → primitive/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 33:737 | Saldo cumulato · euro, prima dei costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:740 | −6.990 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:742 | 0 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:744 | +12.000 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:746 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:747 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:748 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:749 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:750 | anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | RIGHT/TOP; HEIGHT; SunSize V2/micro |
| 33:752 | Senza detrazione ≈ 7,0 anni | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/micro |
| 33:754 | Saldo a 10 anni: +2.989,20 € | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #115E59 → primitive/brand-dark; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:755 | −6.990 € + 10 × 997,92 €. Nessuna detrazione. Prezzi e produzione costanti. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1554;15:64 | Vedi i flussi anno per anno → | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |
| 33:757 | Scenari: autoconsumo e prezzi  + | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:758 | Quota ±10 punti · prezzi ±10% · ipotesi illustrative | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:760 | Ipotesi e limiti, in chiaro  + | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:761 | PVGIS, prezzi, detrazione e costi esclusi | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:763;15:64 | Modifica e ricalcola → | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #FFFFFF → color/surface; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| I33:764;15:64 | Nuova simulazione | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; SunSize V2/strong |
| 33:766 | SunSize · PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:767 | Simulazione indicativa, non un preventivo. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |

### Desktop · Flussi annuali · V2 — 33:789

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-789) · **1440 × 1028 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:789 · FRAME | Desktop · Flussi annuali · V2 | 15000 / 0 | 1440 × 1028 | VERTICAL; pad 48/48/48/48; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 33:790 · FRAME | Intestazione | 48 / 48 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:791 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:792 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:793 · TEXT | Come si recuperano i 6.990 €? | 48 / 99 | 1344 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:794 · TEXT | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | 48 / 162 | 1344 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:795 · FRAME | Intestazioni | 48 / 206 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:796 · TEXT | Anno | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:797 · TEXT | Operativo annuo | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:798 · TEXT | Quota fiscale | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:799 · TEXT | Saldo senza | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:800 · TEXT | Saldo con | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:801 · FRAME | Anno 0 | 48 / 247 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:802 · TEXT | 0 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:803 · TEXT | -6.990,00 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:804 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:805 · TEXT | -6.990,00 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:806 · TEXT | -6.990,00 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:807 · FRAME | Anno 1 | 48 / 288 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:808 · TEXT | 1 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:809 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:810 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:811 · TEXT | -5.992,08 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:812 · TEXT | -5.642,58 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:813 · FRAME | Anno 2 | 48 / 329 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:814 · TEXT | 2 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:815 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:816 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:817 · TEXT | -4.994,16 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:818 · TEXT | -4.295,16 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:819 · FRAME | Anno 3 | 48 / 370 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:820 · TEXT | 3 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:821 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:822 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:823 · TEXT | -3.996,24 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:824 · TEXT | -2.947,74 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:825 · FRAME | Anno 4 | 48 / 411 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:826 · TEXT | 4 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:827 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:828 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:829 · TEXT | -2.998,32 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:830 · TEXT | -1.600,32 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:831 · FRAME | Anno 5 | 48 / 452 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:832 · TEXT | 5 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:833 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:834 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:835 · TEXT | -2.000,40 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:836 · TEXT | -252,90 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:837 · FRAME | Anno 6 | 48 / 493 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:838 · TEXT | 6 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:839 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:840 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:841 · TEXT | -1.002,48 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:842 · TEXT | 1.094,52 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:843 · FRAME | Anno 7 | 48 / 534 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:844 · TEXT | 7 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:845 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:846 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:847 · TEXT | -4,56 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:848 · TEXT | 2.441,94 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:849 · FRAME | Anno 8 | 48 / 575 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:850 · TEXT | 8 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:851 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:852 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:853 · TEXT | 993,36 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:854 · TEXT | 3.789,36 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:855 · FRAME | Anno 9 | 48 / 616 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:856 · TEXT | 9 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:857 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:858 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:859 · TEXT | 1.991,28 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:860 · TEXT | 5.136,78 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:861 · FRAME | Anno 10 | 48 / 657 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:862 · TEXT | 10 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:863 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:864 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:865 · TEXT | 2.989,20 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:866 · TEXT | 6.484,20 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:867 · FRAME | Anno 11 | 48 / 698 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:868 · TEXT | 11 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:869 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:870 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:871 · TEXT | 3.987,12 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:872 · TEXT | 7.482,12 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:873 · FRAME | Anno 12 | 48 / 739 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:874 · TEXT | 12 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:875 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:876 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:877 · TEXT | 4.985,04 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:878 · TEXT | 8.480,04 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:879 · FRAME | Anno 13 | 48 / 780 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:880 · TEXT | 13 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:881 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:882 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:883 · TEXT | 5.982,96 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:884 · TEXT | 9.477,96 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:885 · FRAME | Anno 14 | 48 / 821 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:886 · TEXT | 14 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:887 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:888 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:889 · TEXT | 6.980,88 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:890 · TEXT | 10.475,88 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:891 · FRAME | Anno 15 | 48 / 862 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:892 · TEXT | 15 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:893 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:894 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:895 · TEXT | 7.978,80 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:896 · TEXT | 11.473,80 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:897 · TEXT | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | 48 / 903 | 1344 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:898 · INSTANCE | ← Torna ai risultati | 48 / 944 | 500 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I33:898;15:64 · TEXT | Continua | 16 / 7.5 | 468 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:791 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:792 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:793 | Come si recuperano i 6.990 €? | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 33:794 | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:796 | Anno | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:797 | Operativo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:798 | Quota fiscale | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:799 | Saldo senza | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:800 | Saldo con | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:802 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:803 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:804 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:805 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:806 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:808 | 1 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:809 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:810 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:811 | -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:812 | -5.642,58 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:814 | 2 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:815 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:816 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:817 | -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:818 | -4.295,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:820 | 3 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:821 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:822 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:823 | -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:824 | -2.947,74 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:826 | 4 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:827 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:828 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:829 | -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:830 | -1.600,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:832 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:833 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:834 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:835 | -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:836 | -252,90 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:838 | 6 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:839 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:840 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:841 | -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:842 | 1.094,52 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:844 | 7 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:845 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:846 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:847 | -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:848 | 2.441,94 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:850 | 8 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:851 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:852 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:853 | 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:854 | 3.789,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:856 | 9 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:857 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:858 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:859 | 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:860 | 5.136,78 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:862 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:863 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:864 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:865 | 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:866 | 6.484,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:868 | 11 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:869 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:870 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:871 | 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:872 | 7.482,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:874 | 12 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:875 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:876 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:877 | 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:878 | 8.480,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:880 | 13 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:881 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:882 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:883 | 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:884 | 9.477,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:886 | 14 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:887 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:888 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:889 | 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:890 | 10.475,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:892 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:893 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:894 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:895 | 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:896 | 11.473,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:897 | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:898;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Flussi annuali · V2 — 33:942

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-942) · **390 × 3013 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:942 · FRAME | Mobile · Flussi annuali · V2 | 10480 / 0 | 390 × 3013 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 33:943 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:944 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:945 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:946 · TEXT | Come si recuperano i 6.990 €? | 20 / 71 | 350 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:947 · TEXT | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | 20 / 153 | 350 × 72 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:948 · FRAME | Anno 0 | 20 / 245 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:949 · TEXT | Anno 0 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:950 · TEXT | Esborso completo: 6.990 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:951 · TEXT | Saldo senza: -6.990,00 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:952 · TEXT | Saldo con ipotesi: -6.990,00 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:953 · FRAME | Anno 1 | 20 / 408 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:954 · TEXT | Anno 1 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:955 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:956 · TEXT | Saldo senza: -5.992,08 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:957 · TEXT | Saldo con ipotesi: -5.642,58 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:958 · FRAME | Anno 2 | 20 / 571 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:959 · TEXT | Anno 2 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:960 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:961 · TEXT | Saldo senza: -4.994,16 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:962 · TEXT | Saldo con ipotesi: -4.295,16 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:963 · FRAME | Anno 3 | 20 / 734 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:964 · TEXT | Anno 3 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:965 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:966 · TEXT | Saldo senza: -3.996,24 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:967 · TEXT | Saldo con ipotesi: -2.947,74 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:968 · FRAME | Anno 4 | 20 / 897 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:969 · TEXT | Anno 4 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:970 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:971 · TEXT | Saldo senza: -2.998,32 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:972 · TEXT | Saldo con ipotesi: -1.600,32 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:973 · FRAME | Anno 5 | 20 / 1060 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:974 · TEXT | Anno 5 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:975 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:976 · TEXT | Saldo senza: -2.000,40 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:977 · TEXT | Saldo con ipotesi: -252,90 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:978 · FRAME | Anno 6 | 20 / 1223 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:979 · TEXT | Anno 6 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:980 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:981 · TEXT | Saldo senza: -1.002,48 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:982 · TEXT | Saldo con ipotesi: 1.094,52 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:983 · FRAME | Anno 7 | 20 / 1386 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:984 · TEXT | Anno 7 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:985 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:986 · TEXT | Saldo senza: -4,56 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:987 · TEXT | Saldo con ipotesi: 2.441,94 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:988 · FRAME | Anno 8 | 20 / 1549 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:989 · TEXT | Anno 8 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:990 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:991 · TEXT | Saldo senza: 993,36 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:992 · TEXT | Saldo con ipotesi: 3.789,36 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:993 · FRAME | Anno 9 | 20 / 1712 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:994 · TEXT | Anno 9 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:995 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:996 · TEXT | Saldo senza: 1.991,28 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:997 · TEXT | Saldo con ipotesi: 5.136,78 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:998 · FRAME | Anno 10 | 20 / 1875 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:999 · TEXT | Anno 10 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1000 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1001 · TEXT | Saldo senza: 2.989,20 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1002 · TEXT | Saldo con ipotesi: 6.484,20 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1003 · FRAME | Anno 11 | 20 / 2038 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1004 · TEXT | Anno 11 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1005 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1006 · TEXT | Saldo senza: 3.987,12 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1007 · TEXT | Saldo con ipotesi: 7.482,12 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1008 · FRAME | Anno 12 | 20 / 2201 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1009 · TEXT | Anno 12 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1010 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1011 · TEXT | Saldo senza: 4.985,04 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1012 · TEXT | Saldo con ipotesi: 8.480,04 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1013 · FRAME | Anno 13 | 20 / 2364 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1014 · TEXT | Anno 13 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1015 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1016 · TEXT | Saldo senza: 5.982,96 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1017 · TEXT | Saldo con ipotesi: 9.477,96 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1018 · FRAME | Anno 14 | 20 / 2527 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1019 · TEXT | Anno 14 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1020 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1021 · TEXT | Saldo senza: 6.980,88 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1022 · TEXT | Saldo con ipotesi: 10.475,88 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1023 · FRAME | Anno 15 | 20 / 2690 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1024 · TEXT | Anno 15 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1025 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1026 · TEXT | Saldo senza: 7.978,80 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1027 · TEXT | Saldo con ipotesi: 11.473,80 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1028 · TEXT | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | 20 / 2853 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1029 · INSTANCE | ← Torna ai risultati | 20 / 2957 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I33:1029;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:944 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:945 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:946 | Come si recuperano i 6.990 €? | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:947 | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:949 | Anno 0 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:950 | Esborso completo: 6.990 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:951 | Saldo senza: -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:952 | Saldo con ipotesi: -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:954 | Anno 1 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:955 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:956 | Saldo senza: -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:957 | Saldo con ipotesi: -5.642,58 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:959 | Anno 2 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:960 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:961 | Saldo senza: -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:962 | Saldo con ipotesi: -4.295,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:964 | Anno 3 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:965 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:966 | Saldo senza: -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:967 | Saldo con ipotesi: -2.947,74 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:969 | Anno 4 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:970 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:971 | Saldo senza: -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:972 | Saldo con ipotesi: -1.600,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:974 | Anno 5 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:975 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:976 | Saldo senza: -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:977 | Saldo con ipotesi: -252,90 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:979 | Anno 6 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:980 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:981 | Saldo senza: -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:982 | Saldo con ipotesi: 1.094,52 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:984 | Anno 7 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:985 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:986 | Saldo senza: -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:987 | Saldo con ipotesi: 2.441,94 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:989 | Anno 8 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:990 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:991 | Saldo senza: 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:992 | Saldo con ipotesi: 3.789,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:994 | Anno 9 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:995 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:996 | Saldo senza: 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:997 | Saldo con ipotesi: 5.136,78 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:999 | Anno 10 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1000 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1001 | Saldo senza: 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1002 | Saldo con ipotesi: 6.484,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1004 | Anno 11 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1005 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1006 | Saldo senza: 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1007 | Saldo con ipotesi: 7.482,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1009 | Anno 12 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1010 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1011 | Saldo senza: 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1012 | Saldo con ipotesi: 8.480,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1014 | Anno 13 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1015 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1016 | Saldo senza: 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1017 | Saldo con ipotesi: 9.477,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1019 | Anno 14 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1020 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1021 | Saldo senza: 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1022 | Saldo con ipotesi: 10.475,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1024 | Anno 15 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1025 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1026 | Saldo senza: 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1027 | Saldo con ipotesi: 11.473,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1028 | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1029;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Desktop · Flussi annuali · resa manuale · V2 — 33:1056

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1056) · **1440 × 1028 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:1056 · FRAME | Desktop · Flussi annuali · resa manuale · V2 | 18120 / 0 | 1440 × 1028 | VERTICAL; pad 48/48/48/48; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 33:1057 · FRAME | Intestazione | 48 / 48 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:1058 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:1059 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:1060 · TEXT | Come si recuperano i 6.990 €? | 48 / 99 | 1344 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1061 · TEXT | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | 48 / 162 | 1344 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1062 · FRAME | Intestazioni | 48 / 206 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1063 · TEXT | Anno | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1064 · TEXT | Operativo annuo | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1065 · TEXT | Quota fiscale | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1066 · TEXT | Saldo senza | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1067 · TEXT | Saldo con | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1068 · FRAME | Anno 0 | 48 / 247 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1069 · TEXT | 0 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1070 · TEXT | -6.990,00 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1071 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1072 · TEXT | -6.990,00 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1073 · TEXT | -6.990,00 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1074 · FRAME | Anno 1 | 48 / 288 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1075 · TEXT | 1 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1076 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1077 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1078 · TEXT | -5.992,08 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1079 · TEXT | -5.642,58 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1080 · FRAME | Anno 2 | 48 / 329 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1081 · TEXT | 2 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1082 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1083 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1084 · TEXT | -4.994,16 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1085 · TEXT | -4.295,16 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1086 · FRAME | Anno 3 | 48 / 370 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1087 · TEXT | 3 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1088 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1089 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1090 · TEXT | -3.996,24 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1091 · TEXT | -2.947,74 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1092 · FRAME | Anno 4 | 48 / 411 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1093 · TEXT | 4 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1094 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1095 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1096 · TEXT | -2.998,32 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1097 · TEXT | -1.600,32 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1098 · FRAME | Anno 5 | 48 / 452 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1099 · TEXT | 5 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1100 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1101 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1102 · TEXT | -2.000,40 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1103 · TEXT | -252,90 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1104 · FRAME | Anno 6 | 48 / 493 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1105 · TEXT | 6 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1106 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1107 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1108 · TEXT | -1.002,48 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1109 · TEXT | 1.094,52 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1110 · FRAME | Anno 7 | 48 / 534 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1111 · TEXT | 7 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1112 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1113 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1114 · TEXT | -4,56 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1115 · TEXT | 2.441,94 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1116 · FRAME | Anno 8 | 48 / 575 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1117 · TEXT | 8 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1118 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1119 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1120 · TEXT | 993,36 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1121 · TEXT | 3.789,36 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1122 · FRAME | Anno 9 | 48 / 616 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1123 · TEXT | 9 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1124 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1125 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1126 · TEXT | 1.991,28 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1127 · TEXT | 5.136,78 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1128 · FRAME | Anno 10 | 48 / 657 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1129 · TEXT | 10 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1130 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1131 · TEXT | 349,50 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1132 · TEXT | 2.989,20 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1133 · TEXT | 6.484,20 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1134 · FRAME | Anno 11 | 48 / 698 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1135 · TEXT | 11 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1136 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1137 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1138 · TEXT | 3.987,12 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1139 · TEXT | 7.482,12 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1140 · FRAME | Anno 12 | 48 / 739 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1141 · TEXT | 12 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1142 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1143 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1144 · TEXT | 4.985,04 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1145 · TEXT | 8.480,04 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1146 · FRAME | Anno 13 | 48 / 780 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1147 · TEXT | 13 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1148 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1149 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1150 · TEXT | 5.982,96 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1151 · TEXT | 9.477,96 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1152 · FRAME | Anno 14 | 48 / 821 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1153 · TEXT | 14 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1154 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1155 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1156 · TEXT | 6.980,88 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1157 · TEXT | 10.475,88 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1158 · FRAME | Anno 15 | 48 / 862 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1159 · TEXT | 15 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1160 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1161 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1162 · TEXT | 7.978,80 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1163 · TEXT | 11.473,80 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1164 · TEXT | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | 48 / 903 | 1344 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1165 · INSTANCE | ← Torna ai risultati | 48 / 944 | 500 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I33:1165;15:64 · TEXT | Continua | 16 / 7.5 | 468 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:1058 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1059 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1060 | Come si recuperano i 6.990 €? | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 33:1061 | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1063 | Anno | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1064 | Operativo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1065 | Quota fiscale | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1066 | Saldo senza | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1067 | Saldo con | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1069 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1070 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1071 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1072 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1073 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1075 | 1 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1076 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1077 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1078 | -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1079 | -5.642,58 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1081 | 2 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1082 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1083 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1084 | -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1085 | -4.295,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1087 | 3 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1088 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1089 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1090 | -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1091 | -2.947,74 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1093 | 4 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1094 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1095 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1096 | -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1097 | -1.600,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1099 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1100 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1101 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1102 | -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1103 | -252,90 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1105 | 6 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1106 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1107 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1108 | -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1109 | 1.094,52 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1111 | 7 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1112 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1113 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1114 | -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1115 | 2.441,94 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1117 | 8 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1118 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1119 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1120 | 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1121 | 3.789,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1123 | 9 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1124 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1125 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1126 | 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1127 | 5.136,78 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1129 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1130 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1131 | 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1132 | 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1133 | 6.484,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1135 | 11 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1136 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1137 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1138 | 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1139 | 7.482,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1141 | 12 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1142 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1143 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1144 | 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1145 | 8.480,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1147 | 13 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1148 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1149 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1150 | 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1151 | 9.477,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1153 | 14 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1154 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1155 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1156 | 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1157 | 10.475,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1159 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1160 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1161 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1162 | 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1163 | 11.473,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1164 | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1165;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Flussi annuali · resa manuale · V2 — 33:1209

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1209) · **390 × 3013 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:1209 · FRAME | Mobile · Flussi annuali · resa manuale · V2 | 11440 / 0 | 390 × 3013 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 33:1210 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:1211 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:1212 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:1213 · TEXT | Come si recuperano i 6.990 €? | 20 / 71 | 350 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1214 · TEXT | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | 20 / 153 | 350 × 72 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1215 · FRAME | Anno 0 | 20 / 245 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1216 · TEXT | Anno 0 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1217 · TEXT | Esborso completo: 6.990 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1218 · TEXT | Saldo senza: -6.990,00 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1219 · TEXT | Saldo con ipotesi: -6.990,00 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1220 · FRAME | Anno 1 | 20 / 408 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1221 · TEXT | Anno 1 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1222 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1223 · TEXT | Saldo senza: -5.992,08 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1224 · TEXT | Saldo con ipotesi: -5.642,58 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1225 · FRAME | Anno 2 | 20 / 571 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1226 · TEXT | Anno 2 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1227 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1228 · TEXT | Saldo senza: -4.994,16 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1229 · TEXT | Saldo con ipotesi: -4.295,16 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1230 · FRAME | Anno 3 | 20 / 734 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1231 · TEXT | Anno 3 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1232 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1233 · TEXT | Saldo senza: -3.996,24 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1234 · TEXT | Saldo con ipotesi: -2.947,74 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1235 · FRAME | Anno 4 | 20 / 897 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1236 · TEXT | Anno 4 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1237 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1238 · TEXT | Saldo senza: -2.998,32 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1239 · TEXT | Saldo con ipotesi: -1.600,32 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1240 · FRAME | Anno 5 | 20 / 1060 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1241 · TEXT | Anno 5 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1242 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1243 · TEXT | Saldo senza: -2.000,40 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1244 · TEXT | Saldo con ipotesi: -252,90 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1245 · FRAME | Anno 6 | 20 / 1223 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1246 · TEXT | Anno 6 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1247 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1248 · TEXT | Saldo senza: -1.002,48 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1249 · TEXT | Saldo con ipotesi: 1.094,52 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1250 · FRAME | Anno 7 | 20 / 1386 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1251 · TEXT | Anno 7 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1252 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1253 · TEXT | Saldo senza: -4,56 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1254 · TEXT | Saldo con ipotesi: 2.441,94 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1255 · FRAME | Anno 8 | 20 / 1549 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1256 · TEXT | Anno 8 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1257 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1258 · TEXT | Saldo senza: 993,36 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1259 · TEXT | Saldo con ipotesi: 3.789,36 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1260 · FRAME | Anno 9 | 20 / 1712 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1261 · TEXT | Anno 9 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1262 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1263 · TEXT | Saldo senza: 1.991,28 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1264 · TEXT | Saldo con ipotesi: 5.136,78 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1265 · FRAME | Anno 10 | 20 / 1875 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1266 · TEXT | Anno 10 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1267 · TEXT | Operativo: 997,92 € · fisco: 349,50 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1268 · TEXT | Saldo senza: 2.989,20 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1269 · TEXT | Saldo con ipotesi: 6.484,20 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1270 · FRAME | Anno 11 | 20 / 2038 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1271 · TEXT | Anno 11 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1272 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1273 · TEXT | Saldo senza: 3.987,12 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1274 · TEXT | Saldo con ipotesi: 7.482,12 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1275 · FRAME | Anno 12 | 20 / 2201 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1276 · TEXT | Anno 12 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1277 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1278 · TEXT | Saldo senza: 4.985,04 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1279 · TEXT | Saldo con ipotesi: 8.480,04 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1280 · FRAME | Anno 13 | 20 / 2364 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1281 · TEXT | Anno 13 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1282 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1283 · TEXT | Saldo senza: 5.982,96 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1284 · TEXT | Saldo con ipotesi: 9.477,96 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1285 · FRAME | Anno 14 | 20 / 2527 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1286 · TEXT | Anno 14 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1287 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1288 · TEXT | Saldo senza: 6.980,88 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1289 · TEXT | Saldo con ipotesi: 10.475,88 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1290 · FRAME | Anno 15 | 20 / 2690 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1291 · TEXT | Anno 15 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1292 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1293 · TEXT | Saldo senza: 7.978,80 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1294 · TEXT | Saldo con ipotesi: 11.473,80 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1295 · TEXT | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | 20 / 2853 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1296 · INSTANCE | ← Torna ai risultati | 20 / 2957 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I33:1296;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:1211 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1212 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1213 | Come si recuperano i 6.990 €? | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1214 | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1216 | Anno 0 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1217 | Esborso completo: 6.990 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1218 | Saldo senza: -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1219 | Saldo con ipotesi: -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1221 | Anno 1 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1222 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1223 | Saldo senza: -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1224 | Saldo con ipotesi: -5.642,58 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1226 | Anno 2 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1227 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1228 | Saldo senza: -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1229 | Saldo con ipotesi: -4.295,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1231 | Anno 3 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1232 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1233 | Saldo senza: -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1234 | Saldo con ipotesi: -2.947,74 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1236 | Anno 4 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1237 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1238 | Saldo senza: -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1239 | Saldo con ipotesi: -1.600,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1241 | Anno 5 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1242 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1243 | Saldo senza: -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1244 | Saldo con ipotesi: -252,90 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1246 | Anno 6 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1247 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1248 | Saldo senza: -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1249 | Saldo con ipotesi: 1.094,52 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1251 | Anno 7 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1252 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1253 | Saldo senza: -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1254 | Saldo con ipotesi: 2.441,94 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1256 | Anno 8 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1257 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1258 | Saldo senza: 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1259 | Saldo con ipotesi: 3.789,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1261 | Anno 9 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1262 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1263 | Saldo senza: 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1264 | Saldo con ipotesi: 5.136,78 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1266 | Anno 10 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1267 | Operativo: 997,92 € · fisco: 349,50 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1268 | Saldo senza: 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1269 | Saldo con ipotesi: 6.484,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1271 | Anno 11 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1272 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1273 | Saldo senza: 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1274 | Saldo con ipotesi: 7.482,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1276 | Anno 12 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1277 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1278 | Saldo senza: 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1279 | Saldo con ipotesi: 8.480,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1281 | Anno 13 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1282 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1283 | Saldo senza: 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1284 | Saldo con ipotesi: 9.477,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1286 | Anno 14 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1287 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1288 | Saldo senza: 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1289 | Saldo con ipotesi: 10.475,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1291 | Anno 15 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1292 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1293 | Saldo senza: 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1294 | Saldo con ipotesi: 11.473,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1295 | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1296;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Desktop · Flussi annuali · aliquota non impostata · V2 — 33:1317

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1317) · **1440 × 1028 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:1317 · FRAME | Desktop · Flussi annuali · aliquota non impostata · V2 | 21240 / 0 | 1440 × 1028 | VERTICAL; pad 48/48/48/48; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 33:1318 · FRAME | Intestazione | 48 / 48 | 1312 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:1319 · TEXT | SunSize | 0 / 0 | 960 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:1320 · TEXT | by PCODING Software | 972 / 5 | 340 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:1321 · TEXT | Come si recuperano i 6.990 €? | 48 / 99 | 1344 × 43 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1322 · TEXT | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | 48 / 162 | 1344 × 24 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1323 · FRAME | Intestazioni | 48 / 206 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1324 · TEXT | Anno | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1325 · TEXT | Operativo annuo | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1326 · TEXT | Quota fiscale | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1327 · TEXT | Saldo senza | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1328 · TEXT | Saldo con | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1329 · FRAME | Anno 0 | 48 / 247 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1330 · TEXT | 0 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1331 · TEXT | -6.990,00 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1332 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1333 · TEXT | -6.990,00 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1334 · TEXT | -6.990,00 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1335 · FRAME | Anno 1 | 48 / 288 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1336 · TEXT | 1 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1337 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1338 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1339 · TEXT | -5.992,08 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1340 · TEXT | -5.992,08 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1341 · FRAME | Anno 2 | 48 / 329 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1342 · TEXT | 2 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1343 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1344 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1345 · TEXT | -4.994,16 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1346 · TEXT | -4.994,16 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1347 · FRAME | Anno 3 | 48 / 370 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1348 · TEXT | 3 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1349 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1350 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1351 · TEXT | -3.996,24 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1352 · TEXT | -3.996,24 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1353 · FRAME | Anno 4 | 48 / 411 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1354 · TEXT | 4 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1355 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1356 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1357 · TEXT | -2.998,32 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1358 · TEXT | -2.998,32 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1359 · FRAME | Anno 5 | 48 / 452 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1360 · TEXT | 5 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1361 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1362 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1363 · TEXT | -2.000,40 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1364 · TEXT | -2.000,40 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1365 · FRAME | Anno 6 | 48 / 493 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1366 · TEXT | 6 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1367 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1368 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1369 · TEXT | -1.002,48 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1370 · TEXT | -1.002,48 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1371 · FRAME | Anno 7 | 48 / 534 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1372 · TEXT | 7 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1373 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1374 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1375 · TEXT | -4,56 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1376 · TEXT | -4,56 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1377 · FRAME | Anno 8 | 48 / 575 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1378 · TEXT | 8 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1379 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1380 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1381 · TEXT | 993,36 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1382 · TEXT | 993,36 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1383 · FRAME | Anno 9 | 48 / 616 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1384 · TEXT | 9 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1385 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1386 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1387 · TEXT | 1.991,28 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1388 · TEXT | 1.991,28 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1389 · FRAME | Anno 10 | 48 / 657 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1390 · TEXT | 10 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1391 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1392 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1393 · TEXT | 2.989,20 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1394 · TEXT | 2.989,20 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1395 · FRAME | Anno 11 | 48 / 698 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1396 · TEXT | 11 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1397 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1398 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1399 · TEXT | 3.987,12 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1400 · TEXT | 3.987,12 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1401 · FRAME | Anno 12 | 48 / 739 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1402 · TEXT | 12 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1403 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1404 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1405 · TEXT | 4.985,04 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1406 · TEXT | 4.985,04 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1407 · FRAME | Anno 13 | 48 / 780 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1408 · TEXT | 13 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1409 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1410 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1411 · TEXT | 5.982,96 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1412 · TEXT | 5.982,96 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1413 · FRAME | Anno 14 | 48 / 821 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1414 · TEXT | 14 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1415 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1416 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1417 · TEXT | 6.980,88 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1418 · TEXT | 6.980,88 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1419 · FRAME | Anno 15 | 48 / 862 | 1344 × 21 | HORIZONTAL; pad 0/0/0/0; gap 16; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1420 · TEXT | 15 | 0 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1421 · TEXT | 997,92 € | 272 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1422 · TEXT | 0,00 € | 544 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1423 · TEXT | 7.978,80 € | 816 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1424 · TEXT | 7.978,80 € | 1088 / 0 | 256 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1425 · TEXT | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | 48 / 903 | 1344 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1426 · INSTANCE | ← Torna ai risultati | 48 / 944 | 500 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I33:1426;15:64 · TEXT | Continua | 16 / 7.5 | 468 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:1319 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1320 | by PCODING Software | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1321 | Come si recuperano i 6.990 €? | Inter Semi Bold; 36px; LH 120% (43.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h1 |
| 33:1322 | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1324 | Anno | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1325 | Operativo annuo | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1326 | Quota fiscale | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1327 | Saldo senza | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1328 | Saldo con | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/label |
| 33:1330 | 0 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1331 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1332 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1333 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1334 | -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1336 | 1 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1337 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1338 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1339 | -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1340 | -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1342 | 2 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1343 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1344 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1345 | -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1346 | -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1348 | 3 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1349 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1350 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1351 | -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1352 | -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1354 | 4 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1355 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1356 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1357 | -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1358 | -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1360 | 5 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1361 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1362 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1363 | -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1364 | -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1366 | 6 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1367 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1368 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1369 | -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1370 | -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1372 | 7 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1373 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1374 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1375 | -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1376 | -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1378 | 8 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1379 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1380 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1381 | 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1382 | 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1384 | 9 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1385 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1386 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1387 | 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1388 | 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1390 | 10 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1391 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1392 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1393 | 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1394 | 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1396 | 11 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1397 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1398 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1399 | 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1400 | 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1402 | 12 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1403 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1404 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1405 | 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1406 | 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1408 | 13 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1409 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1410 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1411 | 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1412 | 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1414 | 14 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1415 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1416 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1417 | 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1418 | 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1420 | 15 | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1421 | 997,92 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1422 | 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1423 | 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1424 | 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1425 | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1426;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Flussi annuali · aliquota non impostata · V2 — 33:1464

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=33-1464) · **390 × 3013 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 33:1464 · FRAME | Mobile · Flussi annuali · aliquota non impostata · V2 | 12400 / 0 | 390 × 3013 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 33:1465 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 33:1466 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 33:1467 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 33:1468 · TEXT | Come si recuperano i 6.990 €? | 20 / 71 | 350 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 33:1469 · TEXT | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | 20 / 153 | 350 × 72 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1470 · FRAME | Anno 0 | 20 / 245 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1471 · TEXT | Anno 0 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1472 · TEXT | Esborso completo: 6.990 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1473 · TEXT | Saldo senza: -6.990,00 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1474 · TEXT | Saldo con ipotesi: -6.990,00 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1475 · FRAME | Anno 1 | 20 / 408 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1476 · TEXT | Anno 1 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1477 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1478 · TEXT | Saldo senza: -5.992,08 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1479 · TEXT | Saldo con ipotesi: -5.992,08 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1480 · FRAME | Anno 2 | 20 / 571 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1481 · TEXT | Anno 2 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1482 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1483 · TEXT | Saldo senza: -4.994,16 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1484 · TEXT | Saldo con ipotesi: -4.994,16 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1485 · FRAME | Anno 3 | 20 / 734 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1486 · TEXT | Anno 3 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1487 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1488 · TEXT | Saldo senza: -3.996,24 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1489 · TEXT | Saldo con ipotesi: -3.996,24 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1490 · FRAME | Anno 4 | 20 / 897 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1491 · TEXT | Anno 4 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1492 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1493 · TEXT | Saldo senza: -2.998,32 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1494 · TEXT | Saldo con ipotesi: -2.998,32 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1495 · FRAME | Anno 5 | 20 / 1060 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1496 · TEXT | Anno 5 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1497 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1498 · TEXT | Saldo senza: -2.000,40 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1499 · TEXT | Saldo con ipotesi: -2.000,40 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1500 · FRAME | Anno 6 | 20 / 1223 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1501 · TEXT | Anno 6 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1502 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1503 · TEXT | Saldo senza: -1.002,48 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1504 · TEXT | Saldo con ipotesi: -1.002,48 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1505 · FRAME | Anno 7 | 20 / 1386 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1506 · TEXT | Anno 7 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1507 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1508 · TEXT | Saldo senza: -4,56 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1509 · TEXT | Saldo con ipotesi: -4,56 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1510 · FRAME | Anno 8 | 20 / 1549 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1511 · TEXT | Anno 8 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1512 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1513 · TEXT | Saldo senza: 993,36 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1514 · TEXT | Saldo con ipotesi: 993,36 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1515 · FRAME | Anno 9 | 20 / 1712 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1516 · TEXT | Anno 9 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1517 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1518 · TEXT | Saldo senza: 1.991,28 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1519 · TEXT | Saldo con ipotesi: 1.991,28 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1520 · FRAME | Anno 10 | 20 / 1875 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1521 · TEXT | Anno 10 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1522 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1523 · TEXT | Saldo senza: 2.989,20 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1524 · TEXT | Saldo con ipotesi: 2.989,20 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1525 · FRAME | Anno 11 | 20 / 2038 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1526 · TEXT | Anno 11 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1527 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1528 · TEXT | Saldo senza: 3.987,12 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1529 · TEXT | Saldo con ipotesi: 3.987,12 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1530 · FRAME | Anno 12 | 20 / 2201 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1531 · TEXT | Anno 12 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1532 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1533 · TEXT | Saldo senza: 4.985,04 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1534 · TEXT | Saldo con ipotesi: 4.985,04 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1535 · FRAME | Anno 13 | 20 / 2364 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1536 · TEXT | Anno 13 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1537 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1538 · TEXT | Saldo senza: 5.982,96 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1539 · TEXT | Saldo con ipotesi: 5.982,96 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1540 · FRAME | Anno 14 | 20 / 2527 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1541 · TEXT | Anno 14 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1542 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1543 · TEXT | Saldo senza: 6.980,88 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1544 · TEXT | Saldo con ipotesi: 6.980,88 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1545 · FRAME | Anno 15 | 20 / 2690 | 350 × 143 | VERTICAL; pad 16/16/16/16; gap 8; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 33:1546 · TEXT | Anno 15 | 16 / 16 | 318 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 33:1547 · TEXT | Operativo: 997,92 € · fisco: 0,00 € | 16 / 48 | 318 × 21 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 33:1548 · TEXT | Saldo senza: 7.978,80 € | 16 / 77 | 318 × 21 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 33:1549 · TEXT | Saldo con ipotesi: 7.978,80 € | 16 / 106 | 318 × 21 | H/V FIXED/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 33:1550 · TEXT | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | 20 / 2853 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 33:1551 · INSTANCE | ← Torna ai risultati | 20 / 2957 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I33:1551;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 33:1466 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1467 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1468 | Come si recuperano i 6.990 €? | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 33:1469 | Risparmio 648 €/anno + ricavi 349,92 €/anno. Costi ricorrenti esclusi. La quota fiscale ipotizzata termina dopo l’anno 10. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 33:1471 | Anno 0 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1472 | Esborso completo: 6.990 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1473 | Saldo senza: -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1474 | Saldo con ipotesi: -6.990,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1476 | Anno 1 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1477 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1478 | Saldo senza: -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1479 | Saldo con ipotesi: -5.992,08 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1481 | Anno 2 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1482 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1483 | Saldo senza: -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1484 | Saldo con ipotesi: -4.994,16 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1486 | Anno 3 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1487 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1488 | Saldo senza: -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1489 | Saldo con ipotesi: -3.996,24 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1491 | Anno 4 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1492 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1493 | Saldo senza: -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1494 | Saldo con ipotesi: -2.998,32 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1496 | Anno 5 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1497 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1498 | Saldo senza: -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1499 | Saldo con ipotesi: -2.000,40 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1501 | Anno 6 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1502 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1503 | Saldo senza: -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1504 | Saldo con ipotesi: -1.002,48 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1506 | Anno 7 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1507 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1508 | Saldo senza: -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1509 | Saldo con ipotesi: -4,56 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1511 | Anno 8 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1512 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1513 | Saldo senza: 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1514 | Saldo con ipotesi: 993,36 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1516 | Anno 9 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1517 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1518 | Saldo senza: 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1519 | Saldo con ipotesi: 1.991,28 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1521 | Anno 10 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1522 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1523 | Saldo senza: 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1524 | Saldo con ipotesi: 2.989,20 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1526 | Anno 11 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1527 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1528 | Saldo senza: 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1529 | Saldo con ipotesi: 3.987,12 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1531 | Anno 12 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1532 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1533 | Saldo senza: 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1534 | Saldo con ipotesi: 4.985,04 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1536 | Anno 13 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1537 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1538 | Saldo senza: 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1539 | Saldo con ipotesi: 5.982,96 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1541 | Anno 14 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1542 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1543 | Saldo senza: 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1544 | Saldo con ipotesi: 6.980,88 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1546 | Anno 15 | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 33:1547 | Operativo: 997,92 € · fisco: 0,00 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1548 | Saldo senza: 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1549 | Saldo con ipotesi: 7.978,80 € | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 33:1550 | Rientro semplice: primo saldo non negativo, interpolato tra gli anni. Nessuna attualizzazione. Stesso costo iniziale; la detrazione entra una sola volta nei flussi, per 10 anni. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I33:1551;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Scenari senza detrazione impostata · V2 — 34:433

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=34-433) · **390 × 1296 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 34:433 · FRAME | Mobile · Scenari senza detrazione impostata · V2 | 12000 / 3500 | 390 × 1296 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 34:434 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 34:435 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 34:436 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 34:437 · TEXT | Scenari: autoconsumo e prezzi | 20 / 71 | 350 × 62 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:438 · TEXT | Quote ±10 punti percentuali e prezzi ±10%. Produzione, costo, manutenzione e ipotesi fiscale restano invariati. Nessuna probabilità o garanzia. | 20 / 153 | 350 × 96 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 34:439 · FRAME | Quota e prezzi ridotti | 20 / 269 | 350 × 269 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:440 · TEXT | Quota e prezzi ridotti | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:441 · TEXT | ≈ 8,7 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:442 · TEXT | Quota richiesta: 30% della produzione. Autoconsumo limitato al fabbisogno: 1944 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:443 · TEXT | Prezzo evitato: 0,225 €/kWh. Vendita: 0,081 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:444 · TEXT | 804,82 €/anno. Nessuna detrazione. | 20 / 228 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:445 · FRAME | Ipotesi inserite | 20 / 558 | 350 × 269 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:446 · TEXT | Ipotesi inserite | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:447 · TEXT | ≈ 7,0 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:448 · TEXT | Quota richiesta: 40% della produzione. Autoconsumo limitato al fabbisogno: 2592 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:449 · TEXT | Prezzo evitato: 0,250 €/kWh. Vendita: 0,090 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:450 · TEXT | 997,92 €/anno. Nessuna detrazione. | 20 / 228 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:451 · FRAME | Quota e prezzi aumentati | 20 / 847 | 350 × 269 | VERTICAL; pad 20/20/20/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFFFFF → color/surface; r 20; vincoli MIN/MIN; clip true |
| 2 · 34:452 · TEXT | Quota e prezzi aumentati | 20 / 20 | 310 × 24 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 2 · 34:453 · TEXT | ≈ 6,0 anni | 20 / 56 | 310 × 31 | H/V FIXED/HUG | #0F766E → color/brand; vincoli MIN/MIN |
| 2 · 34:454 · TEXT | Quota richiesta: 50% della produzione. Autoconsumo limitato al fabbisogno: 3000 kWh/anno. | 20 / 99 | 310 × 63 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:455 · TEXT | Prezzo evitato: 0,275 €/kWh. Vendita: 0,099 €/kWh. | 20 / 174 | 310 × 42 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 2 · 34:456 · TEXT | 1.169,52 €/anno. Nessuna detrazione. | 20 / 228 | 310 × 21 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 34:457 · TEXT | Le percentuali non sono dedotte dagli orari di consumo o dalla presenza della batteria. Nessuna simulazione oraria. I costi esclusi possono allungare il rientro. | 20 / 1136 | 350 × 84 | H/V FIXED/HUG | #52676B → color/muted; vincoli MIN/MIN |
| 1 · 34:458 · INSTANCE | ← Torna ai risultati | 20 / 1240 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I34:458;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 34:435 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:436 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:437 | Scenari: autoconsumo e prezzi | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:438 | Quote ±10 punti percentuali e prezzi ±10%. Produzione, costo, manutenzione e ipotesi fiscale restano invariati. Nessuna probabilità o garanzia. | Inter Regular; 16px; LH 150% (24px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/body |
| 34:440 | Quota e prezzi ridotti | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:441 | ≈ 8,7 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:442 | Quota richiesta: 30% della produzione. Autoconsumo limitato al fabbisogno: 1944 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:443 | Prezzo evitato: 0,225 €/kWh. Vendita: 0,081 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:444 | 804,82 €/anno. Nessuna detrazione. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:446 | Ipotesi inserite | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:447 | ≈ 7,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:448 | Quota richiesta: 40% della produzione. Autoconsumo limitato al fabbisogno: 2592 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:449 | Prezzo evitato: 0,250 €/kWh. Vendita: 0,090 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:450 | 997,92 €/anno. Nessuna detrazione. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:452 | Quota e prezzi aumentati | Inter Semi Bold; 16px; LH 150% (24px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/strong |
| 34:453 | ≈ 6,0 anni | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 34:454 | Quota richiesta: 50% della produzione. Autoconsumo limitato al fabbisogno: 3000 kWh/anno. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:455 | Prezzo evitato: 0,275 €/kWh. Vendita: 0,099 €/kWh. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:456 | 1.169,52 €/anno. Nessuna detrazione. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 34:457 | Le percentuali non sono dedotte dagli orari di consumo o dalla presenza della batteria. Nessuna simulazione oraria. I costi esclusi possono allungare il rientro. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → color/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I34:458;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

### Mobile · Ipotesi e limiti · aliquota non impostata · V2 — 35:380

[Apri riferimento](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7?node-id=35-380) · **390 × 452 px** · sfondo #F4F7F6 → color/background.

| **Profondità · ID · tipo** | **Nome** | **X / Y** | **L × H** | **Layout e allineamento** | **Aspetto e vincoli** |
|---|---|---|---|---|---|
| 0 · 35:380 · FRAME | Mobile · Ipotesi e limiti · aliquota non impostata · V2 | 12480 / 3500 | 390 × 452 | VERTICAL; pad 20/20/20/20; gap 20; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #F4F7F6 → color/background; r 20; vincoli MIN/MIN; clip true |
| 1 · 35:381 · FRAME | Intestazione | 20 / 20 | 350 × 31 | HORIZONTAL; pad 0/0/0/0; gap 12; main MIN; cross CENTER; wrap NO\\_WRAP; H/V FIXED/HUG | nessuno; vincoli MIN/MIN; clip true |
| 2 · 35:382 · TEXT | SunSize | 0 / 0 | 190 × 31 | H/V FIXED/HUG | #0F766E → primitive/brand; vincoli MIN/MIN |
| 2 · 35:383 · TEXT | PCODING | 202 / 5 | 148 × 21 | H/V FILL/HUG | #52676B → primitive/muted; vincoli MIN/MIN |
| 1 · 35:384 · TEXT | Ipotesi e limiti | 20 / 71 | 350 × 31 | H/V FIXED/HUG | #203738 → color/foreground; vincoli MIN/MIN |
| 1 · 35:385 · FRAME | Ipotesi e limiti, in chiaro · stato aperto mobile | 20 / 122 | 350 × 254 | VERTICAL; pad 16/20/16/20; gap 12; main MIN; cross MIN; wrap NO\\_WRAP; H/V FIXED/HUG | #FFF5DA → solar-soft; r 20; vincoli MIN/MIN; clip true |
| 2 · 35:386 · TEXT | Ipotesi e limiti, in chiaro | 20 / 16 | 310 × 30 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 35:387 · TEXT | Produzione: 4,5 kWp × 1.400 kWh/kWp. Autocon | 20 / 58 | 310 × 63 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 2 · 35:388 · TEXT | Valori dello scenario iniziale, non tariffe | 20 / 133 | 310 × 105 | H/V FILL/HUG | #5C400E → solar-ink; vincoli MIN/MIN |
| 1 · 35:389 · INSTANCE | ← Torna ai risultati | 20 / 396 | 350 × 36 | HORIZONTAL; pad 0/16/0/16; gap 0; main CENTER; cross CENTER; wrap NO\\_WRAP; H/V FIXED/FIXED | nessuno; r 12; vincoli MIN/MIN; clip false |
| 2 · I35:389;15:64 · TEXT | Continua | 16 / 7.5 | 318 × 21 | H/V FILL/HUG | #0F766E → color/brand; vincoli MIN/MIN |

#### Testi effettivi e tipografia

| **ID** | **Testo effettivo** | **Font e proprietà** | **Allineamento / adattamento / stile** |
|---|---|---|---|
| 35:382 | SunSize | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #0F766E → primitive/brand; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 35:383 | PCODING | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #52676B → primitive/muted; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 35:384 | Ipotesi e limiti | Inter Semi Bold; 26px; LH 120% (31.2px); tracking 0 PERCENT; #203738 → color/foreground; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/h2 |
| 35:386 | Ipotesi e limiti, in chiaro | Inter Semi Bold; 20px; LH 150% (30px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/subhead |
| 35:387 | Regione: Lazio. 4,5 kWp × 1.440 kWh/kWp/anno. Autoconsumo: 40%. Prezzi: 0,25 €/kWh evitato; 0,09 €/kWh immesso. Detrazione: 0%. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| 35:388 | Resa: elaborazione SunSize su PVGIS 5.3/SARAH3 (2005–2023), sud, 30°, perdite 14%. Rientro semplice; nessun finanziamento, inflazione o degrado. Manutenzione e sostituzioni escluse se non inserite. | Inter Regular; 14px; LH 150% (21px); tracking 0 PERCENT; #5C400E → solar-ink; NONE; ORIGINAL | LEFT/TOP; HEIGHT; SunSize V2/micro |
| I35:389;15:64 | ← Torna ai risultati | Inter Semi Bold; 14px; LH 150% (21px); tracking 0 PERCENT; #0F766E → color/brand; NONE; ORIGINAL | CENTER/TOP; HEIGHT; senza stile |

## Fine del rilievo

**Copertura:** 41 contenitori, 2437 livelli complessivi, 1614 livelli di testo, 121 occorrenze di interazione. Misure e contenuti estratti dalla pagina SunSize V2; gli aspetti non presenti sono segnalati come decisioni aperte.