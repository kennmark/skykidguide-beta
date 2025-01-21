import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Dialog,
  DialogBody,
} from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const DyeCardContainer = ({ imgUrl, order, imgName, imgDesc, icon }) => {
  // console.log(id, imgUrl, order, imgName, imgDesc)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <>
      <Card className="mt-6 lg:w-72 w-80 mb-5" color="gray" variant="gradient">
        <CardHeader
          className="relative h-auto flex justify-center bg-blue-gray-900 cursor-pointer"
          onClick={handleOpen}
        >
          <LazyLoadImage
            src={imgUrl}
            alt={imgName}
            title={imgName}
            className="wl-ms-imgs"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="white">
            {imgName}
          </Typography>
          <Typography variant="lead" color="white" className="mt-3 font-normal">
            {imgDesc}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Natali Craig">
              <Avatar
                size="sm"
                variant="circular"
                src={icon}
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            {/* <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip> */}
          </div>
          <Typography
            className="font-normal"
            color={order === 'Even' ? 'amber' : 'green'}
          >
            {order} Hours
          </Typography>
        </CardFooter>
      </Card>

      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="rounded-3xl"
      >
        <DialogBody divider={true} className="p-0 w-full rounded-3xl">
          <img
            className="w-full object-cover object-center rounded-3xl border-amber-500 border-2"
            src={imgUrl}
          />
        </DialogBody>
      </Dialog>
    </>
  )
}

export default DyeCardContainer
