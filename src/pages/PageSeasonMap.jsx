import { Carousel, Typography, Button, Card } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'
import carousel1 from '../assets/images/seasonal-banners/S28A.webp'
import carousel2 from '../assets/images/seasonal-banners/S28B.webp'
import carousel3 from '../assets/images/seasonal-banners/S28C.webp'
import SeasonDisplayContainer from './components/SeasonDisplayContainer'
import {
  seasons2019,
  seasons2020,
  seasons2021,
  seasons2022,
  seasons2023,
  seasons2024,
  seasons2025,
  seasons2026,
} from '../data/seasons'
import { Link } from 'react-router-dom'
const PageSeasonMap = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="pt-5">
          <SideBarContainer />
        </div>
        <div className="h-fit w-full my-10 px-5">
          <Typography variant="h1" className="pb-5 text-[#fe7f2d]">
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
                    Season 87 | Season of Lightmending
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    Bagong Season ang dumating sa Sky: Children of The Light!
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Link to={`/seasons/2025/season-27/migration`}>
                      <Button size="sm" className="theme-button" ripple={true}>
                        Pasok
                      </Button>
                    </Link>

                    <a href="https://www.thatskygame.com/news/the-season-of-migration-is-upon-us">
                      <Button size="sm" className="theme-button">
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
                    Lightmending Broken Memory Lanterns
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    Join together, use your light, and fix what has been broken.
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
                    Team up, follow the clues, and piece the lanterns back
                    together
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    Who could have guessed that Memory Lanterns are so fragile?
                    Answer the call from this season’s Quest Giver, who has
                    recruited some old friends to show Sky Kids everywhere that
                    they can work together with their light to mend the Vault’s
                    precious lanterns.
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>

          {/* <div className="w-[20rem] md:w-full py-10 pl-16 grid place-content-center">
            <Timeline className="px-5">
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-0">
                    <Typography className="bg-amber-600 py-1 px-1">
                      '24
                    </Typography>
                  </TimelineIcon>
                  <Typography variant="h5" color="white">
                    Seasons - [The Nine Colored Deer]
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8 flex justify-center">
                  <div className="gap-4 py-5">
                    {seasons2024.map((season) => {
                      return (
                        <SeasonDisplayContainer {...season} key={season.id} />
                      )
                    })}
                  </div>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-0">
                    <Typography className="bg-orange-700 py-1 px-1">
                      '23
                    </Typography>
                  </TimelineIcon>
                  <Typography variant="h5" color="white">
                    Seasons - [Remembrance, Passage, Moments, Revival]
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8 flex justify-center">
                  <div className="flex justify-center gap-4 py-5">
                    {seasons2023.map((season) => {
                      return (
                        <SeasonDisplayContainer {...season} key={season.id} />
                      )
                    })}
                  </div>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-0">
                    <Typography className="bg-red-700 py-1 px-1">
                      '22
                    </Typography>
                  </TimelineIcon>
                  <Typography variant="h5" color="white">
                    Seasons - [Abyss, Performance, Shattering, AURORA]
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <div className="flex flex-wrap  justify-center gap-4 py-5">
                    {seasons2022.map((season) => {
                      return (
                        <SeasonDisplayContainer {...season} key={season.id} />
                      )
                    })}
                  </div>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-0">
                    <Typography className="bg-pink-700 py-1 px-1">
                      '21
                    </Typography>
                  </TimelineIcon>
                  <Typography variant="h5" color="white">
                    Seasons - [Dreams, Assembly, The Little Prince, Flight]
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <div className="flex flex-wrap  justify-center gap-4 py-5">
                    {seasons2021.map((season) => {
                      return (
                        <SeasonDisplayContainer {...season} key={season.id} />
                      )
                    })}
                  </div>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-0">
                    <Typography className="bg-purple-700 py-1 px-1">
                      '20
                    </Typography>
                  </TimelineIcon>
                  <Typography variant="h5" color="white">
                    Seasons - [Rhythm, Enchantment, Sanctuary, Prophecy]
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <div className="flex flex-wrap  justify-center gap-4 py-5">
                    {seasons2020.map((season) => {
                      return (
                        <SeasonDisplayContainer {...season} key={season.id} />
                      )
                    })}
                  </div>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon className="p-0">
                    <Typography className="bg-blue-700 py-1 px-1">
                      '19
                    </Typography>
                  </TimelineIcon>
                  <Typography variant="h5" color="white">
                    Seasons - [Gratitude, LightSeekers, Belonging]
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <div className="flex flex-wrap  justify-center gap-4 py-5">
                    {seasons2019.map((season) => {
                      return (
                        <SeasonDisplayContainer {...season} key={season.id} />
                      )
                    })}
                  </div>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div> */}
          {/* Seasons 2026 */}
          <div className="pt-5 w-full px-5">
            <div className="">
              <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2026 - [
                {seasons2026.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap  justify-center gap-4 py-5">
              {seasons2026.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2026 */}
          {/* Seasons 2025 */}
          <div className="pt-5 w-full px-5">
            <div className="">
              <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2025 - [
                {seasons2025.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap  justify-center gap-4 py-5">
              {seasons2025.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2025 */}
          {/* Seasons 2024 */}
          <div className="pt-5 w-full px-5">
            <div className="">
              <Card className="flex justify-center text-xl  py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2024 - [
                {seasons2024.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
              {seasons2024.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2024 */}
          {/* Seasons 2023 */}
          <div className="pt-5 w-full px-5">
            <div className="">
              <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2023 - [
                {seasons2023.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap  justify-center gap-4 py-5 px-5">
              {seasons2023.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2023 */}
          {/* Seasons 2022 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Card className="flex justify-center text-xl  py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2022 - [
                {seasons2022.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap  justify-center gap-4 py-5 px-5">
              {seasons2022.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2022 */}
          {/* Seasons 2021 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2021 - [
                {seasons2021.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
              {seasons2021.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2021 */}
          {/* Seasons 2020 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2020 - [
                {seasons2020.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
              {seasons2020.map((season) => {
                return <SeasonDisplayContainer {...season} key={season.id} />
              })}
            </div>
          </div>
          {/* Seasons 2020 */}
          {/* Seasons 2019 */}
          <div className="pt-5 w-full px-5">
            <div>
              <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
                Seasons 2019 - [
                {seasons2019.map((seasonNames) => seasonNames.name + ', ')}]
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
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
