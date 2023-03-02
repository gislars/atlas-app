import { GeoJSONFeature } from 'maplibre-gl'
import React from 'react'
import { TagsTableRow, TagsTableRowProps } from '../TagsTableRow'
import { ConditionalFormattedValue } from '../translations'

type Props = Pick<TagsTableRowProps, 'sourceId' | 'tagKey'> & {
  properties: GeoJSONFeature['properties']
}

const trafficSignImages: Record<string, string> = {
  'DE:240':
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Zeichen_240_-_Gemeinsamer_Fu%C3%9F-_und_Radweg%2C_StVO_1992.svg',
  'DE:1022-10':
    'https://upload.wikimedia.org/wikipedia/commons/0/04/Zusatzzeichen_1022-10_-_Radfahrer_frei%2C_StVO_1992.svg',
  'DE:244.1':
    'https://upload.wikimedia.org/wikipedia/commons/b/bf/Zeichen_244_-_Beginn_der_Fahrradstra%C3%9Fe%2C_StVO_1997.svg',
}

export const TagsTableRowCompositTrafficSign: React.FC<Props> = ({
  sourceId,
  tagKey,
  properties,
}) => {
  return (
    <TagsTableRow
      key={tagKey}
      sourceId={sourceId}
      tagKey={tagKey}
      value={
        <div className="flex gap-3">
          <ConditionalFormattedValue
            sourceId={sourceId}
            tagKey={'traffic_sign'}
            tagValue={properties['traffic_sign']}
          />{' '}
          {trafficSignImages[properties['traffic_sign']] && (
            <img
              src={trafficSignImages[properties['traffic_sign']]}
              alt=""
              className="h-10"
            />
          )}
        </div>
      }
    />
  )
}