import { Button, Typography } from '@material-tailwind/react'
import { useState } from 'react'

const AuroraConcert = ({ dtsValue }) => {
  const [daylightTimeSaving, setDaylightTimeSaving] = useState(dtsValue)

  return (
    <>
      {!daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Nagsisimula ang Aurora Concert sa{' '}
            <span className="text-red-400">ODD Numbers na Oras </span>na
            may&nbsp;
            <span className="text-amber-700 font-extrabold">:00</span>
            &nbsp;at minuto,10 (Sampung Minuto) upang maghanap ng mauupuan sa
            concert. Halimbawa&nbsp;
            <span className="text-red-400">1</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">3</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">5</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">7</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">9</span>
            <span className="text-amber-700 font-extrabold">:00</span>&nbsp;
            <span className="text-red-400">11</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            At tumatagal lamang ito ng{' '}
            <span className="text-amber-700 font-extrabold">
              Limangpong (50) minuto
            </span>
            . Makakapunta ka lamang dito kapag ikaw ay may Wings of Aurora o may
            kaibigan kang mayroong Wings of Aurora.
          </Typography>
        </div>
      )}
      {daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Nagsisimula ang Aurora Concert sa{' '}
            <span className="text-red-400">EVEN Numbers na Oras </span>na
            may&nbsp;
            <span className="text-red-400">4</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">8</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">12</span>
            <span className="text-amber-700 font-extrabold">:00</span>. At
            tumatagal lamang ito ng{' '}
            <span className="text-amber-700 font-extrabold">
              Limangpong (50) minuto
            </span>
            . Makakapunta ka lamang dito kapag ikaw ay may Wings of Aurora o may
            kaibigan kang mayroong Wings of Aurora.
          </Typography>
        </div>
      )}
    </>
  )
}

export default AuroraConcert
