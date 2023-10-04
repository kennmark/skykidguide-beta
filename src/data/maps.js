import {
  ISLE_NUM_REG_SPIRIT,
  ISLE_NUM_SEASON_SPIRIT,
  ISLE_NUM_WL,
  ISLE_NUM_MAP_SHRINES,
  PRAIRIE_NUM_REG_SPIRIT,
  PRAIRIE_NUM_SEASON_SPIRIT,
  PRAIRIE_NUM_WL,
  PRAIRIE_NUM_MAP_SHRINES,
  FOREST_NUM_REG_SPIRIT,
  FOREST_NUM_SEASON_SPIRIT,
  FOREST_NUM_WL,
  FOREST_NUM_MAP_SHRINES,
  VALLEY_NUM_REG_SPIRIT,
  VALLEY_NUM_SEASON_SPIRIT,
  VALLEY_NUM_WL,
  VALLEY_NUM_MAP_SHRINES,
  WASTELAND_NUM_REG_SPIRIT,
  WASTELAND_NUM_SEASON_SPIRIT,
  WASTELAND_NUM_WL,
  WASTELAND_NUM_MAP_SHRINES,
  VAULT_NUM_REG_SPIRIT,
  VAULT_NUM_SEASON_SPIRIT,
  VAULT_NUM_WL,
  VAULT_NUM_MAP_SHRINES,
  EDEN_NUM_REG_SPIRIT,
  EDEN_NUM_SEASON_SPIRIT,
  EDEN_NUM_WL,
  EDEN_NUM_MAP_SHRINES,
  S18_NUM_REG_SPIRIT,
  S18_NUM_SEASON_SPIRIT,
  S18_NUM_WL,
  S18_NUM_MAP_SHRINES,
} from './../exports/constants'
import {
  GIF_ISLE,
  GIF_PRAIRIE,
  GIF_FOREST,
  GIF_VALLEY,
  GIF_WASTELAND,
  GIF_VAULT,
  GIF_EDEN,
  GIF_SEASON,
  ISLE_ALT,
  PRAIRIE_ALT,
  FOREST_ALT,
  VALLEY_ALT,
  WASTELAND_ALT,
  VAULT_ALT,
  EDEN_ALT,
  SEASON_ALT,
} from '../exports/mapGIFs'

