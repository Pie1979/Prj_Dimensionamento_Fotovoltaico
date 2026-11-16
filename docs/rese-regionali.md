# Rese fotovoltaiche regionali SunSize

Elaborazione SunSize su dati ufficiali PVGIS: non una tabella di medie regionali pubblicata dalla Commissione europea e non una valutazione del singolo tetto.

## Fonte e condizioni comuni

- [PVGIS, Commissione europea / Joint Research Centre](https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en), versione **5.3**; database **PVGIS-SARAH3, 2005–2023**, verificato in ogni risposta. Nessun miscuglio con PVGIS 6 o altri periodi.
- Sistema da **1 kWp**, silicio cristallino (`crystSi`), moduli ventilati (`mountingplace=free`), distinto dai moduli integrati nell'edificio.
- Orientamento **sud**, azimut PVGIS 0°; inclinazione **30°**, senza ottimizzazione automatica.
- Perdite di sistema impostate **14%**. PVGIS considera anche temperatura, incidenza ecc.: il 14% non rappresenta da solo tutte le perdite. La resa elettrica restituita include già il modello delle perdite e non viene ridotta di un altro 14% nell'app.
- Orizzonte del terreno attivo (`usehorizon=1`). Ombre locali di alberi, comignoli o edifici non rilevate.
- Campo usato: `outputs.totals.fixed.E_y`, kWh/anno per un sistema da 1 kWp: resa numericamente in **kWh/kWp/anno**. Non si usa l'irraggiamento `H(i)_y`, espresso in kWh/m².

[Documentazione API](https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/using-pvgis-5/api-non-interactive-service_en). Attribuzione: PVGIS © European Communities, 2001–2026; elaborazione SunSize.

## Campionamento e aggregazione

1. Confini [Eurostat/GISCO NUTS 2024, livello 2, EPSG:4326, scala 1:1 milione](https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_RG_01M_2024_4326_LEVL_2.geojson). Fonte Eurostat/GISCO; © EuroGeographics per i confini amministrativi. [Condizioni GISCO](https://ec.europa.eu/eurostat/web/gisco/geodata/administrative-units/countries).
2. Centri di una griglia di **0,5°** all'interno della regione, esclusi i buchi dei poligoni. Origine dei centri: passo/2 (es. 41,25°, 41,75°). Se i punti sono meno di cinque, per tutta quella regione la griglia passa a **0,25°**.
3. Trento e Bolzano vengono uniti prima dell'aggregazione nella voce **Trentino-Alto Adige**: le opzioni sono le 20 regioni italiane.
4. Media dei campioni pesata con `cos(latitudine)`, proporzionale all'area delle celle della stessa risoluzione. Arrotondamento al multiplo di **10 kWh/kWp/anno** più vicino.
5. Tutti i **209 campioni** devono essere disponibili e validi. Un errore interrompe la generazione, senza inventare dati o scartare punti silenziosamente.

È una **media spaziale approssimata per campionamento**, non una statistica esatta dell'intera superficie regionale né una media pesata per popolazione, tetti abitati o impianti. Include anche aree montane. La risoluzione, il numero di campioni e le differenze interne alla regione limitano la precisione. Una stima locale o del preventivo resta preferibile. Minimi e massimi dei campioni sono registrati per controllo: non sono intervalli di confidenza o garanzie.

## Valori proposti

| Regione | Resa kWh/kWp/anno | Punti | Griglia |
| --- | ---: | ---: | ---: |
| Abruzzo | 1350 | 19 | 0.25° |
| Basilicata | 1410 | 17 | 0.25° |
| Calabria | 1390 | 6 | 0.5° |
| Campania | 1350 | 7 | 0.5° |
| Emilia-Romagna | 1330 | 9 | 0.5° |
| Friuli-Venezia Giulia | 1230 | 13 | 0.25° |
| Lazio | 1440 | 9 | 0.5° |
| Liguria | 1310 | 9 | 0.25° |
| Lombardia | 1300 | 14 | 0.5° |
| Marche | 1330 | 17 | 0.25° |
| Molise | 1390 | 8 | 0.25° |
| Piemonte | 1260 | 11 | 0.5° |
| Puglia | 1470 | 7 | 0.5° |
| Sardegna | 1500 | 9 | 0.5° |
| Sicilia | 1550 | 10 | 0.5° |
| Toscana | 1380 | 11 | 0.5° |
| Trentino-Alto Adige | 1220 | 7 | 0.5° |
| Umbria | 1340 | 13 | 0.25° |
| Valle d’Aosta | 1240 | 6 | 0.25° |
| Veneto | 1280 | 7 | 0.5° |

## Riproducibilità

- `lib/regional-yields.json`: tabella usata nel client, provenienza, periodo, parametri, data di estrazione e media non arrotondata.
- `data/pvgis/observations.json`: tutte le coordinate, gli URL, gli input restituiti e i risultati annuali. Non viene importato nel client.
- `data/pvgis/italy-nuts2-2024.geojson`: confini italiani, con hash SHA-256 nei metadati.
- `scripts/generate-regional-yields.py`: Python standard e curl, tre richieste simultanee; cache delle risposte in `/tmp/sunsize-pvgis-cache`.

```sh
python scripts/generate-regional-yields.py
npm test
```

Il comando riproduce i risultati dalla cache. Per un nuovo aggiornamento remoto eliminare la sola cache `/tmp/sunsize-pvgis-cache` prima della rigenerazione. Periodi o versioni diversi richiedono revisione esplicita: il generatore rifiuta periodi non omogenei.

## Interfaccia

Nessuna regione preselezionata. La scelta compila la resa e aggiorna produzione e risultati. **Ho il valore del preventivo** permette un valore manuale distinto, conservato quando si cambia modalità. Il risultato mostra l'origine della resa effettivamente utilizzata. Nessuna chiamata esterna durante la compilazione: i dati sono inclusi nell'app.
