import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Spinner,
} from '@material-tailwind/react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { seasons2019 } from '../../data/seasons'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AccordionSeason2019 = ({ open, handleOpen }) => {
  return (
    <Accordion
      open={open === 2}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === 2 ? 'rotate-180' : ''
          }`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 2}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-b-0 p-3"
        >
          <ListItemPrefix>
            <SparklesIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography
            color="blue-gray"
            className={`mr-auto font-normal transition-colors ${
              open === 2 ? 'text-amber-700 hover:!text-amber-900' : ''
            }`}
          >
            Seasons in 2019
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0">
          {seasons2019
            .slice()
            .reverse()
            .map((season) => {
              return (
                <Link
                  to={`/${season.page_route}`}
                  className=" text-blue-gray-900"
                  key={season.id}
                >
                  <ListItem className="hover:text-amber-700">
                    <ListItemPrefix>
                      <LazyLoadImage
                        src={season.icon_route}
                        alt={season.name}
                        width={35}
                        placeholderSrc={
                          <Spinner className="h-10 w-10 text-gray-900/50" />
                        }
                        effect="blur"
                      />
                    </ListItemPrefix>
                    {season.name}
                  </ListItem>
                </Link>
              )
            })}
        </List>
      </AccordionBody>
    </Accordion>
  )
}

export default AccordionSeason2019
