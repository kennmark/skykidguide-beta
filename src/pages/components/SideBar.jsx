import React, { useState } from 'react'
import {
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
import { Link } from 'react-router-dom'

const SideBar = ({ screenSize }) => {
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <div className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-50">
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
              <Typography
                color="blue-gray"
                className={`mr-auto font-normal transition-colors ${
                  open === 1
                    ? 'text-blue-500 hover:!text-blue-700 font-semibold'
                    : ''
                }`}
              >
                Mapa 1-7
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              {maps.map((map) => {
                return (
                  <Link
                    to={`/${map.pageRoute}`}
                    className=" flex justify-center text-blue-gray-900"
                    key={map.id}
                  >
                    <ListItem className="hover:text-pink-500">
                      <Typography>
                        {map.id} - {map.title}&nbsp;
                      </Typography>

                      <ListItemSuffix>
                        <ArrowRightOnRectangleIcon className="h-5 w-5" />
                      </ListItemSuffix>
                    </ListItem>
                  </Link>
                )
              })}
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-900" />

        <AccordionSeason2019 open={open} handleOpen={handleOpen} />
        <AccordionSeason2020 open={open} handleOpen={handleOpen} />
        <AccordionSeason2021 open={open} handleOpen={handleOpen} />
        <AccordionSeason2022 open={open} handleOpen={handleOpen} />
        <AccordionSeason2023 open={open} handleOpen={handleOpen} />
        <hr className="my-2 border-blue-gray-900" />
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
      {!screenSize <= window.innerWidth && <BuyMeACoffee />}
    </div>
  )
}

export default SideBar
