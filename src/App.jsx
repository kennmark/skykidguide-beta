import { PrimeReactProvider } from 'primereact/api'
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css'
//core
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './App.css'
import HomeSpace from './pages/HomeSpace'

function App() {
  return (
    <PrimeReactProvider>
      <HomeSpace />
    </PrimeReactProvider>
  )
}

export default App
