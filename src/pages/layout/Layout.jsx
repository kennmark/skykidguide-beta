import Header from '../components/Header'
import Footer from '../components/Footer'
import ParallaxBG from '../components/ParallaxBG'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ParallaxBG />
      <Header />
      <div className="container mx-auto flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
