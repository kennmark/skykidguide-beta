import Header from '../components/Header'
import Footer from '../components/Footer'
import ParallaxBG from '../components/ParallaxBG'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ParallaxBG />
      <Header />
      <div className="container mx-auto flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
