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
import { TextGuideModal } from './TextGuideModal'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CardContainer = ({ label, location, url }) => {
  const [open, setOpen] = useState(false)
  const [openTextModal, setOpenTextModal] = useState(false)

  const handleOpen = () => setOpen((cur) => !cur)
  const handleTextGuideOpen = () => setOpenTextModal(!openTextModal)

  return (
    <>
      <Card className="mt-6 lg:w-72 w-80 mb-5 " color="gray" variant="gradient">
        <CardHeader
          className="relative h-auto flex justify-center bg-blue-gray-900 cursor-pointer"
          onClick={handleOpen}
        >
          <LazyLoadImage
            src={url}
            alt={label}
            title={label}
            className="wl-ms-imgs"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            {label}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleTextGuideOpen}
            ripple={true}
            fullWidth={true}
            className="bg-gradient-to-r rounded-tl-none rounded-bl-none from-purple-900 to-blue-900 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 hover:shadow-lg"
          >
            Text Guide
          </Button>
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
            alt={label}
            className="w-full object-cover object-center rounded-3xl border-amber-500 border-2"
            src={url}
          />
        </DialogBody>
      </Dialog>
      <TextGuideModal
        direction={location}
        handleOpen={handleTextGuideOpen}
        open={openTextModal}
        label={label}
      />
    </>
  )
}

export default CardContainer
