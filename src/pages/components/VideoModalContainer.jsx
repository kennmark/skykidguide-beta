import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react'

const VideoModalContainer = ({
  handleOpen,
  open,
  spirit_guide_video_url,
  spirit_name,
}) => {
  return (
    <>
      <Dialog
        className="bg-gray-900"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-gray-200">
          Spirit Guide Video - {spirit_name}
        </DialogHeader>
        <DialogBody className="h-80 drop-shadow-2xl">
          <iframe
            className="w-full h-full"
            src={spirit_guide_video_url}
            title={`${spirit_name} Sky - Children of the Light`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 hover:shadow-lg"
            onClick={handleOpen}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default VideoModalContainer
