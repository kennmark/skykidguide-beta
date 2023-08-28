import anuby from './../assets/images/animated/animated-3.gif'
import manty from './../assets/images/animated/animated-9.gif'
import umbry from './../assets/images/animated/animated-4.gif'
import jelly from './../assets/images/animated/animated-10.gif'
import crabby from './../assets/images/animated/animated-5.gif'
import lanty from './../assets/images/animated/animated-7.gif'
import mothy from './../assets/images/animated/animated-1.gif'
import candly from './../assets/images/animated/animated-8.gif'
import isle from './../assets/images/bg/Map1-Isle.jpg'
import prairie from './../assets/images/bg/Map2-Prairie.jpg'
import forest from './../assets/images/bg/Map3-Forest.jpg'
import valley from './../assets/images/bg/Map4-Valley.jpg'
import wasteland from './../assets/images/bg/Map5-Wasteland.jpg'
import vault from './../assets/images/bg/Map6-Vault.jpg'
import eden from './../assets/images/bg/Map7-Eden.jpg'
import peaks from './../assets/images/bg/Map8-Peaks.jpg'

export const maps = [
  {
    id: 1,
    title: 'Isle Of Dawn',
    subtitle: 'Unang Mapa',
    alt: 'Annubis Mask',
    img: anuby,
    bg: isle,
    group: 'map-1 shadow-8',
    pageRoute: '#',
    caption: 'Dito nagsisimula ang iyong paglalakbay Skykid!',
    num_of_wls: 9,
    num_of_reg_spirits: 3,
    num_of_season_spirits: 12,
    num_of_map_shrines: 9,
  },
  {
    id: 2,
    title: 'Daylight Prairie',
    subtitle: 'Pangalawang Mapa',
    alt: 'Jelly Fish',
    img: jelly,
    bg: prairie,
    group: 'map-2 shadow-8',
    pageRoute: '#',
    caption: 'Malaya kang makakalipad at mag-ikot-ikot sa Prairie',
    num_of_wls: 24,
    num_of_reg_spirits: 8,
    num_of_season_spirits: 14,
    num_of_map_shrines: 9,
  },
  {
    id: 3,
    title: 'Hidden Forest',
    subtitle: 'Pangatlong Mapa',
    alt: 'Umbrella',
    img: umbry,
    bg: forest,
    group: 'map-3 shadow-8',
    pageRoute: '#',
    caption: 'Huwag kang magbabad sa ulan at sa ilog',
    num_of_wls: 19,
    num_of_reg_spirits: 8,
    num_of_season_spirits: 14,
    num_of_map_shrines: 10,
  },
  {
    id: 4,
    title: 'Valley Of Triumph',
    subtitle: 'Pang-Apat na Mapa',
    alt: 'Manta',
    img: manty,
    bg: valley,
    group: 'map-4 shadow-8',
    pageRoute: '#',
    caption: 'Magsanay sa 2 karera at bisitahin ang silid-musika',
    num_of_wls: 17,
    num_of_reg_spirits: 7,
    num_of_season_spirits: 16,
    num_of_map_shrines: 10,
  },
  {
    id: 5,
    title: 'Golden Wasteland',
    subtitle: 'Panglimang Mapa',
    alt: 'Crab',
    img: crabby,
    bg: wasteland,
    group: 'map-5 shadow-8',
    caption: 'Mag-ingat sa hipon na malaki, ikakapahamak ng Skykid mo!!!',
    num_of_wls: 18,
    num_of_reg_spirits: 6,
    num_of_season_spirits: 14,
    num_of_map_shrines: 8,

    pageRoute: '#',
  },
  {
    id: 6,
    title: 'Vault Of Knowledge',
    subtitle: 'Pang-Anim na Mapa',
    alt: 'Lantern',
    img: lanty,
    bg: vault,
    group: 'map-6 shadow-8',
    pageRoute: '#',
    caption: 'Tandaan, laging tumulong sa 4-player door',
    num_of_wls: 12,
    num_of_reg_spirits: 5,
    num_of_season_spirits: 14,
    num_of_map_shrines: 7,
  },
  {
    id: 7,
    title: 'Eye of Eden',
    subtitle: 'Pangpitong Mapa',
    alt: 'Mothy',
    img: mothy,
    bg: eden,
    group: 'map-7 shadow-8',
    pageRoute: '#',
    caption: 'Ihanda ang sarili, huwag matakot. Malalagpasan mo din ito',
    id: 7,
    map: 'Eye of Eden',
    num_of_wls: 10,
    num_of_reg_spirits: 0,
    num_of_season_spirits: 0,
    num_of_map_shrines: 2,
  },
  {
    id: 8,
    title: 'Season of Moments',
    subtitle: 'Season Map',
    alt: 'Monthy',
    img: candly,
    bg: peaks,
    group: 'map-8 shadow-8',
    pageRoute: '#',
    caption:
      'Magrelax sa magagandang tanawin at mabilis na paglipat ng araw at gabi',
    num_of_wls: 3,
    num_of_reg_spirits: 0,
    num_of_season_spirits: 4,
    num_of_map_shrines: 1,
  },
]

export const collectibles = [
  {
    id: 1,
    map: 'Isle Of Dawn',
  },
  {
    id: 2,
    map: 'Daylight Prairie',
  },
  {
    id: 3,
    map: 'Hidden Forest',
  },
  {
    id: 4,
    map: 'Valley Of Triumph',
  },
  {
    id: 5,
    map: 'Golden Wasteland',
  },
  {
    id: 6,
    map: 'Vault Of Knowledge',
  },
  {},
  {
    id: 8,
    map: 'Season Map',
  },
]
