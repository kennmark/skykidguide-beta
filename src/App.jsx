import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './Clock.css'
import './fonts/MooliFont.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

import ScrollToTop from './pages/components/ScrollToTop '
import { Spinner } from '@material-tailwind/react'

const Header = lazy(() => import('./pages/components/Header'))
const Footer = lazy(() => import('./pages/components/Footer'))
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
            <Header />
            <Routes>
              <Route path="/" element={<HomeSpace />} />
              <Route path="/maps/1/isle-of-dawn" element={<PageIsle />} />
              <Route
                path="/maps/2/daylight-prairie"
                element={<PagePrairie />}
              />
              <Route path="/maps/3/hidden-forest" element={<PageForest />} />
              <Route
                path="/maps/4/valley-of-triumph"
                element={<PageValley />}
              />
              <Route
                path="/maps/5/golden-wasteland"
                element={<PageWasteland />}
              />
              <Route
                path="/maps/6/vault-of-knowledge"
                element={<PageVault />}
              />
              <Route path="/maps/7/eye-of-eden" element={<PageEden />} />
              <Route path="/seasons" element={<PageSeasonMap />} />
              <Route path="/winged-lights" element={<PageWingedLights />} />
              <Route path="/map-shrines" element={<PageMapShrines />} />
              <Route
                path="seasons/2019/season-1/gratitude"
                element={<S1Gratitude />}
              />
              <Route
                path="seasons/2019/season-2/lightseekers"
                element={<S2LightSeeker />}
              />
              <Route
                path="seasons/2019/season-3/belonging"
                element={<S3Belonging />}
              />
              <Route
                path="seasons/2020/season-4/rhythm"
                element={<S4Rhythm />}
              />
              <Route
                path="seasons/2020/season-5/enchantment"
                element={<S5Enchantment />}
              />
              <Route
                path="seasons/2020/season-6/sanctuary"
                element={<S6Sanctuary />}
              />
              <Route
                path="seasons/2020/season-7/prophecy"
                element={<S7Prophecy />}
              />
              <Route
                path="seasons/2021/season-8/dreams"
                element={<S8Dreams />}
              />
              <Route
                path="seasons/2021/season-9/assembly"
                element={<S9Assembly />}
              />
              <Route
                path="seasons/2021/season-10/the-little-prince"
                element={<S10TheLittlePrince />}
              />
              <Route
                path="seasons/2021/season-11/flight"
                element={<S11Flight />}
              />
              <Route
                path="seasons/2022/season-12/abyss"
                element={<S12Abyss />}
              />
              <Route
                path="seasons/2022/season-13/performance"
                element={<S13Performance />}
              />
              <Route
                path="seasons/2022/season-14/shattering"
                element={<S14Shattering />}
              />
              <Route
                path="seasons/2022/season-15/aurora"
                element={<S15Aurora />}
              />
              <Route
                path="seasons/2023/season-16/remembrance"
                element={<S16Remembrance />}
              />
              <Route
                path="seasons/2023/season-17/passage"
                element={<S17Passage />}
              />
              <Route
                path="seasons/2023/season-18/moments"
                element={<S18Moments />}
              />
              <Route
                path="seasons/2023/season-19/revival"
                element={<S19Revival />}
              />
              <Route
                path="seasons/2024/season-20/the-nine-colored-deer"
                element={<S20TheNineColoredDeer />}
              />
              <Route path="/balita" element={<News />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<FaQ />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </ScrollToTop>
        </Router>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
