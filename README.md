# SunSize

Simulatore fotovoltaico di PCODING Software: consumi → impianto → risultati, con ipotesi esplicite e calcoli nel browser.

[Design Figma SunSize](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7)

## Documentazione completa V2

- [Scheda tecnica di realizzazione](docs/scheda-tecnica.md): architettura, stato, flussi UX, interazioni, responsive e mappa dei file.
- [Logiche di calcolo](docs/logiche-calcolo.md): input e unità, annualizzazione, bilanci energetici, detrazione, rientro e scenari con esempi riproducibili.
- [Scheda Figma integrale con appendici](docs/specifiche-figma-v2.md): tutte le specifiche e il rilievo del canvas; [origine e hash](docs/specifiche-figma-v2.provenienza.json).
- [Fonti e rese regionali](docs/rese-regionali.md): PVGIS, 209 campioni e metodo di aggregazione.
- [Verifiche e rilascio](docs/verifiche-e-rilascio.md): test locali/remoti, CI e passaggi prima della produzione.

La documentazione operativa descrive il codice del commit `0f90d86`. La copia Figma conserva anche i contenuti dimostrativi e le note di revisione del canvas; l’esito della verifica remota successiva è nel documento di verifica.

## Avvio

Richiede Node.js 22.18+ (o 24 LTS) per eseguire i test TypeScript senza compilazione aggiuntiva.

```sh
npm ci
npm run dev
```

Apri http://localhost:3000. Per la produzione: `npm run build` e `npm start`. Per GitHub Pages: `npm run build:pages`.

## Percorso

1. **Consumi**: consumo e spesa degli ultimi 12 mesi, con istruzioni per reperirli. La spesa complessiva non viene usata come costo evitabile per kWh: comprende anche costi fissi.
2. **Impianto**: potenza e costo completo del preventivo, produzione specifica e quota ipotizzata di autoconsumo. Orario dei consumi e presenza della batteria raccolgono il contesto, senza modificare automaticamente la quota. Le ipotesi economiche sono modificabili prima del calcolo.
3. **Risultati**: confronto del rientro senza e con la detrazione inserita, benefici annuali distinti, bilancio energetico, due saldi cumulati a 15 anni e dettaglio accessibile dei flussi annuali. Tre scenari illustrano la sensibilità ad autoconsumo e prezzi. Si può tornare ai dati senza azzerarli.

È disponibile anche la stima da un periodo di 1–12 mesi interi: consumi e spesa sono estrapolati con ×12/mesi, con provenienza e avviso visibili fino ai risultati. I valori si possono correggere.

La V2 usa il layout Figma con moduli, riepiloghi e risultati responsive. Autoconsumo personalizzato e detrazione/costi si modificano in viste dedicate: **Salva** applica, **Annulla** scarta il draft. Fonte regionale, scenari e limiti hanno viste di supporto; i flussi sono tabellari su desktop e schede annuali su mobile. I ritorni conservano i valori e ripristinano il focus sul comando di apertura.

Il precedente caricamento simulato della bolletta non viene proposto nel nuovo percorso: non effettuava estrazione OCR. L'inserimento manuale evita risultati basati su valori fittizi. Il contenuto in `public/legacy` resta un archivio della versione precedente e non è il motore del nuovo percorso.

## Stima dalla regione

Il menu include le 20 regioni italiane. La scelta compila automaticamente la resa annua indicativa. **Ho il valore del preventivo** consente una resa manuale distinta; cambiando modalità non si perde il valore precedentemente inserito.

La tabella è un'elaborazione SunSize di **209 campioni PVGIS 5.3/SARAH3, 2005–2023**, con condizioni comuni: sud, inclinazione 30°, perdite di sistema 14%, sistema da 1 kWp. È una media spaziale approssimata: non una tabella regionale ufficiale né una valutazione del singolo tetto. Nessuna chiamata esterna durante la simulazione.

[Metodo, fonti, tabella completa e limiti](docs/rese-regionali.md). Esempio Lazio: **1.440 kWh/kWp/anno**; con 4,5 kWp si stimano 6.480 kWh/anno. Con autoconsumo 40% e prezzi 0,25/0,09 €/kWh: beneficio di 997,92 €/anno prima dei costi esclusi e rientro di circa 7 anni senza detrazione.

## Modello e ipotesi iniziali

| Parametro | Valore iniziale | Significato |
| --- | --- | --- |
| Produzione specifica | Nessuna regione preselezionata | Seleziona una delle 20 regioni oppure inserisci la resa del preventivo |
| Quota autoconsumo | 40% della produzione | Ipotesi iniziale, non una misura; alternative 25% e 60% o quota personalizzata |
| Scenario produzione | 100% | Modificabile, ad esempio a 80% o 50% |
| Prezzo energia evitato | 0,25 €/kWh | Ipotesi per le componenti variabili risparmiabili, non tariffa ufficiale |
| Prezzo energia immessa | 0,09 €/kWh | Ipotesi, non ricavo garantito |
| Detrazione fiscale | 0% | Esclusa finché l'utente non imposta un'aliquota verificata |
| Costi ricorrenti | 0 €/anno | Esclusi finché l'utente non li specifica |

Nelle formule, scenario, quota e aliquota sono frazioni interne: **40% = 0,4**, **50% = 0,5**, **100% = 1**.

```
Produzione = kWp × produzione specifica × scenario
Autoconsumo = min(produzione × quota autoconsumo, consumo annuo)
Energia immessa = produzione − autoconsumo
Energia da acquistare = consumo annuo − autoconsumo
Risparmio = autoconsumo × prezzo evitato
Ricavi = energia immessa × prezzo vendita
Quota fiscale = costo impianto × aliquota / 10, per i primi 10 anni
Beneficio annuo = risparmio + ricavi + quota fiscale − costi ricorrenti
Saldo anno 0 = − costo COMPLETO dell'impianto
Saldo anno n = saldo precedente + beneficio annuo
```

