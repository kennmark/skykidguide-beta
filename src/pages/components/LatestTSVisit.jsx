import React, {useState, useEffect} from 'react'
import { Alert, Typography } from '@material-tailwind/react'

import { isleOfDawn } from '../../data/isleOfDawnData'
import { prairie } from '../../data/prairieData'
import { hiddenForest } from '../../data/forestData'
import { valley } from '../../data/valleyData'
import { wasteland } from '../../data/wastelandData'
import { vault } from '../../data/vaultData'
import SpiritCardContainer from './SpiritCardContainer'
import { seasons2023 } from '../../data/seasons'
import { travelingSpirit, groupTs, travelingSpiritDate, travelingSpiritHint,travelingSpiritHintImage } from '../../exports/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LatestTSVisit = () => {
    const {
      id,
      name,
      icon_route,
      season_spirits,
    } = seasons2023[3]

    const [checkedSpirits, setCheckedSpirits] = useState(() => {
        const saved = localStorage.getItem('checkedSpirits')
        const initialValue = JSON.parse(saved) || {} // Default to empty object if no saved data
        return initialValue
      })
      // console.log({ checkedSpirits })
    
      useEffect(() => {
        localStorage.setItem('checkedSpirits', JSON.stringify(checkedSpirits))
      }, [checkedSpirits])
    
      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target
        setCheckedSpirits((prevState) => ({ ...prevState, [name]: checked }))
      }

  return (
    <div className="border-t border-blue-gray-50">
      <div className="py-6">
        <Typography variant="h1" className="my-10 text-[#fe7f2d]">Latest Traveling Spirit Visit (TS)</Typography>
      </div>
      {travelingSpirit ? 
        <>
          {groupTs ?
            <>
              <div className='pb-5'>
                <Typography>A Group of Traveling Spirits has returned in Sky. Starting <span className='font-bold'>{travelingSpiritDate}</span>.</Typography>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {
                  season_spirits.map((spirit) => {
                    return (
                      <SpiritCardContainer
                        {...spirit}
                        icon_route={icon_route}
                        key={spirit.spirit_id}
                        season={name}
                        checkedSpirits={checkedSpirits}
                        handleCheckboxChange={handleCheckboxChange}
                      />
                    )
                  })
                }
              </div>
            </>
            :
            <>
              <div className='pb-5'>
                <Typography>A Traveling Spirits has returned in Sky. Starting <span className='font-bold'>{travelingSpiritDate}</span>.</Typography>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {
                  season_spirits.slice(0,1).map((spirit) => {
                    return (
                      <SpiritCardContainer
                        {...spirit}
                        icon_route={icon_route}
                        key={spirit.spirit_id}
                        season={name}
                        checkedSpirits={checkedSpirits}
                        handleCheckboxChange={handleCheckboxChange}
                      />
                    )
                  })
                }
              </div>
            </>
          }
        </>
       : 
        <div className='pb-5 px-60'>
          <Alert color='amber' className='flex items-center justify-center'>A Traveling Spirit will return this <span className='font-bold'>{travelingSpiritDate}</span>.</Alert>
          {travelingSpiritHint ?
            <LazyLoadImage
              src={travelingSpiritHintImage}
              effect="blur"
              className="h-full w-full object-cover rounded-xl"
            /> :
            <Typography className='pt-5'>NO HINT YET!</Typography>
          }
          
        </div>
      }
      
    </div>
  )
}

export default LatestTSVisit
