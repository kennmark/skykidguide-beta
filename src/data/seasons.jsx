import {
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON5,
  SEASON6,
  SEASON7,
  SEASON8,
  SEASON9,
  SEASON10,
  SEASON11,
  SEASON12,
  SEASON13,
  SEASON14,
  SEASON15,
  SEASON16,
  SEASON17,
  SEASON18,
  SEASON19,
  SEASON20,
  SEASON21,
  SEASON22,
  SEASON23,
} from '../exports/seasonIcons'

import {
  GW_WL15,
  GW_WL16,
  GW_WL17,
  GW_WL18,
} from '../exports/wastelandWLImgUrl'
import {
  PR_WL17,
  PR_WL18,
  PR_WL19,
  PR_WL20,
  PR_WL21,
  PR_WL22,
  PR_WL23,
  PR_WL24,
  PR_WL14,
  PR_WL15,
  PR_WL16,
} from '../exports/prairieWLImgUrl'
import { ID_WL6, ID_WL7, ID_WL8, ID_WL9 } from '../exports/isleWLImgUrl'
import {
  VT_WL12,
  VT_WL13,
  VT_WL15,
  VT_WL16,
  VT_WL17,
  VT_WL14,
} from '../exports/valleyWLImgUrl'
import { VT_MS7, VT_MS8, VT_MS9, VT_MS10 } from '../exports/valleyMSImgUrl'
import { HF_WL17, HF_WL18, HF_WL19 } from '../exports/forestImgWLUrl'
import {
  VK_WL9,
  VK_WL10,
  VK_WL11,
  VK_WL12,
  VK_WL13,
  VK_WL14,
  VK_WL15,
  VK_WL16,
} from '../exports/vaultWLImgUrl'
import {
  VOID_WL1,
  VOID_WL2,
  VOID_WL3,
  VOID_WL4,
  VOID_WL5,
  VOID_WL6,
} from '../exports/voidWLImgUrl'
import { VK_MS2, VK_MS4, VK_MS10, VK_MS11 } from '../exports/vaultMSImgUrl'
import { GW_MS7, GW_MS8 } from '../exports/wastelandMSImgUrl'
import { DP_MS7, DP_MS9 } from '../exports/prairieMSImgUrl'
import { HF_MS9, HF_MS10 } from '../exports/forestMSImgUrl'
import { AV_MS1 } from '../exports/aviaryMSImgUrl'
import {
  ID_MS5,
  ID_MS6,
  ID_MS7,
  ID_MS8,
  ID_MS9,
  ID_MS2,
} from '../exports/isleMSImgUrl'
import { isleOfDawn } from './isleOfDawnData'
import { prairie } from './prairieData'
import { hiddenForest } from './forestData'
import { valley } from './valleyData'
import { wasteland } from './wastelandData'
import { vault } from './vaultData'
import { NON_SPIRIT, MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  DRAGON_ITEM_1,
  DRAGON_ITEM_2,
  DRAGON_ITEM_3,
  PLANT_ITEM_1,
  PLANT_ITEM_2,
  PLANT_ITEM_3,
  MANTA_ITEM_1,
  MANTA_ITEM_2,
  MANTA_ITEM_3,
  JELLYFISH_ITEM_1,
  JELLYFISH_ITEM_2,
  JELLYFISH_ITEM_3,
} from '../exports/shatteringCollectibles'
import {
  VDO_ITEM_1,
  VDO_ITEM_2,
  VDO_ITEM_3,
  VDO_ITEM_4,
  MLV_ITEM_1,
  MLV_ITEM_2,
  MLV_ITEM_3,
  MLV_ITEM_4,
  EAR_ITEM_1,
  EAR_ITEM_2,
  EAR_ITEM_3,
  EAR_ITEM_4,
  RFH_ITEM_1,
  RFH_ITEM_2,
  RFH_ITEM_3,
  RFH_ITEM_4,
  NA_ITEM_1,
  NA_ITEM_2,
  NA_ITEM_3,
  NA_ITEM_4,
  NA_ITEM_5,
  NL_ITEM_1,
  NL_ITEM_2,
  NL_ITEM_3,
  NL_ITEM_4,
  NL_ITEM_5,
  NS_ITEM_1,
  NS_ITEM_2,
  NS_ITEM_3,
  NS_ITEM_4,
  NS_ITEM_5,
  NN_ITEM_1,
  NN_ITEM_2,
  NN_ITEM_3,
  NN_ITEM_4,
  NN_ITEM_5,
  PB_ITEM_1,
  PB_ITEM_2,
  PB_ITEM_3,
  PB_ITEM_4,
  PB_ITEM_5,
  CB_ITEM_1,
  CB_ITEM_2,
  CB_ITEM_3,
  CB_ITEM_4,
  ML_ITEM_1,
  ML_ITEM_2,
  ML_ITEM_3,
  PF_ITEM_1,
  PF_ITEM_2,
  PF_ITEM_3,
  PF_ITEM_4,
  CF_ITEM_1,
  CF_ITEM_2,
  CF_ITEM_3,
  CF_ITEM_4,
} from '../exports/aviaryCollectibles'
const youtube_embed = 'https://www.youtube.com/embed/'
// console.log(prairie[1].spirits[0])

export const seasons2019 = [
  {
    id: 1,
    name: 'Season of Gratitude',
    time_duration: 'July 19 - September 2, 2019',
    spirit_num: 6,
    map_shrine: 0,
    wl_num: 0,
    icon_route: SEASON1,
    page_route: 'seasons/2019/season-1/gratitude',
    quick_info: `Ito ang unang season na ginanap. Ang mga
        Spirits ay magkakahiwalay at makikita sa 6 na mapa.`,

    season_spirits: [
      //SASSY_DRIFTER
      {
        spirit_id: 'gratitude-spirit-1',
        spirit_name: isleOfDawn[1].spirits[0].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[0].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[0].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[0].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[0].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[0].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[0].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[0].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[0].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[0].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[0].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[0].spirit_direction,
      },
      //STRETCHING_GURU
      {
        spirit_id: 'gratitude-spirit-2',
        spirit_name: prairie[1].spirits[0].spirit_name,
        spirit_img_url: prairie[1].spirits[0].spirit_img_url,
        spirit_category: prairie[1].spirits[0].spirit_category,
        spirit_relive_type: prairie[1].spirits[0].spirit_relive_type,
        difficulty_level: prairie[1].spirits[0].difficulty_level,
        difficulty_types: prairie[1].spirits[0].difficulty_types,
        spirit_image: prairie[1].spirits[0].spirit_image,
        spirit_collectibles: prairie[1].spirits[0].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[0].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[0].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[0].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[0].spirit_direction,
      },
      //PROVOKING_PERFORMER
      {
        spirit_id: 'gratitude-spirit-3',
        spirit_name: hiddenForest[1].spirits[0].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[0].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[0].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[0].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[0].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[0].difficulty_types,
        spirit_image: hiddenForest[1].spirits[0].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[0].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[0].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[0].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[0].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[0].spirit_direction,
      },
      //LEAPING_DANCER
      {
        spirit_id: 'gratitude-spirit-4',
        spirit_name: valley[1].spirits[0].spirit_name,
        spirit_img_url: valley[1].spirits[0].spirit_img_url,
        spirit_category: valley[1].spirits[0].spirit_category,
        spirit_relive_type: valley[1].spirits[0].spirit_relive_type,
        difficulty_level: valley[1].spirits[0].difficulty_level,
        difficulty_types: valley[1].spirits[0].difficulty_types,
        spirit_image: valley[1].spirits[0].spirit_image,
        spirit_collectibles: valley[1].spirits[0].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[0].spirit_tree_cost,
        number_of_visits: valley[1].spirits[0].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[0].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[0].spirit_direction,
      },
      //SALUTING_PROTECTOR
      {
        spirit_id: 'gratitude-spirit-5',
        spirit_name: wasteland[1].spirits[0].spirit_name,
        spirit_img_url: wasteland[1].spirits[0].spirit_img_url,
        spirit_category: wasteland[1].spirits[0].spirit_category,
        spirit_relive_type: wasteland[1].spirits[0].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[0].difficulty_level,
        difficulty_types: wasteland[1].spirits[0].difficulty_types,
        spirit_image: wasteland[1].spirits[0].spirit_image,
        spirit_collectibles: wasteland[1].spirits[0].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[0].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[0].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[0].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[0].spirit_direction,
      },
      //GREETING_SHAMAN
      {
        spirit_id: 'gratitude-spirit-6',
        spirit_name: vault[1].spirits[1].spirit_name,
        spirit_img_url: vault[1].spirits[1].spirit_img_url,
        spirit_category: vault[1].spirits[1].spirit_category,
        spirit_relive_type: vault[1].spirits[1].spirit_relive_type,
        difficulty_level: vault[1].spirits[1].difficulty_level,
        difficulty_types: vault[1].spirits[1].difficulty_types,
        spirit_image: vault[1].spirits[1].spirit_image,
        spirit_collectibles: vault[1].spirits[1].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[1].spirit_tree_cost,
        number_of_visits: vault[1].spirits[1].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[1].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[1].spirit_direction,
      },
    ],
  },
  {
    id: 2,
    name: 'Season of Lightseekers',
    time_duration: 'September 3 - November 10, 2019',
    spirit_num: 6,
    map_shrine: 0,
    icon_route: SEASON2,
    page_route: 'seasons/2019/season-2/lightseekers',
    quick_info: `Ito ang season na sumunod sa Season of
    Gratitude. Ang mga spirit ng season na ito ay magkakahiwalay
    sa buong kingdom ng Sky.`,
    season_spirits: [
      //PIGGYBACK_LIGHTSEEKER
      {
        spirit_id: 'lightseeker-spirit-1',
        spirit_name: isleOfDawn[1].spirits[1].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[1].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[1].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[1].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[1].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[1].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[1].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[1].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[1].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[1].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[1].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[1].spirit_direction,
      },
      //DOUBLE_FIVE_LIGHT_CATCHER
      {
        spirit_id: 'lightseeker-spirit-2',
        spirit_name: prairie[1].spirits[1].spirit_name,
        spirit_img_url: prairie[1].spirits[1].spirit_img_url,
        spirit_category: prairie[1].spirits[1].spirit_category,
        spirit_relive_type: prairie[1].spirits[1].spirit_relive_type,
        difficulty_level: prairie[1].spirits[1].difficulty_level,
        difficulty_types: prairie[1].spirits[1].difficulty_types,
        spirit_image: prairie[1].spirits[1].spirit_image,
        spirit_collectibles: prairie[1].spirits[1].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[1].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[1].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[1].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[1].spirit_direction,
      },
      //LAIDBACK_PIONEER
      {
        spirit_id: 'lightseeker-spirit-3',
        spirit_name: hiddenForest[1].spirits[1].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[1].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[1].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[1].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[1].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[1].difficulty_types,
        spirit_image: hiddenForest[1].spirits[1].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[1].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[1].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[1].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[1].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[1].spirit_direction,
      },
      //TWIRLING_CHAMPION
      {
        spirit_id: 'lightseeker-spirit-4',
        spirit_name: valley[1].spirits[1].spirit_name,
        spirit_img_url: valley[1].spirits[1].spirit_img_url,
        spirit_category: valley[1].spirits[1].spirit_category,
        spirit_relive_type: valley[1].spirits[1].spirit_relive_type,
        difficulty_level: valley[1].spirits[1].difficulty_level,
        difficulty_types: valley[1].spirits[1].difficulty_types,
        spirit_image: valley[1].spirits[1].spirit_image,
        spirit_collectibles: valley[1].spirits[1].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[1].spirit_tree_cost,
        number_of_visits: valley[1].spirits[1].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[1].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[1].spirit_direction,
      },
      //CRAB_WHISPERER
      {
        spirit_id: 'lightseeker-spirit-5',
        spirit_name: wasteland[1].spirits[3].spirit_name,
        spirit_img_url: wasteland[1].spirits[3].spirit_img_url,
        spirit_category: wasteland[1].spirits[3].spirit_category,
        spirit_relive_type: wasteland[1].spirits[3].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[3].difficulty_level,
        difficulty_types: wasteland[1].spirits[3].difficulty_types,
        spirit_image: wasteland[1].spirits[3].spirit_image,
        spirit_collectibles: wasteland[1].spirits[3].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[3].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[3].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[3].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[3].spirit_direction,
      },
      //SHUSHING_LIGHTSCHOLAR
      {
        spirit_id: 'lightseeker-spirit-6',
        spirit_name: vault[1].spirits[2].spirit_name,
        spirit_img_url: vault[1].spirits[2].spirit_img_url,
        spirit_category: vault[1].spirits[2].spirit_category,
        spirit_relive_type: vault[1].spirits[2].spirit_relive_type,
        difficulty_level: vault[1].spirits[2].difficulty_level,
        difficulty_types: vault[1].spirits[2].difficulty_types,
        spirit_image: vault[1].spirits[2].spirit_image,
        spirit_collectibles: vault[1].spirits[2].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[2].spirit_tree_cost,
        number_of_visits: vault[1].spirits[2].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[2].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[2].spirit_direction,
      },
    ],
  },
  {
    id: 3,
    name: 'Season of Belonging',
    time_duration: 'November 18, 2019 - January 12, 2020',
    spirit_num: 6,
    map_shrine: 0,
    icon_route: SEASON3,
    page_route: 'seasons/2019/season-3/belonging',
    quick_info: `A family of six Spirits will make 
    their way to the kingdom of Sky! The Spirits have 
    been scattered across the Kingdoms of Sky, but now they 
    need your help bringing the family back together.`,
    season_spirits: [
      //BOOGIE_KID
      {
        spirit_id: 'belonging-spirit-1',
        spirit_name: isleOfDawn[1].spirits[2].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[2].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[2].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[2].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[2].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[2].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[2].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[2].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[2].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[2].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[2].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[2].spirit_direction,
      },
      //CONFETTI_COUSIN
      {
        spirit_id: 'belonging-spirit-2',
        spirit_name: prairie[1].spirits[2].spirit_name,
        spirit_img_url: prairie[1].spirits[2].spirit_img_url,
        spirit_category: prairie[1].spirits[2].spirit_category,
        spirit_relive_type: prairie[1].spirits[2].spirit_relive_type,
        difficulty_level: prairie[1].spirits[2].difficulty_level,
        difficulty_types: prairie[1].spirits[2].difficulty_types,
        spirit_image: prairie[1].spirits[2].spirit_image,
        spirit_collectibles: prairie[1].spirits[2].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[2].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[2].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[2].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[2].spirit_direction,
      },
      //HAIRTOUSLE_TEEN
      {
        spirit_id: 'belonging-spirit-3',
        spirit_name: hiddenForest[1].spirits[2].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[2].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[2].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[2].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[2].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[2].difficulty_types,
        spirit_image: hiddenForest[1].spirits[2].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[2].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[2].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[2].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[2].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[2].spirit_direction,
      },
      //SPARKLE_PARENT
      {
        spirit_id: 'belonging-spirit-4',
        spirit_name: valley[1].spirits[2].spirit_name,
        spirit_img_url: valley[1].spirits[2].spirit_img_url,
        spirit_category: valley[1].spirits[2].spirit_category,
        spirit_relive_type: valley[1].spirits[2].spirit_relive_type,
        difficulty_level: valley[1].spirits[2].difficulty_level,
        difficulty_types: valley[1].spirits[2].difficulty_types,
        spirit_image: valley[1].spirits[2].spirit_image,
        spirit_collectibles: valley[1].spirits[2].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[2].spirit_tree_cost,
        number_of_visits: valley[1].spirits[2].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[2].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[2].spirit_direction,
      },
      //PLEAFUL_PARENT
      {
        spirit_id: 'belonging-spirit-5',
        spirit_name: wasteland[1].spirits[1].spirit_name,
        spirit_img_url: wasteland[1].spirits[1].spirit_img_url,
        spirit_category: wasteland[1].spirits[1].spirit_category,
        spirit_relive_type: wasteland[1].spirits[1].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[1].difficulty_level,
        difficulty_types: wasteland[1].spirits[1].difficulty_types,
        spirit_image: wasteland[1].spirits[1].spirit_image,
        spirit_collectibles: wasteland[1].spirits[1].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[1].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[1].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[1].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[1].spirit_direction,
      },
      //WISE_GRANDPARENT
      {
        spirit_id: 'belonging-spirit-6',
        spirit_name: vault[1].spirits[3].spirit_name,
        spirit_img_url: vault[1].spirits[3].spirit_img_url,
        spirit_category: vault[1].spirits[3].spirit_category,
        spirit_relive_type: vault[1].spirits[3].spirit_relive_type,
        difficulty_level: vault[1].spirits[3].difficulty_level,
        difficulty_types: vault[1].spirits[3].difficulty_types,
        spirit_image: vault[1].spirits[3].spirit_image,
        spirit_collectibles: vault[1].spirits[3].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[3].spirit_tree_cost,
        number_of_visits: vault[1].spirits[3].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[3].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[3].spirit_direction,
      },
    ],
  },
]

