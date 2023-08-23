import { Card } from 'primereact/card'
import Footer from './MapCardFooter'
import Header from './MapCardHeader'
import { Chip } from 'primereact/chip'
import { useState } from 'react'
import { Badge } from 'primereact/badge'

const MapCardContainer = ({
  title,
  subtitle,
  img,
  alt,
  group,
  caption,
  pageRoute,
  num_of_wls,
  num_of_reg_spirits,
  num_of_season_spirits,
  num_of_map_shrines,
}) => {
  const [isEmpty, setIsEmpty] = useState(0)
  const numOfWls = <Badge value={num_of_wls} severity="warning"></Badge>
  const numOfRegSpirit = (
    <Badge value={num_of_reg_spirits} severity="warning"></Badge>
  )
  const numOfSeasonSpirit = (
    <Badge value={num_of_season_spirits} severity="warning"></Badge>
  )
  const numOfMapShrines = (
    <Badge value={num_of_map_shrines} severity="warning"></Badge>
  )
  return (
    <div className="card justify-content-center">
      <div className="col-12">
        <Card
          title={title}
          subTitle={subtitle}
          footer={<Footer />}
          header={<Header img={img} alt={alt} />}
          className={group}
        >
          <div className="card flex flex-wrap justify-content-center gap-1">
            {isEmpty === num_of_wls ? (
              ''
            ) : (
              <Chip label={['Wing Lights ', numOfWls]} />
            )}
            {isEmpty === num_of_reg_spirits ? (
              ''
            ) : (
              <Chip label={['Regular Spirits ', numOfRegSpirit]} />
            )}
            {isEmpty === num_of_season_spirits ? (
              ''
            ) : (
              <Chip label={['Season Spirits ', numOfSeasonSpirit]} />
            )}
            {isEmpty === num_of_map_shrines ? (
              ''
            ) : (
              <Chip label={['Map Shrines ', numOfMapShrines]} />
            )}
          </div>
          <p className="m-0">{caption}</p>
        </Card>
      </div>
    </div>
  )
}

export default MapCardContainer
