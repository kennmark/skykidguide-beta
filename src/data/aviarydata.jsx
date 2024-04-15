import { Typography } from '@material-tailwind/react'
import {
  VDO_ITEM_1,
  VDO_ITEM_2,
  VDO_ITEM_3,
  VDO_ITEM_4,
  MLV_ITEM_1,
  MLV_ITEM_2,
  MLV_ITEM_3,
  MLV_ITEM_4,
  EAR_ITEM_1,
  EAR_ITEM_2,
  EAR_ITEM_3,
  EAR_ITEM_4,
  RFH_ITEM_1,
  RFH_ITEM_2,
  RFH_ITEM_3,
  RFH_ITEM_4,
} from '../exports/aviaryCollectibles'
import { AV_MS1 } from '../exports/aviaryMSImgUrl'
import {
  AVIARY_NUM_SEASON_SPIRIT,
  AVIARY_NUM_REG_SPIRIT,
  AVIARY_NUM_WL,
  AVIARY_NUM_MAP_SHRINES,
} from '../exports/constants'
import { NON_SPIRIT, MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import { seasons2023 } from './seasons'

console.log(seasons2023)

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
    label: 'Seasonal Spirits',
    value: 'seasonal_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Nandito ang mga spirits na dumaan noong nakaraang Seasonal Events na
        makikita mo tuwing papasok ka sa Hidden Forest. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {AVIARY_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
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