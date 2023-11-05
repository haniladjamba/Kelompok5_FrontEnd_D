import './App.css'
import Footer from './components/footer/footer'
import Header from './components/Header/header'
import Logo from './components/Header/logo'
import Gen1 from './components/Header/generations/gen1'
import Gen2 from './components/Header/generations/gen2'
import Gen3 from './components/Header/generations/gen3'
import Gen4 from './components/Header/generations/gen4'
import Generations from './components/Header/generations/generations'
import Home from './components/Home/Home'
import Search from './components/Home/Search'
import cardInfo from './components/Home/Card-Info/Card_Info'
import Evolution from './components/Home/Card-Info/Evolution'
import LogoCI from './components/Home/Card-Info/Logo'
import typeEffect from './components/Home/Card-Info/Type_Effect'

function App() {
  return (
    <div>
      <Header components="Header" />
      <Logo components="Logo"/>
      <Gen1 component="Gen-1" />
      <Gen2 component="Gen-2"/>
      <Gen3 component="Gen-3"/>
      <Gen4 component="Gen-4"/>
      <Generations component="Generations"/>
      <Home component="Home"/>
      <Search component="Search"/>
      <cardInfo component="Card-Info"/>
      <Evolution component="Evolution"/>
      <LogoCI component="Logo"/>
      <typeEffect component="Type-Effect"/>
      <Footer component="footer" />
    </div>
  )
}

export default App