import { Carousel, Typography, Button, Alert } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'
import carousel1 from '../assets/images/seasonal-banners/Season of Revival-1.jpg'
import carousel2 from '../assets/images/seasonal-banners/Season of Revival-2.jpg'
import carousel3 from '../assets/images/seasonal-banners/Season of Revival-3.jpg'
import SeasonDisplayContainer from './components/SeasonDisplayContainer'
import {
  seasons2019,
  seasons2020,
  seasons2021,
  seasons2022,
  seasons2023,
} from '../data/seasons'
const PageSeasonMap = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="pt-5">
          <SideBarContainer />
        </div>
        <div className="h-fit w-full my-5 px-5">
          <Typography variant="h1" className="pb-5">
            Seasons
          </Typography>
          <Carousel
            className="rounded-xl overflow-hidden"
            autoplay={true}
            loop={true}
          >
            <div className="relative h-full w-full">
              <img
                src={carousel1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-4 md:text-3xl text-xl"
                  >
                    Season 19 | Season of Revival
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    Bagong Season ang dumating sa Sky: Children of The Light!
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Button
                      size="sm"
                      color="gray"
                      className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg shadow-indigo-500/50 hover:scale-[1.02] hover:shadow-indigo-500 hover:shadow-xl"
                      ripple={true}
                    >
                      Pasok
                    </Button>
                    <a href="https://www.thatskygame.com/news/build-together-with-season-of-revival/">
                      <Button size="sm" color="white" variant="outlined">
                        Visit Site
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src={carousel2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-4 md:text-3xl text-xl"
                  >
                    Building Towards the Future
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    Aviary Village won’t be built in a day, but we promise good
                    times and lasting memories ahead!
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src={carousel3}
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-4 md:text-3xl text-xl"
                  >
                    Other Changes Coming with the Season of Revival Update
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    All other items will be made available at a later point on a
                    separate schedule from the related event. We’ll share more
                    on how these items return in a future update!
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>
          {/* Seasons 2024 */}
          {/* <div className="pt-5 w-full px-5">
            <div className="">
              <Alert className="flex justify-center text-xl bg-blue-900/50">
                Seasons 2024 - [The Nine Colored Deer]
              </Alert>
            </div>

            <div className="flex flex-wrap  justify-center gap-4 py-5">
              {seasons2024.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div> */}
          {/* Seasons 2024 */}
          {/* Seasons 2023 */}
          <div className="pt-5 w-full px-5">
            <div className="">
              <Alert className="flex justify-center text-xl bg-blue-900/50">
                Seasons 2023 - [Remembrance, Passage, Moments, Revival]
              </Alert>
            </div>

            <div className="flex flex-wrap  justify-center gap-4 py-5">
              {seasons2023.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2023 */}
          {/* Seasons 2022 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Alert className="flex justify-center text-xl bg-blue-900/50">
                Seasons 2022 - [Abyss, Performance, Shattering, AURORA]
              </Alert>
            </div>

            <div className="flex flex-wrap  justify-center gap-4 py-5">
              {seasons2022.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2022 */}
          {/* Seasons 2021 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Alert className="flex justify-center text-xl bg-blue-900/50">
                Seasons 2021 - [Dreams, Assembly, The Little Prince, Flight]
              </Alert>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-5">
              {seasons2021.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2021 */}
          {/* Seasons 2020 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Alert className="flex justify-center text-xl bg-blue-900/50">
                Seasons 2020 - [Rythm, Enchantment, Sanctuary, Prophecy]
              </Alert>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-5">
              {seasons2020.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2020 */}
          {/* Seasons 2019 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Alert className="flex justify-center text-xl bg-blue-900/50">
                Seasons 2019 - [Gratitude, Lightseekers, Belonging]
              </Alert>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-5">
              {seasons2019.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2019 */}
        </div>
      </div>

      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default PageSeasonMap
