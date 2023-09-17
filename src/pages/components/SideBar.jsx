import React, { useState } from 'react'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import {
  GlobeAsiaAustraliaIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/solid'
import {
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { maps } from '../../data/maps'
import AccordionSeason2019 from './AccordionSeason2019'
import AccordionSeason2020 from './AccordionSeason2020'
import AccordionSeason2021 from './AccordionSeason2021'
import AccordionSeason2022 from './AccordionSeason2022'
import AccordionSeason2023 from './AccordionSeason2023'
import { BuyMeACoffee } from './BuyMeACoffee'

const Sidebar = () => {
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <div className="h-100vh  w-72 max-w-[20rem] pr-1 pl-5 pb-5 shadow-xl shadow-blue-gray-900/5 mb-7 bg-white">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Typography variant="h5" color="blue-gray">
          Dashboard
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? 'rotate-180' : ''
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <GlobeAsiaAustraliaIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Mapa 1-6
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              {maps.map((map) => {
                return (
                  <ListItem key={map.id}>
                    Mapa {map.id} - {map.title}
                    <ListItemSuffix>
                      <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    </ListItemSuffix>
                  </ListItem>
                )
              })}
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />

        <AccordionSeason2019 open={open} handleOpen={handleOpen} />
        <AccordionSeason2020 open={open} handleOpen={handleOpen} />
        <AccordionSeason2021 open={open} handleOpen={handleOpen} />
        <AccordionSeason2022 open={open} handleOpen={handleOpen} />
        <AccordionSeason2023 open={open} handleOpen={handleOpen} />
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Map Shrines
          <ListItemSuffix>
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          Winged Lights
          <ListItemSuffix>
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </ListItemSuffix>
        </ListItem>
      </List>
      <BuyMeACoffee />
    </div>
  )
}

export default Sidebar
