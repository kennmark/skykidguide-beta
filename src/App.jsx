import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './Clock.css'
import './fonts/MooliFont.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from './pages/layout/Layout'

import ScrollToTop from './pages/components/ScrollToTop '
import { Spinner } from '@material-tailwind/react'
const HomeSpace = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/HomeSpace')), 300)
  })
})
const News = lazy(() => import('./pages/News'))
const Team = lazy(() => import('./pages/Team'))
const Events = lazy(() => import('./pages/Events'))
const Support = lazy(() => import('./pages/Support'))
const FaQ = lazy(() => import('./pages/FaQ'))
const PageIsle = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageIsle')), 300)
  })
})
const PagePrairie = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PagePrairie')), 300)
  })
})
const PageForest = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageForest')), 300)
  })
})
const PageValley = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageValley')), 300)
  })
})
const PageWasteland = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageWasteland')), 300)
  })
})
const PageVault = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageVault')), 300)
  })
})
const PageEden = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageEden')), 300)
  })
})
const PageAviary = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageAviary')), 300)
  })
})
const PageWingedLights = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageWingedLights')), 300)
  })
})
const PageMapShrines = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageMapShrines')), 300)
  })
})
const PageVeterans = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/VeteranPage')), 300)
  })
})
const PageSeasonMap = lazy(() => import('./pages/PageSeasonMap'))

const ErrorPage = lazy(() => import('./pages/ErrorPage'))

const S1Gratitude = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S1GratitudePage')),
      300
    )
  })
})

const S2LightSeeker = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S2LightSeekerPage')),
      300
    )
  })
})

const S3Belonging = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S3BelongingPage')),
      300
    )
  })
})
const S4Rhythm = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SeasonsPages/S4RhythmPage')), 300)
  })
})
const S5Enchantment = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S5EnchantmentPage')),
      300
    )
  })
})
const S6Sanctuary = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S6SanctuaryPage')),
      300
    )
  })
})
const S7Prophecy = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S7ProphecyPage')),
      300
    )
  })
})
const S8Dreams = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SeasonsPages/S8DreamsPage')), 300)
  })
})
const S9Assembly = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S9AssemblyPage')),
      300
    )
  })
})
const S10TheLittlePrince = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S10TheLittlePrincePage')),
      300
    )
  })
})
const S11Flight = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SeasonsPages/S11FlightPage')), 300)
  })
})
const S12Abyss = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SeasonsPages/S12AbyssPage')), 300)
  })
})
const S13Performance = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S13PerformancePage')),
      300
    )
  })
})
const S14Shattering = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S14ShatteringPage')),
      300
    )
  })
})
const S15Aurora = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SeasonsPages/S15AuroraPage')), 300)
  })
})
const S16Remembrance = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S16RemembrancePage')),
      300
    )
  })
})
const S17Passage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S17PassagePage')),
      300
    )
  })
})
const S18Moments = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S18MomentsPage')),
      300
    )
  })
})
const S19Revival = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S19RevivalPage')),
      300
    )
  })
})

const S20TheNineColoredDeer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S20TheNineColoredDeerPage')),
      300
    )
  })
})

const S21Nesting = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S21NestingPage')),
      300
    )
  })
})
const S22Duet = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SeasonsPages/S22DuetPage')), 300)
  })
})
const S23Moomin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SeasonsPages/S23MoominPage')), 300)
  })
})
const S24Radiance = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S24RadiancePage')),
      300
    )
  })
})

const S25BlueBird = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S25BlueBirdPage')),
      300
    )
  })
})

const S26TwoEmbersOne = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S26TwoEmbersOnePage')),
      300
    )
  })
})

const S27Migration = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S27MigrationPage')),
      300
    )
  })
})
const S28LightMending = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import('./pages/SeasonsPages/S28LightMendingPage')),
      300
    )
  })
})

