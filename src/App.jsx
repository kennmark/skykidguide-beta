import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomeSpace from './pages/HomeSpace'
import News from './pages/News'
import Team from './pages/Team'
import Events from './pages/Events'
import Support from './pages/Support'
import ErrorPage from './pages/ErrorPage'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import FaQ from './pages/FaQ'
import PageIsle from './pages/PageIsle'
import PagePrairie from './pages/PagePrairie'
import PageForest from './pages/PageForest'
import PageValley from './pages/PageValley'
import PageWasteland from './pages/PageWasteland'
import PageVault from './pages/PageVault'
import PageEden from './pages/PageEden'
import PageSeasonMap from './pages/PageSeasonMap'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeSpace />} />
          <Route path="/maps/1/isle-of-dawn" element={<PageIsle />} />
          <Route path="/maps/2/daylight-prairie" element={<PagePrairie />} />
          <Route path="/maps/3/hidden-forest" element={<PageForest />} />
          <Route path="/maps/4/valley-of-triumph" element={<PageValley />} />
          <Route path="/maps/5/golden-wasteland" element={<PageWasteland />} />
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
      </Router>
      <Footer />
    </>
  )
}

export default App
