import { Button, Typography } from '@material-tailwind/react'

const Turtle = () => {
  return (
    <>
      <Typography>
        Nagsisimula ang Turtle sa{' '}
        <span className="text-red-400">ODD Numbers na Oras </span>na may&nbsp;
        <span className="text-amber-700 font-extrabold">:55</span>&nbsp;minuto,
        Halimbawa&nbsp;
        <span className="text-red-400">1</span>
        <span className="text-amber-700 font-extrabold">:55</span>, &nbsp;
        <span className="text-red-400">3</span>
        <span className="text-amber-700 font-extrabold">:55</span>, &nbsp;
        <span className="text-red-400">5</span>
        <span className="text-amber-700 font-extrabold">:55</span>, &nbsp;
        <span className="text-red-400">7</span>
        <span className="text-amber-700 font-extrabold">:55</span>, &nbsp;
        <span className="text-red-400">9</span>
        <span className="text-amber-700 font-extrabold">:55</span>, &nbsp;
        <span className="text-red-400">11</span>
        <span className="text-amber-700 font-extrabold">:55</span>. At tumatakbo
        lamang ito ng{' '}
        <span className="text-amber-700 font-extrabold">
          sampung (10) minuto
        </span>
        . Mahahanap mo ito sa Sanctuary Islands, dako sa mga maliliit na isla,
        ng Daylight Prairie | Ikalawang Mapa.
      </Typography>
      <Button className="bg-gradient-to-r from-blue-900 to-purple-900 mt-4">
        Read More
      </Button>
    </>
  )
}

export default Turtle
