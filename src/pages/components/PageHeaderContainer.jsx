import React from 'react'
import { Typography, Spinner } from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PageHeaderContainer = ({
  imgUrl,
  imgAlt,
  height,
  width,
  title,
  mapIntro,
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <LazyLoadImage
          src={imgUrl}
          alt={imgAlt}
          height={height}
          width={width}
          className="py-5"
          // PlaceholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
        />
        <Typography variant="h1" className="p-5">
          {title}
        </Typography>
      </div>
      <div className="flex items-center justify-center pb-5">
        <Typography>
          "{mapIntro}" - {title} Opening
        </Typography>
      </div>
    </>
  )
}

export default PageHeaderContainer
