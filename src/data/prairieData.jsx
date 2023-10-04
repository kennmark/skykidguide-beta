import { Typography } from '@material-tailwind/react'
import {
  PRAIRIE_NUM_REG_SPIRIT,
  PRAIRIE_NUM_SEASON_SPIRIT,
  PRAIRIE_NUM_WL,
  PRAIRIE_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  APPLAUDING_BELLMAKER,
  BIRD_WHISPERER,
  BUTTERFLY_CHARMER,
  CEREMONIAL_WORSHIPPER,
  EXHAUSTED_DOCK_WORKER,
  LAUGHING_LIGHT_CATCHER,
  SLUMBERING_SHIPWRIGHT,
  WAVING_BELLMAKER,
  STRETCHING_GURU,
  DOUBLE_FIVE_LIGHT_CATCHER,
  CONFETTI_COUSIN,
  FESTIVAL_SPIN_DANCER,
  CHILL_SUNBATHER,
  GRATEFUL_SHELL_COLLECTOR,
  HIKING_GROUCH,
  JELLY_WHISPERER,
  RALLYING_THRILLSEEKER,
  TIMID_BOOKWORM,
  ASCETIC_MONK,
  JOLLY_GEOLOGIST,
  NIGHTBIRD_WHISPERER,
  REASSURING_RANGER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  PR_WL1,
  PR_WL2,
  PR_WL3,
  PR_WL4,
  PR_WL5,
  PR_WL6,
  PR_WL7,
  PR_WL8,
  PR_WL9,
  PR_WL10,
  PR_WL11,
  PR_WL12,
  PR_WL13,
  PR_WL14,
  PR_WL15,
  PR_WL16,
  PR_WL17,
  PR_WL18,
  PR_WL19,
  PR_WL20,
  PR_WL21,
  PR_WL22,
  PR_WL23,
  PR_WL24,
} from '../exports/prairieWLImgUrl'
import {
  MAP2,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON6,
  SEASON18,
} from '../exports/seasonIcons'

const youtube_embed = 'https://www.youtube.com/embed/'

