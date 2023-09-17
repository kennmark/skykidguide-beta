import React, { useState } from 'react'
import { IconButton, Drawer, Collapse } from '@material-tailwind/react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Sidebar from './Sidebar'

export function SideBarContainer() {
  const [draw, setDraw] = useState(false)
  const [screenSize, setScreenSize] = useState(960)
  const openDrawer = () => setDraw(true)
  const closeDrawer = () => setDraw(false)

  return (
    <>
      {screenSize <= window.innerWidth ? (
        <Sidebar />
      ) : (
        <>
          <div className="absolute bottom-20 left-20 z-10" onClick={openDrawer}>
            <IconButton size="lg" className="rounded-full" color="amber">
              <ChevronDoubleRightIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <Drawer open={draw} onClose={closeDrawer}>
            <Sidebar />
          </Drawer>
        </>
      )}
    </>
  )
}
