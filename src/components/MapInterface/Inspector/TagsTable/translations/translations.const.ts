/* prettier-ignore */

// Legend:
// - "ALL" stands for "all sources". Those translations are applied without checking the soureId
export const translations: { [key: string]: string } = {
  'ALL--_parent_highway--key': 'Straßentyp der zugehörigen Straße',
  'ALL--composit_surface_smoothness--key': 'Oberflächenqualität',
  'ALL--highway--key': 'Straßentyp',
  'ALL--highway=construction': 'Straße ist in Bau',
  'ALL--highway=cycleway': 'Radweg',
  'ALL--highway=footway': 'Fußweg',
  'ALL--highway=living_street': 'Verkehrsberuhigter Bereich',
  'ALL--highway=path': 'Weg / Pfad',
  'ALL--highway=primary': 'Hauptverbindungsstraße',
  'ALL--highway=residential': 'Anwohnerstraße',
  'ALL--highway=secondary': 'Landstraße',
  'ALL--highway=pedestrian': 'Fußgängerzone',
  'ALL--highway=service': 'Zufahrtswege',
  'ALL--highway=steps': 'Stufen',
  'ALL--highway=tertiary': 'Kreisstraße (untergeordnete Straße)',
  'ALL--highway=track': 'Wald- / Feldweg',
  'ALL--highway=unclassified': 'Nebenstraßen (Verbindungscharakter)',
  'ALL--left--key': 'Vollständigkeit Links (Linienrichtung)',
  'ALL--left=cyclewaySeparated': 'baulich abgesetzte Radwege',
  'ALL--left=data_no': 'Keine Radinfrastruktur (explizit)',
  'ALL--name--key': 'Name',
  'ALL--oneway--key': 'Fahrtrichtung',
  'ALL--oneway-=1': 'Entgegen der Einbahnstraße freigegeben',
  'ALL--oneway=no': 'Zwei-Richtungsstraße (Zwei-Richtungs-Radweg)',
  'ALL--oneway=yes': 'Einbahnstraße',
  'ALL--right--key': 'Vollständigkeit Rechts (Linienrichtung)',
  'ALL--right=cyclewaySeparated': 'baulich abgesetzte Radwege',
  'ALL--right=data_no': 'Keine Radinfrastruktur (explizit)',
  'ALL--self--key': 'Vollständigkeit Mittellinie',
  'ALL--smoothness=bad': 'Schlecht',
  'ALL--smoothness=excellent': 'Sehr gut',
  'ALL--smoothness=good': 'Gut',
  'ALL--smoothness=intermediate': 'Mittel gut',
  'ALL--smoothness=very_bad': 'Sehr schlecht',
  'ALL--surface=asphalt': 'Asphalt',
  'ALL--surface=cobblestone': 'Kopfsteinpflaster',
  'ALL--surface=compacted': 'Verdichtete Deckschicht',
  'ALL--surface=concrete': 'Beton',
  'ALL--surface=dirt': 'Erde',
  'ALL--surface=fine_gravel': 'Fester Splitt oder Grand',
  'ALL--surface=metal': 'Metall',
  'ALL--surface=paved': 'Versiegelte Oberfläche (unspezifisch)',
  'ALL--surface=paving_stones': 'Pflastersteine',
  'ALL--surface=sett': 'Behauenes Steinpflaster (Kopfsteinpflaster)',
  'ALL--surface=unhewn_cobblestone': 'Kopfsteinplfaster',
  'ALL--traffic_sign--key': 'Verkehrszeichen',
  'ALL--width--key': 'Breite',
  'parkraumParking--capacity--key	': 'Stellplätze',
  'parkraumParking--capacity--key': 'Kapazität',
  'parkraumParking--highway_name--key': 'Straßenname',
  'parkraumParking--highway_width_proc_effective--key': 'Breite Fahrbahn',
  'parkraumParking--length--key': 'Länge',
  'parkraumParking--orientation--key': 'Ausrichtung',
  'parkraumParking--orientation=no': '(!) Kein Parken',
  'parkraumParking--orientation=parallel': 'Parallel',
  'parkraumParking--parking--key': 'Art des Parkens',
  'parkraumParking--parking=lane': 'Auf der Fahrbahn (TODO auch Ausrichtung beachten)',
  'parkraumParking--parking=street_side': 'Parkbuchten',
  'parkraumParking--position--key': 'Position',
  'parkraumParking--position=lane': 'Auf der Fahrbahn',
  'parkraumParking--position=no': 'Kein Parken (explizit angegeben)',
  'parkraumParking--position=separate': 'Parkstand als separate geometrie erfasst; Detailattribute bitte an der separaten Geometrie ablesen.',
  'parkraumParking--source_capacity--key': 'Quelle Kapazität',
  'parkraumParking--source_capacity=estimated': '-',
  'parkraumParking--source_capacity=OSM': 'Kapazität explizit in OSM erfasst.',
  'parkraumParking--surface--key': 'Oberfläche',
  'parkraumParking--title': 'Parkraum',
  'parkraumParkingAreas--access--key': 'Zugang',
  'parkraumParkingAreas--access=customers': 'Kund:innen',
  'parkraumParkingAreas--access=private': 'Privat',
  'parkraumParkingAreas--access=yes': 'Öffentlich',
  'parkraumParkingAreas--building--key': 'Gebäudeart',
  'parkraumParkingAreas--building=carport': 'Carport',
  'parkraumParkingAreas--building=parking': 'Parkhaus',
  'parkraumParkingAreas--building=supermarket': 'Supermarkt',
  'parkraumParkingAreas--capacity--key': 'Kapazität (Explizit, OSM)',
  'parkraumParkingAreas--parking--key': 'Art',
  'parkraumParkingAreas--parking=carport': 'Carport',
  'parkraumParkingAreas--parking=carports': 'Carport',
  'parkraumParkingAreas--parking=multi-storey': 'Parkhaus',
  'parkraumParkingAreas--parking=rooftop': 'Dachparkplatz',
  'parkraumParkingAreas--parking=underground': 'Unterirdisch',
  'parkraumParkingAreas--title': 'Parkplatz-Flächen',
  'tarmac_bikelanes--category--key': 'Radinfrastruktur',
  'tarmac_bikelanes--category=bicycleRoad': 'Fahrradstraße',
  'tarmac_bikelanes--category=cyclewayAlone': 'Radweg, frei geführt',
  'tarmac_bikelanes--category=cyclewayBetweenLanes': 'Radfahrstreifen in Mittellage (Fahrradweiche)',
  'tarmac_bikelanes--category=cyclewayOnHighway': 'Radfahrstreifen auf der Fahrbahn',
  'tarmac_bikelanes--category=cyclewaySeparated': 'Radweg, baulich abgesetzt',
  'tarmac_bikelanes--category=footAndCycleway_segregated': 'Getrennter Geh- und Radweg / Rad- und Gehweg',
  'tarmac_bikelanes--category=footAndCycleway_shared': 'Gemeinsamer Geh- und Radweg',
  'tarmac_bikelanes--category=footway_bicycleYes': 'Gehweg mit Radwegfreigabe',
  'tarmac_bikelanes--category=livingStreet': 'Verkehrsberuhigter Bereich (Spielstraße)',
  'tarmac_bikelanes--category=needsClarification': 'Führungsform unklar. Die Attribute in OpenStreetMap sind nicht ausreichend, um die Führungsform zu kategorisieren. Das deutet darauf hin, dass zusätzlich Attribute in OSM ergänzt werden müssen.',
  'tarmac_bikelanes--category=pedestrianArea_bicycleYes': 'Fußgängerzone, Fahrrad frei',
  'tarmac_bikelanes--cycleway--key': 'Radinfrastruktur Details',
  'tarmac_bikelanes--cycleway=crossing': 'Straßenquerung für Fahrradfahrer:innen',
  'tarmac_bikelanes--cycleway=lane': 'Radfahrstreifen (auf der Fahrbahn, durch Linie abgesetzt)',
  'tarmac_bikelanes--cycleway=track': 'Separat geführte Infrastruktur (primär vom KfZ separiert)',
  'tarmac_bikelanes--oneway--key': 'Einbahnstraße',
  'tarmac_bikelanes--oneway=no': '(!) Sonderfall: Zwei-Richtungs-Radweg (in einer Geometrie dargestellt)',
  'tarmac_bikelanes--oneway=yes': 'Ein-Richtungs-Radweg',
  'tarmac_bikelanes--title': 'Daten zu Radinfrastruktur',
  'tarmac_bikelanesPresence--title': 'Daten zu Vollständigkeit der Radinfrastruktur',
  'tarmac_boundaries--admin_level--key': 'Grenzen Level',
  'tarmac_boundaries--admin_level=7': 'Level 7 — Meistens Verwaltungsgemeinschaft, Amt', // https://wiki.openstreetmap.org/wiki/DE:Grenze
  'tarmac_boundaries--admin_level=8': 'Level 8 — Meistens (Kreisangehörige) Gemeinde / Stadt',
  'tarmac_boundaries--title': 'Grenzen',
  'tarmac_education--amenity--key': 'Art der Bildngseinrichtung',
  'tarmac_education--amenity=kindergarten': 'Kindergarten',
  'tarmac_education--amenity=school': 'Schule',
  'tarmac_education--title': 'Daten zu Bildungseinrichtungen',
  'tarmac_landuse--landuse--key': 'Landnutzung',
  'tarmac_landuse--landuse=allotments': 'Kleingartenanlage',
  'tarmac_landuse--landuse=commercial': 'Gewerbliche Nutzung',
  'tarmac_landuse--landuse=farmyard': 'Landwirdschaftliche Nutzung',
  'tarmac_landuse--landuse=residential': 'Wohngebiet',
  'tarmac_landuse--landuse=retail': 'Gewerbliche Nutzung (Einzelhandel/Geschäfte)',
  'tarmac_landuse--landuse=school': 'Schulgelände',
  'tarmac_landuse--landuse=university': 'Universitätsgelände',
  'tarmac_landuse--title': 'Daten zur Landnutzung',
  'tarmac_lit--category--key': 'Beleuchtung',
  'tarmac_lit--category=lit': 'Beleuchtet',
  'tarmac_lit--category=special': 'Spezielle Angaben',
  'tarmac_lit--category=unlit': 'Nicht beleuchtet',
  'tarmac_lit--lit--key': 'Beleuchtung Details',
  'tarmac_lit--lit=no': 'Nicht beleuchtet',
  'tarmac_lit--lit=yes': 'Beleuchtet',
  'tarmac_lit--title': 'Daten zur Beleuchtung',
  'tarmac_places--place--key': 'Ortskategorie',
  'tarmac_places--place=borough': 'Stadtteil/Stadtbezirke',
  'tarmac_places--place=city': 'Stadte',
  'tarmac_places--place=hamlet': 'Siedlung',
  'tarmac_places--place=suburb': 'Stadtteil',
  'tarmac_places--place=town': 'Stadt oder große Gemeinde',
  'tarmac_places--place=village': 'Dorf',
  'tarmac_places--population:date--key': 'Datum der Quelle der Einwohner:innen-Anzahl',
  'tarmac_places--population--key': 'Einwohner:innen-Anzahl',
  'tarmac_places--title': 'Daten zu Orten',
  'tarmac_poiClassification--category--key': 'Kategorisierung des POI',
  'tarmac_poiClassification--name--key': 'Name POI',
  'tarmac_poiClassification--title': 'Daten zu Start-Ziel-Punkten',
  'tarmac_poiClassification--type--key': 'Detail-Kategorie',
  'tarmac_poiClassification--type=amenity-doctors': 'Arzt',
  'tarmac_poiClassification--type=amenity-kindergarten': 'Kindergarten',
  'tarmac_poiClassification--type=amenity-place_of_worship': 'Kirche',
  'tarmac_poiClassification--type=amenity-school': 'Schule',
  'tarmac_buildings--title': 'Gebäude',
  'tarmac_buildings--building--key': 'Gebäudeart',
  'tarmac_buildings--building=retail': 'Gebäude des Einzelhandels',
  'tarmac_buildings--building=garages': 'Mehrere Garagen',
  'tarmac_buildings--building=garage': 'Garage (einzeln)',
  'tarmac_poiClassification--type=amenity-fast_food': 'Imbiss',
  'tarmac_poiClassification--type=amenity-bank': 'Bank',
}
