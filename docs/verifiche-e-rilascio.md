# SunSize V2 — Verifiche e rilascio

Aggiornamento: **16 novembre 2026**. Codice delle verifiche storiche del 14 novembre: [0f90d86](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/tree/0f90d865f9007919e335660fb3585f9188a95aaf), ramo `codex/sunsize-ux`. La [PR #9](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/pull/9) contiene la V2 e la documentazione, resta in bozza e non è stata integrata in produzione.

## Revisione del 16 novembre 2026

La revisione applicativa [56089b2](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/commit/56089b2b08acc9c76d55cda1a45ec1e6495363a5) aggiunge il titolare e il contatto forniti dal proprietario: **PCODING Software**, **brando_11@libero.it**. L’email è un collegamento `mailto:` sottolineato; non viene inviato alcun messaggio dall’app. La vista mantiene le informazioni sullo stato in memoria, sull’hosting e sui limiti della stima.

Corretto un caso di presentazione del rientro: un tempo positivo inferiore a un mese mostra “Meno di 1 mese” invece di “0 mesi”. Il motore economico non cambia; un nuovo test verifica il caso e le soglie di visualizzazione. I test unitari diventano **17**.

La suite browser ha ora **6 casi per motore**: i 5 precedenti più navigazione da tastiera (salta alla simulazione, compilazione, invio, apertura informazioni, raggiungimento del contatto e ritorno con focus) e reflow a 640 CSS px. Questa larghezza corrisponde allo spazio di layout di una finestra da 1280 px con zoom 200%, ma non costituisce una prova dello zoom nativo o di VoiceOver. Il contatto e la vista informativa sono inclusi nel controllo Axe.

Il workflow installa ed esegue Chromium, Firefox e WebKit: **18 casi superati** nella [verifica CI del commit 56089b2](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/actions/runs/43921735818). Anche test unitari (17), lint, TypeScript e build sono passati. In locale sono passati i 6 casi Chromium; Firefox e WebKit sono stati eseguiti sul runner GitHub perché nell’ambiente locale non avviavano correttamente. WebKit in Playwright non equivale a una verifica su Safari/iPhone fisico. Gli esiti di questa revisione vanno distinti da quelli storici riportati sotto.

Il dominio di produzione associato al progetto Vercel è `prj-dimensionamento-fotovoltaico.vercel.app`, verificato nell’inventario del progetto il 16 novembre. Non è stato modificato o promosso alcun deployment di produzione. Restano da verificare i dettagli effettivi dei dati tecnici dell’hosting (destinatari e conservazione) e da completare la prova con dispositivi e tecnologie assistive.

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

## 6. Passaggi residui per il rilascio definitivo

1. Revisionare l’anteprima con dati rappresentativi e approvare la versione da pubblicare.
2. Completare le prove manuali: tastiera, zoom 200%, lettore di schermo, dispositivi e browser di destinazione.
3. Titolare e contatto sono inseriti; completare la verifica dei servizi e del trattamento tecnico effettivi dell’hosting, prima di considerare completa l’informativa applicabile.
4. Confermare progetto, dominio e percorso di pubblicazione di produzione; distinguere l’anteprima dall’indirizzo definitivo.
5. Verificare i controlli CI della revisione finale e integrare la PR soltanto nell’ambito della pubblicazione approvata.
6. Dopo la pubblicazione controllare caricamento di font/asset, percorso completo, accesso sul dominio reale e correttezza della versione servita. Conservare l’identità del deployment precedente per un eventuale ripristino.

Esportazione PDF, account, database, simulazione oraria della batteria e valutazione locale del tetto sono estensioni future, non funzioni già implementate o condizioni tecniche necessarie per servire la V2 attuale.