export const maps = [
  {
    id: 1,
    title: 'Isle Of Dawn',
    subtitle: 'Unang Mapa',
    map_intro: `Free lost spirits and follow the bell to the temple`,
    alt: ISLE_ALT,
    img: GIF_ISLE,
    group: 'map-1 shadow-8',
    pageRoute: 'maps/1/isle-of-dawn',
    caption: 'Dito nagsisimula ang iyong paglalakbay Skykid!',
    num_of_wls: ISLE_NUM_WL,
    num_of_reg_spirits: ISLE_NUM_REG_SPIRIT,
    num_of_season_spirits: ISLE_NUM_SEASON_SPIRIT,
    num_of_map_shrines: ISLE_NUM_MAP_SHRINES,
  },
  {
    id: 2,
    title: 'Daylight Prairie',
    subtitle: 'Ikalawang Mapa',
    map_intro: 'Ring the bell towers and reveal your path',
    alt: PRAIRIE_ALT,
    img: GIF_PRAIRIE,
    group: 'map-2 shadow-8',
    pageRoute: 'maps/2/daylight-prairie',
    caption: 'Malaya kang makakalipad at mag-ikot-ikot sa Prairie',
    num_of_wls: PRAIRIE_NUM_WL,
    num_of_reg_spirits: PRAIRIE_NUM_REG_SPIRIT,
    num_of_season_spirits: PRAIRIE_NUM_SEASON_SPIRIT,
    num_of_map_shrines: PRAIRIE_NUM_MAP_SHRINES,
  },
  {
    id: 3,
    title: 'Hidden Forest',
    subtitle: 'Ikatlong Mapa',
    map_intro: 'Protect your light and find the source of Ancient Power',
    alt: FOREST_ALT,
    img: GIF_FOREST,
    group: 'map-3 shadow-8',
    pageRoute: 'maps/3/hidden-forest',
    caption: 'Huwag kang magbabad sa ulan at sa ilog',
    num_of_wls: FOREST_NUM_WL,
    num_of_reg_spirits: FOREST_NUM_REG_SPIRIT,
    num_of_season_spirits: FOREST_NUM_SEASON_SPIRIT,
    num_of_map_shrines: FOREST_NUM_MAP_SHRINES,
  },
  {
    id: 4,
    title: 'Valley Of Triumph',
    subtitle: 'Ika-Apat na Mapa',
    map_intro: 'Race down the ridge, and the city gates will open to honor you',
    alt: VALLEY_ALT,
    img: GIF_VALLEY,
    group: 'map-4 shadow-8',
    pageRoute: 'maps/4/valley-of-triumph',
    caption: 'Magsanay sa 2 karera at bisitahin ang silid-musika',
    num_of_wls: VALLEY_NUM_WL,
    num_of_reg_spirits: VALLEY_NUM_REG_SPIRIT,
    num_of_season_spirits: VALLEY_NUM_SEASON_SPIRIT,
    num_of_map_shrines: VALLEY_NUM_MAP_SHRINES,
  },
  {
    id: 5,
    title: 'Golden Wasteland',
    subtitle: 'Ika-Limang Mapa',
    map_intro: 'Beyond the barren wastes, the Vault of Knowledge awaits',
    alt: WASTELAND_ALT,
    img: GIF_WASTELAND,
    group: 'map-5 shadow-8',
    pageRoute: 'maps/5/golden-wasteland',
    caption: 'Mag-ingat sa hipon na malaki, ikakapahamak ng Skykid mo!!!',
    num_of_wls: WASTELAND_NUM_WL,
    num_of_reg_spirits: WASTELAND_NUM_REG_SPIRIT,
    num_of_season_spirits: WASTELAND_NUM_SEASON_SPIRIT,
    num_of_map_shrines: WASTELAND_NUM_MAP_SHRINES,
  },
  {
    id: 6,
    title: 'Vault Of Knowledge',
    subtitle: 'Ika-Anim na Mapa',
    map_intro: 'Climb the Vault, its wisdom awaits',
    alt: VAULT_ALT,
    img: GIF_VAULT,
    group: 'map-6 shadow-8',
    pageRoute: 'maps/6/vault-of-knowledge',
    caption: 'Tandaan, laging tumulong sa 4-player door',
    num_of_wls: VAULT_NUM_WL,
    num_of_reg_spirits: VAULT_NUM_REG_SPIRIT,
    num_of_season_spirits: VAULT_NUM_SEASON_SPIRIT,
    num_of_map_shrines: VAULT_NUM_MAP_SHRINES,
  },
  {
    id: 7,
    title: 'Eye of Eden',
    subtitle: 'Ika-Pitong Mapa',
    map_intro: 'Push into the darkness',
    alt: EDEN_ALT,
    img: GIF_EDEN,
    group: 'map-7 shadow-8',
    pageRoute: 'maps/7/eye-of-eden',
    caption: 'Ihanda ang sarili, huwag matakot. Malalagpasan mo din ito',
    map: 'Eye of Eden',
    num_of_wls: EDEN_NUM_WL,
    num_of_reg_spirits: EDEN_NUM_REG_SPIRIT,
    num_of_season_spirits: EDEN_NUM_SEASON_SPIRIT,
    num_of_map_shrines: EDEN_NUM_MAP_SHRINES,
  },
  {
    id: 8,
    title: 'Season of Moments',
    subtitle: 'Season Map',
    alt: SEASON_ALT,
    img: GIF_SEASON,
    group: 'map-8 shadow-8',
    pageRoute: 'seasons/2023/season-18/moments',
    caption:
      'Magrelax sa magagandang tanawin at mabilis na paglipat ng araw at gabi',
    num_of_wls: S18_NUM_WL,
    num_of_reg_spirits: S18_NUM_REG_SPIRIT,
    num_of_season_spirits: S18_NUM_SEASON_SPIRIT,
    num_of_map_shrines: S18_NUM_MAP_SHRINES,
  },
]
