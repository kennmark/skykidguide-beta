import React from 'react'
import { Typography } from '@material-tailwind/react'

import { isleOfDawn } from '../../data/isleOfDawnData'
import { prairie } from '../../data/prairieData'
import { hiddenForest } from '../../data/forestData'
import { valley } from '../../data/valleyData'
import { wasteland } from '../../data/wastelandData'
import { vault } from '../../data/vaultData'
import SpiritCardContainer from './SpiritCardContainer'
import { allSeasons } from '../../data/seasons'

const LatestTSVisit = () => {
  const latestSpirit = allSeasons.map((seasons) =>
    seasons.season_spirits?.map((spirits) =>
      spirits.number_of_visits?.map((visit) => visit.visitNo)
    )
  )
  console.log(latestSpirit)
  return (
    <div className="border-t border-blue-gray-50">
      <div className="py-6">
        <Typography variant="h2">Latest Traveling Spirit Visit (TS)</Typography>
      </div>
      {allSeasons.map((seasons) =>
        seasons.season_spirits?.map((spirits) =>
          spirits.number_of_visits?.map((visit) => (
            <Typography>{visit.visitNo}</Typography>
          ))
        )
      )}
    </div>
  )
}

export default LatestTSVisit
