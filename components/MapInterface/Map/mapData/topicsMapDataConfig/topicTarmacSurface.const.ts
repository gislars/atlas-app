import { MapDataConfigTopic, MapDataConfigVisLayer } from '../types'
import { tarmacStyle } from './utils'

export type TopicTarmacSurfaceId = 'surface'
export type TopicTarmacSurfaceStyleIds = 'default' | 'bad' | 'debug-smoothness'
export type TopicTarmacSurfaceStyleFilterIds = ''

const layers = tarmacStyle.layers.filter(
  (s) => s.metadata.groupName === `fmc-oberflaechenqualitaet`
) as MapDataConfigVisLayer[] // TODO types on tarmacStyle

const layersSurfaceBad = tarmacStyle.layers.filter(
  (s) => s.metadata.groupName === `fmc-surface-bad`
) as MapDataConfigVisLayer[] // TODO types on tarmacStyle

export const topicTarmacSurface: MapDataConfigTopic = {
  id: 'surface',
  name: 'Oberflächenqualität',
  desc: '`smoothness`, `surface` und interpolationen. Für alle Fahrrad-relevanten Wege.',
  sourceId: 'tarmacHighways',
  visible: true,
  styles: [
    {
      id: 'default',
      name: 'Standard',
      desc: null,
      visible: true,
      layers,
      interactiveFilters: null,
    },
    {
      // TODO der default layer wird nicht richtig versteckt, wenn ich auf 'bad' wechsel
      id: 'bad',
      name: 'Schlechte Oberflächen',
      desc: 'Hervorhebung von schlechten Oberflächen.',
      visible: false,
      layers: layersSurfaceBad,
      interactiveFilters: null,
    },
    {
      id: 'debug-smoothness',
      name: 'Debug: Smoothness',
      desc: '`smoothness` Tag fehlt.',
      visible: false,
      layers,
      interactiveFilters: null,
    },
  ],
}