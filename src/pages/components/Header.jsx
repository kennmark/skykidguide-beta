import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { Bars3Icon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import skykidlogo from '../../assets/images/logo/T_G Logo white.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
        <div className="font-normal uppercase text-white transition ease-in-out duration-500 hover:text-amber-600 hover:bg-gradient-to-tr hover:from-deep-orange-800 to-brown-900  py-2 px-4 rounded-lg">
          <Typography as="li" variant="small">
            News
          </Typography>
        </div>
      </Link>
      <Link to="/seasons" className="flex items-center">
        <div className="font-normal uppercase text-white transition ease-in-out duration-500 hover:text-amber-600 hover:bg-gradient-to-tr hover:from-deep-orange-800 to-brown-900  py-2 px-4 rounded-lg">
          <Typography as="li" variant="small">
            Seasons
          </Typography>
        </div>
      </Link>
      <Link to="/team" className="flex items-center">
        <div className="font-normal uppercase text-white transition ease-in-out duration-500 hover:text-amber-600 hover:bg-gradient-to-tr hover:from-deep-orange-800 to-brown-900  py-2 px-4 rounded-lg">
          <Typography as="li" variant="small">
            Team
          </Typography>
        </div>
      </Link>
      <Link to="/events" className="flex items-center">
        <div className="font-normal uppercase text-white transition ease-in-out duration-500 hover:text-amber-600 hover:bg-gradient-to-tr hover:from-deep-orange-800 to-brown-900  py-2 px-4 rounded-lg">
          <Typography as="li" variant="small">
            Events
          </Typography>
        </div>
      </Link>
      <Link to="/support" className="flex items-center">
        <div className="font-normal uppercase text-white transition ease-in-out duration-500 hover:text-amber-600 hover:bg-gradient-to-tr hover:from-deep-orange-800 to-brown-900  py-2 px-4 rounded-lg">
          <Typography as="li" variant="small">
            Support
          </Typography>
        </div>
      </Link>
    </ul>
  )
  return (
    <Navbar
      className="bg-gray-900 border-0 sticky top-0 z-50 h-max mx-auto w-full rounded-br-lg rounded-bl-lg py-2 px-4 lg:px-8 lg:py-4"
      fullWidth={true}
    >
      <div className="flex items-center justify-between uppercase">
        <Link to="/" className="">
          <div className="flex items-center text-white transition ease-in-out duration-500 hover:text-amber-600 hover:bg-gradient-to-tl hover:from-deep-orange-800 to-brown-900 py-1 px-3 rounded-3xl">
            <LazyLoadImage src={skykidlogo} style={{ width: 50 }} />
            <Typography className="p-1 text-md font-bold hidden lg:flex">
              Skykid Hero
            </Typography>
          </div>
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
              <ChevronDoubleUpIcon className="h-6 w-6 text-gray-50" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-50" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  )
}

export default Header
