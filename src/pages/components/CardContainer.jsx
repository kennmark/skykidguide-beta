import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogBody,
} from '@material-tailwind/react'

const CardContainer = ({ label, location, url }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <>
      <Card className="mt-6 lg:w-72 w-80 mb-5 " color="gray" variant="gradient">
        <CardHeader
          className="relative h-auto flex justify-center bg-blue-gray-900 cursor-pointer"
          onClick={handleOpen}
        >
          <img src={url} alt="card-image" className="wl-ms-imgs" />
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

      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="rounded-3xl"
      >
        <DialogBody divider={true} className="p-0 w-full rounded-3xl">
          <img
            alt="card-image"
            className="w-full object-cover object-center rounded-3xl "
            src={url}
          />
        </DialogBody>
      </Dialog>
    </>
  )
}

export default CardContainer
