import React from 'react'
import { PrairieDyeLocation } from '../../../data/DyeLocations'
import { Typography } from '@material-tailwind/react'
import DyeCardContainer from '../DyeCardContainer'
import PrairieIcon from '../../../assets/images/icons/Map2-Prairie-Icon.webp'

const PrairieDyes = () => {
  return (
    <div className="mt-5 mb-5">
      <Typography variant="h2" className="mb-5">
        Prairie Dye Locations
      </Typography>
      <div className="flex flex-wrap gap-5 justify-center">
        {PrairieDyeLocation.map((dyeLocation, index) => {
          return (
            <DyeCardContainer {...dyeLocation} icon={PrairieIcon} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default PrairieDyes
