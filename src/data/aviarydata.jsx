import { Typography } from '@material-tailwind/react'
import { AV_MS1 } from '../exports/aviaryMSImgUrl'
import {
  AVIARY_NUM_SEASON_SPIRIT,
  AVIARY_NUM_REG_SPIRIT,
  AVIARY_NUM_WL,
  AVIARY_NUM_MAP_SHRINES,
} from '../exports/constants'
import { NON_SPIRIT, MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import { seasons2023, seasons2024, seasons2025 } from './seasons'

export const aviaryData = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Ito ang pang-walong mapa - Aviary Village. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {AVIARY_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito.
      </Typography>
    ),
    spirits: [],
  },
  {
    label: 'Collectibles',
    value: 'collectibles',
    desc: (
      <Typography className="antialiased font-sans">
        Nandito ang mga collectibles na dumaan noong nakaraang Seasonal Events
        na maari mong makuha kapag ito ay bumalik bilang TS. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {AVIARY_NUM_SEASON_SPIRIT}
        </span>{' '}
        collectibles makukuha dito.
      </Typography>
    ),
    spirits: [
      //NON_SPIRIT
      {
        spirit_id: 'revival-1',
        spirit_name: seasons2023[3].season_spirits[0].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[0].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[0].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[0].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[0].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_name: seasons2023[3].season_spirits[1].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[1].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[1].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[1].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[1].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_name: seasons2023[3].season_spirits[2].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[2].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[2].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[2].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[2].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_name: seasons2023[3].season_spirits[3].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[3].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[3].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[3].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[3].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      {
        spirit_name: seasons2024[1].season_spirits[0].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[0].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[0].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[0].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[0].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_name: seasons2024[1].season_spirits[1].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[1].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[1].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[1].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[1].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_name: seasons2024[1].season_spirits[2].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[2].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[2].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[2].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[2].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_name: seasons2024[1].season_spirits[3].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[3].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[3].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[3].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[3].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_name: seasons2024[2].season_spirits[0].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[0].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[0].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[0].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[0].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_name: seasons2024[2].season_spirits[1].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[1].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[1].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[1].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[1].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_name: seasons2024[2].season_spirits[2].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[2].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[2].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[2].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[2].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_name: seasons2024[2].season_spirits[3].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[3].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[3].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[3].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[3].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_name: seasons2024[2].season_spirits[4].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[4].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[4].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[4].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[4].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[4].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[4].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[4].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[4].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[4].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[4].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[4].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_name: seasons2025[0].season_spirits[0].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[0].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[0].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[0].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[0].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        spirit_name: seasons2025[0].season_spirits[1].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[1].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[1].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[1].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[1].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        spirit_name: seasons2025[0].season_spirits[2].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[2].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[2].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[2].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[2].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
    ],
  },
  {
    label: 'Winged Lights',
    value: 'winged_lights',
    desc: (
      <Typography className="antialiased font-sans">
        Sa mapang ito mo rin makikita ang mga Winged Lights kung tawagin. Ito ay
        nagpapataas ng lebel para ikaw ay makalipad ng mas mataas. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {AVIARY_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Hidden Forest.
      </Typography>
    ),
    winged_lights: [],
  },
  {
    label: 'Map Shrines',
    value: 'map_shrines',
    desc: (
      <Typography className="antialiased font-sans">
        Ang Map Shrines ay nagsisilbing gabay upang magtukoy kung ilan at saan
        pa ang kailangan mong kunin na winged lights sa loob ng mapa. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {AVIARY_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Hidden Forest.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: AV_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Aviary Village, ang nasa gitnang portal sa Old Home.`,
          `Or kung nasa Aviary Village ka na,`,
          `Pagkapasok sa portal, dumako sa dulo ng village at malapit sa wardrobe, makikita ang map shrine`,
        ],
      },
    ],
  },
]
