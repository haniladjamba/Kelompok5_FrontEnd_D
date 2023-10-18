import './App.css'
import Footer from './components/footer/footer'
import Header from './components/Header/header'
import Logo from './components/Header/logo'
import Gen1 from './components/Header/generations/gen1'
import Gen2 from './components/Header/generations/gen2'
import Gen3 from './components/Header/generations/gen3'
import Gen4 from './components/Header/generations/gen4'
import Generations from './components/Header/generations/generations'


function App() {
  return (
    <div>
      <Footer />
      <Header />
      <Logo />
      <Gen1 />
      <Gen2 />
      <Gen3 />
      <Gen4 />
      <Generations />
    </div>
  )
}

export default App