import React, { useEffect } from 'react'
import { maps } from '../data/maps'
import { useState } from 'react'
import { Typography } from '@material-tailwind/react'
import MapCardContainer from './components/MapCardContainer'
// import ErrorBoundary from './components/ErrorBoundary'
import AnnouncementModal from './AnnouncementModal'
import FaQ from './FaQ'
import homescreen from '../assets/images/home.jpg'

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

  const today = new Date()
  const year = today.getFullYear()
  let mm = monthName[today.getMonth()]
  let dd = today.getDate()
  if (dd < 10) dd = '0' + dd
  const formattedToday = mm + ' ' + dd + ', ' + year

  return (
    <div>
      <AnnouncementModal />
      <figure className="relative h-96 w-full my-6 px-6 ">
        <img
          className="h-full w-full rounded-xl object-cover object-center "
          src={homescreen}
          alt="Sky home screen"
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border-none bg-gradient-to-br py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h5" color="white">
              Maligayang Paglipad Skykid!
            </Typography>
            <Typography color="white" className="mt-2 font-normal">
              {formattedToday}
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="flex flex-wrap justify-center">
        {maps.map((map) => {
          return <MapCardContainer {...map} key={map.id} />
        })}
      </div>
      <FaQ />
    </div>
  )
}

export default HomeSpace
