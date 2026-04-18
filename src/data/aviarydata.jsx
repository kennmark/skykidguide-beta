import { Typography } from '@material-tailwind/react'
import { AV_MS1 } from '../exports/aviaryMSImgUrl'
import {
  AVIARY_NUM_SEASON_SPIRIT,
  AVIARY_NUM_REG_SPIRIT,
  AVIARY_NUM_WL,
  AVIARY_NUM_MAP_SHRINES,
} from '../exports/constants'
import { NON_SPIRIT, MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import { seasons2023, seasons2024, seasons2025 } from './seasons'
import { Link } from 'react-router-dom'
import {
  SEASON19,
  SEASON21,
  SEASON22,
  SEASON24,
  SEASON29,
} from '../exports/seasonIcons'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const youtube_embed = 'https://www.youtube.com/embed/'

export const aviaryData = [
  {
    label: 'Info',
    value: 'info',
    desc: (
      <div className="">
        <Typography className="antialiased font-sans inline-flex ">
          Narito ang Seasons of:
          <Link to="/seasons/2023/season-19/revival" className="inline-flex">
            <div className="">
              <LazyLoadImage src={SEASON19} style={{ width: 25 }} />
            </div>
            &nbsp;Revival
          </Link>
          ,&nbsp;
          <Link to="/seasons/2024/season-21/nesting" className="inline-flex">
            <div className="">
              <LazyLoadImage src={SEASON21} style={{ width: 25 }} />
            </div>
            &nbsp;Nesting
          </Link>
          ,&nbsp;
          <Link to="/seasons/2024/season-22/duets" className="inline-flex">
            <div className="">
              <LazyLoadImage src={SEASON22} style={{ width: 25 }} />
            </div>
            &nbsp;Duets
          </Link>
          ,&nbsp;
          <Link to="/seasons/2025/season-24/radiance" className="inline-flex">
            <div className="">
              <LazyLoadImage src={SEASON24} style={{ width: 25 }} />
            </div>
            &nbsp;Radiance
          </Link>
          ,&nbsp;
          <Link to="/seasons/2025/season-24/radiance" className="inline-flex">
            <div className="">
              <LazyLoadImage src={SEASON29} style={{ width: 25 }} />
            </div>
            &nbsp;Carnival
          </Link>
          .
        </Typography>
      </div>
    ),
    spirits: [],
  },
  {
    label: 'Collectibles',
    value: 'collectibles',
    desc: (
      <Typography className="antialiased font-sans">
        Nandito ang mga collectibles na dumaan noong nakaraang Seasonal Events
        na maari mong makuha kapag ito ay bumalik bilang TS. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {AVIARY_NUM_SEASON_SPIRIT}
        </span>{' '}
        collectibles makukuha dito.
      </Typography>
    ),
    spirits: [
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[0].spirit_id,
        spirit_name: seasons2023[3].season_spirits[0].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[0].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[0].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[0].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[0].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[1].spirit_id,
        spirit_name: seasons2023[3].season_spirits[1].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[1].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[1].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[1].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[1].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[2].spirit_id,
        spirit_name: seasons2023[3].season_spirits[2].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[2].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[2].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[2].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[2].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[3].spirit_id,
        spirit_name: seasons2023[3].season_spirits[3].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[3].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[3].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[3].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[3].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[0].spirit_id,
        spirit_name: seasons2024[1].season_spirits[0].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[0].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[0].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[0].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[0].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[1].spirit_id,
        spirit_name: seasons2024[1].season_spirits[1].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[1].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[1].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[1].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[1].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[2].spirit_id,
        spirit_name: seasons2024[1].season_spirits[2].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[2].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[2].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[2].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[2].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[3].spirit_id,
        spirit_name: seasons2024[1].season_spirits[3].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[3].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[3].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[3].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[3].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[0].spirit_id,
        spirit_name: seasons2024[2].season_spirits[0].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[0].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[0].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[0].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[0].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[1].spirit_id,
        spirit_name: seasons2024[2].season_spirits[1].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[1].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[1].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[1].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[1].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[2].spirit_id,
        spirit_name: seasons2024[2].season_spirits[2].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[2].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[2].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[2].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[2].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[3].spirit_id,
        spirit_name: seasons2024[2].season_spirits[3].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[3].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[3].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[3].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[3].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[4].spirit_id,
        spirit_name: seasons2024[2].season_spirits[4].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[4].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[4].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[4].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[4].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[4].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[4].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[4].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[4].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[4].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[4].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[4].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2025[0].season_spirits[0].spirit_id,
        spirit_name: seasons2025[0].season_spirits[0].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[0].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[0].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[0].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[0].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        spirit_id: seasons2025[0].season_spirits[1].spirit_id,
        spirit_name: seasons2025[0].season_spirits[1].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[1].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[1].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[1].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[1].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        spirit_id: seasons2025[0].season_spirits[2].spirit_id,
        spirit_name: seasons2025[0].season_spirits[2].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[2].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[2].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[2].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[2].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        id: 18,
        spirit_id: 'aviary18',
        season_id: 29,
        spirit_type: 'seasonal',
        season: 'Season 29 - Season of Carnival',
        spirit_category: 'emote',
        spirit_relive_type: 'quest-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Carnival Juggler',
        spirit_img_url: 'PROVOKING_PERFORMER',
        spirit_image: 'FOREST_SEASON_SPIRIT_9',
        icon_route: SEASON29,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: 'PERFORMER_ITEM_1',
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Pants',
            img: 'PERFORMER_ITEM_2',
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Accessory',
            img: 'PROVOKING_PERFORMER',
            currency: 'Candles',
            price: 13,
          },
          {
            label: 'Emote',
            img: 'PROVOKING_PERFORMER',
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 104,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          // {
          //   visit_date: 'Mar 12, 2020',
          //   visitNo: 4,
          // },
        ],
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo bago sa batong tulay.',
          'At sa iyong kaliwa ay nasa bunganga ng tunnel ang spirit na ito.',
        ],
      },
      {
        id: 19,
        spirit_id: 'aviary18',
        season_id: 29,
        spirit_type: 'seasonal',
        season: 'Season 29 - Season of Carnival',
        spirit_category: 'emote',
        spirit_relive_type: 'quest-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Carnival Puzzle Director',
        spirit_img_url: 'PROVOKING_PERFORMER',
        spirit_image: 'FOREST_SEASON_SPIRIT_9',
        icon_route: SEASON29,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: 'PERFORMER_ITEM_1',
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Hair Accessory',
            img: 'PERFORMER_ITEM_2',
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Pants',
            img: 'PROVOKING_PERFORMER',
            currency: 'Candles',
            price: 13,
          },
          {
            label: 'Emote',
            img: 'PROVOKING_PERFORMER',
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 104,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          // {
          //   visit_date: 'Mar 12, 2020',
          //   visitNo: 4,
          // },
        ],
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo bago sa batong tulay.',
          'At sa iyong kaliwa ay nasa bunganga ng tunnel ang spirit na ito.',
        ],
      },
      {
        id: 20,
        spirit_id: 'aviary18',
        season_id: 29,
        spirit_type: 'seasonal',
        season: 'Season 29 - Season of Carnival',
        spirit_category: 'emote',
        spirit_relive_type: 'quest-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Carnival Stunt Actor',
        spirit_img_url: 'PROVOKING_PERFORMER',
        spirit_image: 'FOREST_SEASON_SPIRIT_9',
        icon_route: SEASON29,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: 'PERFORMER_ITEM_1',
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Hair Accessory',
            img: 'PERFORMER_ITEM_2',
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Pants',
            img: 'PROVOKING_PERFORMER',
            currency: 'Candles',
            price: 13,
          },
          {
            label: 'Emote',
            img: 'PROVOKING_PERFORMER',
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 104,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          // {
          //   visit_date: 'Mar 12, 2020',
          //   visitNo: 4,
          // },
        ],
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          'Pasok ka Pangatlong Mapa - Hidden Forest, lumipad ka paibaba sa mga kaulapan hanggang sa umabot ka sa gate.',
          'Pagkabukas, dumako ka sa sunod na gate, at sindihan mo ang lumabas na fire icon',
          'Pagkabukas, lumipad ka patungo bago sa batong tulay.',
          'At sa iyong kaliwa ay nasa bunganga ng tunnel ang spirit na ito.',
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
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {AVIARY_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Hidden Forest.
      </Typography>
    ),
    winged_lights: [],
  },
  {
    label: 'Map Shrines',
    value: 'map_shrines',
    desc: (
      <Typography className="antialiased font-sans">
        Ang Map Shrines ay nagsisilbing gabay upang magtukoy kung ilan at saan
        pa ang kailangan mong kunin na winged lights sa loob ng mapa. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {AVIARY_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Hidden Forest.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: AV_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Aviary Village, ang nasa gitnang portal sa Old Home.`,
          `Or kung nasa Aviary Village ka na,`,
          `Pagkapasok sa portal, dumako sa dulo ng village at malapit sa wardrobe, makikita ang map shrine`,
        ],
      },
    ],
  },
]