export const seasons2020 = [
  {
    id: 4,
    name: 'Season of Rhythm',
    time_duration: 'January 24 - April 5, 2020',
    spirit_num: 6,
    map_shrine: 0,
    icon_route: SEASON4,
    page_route: 'seasons/2020/season-4/rhythm',
    quick_info: `This winter-themed season follows 
    a troupe of traveling performers who have been 
    scattered across the kingdoms of Sky and need 
    your help to get the show started.`,
    season_spirits: [
      //TROUPE_GREETER
      {
        spirit_id: 'rhythm-spirit-1',
        spirit_name: isleOfDawn[1].spirits[3].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[3].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[3].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[3].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[3].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[3].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[3].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[3].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[3].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[3].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[3].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[3].spirit_direction,
      },
      //FESTIVAL_SPIN_DANCER
      {
        spirit_id: 'rhythm-spirit-2',
        spirit_name: prairie[1].spirits[3].spirit_name,
        spirit_img_url: prairie[1].spirits[3].spirit_img_url,
        spirit_category: prairie[1].spirits[3].spirit_category,
        spirit_relive_type: prairie[1].spirits[3].spirit_relive_type,
        difficulty_level: prairie[1].spirits[3].difficulty_level,
        difficulty_types: prairie[1].spirits[3].difficulty_types,
        spirit_image: prairie[1].spirits[3].spirit_image,
        spirit_collectibles: prairie[1].spirits[3].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[3].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[3].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[3].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[3].spirit_direction,
      },
      //ADMIRING_ACTOR
      {
        spirit_id: 'rhythm-spirit-3',
        spirit_name: hiddenForest[1].spirits[3].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[3].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[3].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[3].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[3].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[3].difficulty_types,
        spirit_image: hiddenForest[1].spirits[3].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[3].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[3].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[3].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[3].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[3].spirit_direction,
      },
      //TROUPE_JUGGLER
      {
        spirit_id: 'rhythm-spirit-4',
        spirit_name: valley[1].spirits[3].spirit_name,
        spirit_img_url: valley[1].spirits[3].spirit_img_url,
        spirit_category: valley[1].spirits[3].spirit_category,
        spirit_relive_type: valley[1].spirits[3].spirit_relive_type,
        difficulty_level: valley[1].spirits[3].difficulty_level,
        difficulty_types: valley[1].spirits[3].difficulty_types,
        spirit_image: valley[1].spirits[3].spirit_image,
        spirit_collectibles: valley[1].spirits[3].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[3].spirit_tree_cost,
        number_of_visits: valley[1].spirits[3].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[3].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[3].spirit_direction,
      },
      //RESPECTFUL_PIANIST
      {
        spirit_id: 'rhythm-spirit-5',
        spirit_name: wasteland[1].spirits[2].spirit_name,
        spirit_img_url: wasteland[1].spirits[2].spirit_img_url,
        spirit_category: wasteland[1].spirits[2].spirit_category,
        spirit_relive_type: wasteland[1].spirits[2].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[2].difficulty_level,
        difficulty_types: wasteland[1].spirits[2].difficulty_types,
        spirit_image: wasteland[1].spirits[2].spirit_image,
        spirit_collectibles: wasteland[1].spirits[2].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[2].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[2].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[2].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[2].spirit_direction,
      },
      //THOUGHTFUL_DIRECTOR
      {
        spirit_id: 'rhythm-spirit-6',
        spirit_name: vault[1].spirits[0].spirit_name,
        spirit_img_url: vault[1].spirits[0].spirit_img_url,
        spirit_category: vault[1].spirits[0].spirit_category,
        spirit_relive_type: vault[1].spirits[0].spirit_relive_type,
        difficulty_level: vault[1].spirits[0].difficulty_level,
        difficulty_types: vault[1].spirits[0].difficulty_types,
        spirit_image: vault[1].spirits[0].spirit_image,
        spirit_collectibles: vault[1].spirits[0].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[0].spirit_tree_cost,
        number_of_visits: vault[1].spirits[0].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[0].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[0].spirit_direction,
      },
    ],
  },
  {
    id: 5,
    name: 'Season of Enchantment',
    time_duration: 'April 20 - June 21, 2020',
    spirit_num: 6,
    wl_num: 2,
    map_shrine: 1,
    icon_route: SEASON5,
    page_route: 'seasons/2020/season-5/enchantment',
    quick_info: `A group of Spirits started their voyage towards prosperity. Take the boat and set sail. Follow their path, a new land awaits…`,
    season_spirits: [
      //SNOOZING_CARPENTER
      {
        spirit_id: 'enchantment-spirit-1',
        spirit_name: wasteland[1].spirits[4].spirit_name,
        spirit_img_url: wasteland[1].spirits[4].spirit_img_url,
        spirit_category: wasteland[1].spirits[4].spirit_category,
        spirit_relive_type: wasteland[1].spirits[4].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[4].difficulty_level,
        difficulty_types: wasteland[1].spirits[4].difficulty_types,
        spirit_image: wasteland[1].spirits[4].spirit_image,
        spirit_collectibles: wasteland[1].spirits[4].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[4].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[4].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[4].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[4].spirit_direction,
      },
      //NODDING_MURALIST
      {
        spirit_id: 'enchantment-spirit-2',
        spirit_name: wasteland[1].spirits[5].spirit_name,
        spirit_img_url: wasteland[1].spirits[5].spirit_img_url,
        spirit_category: wasteland[1].spirits[5].spirit_category,
        spirit_relive_type: wasteland[1].spirits[5].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[5].difficulty_level,
        difficulty_types: wasteland[1].spirits[5].difficulty_types,
        spirit_image: wasteland[1].spirits[5].spirit_image,
        spirit_collectibles: wasteland[1].spirits[5].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[5].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[5].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[5].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[5].spirit_direction,
      },
      //CRAB_WALKER
      {
        spirit_id: 'enchantment-spirit-3',
        spirit_name: wasteland[1].spirits[6].spirit_name,
        spirit_img_url: wasteland[1].spirits[6].spirit_img_url,
        spirit_category: wasteland[1].spirits[6].spirit_category,
        spirit_relive_type: wasteland[1].spirits[6].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[6].difficulty_level,
        difficulty_types: wasteland[1].spirits[6].difficulty_types,
        spirit_image: wasteland[1].spirits[6].spirit_image,
        spirit_collectibles: wasteland[1].spirits[6].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[6].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[6].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[6].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[6].spirit_direction,
      },
      //PLAYFIGHTING_HERBALIST
      {
        spirit_id: 'enchantment-spirit-4',
        spirit_name: wasteland[1].spirits[7].spirit_name,
        spirit_img_url: wasteland[1].spirits[7].spirit_img_url,
        spirit_category: wasteland[1].spirits[7].spirit_category,
        spirit_relive_type: wasteland[1].spirits[7].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[7].difficulty_level,
        difficulty_types: wasteland[1].spirits[7].difficulty_types,
        spirit_image: wasteland[1].spirits[7].spirit_image,
        spirit_collectibles: wasteland[1].spirits[7].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[7].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[7].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[7].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[7].spirit_direction,
      },
      //SCARECROW_FARMER
      {
        spirit_id: 'enchantment-spirit-5',
        spirit_name: wasteland[1].spirits[8].spirit_name,
        spirit_img_url: wasteland[1].spirits[8].spirit_img_url,
        spirit_category: wasteland[1].spirits[8].spirit_category,
        spirit_relive_type: wasteland[1].spirits[8].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[8].difficulty_level,
        difficulty_types: wasteland[1].spirits[8].difficulty_types,
        spirit_image: wasteland[1].spirits[8].spirit_image,
        spirit_collectibles: wasteland[1].spirits[8].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[8].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[8].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[8].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[8].spirit_direction,
      },
      //INDIFFERENT_ALCHEMIST
      {
        spirit_id: 'enchantment-spirit-6',
        spirit_name: wasteland[1].spirits[9].spirit_name,
        spirit_img_url: wasteland[1].spirits[9].spirit_img_url,
        spirit_category: wasteland[1].spirits[9].spirit_category,
        spirit_relive_type: wasteland[1].spirits[9].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[9].difficulty_level,
        difficulty_types: wasteland[1].spirits[9].difficulty_types,
        spirit_image: wasteland[1].spirits[9].spirit_image,
        spirit_collectibles: wasteland[1].spirits[9].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[9].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[9].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[9].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[9].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'Wasteland-WL15',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Golden Wasteland at Lumipad sa mga kaulapan pababa,`,
          `Pagkalapag, lumipad gawing kanan patungo sa bangka, at umupo ka.`,
          `Pagdating sa Forgotten Ark, lumipad hanggang makita ang Ark at sa unahan ang winged light na ito.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'Wasteland-WL16',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Golden Wasteland at Lumipad sa mga kaulapan pababa,`,
          `Pagkalapag, lumipad gawing kanan patungo sa bangka, at umupo ka.`,
          `Lumipad patungo sa dakong dulo na kapatagan at may lagusan na maliit sa bandang kaliwa,
        at pumasok ka at sa loob nito ang winged light.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 'seasonal_ms_1',
        shrine_label: 'Map Shrine 8',
        shrine_url: GW_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 5 | Golden Wasteland, magtungo sa dulo ng lagusan at tumalon.`,
          `Pagkalapag, ay lumipad ka gawing kanan at hanapin ang bangka sa dalampasigan at sumakay dito`,
          `Pagkarating sa Forgotten Ark, ay lumipad patungo sa malaking barko at nasa loob nito sa gitna
          ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Season of Sanctuary',
    time_duration: 'July 13 - September 21, 2020',
    spirit_num: 6,
    wl_num: 8,
    ms_num: 1,
    icon_route: SEASON6,
    page_route: 'seasons/2020/season-6/sanctuary',
    quick_info: `Spirits are seeking an island retreat in Daylight Prairie.
    Join them for some relaxation and sightseeing. This special Season looks to bring 
    a retreat-like experience for everyone playing and staying safe at home.`,
    season_spirits: [
      //TIMID_BOOKWORM
      {
        spirit_id: 'sanctuary-spirit-1',
        spirit_name: prairie[1].spirits[4].spirit_name,
        spirit_img_url: prairie[1].spirits[4].spirit_img_url,
        spirit_category: prairie[1].spirits[4].spirit_category,
        spirit_relive_type: prairie[1].spirits[4].spirit_relive_type,
        difficulty_level: prairie[1].spirits[4].difficulty_level,
        difficulty_types: prairie[1].spirits[4].difficulty_types,
        spirit_image: prairie[1].spirits[4].spirit_image,
        spirit_collectibles: prairie[1].spirits[4].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[4].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[4].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[4].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[4].spirit_direction,
      },
      //CHILL_SUNBATHER
      {
        spirit_id: 'sanctuary-spirit-2',
        spirit_name: prairie[1].spirits[5].spirit_name,
        spirit_img_url: prairie[1].spirits[5].spirit_img_url,
        spirit_category: prairie[1].spirits[5].spirit_category,
        spirit_relive_type: prairie[1].spirits[5].spirit_relive_type,
        difficulty_level: prairie[1].spirits[5].difficulty_level,
        difficulty_types: prairie[1].spirits[5].difficulty_types,
        spirit_image: prairie[1].spirits[5].spirit_image,
        spirit_collectibles: prairie[1].spirits[5].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[5].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[5].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[5].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[5].spirit_direction,
      },
      //RALLYING_THRILLSEEKER
      {
        spirit_id: 'sanctuary-spirit-3',
        spirit_name: prairie[1].spirits[6].spirit_name,
        spirit_img_url: prairie[1].spirits[6].spirit_img_url,
        spirit_category: prairie[1].spirits[6].spirit_category,
        spirit_relive_type: prairie[1].spirits[6].spirit_relive_type,
        difficulty_level: prairie[1].spirits[6].difficulty_level,
        difficulty_types: prairie[1].spirits[6].difficulty_types,
        spirit_image: prairie[1].spirits[6].spirit_image,
        spirit_collectibles: prairie[1].spirits[6].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[6].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[6].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[6].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[6].spirit_direction,
      },
      //GRATEFUL_SHELL_COLLECTOR
      {
        spirit_id: 'sanctuary-spirit-4',
        spirit_name: prairie[1].spirits[7].spirit_name,
        spirit_img_url: prairie[1].spirits[7].spirit_img_url,
        spirit_category: prairie[1].spirits[7].spirit_category,
        spirit_relive_type: prairie[1].spirits[7].spirit_relive_type,
        difficulty_level: prairie[1].spirits[7].difficulty_level,
        difficulty_types: prairie[1].spirits[7].difficulty_types,
        spirit_image: prairie[1].spirits[7].spirit_image,
        spirit_collectibles: prairie[1].spirits[7].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[7].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[7].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[7].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[7].spirit_direction,
      },
      //HIKING_GROUCH
      {
        spirit_id: 'sanctuary-spirit-5',
        spirit_name: prairie[1].spirits[8].spirit_name,
        spirit_img_url: prairie[1].spirits[8].spirit_img_url,
        spirit_category: prairie[1].spirits[8].spirit_category,
        spirit_relive_type: prairie[1].spirits[8].spirit_relive_type,
        difficulty_level: prairie[1].spirits[8].difficulty_level,
        difficulty_types: prairie[1].spirits[8].difficulty_types,
        spirit_image: prairie[1].spirits[8].spirit_image,
        spirit_collectibles: prairie[1].spirits[8].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[8].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[8].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[8].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[8].spirit_direction,
      },
      //JELLY_WHISPERER
      {
        spirit_id: 'sanctuary-spirit-6',
        spirit_name: prairie[1].spirits[9].spirit_name,
        spirit_img_url: prairie[1].spirits[9].spirit_img_url,
        spirit_category: prairie[1].spirits[9].spirit_category,
        spirit_relive_type: prairie[1].spirits[9].spirit_relive_type,
        difficulty_level: prairie[1].spirits[9].difficulty_level,
        difficulty_types: prairie[1].spirits[9].difficulty_types,
        spirit_image: prairie[1].spirits[9].spirit_image,
        spirit_collectibles: prairie[1].spirits[9].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[9].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[9].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[9].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[9].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'Prairie-WL17',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, makita mo ito agad sa malaking islang nakalutang.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'Prairie-WL18',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL18 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, sa tuktok ng malaking isla ay may maliit na lagusan.`,
        ],
      },
      {
        id: 'seasonal_wl_3',
        wl_label: 'Prairie-WL19',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL19 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, sa dakong kanan, makita ang tatlong maliliit na nakalutang na isla. Nasa kanan na isla.`,
        ],
      },
      {
        id: 'seasonal_wl_4',
        wl_label: 'Prairie-WL20',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL20 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, sa bandang likuran ay may mga kampana at sa bandang ibaba ay nakapwesto ang winged light na ito.`,
        ],
      },
      {
        id: 'seasonal_wl_5',
        wl_label: 'Prairie-WL21',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL21 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, sa likod ng malaking isla makikita ang jellyfish cave.`,
        ],
      },
      {
        id: 'seasonal_wl_5',
        wl_label: 'Prairie-WL22',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL22 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, lumipad pababa at makita ang malaking bunganga ng kweba nasa likod ng waterfall ito.`,
        ],
      },
      {
        id: 'seasonal_wl_6',
        wl_label: 'Prairie-WL23',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL23 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, lumipad pababa
          at makita ang malaking bunganga ng kweba pumasok at sa kaliwa ay may lagusan`,
          `Lumipad pataas at ito ay iyong makikita.`,
        ],
      },
      {
        id: 'seasonal_wl_7',
        wl_label: 'Prairie-WL24',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL24 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, lumipad pababa
        at makita ang malaking bunganga ng kweba pumasok at sa kanan ay may lagusan`,
          `Pumasok ka sa Crabs Area, lumipad pataas at may lagusan papasok, dito ang winged light.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 'seasonal_ms_1',
        shrine_label: 'Map Shrine 9',
        shrine_url: DP_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakanan at pumasok sa lagusan`,
          `Paglabas sa Bird's Nest, lumipad pababa hanggang sa lagusan na ulap.`,
          `Paglabas sa Sanctuary Islands, lumipad pababa patungo sa mga Bells, at malapit sa Quest Giver ng Sanctuary
          ay makita mo ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Season of Prophecy',
    time_duration: 'October 5 - December 13, 2020',
    spirit_num: 4,
    wl_num: 4,
    ms_num: 5,
    icon_route: SEASON7,
    page_route: 'seasons/2020/season-7/prophecy',
    quick_info: `The Season of Prophecy will take 
    adventurers on an origin story to expand the 
    lore behind the kingdom of Sky. Venture forth 
    into the eerie new Cave of Prophecies in Isle 
    of Dawn to begin your adventure`,
    season_spirits: [
      //PROPHET_OF_WATER
      {
        spirit_id: 'prophecy-spirit-1',
        spirit_name: isleOfDawn[1].spirits[4].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[4].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[4].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[4].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[4].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[4].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[4].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[4].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[4].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[4].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[4].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[4].spirit_direction,
      },
      //PROPHET_OF_EARTH
      {
        spirit_id: 'prophecy-spirit-2',
        spirit_name: isleOfDawn[1].spirits[5].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[5].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[5].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[5].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[5].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[5].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[5].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[5].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[5].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[5].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[5].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[5].spirit_direction,
      },
      //PROPHET_OF_AIR
      {
        spirit_id: 'prophecy-spirit-3',
        spirit_name: isleOfDawn[1].spirits[6].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[6].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[6].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[6].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[6].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[6].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[6].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[6].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[6].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[6].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[6].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[6].spirit_direction,
      },
      //PROPHET_OF_FIRE
      {
        spirit_id: 'prophecy-spirit-4',
        spirit_name: isleOfDawn[1].spirits[7].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[7].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[7].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[7].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[7].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[7].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[7].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[7].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[7].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[7].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[7].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[7].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'Isle-WL6',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Water Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'Isle-WL7',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Earth Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_3',
        wl_label: 'Isle-WL8',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Air Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_4',
        wl_label: 'Isle-WL9',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Fire Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 5,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 5',
        shrine_url: ID_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, tumalon ka pakaliwa sa ibaba lang mismo makikita ang map shrine.`,
        ],
      },
      {
        id: 6,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 6',
        shrine_url: ID_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Water Trial nasa gawing kanan ang map shrine.`,
        ],
      },
      {
        id: 7,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 7',
        shrine_url: ID_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Earth Trial, Pagdumating ka sa aakyat ng hagdaan, sa kanan nito ang map shrine.`,
        ],
      },
      {
        id: 8,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 8',
        shrine_url: ID_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Air Trial`,
        ],
      },
      {
        id: 9,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 9',
        shrine_url: ID_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Fire Trial, at bago pumasok sa 3rd floor nasa gawing kanan ng pintuan ang map shrine.`,
        ],
      },
    ],
  },
]

