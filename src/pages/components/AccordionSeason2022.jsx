import React, { useState } from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { seasons2022 } from '../../data/seasons'
const AccordionSeason2022 = ({ open, handleOpen }) => {
  return (
    <Accordion
      open={open === 5}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === 5 ? 'rotate-180' : ''
          }`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 5}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="border-b-0 p-3"
        >
          <ListItemPrefix>
            <SparklesIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal">
            Seasons in 2022
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0">
          {seasons2022.map((season) => {
            return (
              <ListItem key={season.id}>
                <ListItemPrefix>
                  <img src={season.icon_route} alt={season.name} width={35} />
                </ListItemPrefix>
                {season.name}
              </ListItem>
            )
          })}
        </List>
      </AccordionBody>
    </Accordion>
  )
}

export default AccordionSeason2022
