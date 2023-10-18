import './App.css'
import Footer from './components/footer/footer'
import Header from './components/Header/header'
import Logo from './components/Header/logo'
import Gen3 from './components/generations/gen3'
import Gen4 from './components/generations/gen4'


function App() {
  return (
    <div>
      <Footer />
      <Header />
      <Logo />
      <Gen3 />
      <Gen4 />
    </div>
  )
}

export default App