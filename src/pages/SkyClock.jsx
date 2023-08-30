import { Collapse, Button, Card, Typography } from '@material-tailwind/react'
import { Bars3Icon, ClockIcon } from '@heroicons/react/24/solid'
import SkyClockContainer from './components/SkyClockContainer'
import { useEffect, useState } from 'react'

const SkyClock = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((cur) => !cur)

  return (
    <>
      <Button
        onClick={toggleOpen}
        variant="gradient"
        className="bg-gradient-to-r from-blue-900 to-purple-900 mb-4 flex items-center"
      >
        {!open ? (
          <Bars3Icon className="h-6 w-6 text-gray-50 stroke-2" />
        ) : (
          <ClockIcon className="h-6 w-6 text-gray-50 stroke-2" />
        )}
        <Typography className="text-lg font-bold">
          &nbsp; SkyClock &nbsp;
        </Typography>
      </Button>
      <Collapse open={open}>
        <SkyClockContainer />
      </Collapse>
    </>
  )
}

export default SkyClock
