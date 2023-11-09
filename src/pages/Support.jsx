import { Typography } from '@material-tailwind/react'
import FaQ from './FaQ'
import { BuyMeACoffee } from './components/BuyMeACoffee'

const Support = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center my-10">
        <Typography variant="h5" className="p-10">
          Do you like this website? Your generosity and kindness will inspire me
          more to improve this site.
        </Typography>

        <BuyMeACoffee />
      </div>
      <FaQ />
    </>
  )
}

export default Support
