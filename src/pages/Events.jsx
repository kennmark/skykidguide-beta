import { Typography, Card, CardHeader } from '@material-tailwind/react'
import DOB from '../assets/images/events/DaysOfBloom.jpg'
import FaQ from './FaQ'

const Events = () => {
  return (
    <>
      <Typography variant="h1">Events</Typography>
      <div className="ml-10 pt-10">
        <Card
          className="pt-2 pb-4 w-11/12 pr-5"
          variant="gradient"
          color="gray"
        >
          <CardHeader color="blue-gray" className="relative h-auto">
            <img src={DOB} alt="card-image" />
          </CardHeader>
          <Typography variant="h4" className="flex justify-start pl-10 mb-5">
            Days of Bloom 2024
          </Typography>
          <Typography variant="h6" className="flex justify-start pl-16">
            March 25 - April 14, 2023 Dont forget the 5 tix daily!
          </Typography>
          <Typography variant="h6" className="flex justify-start pl-16">
            1st week - 3 tix kelangan tumayo ka kung saan tumatama ang kidlat
            ⚡️, 1 sa Days of Event Guide after interacting, 1 nasa area ng
            event. 2nd-3rd week - 4 nasa area ng event at 1 sa Event Guide after
            interacting. Magmasid sa mga little creatures sa ulan dahil
            pagdating ng 2nd week, pwede kang magtransform bilang 🪼 jellyfish.
            Lumapit ka lng sa event guide at may meditation circle kang
            makikita. At sa forgotten Ark naman ay may meditation circle din
            upang magtransform ka into butterfly!🦋 Days of Bloom Capes can be
            bought sa Aviary Event Room is as always.
          </Typography>
        </Card>
      </div>
      <FaQ />
    </>
  )
}

export default Events
