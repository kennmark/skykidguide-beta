import { Link } from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import skykidhelpguidelogo from './../../assets/images/favicon/android-chrome-192x192.png'
import { useState, useEffect } from 'react'

const Header = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/balita" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-normal uppercase hover:bg-red-500/10 focus:bg-red-500/10 py-4 px-4 rounded-lg"
        >
          Balita
        </Typography>
      </Link>
      <Link to="/team" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-normal uppercase hover:bg-red-500/10 focus:bg-red-500/10 py-4 px-4 rounded-lg"
        >
          Team
        </Typography>
      </Link>
      <Link to="/events" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-normal uppercase hover:bg-red-500/10 focus:bg-red-500/10 py-4 px-4 rounded-lg"
        >
          Events
        </Typography>
      </Link>
      <Link to="/seasons" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-normal uppercase hover:bg-red-500/10 focus:bg-red-500/10 py-4 px-4 rounded-lg"
        >
          Seasons
        </Typography>
      </Link>
    </ul>
  )
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="sticky top-0 z-50 h-max mx-auto w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg py-2 px-4 lg:px-8 lg:py-4"
      fullWidth={true}
    >
      <div className="flex items-center justify-between text-blue-gray-900 uppercase ">
        <Link
          to="/"
          className="flex items-center hover:bg-red-500/10 focus:bg-red-500/10 py-1 px-1 rounded-lg"
        >
          <img src={skykidhelpguidelogo} style={{ width: 50 }} />
          <Typography color="white" className="p-1 font-normal">
            Skykid:Tulong & Gabay
          </Typography>
        </Link>

        <div className="flex items-center  gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  )
}

export default Header
