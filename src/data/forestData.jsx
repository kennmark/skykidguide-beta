import { Typography } from '@material-tailwind/react'
import {
  FOREST_NUM_REG_SPIRIT,
  FOREST_NUM_SEASON_SPIRIT,
  FOREST_NUM_WL,
  FOREST_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  APOLOGETIC_LUMBERJACK,
  BLUSHING_PROSPECTOR,
  DISMAYED_HUNTER,
  HIDENSEEK_PIONEER,
  POUTY_PORTER,
  SHIVERING_TRAILBLAZER,
  TEARFUL_MINER,
  WHALE_WHISPERER,
  PROVOKING_PERFORMER,
  LAIDBACK_PIONEER,
  HAIRTOUSLE_TEEN,
  ADMIRING_ACTOR,
  BAFFLED_BOTANIST,
  CHUCKLING_SCOUT,
  DAYDREAM_FORESTER,
  MARCHING_ADVENTURER,
  SCAREDY_CADET,
  SCOLDING_SPIRIT,
  LIGHT_WHISPERER,
  LIVELY_NAVIGATOR,
  TALENTED_BUILDER,
  TINKERING_CHIMESMITH,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  MAP3,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON9,
  SEASON11,
} from '../exports/seasonIcons'
import {
  HF_WL1,
  HF_WL2,
  HF_WL3,
  HF_WL4,
  HF_WL5,
  HF_WL6,
  HF_WL7,
  HF_WL8,
  HF_WL9,
  HF_WL10,
  HF_WL11,
  HF_WL12,
  HF_WL13,
  HF_WL14,
  HF_WL15,
  HF_WL16,
  HF_WL17,
  HF_WL18,
  HF_WL19,
} from '../exports/forestImgWLUrl'
const youtube_embed = 'https://www.youtube.com/embed/'

