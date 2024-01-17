import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Spinner,
} from '@material-tailwind/react'
import kennAvatar from '../../assets/images/team/kenndev.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
        className="m-0 w-2/5 shrink-0 rounded-r-none "
      >
        <LazyLoadImage
          src={kennAvatar}
          alt="card-image"
          className="h-full w-full object-cover grayscale opacity-80 "
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
            <LazyLoadImage
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=KennDev&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
              placeholderSrc={
                <Spinner className="h-10 w-10 text-gray-900/50" />
              }
              effect="blur"
            />
          </a>
        </div>
        <div>OR</div>
        <div>
          <a href="https://www.buymeacoffee.com/KennDev" target="_blank">
            Buy Me a Coffee
          </a>
        </div>
      </CardBody>
    </Card>
  )
}
