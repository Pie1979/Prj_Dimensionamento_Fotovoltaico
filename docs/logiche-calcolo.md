# SunSize V2 — Logiche di calcolo

Regole riscontrate nel codice al **14 novembre 2026**, implementazione [0f90d86](https://github.com/Pie1979/Prj_Dimensionamento_Fotovoltaico/tree/0f90d865f9007919e335660fb3585f9188a95aaf). Fonti eseguibili: [motore](../lib/solar-calc.ts), [annualizzazione](../lib/annualize.ts), [tipi](../lib/types.ts), [test numerici](../tests/solar-calc.test.mjs) e [test annualizzazione](../tests/annualize.test.mjs).

## 1. Contratto degli input

Nel modello quote, aliquota e fattore produttivo sono **frazioni**: 40% → `0.4`, 50% → `0.5`, 100% → `1`. La conversione avviene all’ingresso/uscita dell’interfaccia, una sola volta.

| Campo `SimInput` | Unità interna | Valore iniziale | Vincolo |
| --- | --- | --- | --- |
| `consumoKwh` | kWh/anno | 0, campo vuoto | > 0 |
| `spesaAnnua` | €/anno | 0, campo vuoto | > 0 |
| `irraggiamento` | kWh/kWp/anno, resa elettrica | 0, nessuna resa scelta | > 0 |
| `kwp` | kWp | 0, campo vuoto | > 0 |
| `costoImpianto` | € | 0, campo vuoto | > 0 |
| `scenario` | frazione della produzione stimata | 1 | > 0 e ≤ 1 |
| `quotaAutoconsumo` | frazione della produzione richiesta | 0,4 | da 0 a 1 |
| `prezzoEvitato` | €/kWh | 0,25 | ≥ 0 |
| `prezzoVendita` | €/kWh | 0,09 | ≥ 0 |
| `aliquotaDetrazione` | frazione | 0 | da 0 a 1 |
| `manutenzioneAnnua` | €/anno, insieme dei costi ricorrenti inseriti | 0 | ≥ 0 |

Tutti i valori devono essere finiti. `isValidSimulation` controlla il contratto; `calcolaSimulazione` rifiuta input non validi con `RangeError`. Gli zeri dei campi richiesti sono uno stato di compilazione, non una simulazione valida.

La spesa annua è un riferimento richiesto dall’interfaccia: non viene divisa per i consumi per ricavare il prezzo evitato. Quest’ultimo riguarda le componenti variabili risparmiabili e resta un’ipotesi separata.

`UsageContext` contiene orari e batteria, senza assegnare una percentuale numerica. `ProductionChoice` conserva regione e resa manuale separatamente. Il codice storico `irraggiamento` non indica energia solare per m².

## 2. Annualizzazione di un periodo

Input: consumo e spesa positivi e finiti dello stesso periodo; `months` intero da 1 a 12.

```text
Consumo annuo stimato = consumo del periodo / mesi × 12
Spesa annua stimata   = spesa del periodo / mesi × 12
```

Esempio: 500 kWh e 150 € in 2 mesi → 3.000 kWh/anno e 900 €/anno. Il risultato conserva consumo, spesa e mesi originari oltre alle due grandezze estrapolate. Non introduce correzioni stagionali. Modifiche successive ai valori annuali non cancellano la provenienza iniziale e vengono segnalate nell’interfaccia.

## 3. Risoluzione della resa

In modalità regionale, `resolveProductionYield` risolve il codice tra le 20 regioni; se manca, restituisce 0 e la simulazione non è valida. In modalità manuale usa soltanto `manualYield`. I due valori sono conservati nei cambi di modalità.

La resa regionale deriva da 209 osservazioni PVGIS 5.3/SARAH3, periodo 2005–2023, sistema 1 kWp, sud, 30°, silicio cristallino ventilato, perdite di sistema impostate al 14%. È una media spaziale approssimata, non una tabella ufficiale di medie regionali o una valutazione del tetto. Il valore restituito include già il modello delle perdite.

Metodo, aggregazione, coordinate, fonti, tabella completa e rigenerazione sono documentati in [rese-regionali.md](rese-regionali.md). Non applicare un ulteriore ×0,86 né alla resa regionale né automaticamente a quella manuale.

## 4. Bilancio energetico

Definizioni: `K` potenza, `Y` resa, `s` fattore produttivo, `q` quota richiesta, `C` consumo annuo.

```text
P = K × Y × s                 produzione annua stimata
A = min(P × q, C)             energia usata in casa
I = max(0, P − A)             energia immessa in rete
G = C − A                     energia ancora da acquistare
```

Per input validi: `A + I = P`, `A + G = C`, `A ≤ P`, `A ≤ C`, tutte le energie non negative. La quota effettiva usata è `A/P`, che può essere inferiore a `q` quando il fabbisogno limita l’autoconsumo.

L’incidenza sul consumo è `A/C × 100`. `indiceCopertura = P/C × 100` confronta due totali annuali e può superare 100%: non è autonomia dalla rete né una simulazione della coincidenza oraria.

## 5. Benefici operativi e fiscali

Definizioni: `pe` prezzo evitato, `pv` prezzo immesso, `M` costi ricorrenti, `V0` costo completo, `a` aliquota ipotizzata.

```text
R = A × pe                    risparmio energetico annuo
V = I × pv                    ricavi annui dall’immissione
B = R + V − M                 beneficio operativo annuo
D = V0 × a                    recupero fiscale totale ipotizzato
Q = D / 10                    quota fiscale annua negli anni 1–10
F(n) = Q per 1 ≤ n ≤ 10; 0 per n ≥ 11
Beneficio(n) = B + F(n)
```

La detrazione entra **una sola volta**, nei flussi. Il capitale iniziale rimane `V0`, senza sottrarre `D`. Il modello assume l’intero costo come base e il recupero integrale di dieci quote; non determina spese ammissibili, aliquota legale, massimali o capienza fiscale. Un’eventuale base agevolabile separata richiederebbe un input dedicato.

Aliquota zero significa nessun recupero incluso; l’interfaccia propone di impostare un’ipotesi. Aliquota assente e zero esplicito non sono memorizzati come stati numerici distinti. Il 50% degli esempi non è un default o una verifica di spettanza.

Costi ricorrenti zero significa costi **esclusi**, non necessariamente nulli. Un importo annuale inserito si sottrae in tutti gli anni; non costruisce un calendario di sostituzioni straordinarie.

## 6. Saldi e confronto fiscale

```text
Saldo(0) = −V0
Saldo(n) = Saldo(n−1) + B + F(n)

Senza detrazione: −V0 + n × B
Con detrazione:   −V0 + n × B + min(n, 10) × Q
```

`calcolaConfrontoFiscale` esegue due simulazioni omogenee: una con aliquota forzata a zero, l’altra con quella inserita. Non cambiano energia, prezzi, investimento o costi. I flussi da anno 0 ad anno 15 includono risparmio, ricavi, costi/esborso, recupero fiscale, flussi netti e due saldi.

All’anno 0, risparmi/ricavi/quote sono zero e il flusso è `−V0`. Negli anni successivi il campo costi contiene `M`. Dall’11° anno i flussi con e senza detrazione sono uguali; il vantaggio cumulato già maturato rimane nei saldi. Grafico, tabella e schede usano questi stessi risultati.

## 7. Tempo di rientro

Il motore cerca il **primo saldo non negativo** negli anni 1–50. Quando il passaggio avviene nell’anno `n`, interpola:

```text
Rientro = (n − 1) + (−Saldo(n−1)) / Beneficio(n)
```

La frazione è calcolata sull’incremento dell’anno dell’attraversamento. Non si estende la quota fiscale dopo il decimo anno con una divisione permanente `V0/(B+Q)`. Con soli benefici costanti e senza detrazione il calcolo equivale a `V0/B`, se il rientro cade nell’orizzonte ricercato.

Se non viene raggiunto zero entro 50 anni: `payback.reached=false`; il numero interno 51 è una sentinella e non un rientro a 51 anni. Mostrare **“Non raggiunto entro 50 anni”**. Non dividere per benefici nulli o negativi.

Il primo attraversamento non garantisce che il saldo resterà positivo con flussi successivi negativi. Le quote sono attribuite a fine anno e il rientro frazionario è un’interpolazione indicativa, non una previsione del giorno di incasso. I 15 anni del grafico sono distinti dai 50 anni della ricerca. Il KPI non è un ROI percentuale, VAN o TIR.

## 8. Sensibilità di autoconsumo e prezzi

`calcolaScenariSensibilita` ricalcola tre combinazioni:

| Combinazione | Quota richiesta | Prezzo evitato e immesso |
| --- | --- | --- |
| Quota e prezzi ridotti | `clamp(q − 0,10, 0, 1)` | entrambi ×0,9 |
| Ipotesi inserite | `q` | invariati |
| Quota e prezzi aumentati | `clamp(q + 0,10, 0, 1)` | entrambi ×1,1 |

Le variazioni della quota sono in **punti percentuali**, non percentuali relative. Dopo il limite 0–100% resta attivo anche `A ≤ C`. Produzione, fattore produttivo, costo, manutenzione e aliquota non cambiano. Il fattore di produzione `s` è una scelta indipendente da queste tre combinazioni.

Sono scenari illustrativi senza probabilità associate o intervallo completo d’incertezza. Una quota maggiore non implica sempre più beneficio: il risultato dipende anche dal confronto tra prezzo evitato e prezzo di vendita.

## 9. Casi numerici riproducibili

Caso centrale: consumo 3.000 kWh/anno, spesa 900 €/anno, potenza 4,5 kWp, costo 6.990 €, Lazio 1.440 kWh/kWp/anno, fattore produttivo 100%, quota 40%, prezzi 0,25/0,09 €/kWh e costi esclusi. Ipotesi fiscale illustrativa 50%.

| Grandezza | Valore |
| --- | --- |
| Produzione / usata / immessa / da acquistare | 6.480 / 2.592 / 3.888 / 408 kWh/anno |
| Risparmio / ricavi | 648,00 / 349,92 €/anno |
| Beneficio operativo | 997,92 €/anno |
| Recupero fiscale totale / quota annua | 3.495,00 € / 349,50 € per 10 anni |
| Beneficio anni 1–10 / dall’11° anno | 1.347,42 / 997,92 €/anno |
| Rientro senza / con ipotesi | 7,0045695 / 5,1876920 anni; circa 7 anni / 5 anni e 2 mesi |
| Saldo anno 7 senza detrazione | −4,56 €; il rientro visualizzato a 7 anni è arrotondato |
| Saldo anno 10 senza / con | 2.989,20 / 6.484,20 € |
| Saldo anno 15 senza / con | 7.978,80 / 11.473,80 € |

Variazioni del caso centrale, mantenendo il 50% illustrativo salvo indicazioni:

| Caso | Risultato atteso |
| --- | --- |
| Costi 100 €/anno | Operativo 897,92 €; primi 10 anni 1.247,42 €; rientro senza/con 7,7846579 / 5,6035658 anni |
| Resa manuale 1.400 | Produzione 6.300 kWh; operativo 970,20 €; rientro senza/con 7,2047001 / 5,2966583 anni |
| Produzione relativa 50% | Produzione 3.240 kWh; autoconsumo 1.296; immessa 1.944; operativo 498,96 €; rientro senza/con 14,0091390 / 8,2384556 anni |
| Prezzi entrambi zero | Operativo zero; la sola detrazione di 3.495 € non recupera il capitale di 6.990 € entro 50 anni |
| Costi 1.100 €/anno | Operativo −102,08 €; primi 10 anni +247,42 €; nessun rientro entro 50 anni |
| Aliquota zero | Serie fiscali nulle; risultati con/senza numericamente identici |
| Quota richiesta 100% | Autoconsumo limitato a 3.000 kWh; tutto il resto è immesso |

Sensibilità del caso centrale con aliquota illustrativa 50%:

| Quota / prezzi €/kWh | Autoconsumo kWh | Beneficio anni 1–10 | Rientro |
| --- | --- | --- | --- |
| 30%; 0,225 / 0,081 | 1.944 | 1.154,316 €/anno | 6,0555342 anni |
| 40%; 0,250 / 0,090 | 2.592 | 1.347,420 €/anno | 5,1876920 anni |
| 50%; 0,275 / 0,099 | 3.000, limitato al fabbisogno | 1.519,020 €/anno | 4,6016511 anni |

Caso oltre il decimo anno: consumo 1.000 kWh, 1 kWp, resa 1.000, quota 100%, costo 3.000 €, prezzo evitato 0,10 €/kWh, costi zero, aliquota 50%. Operativo 100 €/anno, quota fiscale 150 €/anno per 10 anni. Senza detrazione rientro a 30 anni; con detrazione saldo anno 10 = −500 € e rientro a **15 anni**, non 12.

## 10. Parsing e precisione

`parseNumeroInput` elimina spazi, accetta virgola italiana e punto decimale quando non rappresenta un raggruppamento delle migliaia:

| Testo | Valore |
| --- | --- |
| `6.990,50` | 6990,5 |
| `1.400` | 1400 |
| `4.5` | 4,5 |
| `0.125` oppure `0,125` | 0,125 |
| vuoto | 0, poi il form lo considera mancante se richiesto |
| `abc`, `1,2,3` | `NaN`, rifiutato |
| `-1` | −1, poi i vincoli del campo lo rifiutano |

Non arrotondare prima dei calcoli. `eur` mostra due decimali, `kwh` interi, i prezzi degli scenari tre decimali e `formatPayback` il mese più vicino. Piccoli residui binari come 2.989,2000000000003 non sono differenze economiche da propagare nella UI.

## 11. Compatibilità dei nomi storici

| Nome nel codice | Significato attuale |
| --- | --- |
| `investimentoNetto` | Esborso completo, senza sottrarre la detrazione |
| `produzioneLorda` | Produzione stimata dalla resa elettrica già comprensiva del modello PVGIS delle perdite |
| `ricavoGse` | Valore dell’energia immessa al prezzo ipotizzato; non certifica un contratto o una tariffa GSE |
| `bollettaCumulativa` | Serie di riferimento della spesa; non viene sottratta come risparmio nel rientro |
| `colore` / `VERDICT_STYLES` | Elementi storici del motore; non sostituiscono l’esposizione trasparente delle ipotesi nella V2 |

Le utilità storiche non sono una valutazione economica completa: il colore assegna verde a un rientro ≤3 anni, arancione a ≤5 e rosso oltre; `commentoCopertura` confronta P/C con soglie 2,8, 1,8, 1,2, 0,9 e 0,5. Le schermate V2 attive espongono invece le grandezze e le ipotesi descritte sopra, senza usare queste etichette come garanzia di convenienza. La costante storica `PREZZO_GSE = 0.09` non sostituisce il prezzo modificabile `prezzoVendita` del calcolo.

## 12. Limiti del modello

Modello annuale con prezzi e produzione costanti. Nessuna simulazione oraria, rendimento/capacità dell’accumulo, degrado, inflazione, attualizzazione, finanziamento, calendario di sostituzioni, variazione normativa o verifica fiscale. I costi fissi della bolletta non vengono considerati evitati. Le rese regionali non valutano inclinazione, esposizione e ombre del singolo tetto.

Modificando una regola, aggiornare insieme motore, test, esempi numerici, testi dei risultati e questa documentazione; non correggere soltanto una cifra nel prototipo.