export const hiddenForest = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Ito ang pinaka-unang constellation - Isle of Dawn. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {FOREST_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito. Andito ang mga spirits ng Pointing
        Candlemaker, Rejecting Voyager at ang Ushering Stargazer.
      </Typography>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'forest1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 3],
        spirit_name: 'Shivering Trailblazer',
        spirit_img_url: SHIVERING_TRAILBLAZER,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate',
          `Sindihan mo ang lumabas na fire icon sa kanang banda ng gate upang magbukas.`,
          'Pagkabukas, ay nasa kaliwang banda ng kwarto.',
        ],
      },
      {
        id: 2,
        spirit_id: 'forest2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Blushing Prospector',
        spirit_img_url: BLUSHING_PROSPECTOR,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '5DNs9K-zeeI?start=344',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo sa isang waiting shed na bato.',
          'At sa iyong kaliwa ay may isang waiting shed na isa kung nasaan ang spirit na ito.',
        ],
      },
      {
        id: 3,
        spirit_id: 'forest3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: `Hide'n'Seek Pioneer`,
        spirit_img_url: HIDENSEEK_PIONEER,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '5DNs9K-zeeI?start=646',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo sa batong tulay.',
          'bago sa tulay ay sa iyong kanan ay may dark plants na kailgan sindihan at nasa loob ang spirit na ito.',
        ],
      },
      {
        id: 4,
        spirit_id: 'forest4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Pouty Porter',
        spirit_img_url: POUTY_PORTER,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '5DNs9K-zeeI?start=555',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo sa batong tulay.',
          'At sa iyong kaliwa ay lagusan kung nasaan ang spirit na ito.',
        ],
      },
      {
        id: 5,
        spirit_id: 'forest5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Dismayed Hunter',
        spirit_img_url: DISMAYED_HUNTER,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '5DNs9K-zeeI?start=825',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo sa batong tulay at pumasok sa lagusan sa dulo.',
          'Paglabas mo sa iyong kanan ay nakasilong sa gilid ang spirit na ito.',
        ],
      },
      {
        id: 6,
        spirit_id: 'forest6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Apologetic Lumberjack',
        spirit_img_url: APOLOGETIC_LUMBERJACK,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '5DNs9K-zeeI?start=936',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo sa batong tulay at pumasok sa lagusan sa dulo.',
          'Paglabas mo sa bandang kanan ng mga tunnel, ay makita mo ang spirit na ito.',
        ],
      },
      {
        id: 7,
        spirit_id: 'forest7',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'call',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [1, 8],
        spirit_name: 'Whale Whisperer',
        spirit_img_url: WHALE_WHISPERER,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '5DNs9K-zeeI?start=1108',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon.',
          'Pagkabukas, lumipad ka patungo sa batong tulay at pumasok sa lagusan sa dulo.',
          'Paglabas mo lumipad patungo sa mga sirang tulay, sa kaliwa ay may buto ng whale, sindihan lahat ng dark plants at makuha mo ang spirit na ito.',
        ],
      },
      {
        id: 8,
        spirit_id: 'forest8',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Tearful Light Miner',
        spirit_img_url: TEARFUL_MINER,
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '-qlPyROfiew',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo sa batong tulay at pumasok sa lagusan sa dulo.',
          'Paglabas mo lumipad patungo sa mga sirang tulay, sa kanan ay may cave at nasa loob nito ang spirit.',
        ],
      },
    ],
  },
  {
    label: 'Seasonal Spirits',
    value: 'seasonal_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Nandito ang mga spirits na dumaan noong nakaraang Seasonal Events na
        makikita mo tuwing papasok ka sa Isle of Dawn. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {FOREST_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
      </Typography>
    ),
    spirits: [
      {
        id: 9,
        spirit_id: 'forest9',
        season_id: 'season-1',
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Provoking Performer',
        spirit_img_url: PROVOKING_PERFORMER,
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'Plpl2MGoZYo',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo bago sa batong tulay.',
          'At sa iyong kaliwa ay nasa bunganga ng tunnel ang spirit na ito.',
        ],
      },
      {
        id: 10,
        spirit_id: 'forest10',
        season_id: 'season-2',
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseeker',
        spirit_category: 'stance',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Laidback Pioneer',
        spirit_img_url: LAIDBACK_PIONEER,
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + 'rlMGDjpznZo',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo bago sa batong tulay.',
          'At gawing kanan sa itaas, sa silong ng puno ay makita mo ang spirit na ito.',
        ],
      },
      {
        id: 11,
        spirit_id: 'forest11',
        season_id: 'season-3',
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'friendship-action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 75,
        difficulty_types: [0, 1, 2, 3, 5, 6],
        spirit_name: 'Hairtousle Teen',
        spirit_img_url: HAIRTOUSLE_TEEN,
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + '6TlBquksQa0',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, pumasok ng onti, sa kanan ay may lagusan at pumasok ka, sa Sunny Forest lumipad ka patungo sa sirang tulay.',
          'At gawing kaliwa, sa ilalim ng puno ay may butas at kailangan mo ng kasama gumawa ng pouty emote, pagkababa ay lumipad hanggang dulo at nasa kanan ang spirit na ito',
        ],
      },
      {
        id: 12,
        spirit_id: 'forest12',
        season_id: 'season-4',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Admiring Actor',
        spirit_img_url: ADMIRING_ACTOR,
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'FpCci6gc0Kg',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo sa batong tulay at pumasok sa lagusan sa dulo.',
          'Paglabas mo lumipad patungo sa mga sirang tulay, sa ilalim ng pangalawang waiting shed ay makita ang spirit na ito.',
        ],
      },
      {
        id: 13,
        spirit_id: 'forest13',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Baffled Botanist',
        spirit_img_url: BAFFLED_BOTANIST,
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'ESYM7mzrZv8',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka pakaliwa sa likod ng mga puno makita mo ang spirit na ito.',
        ],
      },
      {
        id: 14,
        spirit_id: 'forest14',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Scolding Student',
        spirit_img_url: SCOLDING_SPIRIT,
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'vRy9eyVQTX0',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad patungo sa susunod na gate at sa kaliwa ay makita mo ang spirit na ito.',
        ],
      },
      {
        id: 15,
        spirit_id: 'forest15',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Marching Adventurer',
        spirit_img_url: MARCHING_ADVENTURER,
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'FIX2wsGwMRk',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad patungo sa susunod na gate at sa kaliwa ay makita mo ang spirit na ito.',
        ],
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
          {FOREST_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Isle of Dawn, kasama na
        ang 4 na nasa trials ng Season Of Prophecy.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'Forest-WL1',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL1 ?? WINGED_LIGHT,
        wl_location: `Nasa tuktok ng unang kweba na makikita mo pagkapasok mo ng Unang Mapa - Isle of Dawn`,
      },
    ],
  },

  {
    label: 'Map Shrines',
    value: 'map_shrines',
    desc: (
      <Typography className="antialiased font-sans">
        Ang Map Shrines ay nagsisilbing gabay upang magtukoy kung ilan at saan
        pa ang kailangan mong kunin na winged lights sa loob ng mapa. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {FOREST_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Isle of Dawn.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 1',
        shrine_url: MAP_SHRINE,
        shrine_location:
          'Makikita mo ito pagkatapos sa pangalawang winged light. Nasa itaas lamang ng bangka.',
      },
    ],
  },
]
