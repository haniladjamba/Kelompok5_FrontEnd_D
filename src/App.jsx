import './App.css'
import Footer from './components/footer/footer'
import Search from './components/Home/Search/Search'
import cardInfo from './components/Home/Card-Info/Card_Info'
import Evolution from './components/Home/Card-info/Evolution'
import LogoCI from './components/Home/Card-info/Logo'
import typeEffect from './components/Home/Card-Info/Type_Effect'

function App() {
  return (
    <div>
      <Search />
      <cardInfo />
      <Evolution />
      <LogoCI />
      <typeEffect />
      <Footer />
    </div>
  )
}

export default App
