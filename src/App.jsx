import './App.css'
import Footer from './components/footer/footer'
import Search from './components/Home/Search/Search'
import Evolution from './components/Home/Card-info/Evolution/Evolution'
import typeEffect from './components/Home/Card-info/Type-Effect/Type-Effect'
import LogoCI from './components/Home/Card-info/Logo/Logo'

function App() {
  return (
    <div>
      <Search />
      <Evolution />
      <typeEffect />
      <LogoCI />
      <Footer />
    </div>
  )
}

export default App
