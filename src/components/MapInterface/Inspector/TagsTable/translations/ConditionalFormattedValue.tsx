import { SourcesIds, getDatasetOrSourceData } from '@components/MapInterface/mapData'
import { DatasetIds } from '@components/MapInterface/mapData/sourcesMapData/datasets'
import { isDev, isStaging } from '@components/utils'
import React from 'react'
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl'
import { translations } from './translations.const'

type Props = {
  sourceId: SourcesIds | DatasetIds
  tagKey: string
  tagValue: string
}

export const ConditionalFormattedValue: React.FC<Props> = ({ sourceId, tagKey, tagValue }) => {
  // Some data should not be "translated"; we want to show the raw string.
  const sourceData = getDatasetOrSourceData(sourceId)
  const showRawValues =
    sourceData &&
    'disableTranslations' in sourceData.inspector &&
    sourceData.inspector.disableTranslations === true
  if (showRawValues) {
    return <code>{String(tagValue) || '–'}</code>
  }

  // Some values shall be exposed as is, since they are untranslatable (`name`) or translated in `atlas-geo`.
  const categoryTranslatedAlready = sourceId == 'tarmac_poiClassification' && tagKey == 'category'
  if (
    [
      'name',
      'highway_name',
      'highway:name', // bietigheim-bissingen_parking_areas
      'maxstay:conditional', // bietigheim-bissingen_parking_areas
      'operator', // bietigheim-bissingen_parking_areas
      'description',
    ].includes(tagKey) ||
    categoryTranslatedAlready
  ) {
    return <>{tagValue}</>
  }

  // https://formatjs.io/docs/react-intl/components/#formattednumber
  const numberConfigs: { key: string; suffix?: string }[] = [
    { key: 'capacity', suffix: undefined },
    { key: 'highway_width_proc_effective', suffix: 'm' }, // parkraumParkingStats
    { key: 'length', suffix: 'm' },
    { key: 'maxspeed', suffix: 'km/h' },
    { key: 'population', suffix: 'Einwohner:innen' },
    { key: 'width', suffix: 'm' },
    { key: 'sum_km', suffix: 'km' }, // parkraumParkingStats
    { key: 'lane_km', suffix: 'km' }, // parkraumParkingStats
    { key: 'd_other_km', suffix: 'km' }, // parkraumParkingStats
    { key: 'on_kerb_km', suffix: 'km' }, // parkraumParkingStats
    { key: 'half_on_kerb_km', suffix: 'km' }, // parkraumParkingStats
    { key: 'street_side_km', suffix: 'km' }, // parkraumParkingStats
    { key: 'length_wo_dual_carriageway', suffix: 'km' }, // parkraumParkingStats
    { key: 'done_percent', suffix: '%' }, // parkraumParkingStats
    { key: 'admin_level', suffix: undefined },
    { key: 'maxstay', suffix: 'Minuten' }, // bietigheim-bissingen_parking_areas
    { key: 'parking:levels', suffix: 'Stockwerke' }, // bietigheim-bissingen_parking_areas
  ]
  const numberConfig = numberConfigs.find((c) => c.key === tagKey)
  if (numberConfig) {
    return (
      <>
        <FormattedNumber value={parseFloat(tagValue)} /> {numberConfig.suffix}
      </>
    )
  }

  const dateKeys = ['population:date']
  if (dateKeys.includes(tagKey)) {
    return (
      <span className="group">
        <FormattedDate value={tagValue} />{' '}
        <code className="text-gray-50 group-hover:text-gray-600">{tagValue}</code>
      </span>
    )
  }

  let translationKey = `${sourceId}--${tagKey}=${tagValue}`

  // Some keys are a duplicate of other Keys.
  // We want them translated only once, so we overwrite them here…
  const keyOverwrites: Record<string, string> = { _parent_highway: 'highway' }
  if (Object.keys(keyOverwrites).includes(tagKey)) {
    tagKey = keyOverwrites[tagKey]
  }

  // Some sources have their keys translated already for a different source, so lets look there…
  const lookAtFirstSources: Record<string, string> = {
    'bietigheim-bissingen_on_street_parking_lines': 'parkraumParking',
    'bietigheim-bissingen_parking_areas': 'parkraumParkingAreas',
  }
  const lookAtThisSourceFirst = Object.keys(lookAtFirstSources).find((s) => s === sourceId)
  if (lookAtThisSourceFirst) {
    const translationKeyCandidate = `${lookAtFirstSources[lookAtThisSourceFirst]}--${tagKey}=${tagValue}`
    translationKey = translations[translationKeyCandidate]
      ? translationKeyCandidate
      : translationKey
  }

  // Some tags are translated already for a different key, so lets look there…
  // Keys need to be source specific, otherwise there is interference with the next step.
  const lookThereForKey: Record<string, string> = {
    'tarmac_roadClassification--category': 'highway',
  }
  const lookThereForKeyEntry = Object.keys(lookThereForKey).find(
    (k) => k === `${sourceId}--${tagKey}`
  )
  if (lookThereForKeyEntry) {
    tagKey = lookThereForKey[lookThereForKeyEntry]
    translationKey = `ALL--${lookThereForKey[lookThereForKeyEntry]}=${tagValue}`
  }

  // Lastly…
  // Some TagKeys are not specific per source; we only translate those once
  const nonCategorizedTagKeys = [
    '_parent_highway',
    'highway',
    'smoothness',
    'surface',
    'category',
    'traffic_sign',
  ]
  if (nonCategorizedTagKeys.includes(tagKey)) {
    translationKey = `ALL--${tagKey}=${tagValue}`
  }

  // It will take a while to translate everything. This fallback does look better on production.
  const defaultMessage = isDev || isStaging ? translationKey : tagValue

  return <FormattedMessage id={translationKey} defaultMessage={defaultMessage} />
}
