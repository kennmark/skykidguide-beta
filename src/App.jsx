import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomeSpace from './pages/HomeSpace'
import News from './pages/News'
import Team from './pages/Team'
import Events from './pages/Events'
import Seasons from './pages/Seasons'
import ErrorPage from './pages/ErrorPage'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import FaQ from './pages/FaQ'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeSpace />} />
          <Route path="/balita" element={<News />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
