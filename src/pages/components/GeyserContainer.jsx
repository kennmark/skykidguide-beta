import { Button, Typography } from '@material-tailwind/react'

const GeyserContainer = () => {
  return (
    <>
      <Typography>
        Nagsisimula ang Geyser sa{' '}
        <span className="text-red-400">ODD Numbers</span>
        <span className="text-amber-700 font-extrabold">:05</span>, Halimbawa
        <span className="text-red-400">1</span>
        <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
        <span className="text-red-400">3</span>
        <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
        <span className="text-red-400">5</span>
        <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
        <span className="text-red-400">7</span>
        <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
        <span className="text-red-400">9</span>
        <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
        <span className="text-red-400">11</span>
        <span className="text-amber-700 font-extrabold">:05</span>. Mahahanap mo
        ito sa Sanctuary Islands ng Daylight Prairie | Ikalawang Mapa.
      </Typography>
      <Button className="bg-gradient-to-r from-blue-900 to-purple-900 mt-4">
        Read More
      </Button>
    </>
  )
}

export default GeyserContainer
