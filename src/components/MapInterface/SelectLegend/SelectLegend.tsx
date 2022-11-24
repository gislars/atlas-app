import { LocationGenerics } from '@routes/routes'
import { useSearch } from '@tanstack/react-location'
import classNames from 'classnames'
import React from 'react'
import {
  getStyleData,
  MapDataStyleLegend,
  MapDataVisLayer,
  TopicIds,
  TopicStyleIds,
  TopicStyleLegendIds,
} from '../mapData'
import { createTopicStyleKey, createTopicStyleLegendKey } from '../utils'
import {
  LegendDebugInfoLayerStyle,
  LegendDebugInfoTopicLayerConfig,
} from './LegendDebugInfo'
import {
  LegendIconArea,
  LegendIconCircle,
  LegendIconLine,
  LegendIconTypes,
} from './LegendIcons'

type Props = { scopeTopicId: TopicIds }

export const SelectLegend: React.FC<Props> = ({ scopeTopicId }) => {
  const { config: configThemesTopics, theme: themeId } =
    useSearch<LocationGenerics>()
  const topicConfig = configThemesTopics
    ?.find((th) => th.id === themeId)
    ?.topics.find((t) => t.id === scopeTopicId)

  // Guard: Hide UI for inactive topics
  if (!topicConfig?.active) return null

  // Guard: One active style config
  const styleConfig = topicConfig.styles.find((s) => s.active)
  if (!styleConfig) return null

  const styleData = getStyleData(topicConfig.id, styleConfig.id)
  const legends = styleData?.legends?.filter(
    (l) => l.id !== 'ignore' && l.name !== null
  )
  // Guard: Hide UI when no legends present for active style
  // (but vor isDev, give us a helper box to fix the config)
  if (!styleData || !legends?.length) {
    return (
      <LegendDebugInfoTopicLayerConfig
        legends={styleData?.legends}
        topicId={topicConfig.id}
        styleDataLayers={styleData?.layers}
      />
    )
  }

  const handleClick = (
    topicId: TopicIds,
    styleId: TopicStyleIds,
    legendId: TopicStyleLegendIds
  ) => {
    console.log('not implemented,yet', { topicId, styleId, legendId })
  }

  const pickIconFromLayer = (layer: MapDataVisLayer[]) => {
    const styleLayer = layer[0]
    if (styleLayer === undefined) return null

    let color = 'red'
    if (
      styleLayer.type === 'line' &&
      typeof styleLayer?.paint?.['line-color'] === 'string'
    ) {
      color = styleLayer?.paint?.['line-color']
    }
    return iconByStyle(styleLayer.type, color)
  }

  const pickIconFromLegend = (legend: MapDataStyleLegend) => {
    if (!legend?.style?.type && !legend?.style?.color) {
      console.warn('pickIconFromLegend: missing data', {
        type: legend?.style?.type,
        style: legend?.style?.color,
      })
      return null
    }
    return iconByStyle(legend.style.type, legend.style.color)
  }

  const iconByStyle = (type: LegendIconTypes, color: string) => {
    switch (type) {
      case 'line':
        return <LegendIconLine color={color} width={4} />
      case 'circle':
        return <LegendIconCircle color={color} />
      case 'fill':
        return <LegendIconArea color={color} />
      default:
        return <>TODO</>
    }
  }

  return (
    <section className="mt-1 rounded border px-2 py-2.5">
      <fieldset>
        <legend className="sr-only">Legende</legend>
        <div className="space-y-2.5">
          {legends.map((legendData) => {
            // TODO: TS: This should be specified at the source…
            const legendDataId = legendData.id as TopicStyleLegendIds
            if (legendDataId === 'ignore') return null

            const scope = createTopicStyleKey(topicConfig.id, styleConfig.id)
            const key = createTopicStyleLegendKey(
              topicConfig.id,
              styleConfig.id,
              legendDataId
            )

            const active = true // TODO
            const disabled = false // TODO
            const interactive = false // TODO legendData.layers !== null
            const layers = styleData.layers.filter((layer) =>
              legendData?.layers?.includes(layer.id)
            )
            const legendIconFromLayer = layers.length

            return (
              <label
                htmlFor={key}
                className={classNames('group relative flex items-center', {
                  'cursor-pointer': interactive,
                })}
                key={key}
              >
                <div className="h-5 w-5">
                  {legendIconFromLayer
                    ? pickIconFromLayer(layers)
                    : pickIconFromLegend(legendData)}
                </div>
                <div className="flex h-5 items-center ">
                  <input
                    id={key}
                    name={scope}
                    type="checkbox"
                    className="sr-only"
                    defaultChecked={active}
                    disabled={disabled}
                    onChange={() =>
                      interactive &&
                      handleClick(topicConfig.id, styleConfig.id, legendDataId)
                    }
                    value={key}
                  />
                </div>
                <div className="ml-2.5 flex items-center text-sm font-medium text-gray-700">
                  {legendData.name}
                  {legendIconFromLayer ? (
                    <LegendDebugInfoLayerStyle
                      title={`Debug info for legend entry "${legendData.name}" (${legendData.id}): All specified layers and their styles (topic "${topicConfig.id}")`}
                      layers={layers}
                    />
                  ) : (
                    <LegendDebugInfoLayerStyle
                      title={`Debug info: All layer and their styles for topic "${topicConfig.id}" (since topic config does not specify layers (yet or by design))`}
                      layers={styleData.layers}
                    />
                  )}
                </div>
              </label>
            )
          })}
        </div>
      </fieldset>
    </section>
  )
}