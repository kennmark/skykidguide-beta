import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Spinner,
} from '@material-tailwind/react'
import kennAvatar from '../../assets/images/team/kenndev.jpg'
import GCash from '../../assets/images/support/GCash.jpg'
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
          Please support my work through any of the options below.
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
            Buy Me A Coffee
          </a>
        </div>
        <div className="flex flex-wrap justify-center flex-col pt-5">
          <div className="flex justify-center">
            <hr className="my-3 w-36" />
          </div>
          <div>
            <Typography>GCash</Typography>
          </div>
          <div>
            <LazyLoadImage
              src={GCash}
              alt="GCash"
              title="GCash"
              effect="blur"
              className="w-36 md:w-60 max-w-[48rem]"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
