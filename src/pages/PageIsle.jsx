import { useState, useEffect } from 'react'
import { Tabs, TabsHeader, TabsBody, TabPanel } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import MapTabHeaderContainer from './components/MapTabHeaderContainer'
import { isleOfDawn } from '../data/isleOfDawnData'
import { maps } from '../data/maps'
import SpiritCardContainer from './components/SpiritCardContainer'
import CardContainer from './components/CardContainer'
import { GIF_ISLE, ISLE_ALT } from '../exports/mapGIFs'
import PageHeaderContainer from './components/PageHeaderContainer'
import DifficultyCriteria from './components/DifficultyCriteria'
import ScrollToTop from 'react-scroll-to-top'

const PageIsle = () => {
  const [activeTab, setActiveTab] = useState('regular_spirits')
  const mapTitle = maps.map((mapName) =>
    mapName.id === 2 ? mapName.title : ''
  )
  const mapIntro = maps.map((intro) => (intro.id === 2 ? intro.map_intro : ''))

  const [checkedSpirits, setCheckedSpirits] = useState(() => {
    const saved = localStorage.getItem('checkedSpirits')
    const initialValue = JSON.parse(saved) || {} // Default to empty object if no saved data
    return initialValue
  })
  // console.log({ checkedSpirits })

  useEffect(() => {
    localStorage.setItem('checkedSpirits', JSON.stringify(checkedSpirits))
  }, [checkedSpirits])

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target
    setCheckedSpirits((prevState) => ({ ...prevState, [name]: checked }))
  }

  return (
    <div className="flex justify-center">
      <div>
        <SideBarContainer />
      </div>
      <div className="w-full">
        <PageHeaderContainer
          imgUrl={GIF_ISLE}
          alt={ISLE_ALT}
          height={25}
          width={75}
          title={mapTitle}
          mapIntro={mapIntro}
        />
        <Tabs id="custom-animation" value={activeTab}>
          <TabsHeader className="bg-[#233d4d] flex items-center">
            {isleOfDawn.map((headerTab, index) => {
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
          {isleOfDawn.map((body, index) => {
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
                    {body.spirits?.map((spirit) => {
                      return (
                        <SpiritCardContainer
                          {...spirit}
                          key={spirit.spirit_id}
                          checkedSpirits={checkedSpirits}
                          handleCheckboxChange={handleCheckboxChange}
                        />
                      )
                    })}
                    {body.winged_lights?.map((wingedLight) => {
                      return (
                        <CardContainer
                          label={wingedLight.wl_label}
                          location={wingedLight.wl_location}
                          url={wingedLight.wl_url}
                          key={wingedLight.wl_label}
                        />
                      )
                    })}
                    {body.map_shrines?.map((mapShrine) => {
                      return (
                        <CardContainer
                          label={mapShrine.shrine_label}
                          location={mapShrine.shrine_location}
                          url={mapShrine.shrine_url}
                          key={mapShrine.shrine_label}
                        />
                      )
                    })}
                  </div>
                </TabPanel>
              </TabsBody>
            )
          })}
        </Tabs>
        <div className="w-full">
          <DifficultyCriteria />
        </div>
      </div>
      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default PageIsle
