import React, { useState } from 'react'
import MapTabHeaderContainer from '../components/MapTabHeaderContainer'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Typography,
  Spinner,
} from '@material-tailwind/react'
import SpiritCardContainer from '../components/SpiritCardContainer'
import CardContainer from '../components/CardContainer'
import PageHeaderContainer from '../components/PageHeaderContainer'
import { SideBarContainer } from '../components/SidebarContainer'
import DifficultyCriteria from '../components/DifficultyCriteria'
import { SeasonTabHeader } from '../../data/seasonTabHeader'
import { allSeasons, seasons2025 } from '../../data/seasons'
import ScrollToTop from 'react-scroll-to-top'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SeasonOfRadiance from '../../assets/images/home-carousel/Season-of-Radiance.webp'
import DyeLocations from '../components/DyeLocations'
import DyeAlertMessage from '../components/DyeAlertMessage'

const S25BlueBirdPage = () => {
  const [activeTab, setActiveTab] = useState('info')
  const {
    name,
    time_duration,
    spirit_num,
    ms_num,
    wl_num,
    icon_route,
    quick_info,
    season_spirits,
    winged_lights,
    map_shrines,
    season_type,
  } = seasons2025[1]

  const currentSeasonId = seasons2025.length - 1
  const isCurrentSeason =
    allSeasons.length === seasons2025[currentSeasonId].id ? true : false
  const dateToday = new Date()
  // console.log(seasons2025[currentSeasonId].id, 'Current Season')
  // console.log(allSeasons.length, 'All Season')
  // console.log(isCurrentSeason, 'Current Season?')

  return (
    <div className="flex justify-center">
      <div>
        <SideBarContainer />
      </div>
      <div className="justify-start w-full">
        <PageHeaderContainer
          imgUrl={icon_route}
          alt={name}
          height={25}
          width={75}
          title={name}
          mapIntro={quick_info}
        />
        <Tabs id="custom-animation" value={activeTab}>
          <TabsHeader className="bg-[#233d4d] flex items-center">
            {SeasonTabHeader.map((headerTab, index) => {
              return (
                <MapTabHeaderContainer
                  {...headerTab}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  key={index}
                />
              )
            })}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
            key={activeTab}
          >
            <TabPanel key={activeTab} value={activeTab}>
              {activeTab === 'info' && (
                <div className="text-gray-100 pb-5">
                  <LazyLoadImage
                    src={SeasonOfRadiance}
                    alt="Season of Radiance"
                    title="Season of Radiance"
                    placeholderSrc={
                      <Spinner className="h-10 w-10 text-gray-900/50" />
                    }
                    effect="blur"
                    className="rounded-xl"
                  />
                  <Typography>
                    {quick_info}{' '}
                    {time_duration === dateToday
                      ? 'Nagsimula ito noong '
                      : 'Magsisimula ito ngayong '}
                    {time_duration}.{' '}
                    {spirit_num > 0
                      ? `May ${spirit_num} na spirits sa season na
                    ito. `
                      : `Walang spirit sa season na ito. `}{' '}
                    At {wl_num ? 'May ' + wl_num : '(0) o walang'}
                    &nbsp; winged light(s). Sa season na ito ay
                    {ms_num ? ' may ' + ms_num : ' (0) o walang'} &nbsp;map
                    shrine(s).
                  </Typography>{' '}
                  <br />
                </div>
              )}

              {/* <div className="flex flex-wrap justify-center gap-3">
                {activeTab === 'season_spirits' &&
                  season_spirits?.map((spirit) => {
                    return (
                      <SpiritCardContainer
                        {...spirit}
                        icon_route={icon_route}
                        key={spirit.spirit_id}
                        season={name}
                        isCurrentSeason={isCurrentSeason}
                      />
                    )
                  })}
                {activeTab === 'winged_lights' &&
                  winged_lights?.map((wingedLight) => {
                    return (
                      <CardContainer
                        label={wingedLight.wl_label}
                        location={wingedLight.wl_location}
                        url={wingedLight.wl_url}
                        key={wingedLight.wl_label}
                      />
                    )
                  })}
                {activeTab === 'map_shrines' &&
                  map_shrines?.map((mapShrine) => {
                    return (
                      <CardContainer
                        label={mapShrine.shrine_label}
                        location={mapShrine.shrine_location}
                        url={mapShrine.shrine_url}
                        key={mapShrine.shrine_label}
                      />
                    )
                  })}
              </div> */}
            </TabPanel>
          </TabsBody>
        </Tabs>
        <div className="w-full">
          <DifficultyCriteria />
        </div>
      </div>
      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default S25BlueBirdPage
