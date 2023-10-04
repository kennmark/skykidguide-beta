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
        spirit_guide_video_url: youtube_embed + 'XN1u4PxlGrs',
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
          'Paglabas mo sa bandang kaliwa ng mga tunnel, ay makita mo ang spirit na ito.',
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
        spirit_relive_type: 'follow-memory',
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
          'Pagkabukas, lumipad patungo sa susunod na gate at sindihan mo ang lumabas na fire icon.',
          'Pagkabukas, lumipad patungo sa batong waiting shed sa itaas ng bukid bandang kaliwa, na may kandila sa ilalim, makita ang spirit.',
        ],
      },
      {
        id: 16,
        spirit_id: 'forest16',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Scaredy Cadet',
        spirit_img_url: SCAREDY_CADET,
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'ygMPERry2xs',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad patungo sa susunod na gate at sindihan mo ang lumabas na fire icon.',
          'Pagkabukas, lumipad patungo sa batong waiting shed sa itaas ng bukid bandang kanan, malapit sa bonfire makita ang spirit.',
        ],
      },
      {
        id: 17,
        spirit_id: 'forest17',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Chuckling Scout',
        spirit_img_url: CHUCKLING_SCOUT,
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'W5gAsEBSNas',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad patungo sa susunod na gate at sindihan mo ang lumabas na fire icon.',
          'Pagkabukas, lumipad ka patungo sa batong tulay at pumasok sa lagusan sa dulo at lumipad paitaas gawing kanan, sa GILID ng treehouse ang spirit.',
        ],
      },
      {
        id: 18,
        spirit_id: 'forest18',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Daydream Forester',
        spirit_img_url: DAYDREAM_FORESTER,
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'douhHwsYmJw',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad patungo sa susunod na gate at sindihan mo ang lumabas na fire icon.',
          'Pagkabukas, lumipad ka patungo sa batong tulay at pumasok sa lagusan sa dulo at lumipad paitaas gawing kanan, sa LIKOD ng treehouse ang spirit.',
        ],
      },
      {
        id: 19,
        spirit_id: 'forest19',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Tinkering Chimesmith',
        spirit_img_url: TINKERING_CHIMESMITH,
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + 'hrEATTwKo5A?start=253',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka pakanan at pumasok ka sa lagusan na ulap.',
          'Lumapag ka sa pinakamalaking isla, at gawing kaliwa sa mga hagdanan ay nandoon ang spirit',
        ],
      },
      {
        id: 20,
        spirit_id: 'forest20',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Light Whisperer',
        spirit_img_url: LIGHT_WHISPERER,
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + 'CjUqSpOT2WA',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka pakanan at pumasok ka sa lagusan na ulap.',
          'Lumapag ka sa pinakamalaking isla, at sa likod lang ng isla makita mo ang spirit na ito',
        ],
      },
      {
        id: 21,
        spirit_id: 'forest21',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Lively Navigator',
        spirit_img_url: LIVELY_NAVIGATOR,
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + '1fPZOKhpqoU',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka pakanan at pumasok ka sa lagusan na ulap.',
          'Lumapag ka sa pangalawang isla mula sa kaliwa, na nakapalibot sa main na isla. Andito ang spirit na ito.',
        ],
      },
      {
        id: 22,
        spirit_id: 'forest22',
        season_id: 'season-9',
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Talented Builder',
        spirit_img_url: TALENTED_BUILDER,
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + 'DgJk7h0sy3w',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka pakanan at pumasok ka sa lagusan na ulap.',
          'Lumapag ka sa unang isla mula sa kanan at makita mo ang spirit dito.',
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
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        bago ka lumapag ay makita mo ang winged light na ito na nasa sanga ng isang puno.`,
      },
      {
        id: 2,
        wl_label: 'Forest-WL2',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL2 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        At sa susunod na gate makita ang winged light na ito`,
      },
      {
        id: 3,
        wl_label: 'Forest-WL3',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL3 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Dumako sa susunod na gate at buksan ito, Pagkalabas dumako sa waiting shed na bato. >>
        Sa kaliwang banda ay may waiting shed na isa at sa pader may makita kang maliit na butas kung nasaan ang winged light.`,
      },
      {
        id: 4,
        wl_label: 'Forest-WL4',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL4 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lakad ng kaonti at tingin sa kanang bahagi sa itaas makita mo ang shed house. >>
        Lipad ka pataas at makita mo ang winged light dito.`,
      },
      {
        id: 5,
        wl_label: 'Forest-WL5',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL5 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, dumako patungo sa tulay at tingin ka sa itaas sa kaliwang banda at makita mo ang shed house. >>
        Lipad ka pataas at makita mo ang winged light dito.`,
      },
      {
        id: 6,
        wl_label: 'Forest-WL6',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL6 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, dumako patungo sa tulay at sa dulo ng lagusan ay makita mo ang winged light.`,
      },
      {
        id: 7,
        wl_label: 'Forest-WL7',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL7 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumakad ng kaonti at sa kanang pader ay may lagusan, pumasok ka. >>
        Paglabas sa Sunny Forest, sa mga malalaking puno sa kanan, lumipad ka at sa likod nito ang winged light.`,
      },
      {
        id: 8,
        wl_label: 'Forest-WL8',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL8 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumakad ng kaonti at sa kanang pader ay may lagusan, pumasok ka. >>
        Paglabas sa Sunny Forest, sa dulo ng malalaking puno ay makita mo ang winged light na elevated sa bato.`,
      },
      {
        id: 9,
        wl_label: 'Forest-WL9',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL9 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumakad ng kaonti at sa kanang pader ay may lagusan, pumasok ka. >>
        Paglabas sa Sunny Forest, dumako sa broken bridge, at sa kaliwa ay may lagusan sa ilalim ng puno, Pumasok ka at gawin ang pouty emote >>
        Pagkababa, lumipad patungo sa dulo at lumipad paakyat. Pasok ka sa lagusan at sa bandang ibaba sa kanng bahagi ay may gate kung nasan ang winged light.`,
      },
      {
        id: 10,
        wl_label: 'Forest-WL10',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL10 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumakad ng kaonti at sa kanang pader ay may lagusan, pumasok ka. >>
        Paglabas sa Sunny Forest, dumako sa broken bridge, at sa kaliwa ay may lagusan sa ilalim ng puno, Pumasok ka at gawin ang pouty emote >>
        Pagkababa, lumipad patungo sa dulo at lumipad paakyat. Pasok ka sa lagusan at sa bandang kaliwa sa unang lagusan, lumipad ka pataas kung nasaan ang winged light.`,
      },
      {
        id: 11,
        wl_label: 'Forest-WL11',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL11 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumakad ng kaonti at sa kanang pader ay may lagusan, pumasok ka. >>
        Paglabas sa Sunny Forest, dumako sa broken bridge, at sa kaliwa ay may lagusan sa ilalim ng puno, Pumasok ka at gawin ang pouty emote >>
        Pagkababa, lumipad patungo sa dulo at lumipad paakyat. Pasok ka sa lagusan at sa bandang kaliwa sa pangalawang lagusan, lumipad ka pataas kung nasaan ang winged light.`,
      },
      {
        id: 12,
        wl_label: 'Forest-WL12',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL12 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumakad ng kaonti at sa kanang pader ay may lagusan, pumasok ka. >>
        Paglabas sa Sunny Forest, dumako sa broken bridge, at sa kaliwa ay may lagusan sa ilalim ng puno, Pumasok ka at gawin ang pouty emote >>
        Pagkababa, lumipad patungo sa dulo at lumipad paakyat. Pumunta ka sa exit gate ng Underground Cave at sa kaliwa nito ang winged light.`,
      },
      {
        id: 13,
        wl_label: 'Forest-WL13',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL13 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumipad patungong lagusan sa dulo. >> Pagdating sa Boneyard ay may tower sa kaliwa kung nassan ang winged light na ito.`,
      },
      {
        id: 14,
        wl_label: 'Forest-WL14',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL14 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumipad patungong lagusan sa dulo. >> Pagdating sa Boneyard,
        lumipad patungo sa mga tunnel at sa kanan, sa butas ng malaking puno ay makita mo ang winged light dito.`,
      },
      {
        id: 15,
        wl_label: 'Forest-WL15',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL15 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumipad patungong lagusan sa dulo. >> Pagdating sa Boneyard, sa dulo ng mga
        broken bridges makita mo ang winged light na ito.`,
      },
      {
        id: 16,
        wl_label: 'Forest-WL16',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL16 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Pagkalapag sa Forest Entrance buksan ang gate. >> Pagkapasok dumako sa sunod na gate at buksan ito >>
        Pagdating sa Forest Brook, lumipad patungong lagusan sa dulo. >> Pagdating sa Boneyard, lumipad
        patungo sa templo. >> Sa labas ng templo, makita mo ang winged light sa kaliwa.`,
      },
      {
        id: 17,
        wl_label: 'Forest-WL17',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL17 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Bago makarating sa gate ng entrance, ay may lagusan sa kanan, pumasok ka >> Paglabas mo sa kweba
        may makita kang duyan sa kanan, at sa itaas nito nakatago ang winged light sa puno.`,
      },
      {
        id: 18,
        wl_label: 'Forest-WL18',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL18 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad pababa sa mga kaulapan. >>
        Bago makarating sa gate ng entrance, ay may lagusan sa kanan, pumasok ka >> Paglabas mo sa kweba
        may makita kang malaking treehouse, pumasok ka. >> at sa loob nito ay may lagusan pababa, makita
        mo ang spirit na ito.`,
      },
      {
        id: 19,
        wl_label: 'Forest-WL19',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL19 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Pangatlong Mapa, lumipad ka gawing kanan at pumasok ka sa lagusan. >>
        Paglabas mo sa Wind Path, ay may malaking isla sa gitna, at sa kanang bahagi ng isla,
        lumipad ka pababa at pumasok ka (red circle) at lalabas ka sa lagusan (yellow circle)`,
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
