import { GeoJSONFeature } from 'maplibre-gl'
import React from 'react'
import { TagsTableRow, TagsTableRowProps } from '../TagsTableRow'
import { ConditionalFormattedValue } from '../translations'

type Props = Pick<TagsTableRowProps, 'sourceId' | 'tagKey'> & {
  properties: GeoJSONFeature['properties']
}

// Gute Liste:
// https://wiki.openstreetmap.org/wiki/DE:Verkehrszeichen_in_Deutschland
const trafficSigns: Record<string, { title: string; signUrl: string }> = {
  '240': {
    title: 'Zeichen 240, Gemeinsamer Geh- und Radweg',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Zeichen_240_-_Gemeinsamer_Fu%C3%9F-_und_Radweg%2C_StVO_1992.svg',
  },
  '241': {
    title: 'Zeichen 241, Getrennter Geh- und Radweg oder Getrennter Rad- und Gehweg',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/86/Zeichen_241-30_-_getrennter_Rad-_und_Fu%C3%9Fweg%2C_StVO_1992.svg',
  },
  '241-30': {
    title: 'Zeichen 241-30, Getrennter Geh- und Radweg (Radweg links)',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/86/Zeichen_241-30_-_getrennter_Rad-_und_Fu%C3%9Fweg%2C_StVO_1992.svg',
  },
  '241-31': {
    title: 'Zeichen 241-31, Getrennter Rad- und Gehweg (Radweg rechts)',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/68/Zeichen_241-31_-_getrennter_Fu%C3%9F-_und_Radweg%2C_StVO_1992.svg',
  },
  '1022-10': {
    title: 'Zusatzzeichen 1022-10, Radfahrer frei',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Zusatzzeichen_1022-10_-_Radfahrer_frei%2C_StVO_1992.svg',
  },
  '244.1': {
    title: 'Zeichen 244.1, Fahrradstraße (Beginn)',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Zeichen_244_-_Beginn_der_Fahrradstra%C3%9Fe%2C_StVO_1997.svg',
  },
  '1020-30': {
    title: 'Zusatzzeichen 1020-30, Anlieger frei',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Zusatzzeichen_1020-30_-_Anlieger_frei_%28600x330%29%2C_StVO_1992.svg',
  },
  '237': {
    title: 'Zeichen 237, Radweg',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Zeichen_237_-_Sonderweg_Radfahrer%2C_StVO_1992.svg',
  },
  '239': {
    title: 'Zeichen 239, Gehweg',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zeichen_239_-_Sonderweg_Fu%C3%9Fg%C3%A4nger%2C_StVO_1992.svg',
  },
  '1000-30': {
    title: 'Zusatzzeichen 1000-30, Beide Richtungen',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Zusatzzeichen_1000-30_-_beide_Richtungen%2C_zwei_gegengerichtete_waagerechte_Pfeile%2C_StVO_1992.svg',
  },
  '1000-31': {
    title: 'Zusatzzeichen 1000-31, Beide Richtungen',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Zusatzzeichen_1000-31_-_beide_Richtungen%2C_zwei_gegengerichtete_senkrechte_Pfeile%2C_StVO_1992.svg',
  },
  '1026-35': {
    title: 'Zusatzzeichen 1026-35, Lieferverkehr frei',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Zusatzzeichen_1026-35_-_Lieferverkehr_frei%2C_StVO_1992.svg',
  },
  '274.1': {
    title: 'Beginn einer Tempo 30-Zone',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/eb/Zeichen_274.1_-_Beginn_einer_Tempo_30-Zone%2C_StVO_2013.svg',
  },
  '274.1-20': {
    title: 'Beginn einer Tempo 20-Zone',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Zeichen_274.1-20_-_Beginn_einer_Tempo_20-Zone_in_verkehrsberuhigten_Gesch%C3%A4ftsbereichen_%28einseitig%29%2C_StVO_2013.svg',
  },
  '274-30': {
    title: 'Zulässige Höchst­geschwindigkeit 30 km/h',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Zeichen_274-53.svg',
  },
  // "Kfz frei" hat wohl keine ID https://de.wikipedia.org/wiki/Datei:Zusatzzeichen_KFZ_frei.svg
}

export const TagsTableRowCompositTrafficSign: React.FC<Props> = ({
  sourceId,
  tagKey,
  properties,
}) => {
  const receivedSigns: string[] | undefined = properties['traffic_sign']
    ?.replace('DE:', '')
    ?.split(/[,;]/) // Of course OSM has to have two ways to separate traffic signs =(

  if (!receivedSigns?.length) {
    return (
      <TagsTableRow
        key={tagKey}
        sourceId={sourceId}
        tagKey={tagKey}
        value={properties['traffic_sign']}
      />
    )
  }

  if (properties['traffic_sign'] === 'none') {
    return (
      <TagsTableRow
        key={tagKey}
        sourceId={sourceId}
        tagKey={tagKey}
        value={
          <ConditionalFormattedValue
            sourceId={sourceId}
            tagKey={'traffic_sign'}
            tagValue={properties['traffic_sign']}
          />
        }
      />
    )
  }
  return (
    <TagsTableRow
      key={tagKey}
      sourceId={sourceId}
      tagKey={tagKey}
      value={
        <div className="flex gap-3">
          {receivedSigns.map((sign) => {
            return (
              <div key={sign}>
                <div className="mb-1">
                  {trafficSigns[sign]?.title || <code>{properties['traffic_sign']}</code>}
                </div>
                {trafficSigns[sign]?.signUrl && (
                  <img src={trafficSigns[sign].signUrl} alt="" className="h-12 max-w-[3rem]" />
                )}
              </div>
            )
          })}
        </div>
      }
    />
  )
}
