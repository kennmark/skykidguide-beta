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
import { WL_COUNT_DATE_UPDATED, TOTAL_WL_COUNT } from '../exports/constants'

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

  const starIcon = () => {
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
              {TOTAL_WL_COUNT} WL na sa iOS at Android.
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

  return (
    <div>
      <AnnouncementModal />
      <figure className="relative carousel-image w-full h-full my-6 px-1">
        <AnnouncementCarousel />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border-none bg-gradient-to-br py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography
              color="white"
              className="font-light lg:font-bold text-xs lg:text-lg"
            >
              Maligayang Paglipad Skykid!
            </Typography>
            <Typography
              color="amber"
              className="mt-1 font-light lg:font-bold text-xs lg:text-lg bg-gradient-to-r from-purple-500/0 via-brown-900/80 to-purple-500/0"
            >
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
              color="amber"
              value={starIcon()}
              // variant="outlined"
              className="rounded-full text-md"
            />
          </div>
        </figcaption>
      </figure>
      <Clock />
      {/* <Countdown /> */}
      <div className="flex flex-wrap justify-center">
        <SkyClock />
      </div>
      <div>
        <Typography variant="h2" className="pt-5">
          Maps
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center">
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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {maps.map((map) => {
              return (
                <SwiperSlide zoom={true} className="flex justify-center">
                  <MapCardContainer {...map} key={map.id} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}
      </div>
      <div className="my-6 w-96 md:w-full border-t border-blue-gray-50">
        <WingedLightIntro />
        <Link to={`/winged-lights`}>
          <Button
            size="lg"
            color="gray"
            className="bg-gradient-to-r from-deep-orange-800 to-brown-900 shadow-lg shadow-orange-900/50 hover:scale-[1.02] hover:shadow-orange-900 hover:shadow-xl mt-5"
            ripple={true}
            fullWidth={false}
          >
            View Locations
          </Button>
        </Link>
      </div>
      <div className="my-6 w-96 md:w-full border-t border-blue-gray-50">
        <MapShrineIntro />
        <Link to={`/map-shrines`}>
          <Button
            size="lg"
            color="gray"
            className="bg-gradient-to-r from-deep-orange-800 to-brown-900 shadow-lg shadow-orange-900/50 hover:scale-[1.02] hover:shadow-orange-900 hover:shadow-xl mt-5"
            ripple={true}
            fullWidth={false}
          >
            View Locations
          </Button>
        </Link>
      </div>
      <div className="my-6 w-96 md:w-full">
        <LatestTSVisit />
      </div>
      <div className="my-6 w-96 md:w-full">
        <Testimonials />
      </div>
      <FaQ />
    </div>
  )
}

export default HomeSpace
