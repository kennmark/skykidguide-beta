import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from '@material-tailwind/react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const FaqContainer = ({ id, headerTitle, body, open, handleOpen }) => {
  return (
    <Accordion
      open={open === id}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === id ? 'rotate-180' : ''
          }`}
        />
      }
    >
      <AccordionHeader
        onClick={() => handleOpen(id)}
        className={`border-b-0 text-white/90 text-lg hover:text-pink-400 transition-colors ${
          open === id ? 'text-amber-600 hover:!text-pink-400' : ''
        }`}
      >
        {headerTitle}
      </AccordionHeader>
      <AccordionBody className="text-white/90 text-md">{body}</AccordionBody>
    </Accordion>
  )
}

export default FaqContainer
