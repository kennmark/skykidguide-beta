import { Typography } from '@material-tailwind/react'
import {
  EDEN_NUM_REG_SPIRIT,
  EDEN_NUM_SEASON_SPIRIT,
  EDEN_NUM_WL,
  EDEN_NUM_MAP_SHRINES,
} from '../exports/constants'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  EE_WL1,
  EE_WL2,
  EE_WL3,
  EE_WL4,
  EE_WL5,
  EE_WL6,
  EE_WL7,
  EE_WL8,
  EE_WL9,
  EE_WL10,
} from '../exports/edenWLImgUrl'
import { EE_MS1, EE_MS2, EE_MS3, EE_MS4 } from '../exports/edenMSImgUrl'
export const eden = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Walang Regular Spirit dito.
      </Typography>
    ),
    spirits: [],
  },
  {
    label: 'Seasonal Spirits',
    value: 'seasonal_spirits',
    desc: (
      <Typography className="antialiased font-sans">
        Walang Seasonal Spirit dito.
      </Typography>
    ),
    spirits: [],
  },
  {
    label: 'Winged Lights',
    value: 'winged_lights',
    desc: (
      <Typography className="antialiased font-sans">
        Sa mapang ito mo rin makikita ang mga Winged Lights kung tawagin. Ito ay
        nagpapataas ng lebel para ikaw ay makalipad ng mas mataas. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {EDEN_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'Eden-WL1',
        wl_group: 'wl-vault',
        wl_url: EE_WL1 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> Buksan ang malakit gate.>>
        Umakyat hanggang sa susunod a level ng mapa >> Sa loob ng kwarto makikita
        ang winged light.`,
      },
      {
        id: 2,
        wl_label: 'Eden-WL2',
        wl_group: 'wl-vault',
        wl_url: EE_WL2 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> Buksan ang malakit gate.>>
        Umakyat hanggang sa susunod a level ng mapa >> Lakbayin ang 2nd level hanggang 3rd Level paakyat >>
        Pagdating sa last Level may makitang lagusan papasok kung saan may dumadaan na krill sa pintuan.
        >> Nasa kaliwang banda bago sa pintuan ang winged light.`,
      },
      {
        id: 3,
        wl_label: 'Eden-WL3',
        wl_group: 'wl-vault',
        wl_url: EE_WL3 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> Buksan ang malakit gate.>>
        Umakyat hanggang sa susunod a level ng mapa >> Lakbayin ang 2nd level hanggang 3rd Level paakyat >>
        Pagdating sa last Level may makitang lagusan papasok kung saan may dumadaan na krill sa pintuan.
        >> Nasa pintuan lamang ang winged light na ito.`,
      },
      {
        id: 4,
        wl_label: 'Eden-WL4',
        wl_group: 'wl-vault',
        wl_url: EE_WL4 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> Buksan ang malakit gate.>>
        Umakyat hanggang sa susunod a level ng mapa >> Lakbayin ang 2nd level hanggang 3rd Level paakyat >>
        Pagdating sa last Level may makitang lagusan papasok kung saan may dumadaan na krill sa pintuan.
        >> Baybayin lang hallway papasok sa Eden.`,
      },
      {
        id: 5,
        wl_label: 'Eden-WL5',
        wl_group: 'wl-vault',
        wl_url: EE_WL5 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> uksan ang malakit gate.>>
        Umakyat hanggang sa susunod a level ng mapa >> Lakbayin ang 2nd level hanggang 3rd Level paakyat >>
        Pagdating sa last Level may makitang lagusan papasok kung saan may dumadaan na krill sa pintuan.
        >> Baybayin lang hallway papasok sa Eden.`,
      },
      {
        id: 6,
        wl_label: 'Eden-WL6',
        wl_group: 'wl-vault',
        wl_url: EE_WL6 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 5th floor >> lumipad patungo kung saan makita ang
        malaking buto at nakapatong lng ang winged light dito.`,
      },
      {
        id: 7,
        wl_label: 'Eden-WL7',
        wl_group: 'wl-vault',
        wl_url: EE_WL7 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >>Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 5th floor >> lumipad patungo kung saan makita ang
        malaking buto at nakapatong lng ang winged light dito.`,
      },
      {
        id: 8,
        wl_label: 'Eden-WL8',
        wl_group: 'wl-vault',
        wl_url: EE_WL8 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 5th floor >> lumipad patungo kung saan makita ang
        malaking buto at nakapatong lng ang winged light dito.`,
      },
      {
        id: 9,
        wl_label: 'Eden-WL9',
        wl_group: 'wl-vault',
        wl_url: EE_WL9 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 5th floor >> lumipad patungo kung saan makita ang
        malaking buto at nakapatong lng ang winged light dito.`,
      },
      {
        id: 10,
        wl_label: 'Eden-WL10',
        wl_group: 'wl-vault',
        wl_url: EE_WL10 ?? WINGED_LIGHT,
        wl_location: `Pasok sa Map 7 | Eye of Eden >> Lumipad patungo sa elevating platform >>
        umakyat pataas hanggang 5th floor >> lumipad patungo kung saan makita ang
        malaking buto at nakapatong lng ang winged light dito.`,
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
          {EDEN_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Eye of Eden.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: EE_MS1 ?? MAP_SHRINE,
        shrine_location: `Pasok sa Map 7 | Eye of Eden >> Sa Social Space malapit, 
        makikita mo ang map shrine na ito.`,
      },
      {
        id: 2,
        shrine_label: 'Map Shrine 2',
        shrine_url: EE_MS2 ?? MAP_SHRINE,
        shrine_location: `Pasok sa Map 2 | Eye of Eden >> Nasa third level ito, 
        pagkalabas mo sa tunnel, gawing kaliwa ng tunnel.`,
      },
      {
        id: 3,
        shrine_label: 'Map Shrine 3',
        shrine_url: EE_MS3 ?? MAP_SHRINE,
        shrine_location: `Pasok sa Map 2 | Eye of Eden >> Umakyat patungong last level at pumasok
        sa hallway to Eden >>
        Pagkapasok sa Storm Area ng Eden, sa Entrance,
        gawing kanan sa likod ng bato makita ang map shrine.`,
      },
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: EE_MS4 ?? MAP_SHRINE,
        shrine_location: `Pasok sa Map 2 | Eye of Eden >> Umakyat patungong last level at pumasok
        sa hallway to Eden >> Ma-petrify ang skykid mo at hanggang sa makarating ka sa Orbit. >>
        sa ilalim ng meditating shrine, ay makita mo ang map shrine.`,
      },
    ],
  },
]
