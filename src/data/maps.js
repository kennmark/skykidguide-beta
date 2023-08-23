import anuby from './../assets/images/animated/animated-3.gif'
import manty from './../assets/images/animated/animated-9.gif'
import umbry from './../assets/images/animated/animated-4.gif'
import jelly from './../assets/images/animated/animated-10.gif'
import crabby from './../assets/images/animated/animated-5.gif'
import lanty from './../assets/images/animated/animated-7.gif'
import mothy from './../assets/images/animated/animated-1.gif'
import candly from './../assets/images/animated/animated-8.gif'

export const maps = [
  {
    id: 1,
    title: 'Isle Of Dawn',
    subtitle: 'Mapa 1',
    alt: 'Annubis Mask',
    img: anuby,
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
    subtitle: 'Mapa 2',
    alt: 'Jelly Fish',
    img: jelly,
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
    subtitle: 'Mapa 3',
    alt: 'Umbrella',
    img: umbry,
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
    subtitle: 'Mapa 4',
    alt: 'Manta',
    img: manty,
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
    subtitle: 'Mapa 5',
    alt: 'Crab',
    img: crabby,
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
    subtitle: 'Mapa 6',
    alt: 'Lantern',
    img: lanty,
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
    subtitle: 'Mapa 7',
    alt: 'Mothy',
    img: mothy,
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
