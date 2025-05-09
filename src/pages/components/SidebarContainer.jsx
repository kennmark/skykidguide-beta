import React, { useState } from 'react'
import { IconButton, Drawer } from '@material-tailwind/react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import SideBar from './SideBar'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'

export function SideBarContainer() {
  const [draw, setDraw] = useState(false)
  const [screenSize, setScreenSize] = useState(960)
  const openDrawer = () => {
    setDraw(true)
    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }
  const closeDrawer = () => {
    setDraw(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {screenSize <= window.innerWidth ? (
        <SideBar />
      ) : (
        <>
          <span onClick={openDrawer} className="fixed bottom-20 z-50">
            <IconButton
              size="lg"
              className="rounded-tr-full rounded-br-full -left-3 opacity-50 transition ease-in-out hover:opacity-100 duration-500"
              color="amber"
            >
              <ChevronDoubleRightIcon className="h-7 w-7" />
            </IconButton>
          </span>

          <Drawer open={draw} onClose={closeDrawer}>
            <SideBar />
          </Drawer>
        </>
      )}
    </>
  )
}