La detrazione entra una sola volta, nei flussi annuali. Non riduce l'esborso iniziale. Il payback semplice è interpolato tra gli anni in cui il saldo passa da negativo a non negativo, con ricerca entro 50 anni. Il grafico mostra solo i primi 15; non colloca un pareggio fuori orizzonte all'ultimo anno visualizzato.

Il modello annuale è indicativo: non simula i consumi orari o la batteria. Prezzi e produzione sono costanti. Non sono modellati inflazione, finanziamento, degrado, sostituzioni straordinarie o variazioni normative. I requisiti, i massimali e la capienza fiscale devono essere verificati dall'utente; la ripartizione ipotizzata è su 10 anni, con quote attribuite a fine anno. Non è una verifica fiscale o un preventivo professionale.

## Confronto e sensibilità

Il confronto mantiene invariati investimento iniziale, produzione, autoconsumo, prezzi e costi: cambia solo la detrazione. Con aliquota iniziale 0%, il secondo caso mostra **Da impostare**. Nessuna aliquota viene scelta in base alla regione o alla presenza di una batteria.

La vista dei flussi mostra esborso all'anno 0, risparmio, ricavi, costi, quota fiscale e saldi cumulati fino all'anno 15. Su desktop/tablet usa una tabella, su mobile schede annuali. La quota fiscale termina dopo il decimo anno. I collegamenti dai risultati aprono la vista dedicata a detrazione e costi, conservando i dati; Salva applica e ricalcola, Annulla scarta le modifiche temporanee.

Gli scenari modificano congiuntamente la quota di autoconsumo di −10 / +10 punti percentuali (limitata a 0–100%) e i due prezzi di −10% / +10%. Produzione, investimento, costi e aliquota restano invariati. Sono combinazioni illustrative, senza probabilità associate; non costituiscono un intervallo completo di incertezza. Il limite dell'autoconsumo al fabbisogno resta attivo in ciascun caso.

Gli orari e la batteria aiutano a contestualizzare la quota, ma non bastano a stimarla: servirebbero profili orari e caratteristiche dell'accumulo. Anche la percentuale di fabbisogno coperta calcolata su base annua richiede una verifica della coincidenza temporale. I costi inizialmente a zero sono indicati come **esclusi**, non come necessariamente nulli.

## Esempio verificato

Con 3.000 kWh/anno, spesa annua 900 €, impianto da 4,5 kWp a 6.990 € e una **resa manuale di 1.400 kWh/kWp/anno**:

- produzione: 6.300 kWh; autoconsumo: 2.520 kWh; immissione: 3.780 kWh;
- risparmio: 630 €/anno; ricavi: 340,20 €/anno; totale: 970,20 €/anno;
- rientro senza detrazione: circa 7 anni e 2 mesi;
- saldo a 10 anni: +2.712 €.

Inserendo una detrazione ipotetica del 50%, la quota è 349,50 €/anno per 10 anni e il rientro è circa 5 anni e 4 mesi. L'esempio non stabilisce l'aliquota spettante.

## Verifiche

```sh
npm test
npm run lint
npm run build
```

I 16 test unitari verificano anche che tutte le 20 rese siano riproducibili dai 209 campioni, che la regione non sia scelta implicitamente e che il valore manuale prevalga solo nella modalità corrispondente. I test coprono conservazione dell'energia, limite dell'autoconsumo, detrazione conteggiata una volta, fine del beneficio fiscale, rientro dopo il decimo anno, mancato rientro, identità dei flussi, costi ricorrenti, scenari di produzione e sensibilità, parsing numerico italiano. Il percorso è stato verificato in Chromium a 1440, 390 e 320 px, inclusi errori, navigazione, confronto fiscale, fine delle quote, collegamenti ai campi e conservazione dei dati. La suite Playwright copre l’intero percorso a 1440, 768, 390 e 320 px, più salvataggio, validazione da tastiera, ricalcolo e perdita dello stato dopo refresh. Axe verifica WCAG A/AA sulle viste principali e sui flussi: il controllo automatico non sostituisce una prova con lettore di schermo.

### Verifiche nel browser

```sh
npx playwright install chromium
npm run build
npm run test:e2e
```

Per usare Chromium installato nel sistema: `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e`. La suite avvia la build su porta 3100 e produce schermate in `test-results/`. Il workflow `Validate SunSize` esegue test, lint, TypeScript, build e browser sulle PR e sul ramo di lavoro.

## Pubblicazione

Il workflow GitHub Pages pubblica i push su `main`; Vercel usa una build Next.js standard. La PR resta in bozza e il ramo dedicato genera un’anteprima Vercel tramite l’integrazione GitHub già esistente: [anteprima SunSize](https://prj-dimensionamento-fotovoltaico-git-codex-sunsize-ux-pm79.vercel.app). Le anteprime possono richiedere l’accesso Vercel del proprietario.

Accesso e associazione al progetto `prj-dimensionamento-fotovoltaico` sono stati confermati direttamente tramite Vercel. L’anteprima del commit `0f90d86` è `READY` e ha superato anche i 5 test browser remoti. [Esito e identificazione del deployment](docs/verifiche-e-rilascio.md). Il sito di produzione non è stato aggiornato; le protezioni restano attive.

Prima del rilascio: revisionare l’anteprima e la verifica del flusso, completare le informazioni privacy/titolare adatte al deployment effettivo, confermare dominio e destinazione di produzione e quindi integrare il ramo. Il controllo automatico di accessibilità va completato con una prova manuale su dispositivi e tecnologie assistive.
