import { Typography } from '@material-tailwind/react'
import {
  VALLEY_NUM_REG_SPIRIT,
  VALLEY_NUM_SEASON_SPIRIT,
  VALLEY_NUM_WL,
  VALLEY_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  BACKFLIPPING_CHAMPION,
  BOWING_MEDALIST,
  CHEERFUL_SPECTATOR,
  CONFIDENT_SIGHTSEER,
  HANDSTANDING_THRILLSEEKER,
  MANTA_WHISPERER,
  PROUD_VICTOR,
  LEAPING_DANCER,
  TWIRLING_CHAMPION,
  SPARKLE_PARENT,
  TROUPE_JUGGLER,
  BEARHUG_HERMIT,
  DANCING_PERFORMER,
  PEEKING_POSTMAN,
  SPINNING_MENTOR,
  FORGETFUL_STORYTELLER,
  FRANTIC_STAGEHEAD,
  MELLOW_MUSICIAN,
  MODEST_DANCER,
  MINDFUL_MINER,
  RUNNING_WAYFARER,
  SEED_OF_HOPE,
  WARRIOR_OF_LOVE,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  VT_WL1,
  VT_WL2,
  VT_WL3,
  VT_WL4,
  VT_WL5,
  VT_WL6,
  VT_WL7,
  VT_WL8,
  VT_WL9,
  VT_WL10,
  VT_WL11,
  VT_WL12,
  VT_WL13,
  VT_WL14,
  VT_WL15,
  VT_WL16,
  VT_WL17,
} from '../exports/valleyWLImgUrl'

import {
  MAP4,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON8,
  SEASON13,
  SEASON15,
} from '../exports/seasonIcons'

const youtube_embed = 'https://www.youtube.com/embed/'

