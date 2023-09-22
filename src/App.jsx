import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/components/ScrollToTop '
import './App.css'
import { Spinner, Typography } from '@material-tailwind/react'

const Header = lazy(() => import('./pages/components/Header'))
const Footer = lazy(() => import('./pages/components/Footer'))
const HomeSpace = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/HomeSpace')), 2000)
  })
})
const News = lazy(() => import('./pages/News'))
const Team = lazy(() => import('./pages/Team'))
const Events = lazy(() => import('./pages/Events'))
const Support = lazy(() => import('./pages/Support'))
const FaQ = lazy(() => import('./pages/FaQ'))
const PageIsle = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageIsle')), 500)
  })
})
const PagePrairie = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PagePrairie')), 500)
  })
})
const PageForest = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageForest')), 500)
  })
})
const PageValley = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageValley')), 500)
  })
})
const PageWasteland = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageWasteland')), 500)
  })
})
const PageVault = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageVault')), 500)
  })
})
const PageEden = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageEden')), 500)
  })
})
const PageSeasonMap = lazy(() => import('./pages/PageSeasonMap'))

const ErrorPage = lazy(() => import('./pages/ErrorPage'))

function App() {
  return (
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
            <Route path="/maps/2/daylight-prairie" element={<PagePrairie />} />
            <Route path="/maps/3/hidden-forest" element={<PageForest />} />
            <Route path="/maps/4/valley-of-triumph" element={<PageValley />} />
            <Route
              path="/maps/5/golden-wasteland"
              element={<PageWasteland />}
            />
            <Route path="/maps/6/vault-of-knowledge" element={<PageVault />} />
            <Route path="/maps/7/eye-of-eden" element={<PageEden />} />
            <Route
              path="/seasons/2023/season-18/moments"
              element={<PageSeasonMap />}
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
  )
}

export default App
