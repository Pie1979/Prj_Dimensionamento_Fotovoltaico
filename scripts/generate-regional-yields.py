"""Build SunSize's indicative regional PV yield from a reproducible spatial sample.
Python standard library + curl. Run from repository root. Network calls only at generation time.
"""
import concurrent.futures, hashlib, json, math, pathlib, subprocess, time
from collections import defaultdict
from datetime import datetime, timezone
from urllib.parse import urlencode

ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'pvgis'
CACHE = pathlib.Path('/tmp/sunsize-pvgis-cache')
BOUNDARIES_URL = 'https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_RG_01M_2024_4326_LEVL_2.geojson'
API = 'https://re.jrc.ec.europa.eu/api/v5_3/PVcalc'
PARAMS = dict(peakpower=1, loss=14, angle=30, aspect=0, pvtechchoice='crystSi', mountingplace='free', raddatabase='PVGIS-SARAH3', usehorizon=1, outputformat='json')
NAMES = {'ITC1':'Piemonte','ITC2':"Valle d’Aosta",'ITC3':'Liguria','ITC4':'Lombardia','ITH12':'Trentino-Alto Adige','ITH3':'Veneto','ITH4':'Friuli-Venezia Giulia','ITH5':'Emilia-Romagna','ITI1':'Toscana','ITI2':'Umbria','ITI3':'Marche','ITI4':'Lazio','ITF1':'Abruzzo','ITF2':'Molise','ITF3':'Campania','ITF4':'Puglia','ITF5':'Basilicata','ITF6':'Calabria','ITG1':'Sicilia','ITG2':'Sardegna'}

def ring_contains(ring, x, y):
    inside = False
    for a, b in zip(ring, ring[1:] + ring[:1]):
        if (a[1] > y) != (b[1] > y) and x < (b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0]:
            inside = not inside
    return inside

def contains(geometry, x, y):
    polygons = [geometry['coordinates']] if geometry['type'] == 'Polygon' else geometry['coordinates']
    return any(ring_contains(p[0], x, y) and not any(ring_contains(h, x, y) for h in p[1:]) for p in polygons)

def grid(features, step):
    points = []
    for x in range(math.floor(6/step), math.ceil(19/step)):
        for y in range(math.floor(35/step), math.ceil(48/step)):
            lon, lat = x*step+step/2, y*step+step/2
            if any(contains(f['geometry'], lon, lat) for f in features):
                points.append(dict(latitude=round(lat,4), longitude=round(lon,4), gridStepDegrees=step))
    return points

def fetch(point):
    url = API + '?' + urlencode(dict(lat=point['latitude'], lon=point['longitude'], **PARAMS))
    path = CACHE / (hashlib.sha256(url.encode()).hexdigest() + '.json')
    if not path.exists():
        for attempt in range(3):
            response = subprocess.run(['curl','--fail','--silent','--show-error','--max-time','40',url],capture_output=True,text=True)
            if response.returncode == 0:
                try:
                    value = json.loads(response.stdout)
                    if value['outputs']['totals']['fixed']['E_y'] > 0:
                        path.write_text(response.stdout)
                        break
                except (ValueError, KeyError, TypeError):
                    pass
            if attempt == 2:
                raise RuntimeError(f"PVGIS failed for {point}: {response.stderr[:250]}")
            time.sleep(2 ** (attempt+1))
    value = json.loads(path.read_text())
    meteo = value['inputs']['meteo_data']
    if (meteo['radiation_db'],meteo['year_min'],meteo['year_max']) != ('PVGIS-SARAH3',2005,2023):
        raise ValueError('Unexpected or inconsistent radiation database/period')
    return dict(**point, url=url, inputs=value['inputs'], totals=value['outputs']['totals']['fixed'])

def main():
    DATA.mkdir(exist_ok=True,parents=True); CACHE.mkdir(exist_ok=True)
    boundary_path = DATA / 'italy-nuts2-2024.geojson'
    if not boundary_path.exists():
        raw = subprocess.check_output(['curl','--fail','--silent','--show-error','--max-time','40',BOUNDARIES_URL],text=True)
        collection = json.loads(raw)
        collection['features'] = [f for f in collection['features'] if f['properties'].get('CNTR_CODE') == 'IT']
        boundary_path.write_text(json.dumps(collection,ensure_ascii=False,separators=(',',':'))+'\n')
    features = json.loads(boundary_path.read_text())['features']
    grouped = defaultdict(list)
    for feature in features:
        code = feature['properties']['NUTS_ID']
        grouped['ITH12' if code in ['ITH1','ITH2'] else code].append(feature)
    if set(grouped) != set(NAMES): raise ValueError('Expected exactly 20 Italian regions')
    points=[]
    for code, shapes in sorted(grouped.items()):
        step=.5; selected=grid(shapes,step)
        if len(selected)<5: step=.25; selected=grid(shapes,step)
        if len(selected)<5: raise ValueError(f'Insufficient spatial sample in {code}')
        points += [dict(regionCode=code,**p) for p in selected]
    results=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        futures=[executor.submit(fetch,p) for p in points]
        for future in concurrent.futures.as_completed(futures):
            results.append(future.result())
            if len(results)%20==0: print(f'PVGIS: {len(results)}/{len(points)} punti verificati',flush=True)
    results.sort(key=lambda p:(p['regionCode'],p['longitude'],p['latitude']))
    output=[]
    for code in NAMES:
        observations=[r for r in results if r['regionCode']==code]
        weights=[math.cos(math.radians(r['latitude'])) for r in observations]
        mean=sum(r['totals']['E_y']*w for r,w in zip(observations,weights))/sum(weights)
        output.append(dict(code=code,name=NAMES[code],annualYield=math.floor(mean/10+.5)*10,unroundedMean=round(mean,4),sampleCount=len(observations),gridStepDegrees=observations[0]['gridStepDegrees'],minimumSampleYield=min(r['totals']['E_y'] for r in observations),maximumSampleYield=max(r['totals']['E_y'] for r in observations)))
    metadata=dict(generatedAt=datetime.now(timezone.utc).isoformat(),source='European Commission, Joint Research Centre, PVGIS 5.3',sourceUrl='https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en',api=API,radiationDatabase='PVGIS-SARAH3',period=[2005,2023],parameters=PARAMS,boundariesUrl=BOUNDARIES_URL,boundariesSha256=hashlib.sha256(boundary_path.read_bytes()).hexdigest(),method='Grid-centre sample at 0.5 degrees; 0.25 degrees when fewer than 5 points. Within each region weights are proportional to cos(latitude). Nearest 10 kWh/kWp/year. Trento and Bolzano combined before averaging. Approximate spatial benchmark, not roof- or population-weighted.',pointCount=len(results),unit='kWh/kWp/year')
    (DATA/'observations.json').write_text(json.dumps(dict(metadata=metadata,observations=results),ensure_ascii=False,separators=(',',':'))+'\n')
    (ROOT/'lib'/'regional-yields.json').write_text(json.dumps(dict(metadata=metadata,regions=output),ensure_ascii=False,indent=2)+'\n')
    for region in output: print(f"{region['name']}: {region['annualYield']} kWh/kWp/anno ({region['sampleCount']} punti)")

if __name__ == '__main__': main()
