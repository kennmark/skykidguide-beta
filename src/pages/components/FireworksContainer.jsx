import { Button, Typography } from '@material-tailwind/react'

const Fireworks = () => {
  return (
    <>
      <Typography>
        Nagsisimula ang Fireworks sa unang araw ng buwan sa saktong oras na{' '}
        <span className="text-red-400">ODD Numbers na Oras </span>na may&nbsp;
        {/* <span className="text-red-400">EVEN Numbers na Oras </span>na may&nbsp; */}
        <span className="text-amber-700 font-extrabold">:00</span>&nbsp;minuto,
        Halimbawa&nbsp;
        <span className="text-red-400">3</span>
        <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
        <span className="text-red-400">7</span>
        <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
        <span className="text-red-400">11</span>
        <span className="text-amber-700 font-extrabold">:00</span>
        {/* <span className="text-red-400">4</span>
        <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
        <span className="text-red-400">8</span>
        <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
        <span className="text-red-400">12</span>
        <span className="text-amber-700 font-extrabold">:00</span>.  */}
        At tumatagal lamang ito ng{' '}
        <span className="text-amber-700 font-extrabold">
          labing-limang (15) minuto
        </span>
        . Mahahanap mo ito sa Aviary Village | Ika-walong mapa (Iyong nasa
        gitnang portal na nasa dagat kung ikaw ay galing sa old home), dako sa
        portal area kung saan makikita ang fireworks staff.
      </Typography>
    </>
  )
}

export default Fireworks
