import { MapDataConfigSource } from '../types'

// TODO type MapDataConfigSourcesIds = typeof sources[number]['id']
export type MapDataConfigSourcesIds =
  | 'parkraumParking'
  | 'parkraumBoundaries'
  | 'unfallatlas'
  | 'tarmacHighways'
  | 'tarmacPois'

export const sources: MapDataConfigSource<MapDataConfigSourcesIds>[] = [
  {
    id: 'parkraumParking',
    tiles: 'https://vts.mapwebbing.eu/public.parking_segments/{z}/{x}/{y}.pbf',
    attributionHtml: 'todo', // TODO
  },
  {
    id: 'parkraumBoundaries',
    tiles: 'https://vts.mapwebbing.eu/public.boundaries/{z}/{x}/{y}.pbf',
    attributionHtml: 'todo', // TODO
  },
  {
    id: 'unfallatlas',
    tiles: `https://api.mapbox.com/v4/hejco.5oexnrgf/{z}/{x}/{y}.vector.pbf?sku=101bSz70Afq22&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
    attributionHtml: 'todo', // TODO
  },
  {
    id: 'tarmacHighways',
    tiles: `https://api.mapbox.com/v4/hejco.d7mywzd3/{z}/{x}/{y}.vector.pbf?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
    attributionHtml: 'todo', // TODO
  },
  {
    id: 'tarmacPois',
    tiles: `https://api.mapbox.com/v4/hejco.3hccfujx/{z}/{x}/{y}.vector.pbf?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
    attributionHtml: 'todo', // TODO
  },
]