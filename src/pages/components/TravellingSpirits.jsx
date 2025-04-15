import React from 'react'
import { allSeasons } from '../../data/seasons'
import { Typography } from '@material-tailwind/react'
import SpiritCardContainer from './SpiritCardContainer'

const TravellingSpirits = () => {
  const travelingSpirits = allSeasons.map((spirit) => {
    const newSetTravelingSpirit = spirit.season_spirits
    return newSetTravelingSpirit
  })

  const mergedTravelingSpirits = () => {
    for (let index = 0; index < travelingSpirits.length; index++) {
      const indexed = travelingSpirits[index]
      return indexed
    }
    const merged = Array.prototype.push.apply(travelingSpirits[indexed])
    console.log(merged)
  }

  // console.log('TS', travelingSpirits)

  return (
    <div>
      <Typography variant="h1">Traveling Spirits</Typography>
      <div className="flex">
        {travelingSpirits[0].map((spirits, key) => {
          // console.log(
          //   spirits.number_of_visits.sort((a, b) => b.visitNo - a.visitNo)
          // )

          return <SpiritCardContainer {...spirits} key={key} />
        })}
      </div>
    </div>
  )
}

export default TravellingSpirits
