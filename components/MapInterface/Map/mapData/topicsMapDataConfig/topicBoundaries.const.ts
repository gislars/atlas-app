import { MapDataConfigTopic } from '../types'

export type TopicBoundariesId = 'boundaries'
export type TopicBoundariesStyleIds = 'default'
export type TopicBoundariesStyleFilterIds = ''

type Topic = MapDataConfigTopic

export const topicBoundaries: Topic = {
  id: 'boundaries',
  name: 'Grenzen',
  desc: '(Nur für Berlin da Datenquelle Parkraum)',
  sourceId: 'parkraumBoundaries',
  visible: true,
  styles: [
    {
      id: 'default',
      name: 'Standard',
      desc: null,
      visible: true,
      layers: [
        {
          id: 'default',
          type: 'line',
          source: 'vts_boundaries_tiles',
          'source-layer': 'public.boundaries',
          filter: ['all', ['>=', 'admin_level', "'10'"]],
          paint: {
            'line-width': 2,
            'line-color': 'rgba(215, 34, 34, 1)',
          },
          enableInspector: true,
          enableCalculator: false,
        },
      ],
      interactiveFilters: null,
    },
  ],
}