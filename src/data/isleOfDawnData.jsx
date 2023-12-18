import { Typography } from '@material-tailwind/react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import {
  ISLE_NUM_REG_SPIRIT,
  ISLE_NUM_SEASON_SPIRIT,
  ISLE_NUM_WL,
  ISLE_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  CANDLEMAKER,
  REJECTING_VOYAGER,
  USHERING_STARGAZER,
  SASSY_DRIFTER,
  PIGGYBACK_LIGHTSEEKER,
  BOOGIE_KID,
  TROUPE_GREETER,
  PROPHET_OF_AIR,
  PROPHET_OF_EARTH,
  PROPHET_OF_FIRE,
  PROPHET_OF_WATER,
  MELANCHOLY_MOPE,
  ODDBALL_OUTCAST,
  OVERACTIVE_OVERACHIEVER,
  TUMBLING_TROUBLEMAKER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  MAP1,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON7,
  SEASON17,
} from '../exports/seasonIcons'
import {
  ID_WL1,
  ID_WL2,
  ID_WL3,
  ID_WL4,
  ID_WL5,
  ID_WL6,
  ID_WL7,
  ID_WL8,
  ID_WL9,
} from '../exports/isleWLImgUrl'
import {
  ID_MS1,
  ID_MS2,
  ID_MS3,
  ID_MS4,
  ID_MS5,
  ID_MS6,
  ID_MS7,
  ID_MS8,
  ID_MS9,
} from '../exports/isleMSImgUrl'
const youtube_embed = 'https://www.youtube.com/embed/'

