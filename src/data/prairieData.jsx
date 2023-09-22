import { Typography } from '@material-tailwind/react'
import {
  PRAIRIE_NUM_REG_SPIRIT,
  PRAIRIE_NUM_SEASON_SPIRIT,
  PRAIRIE_NUM_WL,
  PRAIRIE_NUM_MAP_SHRINES,
} from '../exports/constants'

const google_pretext = 'https://drive.google.com/uc?export=view&id='
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
        difficulty_level: 30,
        spirit_name: 'Applauding Bellmaker',
        spirit_img_url: google_pretext + '1KJW-yKKXdEWDBNr5FeSyfehw4okSwNh3',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_guide_video_url: youtube_embed + 'ODMA1Q9155o',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita. At kapag ikaw ay
        makarating sa Village Islands, lumipad ka gawing kaliwa at may makikita kang isla na may malaking pintuan.
        Sindihan ang isang parte ng pintuan at antayin ng may isang manlalaro nag magsindi din sa sa kabilang
        pintuan at ito ay magbubukas. Pumasok ka at makikita mo agad ang spirit na ito.`,
      },
      {
        id: 2,
        spirit_id: 'prairie2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'sound-call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 20,
        spirit_name: 'Bird Whisperer',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_img_url: google_pretext + '1UzrkGLqITVotxVQvYXIZVSurlgs9eyRH',
        spirit_guide_video_url: youtube_embed + 'dMDOQfWCFEg',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest ay may makikitang kang maraming nakalutang na isla. Lumipad ka hanggat makita mo ang 
        nasa dulo na isla at kumikinang na spirit ng Bird Whisperer.`,
      },
      {
        id: 3,
        spirit_id: 'prairie3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 9,
        spirit_name: 'Butterfly Charmer',
        spirit_img_url: google_pretext + '1A0N3y15kY0hpCzZniR41OQje2F3gF8H8',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_guide_video_url: youtube_embed + 'ZvplZUDwr9U',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, may makikita kang parang hugis globe na bukid at sa lagusan nito ay makikita mo
        ang spirit na hinahanap mo.`,
      },
      {
        id: 4,
        spirit_id: 'prairie4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 40,
        spirit_name: 'Ceremonial Worshiper',
        spirit_img_url: google_pretext + '150a0Z7ydhU0fQZXOsetayDMrH8OX2Nio',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita. At kapag ikaw ay
        makarating sa Village Islands, lumipad ka gawing kanan, at may makita kang isla. Kakailanganin mo ng isa
        pang manlalaro para gawin ang butterfly charm emote na pipindutin mo. Pagkabukas ay pumasok ka sa pintuan
        at makakarating ka sa 8-player door. Tandaan kinakailangan mo ulit ng 8 pang manlalaro na kasamang magsisindi
        sa locks. Pagkamabuksan ito, ay i-aangat kayo sa taas. Pagkadating sa taas ay kinakailangan masindihan 
        lahat ng kandila na nakapalitbot sa mga shrines, at ito ang hudyat na nakuha mo ang spirit.`,
      },
      {
        id: 5,
        spirit_id: 'prairie5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        spirit_name: 'Exhausted Dock Worker',
        spirit_img_url: google_pretext + '1rJickmKOTAgrpsCr7Gtf7LbmYJn9x8H9',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kaliwa mo ay may lagusan papasok. Pagkapasok mo ay makikita mo ang
        Prairie Caves, lumipad ka hanggang sa makapasok ka at patungo malapit sa labasan ng kweba ay may makita
        kang lagusan na maliit sa iyong kaliwa. Pagkapasok mo ay makita mo ang spirit na ito.`,
      },
      {
        id: 6,
        spirit_id: 'prairie6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        spirit_name: 'Laughing Light Catcher',
        spirit_img_url: google_pretext + '1IN4DRfmh5kf2_LHxrLjNkpWsKT-0ACHT',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_guide_video_url: youtube_embed + 'bxbQ0E0-6P0',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita. At kapag ikaw ay
        makarating sa Village Islands, lumipad ka gawing kanan, at may makita kang isla. Nasa loob ang spirit na
        ito.`,
      },
      {
        id: 7,
        spirit_id: 'prairie7',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        spirit_name: 'Slumbering Shipwright',
        spirit_img_url: google_pretext + '1EO2_wkc2eOg7oeE4GpSOZ_JEe73zO0qo',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_guide_video_url: youtube_embed + 'TndluWxF7tw',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita. At kapag ikaw ay
        makarating sa Village Islands, lumipad ka patungo sa gitnang isla at hanapin ang pintuan. Tandaan 
        kailangan mo ng kasamang magbukas ng pintuan. Pagkabukas nito ay makita mo sa loob yung spirit.`,
      },
      {
        id: 8,
        spirit_id: 'prairie8',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        spirit_name: 'Waving Bellmaker',
        spirit_img_url: google_pretext + '16301iKbqPd6yI-VpWjf8_unnBg04incq',
        constellation_icon_route:
          google_pretext + '1NsShzjH9XVL2GFDYrUZCm9SZ8h_IVTwO',
        spirit_guide_video_url: youtube_embed + 'f4PG-FV55jM',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, dumako ka patungo sa direksyon ng templo na iyong makikita. At kapag ikaw ay
        makarating sa Village Islands, lumipad ka patungo sa gitnang isla at makikita mo agad ang spirit na ito.`,
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
        spirit_name: 'Stretching Guru',
        spirit_img_url: google_pretext + '1sOWqM0SIp216GkAUjZKqeaq05nYhzOkD',
        icon_route: google_pretext + '1paP_D4-Ge3vladyFaKcSX_aF_K9SLETY',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kaliwa mo ay may lagusan papasok. Pagkapasok mo ay makikita mo ang
        Prairie Caves, pagkalapag mo sa entrance ng kweba, pasok ka lang ng onti, at sa gawing kaliwa mo makita
        ang spirit na ito.`,
      },
      {
        id: 10,
        spirit_id: 'prairie10',
        season_id: 'season-2',
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'friendship action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 40,
        spirit_name: 'Doublefive Light Catcher',
        spirit_img_url: google_pretext + '1G5-FfXPmMDjsrqnZ3mcen3XXx4y5ijqb',
        icon_route: google_pretext + '1QqqKCiHT0oY4Nt6cW-D7zeKDUtiudF5s',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest ay may makikitang kang maraming nakalutang na isla. Lumipad ka gawing kaliwa, at sa likod
        ng sirang tore, dakong dulo ng isla ay makikita mo itong spirit.`,
      },
      {
        id: 11,
        spirit_id: 'prairie11',
        season_id: 'season-3',
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 30,
        spirit_name: 'Confetti Cousin',
        spirit_img_url: google_pretext + '1HEF1G5ZgXJbHuoykMm_uTpMwhM66pZS-',
        icon_route: google_pretext + '15ybDFL8gGtAZYV5GRt_U2kgGX1h02A5S',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, may makikita kang parang hugis globe na bukid at sa tuktok nito ay makikita mo
        ang spirit.`,
      },
      {
        id: 12,
        spirit_id: 'prairie12',
        season_id: 'season-4',
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        spirit_name: 'Festival Spin Dancer',
        spirit_img_url: google_pretext + '1G48CzF0ylGxMzzRjcDibsetU37IB1Rwd',
        icon_route: google_pretext + '1c8aeYQfvIkd9vsyFZa7gtJCwz6cAJfNq',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest sa iyong kinatatayuan tumalon kalang pababa at pagkalapag mo ay makita mo ang spirit sa
        ilalim nito.`,
      },
      {
        id: 13,
        spirit_id: 'prairie13',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 50,
        spirit_name: 'Chill Sunbather',
        spirit_img_url: google_pretext + '1-u9JLAHAXbQBRRCaHAmuipf4nlweAowz',
        icon_route: google_pretext + '17R_GJM63yAo8c8wRybA6Pk3a4Yx3kqTL',
        spirit_guide_video_url: youtube_embed + '197tor-WWVo',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest Area, lumipad ka pababa hanggang sa makita mo ang lagusan na ulap. Pagdating mo sa
        Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, at may makikita ka kaagad na spirit na nasa
        labas ng maliit na lagusan.`,
      },
      {
        id: 14,
        spirit_id: 'prairie14',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 60,
        spirit_name: 'Rallying Thrillseeker',
        spirit_img_url: google_pretext + '1g3adJoSyBURtmdmgz-f0-09ccCrixbOg',
        icon_route: google_pretext + '17R_GJM63yAo8c8wRybA6Pk3a4Yx3kqTL',
        spirit_guide_video_url: youtube_embed + 'vqDrzq5MZ9k',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest Area, lumipad ka pababa hanggang sa makita mo ang lagusan na ulap. Pagdating mo sa
        Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, makikita mo itong spirit katabi sa nag-iisang 
        geyser unahan ng waterfalls.`,
      },
      {
        id: 15,
        spirit_id: 'prairie15',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        spirit_name: 'Grateful Shell Collector',
        spirit_img_url: google_pretext + '16pQe6LsXGAhnLT2Wdo8bgTbPX6qwoEtO',
        icon_route: google_pretext + '17R_GJM63yAo8c8wRybA6Pk3a4Yx3kqTL',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest Area, lumipad ka pababa hanggang sa makita mo ang lagusan na ulap. Pagdating mo sa
        Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, makikita mo itong spirit nasa bunganga ng
        entrance ng malaking kweba. Nasa gilid ng bunganga ng kweba mo ito makikita.`,
      },
      {
        id: 16,
        spirit_id: 'prairie16',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 90,
        spirit_name: 'Hiking Grouch',
        spirit_img_url: google_pretext + '1JEowG4SEE7K8EdAQBuQ25N6tmQ2ykKkX',
        icon_route: google_pretext + '17R_GJM63yAo8c8wRybA6Pk3a4Yx3kqTL',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest Area, lumipad ka pababa hanggang sa makita mo ang lagusan na ulap. Pagdating mo sa
        Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, makikita mo itong spirit nasa bunganga ng
        entrance ng malaking kweba. Nasa gilid ng bunganga ng kweba mo ito makikita.`,
      },
      {
        id: 17,
        spirit_id: 'prairie17',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'sound-call',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 15,
        spirit_name: 'Jelly Whisperer',
        spirit_img_url: google_pretext + '1dLuDl4wAgCyvERu9wUmWMYgMGWJ_UNMA',
        icon_route: google_pretext + '17R_GJM63yAo8c8wRybA6Pk3a4Yx3kqTL',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest Area, lumipad ka pababa hanggang sa makita mo ang lagusan na ulap. Pagdating mo sa
        Sanctuary Islands, lumipad ka pababa sa pinakamalaking isla, at sa likod ng malaking isla may malaking
        kweba na may mga jellyfish, nasa looban ang spirit dito.`,
      },
      {
        id: 18,
        spirit_id: 'prairie18',
        season_id: 'season-6',
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        spirit_name: 'Timid Bookworm',
        spirit_img_url: google_pretext + '1jagnbmO4TgdVb3tAdxbDOZGOPKQLP9e_',
        icon_route: google_pretext + '17R_GJM63yAo8c8wRybA6Pk3a4Yx3kqTL',
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kanan ay may lagusan patungong Bird's Nest, pumasok ka. Pagdating mo
        sa Bird's Nest Area, lumipad ka pababa hanggang sa makita mo ang lagusan na ulap. Pagdating mo sa
        Sanctuary Islands, lumipad ka papunta sa unang nakalutang na isla sa harap mo, makikita ang spirit na ito
        sa likod ng nakalutang na isla, nakasampa sa gild.`,
      },
      {
        id: 19,
        spirit_id: 'prairie19',
        season_id: 'season-18',
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Monents',
        spirit_category: 'friendship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        spirit_name: 'Reassuring Ranger',
        spirit_img_url: google_pretext + '1Lu6NGmSHBQUhYyp3Kk-Cp13isVLE-et6',
        icon_route: google_pretext + '1ibcM29RVVhuOTsYaBA_lfwm3M0sacXEm',
        spirit_guide_video_url: youtube_embed + 'MN1DV_iu7EQ',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kaliwa ay may makikita kang lagusan. Pagkapasok mo lumipad ka gawing
        kaliwa at may makikita kang maliit na butas. Pumasok ka at sumakay ka sa bangka at umupo. Pagkarating 
        mo sa Prairie Peaks, ay lumipad ka patungo sa Quest Giver sa bandang kanan sa ibaba. At sa likod ng bato
        ay nakatago ang spirit na ito.`,
      },
      {
        id: 20,
        spirit_id: 'prairie20',
        season_id: 'season-18',
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Monents',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        spirit_name: 'Jolly Geologist',
        spirit_img_url: google_pretext + '1TmZSP-n_KiKGSI0lDu-D27WLyKQrG0oZ',
        icon_route: google_pretext + '1ibcM29RVVhuOTsYaBA_lfwm3M0sacXEm',
        spirit_guide_video_url: youtube_embed + 'PSttOiSBiys',
        spirit_direction: `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kaliwa ay may makikita kang lagusan. Pagkapasok mo lumipad ka gawing
        kaliwa at may makikita kang maliit na butas. Pumasok ka at sumakay ka sa bangka at umupo. Pagkarating 
        mo sa Prairie Peaks, ay lumipad ka sa direksyon ng malaking talon, at bago ka pa makarating sa talon
        ay may makikita kang maliit na lagusan ng kweba. Pagkapasok mo ay makikita mo agad sya sa gawing kanan.`,
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
        spirit_name: 'Ascetic Monk',
        spirit_img_url: google_pretext + '11iBUfXoHuxT371XUqbvwkIg9MX4kC7b0',
        icon_route: google_pretext + '1ibcM29RVVhuOTsYaBA_lfwm3M0sacXEm',
        spirit_guide_video_url: youtube_embed + 'v8ecSqd3NOA',
        spirit_direction: `Lumipad ka patungo sa kaulapan
        at sa iyong pagkalapag, sa gawing kaliwa ay may makikita kang lagusan. Pagkapasok mo lumipad ka gawing
        kaliwa at may makikita kang maliit na butas. Pumasok ka at sumakay ka sa bangka at umupo. Pagkarating 
        mo sa Prairie Peaks, ay lumipad ka gawing kaliwa, patungo sa mataas na bundok kung saan may nyebe (snow)
        at sa bandang tuktok na patag ay makita mo ang spirit na ito.`,
      },
      {
        id: 22,
        spirit_id: 'prairie22',
        season_id: 'season-18',
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Monents',
        spirit_category: 'sound-call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        spirit_name: 'Nightbird Whisperer',
        spirit_img_url: google_pretext + '1cRd7HjSRFbfLmtAmOn8GnoSUsxBg2oX1',
        icon_route: google_pretext + '1ibcM29RVVhuOTsYaBA_lfwm3M0sacXEm',
        spirit_guide_video_url: youtube_embed + 'C8otHgCYJ7U',
        spirit_direction: `Lumipad ka patungo sa kaulapan at sa iyong pagkalapag, sa gawing kaliwa ay may makikita 
        kang lagusan. Pagkapasok mo lumipad ka gawing kaliwa at may makikita kang maliit na butas. Pumasok ka at
        sumakay ka sa bangka at umupo. Pagkarating mo sa Prairie Peaks, ay lumipad ka gawing kaliwa, patungo 
        sa mga bundok na lagusan. Pumasok ka hanggang sa may makita kang lagusan na mababa at pagkapasok mo ay
         may makikita kang pinakamalaking monolith o matarik na bato at sa likod nito ay makikita mo ang spirit.`,
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
        wl_label: 'prairie-WL1',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Nasa tuktok ng unang kweba na makikita mo pagkapasok mo ng Pangalawang Mapa - Daylight Prairie`,
      },
      {
        id: 2,
        wl_label: 'prairie-WL2',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pagkalabas mo ng unang kweba, makikita mo agad sa gawing kanan, ang sirang bangka namy
        winged light sa ibabaw nito.`,
      },
      {
        id: 3,
        wl_label: 'prairie-WL3',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pagkalabas mo ng unang kweba,lumipad ka gawing kanan, hanggang sa makita mo ang maliit
        na kweba, at sa loob nito ay may isang winged light.`,
      },
      {
        id: 4,
        wl_label: 'prairie-WL4',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pagkalabas mo ng unang kweba, lumipad ka lang ng diretso at makikita mo ang batong
        hagdanan, sa dulo nito ay may makikita ka agad na winged light.`,
      },
      {
        id: 5,
        wl_label: 'prairie-WL5',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pagkalabas mo ng unang kweba, lumipad ka patungong templo, at sa gawing kanan patungo sa
        butterfly cave, kinakailangan mong makaakyat pataas. Pag nakaakyat ka na, may makikita kang lagusan
        sa gawing kanan. Pagkapasok mo, sa bandang kanan mo naman ulit may butas kung saan naroron ang isang
        winged light.`,
      },
      {
        id: 6,
        wl_label: 'prairie-WL6',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pumasok ka sa Water Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
        makukuha.`,
      },
      {
        id: 7,
        wl_label: 'prairie-WL7',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pumasok ka sa Earth Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
        makukuha.`,
      },
      {
        id: 8,
        wl_label: 'prairie-WL8',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pumasok ka sa Air Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
        makukuha.`,
      },
      {
        id: 9,
        wl_label: 'prairie-WL9',
        wl_group: 'wl-prairie',
        wl_url: google_pretext + '1-rEWdJc8DkHwYJUIMR3vPsUKQQflTqK-',
        wl_location: `Pumasok ka sa Fire Trial ng Cave of Prophecy. Tapusin mo ang trial at sa dulo nito ay may winged light kang
        makukuha.`,
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
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location:
          'Makikita mo ito pagkatapos sa pangalawang winged light. Nasa itaas lamang ng bangka.',
      },
      {
        id: 2,
        shrine_label: 'Map Shrine 2',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location: 'Nasa tuktok ito ng Passage Stone.',
      },
      {
        id: 3,
        shrine_label: 'Map Shrine 3',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location: 'Nasa mga labas ng templo.',
      },
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location: 'Nasa tuktok ng butterfly cave',
      },
      {
        id: 5,
        shrine_label: 'Map Shrine 5',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location: 'Sa loob ng Cave of Prophecy',
      },
      {
        id: 6,
        shrine_label: 'Map Shrine 6',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location: 'Sa water trial',
      },
      {
        id: 7,
        shrine_label: 'Map Shrine 7',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location:
          'Sa earth trial, bago ka pumasok sa huling pagsubok, nasa bandang kanan pagkaakyat mo sa labas.',
      },
      {
        id: 8,
        shrine_label: 'Map Shrine 8',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location: 'Sa earth trial.',
      },
      {
        id: 9,
        shrine_label: 'Map Shrine 9',
        shrine_url: google_pretext + '1nxe2KSd5UqzUsTUNBe5NtgAS4goQhiUB',
        shrine_location:
          'sa fire trial, bago mag exit sa 3rd floor, nasa gilid ng lagusan.',
      },
    ],
  },
]
