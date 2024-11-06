import React from 'react'
import { Typography } from '@material-tailwind/react'

import { isleOfDawn } from '../../data/isleOfDawnData'
import { prairie } from '../../data/prairieData'
import { hiddenForest } from '../../data/forestData'
import { valley } from '../../data/valleyData'
import { wasteland } from '../../data/wastelandData'
import { vault } from '../../data/vaultData'
import SpiritCardContainer from './SpiritCardContainer'
import {
  seasons2019,
  seasons2020,
  seasons2021,
  seasons2022,
  seasons2023,
  seasons2024,
} from '../../data/seasons'

const LatestTSVisit = () => {
  // const allSeasonSpirits = _.merge(
  //   seasons2019,
  //   seasons2020,
  //   seasons2021,
  //   seasons2022,
  //   seasons2023,
  //   seasons2024
  // )
  // console.log(allSeasonSpirits)

  // const IsleTS = isleOfDawn.map((seasonSpirits) => seasonSpirits.spirits)
  // const PrairieTS = prairie.map((seasonSpirits) => seasonSpirits.spirits)
  // const ForestTS = hiddenForest.map((seasonSpirits) => seasonSpirits.spirits)
  // const ValleyTS = valley.map((seasonSpirits) => seasonSpirits.spirits)
  // const WastelandTS = wasteland.map((seasonSpirits) => seasonSpirits.spirits)
  // const VaultTS = vault.map((seasonSpirits) => seasonSpirits.spirits)

  // const isle = IsleTS[1]
  // const daylight = PrairieTS[1]
  // const forest = ForestTS[1]
  // const triumph = ValleyTS[1]
  // const golden = WastelandTS[1]
  // const knowledge = VaultTS[1]

  // const mergedTS = [
  //   { ...isle },
  //   { ...daylight },
  //   { ...forest },
  //   { ...triumph },
  //   { ...golden },
  //   { ...knowledge },
  // ]

  // const sortedTS = mergedTS.slice().sort()
  // const sorted = mergedTS.sort((a, b) => a.season_id - b.season_id)
  // const founded = mergedTS.find(({ season_id }) => season_id === 1)

  return (
    <div className="border-t border-blue-gray-50">
      <div className="py-6">
        <Typography variant="h2">Latest Traveling Spirit Visit (TS)</Typography>
      </div>
      {/* {sorted.map((spirits) =>
        spirits.map((spirit) => {
          return <SpiritCardContainer {...spirit} key={spirit.id} />
        })
      )} */}
    </div>
  )
}

export default LatestTSVisit
