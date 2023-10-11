import { Typography } from '@material-tailwind/react'
import {
  VAULT_NUM_REG_SPIRIT,
  VAULT_NUM_SEASON_SPIRIT,
  VAULT_NUM_WL,
  VAULT_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  PRAYING_ACOLYTE,
  LEVITATING_ADEPT,
  POLITE_SCHOLAR,
  MEMORY_WHISPERER,
  MEDITATING_MONASTIC,
  SHUSHING_LIGHTSCHOLAR,
  WISE_GRANDPARENT,
  THOUGHTFUL_DIRECTOR,
  GREETING_SHAMAN,
  BECKONING_RULER,
  GLOATING_NARCISSIST,
  SLOUCHING_SOLDIER,
  SNEEZING_GEOGRAPHER,
  STAR_COLLECTOR,
  STRETCHING_LAMPLIGHTER,
  BEREFT_VETERAN,
  PLEADING_CHILD,
  TIPTOEING_TEABREWER,
  WOUNDED_SOLDIER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  VK_WL1,
  VK_WL2,
  VK_WL3,
  VK_WL4,
  VK_WL5,
  VK_WL6,
  VK_WL7,
  VK_WL8,
  VK_WL9,
  VK_WL10,
  VK_WL11,
  VK_WL12,
} from '../exports/vaultWLImgUrl'
import {
  MAP6,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON10,
  SEASON16,
} from '../exports/seasonIcons'

const youtube_embed = 'https://www.youtube.com/embed/'

