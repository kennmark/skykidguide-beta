import React, { useEffect, useState } from 'react'
import { maps } from '../data/maps'
import { Typography, Chip, Tooltip, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import MapCardContainer from './components/MapCardContainer'
// import ErrorBoundary from './components/ErrorBoundary'
import AnnouncementModal from './AnnouncementModal'
import FaQ from './FaQ'
import SkyClock from './SkyClock'
import { Clock } from '../pages/components/Clock'
import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  PLAYSTATION_MAX_WL,
  STEAM_MAX_WL,
} from '../exports/constants'

import { Countdown } from './components/Countdown'
import Testimonials from './components/Testimonials'
import LatestTSVisit from './components/LatestTSVisit'
import WingedLightIntro from './components/WingedLightIntro'
import MapShrineIntro from './components/MapShrineIntro'
import AnnouncementCarousel from './components/AnnouncementCarousel'
import useScreenSize from '../hooks/useScreenSize'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import DyeLocations from './components/DyeLocations'
import TravellingSpirits from './components/TravellingSpirits'
import TestFile from './components/TestFile'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

const HomeSpace = () => {
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const today = new Date()
  const year = today.getFullYear()

  const day = dayName[today.getDay()]
  let mm = monthName[today.getMonth()]
  let dd = today.getDate()
  let dateFormat = mm + ' ' + dd + ', ' + year
  // console.log(dateFormat)
  if (dd < 10) dd = '0' + dd
  const formattedToday = day + ' | ' + mm + ' ' + dd + ', ' + year

  const wingLightMaxCountChip = () => {
    return (
      <Tooltip
        content={
          <div className="w-40 flex-wrap align-middle">
            <Typography
              color="white"
              className="font-medium flex justify-center"
            >
              Total Winged Lights
            </Typography>
            <Typography
              variant="small"
              color="white"
              className="flex text-center font-normal opacity-80"
            >
              sa pinakahuling tala{' '}
              {WL_COUNT_DATE_UPDATED === dateFormat ? 'ngayong' : 'noong'}{' '}
              {WL_COUNT_DATE_UPDATED} may &nbsp;
              {TOTAL_WL_COUNT} WL na sa iOS at Android. Sa Playstation ay may{' '}
              {PLAYSTATION_MAX_WL} at sa Steam ay may {STEAM_MAX_WL}
            </Typography>
          </div>
        }
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <div className="flex justify-center">
          <span className="animate-ping absolute inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4 lg:w-6 lg:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>

            <Typography className="animate-ping text-white font-light lg:font-bold text-xs lg:text-lg">
              {TOTAL_WL_COUNT}
            </Typography>
          </span>
          <span className="relative inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 lg:w-6 lg:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>

            <Typography className="font-light lg:font-bold text-xs lg:text-lg">
              {TOTAL_WL_COUNT}
            </Typography>
          </span>
        </div>
      </Tooltip>
    )
  }

  const screenSize = useScreenSize()

  // console.log(getAllInLocalStorage)

  return (
    <div className="">
      <AnnouncementModal />
      <figure className="relative carousel-image w-full h-full my-6 px-1">
        <AnnouncementCarousel />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border-none bg-[#233d4d]/80 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography
              color="white"
              className="font-light lg:font-bold text-xs lg:text-lg"
            >
              Maligayang Paglipad Skykid!
            </Typography>
            <Typography className="mt-1 font-light text-[#fe7f2d] lg:font-bold text-xs lg:text-lg ">
              {formattedToday}
            </Typography>
          </div>
          <div>
            <Typography
              color="white"
              className="font-light lg:font-bold text-xs lg:text-lg"
            >
              Max Total Wings
            </Typography>
            <Chip
              value={wingLightMaxCountChip()}
              // variant="outlined"
              className="rounded-full text-md text-[#233d4d] bg-[#fe7f2d] font-black"
            />
          </div>
        </figcaption>
      </figure>
      <Clock />
      {/* <Countdown /> */}
      <div className="flex flex-wrap justify-center my-5 md:my-20">
        <SkyClock />
      </div>
      {/* Test */}
      {/* <TestFile /> */}
      {/* Test */}
      {/* Map Cards */}
      <div className="flex flex-wrap justify-center my-5 md:my-20">
        <div>
          <Typography variant="h1" className="text-[#fe7f2d]">
            Maps
          </Typography>
        </div>
        {screenSize < 1440 ? (
          maps.map((map) => {
            return <MapCardContainer {...map} key={map.id} />
          })
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slideshadows
            loop={true}
            effect="coverflow"
            className="py-5"
          >
            {maps.map((map) => {
              return (
                <SwiperSlide zoom={true}>
                  <MapCardContainer {...map} key={map.id} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}
      </div>
      {/* Map Cards */}

      {/* Winged Lights */}
      <div className="md:w-full bg-[#233d4d] text-[#fe7f2d] my-5 md:my-20 pt-10 rounded-3xl border-b-2 border-[#fe7f2d]">
        <WingedLightIntro />
        <Link to={`/winged-lights`}>
          <Button
            size="lg"
            color="gray"
            className="theme-button my-20"
            ripple={true}
            fullWidth={false}
          >
            View Locations
          </Button>
        </Link>
      </div>
      {/* Winged Lights */}

      {/* Map Shrines */}
      <div className="my-5 md:my-20 w-96 md:w-full">
        <MapShrineIntro />
        <Link to={`/map-shrines`}>
          <Button
            size="lg"
            color="gray"
            className="theme-button my-20"
            ripple={true}
            fullWidth={false}
          >
            View Locations
          </Button>
        </Link>
      </div>
      {/* Map Shrines */}

      {/* Dye Locations */}
      <div className="my-5 md:my-20 py-10 md:w-full bg-[#233d4d] text-[#fe7f2d] rounded-3xl border-b-2 border-[#fe7f2d]">
        <DyeLocations />
      </div>
      {/* Dye Locations */}

      {/* Traveling Spirits */}
      {/* <TravellingSpirits /> */}
      {/* Traveling Spirits */}

      {/* Veterans */}
      <Typography variant="h1" className="text-[#fe7f2d]">
        Veterans Coming Soon...
      </Typography>
      {/* Veterans */}

      {/* <div className="my-6 w-96 md:w-full">
        <LatestTSVisit />
      </div> */}
      <div className="my-5 md:my-20 w-96 md:w-full text-[#fe7f2d]">
        <Testimonials />
      </div>
      <FaQ />
    </div>
  )
}

export default HomeSpace
