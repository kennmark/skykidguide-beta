import { Typography } from '@material-tailwind/react'
import {
  WASTELAND_NUM_REG_SPIRIT,
  WASTELAND_NUM_SEASON_SPIRIT,
  WASTELAND_NUM_WL,
  WASTELAND_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  FAINTING_WARRIOR,
  FRIGHTENED_REFUGEE,
  COURAGEOUS_SOLDIER,
  SALUTING_CAPTAIN,
  STEALTHY_SURVIVOR,
  LOOKOUT_SCOUT,
  SALUTING_PROTECTOR,
  PLEAFUL_PARENT,
  RESPECTFUL_PIANIST,
  CRAB_WHISPERER,
  SNOOZING_CARPENTER,
  NODDING_MURALIST,
  CRAB_WALKER,
  PLAYFIGHTING_HERBALIST,
  SCARECROW_FARMER,
  INDIFFERENT_ALCHEMIST,
  CEASING_COMMODORE,
  ANXIOUS_ANGLER,
  BUMBLING_BOATSWAIN,
  CACKLING_CANNONEER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  GW_WL1,
  GW_WL2,
  GW_WL3,
  GW_WL4,
  GW_WL5,
  GW_WL6,
  GW_WL7,
  GW_WL8,
  GW_WL9,
  GW_WL10,
  GW_WL11,
  GW_WL12,
  GW_WL13,
  GW_WL14,
  GW_WL15,
  GW_WL16,
  GW_WL17,
  GW_WL18,
} from '../exports/wastelandWLImgUrl'
import {
  MAP5,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON5,
  SEASON12,
} from '../exports/seasonIcons'

const youtube_embed = 'https://www.youtube.com/embed/'

