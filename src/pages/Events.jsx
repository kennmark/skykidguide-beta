import { Typography, Card, CardHeader } from '@material-tailwind/react'
import FaQ from './FaQ'
import EventCard from './components/EventCard'

const Events = () => {
  return (
    <>
      <Typography variant="h1">Events</Typography>
      <EventCard />
      <FaQ />
    </>
  )
}

export default Events