export const prairie = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Ito ang pangalawang constellation - Daylight Prairie. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {PRAIRIE_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito. Andito ang mga spirits ng
        Applauding Bellmaker, Bird Whisperer, Butterfly Charmer, Ceremonial
        Worshipper, Exhausted Dock Worker, Laughing Light Catcher, Slumbering
        Shipwright at Waving Bellmaker.
      </Typography>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'prairie1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Applauding Bellmaker',
        spirit_img_url: APPLAUDING_BELLMAKER,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'ODMA1Q9155o',
        spirit_direction: [
          'Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan',
          'Pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita at lumusot sa batong pintuan at lumipad.',
          'Pagdating sa Village Islands, lumipad ka gawing kaliwa at may makikita kang isla na may malaking pintuan.',
          'Sindihan ang isang parte ng pintuan at antayin ng may isang manlalaro nag magsindi din sa sa kabila at ito ay magbubukas. Sa loob ang spirit.',
        ],
      },
      {
        id: 2,
        spirit_id: 'prairie2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'sound-call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Bird Whisperer',
        spirit_img_url: BIRD_WHISPERER,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'dMDOQfWCFEg',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka.`,
          `Sa Bird's Nest ay may makikitang kang maraming nakalutang na isla.`,
          `Lumipad ka hanggat makita mo ang nasa dulo na isla at kumikinang na spirit ng Bird Whisperer.`,
        ],
      },
      {
        id: 3,
        spirit_id: 'prairie3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Butterfly Charmer',
        spirit_img_url: BUTTERFLY_CHARMER,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'FL9QRbJfmgw',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, may makikita kang parang hugis globe na bukid at sa lagusan nito ay makikita mo
        ang spirit na hinahanap mo.`,
        ],
      },
      {
        id: 4,
        spirit_id: 'prairie4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [3, 8],
        spirit_name: 'Ceremonial Worshiper',
        spirit_img_url: CEREMONIAL_WORSHIPPER,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'QyxnF3E58Xg?start=1070',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita at lumusot sa batong pintuan at lumipad.`,
          `Pagdating sa Village Islands, lumipad ka gawing kanan na isla at pumasok ka. Gawin ang butterfly charm emote na nasa mga square na bato sa sahig, at bubukas ang pintuan.`,
          `Magsindi sa 8-player lock at ito ay aakyat at sindihan lahat ng treasure candles nakapalibot sa shrines at cutscene
          ng spirit at automatic makukuha mo na ang spirit.`,
        ],
      },
      {
        id: 5,
        spirit_id: 'prairie5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [3, 8],
        spirit_name: 'Exhausted Dock Worker',
        spirit_img_url: EXHAUSTED_DOCK_WORKER,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'QyxnF3E58Xg?start=1706',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, sa gawing kaliwa mo ay may lagusan papasok.`,
          `Makita mo ang Prairie Caves, lumipad ka hanggang sa makapasok ka at patungo malapit sa 
          labasan ng kweba ay may makita kang lagusan na maliit sa iyong kaliwa.`,
          `Pasok ka at makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 6,
        spirit_id: 'prairie6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Laughing Light Catcher',
        spirit_img_url: LAUGHING_LIGHT_CATCHER,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'bxbQ0E0-6P0',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita.`,
          `sa Village Islands, lumipad ka gawing kanan, at may makita kang isla. Nasa loob ang spirit na ito.`,
        ],
      },
      {
        id: 7,
        spirit_id: 'prairie7',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Slumbering Shipwright',
        spirit_img_url: SLUMBERING_SHIPWRIGHT,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'TndluWxF7tw',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita.`,
          `sa Village Islands,  lumipad ka patungo sa gitnang isla at hanapin ang pintuan. Tandaan 
        kailangan mo ng kasamang magbukas ng pintuan.`,
          `Pagkabukas nito ay makita mo sa loob yung spirit.`,
        ],
      },
      {
        id: 8,
        spirit_id: 'prairie8',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Waving Bellmaker',
        spirit_img_url: WAVING_BELLMAKER,
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'f4PG-FV55jM',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita.`,
          `sa Village Islands,  lumipad ka patungo sa gitnang isla at makikita mo agad ang spirit na ito.`,
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
        makikita mo tuwing papasok ka sa Daylight Prairie. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {PRAIRIE_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
      </Typography>
    ),
    spirits: [
      {
        id: 9,
        spirit_id: 'prairie9',
        season_id: 'season-1',
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 40,
        difficulty_types: [1, 4, 6],
        spirit_name: 'Stretching Guru',
        spirit_img_url: STRETCHING_GURU,
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + '_Atgn5k2kBY',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, gawing kaliwa mo ay may lagusan papasok.`,
          `Makita mo ang Prairie Caves, sa entrance ng kweba, pasok ka lang ng onti, at sa gawing kaliwa mo makita
        ang spirit na ito.`,
        ],
      },
      {
        id: 10,
        spirit_id: 'prairie10',
        season_id: 'season-2',
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'friendship action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 50,
        difficulty_types: [1, 2, 4, 6],
        spirit_name: 'Doublefive Light Catcher',
        spirit_img_url: DOUBLE_FIVE_LIGHT_CATCHER,
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + 'nQUnUlwujMc',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka.`,
          `Pagdating sa Bird's Nest, Lumipad ka gawing kaliwa, at sa likod ng sirang tore, dakong dulo ng isla ay makikita mo itong spirit.`,
        ],
      },
      {
        id: 11,
        spirit_id: 'prairie11',
        season_id: 'season-3',
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 65,
        difficulty_types: [2, 5, 6, 7],
        spirit_name: 'Confetti Cousin',
        spirit_img_url: CONFETTI_COUSIN,
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'bBjri4XwR2c',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  may makikita kang parang hugis globe na bukid at sa tuktok nito ay makikita mo
        ang spirit.`,
        ],
      },
      {
        id: 12,
        spirit_id: 'prairie12',
        season_id: 'season-4',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Festival Spin Dancer',
        spirit_img_url: FESTIVAL_SPIN_DANCER,
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'eTI_5rJNQqg',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka`,
          `Pagdating sa Bird's Nest sa iyong kinatatayuan tumalon kalang pababa at pagkalapag mo ay makita mo ang spirit sa
        ilalim nito.`,
        ],
      },
      {
        id: 13,
        spirit_id: 'prairie13',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 55,
        difficulty_types: [1, 4, 5, 6],
        spirit_name: 'Chill Sunbather',
        spirit_img_url: CHILL_SUNBATHER,
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + '197tor-WWVo',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka`,
          `Pagdating sa Bird's Nest  lumipad ka pababa hanggang sa makita mo ang lagusan na ulap.`,
          `Pagdating mo sa Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, at may makikita ka kaagad na spirit na nasa
        labas ng maliit na lagusan.`,
        ],
      },
      {
        id: 14,
        spirit_id: 'prairie14',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 65,
        difficulty_types: [2, 5, 6, 7],
        spirit_name: 'Rallying Thrillseeker',
        spirit_img_url: RALLYING_THRILLSEEKER,
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + 'vqDrzq5MZ9k',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka`,
          `Pagdating sa Bird's Nest  lumipad ka pababa hanggang sa makita mo ang lagusan na ulap.`,
          `Pagdating mo sa Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, makikita mo itong spirit katabi sa nag-iisang 
        geyser unahan ng waterfalls.`,
        ],
      },
      {
        id: 15,
        spirit_id: 'prairie15',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        difficulty_types: [0, 2, 5],
        spirit_name: 'Grateful Shell Collector',
        spirit_img_url: GRATEFUL_SHELL_COLLECTOR,
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + 'fMZdaF0WRC8',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka`,
          `Pagdating sa Bird's Nest  lumipad ka pababa hanggang sa makita mo ang lagusan na ulap.`,
          `Pagdating mo sa Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, nasa gilid bunganga ng entrance ng malaking kweba.`,
        ],
      },
      {
        id: 16,
        spirit_id: 'prairie16',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 95,
        difficulty_types: [1, 2, 4, 5, 6, 10],
        spirit_name: 'Hiking Grouch',
        spirit_img_url: HIKING_GROUCH,
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + 'fILkeV1zji4',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka`,
          `Pagdating sa Bird's Nest  lumipad ka pababa hanggang sa makita mo ang lagusan na ulap.`,
          `Pagdating mo sa Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, nasa elevated na lugar, dakong kanan ng bundok.`,
        ],
      },
      {
        id: 17,
        spirit_id: 'prairie17',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'sound-call',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 30,
        difficulty_types: [2, 7],
        spirit_name: 'Jelly Whisperer',
        spirit_img_url: JELLY_WHISPERER,
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + 'svKLM5uXQpg',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka`,
          `Pagdating sa Bird's Nest  lumipad ka pababa hanggang sa makita mo ang lagusan na ulap.`,
          `Pagdating mo sa Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, at sa likod ng malaking isla may malaking
        kweba na may mga jellyfish, nasa looban ang spirit dito.`,
        ],
      },
      {
        id: 18,
        spirit_id: 'prairie18',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Timid Bookworm',
        spirit_img_url: TIMID_BOOKWORM,
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + 'GTnvyuwFNE0',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag,  sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka`,
          `Pagdating sa Bird's Nest  lumipad ka pababa hanggang sa makita mo ang lagusan na ulap.`,
          `Pagdating mo sa Sanctuary Islands, lumipad ka papunta sa unang nakalutang na isla sa harap mo, makikita ang spirit na ito
        sa likod ng nakalutang na isla, nakasampa sa gild.`,
        ],
      },
      {
        id: 19,
        spirit_id: 'prairie19',
        season_id: 'season-18',
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Monents',
        spirit_category: 'friendship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 1, 6],
        spirit_name: 'Reassuring Ranger',
        spirit_img_url: REASSURING_RANGER,
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'MN1DV_iu7EQ',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, gawing kaliwa mo ay may lagusan papasok.`,
          `Paglabas mo, makita mo ang Prairie Caves, at sa kaliwang bahagi ay may maliit na lagusan, pumasok ka.`,
          `Umupo ka sa bangka. Pagdating mo ay lakarin mo lng papasok hanggang makita mo ang tanawin. May bato na malaki sa iyong kanan, nasa likod ang spirit na ito.`,
        ],
      },
      {
        id: 20,
        spirit_id: 'prairie20',
        season_id: 'season-18',
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Monents',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 11],
        spirit_name: 'Jolly Geologist',
        spirit_img_url: JOLLY_GEOLOGIST,
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'PSttOiSBiys',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, gawing kaliwa mo ay may lagusan papasok.`,
          `Paglabas mo, makita mo ang Prairie Caves, at sa kaliwang bahagi ay may maliit na lagusan, pumasok ka.`,
          `Umupo ka sa bangka. Pagdating mo ay lumipad ka sa direksyon ng malaking talon, at bago ka umabot sa talon
        ay may maliit na lagusan ng kweba. Pasok ka sa gawing kanan.`,
        ],
      },
      {
        id: 21,
        spirit_id: 'prairie21',
        season_id: 'season-18',
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Monents',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 2, 4, 6],
        spirit_name: 'Ascetic Monk',
        spirit_img_url: ASCETIC_MONK,
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'v8ecSqd3NOA',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, gawing kaliwa mo ay may lagusan papasok.`,
          `Paglabas mo, makita mo ang Prairie Caves, at sa kaliwang bahagi ay may maliit na lagusan, pumasok ka.`,
          `Umupo ka sa bangka. Pagdating mo ay lumipad ka gawing kaliwa, patungo sa mataas na bundok kung saan may nyebe (snow)
        at sa bandang patag ay makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 22,
        spirit_id: 'prairie22',
        season_id: 'season-18',
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Monents',
        spirit_category: 'sound-call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Nightbird Whisperer',
        spirit_img_url: NIGHTBIRD_WHISPERER,
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'C8otHgCYJ7U',
        spirit_direction: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, gawing kaliwa mo ay may lagusan papasok.`,
          `Paglabas mo, makita mo ang Prairie Caves, at sa kaliwang bahagi ay may maliit na lagusan, pumasok ka.`,
          `Umupo ka sa bangka. Pagdating mo ay lumipad ka gawing kaliwa, patungo 
        sa mga bundok na lagusan. Pumasok ka hanggang sa maliit na lagusan sa mababa at 
         may makikita kang pinakamalaking monolith o matarik na bato at sa likod nito ang spirit.`,
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
          {PRAIRIE_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Daylight Prairie, kasama
        na ang 4 na nasa trials ng Season Of Prophecy.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'Prairie-WL1',
        wl_group: 'wl-prairie',
        wl_url: PR_WL1 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, nasa kaliwang kweba na maliit.`,
      },
      {
        id: 2,
        wl_label: 'Prairie-WL2',
        wl_group: 'wl-prairie',
        wl_url: PR_WL2 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, nasa tuktok ng maliit na bukid.`,
      },
      {
        id: 3,
        wl_label: 'Prairie-WL3',
        wl_group: 'wl-prairie',
        wl_url: PR_WL3 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lagpas ng maliit na bukid malapit sa batong portal.`,
      },
      {
        id: 4,
        wl_label: 'Prairie-WL4',
        wl_group: 'wl-prairie',
        wl_url: PR_WL4 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, punta sa kaliwang dako at pumasok sa lagusan>>
        Lipad patungong Prairie Caves >> sa dakong itaas, gawing kaliwa makita mo ang butas.`,
      },
      {
        id: 5,
        wl_label: 'Prairie-WL5',
        wl_group: 'wl-prairie',
        wl_url: PR_WL5 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, punta sa kaliwang dako at pumasok sa lagusan>>
        Lipad patungong Prairie Caves >> lipad hanggang gitna, at gawing kanan na pader
        sa itaas, may lagusan ito.`,
      },
      {
        id: 6,
        wl_label: 'Prairie-WL6',
        wl_group: 'wl-prairie',
        wl_url: PR_WL6 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad patungong templo >> Paglabas sa Village Islands,
        sa unang isla sa harap mo makita agad ang winged light.`,
      },
      {
        id: 7,
        wl_label: 'Prairie-WL7',
        wl_group: 'wl-prairie',
        wl_url: PR_WL7 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad patungong templo >> Paglabas sa Village Islands,
        sa unang isla sa kaliwa mo ay may pintuan na malaki sa loob nito ang winged light.`,
      },
      {
        id: 8,
        wl_label: 'Prairie-WL8',
        wl_group: 'wl-prairie',
        wl_url: PR_WL8 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad patungong templo >> Paglabas sa Village Islands,
        sa gitnang Village Island, ay nasa likod nito ang winged light.`,
      },
      {
        id: 9,
        wl_label: 'Prairie-WL9',
        wl_group: 'wl-prairie',
        wl_url: PR_WL9 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad patungong templo >> Paglabas sa Village Islands,
        sa itaas ng templo makikita mo ito.`,
      },
      {
        id: 10,
        wl_label: 'Prairie-WL10',
        wl_group: 'wl-prairie',
        wl_url: PR_WL10 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad patungong templo >> Paglabas sa Village Islands,
        sa pinakataas naman na parte ng templo ang pangalawang winged light dito.`,
      },
      {
        id: 11,
        wl_label: 'Prairie-WL11',
        wl_group: 'wl-prairie',
        wl_url: PR_WL11 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad patungong templo >> Paglabas sa Village Islands,
        sa kaliwang Village Island, kailangan mong makapasok sa pintuan at makaakyat pataas >>
        Sa bundok na makita mo ay may butas sa itaas pumasok ka at makita mo ang winged light.`,
      },
      {
        id: 12,
        wl_label: 'Prairie-WL12',
        wl_group: 'wl-prairie',
        wl_url: PR_WL12 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        sa kaliwang isla ang winged light.`,
      },
      {
        id: 13,
        wl_label: 'Prairie-WL13',
        wl_group: 'wl-prairie',
        wl_url: PR_WL13 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        nasa likod na isla, ng nasa gitnang islang may sirang tore.`,
      },
      {
        id: 14,
        wl_label: 'Prairie-WL14',
        wl_group: 'wl-prairie',
        wl_url: PR_WL14 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakaliwa at pumasok sa lagusan >> Paglabas lumipad,
        patungong kanan, sa maliit na butas, pumasok at umupo sa bangka >> Pagdating dumako papasok at
        lumipad pakaliwa at pasok sa lagusan nito. >> May maliit na lagusan sa ibaba, pasok ka. >> lumipad 
        pataas at hanapin ang sa gitnang pader.`,
      },
      {
        id: 15,
        wl_label: 'Prairie-WL15',
        wl_group: 'wl-prairie',
        wl_url: PR_WL15 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakaliwa at pumasok sa lagusan >> Paglabas lumipad,
        patungong kanan, sa maliit na butas, pumasok at umupo sa bangka >> Pagdating dumako papasok at
        lumipad patungo sa malaking fal. Sa falls, ay lumangoy pailalim >> pumasok sa butas at lumangoy at umahon
        at lumipad papasok sa tabi ng orb makikita ang winged light.`,
      },
      {
        id: 16,
        wl_label: 'Prairie-WL16',
        wl_group: 'wl-prairie',
        wl_url: PR_WL16 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakaliwa at pumasok sa lagusan >> Paglabas lumipad,
        patungong kanan, sa maliit na butas, pumasok at umupo sa bangka >> Pagdating dumako papasok at
        lumipad patungo sa pinakamataas na bundok at sa tuktok nito ang winged light.`,
      },
      {
        id: 17,
        wl_label: 'Prairie-WL17',
        wl_group: 'wl-prairie',
        wl_url: PR_WL17 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, makita mo ito agad sa
        malaking islang nakalutang.`,
      },
      {
        id: 18,
        wl_label: 'Prairie-WL18',
        wl_group: 'wl-prairie',
        wl_url: PR_WL18 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, sa tuktok ng 
        malaking isla ay may maliit na lagusan.`,
      },
      {
        id: 19,
        wl_label: 'Prairie-WL19',
        wl_group: 'wl-prairie',
        wl_url: PR_WL19 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, sa kaliwang dako,
        makita ang tatlong maliliit na nakalutang na isla. Nasa kanan na isla.`,
      },
      {
        id: 20,
        wl_label: 'Prairie-WL20',
        wl_group: 'wl-prairie',
        wl_url: PR_WL20 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, sa bandang likuran
        ay may mga kampana at sa bandang ibaba ay nakapwesto ang winged light na ito.`,
      },
      {
        id: 21,
        wl_label: 'Prairie-WL21',
        wl_group: 'wl-prairie',
        wl_url: PR_WL21 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, sa likod ng malaking isla
        makikita ang jellyfish cave.`,
      },
      {
        id: 22,
        wl_label: 'Prairie-WL22',
        wl_group: 'wl-prairie',
        wl_url: PR_WL22 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, lumipad pababa
        at makita ang malaking bungaga ng kweba nasa likod ng waterfall ito.`,
      },
      {
        id: 23,
        wl_label: 'Prairie-WL23',
        wl_group: 'wl-prairie',
        wl_url: PR_WL23 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, lumipad pababa
        at makita ang malaking bungaga ng kweba pumasok at sa kaliwa ay may lagusan >> Lumipad pataas
        at ito ay iyong makikita.`,
      },
      {
        id: 24,
        wl_label: 'Prairie-WL24',
        wl_group: 'wl-prairie',
        wl_url: PR_WL24 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad sa mga kaulapan >>
        Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan >> Paglabas sa Bird's Nest,
        lumipad pababa hanggang sa lagusan na ulap. >> Paglabas sa Sanctuary Islands, lumipad pababa
        at makita ang malaking bungaga ng kweba pumasok at sa kanan ay may lagusan >> Pumasok ka sa 
        Crabs Area, lumipad pataas at may lagusan papasok, dito ang winged light.`,
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
          {PRAIRIE_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Daylight Prairie.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: MAP_SHRINE,
        shrine_location: `Pasok sa Map 2 | Daylight Prairie >> Sa Social Space, lumipad sa kaliwang bahagi at makita mo itong
          Map Shrine.`,
      },
      {
        id: 2,
        shrine_label: 'Map Shrine 2',
        shrine_url: MAP_SHRINE,
        shrine_location: `Pasok sa Map 2 | Daylight Prairie >> Lumipad `,
      },
      {
        id: 3,
        shrine_label: 'Map Shrine 3',
        shrine_url: MAP_SHRINE,
        shrine_location: 'Nasa mga labas ng templo.',
      },
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: MAP_SHRINE,
        shrine_location: 'Nasa tuktok ng butterfly cave',
      },
      {
        id: 5,
        shrine_label: 'Map Shrine 5',
        shrine_url: MAP_SHRINE,
        shrine_location: 'Sa loob ng Cave of Prophecy',
      },
      {
        id: 6,
        shrine_label: 'Map Shrine 6',
        shrine_url: MAP_SHRINE,
        shrine_location: 'Sa water trial',
      },
      {
        id: 7,
        shrine_label: 'Map Shrine 7',
        shrine_url: MAP_SHRINE,
        shrine_location:
          'Sa earth trial, bago ka pumasok sa huling pagsubok, nasa bandang kanan pagkaakyat mo sa labas.',
      },
      {
        id: 8,
        shrine_label: 'Map Shrine 8',
        shrine_url: MAP_SHRINE,
        shrine_location: 'Sa earth trial.',
      },
      {
        id: 9,
        shrine_label: 'Map Shrine 9',
        shrine_url: MAP_SHRINE,
        shrine_location:
          'sa fire trial, bago mag exit sa 3rd floor, nasa gilid ng lagusan.',
      },
    ],
  },
]
