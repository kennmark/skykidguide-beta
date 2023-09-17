import { Typography } from '@material-tailwind/react'
import FaQ from './FaQ'
import { BuyMeACoffee } from './components/BuyMeACoffee'

const Support = () => {
  return (
    <>
      <Typography variant="h1" className="p-10">
        Support
      </Typography>

      <BuyMeACoffee />
      <FaQ />
    </>
  )
}

export default Support
