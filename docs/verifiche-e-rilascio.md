# SunSize V2 — Verifiche e rilascio

Aggiornamento: **16 novembre 2026**. Codice delle verifiche storiche del 14 novembre: [0f90d86](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/tree/0f90d865f9007919e335660fb3585f9188a95aaf), ramo `codex/sunsize-ux`. La [PR #9](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/pull/9) contiene la V2 e la documentazione. Il rilascio Vercel è descritto sotto; la PR resta aperta senza merge in `main`.

## Rilascio pubblico Vercel — 16 novembre 2026

- URL: **https://prj-dimensionamento-fotovoltaico.vercel.app**.
- Team/progetto: `pm79` / `prj-dimensionamento-fotovoltaico`.
- Deployment: `dpl_3wdEfo9gCibGrwiQJur4Guv1P42b`, target **production**, stato **READY**.
- SHA rilasciato: `b99381d6949212a4f17990baf193e64155e6da49`.
- Verifica pre-rilascio: [CI 43923940688](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/actions/runs/43923940688), **17 test unitari e 21 casi browser** superati, lint, TypeScript e build validi.
- Build GitHub Pages eseguita con successo, con informativa GitHub presente nel bundle e riferimenti Vercel esclusi dalla vista corrispondente.
- Verifica anonima del dominio stabile: **HTTP 200**, titolo V2, prima schermata corretta, nessuna schermata di autenticazione e nessun header Set-Cookie nella risposta verificata.
- Verifica browser sul codice e sugli asset effettivamente pubblicati: **6 casi Chromium superati in 1,3 minuti**, quattro larghezze complete (1440, 768, 390, 320 px), validazione/salvataggio e tastiera/reflow a 640 CSS px. Nessuna violazione Axe rilevata nelle viste controllate.
- Errori runtime/fatal consultabili del deployment: nessuno rilevato nella finestra verificata. L’assenza di output runtime non certifica l’assenza di ogni errore sul client.
- Deployment di produzione precedente, per eventuale ripristino: `dpl_7pAKsJf71uMLPDB4gsBp9ECpo8ux`.

Il browser headless diretto non riconosceva la CA del proxy dell’ambiente (`ERR_CERT_AUTHORITY_INVALID`). La prova remota è stata quindi eseguita tramite un proxy locale che recuperava pagine e asset dall’origine pubblica con verifica TLS e archivio CA del sistema, senza disabilitare la validazione dei certificati. La prova sullo storage del browser resta riferita alla build CI: non è stata inclusa nei 6 casi remoti, perché questo trasporto non rappresenta tutte le caratteristiche dell’origine HTTPS nel browser. Il controllo HTTP anonimo sul dominio pubblico è separato e diretto.

Il proprietario ha scelto l’indirizzo Vercel per il rilascio pubblico. È stata creata una build di produzione del commit verificato sul solo progetto SunSize. Nessun cambiamento alla protezione di accesso e nessun merge in `main`: il repository è collegato anche ad altri deployment automatici, perciò questa pubblicazione è stata circoscritta al progetto richiesto. Non confondere la PR ancora aperta con lo stato della versione servita al pubblico.

Prima di futuri aggiornamenti da `main`, integrare la V2 o selezionare esplicitamente il commit desiderato, per evitare di sovrascrivere il rilascio con il vecchio codice. Gli aggiornamenti documentali successivi a questo SHA non cambiano l’app rilasciata.

## Revisione del 16 novembre 2026

La revisione applicativa [56089b2](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/commit/56089b2b08acc9c76d55cda1a45ec1e6495363a5) aggiunge il titolare e il contatto forniti dal proprietario: **PCODING Software**, **brando_11@libero.it**. L’email è un collegamento `mailto:` sottolineato; non viene inviato alcun messaggio dall’app. La vista mantiene le informazioni sullo stato in memoria, sull’hosting e sui limiti della stima.

Corretto un caso di presentazione del rientro: un tempo positivo inferiore a un mese mostra “Meno di 1 mese” invece di “0 mesi”. Il motore economico non cambia; un nuovo test verifica il caso e le soglie di visualizzazione. I test unitari diventano **17**.

La suite browser ha ora **6 casi per motore**: i 5 precedenti più navigazione da tastiera (salta alla simulazione, compilazione, invio, apertura informazioni, raggiungimento del contatto e ritorno con focus) e reflow a 640 CSS px. Questa larghezza corrisponde allo spazio di layout di una finestra da 1280 px con zoom 200%, ma non costituisce una prova dello zoom nativo o di VoiceOver. Il contatto e la vista informativa sono inclusi nel controllo Axe.

Il workflow installa ed esegue Chromium, Firefox e WebKit: **18 casi superati** nella [verifica CI del commit 56089b2](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/actions/runs/43921735818). Anche test unitari (17), lint, TypeScript e build sono passati. In locale sono passati i 6 casi Chromium; Firefox e WebKit sono stati eseguiti sul runner GitHub perché nell’ambiente locale non avviavano correttamente. WebKit in Playwright non equivale a una verifica su Safari/iPhone fisico. Gli esiti di questa revisione vanno distinti da quelli storici riportati sotto.

Il dominio di produzione associato al progetto Vercel è `prj-dimensionamento-fotovoltaico.vercel.app`, verificato nell’inventario del progetto il 16 novembre. Non è stato modificato o promosso alcun deployment di produzione. Restano da verificare i dettagli effettivi dei dati tecnici dell’hosting (destinatari e conservazione) e da completare la prova con dispositivi e tecnologie assistive.

## Completamento della verifica hosting

[Verifica privacy e hosting](privacy-hosting.md): inventario del progetto e dei drain, fonti ufficiali, distinzione tra dati del simulatore e log tecnici, protezione del deployment e prove non eseguibili. Il proprietario ha scelto l’indirizzo Vercel del progetto per il rilascio pubblico.

La vista informativa identifica ora Vercel nella build standard e GitHub Pages nell’export corrispondente, con collegamenti ufficiali. Non dichiara una durata di conservazione non verificata. Una nuova prova verifica il percorso di calcolo senza richieste a origini esterne o metodi diversi da GET, senza cookie e senza dati in localStorage/sessionStorage nella build locale. Sono passate in locale questa prova e le due prove da tastiera (3 casi mirati). La suite completa diventa di 7 casi per motore, 21 in totale.

La prova di zoom nativo non è stata eseguibile per il blocco del browser condiviso documentato; resta distinta dalla verifica di reflow a 640 CSS px. Nessuna prova con lettore di schermo o iPhone fisico è stata dichiarata superata.

## 1. Esiti registrati del 14 novembre

| Controllo | Esito e ambito |
| --- | --- |
| Test unitari | **16 superati**: motore, parsing, annualizzazione e dati regionali |
| Lint, TypeScript e build | Completati sul codice V2 |
| Test browser locali | **5 superati**, Chromium, con quattro larghezze e un caso aggiuntivo di validazione/salvataggio |
| Test browser remoti | **5 superati in 36 secondi** sull’anteprima Vercel dello stesso commit |
| Larghezze del percorso completo | 1440, 768, 390 e 320 px |
| Errori JavaScript | Nessuno rilevato durante i percorsi completi verificati |
| Overflow orizzontale della pagina | Nessuno alle larghezze controllate; la tabella tablet può scorrere nel proprio contenitore |
| Axe | Nessuna violazione rilevata con i tag WCAG 2 A/AA e 2.1 AA nelle viste sottoposte al controllo |
| Controllo visivo | Schermate principali confrontate con Figma; schermate remote desktop/mobile ispezionate |
| GitHub CI | Job `validate` completati con successo per il commit di riferimento |
| Vercel | Deployment `READY`, build completata e alias del ramo risolto sul commit verificato |

Questi esiti sono evidenze sul commit indicato, non una promessa su qualunque revisione futura. Axe non costituisce una certificazione di accessibilità; le prove Chromium non equivalgono a prove su Safari, Firefox, dispositivi reali o lettori di schermo. La verifica numerica non certifica fiscalità o resa del singolo tetto.

## 2. Copertura dei test

| File | Casi |
| --- | --- |
| [tests/annualize.test.mjs](../tests/annualize.test.mjs) | 2: estrapolazione con provenienza e rifiuto dei periodi/dati non ammessi |
| [tests/regional-yields.test.mjs](../tests/regional-yields.test.mjs) | 3: 20 regioni e 209 osservazioni coerenti, nessuna regione implicita, modalità manuale e perdite non sottratte nuovamente |
| [tests/solar-calc.test.mjs](../tests/solar-calc.test.mjs) | 11: bilancio energetico, limite al consumo, fisco una volta per 10 anni, costi che impediscono il rientro, produzione relativa, input non validi, parsing italiano, confronto e identità dei flussi, rientro dopo anno 10, aliquota zero/sola detrazione insufficiente, sensibilità con limiti |
| [e2e/sunsize.spec.ts](../e2e/sunsize.spec.ts) | 4 percorsi completi alle diverse larghezze + 1 caso di validazione da tastiera, salvataggio, ricalcolo e stato dopo refresh |

Il percorso completo verifica annualizzazione, provenienza, regione inizialmente vuota e relativo errore, orari/batteria senza variazione automatica della quota, fonte e tabella delle 20 regioni, conservazione dei valori regionali/manuali, annullamento della quota, confronto fiscale, annullamento dei costi, quota fiscale zero all’anno 11, scenari/limiti mobile, ritorni con focus, conservazione del contesto e reset confermato/annullato.

Il caso aggiuntivo verifica un input non numerico, una quota oltre il 100% con focus sull’errore, salvataggio di quota/aliquota/costi, ricalcolo del rientro, flussi con i costi inseriti, ritorno dalla vista dati e perdita dello stato dopo refresh.

## 3. Riproduzione locale

Node.js **22.18+** o **24 LTS**. Il workflow di validazione usa 22.18.0; il progetto Vercel verificato usa Node 24.x.

```sh
npm ci
npm test
npm run lint
npm run build
npx tsc --noEmit
npx playwright install chromium firefox webkit
npm run test:e2e:crossbrowser
```

Il build esegue a sua volta controlli di lint e tipi. La configurazione Playwright avvia la build di produzione sulla porta 3100; localmente può riutilizzare un server già in ascolto. Verificare che quel server corrisponda alla revisione da provare.

Per Chromium già installato nel sistema:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
```

Schermate e tracce degli eventuali errori vengono prodotte in `test-results/`, escluso dal repository. Durante una prova su anteprima protetta non salvare credenziali, URL temporanei o tracce di rete contenenti l’autenticazione.

## 4. Verifica remota eseguita

- Progetto: `prj-dimensionamento-fotovoltaico`.
- Deployment: `dpl_Hi5GpTjeb4uxEXpBaUcjyxrXHgJS`.
- SHA: `0f90d865f9007919e335660fb3585f9188a95aaf`.
- [Anteprima del ramo](https://prj-dimensionamento-fotovoltaico-git-codex-sunsize-ux-pm79.vercel.app).
- [Build verificata](https://vercel.com/pm79/prj-dimensionamento-fotovoltaico/Hi5GpTjeb4uxEXpBaUcjyxrXHgJS).

L’alias del ramo può cambiare deployment dopo nuovi push; l’ID e lo SHA sopra identificano la versione effettivamente provata. Non confondere `READY` con una promozione in produzione: il deployment verificato è un’anteprima.

I test hanno eseguito il codice e caricato gli asset dell’anteprima remota, tramite il proxy dell’ambiente e il relativo archivio CA, senza disabilitare la verifica TLS. L’accesso temporaneo è stato autorizzato dal proprietario. Il link del ramo utilizzato dal browser è stato revocato dopo i test; cookie e configurazione locale temporanea sono stati rimossi. Non sono inclusi link di bypass, cookie, token o sessioni nella documentazione. Le protezioni del progetto sono rimaste attive.

## 5. Integrazione continua

[Validate SunSize](../.github/workflows/validate.yml) esegue, sulle PR e sui push a `main` e `codex/sunsize-ux`: installazione riproducibile, test unitari, lint, TypeScript, build, installazione Chromium, Firefox e WebKit e test browser sui tre motori. In caso di errore conserva gli artefatti Playwright per 7 giorni.

[Deploy GitHub Pages](../.github/workflows/deploy-pages.yml) è un workflow separato: pubblica i push a `main` o l’avvio manuale, usando `npm run build:pages`. Non è subordinato tramite `needs` al workflow di validazione. Prima di integrare una PR devono quindi essere verdi i controlli richiesti dalla revisione e dalla configurazione del repository.

`next.config.ts` applica export statico e base path `/Prj_Dimensionamento_Fotovoltaico` soltanto con `GITHUB_PAGES=true`; Vercel usa la build Next.js standard. L’integrazione Vercel esistente genera un’anteprima del ramo. La sua presenza non richiede una modifica della produzione.

## 6. Verifiche residue e aggiornamenti futuri

1. Verificare periodicamente la versione pubblica con dati rappresentativi; registrare il deployment corrente prima di ogni aggiornamento.
2. Completare le prove manuali: tastiera, zoom 200%, lettore di schermo, dispositivi e browser di destinazione.
3. Titolare e contatto sono inseriti; completare la verifica dei servizi e del trattamento tecnico effettivi dell’hosting, prima di considerare completa l’informativa applicabile.
4. Mantenere separati il dominio pubblico Vercel scelto dal proprietario e le anteprime; per un futuro dominio personalizzato verificare DNS e associazione al progetto.
5. Verificare i controlli CI della revisione finale e integrare la PR soltanto nell’ambito della pubblicazione approvata.
6. Dopo la pubblicazione controllare caricamento di font/asset, percorso completo, accesso sul dominio reale e correttezza della versione servita. Conservare l’identità del deployment precedente per un eventuale ripristino.

Esportazione PDF, account, database, simulazione oraria della batteria e valutazione locale del tetto sono estensioni future, non funzioni già implementate o condizioni tecniche necessarie per servire la V2 attuale.
