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
    }, 20000)
  })

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography variant="h6" color="blue-gray">
            Welcome Skykid! <br /> {formattedToday}
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <Typography color="red" variant="h6">
            Saglit na Pagbasa
          </Typography>
          <Typography className="text-center font-normal">
            Ang website na ito ay ginawa para sa mga manlalaro ng
            <a href="https://www.thatskygame.com/">
              {' '}
              Sky: Children of the Light
            </a>{' '}
            app. Ito ay upang makatulong sa mga baguhang "moth" na nakagiliwang
            maglaro ng app na ito. Ito din ay magsisilbing gabay sa mga bagong
            pangyayayri sa loob ng laro. Ang website na ito ay ginawa na
            "user-friendly" upang di mahirapan hanapin at gamitin at nasa wikang
            Filipino na ginawa talaga para sa mga Pinoy. Ang website ay
            magbibigay ng gabay sa mga lokasyon at impormasyon ng mga "spirits"
            (regular spirits at seasonal spirits), "winged lights (children of
            the light)"; talakdaan ng oras ng "geyser", ng "grandma", at ng
            "turtle".
          </Typography>
          <Typography variant="small" color="red">
            - Developer | <i>C1pher</i>
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Salamat po
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default AnnouncementModal