export const isleOfDawn = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {ISLE_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito. Andito ang mga spirits ng Pointing
        Candlemaker, Rejecting Voyager at ang Ushering Stargazer.
      </Typography>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'isle1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Pointing Candlemaker',
        spirit_img_url: CANDLEMAKER,
        constellation_icon_route: MAP1,
        spirit_guide_video_url: youtube_embed + 'eNHRHE2OLZc',
        spirit_direction: [
          'Pasok ka Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',

          'Tumalon ka at igawi mo ang iyong skykid pakaliwa at makikita mo ang maliit na kweba ng Sand Dunes.',

          'Ang Pointing Candlemaker ay nasa labas lng ng pintuan ng kweba.',
        ],
      },
      {
        id: 2,
        spirit_id: 'isle2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Ushering Stargazer',
        spirit_img_url: USHERING_STARGAZER,
        constellation_icon_route: MAP1,
        spirit_guide_video_url: youtube_embed + 'EDV18vy6YRE',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka patungo sa isang hagdanan na bato sa iyong harapan.',
          'Sa ilalim ng dulo ng hagdanan makikita mo ang spirit.',
        ],
      },
      {
        id: 3,
        spirit_id: 'isle3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Rejecting Voyager',
        spirit_img_url: REJECTING_VOYAGER,
        constellation_icon_route: MAP1,
        spirit_guide_video_url: youtube_embed + 'snvZf2bOqlc',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka patungo sa templo.',

          'Pagkalapag sa lupa, igawi mo ang skykid mo sa kaliwang bahagi ng templo ay may maliit na kweba. Pumasok ka at makikita mo ang Rejecting Voyager sa daan.',
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
          {ISLE_NUM_SEASON_SPIRIT}
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
        spirit_img_url: SASSY_DRIFTER,
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'OC0M5IYDnck',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan.',
          'At malapit sa pader kung saan may mga ulap sa buhangin makikita ang spirit.',
        ],
      },
      {
        id: 5,
        spirit_id: 'isle5',
        season_id: 'season-2',
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'friendship-action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Piggyback Lightseeker',
        spirit_img_url: PIGGYBACK_LIGHTSEEKER,
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + '6szBwvCEchU',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kaliwa.',
          'Pagkalagpas mo sa isang maliit na bukid na buhangin, may kweba kang makikita.',
        ],
      },
      {
        id: 6,
        spirit_id: 'isle6',
        season_id: 'season-3',
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 40,
        difficulty_types: [0, 2, 3, 5],
        spirit_name: 'Boogie Kid',
        spirit_img_url: BOOGIE_KID,
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'LPVVeJI9kpo',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka patungong templo.',
          'Sa Kanan may makita kang daanan na ulap, pumasok ka at makita mo sa pintuan ang spirit.',
        ],
      },
      {
        id: 7,
        spirit_id: 'isle7',
        season_id: 'season-4',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rhythm',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 40,
        difficulty_types: [0, 1, 2, 5],
        spirit_name: 'Troupe Greeter',
        spirit_img_url: TROUPE_GREETER,
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'ab4I-QSR4sU',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan.',
          'Makikita mo ang Passage Stone na malaking bato kang makikita at sa bandang likod nito ay ang spirit.',
        ],
      },
      {
        id: 8,
        spirit_id: 'isle8',
        season_id: 'season-7',
        spirit_type: 'seasonal',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Prophet of Water',
        spirit_img_url: PROPHET_OF_WATER,
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'TMz1D1PXGYU',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan, may makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan',
          'Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
        ],
      },
      {
        id: 9,
        spirit_id: 'isle9',
        spirit_type: 'seasonal',
        season_id: 'season-7',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        spirit_name: 'Prophet of Earth',
        difficulty_types: [0, 1, 6],
        spirit_img_url: PROPHET_OF_EARTH,
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'zE7Js8dqFfU',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan, May makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
          'Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
        ],
      },
      {
        id: 10,
        spirit_id: 'isle10',
        season_id: 'season-7',
        spirit_type: 'seasonal',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Prophet of Air',
        spirit_img_url: PROPHET_OF_AIR,
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'uGk2xSqdobk',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan, May makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
          ' Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
        ],
      },
      {
        id: 11,
        spirit_id: 'isle11',
        season_id: 'season-7',
        spirit_type: 'seasonal',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 1, 6],
        spirit_name: 'Prophet of Fire',
        spirit_img_url: PROPHET_OF_FIRE,
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'bEOTU3o7iuM',
        spirit_direction: [
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan may makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
          'Pagkapasok mo, lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
        ],
      },
      {
        id: 12,
        spirit_id: 'isle12',
        season_id: 'season-17',
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Oddball Outcast',
        spirit_img_url: ODDBALL_OUTCAST,
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'jBp8u1A0nmg',
        spirit_direction: [
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine. ',
          'Lumipad ka gawi papuntang kweba ng Cave of Prophecy, at kung saan banda ang spirit na Sassy Drifter, makikita mo ang spirit na ito.',
        ],
      },
      {
        id: 13,
        spirit_id: 'isle13',
        season_id: 'season-17',
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Tumbling Troublemaker',
        spirit_img_url: TUMBLING_TROUBLEMAKER,
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'zv1fVtpaWoY',
        spirit_direction: [
          `Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.`,
          `Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.`,
          `Lumipad ka gawing kanan. Sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.`,
          `Lumipad ka gawi papuntang kweba ng Cave of Prophecy, bago ka makarating sa Oddball Outcast spirit makikita mo na agad ang spirit na ito.`,
        ],
      },
      {
        id: 14,
        spirit_id: 'isle14',
        season_id: 'season-17',
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_relive_type: 'follow-memory',
        spirit_name: 'Melancholy Mope',
        spirit_img_url: MELANCHOLY_MOPE,
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'rPGqdQf90Ns',
        spirit_direction: [
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.',
          'Lumipad ka gawing papunta sa batong may hagdanan, bago ka makarating sa hagdanan, sa likod ng posteng bato, makikita mo ang spirit na ito.',
        ],
      },
      {
        id: 15,
        spirit_id: 'isle15',
        season_id: 'season-17',
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Overactive Overachiever',
        spirit_img_url: OVERACTIVE_OVERACHIEVER,
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'vkO4ujp0JNc',
        spirit_direction: [
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad  ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.',
          'Lumipad ka pabalik sa San Dunes kung nasaan iyong spirit na Pointing Candlemaker. Sa taas ng kweba malapit na sa dagat makikita mo ang spirit na ito.',
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
          {ISLE_NUM_WL}
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
        wl_url: ID_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn,`,
          `Nasa tuktok ng unang kweba sa bandang kaliwa ang winged light.`,
        ],
      },
      {
        id: 2,
        wl_label: 'Isle-WL2',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `Pagkalabas mo ng unang kweba, makikita mo agad sa gawing kanan, ang
          sirang bangka na may winged light sa ibabaw nito.`,
        ],
      },
      {
        id: 3,
        wl_label: 'Isle-WL3',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan, hanggang sa makita mo ang maliit na kweba `,
          `Sa loob nito ay may isang winged light.`,
        ],
      },
      {
        id: 4,
        wl_label: 'Isle-WL4',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka patungong templo, sa dulo ng hagdanan na bato ay makita mo ang winged light`,
        ],
      },
      {
        id: 5,
        wl_label: 'Isle-WL5',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka patungong templo, may lagusan na ulap sa gawing kanan pumasok ka`,
          `Pagdating sa butterfly cave, kinakailangan mong makaakyat pataas. Pag nakaakyat ka na, may makikita kang lagusan
        sa gawing kanan.`,
          `Pagkapasok mo, sa bandang kanan mo naman ulit may butas kung saan naroron ang isang winged light.`,
        ],
      },
      {
        id: 6,
        wl_label: 'Isle-WL6',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Water Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 7,
        wl_label: 'Isle-WL7',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Earth Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 8,
        wl_label: 'Isle-WL8',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Air Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 9,
        wl_label: 'Isle-WL9',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Fire Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
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
          {ISLE_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Isle of Dawn.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 1',
        shrine_url: ID_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `Pagkalabas mo ay lumipad patungo sa sirang bangka sa baba.At sa itaas lamang
          nito ay ang map shrine.`,
        ],
      },
      {
        id: 2,
        shrine_group: 'shrine-season-17',
        shrine_label: 'Map Shrine 2',
        shrine_url: ID_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan nasa tuktok ito ng
          Passage Stone.`,
        ],
      },
      {
        id: 3,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 3',
        shrine_url: ID_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad patungong templo.`,
          `Pumasok ka sa lagusan sa gawing kanan at may 2-player door, umakyat ka pataas at pumasok ka sa gawing kanan na lagusan.`,
          `At sa dulo ng tunnel ay sa tuktok ng Butterfly Cave makita ang map shrine.`,
        ],
      },
      {
        id: 4,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 4',
        shrine_url: ID_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad patungong templo.`,
          `Pagkalapag ay nasa daanan lang ang map shrine.`,
        ],
      },
      {
        id: 5,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 5',
        shrine_url: ID_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, tumalon ka pakaliwa sa ibaba lang mismo makikita ang map shrine.`,
        ],
      },
      {
        id: 6,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 6',
        shrine_url: ID_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Water Trial nasa gawing kanan ang map shrine.`,
        ],
      },
      {
        id: 7,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 7',
        shrine_url: ID_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Earth Trial, Pagdumating ka sa aakyat ng hagdaan, sa kanan nito ang map shrine.`,
        ],
      },
      {
        id: 8,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 8',
        shrine_url: ID_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Air Trial`,
        ],
      },
      {
        id: 9,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 9',
        shrine_url: ID_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Fire Trial, at bago pumasok sa 3rd floor nasa gawing kanan ng pintuan ang map shrine.`,
        ],
      },
    ],
  },
]
