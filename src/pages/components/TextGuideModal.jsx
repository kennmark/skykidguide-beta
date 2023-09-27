import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export function TextGuideModal({
  spirit_name,
  handleOpen,
  open,
  spiritDirection = [],
}) {
  const step1 = spiritDirection[0]
  const step2 = spiritDirection[1]
  const step3 = spiritDirection[2]
  const step4 = spiritDirection[3]

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
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="white">
            Text Guide - {spirit_name}
          </Typography>
          <IconButton color="white" variant="text" onClick={handleOpen}>
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="pr-2 h-fit">
          <div className="w-fit">
            <Typography variant="h6" color="amber">
              Step 1
            </Typography>
            <Typography className="text-white text-md">{step1}</Typography>
            <Typography variant="h6" color="amber">
              Step 2
            </Typography>
            <Typography className="text-white text-md">{step2}</Typography>
            {step3 && (
              <>
                <Typography variant="h6" color="amber">
                  Step 3
                </Typography>
                <Typography className="text-white text-md">{step3}</Typography>
              </>
            )}
            {step4 && (
              <>
                <Typography variant="h6" color="amber">
                  Step 4
                </Typography>
                <Typography className="text-white text-md">{step4}</Typography>
              </>
            )}
          </div>
        </DialogBody>
      </Dialog>
    </>
  )
}