export const wasteland = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {WASTELAND_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito.
      </Typography>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'wasteland1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Fainting Warrior',
        spirit_img_url: FAINTING_WARRIOR,
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'X0dj10tnvpQ?start=154',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad sa gawing kanan at sa likod ng malaking poste ay ang spirit na ito.`,
        ],
      },
      {
        id: 2,
        spirit_id: 'wasteland2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Frightened Refugee',
        spirit_img_url: FRIGHTENED_REFUGEE,
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'jAW8PTC5qT8',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad sa patungo sa sirang templo, at makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 3,
        spirit_id: 'wasteland3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 65,
        difficulty_types: [0, 1, 9],
        spirit_name: 'Courageous Soldier',
        spirit_img_url: COURAGEOUS_SOLDIER,
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + '6fEGZrXCijQ',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `Nasa daanan lang ang spirit na ito.`,
        ],
      },
      {
        id: 4,
        spirit_id: 'wasteland4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 65,
        difficulty_types: [0, 1, 9],
        spirit_name: 'Stealthy Survivor',
        spirit_img_url: STEALTHY_SURVIVOR,
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'XqgBAzIfIsk',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `lumipad ka patungo sa Boneyard kung saan may 3 krill.`,
          `Sa pinakadulong kweba, nasa gawing kaliwa sa ibaba ang spirit na ito.`,
        ],
      },
      {
        id: 5,
        spirit_id: 'wasteland5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 65,
        difficulty_types: [0, 1, 9],
        spirit_name: 'Saluting Captain',
        spirit_img_url: SALUTING_CAPTAIN,
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'X0dj10tnvpQ?start=665',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `Tawirin ang isang krill na lugar, pagkalagpas ay may lagusan sa bandang kanan.`,
          `Sa frontside ng Shipwreck, sa bandang ibaba makikita ang spirit na ito.`,
        ],
      },
      {
        id: 6,
        spirit_id: 'wasteland6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Lookout Scout',
        spirit_img_url: LOOKOUT_SCOUT,
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'X0dj10tnvpQ?start=1105',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `Tawirin ang isang krill na lugar, pagkalagpas ay may lagusan sa bandang kanan.`,
          `Sa frontside ng Shipwreck, sa bandang ibaba makikita ang spirit na ito.`,
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
          {WASTELAND_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
      </Typography>
    ),
    spirits: [
      {
        id: 7,
        spirit_id: 'wasteland7',
        season_id: 'season-1',
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 90,
        difficulty_types: [1, 4, 6, 9],
        spirit_name: 'Saluting Protector',
        spirit_img_url: SALUTING_PROTECTOR,
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + '7mYtsn5_ff4',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `Sa 1-Krill Area, pagkalagpas sa sirang tore sa kaliwa, ay makita mo ang spirit nasa silong sa unahan.`,
        ],
      },
      {
        id: 8,
        spirit_id: 'wasteland8',
        season_id: 'season-3',
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 150,
        difficulty_types: [1, 4, 5, 6, 9, 10, 13],
        spirit_name: 'Pleaful Parent',
        spirit_img_url: PLEAFUL_PARENT,
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'GjUfabmBwvE',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `Pagkalagpas sa 1-Krill Area, mag-skate pababa at lumipad gawing kanan, sa bonefire makita ang spirit.`,
        ],
      },
      {
        id: 9,
        spirit_id: 'wasteland9',
        season_id: 'season-4',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 105,
        difficulty_types: [1, 4, 5, 6, 9],
        spirit_name: 'Respectful Pianist',
        spirit_img_url: RESPECTFUL_PIANIST,
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'A5rrM_cZWI0',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `Tawirin ang 1-krill area at pagdating sa boneyard, lumipad sa dakong kanan.`,
          `Malapit sa may hagdanan, a isang bato makikita ang spirit na ito.`,
        ],
      },
      {
        id: 10,
        spirit_id: 'wasteland10',
        season_id: 'season-2',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Lightseeker',
        spirit_category: 'call',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 120,
        difficulty_types: [1, 4, 5, 6, 9, 13],
        spirit_name: 'Crab Whisperer',
        spirit_img_url: CRAB_WHISPERER,
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + '5iqo_BiP1j0',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad papasok ng sa malaking templo sa harap.`,
          `Tawirin ang isang krill na lugar, pagkalagpas ay may lagusan sa bandang kanan.`,
          `Pagkalabas, sa bandang ibaba na tunnel, sa loob nito ang spirit.`,
        ],
      },
      {
        id: 11,
        spirit_id: 'wasteland11',
        season_id: 'season-5',
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 40,
        difficulty_types: [1, 4, 6],
        spirit_name: 'Snoozing Carpenter',
        spirit_img_url: SNOOZING_CARPENTER,
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + '3ap3tbxOdFM',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad gawing kanan papuntang Docking Area at sumakay sa bangka.`,
          `Pagdating sa Forgotten Ark, nasa gilid ng barko ang spirit na ito.`,
        ],
      },
      {
        id: 12,
        spirit_id: 'wasteland12',
        season_id: 'season-5',
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 40,
        difficulty_types: [1, 7, 13],
        spirit_name: 'Nodding Muralist',
        spirit_img_url: NODDING_MURALIST,
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'PLP7r3UoIwo',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad gawing kanan papuntang Docking Area at sumakay sa bangka.`,
          `Pagdating sa Forgotten Ark, nasa kabilang gilid ng barko ang spirit na ito.`,
        ],
      },
      {
        id: 13,
        spirit_id: 'wasteland13',
        season_id: 'season-5',
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 40,
        difficulty_types: [1, 4, 6],
        spirit_name: 'Crab Walker',
        spirit_img_url: CRAB_WALKER,
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'xhrGhAAAPXc',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad gawing kanan papuntang Docking Area at sumakay sa bangka.`,
          `Pagdating sa Forgotten Ark, lumipad patungo sa kanan na tunnel at pumasok ka.`,
        ],
      },
      {
        id: 14,
        spirit_id: 'wasteland14',
        season_id: 'season-5',
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'friendship action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 45,
        difficulty_types: [1, 6, 13],
        spirit_name: 'Playfighting Herbalist',
        spirit_img_url: PLAYFIGHTING_HERBALIST,
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + '2C7nqLsQKDU',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad gawing kanan papuntang Docking Area at sumakay sa bangka.`,
          `Pagdating sa Forgotten Ark, sa pangalawang barko makita dito ang spirit.`,
        ],
      },
      {
        id: 15,
        spirit_id: 'wasteland15',
        season_id: 'season-5',
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Scarecrow Farmer',
        spirit_img_url: SCARECROW_FARMER,
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'il37sBlojXU',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad gawing kanan papuntang Docking Area at sumakay sa bangka.`,
          `Pagdating sa Forgotten Ark, sa dakong likod may malaking kapatagan makikita ang spirit na ito.`,
        ],
      },
      {
        id: 16,
        spirit_id: 'wasteland16',
        season_id: 'season-5',
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 35,
        difficulty_types: [1, 4, 13],
        spirit_name: 'Indifferent Alchemist',
        spirit_img_url: INDIFFERENT_ALCHEMIST,
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'XpMexGi-YO4',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad pababa.`,
          `Pagkalapag, lumipad gawing kanan papuntang Docking Area at sumakay sa bangka.`,
          `Pagdating sa Forgotten Ark, sa dakong likod sa tuktok ng bukid makikita ang spirit na ito.`,
        ],
      },
      {
        id: 17,
        spirit_id: 'wasteland17',
        season_id: 'season-12',
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Ceasing Commodore',
        spirit_img_url: CEASING_COMMODORE,
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad gawing kanan, at sa bangka sumakay.`,
          `Pagkadating sa Treasure Reef, lumipad paakyat sa likod ng bukid na nasa harapan makita ang spirit.`,
        ],
      },
      {
        id: 18,
        spirit_id: 'wasteland18',
        season_id: 'season-12',
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Anxious Angler',
        spirit_img_url: ANXIOUS_ANGLER,
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad gawing kanan, at sa bangka sumakay.`,
          `Pagkadating sa Treasure Reef, lumipad pakaliwa, at sa mga maliliit na isla makikita ang spirit.`,
        ],
      },
      {
        id: 19,
        spirit_id: 'wasteland19',
        season_id: 'season-12',
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Bumbling Boatswain',
        spirit_img_url: BUMBLING_BOATSWAIN,
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad gawing kanan, at sa bangka sumakay.`,
          `Pagkadating sa Treasure Reef, lumipad pataas at dumako sa barko na nasa dock, at malapit dito ang spirit.`,
        ],
      },
      {
        id: 20,
        spirit_id: 'wasteland20',
        season_id: 'season-12',
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Cackling Cannoneer',
        spirit_img_url: CACKLING_CANNONEER,
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Limang Mapa - Golden Wasteland, Lumipad gawing kanan, at sa bangka sumakay.`,
          `Pagkadating sa Treasure Reef, lumipad pataas at dumako sa dulong isla at sa likod nito makita ang spirit.`,
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
          {WASTELAND_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Daylight Prairie, kasama
        na ang 4 na nasa trials ng Season Of Prophecy.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'Wasteland-WL1',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL1 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag may mataas na poste, lumipad patungo sa ibabaw nito.`,
      },
      {
        id: 2,
        wl_label: 'Wasteland-WL2',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL2 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, sa unahan makita mo agad itong winged light`,
      },
      {
        id: 3,
        wl_label: 'Wasteland-WL3',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL3 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, makita mo ang winged light sa tuktok ng sirang tore sa kanan.`,
      },
      {
        id: 4,
        wl_label: 'Wasteland-WL4',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL4 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area,lumipad patungo sa kabilang lagusan, at nasa loob ng poste
        sa kanang banda ang winged light.`,
      },
      {
        id: 5,
        wl_label: 'Wasteland-WL5',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL5 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at tumuloy mag skate pababa. >>
        Sa dulo ay lumipad gawing kanan at nasa malawak na patag na bato ang winged light.`,
      },
      {
        id: 6,
        wl_label: 'Wasteland-WL6',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL6 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at tumuloy mag skate pababa. >>
        Sa dulo ay lumipad Patungo sa mga malalaking bato sa dulo, at makita mo ang winged light sa gild ng bato`,
      },
      {
        id: 7,
        wl_label: 'Wasteland-WL7',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL7 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at tumuloy mag skate pababa. >>
        Sa dulo ay lumipad Patungo sa mga malalaking bato sa dulo, sa kaliwang parte nito ay may tunnel >>
        sa loob ng tunnel ang winged light na ito.`,
      },
      {
        id: 8,
        wl_label: 'Wasteland-WL8',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL8 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at tumuloy mag skate pababa. >>
        Sa dulo ay lumipad gawing kanan patungo sa hagdanan sa dulo.`,
      },
      {
        id: 9,
        wl_label: 'Wasteland-WL9',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL9 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at
        lumipad gawing kanan at may makita kang lagusan na tunnel >> Paglabas sa Shipwreck,
        lumipad pakanan at nasa mataas na butas ng pader ang winged light.`,
      },
      {
        id: 10,
        wl_label: 'Wasteland-WL10',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL10 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at
        lumipad gawing kanan at may makita kang lagusan na tunnel >> Paglabas sa Shipwreck,
        lumipad patungo sa loob ng Shipwreck at sa dulo sa mga banga ang winged light.`,
      },
      {
        id: 11,
        wl_label: 'Wasteland-WL11',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL11 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at
        lumipad gawing kanan at may makita kang lagusan na tunnel >> Paglabas sa Shipwreck,
        lumipad patungo pakaliwa at sa unahan ng mga tunnel na hagdanan makita ito.`,
      },
      {
        id: 12,
        wl_label: 'Wasteland-WL12',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL12 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at tumuloy mag skate pababa. >>
        Sa dulo ay lumipad gawing kanan patungo sa hagdanan sa dulo. >> 
        Sa taas ng sirang templo makita ito.`,
      },
      {
        id: 13,
        wl_label: 'Wasteland-WL13',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL13 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at tumuloy mag skate pababa. >>
        Sa dulo ay lumipad gawing kanan patungo sa hagdanan sa dulo. >> 
        Lumipad patungo sa sirang templo at sa dulo bago sa gate, sa likod ng poste sa kaliwa ang winged light.`,
      },
      {
        id: 14,
        wl_label: 'Wasteland-WL14',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL14 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad patungo sa broken temple at pumasok sa lagusan.>>
        Pagdating sa 1-Krill Area, lumipad patungo sa kabilang lagusan at tumuloy mag skate pababa. >>
        Sa dulo ay lumipad gawing kanan patungo sa hagdanan sa dulo. >> 
        Lumipad patungo sa sirang templo at sa dulo sindihan ang lock ng gate, at pumasok ka, sa loob ang winged light`,
      },
      {
        id: 15,
        wl_label: 'Wasteland-WL15',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL15 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad gawing kanan patungo sa bangka, at umupo ka. >>
        Pgdating sa Forgotten Ark, lumipad hanggang makita ang Ark at sa unahan ang winged light na ito.`,
      },
      {
        id: 16,
        wl_label: 'Wasteland-WL16',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL16 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad sa mga kaulapan >>
        Pagkalapag, lumipad gawing kanan patungo sa bangka, at umupo ka. >>
        Pgdating sa Forgotten Ark, lumipad patungo sa Ark. >>
        Lumipad patungo sa dakong dulo na kapatagan at may lagusan na maliit sa bandang kaliwa,
        at pumasok ka at sa loob nito ang winged light.`,
      },
      {
        id: 17,
        wl_label: 'Wasteland-WL17',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL17 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad gawing kanan,
        at umupo sa bangka. >> Pagdating sa Treasure Reef, lumipad pataas >>
        May mataas na tore sa gawing kanan at sa tuktok nito ang winged light.`,
      },
      {
        id: 18,
        wl_label: 'Wasteland-WL18',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL18 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 4 | Golden Wasteland >> Lumipad gawing kanan,
        at umupo sa bangka. >> Pagdating sa Treasure Reef, lumipad pataas >>
        May mataas na tore sa gawing kanan at ibaba nito ay may butas na bato, pumasok
        at lumangoy pailalim hanggang sa makarating ka sa ibaba >>
        Buksan ang pintuan sa gawing kaliwa, at nasa loob nito ang winged light.`,
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
          {WASTELAND_NUM_MAP_SHRINES}
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
    ],
  },
]