import { Carousel, Typography, Button, Card } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'
import carousel1 from '../assets/images/seasonal-banners/S29A.webp'
import carousel2 from '../assets/images/seasonal-banners/S29B.webp'
import carousel3 from '../assets/images/seasonal-banners/S29C.webp'
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
  // OPTIMIZATION: Combine historical datasets into a single timeline array object
  const timelineData = [
    { year: "2026", label: "Seasons - [Lightmending, Carnival, Dear Van Gogh]", data: seasons2026, color: "bg-amber-800" },
    { year: "2025", label: "Seasons - [Radiance, Blue Bird, Two Embers One, Migration]", data: seasons2025, color: "bg-yellow-700" },
    { year: "2024", label: "Seasons - [The Nine Colored Deer, Nesting, Duet, Moomin]", data: seasons2024, color: "bg-amber-600" },
    { year: "2023", label: "Seasons - [Remembrance, Passage, Moments, Revival]", data: seasons2023, color: "bg-orange-700" },
    { year: "2022", label: "Seasons - [Abyss, Performance, Shattering, AURORA]", data: seasons2022, color: "bg-red-700" },
    { year: "2021", label: "Seasons - [Dreams, Assembly, The Little Prince, Flight]", data: seasons2021, color: "bg-pink-700" },
    { year: "2020", label: "Seasons - [Rhythm, Enchantment, Sanctuary, Prophecy]", data: seasons2020, color: "bg-purple-700" },
    { year: "2019", label: "Seasons - [Gratitude, Lightseekers, Belonging]", data: seasons2019, color: "bg-blue-700" },
  ]

  return (
    // <div>
    //   <div className="flex justify-center">
    //     <div className="pt-5">
    //       <SideBarContainer />
    //     </div>
    //     <div className="h-fit w-full my-10 px-5">
    //       <Typography variant="h1" className="pb-5 text-[#fe7f2d]">
    //         Seasons
    //       </Typography>
    //       <Carousel
    //         className="rounded-xl overflow-hidden"
    //         autoplay={true}
    //         loop={true}
    //       >
    //         <div className="relative h-full w-full">
    //           <img
    //             src={carousel1}
    //             alt="image 1"
    //             className="h-full w-full object-cover"
    //           />
    //           <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
    //             <div className="w-3/4 text-center md:w-2/4">
    //               <Typography
    //                 variant="h5"
    //                 color="white"
    //                 className="mb-4 md:text-3xl text-xl"
    //               >
    //                 Season 29 | Season of Carnival
    //               </Typography>
    //               <Typography
    //                 variant="lead"
    //                 color="white"
    //                 className="mb-12 opacity-80 md:text-xl text-sm"
    //               >
    //                 Bagong Season ang dumating sa Sky: Children of The Light!
    //               </Typography>
    //               <div className="flex justify-center gap-2">
    //                 <Link to={`/seasons/2026/season-29/carnival`}>
    //                   <Button size="sm" className="theme-button" ripple={true}>
    //                     Pasok
    //                   </Button>
    //                 </Link>

    //                 <a href="https://www.thatskygame.com/news/this-month-in-sky-april-2026-edition">
    //                   <Button size="sm" className="theme-button">
    //                     Visit Site
    //                   </Button>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="relative h-full w-full">
    //           <img
    //             src={carousel2}
    //             alt="image 2"
    //             className="h-full w-full object-cover"
    //           />
    //           <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
    //             <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
    //               <Typography
    //                 variant="h5"
    //                 color="white"
    //                 className="mb-4 md:text-3xl text-xl"
    //               >
    //                 The Wandering Carnival is arriving!
    //               </Typography>
    //               <Typography
    //                 variant="lead"
    //                 color="white"
    //                 className="mb-12 opacity-80 md:text-xl text-sm"
    //               >
    //                 Full of revelry and delight, this group of spirits is
    //                 bringing a new set of Shared Space challenges
    //               </Typography>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="relative h-full w-full">
    //           <img
    //             src={carousel3}
    //             alt="image 3"
    //             className="h-full w-full object-cover"
    //           />
    //           <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
    //             <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
    //               <Typography
    //                 variant="h5"
    //                 color="white"
    //                 className="mb-4 md:text-3xl text-xl"
    //               >
    //                 These new challenges bring their own rewards
    //               </Typography>
    //               <Typography
    //                 variant="lead"
    //                 color="white"
    //                 className="mb-12 opacity-80 md:text-xl text-sm"
    //               >
    //                 completing other players’ Shared Space Challenges grants
    //                 different amounts of Light based on how complex the creation
    //                 is!
    //               </Typography>
    //             </div>
    //           </div>
    //         </div>
    //       </Carousel>

    //       {/* <div className="w-[20rem] md:w-full py-10 pl-16 grid place-content-center">
    //         <Timeline className="px-5">
    //           <TimelineItem>
    //             <TimelineConnector />
    //             <TimelineHeader>
    //               <TimelineIcon className="p-0">
    //                 <Typography className="bg-amber-600 py-1 px-1">
    //                   '24
    //                 </Typography>
    //               </TimelineIcon>
    //               <Typography variant="h5" color="white">
    //                 Seasons - [The Nine Colored Deer]
    //               </Typography>
    //             </TimelineHeader>
    //             <TimelineBody className="pb-8 flex justify-center">
    //               <div className="gap-4 py-5">
    //                 {seasons2024.map((season) => {
    //                   return (
    //                     <SeasonDisplayContainer {...season} key={season.id} />
    //                   )
    //                 })}
    //               </div>
    //             </TimelineBody>
    //           </TimelineItem>
    //           <TimelineItem>
    //             <TimelineConnector />
    //             <TimelineHeader>
    //               <TimelineIcon className="p-0">
    //                 <Typography className="bg-orange-700 py-1 px-1">
    //                   '23
    //                 </Typography>
    //               </TimelineIcon>
    //               <Typography variant="h5" color="white">
    //                 Seasons - [Remembrance, Passage, Moments, Revival]
    //               </Typography>
    //             </TimelineHeader>
    //             <TimelineBody className="pb-8 flex justify-center">
    //               <div className="flex justify-center gap-4 py-5">
    //                 {seasons2023.map((season) => {
    //                   return (
    //                     <SeasonDisplayContainer {...season} key={season.id} />
    //                   )
    //                 })}
    //               </div>
    //             </TimelineBody>
    //           </TimelineItem>
    //           <TimelineItem>
    //             <TimelineConnector />
    //             <TimelineHeader>
    //               <TimelineIcon className="p-0">
    //                 <Typography className="bg-red-700 py-1 px-1">
    //                   '22
    //                 </Typography>
    //               </TimelineIcon>
    //               <Typography variant="h5" color="white">
    //                 Seasons - [Abyss, Performance, Shattering, AURORA]
    //               </Typography>
    //             </TimelineHeader>
    //             <TimelineBody className="pb-8">
    //               <div className="flex flex-wrap  justify-center gap-4 py-5">
    //                 {seasons2022.map((season) => {
    //                   return (
    //                     <SeasonDisplayContainer {...season} key={season.id} />
    //                   )
    //                 })}
    //               </div>
    //             </TimelineBody>
    //           </TimelineItem>
    //           <TimelineItem>
    //             <TimelineConnector />
    //             <TimelineHeader>
    //               <TimelineIcon className="p-0">
    //                 <Typography className="bg-pink-700 py-1 px-1">
    //                   '21
    //                 </Typography>
    //               </TimelineIcon>
    //               <Typography variant="h5" color="white">
    //                 Seasons - [Dreams, Assembly, The Little Prince, Flight]
    //               </Typography>
    //             </TimelineHeader>
    //             <TimelineBody className="pb-8">
    //               <div className="flex flex-wrap  justify-center gap-4 py-5">
    //                 {seasons2021.map((season) => {
    //                   return (
    //                     <SeasonDisplayContainer {...season} key={season.id} />
    //                   )
    //                 })}
    //               </div>
    //             </TimelineBody>
    //           </TimelineItem>
    //           <TimelineItem>
    //             <TimelineConnector />
    //             <TimelineHeader>
    //               <TimelineIcon className="p-0">
    //                 <Typography className="bg-purple-700 py-1 px-1">
    //                   '20
    //                 </Typography>
    //               </TimelineIcon>
    //               <Typography variant="h5" color="white">
    //                 Seasons - [Rhythm, Enchantment, Sanctuary, Prophecy]
    //               </Typography>
    //             </TimelineHeader>
    //             <TimelineBody className="pb-8">
    //               <div className="flex flex-wrap  justify-center gap-4 py-5">
    //                 {seasons2020.map((season) => {
    //                   return (
    //                     <SeasonDisplayContainer {...season} key={season.id} />
    //                   )
    //                 })}
    //               </div>
    //             </TimelineBody>
    //           </TimelineItem>
    //           <TimelineItem>
    //             <TimelineHeader>
    //               <TimelineIcon className="p-0">
    //                 <Typography className="bg-blue-700 py-1 px-1">
    //                   '19
    //                 </Typography>
    //               </TimelineIcon>
    //               <Typography variant="h5" color="white">
    //                 Seasons - [Gratitude, LightSeekers, Belonging]
    //               </Typography>
    //             </TimelineHeader>
    //             <TimelineBody className="pb-8">
    //               <div className="flex flex-wrap  justify-center gap-4 py-5">
    //                 {seasons2019.map((season) => {
    //                   return (
    //                     <SeasonDisplayContainer {...season} key={season.id} />
    //                   )
    //                 })}
    //               </div>
    //             </TimelineBody>
    //           </TimelineItem>
    //         </Timeline>
    //       </div> */}
    //       {/* Seasons 2026 */}
    //       <div className="pt-5 w-full px-5">
    //         <div className="">
    //           <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2026 - [
    //             {seasons2026.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap  justify-center gap-4 py-5">
    //           {seasons2026.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2026 */}
    //       {/* Seasons 2025 */}
    //       <div className="pt-5 w-full px-5">
    //         <div className="">
    //           <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2025 - [
    //             {seasons2025.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap  justify-center gap-4 py-5">
    //           {seasons2025.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2025 */}
    //       {/* Seasons 2024 */}
    //       <div className="pt-5 w-full px-5">
    //         <div className="">
    //           <Card className="flex justify-center text-xl  py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2024 - [
    //             {seasons2024.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
    //           {seasons2024.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2024 */}
    //       {/* Seasons 2023 */}
    //       <div className="pt-5 w-full px-5">
    //         <div className="">
    //           <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2023 - [
    //             {seasons2023.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap  justify-center gap-4 py-5 px-5">
    //           {seasons2023.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2023 */}
    //       {/* Seasons 2022 */}
    //       <div className="pt-5 w-full px-5">
    //         <div>
    //           <Card className="flex justify-center text-xl  py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2022 - [
    //             {seasons2022.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap  justify-center gap-4 py-5 px-5">
    //           {seasons2022.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2022 */}
    //       {/* Seasons 2021 */}
    //       <div className="pt-5 w-full px-5">
    //         <div>
    //           <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2021 - [
    //             {seasons2021.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
    //           {seasons2021.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2021 */}
    //       {/* Seasons 2020 */}
    //       <div className="pt-5 w-full px-5">
    //         <div>
    //           <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2020 - [
    //             {seasons2020.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
    //           {seasons2020.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2020 */}
    //       {/* Seasons 2019 */}
    //       <div className="pt-5 w-full px-5">
    //         <div>
    //           <Card className="flex justify-center text-xl py-2 md:py-5 px-3 bg-[#233d4d] text-[#fe7f2d]">
    //             Seasons 2019 - [
    //             {seasons2019.map((seasonNames) => seasonNames.name + ', ')}]
    //           </Card>
    //         </div>

    //         <div className="flex flex-wrap justify-center gap-4 py-5 px-5">
    //           {seasons2019.map((season) => {
    //             return <SeasonDisplayContainer {...season} key={season.id} />
    //           })}
    //         </div>
    //       </div>
    //       {/* Seasons 2019 */}
    //     </div>
    //   </div>

    //   <ScrollToTop smooth className="scrollToTop" />
    // </div>
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
            {/* Slide 1 */}
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
                    Season 29 | Season of Carnival
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    Bagong Season ang dumating sa Sky: Children of The Light!
                  </Typography>
                  <div className="flex justify-center gap-2">
                    {/* OPTIMIZED ROUTE: Maps flawlessly to our new consolidated path */}
                    <Link to="/seasons/s29-carnival">
                      <Button size="sm" className="theme-button" ripple={true}>
                        Pasok
                      </Button>
                    </Link>

                    <a href="https://www.thatskygame.com/news/this-month-in-sky-april-2026-edition" target="_blank" rel="noreferrer">
                      <Button size="sm" className="theme-button">
                        Visit Site
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative h-full w-full">
              <img src={carousel2} alt="image 2" className="h-full w-full object-cover" />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography variant="h5" color="white" className="mb-4 md:text-3xl text-xl">
                    The Wandering Carnival is arriving!
                  </Typography>
                  <Typography variant="lead" color="white" className="mb-12 opacity-80 md:text-xl text-sm">
                    Full of revelry and delight, this group of spirits is bringing a new set of Shared Space challenges
                  </Typography>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="relative h-full w-full">
              <img src={carousel3} alt="image 3" className="h-full w-full object-cover" />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography variant="h5" color="white" className="mb-4 md:text-3xl text-xl">
                    These new challenges bring their own rewards
                  </Typography>
                  <Typography variant="lead" color="white" className="mb-12 opacity-80 md:text-xl text-sm">
                    completing other players’ Shared Space Challenges grants different amounts of Light based on how complex the creation is!
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>

          {/* OPTIMIZED DYNAMIC TIMELINE GENERATION */}
          <div className="w-full py-10 grid place-content-center">
            <div className="relative border-l border-blue-gray-100 ml-4 md:ml-16 pl-6 space-y-8">
              {timelineData.map((timeline, index) => (
                <div key={index} className="relative">
                  {/* Timeline Indicator Badge */}
                  <span className="absolute -left-[39px] top-0 flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold text-white shadow-sm overflow-hidden">
                    <span className={`w-full h-full ${timeline.color} flex items-center justify-center`}>
                      {timeline.year}
                    </span>
                  </span>
                  
                  {/* Year Group Header */}
                  <Typography variant="h5" color="white" className="mb-4">
                    {timeline.label}
                  </Typography>
                  
                  {/* Flexible Inner Cards Grid mapping individual components */}
                  <div className="flex flex-wrap items-center justify-center gap-4 py-3">
                    {timeline.data && timeline.data.map((season) => (
                      <SeasonDisplayContainer {...season} key={season.id} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageSeasonMap
