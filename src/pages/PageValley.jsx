import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
} from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import { useState } from 'react'
import MapTabHeaderContainer from './components/MapTabHeaderContainer'
import { valley } from '../data/valleyData'
import SpiritCardContainer from './components/SpiritCardContainer'
import CardContainer from './components/CardContainer'
import PageHeaderContainer from './components/PageHeaderContainer'
import { GIF_VALLEY, VALLEY_ALT } from '../exports/mapGIFs'

const PageValley = () => {
  const [activeTab, setActiveTab] = useState('regular_spirits')

  return (
    <div className="flex justify-center">
      <div>
        <SideBarContainer />
      </div>
      <div className="justify-start w-full">
        <PageHeaderContainer
          imgUrl={GIF_VALLEY}
          alt={VALLEY_ALT}
          height={25}
          width={75}
          title={'Valley of Triumph'}
        />
        <Tabs id="custom-animation" value={activeTab}>
          <TabsHeader
            variant="gradient"
            className="bg-gradient-to-r from-blue-900 to-purple-900 flex items-center"
          >
            {valley.map((headerTab, index) => {
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
          {valley.map((body, index) => {
            return (
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
                key={index}
              >
                <TabPanel key={index} value={body.value}>
                  <div className="text-gray-100 pb-5">{body.desc}</div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {body.spirits?.map((spirit, index) => {
                      return <SpiritCardContainer {...spirit} key={index} />
                    })}
                    {body.winged_lights?.map((wingedLight, index) => {
                      return (
                        <CardContainer
                          label={wingedLight.wl_label}
                          location={wingedLight.wl_location}
                          url={wingedLight.wl_url}
                          key={index}
                        />
                      )
                    })}
                    {body.map_shrines?.map((mapShrine) => {
                      return (
                        <CardContainer
                          label={mapShrine.shrine_label}
                          location={mapShrine.shrine_location}
                          url={mapShrine.shrine_url}
                          key={index}
                        />
                      )
                    })}
                  </div>
                </TabPanel>
              </TabsBody>
            )
          })}
        </Tabs>
      </div>
    </div>
  )
}

export default PageValley
