import {
  MapDataConfigTopicIds,
  MapDataConfigTopicStyleFilterIds,
  MapDataConfigTopicStyleIds,
} from './mapDataConfig.const'
import { MapDataConfigSourcesIds } from './sourcesMapDataConfig'
import { MapDataConfigThemeIds } from './themesMapDataConfig'

/** @desc: The raw vector tile data; no UI representation; name fixed by library */
export type MapDataConfigSource = {
  id: MapDataConfigSourcesIds
  /** @desc URL of the vector tiles */
  tiles: string
  attributionHtml: string // TODO anzeigen in der Karte
}

/** @desc: Top level thematik filter; usually one Theme has one primary Topic; eg. 'Radinfrastruktur, Quellen & Ziele, Straßentypen' */
export type MapDataConfigTheme = {
  id: MapDataConfigThemeIds
  name: string
  desc?: string
}

/** @desc: Thematic "filter" on the raw vector tile data; eg. 'Radinfrastruktur, Oberflächen, Beleuchtung' */
export type MapDataConfigTopic = {
  id: MapDataConfigTopicIds
  name: string
  desc: string
  sourceId: MapDataConfigSourcesIds
  visible: boolean
  styles: MapDataConfigStyles[]
}

/** @desc: Different visual views of the same thematic data; Can contain static filter, eg. "only lines with todos"); eg. 'Default,  Bad infrastructure (only)', 'Where debugging is needed' */
export type MapDataConfigStyles = {
  id: MapDataConfigTopicStyleIds
  name: string
  desc: null | string
  visible: boolean
  layers: MapDataConfigVisLayer[]
  interactiveFilters: null | MapDataConfigStyleInteractiveFilter[]
}

/** @desc: The technical glue between sources and styles. name fixed by library */
export type MapDataConfigVisLayer = (
  | mapboxgl.CircleLayer
  | mapboxgl.FillLayer
  | mapboxgl.HeatmapLayer
  | mapboxgl.LineLayer
  | mapboxgl.SymbolLayer
) & { enableInspector?: boolean; enableCalculator?: boolean }

/** @desc: Optional interactive filter of the styled data; eg. 'by year' */
export type MapDataConfigStyleInteractiveFilter = {
  id: MapDataConfigTopicStyleFilterIds
  name: string
  desc?: string
  filterConfig: { lookupKey: string }
  options: { id: string; name: string }[]
}

export type MapDataConfig = {
  sources: MapDataConfigSource[]
  themes: MapDataConfigTheme[]
  topics: MapDataConfigTopic[]
}
