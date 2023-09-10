import { Button, Typography } from '@material-tailwind/react'

const Grandma = () => {
  return (
    <>
      <Typography>
        Nagsisimula ang Grandma sa{' '}
        <span className="text-red-400">ODD Numbers na Oras </span> at may &nbsp;
        <span className="text-amber-700 font-extrabold">:35</span> minuto,
        Halimbawa
        <span className="text-red-400">1</span>
        <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
        <span className="text-red-400">3</span>
        <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
        <span className="text-red-400">5</span>
        <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
        <span className="text-red-400">7</span>
        <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
        <span className="text-red-400">9</span>
        <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
        <span className="text-red-400">11</span>
        <span className="text-amber-700 font-extrabold">:35</span>. At tumatakbo
        lamang ito ng{' '}
        <span className="text-amber-700 font-extrabold">
          sampung (10) minuto
        </span>
        . Mahahanap mo ito sa Sunny Forest - Loob ng malaking puno ng Hidden
        Forest | Ikatlong Mapa.
      </Typography>
      <Button className="bg-gradient-to-r from-blue-900 to-purple-900 mt-4">
        Read More
      </Button>
    </>
  )
}

export default Grandma