export const seasons2021 = [
  {
    id: 8,
    name: 'Season of Dreams',
    time_duration: 'January 4 - March 15, 2021',
    spirit_num: 4,
    wl_num: 5,
    ms_num: 3,
    icon_route: SEASON8,
    page_route: 'seasons/2021/season-8/dreams',
    quick_info: `The Season of Dreams took players 
    through the journey of a young spirit who dreams 
    of performing in the Valley of Triumph’s Coliseum. 
    Similar to the previous 
    season, there were 4 Mentors/Spirits, each challenging 
    you and the young skater with unique quests that will 
    test your performance skills.`,
    season_spirits: [
      //DANCING_PERFORMER
      {
        spirit_id: 'dreams-spirit-1',
        spirit_name: valley[1].spirits[4].spirit_name,
        spirit_img_url: valley[1].spirits[4].spirit_img_url,
        spirit_category: valley[1].spirits[4].spirit_category,
        spirit_relive_type: valley[1].spirits[4].spirit_relive_type,
        difficulty_level: valley[1].spirits[4].difficulty_level,
        difficulty_types: valley[1].spirits[4].difficulty_types,
        spirit_image: valley[1].spirits[4].spirit_image,
        spirit_collectibles: valley[1].spirits[4].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[4].spirit_tree_cost,
        number_of_visits: valley[1].spirits[4].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[4].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[4].spirit_direction,
      },
      //PEEKING_POSTMAN
      {
        spirit_id: 'dreams-spirit-2',
        spirit_name: valley[1].spirits[5].spirit_name,
        spirit_img_url: valley[1].spirits[5].spirit_img_url,
        spirit_category: valley[1].spirits[5].spirit_category,
        spirit_relive_type: valley[1].spirits[5].spirit_relive_type,
        difficulty_level: valley[1].spirits[5].difficulty_level,
        difficulty_types: valley[1].spirits[5].difficulty_types,
        spirit_image: valley[1].spirits[5].spirit_image,
        spirit_collectibles: valley[1].spirits[5].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[5].spirit_tree_cost,
        number_of_visits: valley[1].spirits[5].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[5].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[5].spirit_direction,
      },
      //PEEKING_POSTMAN
      {
        spirit_id: 'dreams-spirit-3',
        spirit_name: valley[1].spirits[6].spirit_name,
        spirit_img_url: valley[1].spirits[6].spirit_img_url,
        spirit_category: valley[1].spirits[6].spirit_category,
        spirit_relive_type: valley[1].spirits[6].spirit_relive_type,
        difficulty_level: valley[1].spirits[6].difficulty_level,
        difficulty_types: valley[1].spirits[6].difficulty_types,
        spirit_image: valley[1].spirits[6].spirit_image,
        spirit_collectibles: valley[1].spirits[6].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[6].spirit_tree_cost,
        number_of_visits: valley[1].spirits[6].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[6].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[6].spirit_direction,
      },
      //BEARHUG_HERMIT
      {
        spirit_id: 'dreams-spirit-4',
        spirit_name: valley[1].spirits[7].spirit_name,
        spirit_img_url: valley[1].spirits[7].spirit_img_url,
        spirit_category: valley[1].spirits[7].spirit_category,
        spirit_relive_type: valley[1].spirits[7].spirit_relive_type,
        difficulty_level: valley[1].spirits[7].difficulty_level,
        difficulty_types: valley[1].spirits[7].difficulty_types,
        spirit_image: valley[1].spirits[7].spirit_image,
        spirit_collectibles: valley[1].spirits[7].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[7].spirit_tree_cost,
        number_of_visits: valley[1].spirits[7].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[7].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[7].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'valley-WL12',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagkapasok, mag skate pababa at sa mga bukid na nasa kaliwa, isa dito ay 
          may butas kung nasaan ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'valley-WL13',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagkapasok, mag skate pababa at sa mga bukid na nasa kanan, isa dito ay 
          may butas kung nasaan ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_3',
        wl_label: 'valley-WL15',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal`,
          `At sa tuktok ng tore na nasa gitna makita mo ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_4',
        wl_label: 'valley-WL16',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal`,
          `Sumakay ka sa Ferry Boat papuntang Hermitt's Valley, at sa likod mo ay may kweba sa bandang kanan ng bundok.`,
        ],
      },
      {
        id: 'seasonal_wl_5',
        wl_label: 'valley-WL17',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal`,
          `Sumakay ka sa Ferry Boat papuntang Hermitt's Valley, at sa likod ng bundok makita ang winged light dito.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 'seasonal_ms_1',
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 7',
        shrine_url: VT_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, at bago makarating sa plaza sa gitna, sa gawing kaliwa malapit sa bahay, makita
          ang map shrine.`,
        ],
      },
      {
        id: 'seasonal_ms_2',
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 9',
        shrine_url: VT_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, sa unahan ng statue, naka elevated ang map shrine malapit sa exit ng Performance Hall.`,
        ],
      },
      {
        id: 'seasonal_ms_3',
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 10',
        shrine_url: VT_MS10 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, at magtungo sa Port sa unahan lng ng plaza, sa kaliwang banda.`,
          `Pagkasakay ng lumulutang na bangka, gawin din ito sa susunod na terminal patungo sa Hermitt's Valley`,
          `Pagkarating ay lumipad patungo sa Cave na nasa bandang kanan, at sa tuktok ng Cave na ito ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Season of Assembly',
    time_duration: 'April 5 - June 13, 2021',
    spirit_num: 6,
    wl_num: 2,
    ms_num: 1,
    icon_route: SEASON9,
    page_route: 'seasons/2021/season-9/assembly',
    quick_info: `Set in the rainy Hidden Forest, 
    this story follows a lone Scout spirit who 
    invites players to help build and then adorn 
    a treehouse fit for hosting friends.
    Each spirit this season is individually 
     related to the realm Ancestors of Sky – with their 
     theme and items a reflection of their personalities.`,
    season_spirits: [
      //BAFFLED_BOTANIST
      {
        spirit_id: 'assembly-spirit-1',
        spirit_name: hiddenForest[1].spirits[4].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[4].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[4].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[4].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[4].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[4].difficulty_types,
        spirit_image: hiddenForest[1].spirits[4].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[4].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[4].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[4].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[4].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[4].spirit_direction,
      },
      //SCOLDING_SPIRIT
      {
        spirit_id: 'assembly-spirit-2',
        spirit_name: hiddenForest[1].spirits[5].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[5].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[5].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[5].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[5].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[5].difficulty_types,
        spirit_image: hiddenForest[1].spirits[5].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[5].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[5].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[5].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[5].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[5].spirit_direction,
      },
      //MARCHING_ADVENTURER
      {
        spirit_id: 'assembly-spirit-3',
        spirit_name: hiddenForest[1].spirits[6].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[6].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[6].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[6].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[6].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[6].difficulty_types,
        spirit_image: hiddenForest[1].spirits[6].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[6].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[6].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[6].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[6].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[6].spirit_direction,
      },
      //SCAREDY_CADET
      {
        spirit_id: 'assembly-spirit-4',
        spirit_name: hiddenForest[1].spirits[7].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[7].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[7].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[7].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[7].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[7].difficulty_types,
        spirit_image: hiddenForest[1].spirits[7].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[7].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[7].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[7].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[7].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[7].spirit_direction,
      },
      //CHUCKLING_SCOUT
      {
        spirit_id: 'assembly-spirit-5',
        spirit_name: hiddenForest[1].spirits[8].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[8].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[8].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[8].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[8].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[8].difficulty_types,
        spirit_image: hiddenForest[1].spirits[8].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[8].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[8].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[8].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[8].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[8].spirit_direction,
      },
      //DAYDREAM_FORESTER
      {
        spirit_id: 'assembly-spirit-6',
        spirit_name: hiddenForest[1].spirits[9].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[9].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[9].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[9].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[9].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[9].difficulty_types,
        spirit_image: hiddenForest[1].spirits[9].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[9].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[9].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[9].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[9].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[9].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 17,
        wl_label: 'Forest-WL17',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-9',
        wl_url: HF_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 3 | Hiddden Forest, lumipad pababa sa mga kaulapan.`,
          `Bago makarating sa gate ng entrance, ay may lagusan sa kanan, pumasok ka`,
          `Paglabas mo sa kweba may makita kang duyan sa kanan, at sa itaas ng puno nakatago ang winged light sa puno.`,
        ],
      },
      {
        id: 18,
        wl_label: 'Forest-WL18',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-9',
        wl_url: HF_WL18 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 3 | Hiddden Forest, lumipad pababa sa mga kaulapan.`,
          `Bago makarating sa gate ng entrance, ay may lagusan sa kanan, pumasok ka`,
          `Paglabas mo sa kweba may makita kang malaking treehouse, pumasok ka.`,
          `Sa loob nito ay may lagusan pababa, makita mo ang spirit na ito.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 9,
        shrine_group: 'shrine-season-9',
        shrine_label: 'Map Shrine 9',
        shrine_url: HF_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 3 | Hidden Forest, lumipad pababa sa mga kaulapan`,
          `bago pa makarating sa entrance gate, sa kanang banda ay may maliit na lagusa
          papuntang Treehouse.`,
          `sa tuktok ng Treehouse makikita ang mapshrine.`,
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Season of The Little Prince',
    time_duration: 'July 6 - September 19, 2021',
    spirit_num: 6,
    wl_num: 3,
    ms_num: 1,
    icon_route: SEASON10,
    page_route: 'seasons/2021/season-10/the-little-prince',
    quick_info: `This season was the first collaborative 
    season released by thatgamecompany, collaborating with
     the titular story of Antoine de Saint-Exupéry's The 
     Little Prince (French: Le Petit Prince). This season 
     featured six prominent characters from the story as 
     spirits, as well as the Little Prince as the protagonist
      and The Rose as the Seasonal Guide.`,
    season_spirits: [
      //SLOUCHING_SOLDIER
      {
        spirit_id: 'the-little-prince-spirit-1',
        spirit_name: vault[1].spirits[4].spirit_name,
        spirit_img_url: vault[1].spirits[4].spirit_img_url,
        spirit_category: vault[1].spirits[4].spirit_category,
        spirit_relive_type: vault[1].spirits[4].spirit_relive_type,
        difficulty_level: vault[1].spirits[4].difficulty_level,
        difficulty_types: vault[1].spirits[4].difficulty_types,
        spirit_image: vault[1].spirits[4].spirit_image,
        spirit_collectibles: vault[1].spirits[4].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[4].spirit_tree_cost,
        number_of_visits: vault[1].spirits[4].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[4].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[4].spirit_direction,
      },
      //GLOATING_NARCISSIST
      {
        spirit_id: 'the-little-prince-spirit-2',
        spirit_name: vault[1].spirits[5].spirit_name,
        spirit_img_url: vault[1].spirits[5].spirit_img_url,
        spirit_category: vault[1].spirits[5].spirit_category,
        spirit_relive_type: vault[1].spirits[5].spirit_relive_type,
        difficulty_level: vault[1].spirits[5].difficulty_level,
        difficulty_types: vault[1].spirits[5].difficulty_types,
        spirit_image: vault[1].spirits[5].spirit_image,
        spirit_collectibles: vault[1].spirits[5].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[5].spirit_tree_cost,
        number_of_visits: vault[1].spirits[5].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[5].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[5].spirit_direction,
      },
      //STRETCHING_LAMPLIGHTER
      {
        spirit_id: 'the-little-prince-spirit-3',
        spirit_name: vault[1].spirits[6].spirit_name,
        spirit_img_url: vault[1].spirits[6].spirit_img_url,
        spirit_category: vault[1].spirits[6].spirit_category,
        spirit_relive_type: vault[1].spirits[6].spirit_relive_type,
        difficulty_level: vault[1].spirits[6].difficulty_level,
        difficulty_types: vault[1].spirits[6].difficulty_types,
        spirit_image: vault[1].spirits[6].spirit_image,
        spirit_collectibles: vault[1].spirits[6].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[6].spirit_tree_cost,
        number_of_visits: vault[1].spirits[6].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[6].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[6].spirit_direction,
      },
      //STAR_COLLECTOR
      {
        spirit_id: 'the-little-prince-spirit-4',
        spirit_name: vault[1].spirits[7].spirit_name,
        spirit_img_url: vault[1].spirits[7].spirit_img_url,
        spirit_category: vault[1].spirits[7].spirit_category,
        spirit_relive_type: vault[1].spirits[7].spirit_relive_type,
        difficulty_level: vault[1].spirits[7].difficulty_level,
        difficulty_types: vault[1].spirits[7].difficulty_types,
        spirit_image: vault[1].spirits[7].spirit_image,
        spirit_collectibles: vault[1].spirits[7].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[7].spirit_tree_cost,
        number_of_visits: vault[1].spirits[7].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[7].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[7].spirit_direction,
      },
      //BECKONING_RULER
      {
        spirit_id: 'the-little-prince-spirit-5',
        spirit_name: vault[1].spirits[8].spirit_name,
        spirit_img_url: vault[1].spirits[8].spirit_img_url,
        spirit_category: vault[1].spirits[8].spirit_category,
        spirit_relive_type: vault[1].spirits[8].spirit_relive_type,
        difficulty_level: vault[1].spirits[8].difficulty_level,
        difficulty_types: vault[1].spirits[8].difficulty_types,
        spirit_image: vault[1].spirits[8].spirit_image,
        spirit_collectibles: vault[1].spirits[8].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[8].spirit_tree_cost,
        number_of_visits: vault[1].spirits[8].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[8].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[8].spirit_direction,
      },
      //SNEEZING_GEOGRAPHER
      {
        spirit_id: 'the-little-prince-spirit-6',
        spirit_name: vault[1].spirits[9].spirit_name,
        spirit_img_url: vault[1].spirits[9].spirit_img_url,
        spirit_category: vault[1].spirits[9].spirit_category,
        spirit_relive_type: vault[1].spirits[9].spirit_relive_type,
        difficulty_level: vault[1].spirits[9].difficulty_level,
        difficulty_types: vault[1].spirits[9].difficulty_types,
        spirit_image: vault[1].spirits[9].spirit_image,
        spirit_collectibles: vault[1].spirits[9].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[9].spirit_tree_cost,
        number_of_visits: vault[1].spirits[9].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[9].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[9].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'Vault-WL9',
        wl_group: 'wl-vault',
        wl_url: VK_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad pataas at sa gawing kaliwa ay may lagusan papasok.`,
          `Pagkapasok ay lumipad paakyat at pumasok sa kaliwang butas.`,
          `Pagkarating sa Starlight Dessert, ay lumipad patungo sa malaking banga na
          nasa iyong gawing kanan.`,
          `Makita mo ang winged light sa tuktok nito.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'Vault-WL10',
        wl_group: 'wl-vault',
        wl_url: VK_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad pataas at sa gawing kaliwa ay may lagusan papasok.`,
          `Pagkapasok ay lumipad paakyat at pumasok sa kaliwang butas.`,
          `Pagkarating sa Starlight Dessert, ay lumipad patungo sa mataas na tower 
          na nasa iyong gawing kaliwa.`,
          `Nasa tuktok ng tower ang winged light na ito.`,
        ],
      },
      {
        id: 'seasonal_wl_3',
        wl_label: 'Vault-WL11',
        wl_group: 'wl-vault',
        wl_url: VK_WL11 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad pataas at sa gawing kaliwa ay may lagusan papasok.`,
          `Pagkapasok ay lumipad paakyat at pumasok sa kaliwang butas.`,
          `Pagkarating sa Starlight Dessert, ay lumipad patungo sa buwan.`,
          `Sa unang islang nakalutang ay may hugis krus ito na butas sa ilalim at nasa loob
          nito ang winged light.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 'seasonal_ms_1',
        shrine_label: 'Map Shrine 2',
        shrine_url: VK_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad pakaliwa at pumasok ka sa lagusan patungong Dessert Starlight.`,
          `Pagkalabas mo ay lumipad sa direksyon ng buwan, at may makita kang garden`,
          `Sa gawing kanan mo, sa loob ng maze makita ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Season of Flight',
    time_duration: 'October 4 - December 19, 2021',
    spirit_num: 4,
    wl_num: 1,
    ms_num: 1,
    icon_route: SEASON11,
    page_route: 'seasons/2021/season-11/flight',
    quick_info: `A brand new area to discover has 
    been added to the game in the clouds of Hidden 
    Forest. The Season of Flight features five 
    seasonal quests to team up with spirits and 
    reveal routes forward for Sky children and 
    Light Creatures alike. Gliding aloft currents 
    of wind, players will uncover new insight into 
    the lives of the creatures who fly beside 
    them—and uncover a feature that carries them 
    from an ancient crossroads to the winds woven 
    throughout the world of Sky; The Wind Paths.`,
    season_spirits: [
      //TINKERING_CHIMESMITH
      {
        spirit_id: 'flight-1',
        spirit_name: hiddenForest[1].spirits[10].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[10].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[10].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[10].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[10].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[10].difficulty_types,
        spirit_image: hiddenForest[1].spirits[10].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[10].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[10].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[10].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[10].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[10].spirit_direction,
      },
      //LIGHT_WHISPERER
      {
        spirit_id: 'flight-2',
        spirit_name: hiddenForest[1].spirits[11].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[11].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[11].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[11].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[11].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[11].difficulty_types,
        spirit_image: hiddenForest[1].spirits[11].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[11].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[11].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[11].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[11].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[11].spirit_direction,
      },
      //LIVELY_NAVIGATOR
      {
        spirit_id: 'flight-3',
        spirit_name: hiddenForest[1].spirits[12].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[12].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[12].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[12].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[12].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[12].difficulty_types,
        spirit_image: hiddenForest[1].spirits[12].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[12].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[12].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[12].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[12].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[12].spirit_direction,
      },
      //TALENTED_BUILDER
      {
        spirit_id: 'flight-4',
        spirit_name: hiddenForest[1].spirits[13].spirit_name,
        spirit_img_url: hiddenForest[1].spirits[13].spirit_img_url,
        spirit_category: hiddenForest[1].spirits[13].spirit_category,
        spirit_relive_type: hiddenForest[1].spirits[13].spirit_relive_type,
        difficulty_level: hiddenForest[1].spirits[13].difficulty_level,
        difficulty_types: hiddenForest[1].spirits[13].difficulty_types,
        spirit_image: hiddenForest[1].spirits[13].spirit_image,
        spirit_collectibles: hiddenForest[1].spirits[13].spirit_collectibles,
        spirit_tree_cost: hiddenForest[1].spirits[13].spirit_tree_cost,
        number_of_visits: hiddenForest[1].spirits[13].number_of_visits,
        spirit_guide_video_url:
          hiddenForest[1].spirits[13].spirit_guide_video_url,
        spirit_direction: hiddenForest[1].spirits[13].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'Forest-WL19',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-11',
        wl_url: HF_WL19 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 3 | Hiddden Forest, lumipad ka gawing kanan at pumasok ka sa lagusan.`,
          `Paglabas mo sa Wind Path, ay may malaking isla sa gitna, `,
          `at sa kanang bahagi ng isla lumipad ka pababa at pumasok ka (red circle) at lalabas ka sa lagusan (yellow circle)`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 'seasonal_ms_1',
        shrine_group: 'shrine-season-11',
        shrine_label: 'Map Shrine 10',
        shrine_url: HF_MS10 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 3 | Hidden Forest, lumipad gawing kanan at pumasok sa Wind Paths.`,
          `Pagdating sa Wind Paths, lumipad patungo sa dulong isla sa ibaba at nasa docking area
          map shrine.`,
        ],
      },
    ],
  },
]

