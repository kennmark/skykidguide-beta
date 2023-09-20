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
  const google_pretext = 'https://drive.google.com/uc?export=view&id='

  return (
    <Card className="mt-6 lg:w-72 w-80">
      <CardHeader className="relative h-56 flex justify-center bg-blue-gray-900">
        <img src={url} alt="card-image" width={200} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {label}
        </Typography>
        <Typography>{location}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="h5">Lipad at Hanapin!</Typography>
      </CardFooter>
    </Card>
  )
}

export default CardContainer