export const vault = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VAULT_NUM_REG_SPIRIT}
        </span>{' '}
        regular spirits na makikita mo dito.
      </Typography>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'vault1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 3],
        spirit_name: 'Levitating Adept',
        spirit_img_url: LEVITATING_ADEPT,
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Anim na Mapa - Vault of Knowledge, Lumipad patungo sa Elevating Platform.`,
          `Pagdating sa gitna, sindihan ang mga poste at memory lamps. Umupo sa platform para makaakyat sa 2nd floor`,
          `Pagdating sa 2nd floor, may 4-player door, buksan ito.`,
          `Pumasok ka, sa kaliwang poste sa likod nito ang spirit.`,
        ],
      },
      {
        id: 2,
        spirit_id: 'vault2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 2],
        spirit_name: 'Polite Scholar',
        spirit_img_url: POLITE_SCHOLAR,
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Anim na Mapa - Vault of Knowledge, Lumipad patungo sa Elevating Platform.`,
          `Pagdating sa gitna, sindihan ang mga poste at memory lamps. Umupo sa platform para makaakyat sa 2nd floor`,
          `Pagdating sa 2nd floor, may 4-player door, buksan ito.`,
          `Pumasok ka, sa kaliwang poste sa likod nito ang spirit.`,
        ],
      },
      {
        id: 3,
        spirit_id: 'vault3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'call',
        spirit_relive_type: 'task',
        difficulty_level: 25,
        difficulty_types: [0, 2],
        spirit_name: 'Memory Whisperer',
        spirit_img_url: MEMORY_WHISPERER,
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Anim na Mapa - Vault of Knowledge, Lumipad patungo sa Elevating Platform.`,
          `Pagdating sa gitna, sindihan ang mga poste at memory lamps, Umakyat ka hanggang makarating ng 4th floor.`,
          `Pagdating ay may pinakamalaking set ng platforms na nasa kaliwa ng constelation ng Isle of Dawn.`,
          `Malapit sa ilalim ay may 2 platforms na may 5 kandila, sindihan mo lahat at makuha agad ang spirit.`,
        ],
      },
      {
        id: 4,
        spirit_id: 'vault4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 2, 3],
        spirit_name: 'Praying Acolyte',
        spirit_img_url: PRAYING_ACOLYTE,
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Anim na Mapa - Vault of Knowledge, Lumipad patungo sa Elevating Platform.`,
          `Pagdating sa platform, sa gawing kanan ay 4-player door, mag-antay ng ibang player (siguraduhing mayroon ka ng
            Levitating Emote)`,
          `Pagkabukas, ay pumasok ka at nasa sa gitna ng pond ang spirit na ito.`,
        ],
      },
      {
        id: 5,
        spirit_id: 'vault5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Meditating Monastic',
        spirit_img_url: MEDITATING_MONASTIC,
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok ka sa Ika-Anim na Mapa - Vault of Knowledge, Lumipad patungo sa Elevating Platform.`,
          `Pagdating sa platform, umakyat hanggang 4th floor.`,
          `Hanapin ang 2 isla na mataas yung isa at mababa naman ang isa, na naguunay ng spiral na hagdanan,`,
          `Pagkaakyat, kinakailangan gawin ang Pray expression upang lumabas ang spirit memory nito.`,
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
        makikita mo tuwing papasok ka sa Vault of Knowledge. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VAULT_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
      </Typography>
    ),
    spirits: [
      {
        id: 7,
        spirit_id: 'vault7',
        season_id: 'season-4',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rhythm',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 45,
        difficulty_types: [1, 5, 6],
        spirit_name: 'Thoughtful Director',
        spirit_img_url: THOUGHTFUL_DIRECTOR,
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform.`,
          `May 4-player door sa gawing kanan, gawin ang meditating emote.`,
          `Pagkabukas ay nasa gawing kanan ng entrance ang spirit na ito.`,
        ],
      },
      {
        id: 8,
        spirit_id: 'vault8',
        season_id: 'season-1',
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        difficulty_types: [0, 2, 5],
        spirit_name: 'Greeting Shaman',
        spirit_img_url: GREETING_SHAMAN,
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform.`,
          `Umakyat hanggang 4th floor,Pagkadating sa 4th Floor, lumipad patungo sa constellation ng Hidden Forest`,
          `At dumako sa dulo ng mga gumagalaw na platform.`,
        ],
      },
      {
        id: 9,
        spirit_id: 'vault9',
        season_id: 'season-2',
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 55,
        difficulty_types: [1, 4, 5, 6],
        spirit_name: 'Shushing Light Scholar',
        spirit_img_url: SHUSHING_LIGHTSCHOLAR,
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform.`,
          `Umakyat hanggang 4th floor,Pagkadating sa 4th Floor, lumipad patungo sa 
          spiral na platform, bandang constellation ng Isle of Dawn`,
          `At sa unang malaking platform`,
        ],
      },
      {
        id: 10,
        spirit_id: 'vault10',
        season_id: 'season-3',
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 55,
        difficulty_types: [1, 4, 5, 6],
        spirit_name: 'Wise Grandparent',
        spirit_img_url: WISE_GRANDPARENT,
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform.`,
          `Umakyat hanggang 4th floor,Pagkadating sa 4th Floor, lumipad patungo sa 
          spiral na platform, bandang constellation ng Isle of Dawn`,
          `At sa unang malaking platform`,
        ],
      },
      {
        id: 11,
        spirit_id: 'vault11',
        season_id: 'season-10',
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 30,
        difficulty_types: [1, 2, 4],
        spirit_name: 'Slouching Soldier',
        spirit_img_url: SLOUCHING_SOLDIER,
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad gawing kaliwa at pumasok ka sa lagusan,`,
          `Maglakad palabas ng lagusan, at lumipad gawing kanan patungo sa malaking banga.`,
          `Pumasok sa bunganga ng banga at nasa bandang kanan ang spirit na ito.`,
        ],
      },
      {
        id: 12,
        spirit_id: 'vault12',
        season_id: 'season-10',
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Gloating Narcissist',
        spirit_img_url: GLOATING_NARCISSIST,
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad gawing kaliwa at pumasok ka sa lagusan,`,
          `Maglakad palabas ng lagusan, at lumipad gawing kaliwa patungo sa maliit na coliseum kung saan may fireworks.`,
          `Nasa gawing kanan ng stage sa likod ng poste makikita ito.`,
        ],
      },
      {
        id: 13,
        spirit_id: 'vault13',
        season_id: 'season-10',
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Stretching Lamplighter',
        spirit_img_url: STRETCHING_LAMPLIGHTER,
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad gawing kaliwa at pumasok ka sa lagusan,`,
          `Maglakad palabas ng lagusan, at lumipad gawing kaliwa patungo sa mataas na tore, at sa loob nito ang spirit.`,
        ],
      },
      {
        id: 14,
        spirit_id: 'vault14',
        season_id: 'season-10',
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [2, 5, 7],
        spirit_name: 'Star Collector',
        spirit_img_url: STAR_COLLECTOR,
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad gawing kaliwa at pumasok ka sa lagusan,`,
          `Maglakad palabas ng lagusan, at lumipad gawing kaliwa patungo sa mga kaulapan at may lagusan ito papasok.`,
          `Paglabas ay makita mo ang isang sirang barko at nasa loob nito ang spirit.`,
        ],
      },
      {
        id: 15,
        spirit_id: 'vault15',
        season_id: 'season-10',
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Beckoning Ruler',
        spirit_img_url: BECKONING_RULER,
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad gawing kaliwa at pumasok ka sa lagusan,`,
          `Maglakad palabas ng lagusan, at lumipad patungo sa buwan, at lumapag sa unang islang nakalutang.`,
          `Nasa kaliwang banda ang spirit na ito.`,
        ],
      },
      {
        id: 16,
        spirit_id: 'vault16',
        season_id: 'season-10',
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 30,
        difficulty_types: [1, 2, 4],
        spirit_name: 'Sneezing Geographer',
        spirit_img_url: SNEEZING_GEOGRAPHER,
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad gawing kaliwa at pumasok ka sa lagusan,`,
          `Maglakad palabas ng lagusan, at lumipad patungo sa buwan, at lumapag sa pangalawang islang nakalutang.`,
          `makita mo agad ang spirit na ito.`,
        ],
      },
      {
        id: 17,
        spirit_id: 'vault17',
        season_id: 'season-16',
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Bereft Veteran',
        spirit_img_url: BEREFT_VETERAN,
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform,`,
          `Pagkarating sa gitna, kumaliwa ka at may lagusan pababa kang makikita.`,
          `Pagkarating mo sa Repository Refugee, makita mo ang spirit sa butas sa kaliwang banda.`,
        ],
      },
      {
        id: 18,
        spirit_id: 'vault18',
        season_id: 'season-16',
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Wounded Warrior',
        spirit_img_url: WOUNDED_SOLDIER,
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform,`,
          `Pagkarating sa gitna, kumaliwa ka at may lagusan pababa kang makikita.`,
          `Pagkarating mo sa Repository Refugee, sa kanang bahagi ng Spirit Guide, may butas sa likod`,
          `Pumasok ka at makita mo ang spirit na ito sa platform sa labas.`,
        ],
      },
      {
        id: 19,
        spirit_id: 'vault19',
        season_id: 'season-16',
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Tiptoeing Tea-Brewer',
        spirit_img_url: TIPTOEING_TEABREWER,
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform,`,
          `Pagkarating sa gitna, kumaliwa ka at may lagusan pababa kang makikita.`,
          `Pagkarating mo sa Repository Refugee, lumipad pataas hanggang sa may makita kang platform na may tent.`,
          `Lumapag ka at pumasok sa butas, makita mo ang spirit na ito sa gawing kanan likod ng pader.`,
        ],
      },
      {
        id: 20,
        spirit_id: 'vault20',
        season_id: 'season-16',
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Pleading Child',
        spirit_img_url: PLEADING_CHILD,
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo sa elevating platform,`,
          `Pagkarating sa gitna, kumaliwa ka at may lagusan pababa kang makikita.`,
          `Pagkarating mo sa Repository Refugee, lumipad ka pataas hanggang sa tuktok.`,
          `Lumapag ka kahit saan at makita mo dito sa huling floor ang spirit.`,
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
          {VAULT_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Daylight Prairie, kasama
        na ang 4 na nasa trials ng Season Of Prophecy.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'Vault-WL1',
        wl_group: 'wl-vault',
        wl_url: VK_WL1 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad gawing kaliwa sa may hagdanan >>
        Sa tuktok ng hagdanan makita ang winged light.`,
      },
      {
        id: 2,
        wl_label: 'Vault-WL2',
        wl_group: 'wl-vault',
        wl_url: VK_WL2 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 3rd floor >> at sa tuktok ng shed
        house makita mo ang winged light na ito.`,
      },
      {
        id: 3,
        wl_label: 'Vault-WL3',
        wl_group: 'wl-vault',
        wl_url: VK_WL3 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 4th floor >> lumipad patungo kung saan makita ang
        Daylight Prairie Constellation >> at makita mo ang nakalutang na islet na may spiral stairs >>
        Sa loob ang winged light na ito.`,
      },
      {
        id: 4,
        wl_label: 'Vault-WL4',
        wl_group: 'wl-vault',
        wl_url: VK_WL4 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 4th floor >> lumipad patungo kung saan makita ang
        Isle of Dawn Constellation >> sa pinakatuktok na islet sa taas makita mo ang winged light.`,
      },
      {
        id: 5,
        wl_label: 'Vault-WL5',
        wl_group: 'wl-vault',
        wl_url: VK_WL5 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 5th floor >> lumipad patungo kung saan makita ang
        malaking buto at nakapatong lng ang winged light dito.`,
      },
      {
        id: 6,
        wl_label: 'Vault-WL6',
        wl_group: 'wl-vault',
        wl_url: VK_WL6 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang Summit >> Makita mo ang winged light sa paanan ng temple shrine.`,
      },
      {
        id: 7,
        wl_label: 'Vault-WL7',
        wl_group: 'wl-vault',
        wl_url: VK_WL7 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad pataas at sa gawing kanan ay may
        2-player door, buksan ito. Pagkabukas ay pumasok sa lagusan >> Pagkapasok ay
        lumipad paakyat at pumasok sa kaliwang butas. >> Sa pangatlong pagbaba ay may
        kwarto sa kaliwa kung saan may mga banga at sa likod nito ay may winged light.`,
      },
      {
        id: 8,
        wl_label: 'Vault-WL8',
        wl_group: 'wl-vault',
        wl_url: VK_WL8 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad pataas at sa gawing kanan ay may
        2-player door, buksan ito. Pagkabukas ay pumasok sa lagusan >> Pagkapasok ay
        lumipad paakyat at pumasok sa kaliwang butas. >> Sa pangatlong pagbaba dumako 
        patungo sa makitang hagdanan at pumasok sa butas pataas at makita mo
        ang winged light dito.`,
      },
      {
        id: 9,
        wl_label: 'Vault-WL9',
        wl_group: 'wl-vault',
        wl_url: VK_WL9 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad pataas at sa gawing kaliwa ay may
        lagusan papasok. >> Pagkarating sa Starlight Dessert, ay lumipad patungo sa malaking banga na
        nasa iyong gawing kanan. >> Makita mo ang winged light sa tuktok nito.`,
      },
      {
        id: 10,
        wl_label: 'Vault-WL10',
        wl_group: 'wl-vault',
        wl_url: VK_WL10 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad pataas at sa gawing kaliwa ay may
        lagusan papasok. >> Pagkarating sa Starlight Dessert, ay lumipad patungo sa mataas na tower 
        na nasa iyong gawing kaliwa. >> Nasa tuktok ng tower ang winged light na ito.`,
      },
      {
        id: 11,
        wl_label: 'Vault-WL11',
        wl_group: 'wl-vault',
        wl_url: VK_WL11 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad pataas at sa gawing kaliwa ay may
        lagusan papasok. >> Pagkarating sa Starlight Dessert, ay lumipad patungo sa buwan. >>
        Sa unang islang nakalutang ay may hugis krus ito na butas sa ilalim at nasa loob
        nito ang winged light.`,
      },
      {
        id: 12,
        wl_label: 'Vault-WL12',
        wl_group: 'wl-vault',
        wl_url: VK_WL12 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 6 | Vault of Knowledge >> Lumipad patungo sa elevating platform. >>
        Pagdating sa gitna ay may lagusan papasok sa iyong gawing kaliwa. >> Pagkapasok ay
        may butas sa iyong kaliwa, pumasok ka ulit, hanggang sa lumabas ka sa repository >>
        Lumipad palabas patungong kanan hanggat may makita kang maliit na ilaw
        sa iyong kanan. >> Sa labas nito ay nakarehas ang winged light.`,
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
          {VAULT_NUM_MAP_SHRINES}
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
