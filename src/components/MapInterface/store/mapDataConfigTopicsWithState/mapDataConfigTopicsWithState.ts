import { MapDataConfigThemeIds } from '@components/MapInterface/mapData/themesMapDataConfig'
import { mapData } from '../../mapData'
import { TopicsConfig } from './type'

export type Props = { themeId: MapDataConfigThemeIds }

// TOOD Check if we should useMemo this; and find out how
export const mapDataConfigTopicsWithState = ({
  themeId: _todo_themeid,
}: Props) => {
  return mapData.topics.map((topic) => {
    // TODO use themeId to filter topics down to what the theme needs
    // TODO handle the default active values based on the theme
    return {
      id: topic.id,
      active: topic.defaultVisible,
      styles: topic.styles.map((style) => {
        return {
          id: style.id,
          active: style.id === 'default',
          filters: style?.interactiveFilters?.map((filter) => {
            return {
              id: filter.id,
              options: filter.options.map((option) => {
                return {
                  id: option.id,
                  active: option.defaultActive,
                }
              }),
            }
          }),
        }
      }),
    }
  }) as TopicsConfig
}
