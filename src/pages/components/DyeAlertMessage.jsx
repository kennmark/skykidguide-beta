import { Alert, Typography } from '@material-tailwind/react'
import React from 'react'

const DyeAlertMessage = () => {
  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    )
  }

  return (
    <div className="flex w-full flex-col gap-2 mt-2">
      <Alert color="amber" icon={<Icon />}>
        <Typography variant="h3">TANDAAN</Typography>
        Ang pagsunog sa mga Dark Plants ay naglalabas ng mga Paru-paro na may
        katumbas na kulay. Gamitin ang Butterfly Expression o Deep Honk upang
        punan ang mga lalagyan ng Colored Lights, katulad ng mga Waxes sa
        regular candles. Kapag ang Lead ang gumawa ng emote o honk, maari na din
        makatanggap ng kulay ang mga kasama nito.
      </Alert>
    </div>
  )
}

export default DyeAlertMessage
