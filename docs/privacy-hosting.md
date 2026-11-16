# SunSize — Verifica tecnica privacy e hosting

Verifica del **16 novembre 2026**, su configurazione corrente e codice della PR #9. Questo documento registra evidenze tecniche e punti da completare; non certifica la conformità dell’informativa a ogni obbligo applicabile.

## Applicazione

- Titolare del sito e contatto forniti dal proprietario: **PCODING Software**, **brando_11@libero.it**.
- I valori del simulatore sono nello stato React in memoria. Nessun account, database, caricamento bollette o invio a un servizio di calcolo.
- Nessun uso di cookie, localStorage o sessionStorage nel codice applicativo. Nessun SDK di analytics/pubblicità, nessun font richiesto al servizio Google durante la navigazione: `next/font` include Inter negli asset della build.
- Le rese sono incluse nella build. Le fonti e i documenti privacy sono normali collegamenti, aperti solo su richiesta e con `rel="noreferrer"`.
- Il controllo browser della build deve confermare richieste alla sola origine del sito, soli GET, cookie e archivi locali vuoti nel percorso sottoposto a verifica. Questo non descrive automaticamente script o cookie aggiunti dalla piattaforma alle anteprime protette.

## Hosting verificato

Vercel, team `pm79`, progetto `prj-dimensionamento-fotovoltaico` (`prj_j46VA1bAV7IPjdmndbebUwJrM2Zz`). Nessuna modifica delle impostazioni effettuata.

- L’inventario dei drain del progetto è vuoto: nessun inoltro configurato tramite questa funzione. Non significa assenza di tutti i trattamenti interni del fornitore.
- Il servizio riceve dati tecnici delle richieste, distinti dai valori del simulatore. La documentazione Vercel distingue dati del cliente e dati generati dal servizio; può coinvolgere subfornitori e trattamenti internazionali.
- Le finestre consultabili dei runtime log dipendono dal piano e dalle opzioni. Non vanno presentate come durata universale di conservazione di IP, log di sicurezza o copie di backup. La risposta API del team non espone il piano: nessun numero di ore/giorni è dichiarato nell’app.
- L’informativa indica il fornitore, le finalità di erogazione/sicurezza, la separazione tra dati tecnici e simulazione e i riferimenti ufficiali per conservazione e trasferimenti. Non promette che chiudere la pagina cancelli i dati tecnici dell’hosting.
- La build standard identifica Vercel. `GITHUB_PAGES=true` identifica GitHub Pages e mostra il relativo documento privacy; l’export statico e il base path esistenti restano attivi.

### Accessibilità pubblica del deployment

La configurazione API indica `ssoProtection.enabled=true`, `deploymentType=all_except_custom_domains`. Non è una password di SunSize: è la protezione di accesso della piattaforma. Il dominio `prj-dimensionamento-fotovoltaico.vercel.app` è associato al progetto, ma non va considerato già pubblico senza verifica anonima.

Prima del rilascio occorre scegliere l’indirizzo pubblico: collegare un dominio personalizzato del proprietario, oppure autorizzare e verificare la configurazione di accesso appropriata per l’indirizzo Vercel. Non sono state ridotte le protezioni, registrati domini o accettati nuovi accordi.

## Fonti ufficiali consultate

- [Vercel Data Processing Addendum](https://vercel.com/legal/dpa), in particolare ruoli, richieste degli interessati, trasferimenti e criteri di conservazione.
- [Vercel Privacy Notice](https://vercel.com/legal/privacy-notice), con distinzione tra trattamenti propri e per conto del cliente.
- [Vercel Runtime Logs](https://vercel.com/docs/logs/runtime), limiti di consultazione per piano.
- [Vercel Trust Center / subfornitori](https://vercel.com/legal/sub-processors).
- [GitHub Pages: dati dei visitatori](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
- [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## Punti da completare dal titolare

Verificare la corrispondenza del nome fornito con l’identità giuridica del titolare e gli eventuali ulteriori dati identificativi richiesti. Confermare sul contratto effettivo base giuridica, ruoli, conservazione e garanzie applicabili, quindi completare l’informativa con diritti e canali di esercizio pertinenti. I documenti del fornitore sono una fonte, non sostituiscono l’informativa del titolare.

La prova con zoom nativo e lettore di schermo resta separata da Axe e dai test automatizzati. In questa sessione l’applicazione era avviabile sulla porta 3100, ma il desktop non ha aperto una finestra Chromium e il browser condiviso ha restituito “Browser Use could not read requirements”. Non è stato possibile osservare lo zoom reale; non viene registrato come superato. Restano necessari anche Safari/iPhone fisico e un lettore di schermo disponibile sul dispositivo di destinazione.
