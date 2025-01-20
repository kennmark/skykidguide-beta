import React from 'react'
import PrairieDyes from './MapDyeLocations/PrairieDyes'
import ForestDyes from './MapDyeLocations/ForestDyes'
import ValleyDyes from './MapDyeLocations/ValleyDyes'
import WastelandDyes from './MapDyeLocations/WastelandDyes'
import VaultDyes from './MapDyeLocations/VaultDyes'
import EdenDyes from './MapDyeLocations/EdenDyes'

const DyeLocations = () => {
  return (
    <div>
      <PrairieDyes />
      <ForestDyes />
      <ValleyDyes />
      <WastelandDyes />
      <VaultDyes />
      <EdenDyes />
    </div>
  )
}

export default DyeLocations
