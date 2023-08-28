import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from '@material-tailwind/react'
import SkyClockContainer from './components/SkyClockContainer'
import { useState } from 'react'

const SkyClock = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((cur) => !cur)
  return (
    <>
      <Button
        onClick={toggleOpen}
        variant="gradient"
        className="bg-gradient-to-r from-blue-900 to-purple-900 mb-4"
      >
        Open SkyClock Schedules
      </Button>
      <Collapse open={open}>
        <SkyClockContainer />
      </Collapse>
    </>
  )
}

export default SkyClock
