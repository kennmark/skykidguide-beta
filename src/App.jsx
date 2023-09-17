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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeSpace />} />
          <Route path="/maps/1/isle-of-dawn" element={<PageIsle />} />
          <Route path="/maps/2/daylight-prairie" element={<PageIsle />} />
          <Route path="/maps/3/hidden-forest" element={<PageIsle />} />
          <Route path="/maps/4/valley-of-triumph" element={<PageIsle />} />
          <Route path="/maps/5/golden-wasteland" element={<PageIsle />} />
          <Route path="/maps/6/vault-of-knowledge" element={<PageIsle />} />
          <Route path="/maps/7/eye-of-eden" element={<PageIsle />} />
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
