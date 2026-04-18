import { Typography } from '@material-tailwind/react'
import { AV_MS1, AV_MS2 } from '../exports/aviaryMSImgUrl'
import {
  AVIARY_NUM_SEASON_SPIRIT,
  AVIARY_NUM_REG_SPIRIT,
  AVIARY_NUM_WL,
  AVIARY_NUM_MAP_SHRINES,
} from '../exports/constants'
import { NON_SPIRIT, MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import { seasons2023, seasons2024, seasons2025, seasons2026 } from './seasons'
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
        spirit_id: seasons2026[1].season_spirits[0].spirit_id,
        spirit_name: seasons2026[1].season_spirits[0].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[0].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[0].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[0].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[0].spirit_direction,
        icon_route: seasons2026[1].icon_route,
      },
      {
        spirit_id: seasons2026[1].season_spirits[1].spirit_id,
        spirit_name: seasons2026[1].season_spirits[1].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[1].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[1].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[1].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[1].spirit_direction,
        icon_route: seasons2026[1].icon_route,
      },
      {
        spirit_id: seasons2026[1].season_spirits[2].spirit_id,
        spirit_name: seasons2026[1].season_spirits[2].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[2].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[2].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[2].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[2].spirit_direction,
        icon_route: seasons2026[1].icon_route,
      },
      {
        spirit_id: seasons2026[1].season_spirits[3].spirit_id,
        spirit_name: seasons2026[1].season_spirits[3].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[3].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[3].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[3].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[3].spirit_direction,
        icon_route: seasons2026[1].icon_route,
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
    winged_lights: [
      {
        id: seasons2026[1].winged_lights[0].id,
        wl_label: seasons2026[1].winged_lights[0].wl_label,
        wl_group: seasons2026[1].winged_lights[0].wl_group,
        wl_season_group: seasons2026[1].winged_lights[0].wl_season_group,
        wl_url: seasons2026[1].winged_lights[0].wl_url,
        wl_location: seasons2026[1].winged_lights[0].wl_location,
      },
      {
        id: seasons2026[1].winged_lights[1].id,
        wl_label: seasons2026[1].winged_lights[1].wl_label,
        wl_group: seasons2026[1].winged_lights[1].wl_group,
        wl_season_group: seasons2026[1].winged_lights[1].wl_season_group,
        wl_url: seasons2026[1].winged_lights[1].wl_url,
        wl_location: seasons2026[1].winged_lights[1].wl_location,
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
      {
        id: 2,
        shrine_group: 'shrine-season-29',
        shrine_label: 'Map Shrine 2',
        shrine_url: AV_MS2 ?? MAP_SHRINE,
        shrine_location: [
          'Sa Aviary Village, dumako sa mga portals, at sa kanan nito ay may bangka papuntang Wandering Carnival Boat',
          'Pagkadating, umakyat sa barko ng Wandering Carnival at sa likod ng Athletic Dancer makikita ang map shrine.',
        ],
      },
    ],
  },
]
