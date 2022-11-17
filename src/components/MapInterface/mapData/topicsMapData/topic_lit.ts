import { MapDataTopic } from '../types'
import { MapboxStyleLayerGroupLitIds } from './mapboxStyles'
import { mapboxStyleLayers } from './mapboxStyles/mapboxStyleLayers'

const topic = 'lit'
const source = 'tarmac_lit'
const sourceLayer = 'public.lit_verified'
export type TopicLitId = typeof topic
export type TopicLitStyleIds = 'default' | MapboxStyleLayerGroupLitIds
export type TopicLitStyleFilterIds = '_nofilter'

export const topic_lit: MapDataTopic = {
  id: topic,
  name: 'Beleuchtung',
  desc: null,
  sourceId: 'tarmac_lit',
  allowVerify: true,
  exportOptions: {
    requestType: 'lit_verified',
  },
  styles: [
    {
      id: 'default',
      name: 'Standard',
      desc: null,
      layers: mapboxStyleLayers({
        group: 'atlas_lit',
        source,
        sourceLayer,
      }),
      interactiveFilters: null,
    },
    {
      id: 'atlas_lit_complete',
      name: 'Vollständigkeit',
      desc: null,
      layers: mapboxStyleLayers({
        group: 'atlas_lit_complete',
        source,
        sourceLayer,
      }),
      interactiveFilters: null,
    },
    {
      id: 'atlas_lit_fresh',
      name: 'Aktualität',
      desc: null,
      layers: mapboxStyleLayers({
        group: 'atlas_lit_fresh',
        source,
        sourceLayer,
      }),
      interactiveFilters: null,
    },
    {
      id: 'atlas_lit_verified',
      name: 'Prüf-Status',
      desc: null,
      layers: mapboxStyleLayers({
        group: 'atlas_lit_verified',
        source,
        sourceLayer,
      }),
      interactiveFilters: null,
    },
    {
      id: 'atlas_lit_complete_fresh_verified',
      name: 'Vollansicht',
      desc: null,
      layers: mapboxStyleLayers({
        group: 'atlas_lit_complete_fresh_verified',
        source,
        sourceLayer,
      }),
      interactiveFilters: null,
    },
  ],
}