export const seasons2022 = [
  {
    id: 12,
    name: 'Season of Abyss',
    time_duration: 'January 17 - March 27, 2022',
    spirit_num: 4,
    wl_num: 2,
    icon_route: SEASON12,
    page_route: 'seasons/2022/season-12/abyss',
    quick_info: `Season of Abyss follows the 
    adventures of four scrappy spirits who 
    scavenge the realm for resources. Throughout 
    the course of the season, players were prompted 
    to discover the mysteries and surprises 
    that awaited in the sapphire depths of 
    Season of Abyss in a brand new area called 
    The Treasure Reef.`,
    season_spirits: [
      //CEASING_COMMODORE
      {
        spirit_id: 'abyss-1',
        spirit_name: wasteland[1].spirits[10].spirit_name,
        spirit_img_url: wasteland[1].spirits[10].spirit_img_url,
        spirit_category: wasteland[1].spirits[10].spirit_category,
        spirit_relive_type: wasteland[1].spirits[10].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[10].difficulty_level,
        difficulty_types: wasteland[1].spirits[10].difficulty_types,
        spirit_image: wasteland[1].spirits[10].spirit_image,
        spirit_collectibles: wasteland[1].spirits[10].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[10].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[10].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[10].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[10].spirit_direction,
      },
      //ANXIOUS_ANGLER
      {
        spirit_id: 'abyss-2',
        spirit_name: wasteland[1].spirits[11].spirit_name,
        spirit_img_url: wasteland[1].spirits[11].spirit_img_url,
        spirit_category: wasteland[1].spirits[11].spirit_category,
        spirit_relive_type: wasteland[1].spirits[11].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[11].difficulty_level,
        difficulty_types: wasteland[1].spirits[11].difficulty_types,
        spirit_image: wasteland[1].spirits[11].spirit_image,
        spirit_collectibles: wasteland[1].spirits[11].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[11].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[11].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[11].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[11].spirit_direction,
      },
      //BUMBLING_BOATSWAIN
      {
        spirit_id: 'abyss-3',
        spirit_name: wasteland[1].spirits[12].spirit_name,
        spirit_img_url: wasteland[1].spirits[12].spirit_img_url,
        spirit_category: wasteland[1].spirits[12].spirit_category,
        spirit_relive_type: wasteland[1].spirits[12].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[12].difficulty_level,
        difficulty_types: wasteland[1].spirits[12].difficulty_types,
        spirit_image: wasteland[1].spirits[12].spirit_image,
        spirit_collectibles: wasteland[1].spirits[12].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[12].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[12].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[12].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[12].spirit_direction,
      },
      //CACKLING_CANNONEER
      {
        spirit_id: 'abyss-4',
        spirit_name: wasteland[1].spirits[13].spirit_name,
        spirit_img_url: wasteland[1].spirits[13].spirit_img_url,
        spirit_category: wasteland[1].spirits[13].spirit_category,
        spirit_relive_type: wasteland[1].spirits[13].spirit_relive_type,
        difficulty_level: wasteland[1].spirits[13].difficulty_level,
        difficulty_types: wasteland[1].spirits[13].difficulty_types,
        spirit_image: wasteland[1].spirits[13].spirit_image,
        spirit_collectibles: wasteland[1].spirits[13].spirit_collectibles,
        spirit_tree_cost: wasteland[1].spirits[13].spirit_tree_cost,
        number_of_visits: wasteland[1].spirits[13].number_of_visits,
        spirit_guide_video_url: wasteland[1].spirits[13].spirit_guide_video_url,
        spirit_direction: wasteland[1].spirits[13].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 17,
        wl_label: 'Wasteland-WL17',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Golden Wasteland >> Lumipad gawing kanan, at umupo sa bangka.`,
          `Pagdating sa Treasure Reef, lumipad pataas`,
          `May mataas na tore sa gawing kanan at sa tuktok nito ang winged light.`,
        ],
      },
      {
        id: 18,
        wl_label: 'Wasteland-WL18',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL18 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Golden Wasteland >> Lumipad gawing kanan, at umupo sa bangka.`,
          `Pagdating sa Treasure Reef, lumipad pataas`,
          `Sa tapat ng mataas na tore sa gawing kanan, ay pumasok sa batong may butas na nasa dagat
          at lumangoy pailalim hanggang sa makarating ka sa ibaba`,
          ` Buksan ang pintuan sa gawing kaliwa, at nasa loob nito ang winged light.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 7,
        shrine_label: 'Map Shrine 7',
        shrine_url: GW_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 5 | Golden Wasteland, lumipad pakaliwa at sumakay sa bangka.`,
          `Pagkarating sa Treasure Reef, ay lumipad patungo sa pinakamataas na tore at makita mo 
          sa loob nito ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 13,
    name: 'Season of Performance',
    time_duration: 'April 11 - June 26, 2022',
    spirit_num: 4,
    wl_num: 1,
    icon_route: SEASON13,
    page_route: 'seasons/2022/season-13/performance',
    quick_info: `The Season of Performance takes place 
    in a new area in Valley of Triumph. Visit the stage 
    tucked away in a sleepy mountain village. Meet the 
    Performance Guide and a group of four performer 
    Spirits to share their imagination and passion with 
    an audience!`,
    season_spirits: [
      //FRANTIC_STAGEHEAD
      {
        spirit_id: 'performance-1',
        spirit_name: valley[1].spirits[8].spirit_name,
        spirit_img_url: valley[1].spirits[8].spirit_img_url,
        spirit_category: valley[1].spirits[8].spirit_category,
        spirit_relive_type: valley[1].spirits[8].spirit_relive_type,
        difficulty_level: valley[1].spirits[8].difficulty_level,
        difficulty_types: valley[1].spirits[8].difficulty_types,
        spirit_image: valley[1].spirits[8].spirit_image,
        spirit_collectibles: valley[1].spirits[8].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[8].spirit_tree_cost,
        number_of_visits: valley[1].spirits[8].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[8].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[8].spirit_direction,
      },
      //FORGETFUL_STORYTELLER
      {
        spirit_id: 'performance-2',
        spirit_name: valley[1].spirits[9].spirit_name,
        spirit_img_url: valley[1].spirits[9].spirit_img_url,
        spirit_category: valley[1].spirits[9].spirit_category,
        spirit_relive_type: valley[1].spirits[9].spirit_relive_type,
        difficulty_level: valley[1].spirits[9].difficulty_level,
        difficulty_types: valley[1].spirits[9].difficulty_types,
        spirit_image: valley[1].spirits[9].spirit_image,
        spirit_collectibles: valley[1].spirits[9].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[9].spirit_tree_cost,
        number_of_visits: valley[1].spirits[9].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[9].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[9].spirit_direction,
      },
      //MELLOW_MUSICIAN
      {
        spirit_id: 'performance-3',
        spirit_name: valley[1].spirits[10].spirit_name,
        spirit_img_url: valley[1].spirits[10].spirit_img_url,
        spirit_category: valley[1].spirits[10].spirit_category,
        spirit_relive_type: valley[1].spirits[10].spirit_relive_type,
        difficulty_level: valley[1].spirits[10].difficulty_level,
        difficulty_types: valley[1].spirits[10].difficulty_types,
        spirit_image: valley[1].spirits[10].spirit_image,
        spirit_collectibles: valley[1].spirits[10].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[10].spirit_tree_cost,
        number_of_visits: valley[1].spirits[10].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[10].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[10].spirit_direction,
      },
      //MODEST_DANCER
      {
        spirit_id: 'performance-4',
        spirit_name: valley[1].spirits[11].spirit_name,
        spirit_img_url: valley[1].spirits[11].spirit_img_url,
        spirit_category: valley[1].spirits[11].spirit_category,
        spirit_relive_type: valley[1].spirits[11].spirit_relive_type,
        difficulty_level: valley[1].spirits[11].difficulty_level,
        difficulty_types: valley[1].spirits[11].difficulty_types,
        spirit_image: valley[1].spirits[11].spirit_image,
        spirit_collectibles: valley[1].spirits[11].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[11].spirit_tree_cost,
        number_of_visits: valley[1].spirits[11].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[11].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[11].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'valley-WL14',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-13',
        wl_url: VT_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, sa iyong kanan ay may lagusan papuntang Village Theater, pumasok ka.`,
          `Pumasok ka sa Theater Hall at sa likod ng stage ay may gitara sa labas ng lagusan, pumasok ka at sa dulo nag winged light.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 'seasonal_ms_1',
        shrine_group: 'shrine-season-13',
        shrine_label: 'Map Shrine 8',
        shrine_url: VT_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, at bago makarating sa plaza sa gitna, sa gawing kanan ay may lagusan papuntang
          Village Theater, pumasok ka.`,
          `Pagkarating sa Village Theeater, sa kaliwang banda makita ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 14,
    name: 'Season of Shattering',
    season_type: 0,
    time_duration: 'July 11 - September 26, 2022',
    spirit_num: 2,
    wl_num: 6,
    icon_route: SEASON14,
    page_route: 'seasons/2022/season-14/shattering',
    quick_info: `This Season takes a different approach 
    to telling a new facet of the story of Sky. There is
    no spirits to relive but memories of light and darkness
    which holds cosmetics and can be found in the void of 
    Shattering. Winged lights are showed in 6 different 
    memories every red shards fall schedule.`,
    season_spirits: [
      //DRAGON
      {
        spirit_id: 'shattering-1',
        spirit_name: 'Darkness Dragon',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NON_SPIRIT,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: DRAGON_ITEM_1,
            currency: 'Candles',
            price: 70, //40
          },
          {
            label: 'Neck Accessory',
            img: DRAGON_ITEM_2,
            currency: 'Candles',
            price: 70, //45
          },
          {
            label: 'Instrument',
            img: DRAGON_ITEM_3,
            currency: 'Candles',
            price: 50,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 208,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Sep 16, 2024',
            visitNo: 'GV#6',
          },
        ],
      },
      //PLANT
      {
        spirit_id: 'shattering-2',
        spirit_name: 'Darkness Plant',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NON_SPIRIT,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: PLANT_ITEM_1,
            currency: 'Candles',
            price: 45, //40
          },
          {
            label: 'Mask',
            img: PLANT_ITEM_2,
            currency: 'Candles',
            price: 50, //45
          },
          {
            label: 'Cape',
            img: PLANT_ITEM_3,
            currency: 'Candles',
            price: 80, //75
          },
        ],
        spirit_tree_cost: [
          {
            candles: 208,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Sep 16, 2024',
            visitNo: 'GV#6',
          },
        ],
      },
      //JELLYFISH
      {
        spirit_id: 'shattering-3',
        spirit_name: 'Light Jellyfish',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NON_SPIRIT,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: JELLYFISH_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Hair Accessory',
            img: JELLYFISH_ITEM_2,
            currency: 'Candles',
            price: 50, //15
          },
          {
            label: 'Cape',
            img: JELLYFISH_ITEM_3,
            currency: 'Candles',
            price: 80, //75
          },
        ],
        spirit_tree_cost: [
          {
            candles: 193,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Sep 16, 2024',
            visitNo: 'GV#6',
          },
        ],
      },
      //MANTA
      {
        spirit_id: 'shattering-3',
        spirit_name: 'Light Manta',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NON_SPIRIT,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MANTA_ITEM_1,
            currency: 'Candles',
            price: 50, //45
          },
          {
            label: 'Outfit',
            img: MANTA_ITEM_2,
            currency: 'Candles',
            price: 75, //70
          },
          {
            label: 'Cape',
            img: MANTA_ITEM_3,
            currency: 'Candles',
            price: 80, //75
          },
        ],
        spirit_tree_cost: [
          {
            candles: 238,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Sep 16, 2024',
            visitNo: 'GV#6',
          },
        ],
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'Jellyfish Void',
        wl_group: 'wl-void',
        wl_season_group: 'wl-void-14',
        wl_url: VOID_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Gawin ang Red Shard Eruptions upang makapasok sa void space`,
          `Nasa gitnang Jellyfish na nakalutang at sa tuktok nito makikita ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'Crabs and Flying Darkness Void',
        wl_group: 'wl-void',
        wl_season_group: 'wl-void-14',
        wl_url: VOID_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Gawin ang Red Shard Eruptions upang makapasok sa void space`,
          `Nasa pinaka-itaas na darkness plant sa gawing kaliwa makikita ang winged light`,
        ],
      },
      {
        id: 'seasonal_wl_3',
        wl_label: 'Mantas Void',
        wl_group: 'wl-void',
        wl_season_group: 'wl-void-14',
        wl_url: VOID_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Gawin ang Red Shard Eruptions upang makapasok sa void space`,
          `Nasa dulong manta at sa ibabaw nito makikita ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_4',
        wl_label: 'Krill Void',
        wl_group: 'wl-void',
        wl_season_group: 'wl-void-14',
        wl_url: VOID_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Gawin ang Red Shard Eruptions upang makapasok sa void space`,
          `Nasa harapan lamang ng krill ang winged light.`,
          `Huwag mag-alala, hindi gumagalaw ang krill dito.`,
        ],
      },
      {
        id: 'seasonal_wl_5',
        wl_label: 'Whale Void',
        wl_group: 'wl-void',
        wl_season_group: 'wl-void-14',
        wl_url: VOID_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Gawin ang Red Shard Eruptions upang makapasok sa void space`,
          `Nasa gawing kanang mata ng whale (o kapag naka harap ka sa whale ay nasa kaliwa mo.)`,
          `Sa loob ng mata makikita ang winged light`,
        ],
      },
      {
        id: 'seasonal_wl_6',
        wl_label: 'Elders Void',
        wl_group: 'wl-void',
        wl_season_group: 'wl-void-14',
        wl_url: VOID_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Gawin ang Red Shard Eruptions upang makapasok sa void space`,
          `Nasa pinakatuktok ng red crystal ang winged light dito`,
          `Pwede kang mag-recharge ng wing power sa mga maliliit na red rocks na 
          nakapalibot sa red crsytal.`,
        ],
      },
    ],
  },
  {
    id: 15,
    name: 'Season of AURORA',
    time_duration: 'October 17, 2022 - January 2, 2023',
    spirit_num: 4,
    icon_route: SEASON15,
    page_route: 'seasons/2022/season-15/aurora',
    quick_info: `The Coliseum in Valley of Triumph got yet 
    another makeover as the Season of AURORA prepared to 
    house the 4 Spirits of the Season and AURORA themselves. 
    The Coliseum undergoes changes with every Seasonal Quest 
    from the Season. To be able to acquire the spirits you must
    do all the quests.`,
    season_spirits: [
      //RUNNING_WAYFARER
      {
        spirit_id: 'aurora-1',
        spirit_name: valley[1].spirits[12].spirit_name,
        spirit_img_url: valley[1].spirits[12].spirit_img_url,
        spirit_category: valley[1].spirits[12].spirit_category,
        spirit_relive_type: valley[1].spirits[12].spirit_relive_type,
        difficulty_level: valley[1].spirits[12].difficulty_level,
        difficulty_types: valley[1].spirits[12].difficulty_types,
        spirit_image: valley[1].spirits[12].spirit_image,
        spirit_collectibles: valley[1].spirits[12].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[12].spirit_tree_cost,
        number_of_visits: valley[1].spirits[12].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[12].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[12].spirit_direction,
      },
      //MINDFUL_MINER
      {
        spirit_id: 'aurora-2',
        spirit_name: valley[1].spirits[13].spirit_name,
        spirit_img_url: valley[1].spirits[13].spirit_img_url,
        spirit_category: valley[1].spirits[13].spirit_category,
        spirit_relive_type: valley[1].spirits[13].spirit_relive_type,
        difficulty_level: valley[1].spirits[13].difficulty_level,
        difficulty_types: valley[1].spirits[13].difficulty_types,
        spirit_image: valley[1].spirits[13].spirit_image,
        spirit_collectibles: valley[1].spirits[13].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[13].spirit_tree_cost,
        number_of_visits: valley[1].spirits[13].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[13].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[13].spirit_direction,
      },
      //WARRIOR_OF_LOVE
      {
        spirit_id: 'aurora-3',
        spirit_name: valley[1].spirits[14].spirit_name,
        spirit_img_url: valley[1].spirits[14].spirit_img_url,
        spirit_category: valley[1].spirits[14].spirit_category,
        spirit_relive_type: valley[1].spirits[14].spirit_relive_type,
        difficulty_level: valley[1].spirits[14].difficulty_level,
        difficulty_types: valley[1].spirits[14].difficulty_types,
        spirit_image: valley[1].spirits[14].spirit_image,
        spirit_collectibles: valley[1].spirits[14].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[14].spirit_tree_cost,
        number_of_visits: valley[1].spirits[14].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[14].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[14].spirit_direction,
      },
      //SEED_OF_HOPE
      {
        spirit_id: 'aurora-4',
        spirit_name: valley[1].spirits[15].spirit_name,
        spirit_img_url: valley[1].spirits[15].spirit_img_url,
        spirit_category: valley[1].spirits[15].spirit_category,
        spirit_relive_type: valley[1].spirits[15].spirit_relive_type,
        difficulty_level: valley[1].spirits[15].difficulty_level,
        difficulty_types: valley[1].spirits[15].difficulty_types,
        spirit_image: valley[1].spirits[15].spirit_image,
        spirit_collectibles: valley[1].spirits[15].spirit_collectibles,
        spirit_tree_cost: valley[1].spirits[15].spirit_tree_cost,
        number_of_visits: valley[1].spirits[15].number_of_visits,
        spirit_guide_video_url: valley[1].spirits[15].spirit_guide_video_url,
        spirit_direction: valley[1].spirits[15].spirit_direction,
      },
    ],
  },
]

export const seasons2023 = [
  {
    id: 16,
    name: 'Season of Remembrance',
    time_duration: 'January 16, April 2, 2023',
    spirit_num: 4,
    wl_num: 1,
    ms_num: 1,
    icon_route: SEASON16,
    page_route: 'seasons/2023/season-16/remembrance',
    quick_info: `Journey alongside Spirits who lived 
    through eras of turmoil to press on and rebuild together.`,
    season_spirits: [
      //BEREFT_VETERAN
      {
        spirit_id: 'remembrance-1',
        spirit_name: vault[1].spirits[10].spirit_name,
        spirit_img_url: vault[1].spirits[10].spirit_img_url,
        spirit_category: vault[1].spirits[10].spirit_category,
        spirit_relive_type: vault[1].spirits[10].spirit_relive_type,
        difficulty_level: vault[1].spirits[10].difficulty_level,
        difficulty_types: vault[1].spirits[10].difficulty_types,
        spirit_image: vault[1].spirits[10].spirit_image,
        spirit_collectibles: vault[1].spirits[10].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[10].spirit_tree_cost,
        number_of_visits: vault[1].spirits[10].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[10].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[10].spirit_direction,
      },
      //WOUNDED_SOLDIER
      {
        spirit_id: 'remembrance-2',
        spirit_name: vault[1].spirits[11].spirit_name,
        spirit_img_url: vault[1].spirits[11].spirit_img_url,
        spirit_category: vault[1].spirits[11].spirit_category,
        spirit_relive_type: vault[1].spirits[11].spirit_relive_type,
        difficulty_level: vault[1].spirits[11].difficulty_level,
        difficulty_types: vault[1].spirits[11].difficulty_types,
        spirit_image: vault[1].spirits[11].spirit_image,
        spirit_collectibles: vault[1].spirits[11].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[11].spirit_tree_cost,
        number_of_visits: vault[1].spirits[11].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[11].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[11].spirit_direction,
      },
      //TIPTOEING_TEABREWER
      {
        spirit_id: 'remembrance-3',
        spirit_name: vault[1].spirits[12].spirit_name,
        spirit_img_url: vault[1].spirits[12].spirit_img_url,
        spirit_category: vault[1].spirits[12].spirit_category,
        spirit_relive_type: vault[1].spirits[12].spirit_relive_type,
        difficulty_level: vault[1].spirits[12].difficulty_level,
        difficulty_types: vault[1].spirits[12].difficulty_types,
        spirit_image: vault[1].spirits[12].spirit_image,
        spirit_collectibles: vault[1].spirits[12].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[12].spirit_tree_cost,
        number_of_visits: vault[1].spirits[12].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[12].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[12].spirit_direction,
      },
      //PLEADING_CHILD
      {
        spirit_id: 'remembrance-4',
        spirit_name: vault[1].spirits[13].spirit_name,
        spirit_img_url: vault[1].spirits[13].spirit_img_url,
        spirit_category: vault[1].spirits[13].spirit_category,
        spirit_relive_type: vault[1].spirits[13].spirit_relive_type,
        difficulty_level: vault[1].spirits[13].difficulty_level,
        difficulty_types: vault[1].spirits[13].difficulty_types,
        spirit_image: vault[1].spirits[13].spirit_image,
        spirit_collectibles: vault[1].spirits[13].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[13].spirit_tree_cost,
        number_of_visits: vault[1].spirits[13].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[13].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[13].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 12,
        wl_label: 'Vault-WL12',
        wl_group: 'wl-vault',
        wl_url: VK_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad patungo sa elevating platform.`,
          `Pagdating sa gitna ay may lagusan papasok sa iyong gawing kaliwa.`,
          `Pagkapasok ay may butas sa iyong kaliwa, pumasok ka ulit, hanggang sa lumabas ka sa repository`,
          `Lumipad palabas patungong kanan hanggat may makita kang maliit na ilaw
        sa iyong kanan at sa labas nito ay nakarehas ang winged light`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: VK_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad sa direksyon ng elevated platfrom.`,
          `Sa gawing kaliwa ay pumasok sa lagusan pababa papuntang Repository of Refuge`,
          `Pagkadating ay pumasok pa sa looban at sa gawing kaliwa malapit sa entrance makita mo
          ang map shrine agad.`,
        ],
      },
    ],
  },
  {
    id: 17,
    name: 'Season of Passage',
    time_duration: 'April 17 - July 2, 2023',
    spirit_num: 4,
    ms_num: 1,
    icon_route: SEASON17,
    page_route: 'seasons/2023/season-17/passage',
    quick_info: `Venture into the twilight and 
    meet four young Spirits in Isle of Dawn. 
    Experience their memories as each one learned 
    to navigate the route towards their community.`,
    season_spirits: [
      //ODDBALL_OUTCAST
      {
        spirit_id: 'passage-1',
        spirit_name: isleOfDawn[1].spirits[8].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[8].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[8].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[8].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[8].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[8].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[8].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[8].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[8].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[8].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[8].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[8].spirit_direction,
      },
      //TUMBLING_TROUBLEMAKER
      {
        spirit_id: 'passage-2',
        spirit_name: isleOfDawn[1].spirits[9].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[9].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[9].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[9].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[9].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[9].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[9].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[9].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[9].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[9].number_of_visits,
        spirit_guide_video_url: isleOfDawn[1].spirits[9].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[9].spirit_direction,
      },
      //MELANCHOLY_MOPE
      {
        spirit_id: 'passage-3',
        spirit_name: isleOfDawn[1].spirits[10].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[10].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[10].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[10].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[10].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[10].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[10].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[10].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[10].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[10].number_of_visits,
        spirit_guide_video_url:
          isleOfDawn[1].spirits[10].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[10].spirit_direction,
      },
      //OVERACTIVE_OVERACHIEVER
      {
        spirit_id: 'passage-4',
        spirit_name: isleOfDawn[1].spirits[11].spirit_name,
        spirit_img_url: isleOfDawn[1].spirits[11].spirit_img_url,
        spirit_category: isleOfDawn[1].spirits[11].spirit_category,
        spirit_relive_type: isleOfDawn[1].spirits[11].spirit_relive_type,
        difficulty_level: isleOfDawn[1].spirits[11].difficulty_level,
        difficulty_types: isleOfDawn[1].spirits[11].difficulty_types,
        spirit_image: isleOfDawn[1].spirits[11].spirit_image,
        spirit_collectibles: isleOfDawn[1].spirits[11].spirit_collectibles,
        spirit_tree_cost: isleOfDawn[1].spirits[11].spirit_tree_cost,
        number_of_visits: isleOfDawn[1].spirits[11].number_of_visits,
        spirit_guide_video_url:
          isleOfDawn[1].spirits[11].spirit_guide_video_url,
        spirit_direction: isleOfDawn[1].spirits[11].spirit_direction,
      },
    ],
    map_shrines: [
      {
        id: 2,
        shrine_group: 'shrine-season-17',
        shrine_label: 'Map Shrine 2',
        shrine_url: ID_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan nasa tuktok ito ng
          Passage Stone.`,
        ],
      },
    ],
  },
  {
    id: 18,
    name: 'Season of Moments',
    time_duration: 'July 17 - October 1, 2023',
    spirit_num: 4,
    wl_num: 3,
    ms_num: 1,
    icon_route: SEASON18,
    page_route: 'seasons/2023/season-18/moments',
    quick_info: `A new area called Prairie Peaks 
    opens itself to Sky children in this latest 
    Season. Snow-capped mountains tower over a lush, 
    green valley home to scores of light creatures. 
    Rivers beckon explorers onward to mountain crests 
    and hillside caves.`,
    season_spirits: [
      //REASSURING_RANGER
      {
        spirit_id: 'moments-1',
        spirit_name: prairie[1].spirits[10].spirit_name,
        spirit_img_url: prairie[1].spirits[10].spirit_img_url,
        spirit_category: prairie[1].spirits[10].spirit_category,
        spirit_relive_type: prairie[1].spirits[10].spirit_relive_type,
        difficulty_level: prairie[1].spirits[10].difficulty_level,
        difficulty_types: prairie[1].spirits[10].difficulty_types,
        spirit_image: prairie[1].spirits[10].spirit_image,
        spirit_collectibles: prairie[1].spirits[10].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[10].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[10].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[10].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[10].spirit_direction,
      },
      //NIGHTBIRD_WHISPERER
      {
        spirit_id: 'moments-2',
        spirit_name: prairie[1].spirits[11].spirit_name,
        spirit_img_url: prairie[1].spirits[11].spirit_img_url,
        spirit_category: prairie[1].spirits[11].spirit_category,
        spirit_relive_type: prairie[1].spirits[11].spirit_relive_type,
        difficulty_level: prairie[1].spirits[11].difficulty_level,
        difficulty_types: prairie[1].spirits[11].difficulty_types,
        spirit_image: prairie[1].spirits[11].spirit_image,
        spirit_collectibles: prairie[1].spirits[11].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[11].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[11].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[11].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[11].spirit_direction,
      },
      //ASCETIC_MONK
      {
        spirit_id: 'moments-3',
        spirit_name: prairie[1].spirits[12].spirit_name,
        spirit_img_url: prairie[1].spirits[12].spirit_img_url,
        spirit_category: prairie[1].spirits[12].spirit_category,
        spirit_relive_type: prairie[1].spirits[12].spirit_relive_type,
        difficulty_level: prairie[1].spirits[12].difficulty_level,
        difficulty_types: prairie[1].spirits[12].difficulty_types,
        spirit_image: prairie[1].spirits[12].spirit_image,
        spirit_collectibles: prairie[1].spirits[12].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[12].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[12].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[12].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[12].spirit_direction,
      },
      //JOLLY_GEOLOGIST
      {
        spirit_id: 'moments-4',
        spirit_name: prairie[1].spirits[13].spirit_name,
        spirit_img_url: prairie[1].spirits[13].spirit_img_url,
        spirit_category: prairie[1].spirits[13].spirit_category,
        spirit_relive_type: prairie[1].spirits[13].spirit_relive_type,
        difficulty_level: prairie[1].spirits[13].difficulty_level,
        difficulty_types: prairie[1].spirits[13].difficulty_types,
        spirit_image: prairie[1].spirits[13].spirit_image,
        spirit_collectibles: prairie[1].spirits[13].spirit_collectibles,
        spirit_tree_cost: prairie[1].spirits[13].spirit_tree_cost,
        number_of_visits: prairie[1].spirits[13].number_of_visits,
        spirit_guide_video_url: prairie[1].spirits[13].spirit_guide_video_url,
        spirit_direction: prairie[1].spirits[13].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'Prairie-WL14',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-18',
        wl_url: PR_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakaliwa at pumasok sa lagusan`,
          `Paglabas lumipad, patungong kanan, sa maliit na butas, pumasok at umupo sa bangka`,
          `Lumipad pakaliwa at may maliit na lagusan sa ibaba, pasok ka at sentro ng kweba, lipad  pataas at hanapin ang sa gitnang pader.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'Prairie-WL15',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-18',
        wl_url: PR_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakaliwa at pumasok sa lagusan`,
          `Paglabas lumipad, patungong kanan, sa maliit na butas, pumasok at umupo sa bangka`,
          `Pagdating dumako papasok at lumipad patungo sa malaking sa falls, ay lumangoy pailalim`,
          `pumasok sa butas at lumangoy at umahon at lumipad papasok sa tabi ng orb makikita ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_3',
        wl_label: 'Prairie-WL16',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-18',
        wl_url: PR_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 2 | Daylight Prairie, Lumipad sa mga kaulapan,`,
          `Pagkalapag sa Butterfly Field, lumipad pakaliwa at pumasok sa lagusan`,
          `Paglabas lumipad, patungong kanan, sa maliit na butas, pumasok at umupo sa bangka`,
          `Pagdating dumako papasok at lumipad patungo sa pinakamataas na bundok at sa tuktok nito ang winged light.`,
          `pumasok sa butas at lumangoy at umahon at lumipad papasok sa tabi ng orb makikita ang winged light.`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 7,
        shrine_label: 'Map Shrine 7',
        shrine_url: DP_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Pangalawang Mapa - Daylight Prairie, Lumipad ka patungo sa kaulapan`,
          `Pagkalapag, gawing kaliwa mo ay may lagusan papasok.`,
          `Sa gawing kaliwa ng Prairie Caves, ay may butas papasok papuntang Prairie Peaks, pumasok at sumakay sa bangka.`,
          `Pagdating sa Prairie Peaks, ay pumasok sa looban at pagkalabas ay sa may bato sa bandang kanan, nasa itaas ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 19,
    name: 'Season of Revival',
    season_type: 0,
    time_duration: 'October 16 - December 31, 2023',
    icon_route: SEASON19,
    page_route: 'seasons/2023/season-19/revival',
    quick_info: `In a forgotten corner of the kingdom 
    stand the ruins of Aviary Village, a town that once 
    flourished. Now, the time has come to bring it back 
    to life! Join the Season of Revival to rebuild a new 
    area steeped in Sky’s history, and transform it into 
    a thriving town center once again for Spirits and Sky 
    children alike. There are four (4) cosmetic dolls
    available on Aviary Shop that are available.`,
    season_spirits: [
      //NON_SPIRIT
      {
        spirit_id: 'revival-1',
        spirit_name: 'Vestige of a Deserted Oasis',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: VDO_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: VDO_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: VDO_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Shoes',
            img: VDO_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //NON_SPIRIT
      {
        spirit_id: 'revival-2',
        spirit_name: 'Memory of a Lost Village ',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: MLV_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MLV_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Outfit',
            img: MLV_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: MLV_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //NON_SPIRIT
      {
        spirit_id: 'revival-3',
        spirit_name: 'Echo of an Abandoned Refuge',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: EAR_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: EAR_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: EAR_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Shoes',
            img: EAR_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //NON_SPIRIT
      {
        spirit_id: 'revival-4',
        spirit_name: 'Remnant of a Forgotten Haven',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: RFH_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: RFH_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: RFH_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Shoes',
            img: RFH_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
    ],
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

export const seasons2024 = [
  {
    id: 20,
    name: 'Season of The Nine Colored Deer',
    time_duration: 'January 15 - March 31, 2024',
    spirit_num: 4,
    wl_num: 3,
    ms_num: 1,
    icon_route: SEASON20,
    page_route: 'seasons/2024/season-20/the-nine-colored-deer',
    quick_info: ` It is the third collaborative Seasonal Event in the world of Sky.`,
    season_spirits: [
      //HUNTER
      {
        spirit_id: 'nine-colored-deer-1',
        spirit_name: vault[1].spirits[14].spirit_name,
        spirit_img_url: vault[1].spirits[14].spirit_img_url,
        spirit_category: vault[1].spirits[14].spirit_category,
        spirit_relive_type: vault[1].spirits[14].spirit_relive_type,
        difficulty_level: vault[1].spirits[14].difficulty_level,
        difficulty_types: vault[1].spirits[14].difficulty_types,
        spirit_image: vault[1].spirits[14].spirit_image,
        spirit_collectibles: vault[1].spirits[14].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[14].spirit_tree_cost,
        number_of_visits: vault[1].spirits[14].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[14].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[14].spirit_direction,
      },
      //HERB_GATHERER
      {
        spirit_id: 'nine-colored-deer-2',
        spirit_name: vault[1].spirits[15].spirit_name,
        spirit_img_url: vault[1].spirits[15].spirit_img_url,
        spirit_category: vault[1].spirits[15].spirit_category,
        spirit_relive_type: vault[1].spirits[15].spirit_relive_type,
        difficulty_level: vault[1].spirits[15].difficulty_level,
        difficulty_types: vault[1].spirits[15].difficulty_types,
        spirit_image: vault[1].spirits[15].spirit_image,
        spirit_collectibles: vault[1].spirits[15].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[15].spirit_tree_cost,
        number_of_visits: vault[1].spirits[15].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[15].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[15].spirit_direction,
      },
      //FEUDAL_LORD
      {
        spirit_id: 'nine-colored-deer-3',
        spirit_name: vault[1].spirits[16].spirit_name,
        spirit_img_url: vault[1].spirits[16].spirit_img_url,
        spirit_category: vault[1].spirits[16].spirit_category,
        spirit_relive_type: vault[1].spirits[16].spirit_relive_type,
        difficulty_level: vault[1].spirits[16].difficulty_level,
        difficulty_types: vault[1].spirits[16].difficulty_types,
        spirit_image: vault[1].spirits[16].spirit_image,
        spirit_collectibles: vault[1].spirits[16].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[16].spirit_tree_cost,
        number_of_visits: vault[1].spirits[16].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[16].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[16].spirit_direction,
      },
      //PRINCESS
      {
        spirit_id: 'nine-colored-deer-4',
        spirit_name: vault[1].spirits[17].spirit_name,
        spirit_img_url: vault[1].spirits[17].spirit_img_url,
        spirit_category: vault[1].spirits[17].spirit_category,
        spirit_relive_type: vault[1].spirits[17].spirit_relive_type,
        difficulty_level: vault[1].spirits[17].difficulty_level,
        difficulty_types: vault[1].spirits[17].difficulty_types,
        spirit_image: vault[1].spirits[17].spirit_image,
        spirit_collectibles: vault[1].spirits[17].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[17].spirit_tree_cost,
        number_of_visits: vault[1].spirits[17].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[17].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[17].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'VAULT-WL13',
        wl_group: 'wl-vault',
        wl_season_group: 'wl-vault-20',
        wl_url: VK_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo pataas sa kaliwa ay may lagusan,`,
          `Pumasok ka at pagkadating sa collaboration room, umupo sa icon ng deer upang makarating sa Crescent Oasis`,
          `Magtungo papuntang Hunter Spirit at sa bandang likod pababa ay makikita ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_2',
        wl_label: 'VAULT-WL14',
        wl_group: 'wl-vault',
        wl_season_group: 'wl-vault-20',
        wl_url: VK_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo pataas sa kaliwa ay may lagusan,`,
          `Pumasok ka at pagkadating sa collaboration room, umupo sa icon ng deer upang makarating sa Crescent Oasis`,
          `Pagkdating ay magtunog sa Tore ng palasyo, at sa labas nito sa bandang likuran makikita ang winged light.`,
        ],
      },
      {
        id: 'seasonal_wl_3',
        wl_label: 'Vault-WL15',
        wl_group: 'wl-vault',
        wl_url: VK_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo pataas sa kaliwa ay may lagusan,`,
          `Pumasok ka at pagkadating sa collaboration room, umupo sa icon ng deer upang makarating sa Crescent Oasis`,
          `Pagkdating sa Cresecent Oasis, dumako malapit sa waterfalls at pumasok sa ulap na lagusan`,
          `Sa ilalim ng puno makita ang winged light dito`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: VK_MS10 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad gawing kaliwa, at pumasok sa portal papuntang Collaboration Room.`,
          `Pumasok ka at pagkadating sa collaboration room, umupo sa icon ng deer upang makarating sa Crescent Oasis`,
          `Pagkadating, ay magtungo sa quest giver sa tapat ng lawa (lake), at sa kabila nito makita ang map shrine.`,
        ],
      },
    ],
  },
  {
    id: 21,
    name: 'Season of Nesting',
    season_type: 0,
    time_duration: 'April 15, 2024 - July 1, 2024',
    wl_num: 0,
    ms_num: 0,
    icon_route: SEASON21,
    page_route: 'seasons/2024/season-21/nesting',
    quick_info: `It's TIME to DECORATE our own HOMESPACE!`,
    season_spirits: [
      //NON_SPIRIT
      {
        spirit_id: 'nesting-1',
        spirit_name: 'Nesting Atrium',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NA_ITEM_5,
        spirit_collectibles: [
          {
            label: 'Floor Light',
            img: NA_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hanging Lamp',
            img: NA_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hair',
            img: NA_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Branch',
            img: NA_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      {
        spirit_id: 'nesting-2',
        spirit_name: 'Nesting Loft',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NL_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Bed',
            img: NL_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Chair',
            img: NL_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: NL_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Paintings',
            img: NL_ITEM_5,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      {
        spirit_id: 'nesting-3',
        spirit_name: 'Nesting Solarium',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NS_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Painting',
            img: NS_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hanging Planter',
            img: NS_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Bathtub',
            img: NS_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Table',
            img: NS_ITEM_5,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      {
        spirit_id: 'nesting-4',
        spirit_name: 'Nesting Nook',
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: NN_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Shelf',
            img: NN_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Couch',
            img: NN_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Spice Rack',
            img: NN_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hair Accessory',
            img: NN_ITEM_5,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
    ],
    winged_lights: [],
    map_shrines: [],
  },
  {
    id: 22,
    name: 'Season of Duets',
    season_type: 0,
    time_duration: 'July 15, 2024 - September 30, 2024',
    wl_num: 0,
    ms_num: 0,
    icon_route: SEASON22,
    page_route: 'seasons/2024/season-22/duets',
    quick_info: `Connect Through Meaningful Harmonies in Season of Duets`,
    season_spirits: [
      //NON_SPIRIT
      {
        spirit_id: 'duets-1',
        spirit_name: `The Pianist's Beginning`,
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: PB_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: PB_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hair',
            img: PB_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: PB_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: PB_ITEM_5,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //NON_SPIRIT
      {
        spirit_id: 'duets-2',
        spirit_name: `The Cellist's Beginning`,
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: CB_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: CB_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hair',
            img: CB_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: CB_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //NON_SPIRIT
      {
        spirit_id: 'duets-3',
        spirit_name: `The Musicians' Legacy`,
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: ML_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Instrument',
            img: ML_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Instrument',
            img: ML_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //NON_SPIRIT
      {
        spirit_id: 'duets-4',
        spirit_name: `The Pianist's Flourishing`,
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: PF_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: PF_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Shoes',
            img: PF_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: PF_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //NON_SPIRIT
      {
        spirit_id: 'duets-4',
        spirit_name: `The Cellist's Flourishing`,
        spirit_img_url: NON_SPIRIT,
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: CF_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: CF_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: CF_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: CF_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
    ],
    winged_lights: [],
    map_shrines: [],
  },
  {
    id: 23,
    name: 'Season of Moomin',
    // season_type: 1,
    time_duration: 'October 14, 2024 - December 30, 2024',
    wl_num: 1,
    ms_num: 1,
    icon_route: SEASON23,
    page_route: 'seasons/2024/season-23/moomin',
    quick_info: `4th Collab Season in Sky`,
    season_spirits: [
      //Comfort of Kindness
      {
        spirit_id: 'moomin-1',
        spirit_name: vault[1].spirits[18].spirit_name,
        spirit_img_url: vault[1].spirits[18].spirit_img_url,
        spirit_category: vault[1].spirits[18].spirit_category,
        spirit_relive_type: vault[1].spirits[18].spirit_relive_type,
        difficulty_level: vault[1].spirits[18].difficulty_level,
        difficulty_types: vault[1].spirits[18].difficulty_types,
        spirit_image: vault[1].spirits[18].spirit_image,
        spirit_collectibles: vault[1].spirits[18].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[18].spirit_tree_cost,
        number_of_visits: vault[1].spirits[18].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[18].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[18].spirit_direction,
      },
      // Sense of Self
      {
        spirit_id: 'moomin-2',
        spirit_name: vault[1].spirits[19].spirit_name,
        spirit_img_url: vault[1].spirits[19].spirit_img_url,
        spirit_category: vault[1].spirits[19].spirit_category,
        spirit_relive_type: vault[1].spirits[19].spirit_relive_type,
        difficulty_level: vault[1].spirits[19].difficulty_level,
        difficulty_types: vault[1].spirits[19].difficulty_types,
        spirit_image: vault[1].spirits[19].spirit_image,
        spirit_collectibles: vault[1].spirits[19].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[19].spirit_tree_cost,
        number_of_visits: vault[1].spirits[19].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[19].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[19].spirit_direction,
      },
      // Spirit of Adventure
      {
        spirit_id: 'moomin-3',
        spirit_name: vault[1].spirits[20].spirit_name,
        spirit_img_url: vault[1].spirits[20].spirit_img_url,
        spirit_category: vault[1].spirits[20].spirit_category,
        spirit_relive_type: vault[1].spirits[20].spirit_relive_type,
        difficulty_level: vault[1].spirits[20].difficulty_level,
        difficulty_types: vault[1].spirits[20].difficulty_types,
        spirit_image: vault[1].spirits[20].spirit_image,
        spirit_collectibles: vault[1].spirits[20].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[20].spirit_tree_cost,
        number_of_visits: vault[1].spirits[20].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[20].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[20].spirit_direction,
      },
      // Inspiration of Inclusion
      {
        spirit_id: 'moomin-4',
        spirit_name: vault[1].spirits[21].spirit_name,
        spirit_img_url: vault[1].spirits[21].spirit_img_url,
        spirit_category: vault[1].spirits[21].spirit_category,
        spirit_relive_type: vault[1].spirits[21].spirit_relive_type,
        difficulty_level: vault[1].spirits[21].difficulty_level,
        difficulty_types: vault[1].spirits[21].difficulty_types,
        spirit_image: vault[1].spirits[21].spirit_image,
        spirit_collectibles: vault[1].spirits[21].spirit_collectibles,
        spirit_tree_cost: vault[1].spirits[21].spirit_tree_cost,
        number_of_visits: vault[1].spirits[21].number_of_visits,
        spirit_guide_video_url: vault[1].spirits[21].spirit_guide_video_url,
        spirit_direction: vault[1].spirits[21].spirit_direction,
      },
    ],
    winged_lights: [
      {
        id: 'seasonal_wl_1',
        wl_label: 'WL16',
        wl_group: 'wl-vault',
        wl_season_group: 'wl-vault-23',
        wl_url: VK_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Ika-6 na Mapa | Vault of Knowledge, at lumipad patungo pataas sa kaliwa ay may lagusan,`,
          `Pumasok ka at pagkadating sa collaboration room, umupo sa icon ng deer upang makarating sa Crescent Oasis`,
        ],
      },
    ],
    map_shrines: [
      {
        id: 11,
        shrine_label: 'Map Shrine 11',
        shrine_url: VK_MS11 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 6 | Vault of Knowledge`,
          `Lumipad gawing kaliwa, at pumasok sa portal papuntang Collaboration Room.`,
          `Pumasok ka at pagkadating sa collaboration room, umupo sa icon ng deer upang makarating sa Crescent Oasis`,
          `Pagkadating, ay magtungo sa malapit sa tent na green at malapit dito ang map shrine.`,
        ],
      },
    ],
  },
]

export const allSeasons =
  seasons2019.length +
  seasons2020.length +
  seasons2021.length +
  seasons2022.length +
  seasons2023.length +
  seasons2024.length
