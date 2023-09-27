import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

const CardContainer = ({ label, location, url }) => {
  return (
    <Card className="mt-6 lg:w-72 w-80 mb-5" color="gray" variant="gradient">
      <CardHeader className="relative h-auto flex justify-center bg-blue-gray-900">
        <img src={url} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="white" className="mb-2">
          {label}
        </Typography>
        <Typography>{location}</Typography>
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Typography variant="h6" className="">
          Lipad at Hanapin!
        </Typography>
      </CardFooter> */}
    </Card>
  )
}

export default CardContainer
