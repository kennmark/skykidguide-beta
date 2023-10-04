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
        May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VALLEY_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito.
      </Typography>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'valley1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Confident Sightseer',
        spirit_img_url: CONFIDENT_SIGHTSEER,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'DwhjSpV-BAw',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kanan ng lagusan, lumipad ka pataas at makikita mo ang spirit na ito.`,
        ],
      },
      {
        id: 2,
        spirit_id: 'valley2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 50,
        difficulty_types: [0, 2, 5, 6],
        spirit_name: 'Backflipping Champion',
        spirit_img_url: BACKFLIPPING_CHAMPION,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'VrC9HR4wA7A',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kaliwa ay may lagusan patungong citadel, pumasok ka.`,
          `Lumipad ka hanggang sa makarating ka sa entrance ng Citadel.`,
          `Sa iyong kaliwa ay may maliit na tower, nasa loob nito ang spirit.`,
        ],
      },
      {
        id: 3,
        spirit_id: 'valley3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 50,
        difficulty_types: [0, 2, 5, 6],
        spirit_name: 'Handstanding Thrillseeker',
        spirit_img_url: HANDSTANDING_THRILLSEEKER,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + '-sVP-uZXkaI?start=689',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kaliwa ay may lagusan patungong citadel, pumasok ka.`,
          `Lumipad ka hanggang sa makarating ka sa entrance ng Citadel.`,
          `Lumipad ka patungo sa main Citadel towers, sa mga daanan ng towers makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 4,
        spirit_id: 'valley4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 65,
        difficulty_types: [0, 2, 5, 6, 12],
        spirit_name: 'Manta Whisperer',
        spirit_img_url: MANTA_WHISPERER,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + '-sVP-uZXkaI?start=876',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kaliwa ay may lagusan patungong citadel, pumasok ka.`,
          `Lumipad ka hanggang sa makarating ka sa entrance ng Citadel.`,
          `Lumipad ka patungo sa main Citadel towers, lumipad gawing kanan at sa likod ng hagdanan ang spirit na ito.`,
        ],
      },
      {
        id: 5,
        spirit_id: 'valley5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Proud Victor',
        spirit_img_url: PROUD_VICTOR,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'Sd5uNpaQrVU',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, sa kaliwang banda sa tuktok ng mga upuan malapit sa statwa, makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 6,
        spirit_id: 'valley6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Bowing Medalist',
        spirit_img_url: BOWING_MEDALIST,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + '2cSlZT8mbvA',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, sa kanang banda sa tuktok ng mga upuan malapit sa statwa, makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 7,
        spirit_id: 'valley7',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Cheerful Spectator',
        spirit_img_url: CHEERFUL_SPECTATOR,
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + '-sVP-uZXkaI?start=1487',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, sa kanang banda sa tuktok ng mga upuan malapit sa statwa, makita mo ang spirit na ito.`,
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
        makikita mo tuwing papasok ka sa Valley of Triumph. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VALLEY_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
      </Typography>
    ),
    spirits: [
      {
        id: 8,
        spirit_id: 'valley8',
        season_id: 'season-1',
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 40,
        difficulty_types: [2, 3, 7],
        spirit_name: 'Leaping Dancer',
        spirit_img_url: LEAPING_DANCER,
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'VTh2Qi8BQOM',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa kanang banda pababa, ay may 2-Player door, nasa loob nito ang spirit.`,
        ],
      },
      {
        id: 9,
        spirit_id: 'valley9',
        season_id: 'season-2',
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseeker',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Twirling Champion',
        spirit_img_url: TWIRLING_CHAMPION,
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + 'crKnfLTGvvM',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa kaliwang banda ay makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 10,
        spirit_id: 'valley10',
        season_id: 'season-3',
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 65,
        difficulty_types: [1, 2, 4, 5, 6],
        spirit_name: 'Sparkler Parent',
        spirit_img_url: SPARKLE_PARENT,
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'rUjIYqEcG7M',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, Pasok sa templo at sa kaliwang banda ay may lagusan kung nasaan ang spirit.`,
        ],
      },
      {
        id: 11,
        spirit_id: 'valley11',
        season_id: 'season-4',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Troupe Juggler',
        spirit_img_url: TROUPE_JUGGLER,
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'Z7NwT-3zZVs',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa tunnel na nasa kaliwang banda ng Ice Rink, sa looban makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 12,
        spirit_id: 'valley12',
        season_id: 'season-8',
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Dancing Performer',
        spirit_img_url: DANCING_PERFORMER,
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 'oe6sjjiJrjw',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa mga kabahayan sa kaliwang banda ay makita mo ang spirit na ito.`,
        ],
      },
      {
        id: 13,
        spirit_id: 'valley13',
        season_id: 'season-8',
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Peeking Postman',
        spirit_img_url: PEEKING_POSTMAN,
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 'x7GGq7Ef_cQ',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, papuntang plaza ng Village of Dreams, at sa likod na bahay ng Quest Giver, ay nakatago ang spirit na ito.`,
        ],
      },
      {
        id: 14,
        spirit_id: 'valley14',
        season_id: 'season-8',
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Spinning Mentor',
        spirit_img_url: SPINNING_MENTOR,
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 'IfbDJSE9U8c',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, papuntang plaza ng Village of Dreams, at sa unahan lng ng Quest Giver, bandang kanan, nasa gilid ng bahay ang spirit na ito.`,
        ],
      },
      {
        id: 15,
        spirit_id: 'valley15',
        season_id: 'season-8',
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'frienship action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 55,
        difficulty_types: [1, 4, 5, 6],
        spirit_name: 'Bearhug Hermit',
        spirit_img_url: BEARHUG_HERMIT,
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + '98WLZSrH9fY',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, papuntang plaza ng Village of Dreams, at sa kabahayan sa kaliwang banda, nasa likod nito ang spirit.`,
        ],
      },
      {
        id: 16,
        spirit_id: 'valley16',
        season_id: 'season-13',
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'frienship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Frantic Stagehand',
        spirit_img_url: FRANTIC_STAGEHEAD,
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa gitna ng pang 3rd at 4th na bahay sa iyong kaliwa ay makikita mo ang spirit na ito.`,
        ],
      },
      {
        id: 17,
        spirit_id: 'valley17',
        season_id: 'season-13',
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Forgetful Storyteller',
        spirit_img_url: FORGETFUL_STORYTELLER,
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + 'm5iu5e6CgE4?start=267',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa iyong kanan makikita mo agad ang spirit na ito.`,
        ],
      },
      {
        id: 18,
        spirit_id: 'valley18',
        season_id: 'season-13',
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Mellow Musician',
        spirit_img_url: MELLOW_MUSICIAN,
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + 'S-snIMOtkB8?start=411',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa iyong kaliwa, sa 1st at 2nd na bahay, ay nasa gitna mo makikita ang spirit na ito.`,
        ],
      },
      {
        id: 19,
        spirit_id: 'valley19',
        season_id: 'season-13',
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'friendship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Modest Dancer',
        spirit_img_url: MODEST_DANCER,
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + 'mkLk74WFkug',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa iyong kaliwa, sa 5th at 6th na bahay, ay nasa likod nito ang spirit.`,
        ],
      },
      {
        id: 20,
        spirit_id: 'valley20',
        season_id: 'season-15',
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Running Wayfarer',
        spirit_img_url: RUNNING_WAYFARER,
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + 'OBSCV3KYhtw',
        spirit_direction: [
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang Unang quest.`,
          `Ang Quest ay nasa Unang Mapa - Isle of Dawn, Entrance.`,
        ],
      },
      {
        id: 21,
        spirit_id: 'valley21',
        season_id: 'season-15',
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Mindful Miner',
        spirit_img_url: MINDFUL_MINER,
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + 'JhL5XARrPkY',
        spirit_direction: [
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang Pangalawang quest.`,
          `Ang Quest ay nasa Pangatlong Mapa - Hidden Forest, Underground Cave.`,
        ],
      },
      {
        id: 22,
        spirit_id: 'valley22',
        season_id: 'season-15',
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Warrior of Love',
        spirit_img_url: WARRIOR_OF_LOVE,
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + 'zp8IiXdL_II',
        spirit_direction: [
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang pangatlong quest.`,

          `Ang Quest ay nasa Pang-apat na Mapa - Valley of Triumph, Citadle.`,
        ],
      },
      {
        id: 23,
        spirit_id: 'valley23',
        season_id: 'season-15',
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Seed of Hope',
        spirit_img_url: SEED_OF_HOPE,
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + 'ce3xkxPz8jE',
        spirit_direction: [
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang pang-apat na quest.`,
          `Ang Quest ay nasa Ikalimang Mapa - Golden Wasteland, Battlefield.`,
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
          {VALLEY_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Isle of Dawn, kasama na
        ang 4 na nasa trials ng Season Of Prophecy.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'valley-WL1',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL1 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at makita mo itong winged light sa iyong kaliwa >>
        Daanan mo lang at makukuha mo na ito.`,
      },
      {
        id: 2,
        wl_label: 'valley-WL2',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL2 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok ka sa ilalim at makita mo ito nakaangat at katabi ng sirang bangka.`,
      },
      {
        id: 3,
        wl_label: 'valley-WL3',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL3 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        sa sentro ng plaza ay makita mo ito tapat ng lagusan papuntang Skating Race.`,
      },
      {
        id: 4,
        wl_label: 'valley-WL4',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL4 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa kaliwang lagusan, papuntang Citadle. Pinakamataas na tore, nasa kaliwang tore ang winged light.`,
      },
      {
        id: 5,
        wl_label: 'valley-WL5',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL5 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa kaliwang lagusan, papuntang Citadle, sa kaliwang tore nasa pinaka ibaba ito.
        Daanan mo lang at makuha mo agad ito.`,
      },
      {
        id: 6,
        wl_label: 'valley-WL6',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL6 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa kaliwang lagusan, papuntang Citadle, gawin ang Flying Race. >>
        TANDAAN: Siguraduhin na madaanan mo sa gitna ang winged light dahil di ka na makalipad pabalik, pagkalagpas mo.>>
        Nasa kanang parte ng race ito, Daanan mo lang at makukuha mo agad ito.`,
      },
      {
        id: 7,
        wl_label: 'valley-WL7',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL7 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa kaliwang lagusan, papuntang Citadle, gawin ang Flying Race. >>
        TANDAAN: Siguraduhin na madaanan mo sa gitna ang winged light dahil di ka na makalipad pabalik, pagkalagpas mo.>>
        Sa gitna ng mga nakalutang na bato, ay makita mo ang sirang tore.>>
        Igawi mo sa kanan ang skykid mo at daanan mo lang, makukuha mo agad ang winged light na ito.`,
      },
      {
        id: 8,
        wl_label: 'valley-WL8',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL8 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa gitnang lagusan, at gawin ang Skating Race. >>
        Nasa bato ang spirit na ito, daanan mo lang at makukuha mo agad ito.`,
      },
      {
        id: 9,
        wl_label: 'valley-WL9',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL9 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa gitna o kaliwang lagusan, at gawin mo ang isa sa mga race. >>
        Sa dulo ng dalawang race bago pumasok sa Coliseum ay makikita ang winged light na ito.`,
      },
      {
        id: 10,
        wl_label: 'valley-WL10',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL10 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa gitna o kaliwang lagusan, at gawin mo ang isa sa mga race. >>
        Sa kaliwang balikat ng kaliwang statue ay nandoon ang spirit na ito.`,
      },
      {
        id: 11,
        wl_label: 'valley-WL11',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL11 ?? WINGED_LIGHT,
        wl_location: `Mag-skate pababa at hanggang makarating ka ng Ice Rink >>
        Pumasok sa gitna o kaliwang lagusan, at gawin mo ang isa sa mga race. >>
        Pumasok ka sa templo, at gawing kaliwa, may lagusan sa pinaka-itass ng pader.>>
        Sundan lang ang lagusan at makita mo ang winged light na ito.`,
      },
      {
        id: 12,
        wl_label: 'valley-WL12',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL12 ?? WINGED_LIGHT,
        wl_location: `Pumasok sa Ika-apat na Mapa - Valley of Triumph >>
        Sa iyong kanan, ay may lagusan papuntang Village of Dreams, pumasok ka.>>
        Sa mga bukid na nasa kaliwa, isa dito ay may butas kung nasaan ang winged light.`,
      },
      {
        id: 13,
        wl_label: 'valley-WL13',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL13 ?? WINGED_LIGHT,
        wl_location: `Pumasok sa Ika-apat na Mapa - Valley of Triumph >>
        Sa iyong kanan, ay may lagusan papuntang Village of Dreams, pumasok ka.>>
        Sa mga bukid na nasa kanan, isa dito ay may butas kung nasaan ang winged light.`,
      },
      {
        id: 14,
        wl_label: 'valley-WL14',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL14 ?? WINGED_LIGHT,
        wl_location: `Pumasok sa Ika-apat na Mapa - Valley of Triumph >>
        Sa iyong kanan, ay may lagusan papuntang Village of Dreams, pumasok ka.>>
        Pagdating sa plaza, sa iyong kanan ay may lagusan papuntang Village Theater, pumasok ka.>>
        Pumasok ka sa Theater Hall at sa likod ng stage ay may gitara sa labas ng lagusan, pumasok ka at sa dulo nag winged light.`,
      },
      {
        id: 15,
        wl_label: 'valley-WL15',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL15 ?? WINGED_LIGHT,
        wl_location: `Pumasok sa Ika-apat na Mapa - Valley of Triumph >>
        Sa iyong kanan, ay may lagusan papuntang Village of Dreams, pumasok ka.>>
        Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal>>
        At sa tuktok ng tore na nasa gitna makita mo ang winged light.`,
      },
      {
        id: 16,
        wl_label: 'valley-WL16',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL16 ?? WINGED_LIGHT,
        wl_location: `Pumasok sa Ika-apat na Mapa - Valley of Triumph >>
        Sa iyong kanan, ay may lagusan papuntang Village of Dreams, pumasok ka.>>
        Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal>>
        Sumakay ka sa Ferry Boat papuntang Hermitt's Valley, at sa likod ng bundok makita ang winged light dito.`,
      },
      {
        id: 17,
        wl_label: 'valley-WL17',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL17 ?? WINGED_LIGHT,
        wl_location: `Pumasok sa Ika-apat na Mapa - Valley of Triumph >>
        Sa iyong kanan, ay may lagusan papuntang Village of Dreams, pumasok ka.>>
        Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal>>
        Sumakay ka sa Ferry Boat papuntang Hermitt's Valley, at sa likod mo ay may kweba sa bandang kanan ng bundok.`,
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
    ],
  },
]
