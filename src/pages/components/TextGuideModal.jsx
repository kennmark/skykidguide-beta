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

export function TextGuideModal({ label, handleOpen, open, direction = [] }) {
  const step1 = direction[0]
  const step2 = direction[1]
  const step3 = direction[2]
  const step4 = direction[3]
  const step5 = direction[4]

  return (
    <>
      <Dialog
        className="bg-gray-900 bg-opacity-80 border-y-2 border-amber-600"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="white">
            Text Guide - {label}
          </Typography>
          <IconButton color="white" variant="text" onClick={handleOpen}>
            <XMarkIcon className="h-6 w-6 text-amber-600" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="pr-2 h-fit">
          <div className="w-fit">
            <Typography variant="h6" color="amber">
              Step 1
            </Typography>
            <Typography className="text-white text-md">{step1}</Typography>
            {step2 && (
              <>
                <Typography variant="h6" color="amber">
                  Step 2
                </Typography>
                <Typography className="text-white text-md">{step2}</Typography>
              </>
            )}
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
            {step5 && (
              <>
                <Typography variant="h6" color="amber">
                  Step 5
                </Typography>
                <Typography className="text-white text-md">{step5}</Typography>
              </>
            )}
          </div>
        </DialogBody>
      </Dialog>
    </>
  )
}
