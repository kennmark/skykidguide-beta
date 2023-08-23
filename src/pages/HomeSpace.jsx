import React from 'react'
import 'primeflex/primeflex.css'
import { maps } from '../data/maps'
import MapCardContainer from './components/MapCardContainer'
import Faq from './components/Faq'
import Header from './components/Header'
import Footer from './components/Footer'

const HomeSpace = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>Maligayang Paglipad Skykid!</h1>
      <section>
        <p>
          Ang website na ito ay ginawa para sa mga manlalaro ng
          <a href="https://www.thatskygame.com/">
            {' '}
            Sky: Children of the Light
          </a>{' '}
          app. Ito ay upang makatulong sa mga baguhang "moth" na nakagiliwang
          maglaro ng app na ito. Ito din ay magsisilbing gabay sa mga bagong
          pangyayayri sa loob ng laro.
        </p>
        <p>
          Ang website na ito ay ginawa na "user-friendly" upang di mahirapan
          hanapin at gamitin at nasa wikang Filipino na ginawa talaga para sa
          mga Pinoy. Ang website ay magbibigay ng gabay sa mga lokasyon at
          impormasyon ng mga "spirits" (regular spirits at seasonal spirits),
          "winged lights (children of the light)"; talakdaan ng oras ng
          "geyser", ng "grandma", at ng "turtle".
        </p>
      </section>
      <div className="grid justify-content-center">
        {maps.map((map, index) => {
          return <MapCardContainer {...map} key={map.id} number={index} />
        })}
      </div>

      <Faq />

      <Footer />
    </div>
  )
}

export default HomeSpace
