import { Link } from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { Bars3Icon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const Header = () => {
  const google_pretext = 'https://drive.google.com/uc?export=view&id='
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
          className="p-1 font-normal uppercase text-white hover:text-amber-600 hover:bg-gradient-to-tr hover:from-blue-900 to-purple-900  py-2 px-4 rounded-lg"
        >
          Balita
        </Typography>
      </Link>
      <Link to="/team" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal uppercase text-white hover:text-amber-600 hover:bg-gradient-to-tr hover:from-blue-900 to-purple-900  py-2 px-4 rounded-lg"
        >
          Team
        </Typography>
      </Link>
      <Link to="/events" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal uppercase text-white hover:text-amber-600 hover:bg-gradient-to-tr hover:from-blue-900 to-purple-900  py-2 px-4 rounded-lg"
        >
          Events
        </Typography>
      </Link>
      <Link to="/seasons" className="flex items-center">
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal uppercase text-white hover:text-amber-600 hover:bg-gradient-to-tr hover:from-blue-900 to-purple-900  py-2 px-4 rounded-lg"
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
      <div className="flex items-center justify-between uppercase">
        <div className="hover:bg-gradient-to-tl hover:from-blue-900 to-purple-900  py-1 px-3 rounded-3xl">
          <Link
            to="/"
            className="flex items-center text-white hover:text-amber-600"
          >
            <img
              src={google_pretext + '1sncuqgUa06vjJok4GNnNPLGqTJlRnvXr'}
              style={{ width: 50 }}
            />
            <Typography className="p-1 text-md font-bold hidden lg:flex">
              Skykid:Tulong & Gabay
            </Typography>
          </Link>
        </div>

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
