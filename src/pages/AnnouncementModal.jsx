import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react'
import { useState, useEffect } from 'react'

const AnnouncementModal = () => {
  const [open, setOpen] = useState(true)
  const handleOpen = () => setOpen(!open)
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const today = new Date()
  const year = today.getFullYear()
  let mm = monthName[today.getMonth()]
  let dd = today.getDate()
  if (dd < 10) dd = '0' + dd
  const formattedToday = mm + ' ' + dd + ', ' + year

  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 25000)
  })

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="bg-transparent/80 h-auto -top-14 md:top-0"
    >
      <DialogHeader className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 text-orange-400"
        >
          <path
            fillRule="evenodd"
            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
            clipRule="evenodd"
          />
        </svg>
        <Typography variant="h6" color="white">
          Pagbati SkyKid!
          <br /> {formattedToday}
        </Typography>
      </DialogHeader>
      <DialogBody divider className="grid place-items-center gap-4">
        <Typography variant="h6" className="text-orange-400">
          PAUNANG MGA SALITA
        </Typography>

        <Typography className="text-center text-white text-sm lg:text-lg ">
          Ang website na ito ay binuo upang magamit bilang gabay sa paglalaro ng
          <a href="https://www.thatskygame.com/">
            {' '}
            Sky: Children of the Light
          </a>{' '}
          . Layunin nito na matulungan ang mga baguhan o "moth" na nakagiliwang
          laruin ang nasabing laro pagdating sa mga aspektong tulad ng mga
          lokasyon kung saan makikita at kung paano makukuha ang bawat isang
          "spirit" (regular spirit at seasonal spirit), mga "winged light"
          (Children of the Light), mga takdang oras at lokasyon ng "geyser",
          "Grandma", at ng "turtle" at Kabilang din ang mga gabay para sa mga
          bagong event na kasalukuyang isinagawa sa loob ng laro.
        </Typography>
        <Typography className="text-center text-white text-sm lg:text-lg ">
          Upang mas maging user-friendly at interaktibo ang paggamit, ang mga
          bahagi ng website na ito ay nakasulat sa wikang Filipino upang mas
          madaling maunawaan ng mga Pilipinong gagamit nito.
        </Typography>
        <Typography variant="small" color="amber">
          - Developer
        </Typography>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button
          variant="gradient"
          onClick={handleOpen}
          className="bg-gradient-to-r from-deep-orange-800 to-brown-900"
        >
          Magpatuloy
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default AnnouncementModal