function App() {
  return (
    <div className="mooliMono">
      <Suspense
        fallback={
          <div className="w-1/2 h-1/2 absolute top-1/2 left-1/2 -mx-6 my-0">
            <div className="flex">
              <Spinner className="h-20 w-20" color="amber" />
            </div>
          </div>
        }
      >
        <Router>
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <HomeSpace />
                  </Layout>
                }
              />
              <Route
                path="/maps/1/isle-of-dawn"
                element={
                  <Layout>
                    <PageIsle />
                  </Layout>
                }
              />
              <Route
                path="/maps/2/daylight-prairie"
                element={
                  <Layout>
                    <PagePrairie />
                  </Layout>
                }
              />
              <Route
                path="/maps/3/hidden-forest"
                element={
                  <Layout>
                    <PageForest />
                  </Layout>
                }
              />
              <Route
                path="/maps/4/valley-of-triumph"
                element={
                  <Layout>
                    <PageValley />
                  </Layout>
                }
              />
              <Route
                path="/maps/5/golden-wasteland"
                element={
                  <Layout>
                    <PageWasteland />
                  </Layout>
                }
              />
              <Route
                path="/maps/6/vault-of-knowledge"
                element={
                  <Layout>
                    <PageVault />
                  </Layout>
                }
              />
              <Route
                path="/maps/7/eye-of-eden"
                element={
                  <Layout>
                    <PageEden />
                  </Layout>
                }
              />
              <Route
                path="/maps/8/aviary-village"
                element={
                  <Layout>
                    <PageAviary />
                  </Layout>
                }
              />
              <Route
                path="/seasons"
                element={
                  <Layout>
                    <PageSeasonMap />
                  </Layout>
                }
              />
              <Route
                path="/winged-lights"
                element={
                  <Layout>
                    <PageWingedLights />
                  </Layout>
                }
              />
              <Route
                path="/map-shrines"
                element={
                  <Layout>
                    <PageMapShrines />
                  </Layout>
                }
              />
              <Route
                path="/veterans"
                element={
                  <Layout>
                    <PageVeterans />
                  </Layout>
                }
              />
              <Route
                path="seasons/2019/season-1/gratitude"
                element={
                  <Layout>
                    <S1Gratitude />
                  </Layout>
                }
              />
              <Route
                path="seasons/2019/season-2/lightseekers"
                element={
                  <Layout>
                    <S2LightSeeker />
                  </Layout>
                }
              />
              <Route
                path="seasons/2019/season-3/belonging"
                element={
                  <Layout>
                    <S3Belonging />
                  </Layout>
                }
              />
              <Route
                path="seasons/2020/season-4/rhythm"
                element={
                  <Layout>
                    <S4Rhythm />
                  </Layout>
                }
              />
              <Route
                path="seasons/2020/season-5/enchantment"
                element={
                  <Layout>
                    <S5Enchantment />
                  </Layout>
                }
              />
              <Route
                path="seasons/2020/season-6/sanctuary"
                element={
                  <Layout>
                    <S6Sanctuary />
                  </Layout>
                }
              />
              <Route
                path="seasons/2020/season-7/prophecy"
                element={
                  <Layout>
                    <S7Prophecy />
                  </Layout>
                }
              />
              <Route
                path="seasons/2021/season-8/dreams"
                element={
                  <Layout>
                    <S8Dreams />
                  </Layout>
                }
              />
              <Route
                path="seasons/2021/season-9/assembly"
                element={
                  <Layout>
                    <S9Assembly />
                  </Layout>
                }
              />
              <Route
                path="seasons/2021/season-10/the-little-prince"
                element={
                  <Layout>
                    <S10TheLittlePrince />
                  </Layout>
                }
              />
              <Route
                path="seasons/2021/season-11/flight"
                element={
                  <Layout>
                    <S11Flight />
                  </Layout>
                }
              />
              <Route
                path="seasons/2022/season-12/abyss"
                element={
                  <Layout>
                    <S12Abyss />
                  </Layout>
                }
              />
              <Route
                path="seasons/2022/season-13/performance"
                element={
                  <Layout>
                    <S13Performance />
                  </Layout>
                }
              />
              <Route
                path="seasons/2022/season-14/shattering"
                element={
                  <Layout>
                    <S14Shattering />
                  </Layout>
                }
              />
              <Route
                path="seasons/2022/season-15/aurora"
                element={
                  <Layout>
                    <S15Aurora />
                  </Layout>
                }
              />
              <Route
                path="seasons/2023/season-16/remembrance"
                element={
                  <Layout>
                    <S16Remembrance />
                  </Layout>
                }
              />
              <Route
                path="seasons/2023/season-17/passage"
                element={
                  <Layout>
                    <S17Passage />
                  </Layout>
                }
              />
              <Route
                path="seasons/2023/season-18/moments"
                element={
                  <Layout>
                    <S18Moments />
                  </Layout>
                }
              />
              <Route
                path="seasons/2023/season-19/revival"
                element={
                  <Layout>
                    <S19Revival />
                  </Layout>
                }
              />
              <Route
                path="seasons/2024/season-20/the-nine-colored-deer"
                element={
                  <Layout>
                    <S20TheNineColoredDeer />
                  </Layout>
                }
              />
              <Route
                path="seasons/2024/season-21/nesting"
                element={
                  <Layout>
                    <S21Nesting />
                  </Layout>
                }
              />
              <Route
                path="seasons/2024/season-22/duets"
                element={
                  <Layout>
                    <S22Duet />
                  </Layout>
                }
              />
              <Route
                path="seasons/2024/season-23/moomin"
                element={
                  <Layout>
                    <S23Moomin />
                  </Layout>
                }
              />
              <Route
                path="seasons/2025/season-24/radiance"
                element={
                  <Layout>
                    <S24Radiance />
                  </Layout>
                }
              />
              <Route
                path="seasons/2025/season-25/blue-bird"
                element={
                  <Layout>
                    <S25BlueBird />
                  </Layout>
                }
              />

              <Route
                path="seasons/2025/season-26/two-embers-one"
                element={
                  <Layout>
                    <S26TwoEmbersOne />
                  </Layout>
                }
              />

              <Route
                path="seasons/2025/season-27/migration"
                element={
                  <Layout>
                    <S27Migration />
                  </Layout>
                }
              />
              <Route
                path="seasons/2026/season-28/lightmending"
                element={
                  <Layout>
                    <S28LightMending />
                  </Layout>
                }
              />
              <Route
                path="/balita"
                element={
                  <Layout>
                    <News />
                  </Layout>
                }
              />
              <Route
                path="/team"
                element={
                  <Layout>
                    <Team />
                  </Layout>
                }
              />
              <Route
                path="/events"
                element={
                  <Layout>
                    <Events />
                  </Layout>
                }
              />
              <Route
                path="/support"
                element={
                  <Layout>
                    <Support />
                  </Layout>
                }
              />
              <Route
                path="/faq"
                element={
                  <Layout>
                    <FaQ />
                  </Layout>
                }
              />
              <Route
                path="*"
                element={
                  <Layout>
                    <ErrorPage />
                  </Layout>
                }
              />
            </Routes>
          </ScrollToTop>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
