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
  CheckBadgeIcon,
} from '@heroicons/react/24/solid'
import {
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { maps } from '../../data/maps'
import AccordionSeason2019 from './AccordionSeason2019'
import AccordionSeason2020 from './AccordionSeason2020'
import AccordionSeason2021 from './AccordionSeason2021'
import AccordionSeason2022 from './AccordionSeason2022'
import AccordionSeason2023 from './AccordionSeason2023'
import AccordionSeason2024 from './AccordionSeason2024'
import AccordionSeason2025 from './AccordionSeason2025'
import AccordionSeason2026 from './AccordionSeason2026'
import { Link } from 'react-router-dom'

const SideBar = ({ screenSize }) => {
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const [curUrl, setCurUrl] = useState('')

  return (
    <div className="sticky top-24 h-fit w-full max-w-[20rem] p-4 pb-16 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-50">
      <div className="mb-2 gap-4 p-4">
        <Typography variant="h5" className="text-[#233d4d]">
          Dashboard
        </Typography>
      </div>
      <List className="pb-40">
        <Accordion
          className="text-[#233d4d]"
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform  ${
                open === 1 ? 'rotate-180' : ''
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 p-3 hover:text-[#fe7f2d] transition-colors ${
                open === 1 ? 'text-[#fe7f2d]' : ''
              }`}
            >
              <ListItemPrefix className="">
                <GlobeAsiaAustraliaIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className={`mr-auto`}>Maps</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              {maps.map((map) => {
                return (
                  <Link
                    to={`/${map.pageRoute}`}
                    className=" flex justify-center"
                    key={map.id}
                  >
                    <ListItem
                      selected={map.id}
                      className={`text-[#233d4d] hover:text-[#fe7f2d] `}
                    >
                      <Typography>{map.title}&nbsp;</Typography>

                      <ListItemSuffix>
                        <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                      </ListItemSuffix>
                    </ListItem>
                  </Link>
                )
              })}
            </List>
          </AccordionBody>
        </Accordion>

        <hr className="my-2 border-[#fe7f2d]" />

        <AccordionSeason2026 open={open} handleOpen={handleOpen} />
        <AccordionSeason2025 open={open} handleOpen={handleOpen} />
        <AccordionSeason2024 open={open} handleOpen={handleOpen} />
        <AccordionSeason2023 open={open} handleOpen={handleOpen} />
        <AccordionSeason2022 open={open} handleOpen={handleOpen} />
        <AccordionSeason2021 open={open} handleOpen={handleOpen} />
        <AccordionSeason2020 open={open} handleOpen={handleOpen} />
        <AccordionSeason2019 open={open} handleOpen={handleOpen} />

        <hr className="my-2 border-[#fe7f2d]" />

        <ListItem className="">
          <Link to={'/winged-lights'}>
            <div className="flex flex-wrap ">
              <ListItemPrefix>
                <UserGroupIcon className="h-5 w-5" />
              </ListItemPrefix>
              <div>Winged Lights</div>
              <ListItemSuffix>
                <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
              </ListItemSuffix>
            </div>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={'/map-shrines'}>
            <div className="flex flex-wrap">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Map Shrines
              <ListItemSuffix>
                <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
              </ListItemSuffix>
            </div>
          </Link>
        </ListItem>

        {/* <ListItem>
          <Link to={'/veterans'}>
            <div className="flex flex-wrap text-blue-gray-700">
              <ListItemPrefix>
                <CheckBadgeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Veterans
              <ListItemSuffix>
                <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
              </ListItemSuffix>
            </div>
          </Link>
        </ListItem> */}
      </List>
    </div>
  )
}

export default SideBar
