import React, { useState } from 'react'
import { IconButton, Drawer } from '@material-tailwind/react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import SideBar from './Sidebar'

export function SideBarContainer() {
  const [draw, setDraw] = useState(false)
  const [screenSize, setScreenSize] = useState(960)
  const openDrawer = () => setDraw(true)
  const closeDrawer = () => setDraw(false)

  return (
    <>
      {screenSize <= window.innerWidth ? (
        <SideBar />
      ) : (
        <div className="relative h-full">
          <Drawer open={draw} onClose={closeDrawer}>
            <SideBar />
          </Drawer>
          <span onClick={openDrawer} className="absolute bottom-0 z-50">
            <IconButton
              size="lg"
              className="rounded-tr-full rounded-br-full -left-3"
              color="amber"
            >
              <ChevronDoubleRightIcon className="h-5 w-5" />
            </IconButton>
          </span>
        </div>
      )}
    </>
  )
}
