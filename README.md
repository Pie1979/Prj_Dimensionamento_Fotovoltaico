# SunSize

Simulatore fotovoltaico di PCODING Software: consumi → impianto → risultati, con ipotesi esplicite e calcoli nel browser.

[Design Figma SunSize](https://www.figma.com/design/vcPymGVSDw6q9dbrxBY7K7)

## Avvio

Richiede Node.js 22.18+ (o 24 LTS) per eseguire i test TypeScript senza compilazione aggiuntiva.

```sh
npm ci
npm run dev
```

Apri http://localhost:3000. Per la produzione: `npm run build` e `npm start`. Per GitHub Pages: `npm run build:pages`.

## Percorso

1. **Consumi**: consumo e spesa degli ultimi 12 mesi, con istruzioni per reperirli. La spesa complessiva non viene usata come costo evitabile per kWh: comprende anche costi fissi.
2. **Impianto**: potenza e costo completo del preventivo, produzione specifica e profilo indicativo di autoconsumo. Le ipotesi economiche sono modificabili prima del calcolo.
3. **Risultati**: rientro stimato, benefici annuali distinti, bilancio energetico, saldo cumulato a 15 anni e tabella accessibile dei valori. Si può tornare ai dati senza azzerarli.

Il precedente caricamento simulato della bolletta non viene proposto nel nuovo percorso: non effettuava estrazione OCR. L'inserimento manuale evita risultati basati su valori fittizi. Il contenuto in `public/legacy` resta un archivio della versione precedente e non è il motore del nuovo percorso.

## Stima dalla regione

Il menu include le 20 regioni italiane. La scelta compila automaticamente la resa annua indicativa. **Ho il valore del preventivo** consente una resa manuale distinta; cambiando modalità non si perde il valore precedentemente inserito.

La tabella è un'elaborazione SunSize di **209 campioni PVGIS 5.3/SARAH3, 2005–2023**, con condizioni comuni: sud, inclinazione 30°, perdite di sistema 14%, sistema da 1 kWp. È una media spaziale approssimata: non una tabella regionale ufficiale né una valutazione del singolo tetto. Nessuna chiamata esterna durante la simulazione.

[Metodo, fonti, tabella completa e limiti](docs/rese-regionali.md). Esempio Lazio: **1.440 kWh/kWp/anno**; con 4,5 kWp si stimano 6.480 kWh/anno. Con autoconsumo 40% e prezzi 0,25/0,09 €/kWh: beneficio di 997,92 €/anno prima dei costi esclusi e rientro di circa 7 anni senza detrazione.

## Modello e ipotesi iniziali

| Parametro | Valore iniziale | Significato |
| --- | --- | --- |
| Produzione specifica | Nessuna regione preselezionata | Seleziona una delle 20 regioni oppure inserisci la resa del preventivo |
| Quota autoconsumo | 40% della produzione | Profilo misto, non una misura; alternative 25% e 60% o quota personalizzata |
| Scenario produzione | 100% | Modificabile, ad esempio a 80% o 50% |
| Prezzo energia evitato | 0,25 €/kWh | Ipotesi per le componenti variabili risparmiabili, non tariffa ufficiale |
| Prezzo energia immessa | 0,09 €/kWh | Ipotesi, non ricavo garantito |
| Detrazione fiscale | 0% | Esclusa finché l'utente non imposta un'aliquota verificata |
| Costi ricorrenti | 0 €/anno | Esclusi finché l'utente non li specifica |

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

I test verificano anche che tutte le 20 rese siano riproducibili dai 209 campioni, che la regione non sia scelta implicitamente e che il valore manuale prevalga solo nella modalità corrispondente. I test coprono conservazione dell'energia, limite dell'autoconsumo, detrazione conteggiata una volta, fine del beneficio fiscale, costi ricorrenti, scenari di produzione e parsing numerico italiano. Il percorso è stato verificato in Chromium a 1440, 390 e 320 px, inclusi errori, navigazione e conservazione dei dati.

## Pubblicazione

Il workflow GitHub Pages pubblica i push su `main`; Vercel usa una build Next.js standard. Le modifiche UX vanno revisionate sul ramo dedicato prima dell'integrazione. La versione attualmente pubblicata su Vercel differisce dal `main` esaminato: l'associazione esatta al deployment non è stata verificata, perché la connessione non dispone dell'accesso allo scope Vercel richiesto.
