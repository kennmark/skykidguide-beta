import React from 'react'
import { Typography } from '@material-tailwind/react'

const PageHeaderContainer = ({ imgUrl, imgAlt, height, width, title }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={imgUrl}
        alt={imgAlt}
        height={height}
        width={width}
        className="py-5"
      />
      <Typography variant="h1" className="p-5">
        {title}
      </Typography>
    </div>
  )
}

export default PageHeaderContainer
