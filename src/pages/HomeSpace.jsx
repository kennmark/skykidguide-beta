import React from 'react'
import { maps } from '../data/maps'
import {
  Typography,
  Carousel,
  Chip,
  Tooltip,
  Spinner,
} from '@material-tailwind/react'
import MapCardContainer from './components/MapCardContainer'
// import ErrorBoundary from './components/ErrorBoundary'
import AnnouncementModal from './AnnouncementModal'
import FaQ from './FaQ'
import SkyClock from './SkyClock'
import { Clock } from '../pages/components/Clock'
import carousel1 from '../assets/images/home-carousel/home-slideshow-1.jpg'
import carousel2 from '../assets/images/home-carousel/home-slideshow-2.jpg'
import carousel3 from '../assets/images/home-carousel/home4.jpg'
import carousel4 from '../assets/images/home-carousel/interest_check.jpg'
import carousel5 from '../assets/images/events/SkyFest-2024.jpg'
import carousel6 from '../assets/images/home-carousel/Season-of-Duets.jpg'
import { WL_COUNT_DATE_UPDATED, TOTAL_WL_COUNT } from '../exports/constants'

import { Countdown } from './components/Countdown'
import Testimonials from './components/Testimonials'
import LatestTSVisit from './components/LatestTSVisit'

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
  console.log(dateFormat)
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

  return (
    <div>
      <AnnouncementModal />
      <figure className="relative carousel-image w-full h-full my-6 px-1">
        <Carousel
          autoplay={true}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={carousel1}
            https:alt="image 1"
            className="h-full w-full object-cover rounded-xl"
          />
          <a
            href="https://www.facebook.com/groups/skycotlphofficial"
            target="_blank"
          >
            <img
              src={carousel2}
              https:alt="image 2"
              className="h-full w-full object-cover rounded-xl"
            />
          </a>
          <a href="https://www.youtube.com/@SKYKIDTulongGabay" target="_blank">
            <img
              src={carousel3}
              alt="image 4"
              className="h-full w-full object-cover rounded-xl"
            />
          </a>
          <a
            href="https://www.facebook.com/photo/?fbid=8785224704825145&set=gm.1558774485050173&idorvanity=481394886121477"
            target="_blank"
          >
            <img
              src={carousel4}
              https:alt="Season 22"
              className="h-full w-full object-cover rounded-xl"
            />
          </a>
          <img
            src={carousel5}
            https:alt="SkyFest 2024"
            className="h-full w-full object-cover rounded-xl"
          />
          <img
            src={carousel6}
            https:alt="Season of Duets"
            className="h-full w-full object-cover rounded-xl"
          />
        </Carousel>
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
        {maps.map((map) => {
          return <MapCardContainer {...map} key={map.id} />
        })}
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
