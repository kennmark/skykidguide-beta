import { Button, Typography } from '@material-tailwind/react'
import { useState } from 'react'

const Grandma = ({ dtsValue }) => {
  const [daylightTimeSaving, setDaylightTimeSaving] = useState(dtsValue)

  return (
    <>
      {!daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Nagsisimula ang Grandma sa{' '}
            <span className="text-red-400">ODD Numbers na Oras </span> at may
            &nbsp;
            <span className="text-amber-700 font-extrabold">:35</span> minuto,
            Halimbawa&nbsp;
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
            <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
            At tumatagal lamang ito ng{' '}
            <span className="text-amber-700 font-extrabold">
              sampung (10) minuto
            </span>
            . Mahahanap mo ito sa Sunny Forest - Loob ng malaking puno ng Hidden
            Forest | Ikatlong Mapa.
          </Typography>
        </div>
      )}
      {daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            <span className="text-red-400">EVEN Numbers na Oras </span> at may
            &nbsp;
            <span className="text-red-400">2</span>
            <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
            <span className="text-red-400">4</span>
            <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
            <span className="text-red-400">6</span>
            <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
            <span className="text-red-400">8</span>
            <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
            <span className="text-red-400">10</span>
            <span className="text-amber-700 font-extrabold">:35</span>, &nbsp;
            <span className="text-red-400">12</span>
            <span className="text-amber-700 font-extrabold">:35</span>. At
            tumatagal lamang ito ng{' '}
            <span className="text-amber-700 font-extrabold">
              sampung (10) minuto
            </span>
            . Mahahanap mo ito sa Sunny Forest - Loob ng malaking puno ng Hidden
            Forest | Ikatlong Mapa.
          </Typography>
        </div>
      )}
    </>
  )
}

export default Grandma