export const valley = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Ito ang pinaka-unang constellation - Isle of Dawn. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VALLEY_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito. Andito ang mga spirits ng Pointing
        Candlemaker, Rejecting Voyager at ang Ushering Stargazer.
      </Typography>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'valley1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        difficulty_types: [0, 2, 5],
        spirit_name: 'Backflipping Champion',
        spirit_img_url: BACKFLIPPING_CHAMPION,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          'Pasok ka Pang-Apat na Mapa - Valley of Triumph, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',

          'Tumalon ka at igawi mo ang iyong skykid pakaliwa at makikita mo ang maliit na kweba ng Sand Dunes.',

          'Ang Pointing Candlemaker ay nasa labas lng ng pintuan ng kweba.',
        ],
      },
      // {
      //   id: 2,
      //   spirit_id: 'isle2',
      //   season_id: 'season-0',
      //   spirit_type: 'regular',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 15,
      //   difficulty_types: [0, 1],
      //   spirit_name: 'Ushering Stargazer',
      //   spirit_img_url: REJECTING_VOYAGER,
      //   constellation_icon_route: MAP1,
      //   spirit_guide_video_url: youtube_embed + '23ViQEAhj4U',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka patungo sa isang hagdanan na bato sa iyong harapan.',
      //     'Sa ilalim ng dulo ng hagdanan makikita mo ang spirit.',
      //   ],
      // },
      // {
      //   id: 3,
      //   spirit_id: 'isle3',
      //   season_id: 'season-0',
      //   spirit_type: 'regular',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 15,
      //   difficulty_types: [0, 1],
      //   spirit_name: 'Rejecting Voyager',
      //   spirit_img_url: USHERING_STARGAZER,
      //   constellation_icon_route: MAP1,
      //   spirit_guide_video_url: youtube_embed + 'FW3r7r_JaDM',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka patungo sa templo.',

      //     'Pagkalapag sa lupa, igawi mo ang skykid mo sa kaliwang bahagi ng templo ay may maliit na kweba. Pumasok ka at makikita mo ang Rejecting Voyager sa daan.',
      //   ],
      // },
    ],
  },
  {
    label: 'Seasonal Spirits',
    value: 'seasonal_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Nandito ang mga spirits na dumaan noong nakaraang Seasonal Events na
        makikita mo tuwing papasok ka sa Valley of Triumph. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VALLEY_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
      </Typography>
    ),
    spirits: [
      {
        id: 4,
        spirit_id: 'isle4',
        season_id: 'season-1',
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'stance',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Sassy Drifter',
        spirit_img_url: LEAPING_DANCER,
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'ZX1k1hbb_sw',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan.',
          'At malapit sa pader kung saan may mga ulap sa buhangin makikita ang spirit.',
        ],
      },
      // {
      //   id: 5,
      //   spirit_id: 'isle5',
      //   season_id: 'season-2',
      //   spirit_type: 'seasonal',
      //   season: 'Season 2 - Season of Lightseekers',
      //   spirit_category: 'friendship action',
      //   spirit_relive_type: 'carry-memory',
      //   difficulty_level: 20,
      //   difficulty_types: [1, 4],
      //   spirit_name: 'Piggyback Lightseeker',
      //   spirit_img_url: PIGGYBACK_LIGHTSEEKER,
      //   icon_route: SEASON2,
      //   spirit_guide_video_url: youtube_embed + '',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kaliwa.',
      //     'Pagkalagpas mo sa isang maliit na bukid na buhangin, may kweba kang makikita.',
      //   ],
      // },
      // {
      //   id: 6,
      //   spirit_id: 'isle6',
      //   season_id: 'season-3',
      //   spirit_type: 'seasonal',
      //   season: 'Season 3 - Season of Belonging',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 40,
      //   difficulty_types: [0, 2, 3, 5],
      //   spirit_name: 'Boogie Kid',
      //   spirit_img_url: BOOGIE_KID,
      //   icon_route: SEASON3,
      //   spirit_guide_video_url: youtube_embed + 'X2FUMSK0ZLs',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka patungong templo.',
      //     'Sa Kanan may makita kang daanan na ulap, pumasok ka at makita mo sa pintuan ang spirit.',
      //   ],
      // },
      // {
      //   id: 7,
      //   spirit_id: 'isle7',
      //   season_id: 'season-4',
      //   spirit_type: 'seasonal',
      //   season: 'Season 4 - Season of Rythm',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 40,
      //   difficulty_types: [0, 1, 2, 5],
      //   spirit_name: 'Troupe Greeter',
      //   spirit_img_url: TROUPE_GREETER,
      //   icon_route: SEASON4,
      //   spirit_guide_video_url: youtube_embed + '',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kanan.',
      //     'Makikita mo ang Passage Stone na malaking bato kang makikita at sa bandang likod nito ay ang spirit.',
      //   ],
      // },
      // {
      //   id: 8,
      //   spirit_id: 'isle8',
      //   season_id: 'season-7',
      //   spirit_type: 'seasonal',
      //   season: 'Season 7 - Season of Prophecy',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 15,
      //   difficulty_types: [0, 1],
      //   spirit_name: 'Prophet of Water',
      //   spirit_img_url: PROPHET_OF_WATER,
      //   icon_route: SEASON7,
      //   spirit_guide_video_url: youtube_embed + '6t-gksA_AjE',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kanan, may makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan',
      //     'Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
      //   ],
      // },
      // {
      //   id: 9,
      //   spirit_id: 'isle9',
      //   spirit_type: 'seasonal',
      //   season_id: 'season-7',
      //   season: 'Season 7 - Season of Prophecy',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 35,
      //   spirit_name: 'Prophet of Earth',
      //   difficulty_types: [0, 1, 6],
      //   spirit_img_url: PROPHET_OF_EARTH,
      //   icon_route: SEASON7,
      //   spirit_guide_video_url: youtube_embed + '',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kanan, May makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
      //     'Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
      //   ],
      // },
      // {
      //   id: 10,
      //   spirit_id: 'isle10',
      //   season_id: 'season-7',
      //   spirit_type: 'seasonal',
      //   season: 'Season 7 - Season of Prophecy',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 35,
      //   difficulty_types: [0, 2, 6],
      //   spirit_name: 'Prophet of Air',
      //   spirit_img_url: PROPHET_OF_AIR,
      //   icon_route: SEASON7,
      //   spirit_guide_video_url: youtube_embed + '',
      //   spirit_direction: [
      //     'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
      //     'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kanan, May makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
      //     ' Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
      //   ],
      // },
      // {
      //   id: 11,
      //   spirit_id: 'isle11',
      //   season_id: 'season-7',
      //   spirit_type: 'seasonal',
      //   season: 'Season 7 - Season of Prophecy',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 35,
      //   difficulty_types: [0, 1, 6],
      //   spirit_name: 'Prophet of Fire',
      //   spirit_img_url: PROPHET_OF_FIRE,
      //   icon_route: SEASON7,
      //   spirit_guide_video_url: youtube_embed + '',
      //   spirit_direction: [
      //     'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
      //     'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kanan may makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
      //     'Pagkapasok mo, lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
      //   ],
      // },
      // {
      //   id: 12,
      //   spirit_id: 'isle12',
      //   season_id: 'season-17',
      //   spirit_type: 'seasonal',
      //   season: 'Season 17 - Season of Passage',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 15,
      //   difficulty_types: [0, 1],
      //   spirit_name: 'Oddball Outcast',
      //   spirit_img_url: ODDBALL_OUTCAST,
      //   icon_route: SEASON17,
      //   spirit_guide_video_url: youtube_embed + 'Ev1SkZRrwV0',
      //   spirit_direction: [
      //     'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
      //     'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine. ',
      //     'Lumipad ka gawi papuntang kweba ng Cave of Prophecy, at kung saan banda ang spirit na Sassy Drifter, makikita mo ang spirit na ito.',
      //   ],
      // },
      // {
      //   id: 13,
      //   spirit_id: 'isle13',
      //   season_id: 'season-17',
      //   spirit_type: 'seasonal',
      //   season: 'Season 17 - Season of Passage',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 15,
      //   difficulty_types: [0, 1],
      //   spirit_name: 'Tumbling Troublemaker',
      //   spirit_img_url: TUMBLING_TROUBLEMAKER,
      //   icon_route: SEASON17,
      //   spirit_guide_video_url: youtube_embed + 'LQAdsM3l6vg',
      //   spirit_direction: `Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.
      //   Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin. Lumipad
      //   ka gawing kanan. Sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine. Lumipad ka gawi papuntang kweba ng Cave
      //   of Prophecy, bago ka makarating sa Oddball Outcast spirit makikita mo na agad ang spirit na ito.`,
      // },
      // {
      //   id: 14,
      //   spirit_id: 'isle14',
      //   season_id: 'season-17',
      //   spirit_type: 'seasonal',
      //   season: 'Season 17 - Season of Passage',
      //   spirit_category: 'emote',
      //   difficulty_level: 15,
      //   difficulty_types: [0, 1],
      //   spirit_relive_type: 'follow-memory',
      //   spirit_name: 'Melancholy Mope',
      //   spirit_img_url: MELANCHOLY_MOPE,
      //   icon_route: SEASON17,
      //   spirit_guide_video_url: youtube_embed + 'dj5NMRkGBoo',
      //   spirit_direction: [
      //     'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
      //     'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.',
      //     'Lumipad ka gawing papunta sa batong may hagdanan, bago ka makarating sa hagdanan, sa likod ng posteng bato, makikita mo ang spirit na ito.',
      //   ],
      // },
      // {
      //   id: 15,
      //   spirit_id: 'isle15',
      //   season_id: 'season-17',
      //   spirit_type: 'seasonal',
      //   season: 'Season 17 - Season of Passage',
      //   spirit_category: 'emote',
      //   spirit_relive_type: 'follow-memory',
      //   difficulty_level: 15,
      //   difficulty_types: [0, 1],
      //   spirit_name: 'Overactive Overachiever',
      //   spirit_img_url: OVERACTIVE_OVERACHIEVER,
      //   icon_route: SEASON17,
      //   spirit_guide_video_url: youtube_embed + 'JJGW3koPH3Y',
      //   spirit_direction: [
      //     'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
      //     'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
      //     'Lumipad  ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.',
      //     'Lumipad ka pabalik sa San Dunes kung nasaan iyong spirit na Pointing Candlemaker. Sa taas ng kweba malapit na sa dagat makikita mo ang spirit na ito.',
      //   ],
      // },
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
          {VALLEY_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Isle of Dawn, kasama na
        ang 4 na nasa trials ng Season Of Prophecy.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'Isle-WL1',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: VT_WL1 ?? WINGED_LIGHT,
        wl_location: `Nasa tuktok ng unang kweba na makikita mo pagkapasok mo ng Unang Mapa - Isle of Dawn`,
      },
      // {
      //   id: 2,
      //   wl_label: 'Isle-WL2',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-0',
      //   wl_url: ID_WL2 ?? WINGED_LIGHT,
      //   wl_location: `Pagkalabas mo ng unang kweba, makikita mo agad sa gawing kanan, ang sirang bangka namy
      //   winged light sa ibabaw nito.`,
      // },
      // {
      //   id: 3,
      //   wl_label: 'Isle-WL3',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-0',
      //   wl_url: ID_WL3 ?? WINGED_LIGHT,
      //   wl_location: `Pagkalabas mo ng unang kweba,lumipad ka gawing kanan, hanggang sa makita mo ang maliit
      //   na kweba, at sa loob nito ay may isang winged light.`,
      // },
      // {
      //   id: 4,
      //   wl_label: 'Isle-WL4',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-0',
      //   wl_url: ID_WL4 ?? WINGED_LIGHT,
      //   wl_location: `Pagkalabas mo ng unang kweba, lumipad ka ng diretso at makikita mo ang batong
      //   hagdanan, sa dulo nito ay may makikita ka agad na winged light.`,
      // },
      // {
      //   id: 5,
      //   wl_label: 'Isle-WL5',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-0',
      //   wl_url: ID_WL5 ?? WINGED_LIGHT,
      //   wl_location: `Pagkalabas mo ng unang kweba, lumipad ka patungong templo, at sa gawing kanan patungo sa
      //   butterfly cave, kinakailangan mong makaakyat pataas. Pag nakaakyat ka na, may makikita kang lagusan
      //   sa gawing kanan. Pagkapasok mo, sa bandang kanan mo naman ulit may butas kung saan naroron ang isang
      //   winged light.`,
      // },
      // {
      //   id: 6,
      //   wl_label: 'Isle-WL6',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-season-7',
      //   wl_url: ID_WL6 ?? WINGED_LIGHT,
      //   wl_location: `Pumasok ka sa Water Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
      //   makukuha.`,
      // },
      // {
      //   id: 7,
      //   wl_label: 'Isle-WL7',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-season-7',
      //   wl_url: ID_WL7 ?? WINGED_LIGHT,
      //   wl_location: `Pumasok ka sa Earth Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
      //   makukuha.`,
      // },
      // {
      //   id: 8,
      //   wl_label: 'Isle-WL8',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-season-7',
      //   wl_url: ID_WL8 ?? WINGED_LIGHT,
      //   wl_location: `Pumasok ka sa Air Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
      //   makukuha.`,
      // },
      // {
      //   id: 9,
      //   wl_label: 'Isle-WL9',
      //   wl_group: 'wl-isle',
      //   wl_season_group: 'wl-isle-season-7',
      //   wl_url: ID_WL9 ?? WINGED_LIGHT,
      //   wl_location: `Pumasok ka sa Fire Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
      //   makukuha.`,
      // },
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
          {VALLEY_NUM_MAP_SHRINES}
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
      // {
      //   id: 2,
      //   shrine_group: 'shrine-season-17',
      //   shrine_label: 'Map Shrine 2',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location: 'Nasa tuktok ito ng Passage Stone.',
      // },
      // {
      //   id: 3,
      //   shrine_group: 'shrine-season-0',
      //   shrine_label: 'Map Shrine 3',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location: 'Nasa mga labas ng templo.',
      // },
      // {
      //   id: 4,
      //   shrine_group: 'shrine-season-0',
      //   shrine_label: 'Map Shrine 4',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location: 'Nasa tuktok ng butterfly cave',
      // },
      // {
      //   id: 5,
      //   shrine_group: 'shrine-season-7',
      //   shrine_label: 'Map Shrine 5',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location: 'Sa loob ng Cave of Prophecy',
      // },
      // {
      //   id: 6,
      //   shrine_group: 'shrine-season-7',
      //   shrine_label: 'Map Shrine 6',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location: 'Sa water trial',
      // },
      // {
      //   id: 7,
      //   shrine_group: 'shrine-season-7',
      //   shrine_label: 'Map Shrine 7',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location:
      //     'Sa earth trial, bago ka pumasok sa huling pagsubok, nasa bandang kanan pagkaakyat mo sa labas.',
      // },
      // {
      //   id: 8,
      //   shrine_group: 'shrine-season-7',
      //   shrine_label: 'Map Shrine 8',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location: 'Sa earth trial.',
      // },
      // {
      //   id: 9,
      //   shrine_group: 'shrine-season-7',
      //   shrine_label: 'Map Shrine 9',
      //   shrine_url: MAP_SHRINE,
      //   shrine_location:
      //     'sa fire trial, bago mag exit sa 3rd floor, nasa gilid ng lagusan.',
      // },
    ],
  },
]