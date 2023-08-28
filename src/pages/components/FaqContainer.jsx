import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from '@material-tailwind/react'
import { useState } from 'react'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

const FaqContainer = ({ id, headerTitle, body }) => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
      <AccordionHeader
        onClick={() => handleOpen(id)}
        className={`border-b-0 text-white/90 hover:text-pink-400 transition-colors ${
          open === id ? 'text-blue-500 hover:!text-pink-400' : ''
        }`}
      >
        {headerTitle}
      </AccordionHeader>
      <AccordionBody className="text-white/90 text0s">{body}</AccordionBody>
    </Accordion>
  )
}

export default FaqContainer
