import { Typography } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import { useState } from 'react'

const PageIsle = () => {
  const [fullWidth, isFullWidth] = useState(992)
  const currentWidth = screen.width

  return (
    <>
      <div className="flex justify-center text-center">
        <Typography variant="h1">Isle of Dawn</Typography>
      </div>
      <div>
        <SideBarContainer />
      </div>
    </>
  )
}

export default PageIsle
