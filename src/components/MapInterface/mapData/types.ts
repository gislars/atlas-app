import mapboxgl from 'mapbox-gl'
import {
  TopicIds,
  TopicStyleFilterIds,
  TopicStyleIds,
} from './mapDataConfig.const'
import { SourcesIds, SourcesRasterIds } from './sourcesMapDataConfig'
import { MapDataConfigThemeIds } from './themesMapDataConfig'

/** @desc: The raw vector tile data; no UI representation; name fixed by library */
export type MapDataSource<TIds> = {
  id: TIds
  /** @desc URL of the vector tiles */
  tiles: string
  attributionHtml: string // TODO anzeigen in der Karte
  /** @desc Show link to the external legend of that map layer. Will replace {z}/{x}/{y} if present  */
  legendUrl?: string
} & MapDataConfigRasterSources

type MapDataConfigRasterSources = {
  name?: string
  type?: mapboxgl.Source['type']
  minzoom?: mapboxgl.RasterSource['minzoom']
  maxzoom?: mapboxgl.RasterSource['maxzoom']
  tileSize?: mapboxgl.RasterSource['tileSize']
}

/** @desc: Top level thematik filter; usually one Theme has one primary Topic; eg. 'Radinfrastruktur, Quellen & Ziele, Straßentypen' */
export type MapDataTheme = {
  id: MapDataConfigThemeIds
  name: string
  desc?: string
}

/** @desc: Thematic "filter" on the raw vector tile data; eg. 'Radinfrastruktur, Oberflächen, Beleuchtung' */
export type MapDataTopic = {
  id: TopicIds
  name: string
  desc: string
  defaultVisible: boolean
  sourceId: SourcesIds
  styles: MapDataStyle[]
}

/** @desc: Different visual views of the same thematic data; Can contain static filter, eg. "only lines with todos"); eg. 'Default,  Bad infrastructure (only)', 'Where debugging is needed' */
export type MapDataStyle = {
  id: TopicStyleIds
  name: string
  desc: null | string
  layers: MapDataVisLayer[]
  interactiveFilters: null | MapDataStyleInteractiveFilter[]
}

/** @desc: The technical glue between sources and styles. name fixed by library */
export type MapDataVisLayer = (
  | mapboxgl.CircleLayer
  | mapboxgl.FillLayer
  | mapboxgl.HeatmapLayer
  | mapboxgl.LineLayer
  | mapboxgl.SymbolLayer
) & {
  enableInspector?: boolean
  enableCalculator?: boolean
}

/** @desc: Optional interactive filter of the styled data; eg. 'by year' */
export type MapDataStyleInteractiveFilter = {
  id: TopicStyleFilterIds
  name: string
  desc?: string
  inputType: 'checkbox' | 'radiobutton'
  filterConfig: { lookupKey: string }
  options: MapDataStyleInteractiveFilterOption[]
}

/** @desc: Options for the optional interactive filter of the styled data; eg. 'by year' */
export type MapDataStyleInteractiveFilterOption = {
  id: string
  name: string
  defaultActive?: boolean
}

export type MapData = {
  sources: MapDataSource<SourcesIds>[]
  backgrounds: MapDataSource<SourcesRasterIds>[]
  themes: MapDataTheme[]
  topics: MapDataTopic[]
}
