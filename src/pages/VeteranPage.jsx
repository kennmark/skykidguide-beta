import React from 'react'
import { SkykidHero } from '../data/skykidHeroData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Typography } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'

const VeteranPage = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-5">
        <SideBarContainer />
      </div>
      <div className="h-fit w-full my-5 px-5">
        <Typography variant="h2" className="pb-5">
          The Veterans
        </Typography>
        <Typography className="mt-4">
          Veteran Badge is being awarded to SkyPH members who first willingly
          joined the program conducted by the Admins and Moderators of the SkyPH
          group. Veteran Badge is for SkyPH members only and those who passed
          the qualifying series of tests and interview. Veteran / Professional
          Sky Player will be called SkykidHero.
        </Typography>
        <div className="flex justify-center">
          {SkykidHero.map((hero, index) => (
            <div key={index}>
              {hero.fullname}
              <LazyLoadImage src={hero.avatar_img} width={220} />
            </div>
          ))}
        </div>
      </div>

      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default VeteranPage
