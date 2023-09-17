import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react'
import { useState } from 'react'

export function BuyMeACoffee() {
  return (
    <Card
      className="w-full max-w-[48rem] flex-row"
      color="gray"
      variant="gradient"
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://drive.google.com/uc?export=view&id=1GmbDX557dDf-oeWO9demoBG8kpBpbRhj"
          alt="card-image"
          className="h-full w-full object-cover grayscale opacity-80"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="amber" className="mb-4 uppercase">
          Buy Me A Coffee?
        </Typography>
        <Typography color="white" className="mb-8 font-normal">
          Please support my work by clicking the button below.
        </Typography>
        <div className="flex justify-center">
          <a href="https://www.buymeacoffee.com/KennDev" target="_blank">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=KennDev&button_colour=068dd0&font_colour=ffffff&font_family=Comic&outline_colour=ffffff&coffee_colour=FFDD00" />
          </a>
        </div>
      </CardBody>
    </Card>
  )
}
