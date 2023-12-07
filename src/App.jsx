import { Fragment } from 'react'
import './App.css'
import { HeroSection } from './components/Sections/HeroSection'
import MarqueeJuice from './components/Sections/MarqueeJuice'
import { ProductSection } from './components/Sections/ProductSection'

function App() {

  return (
   <Fragment>
      <HeroSection />
      <MarqueeJuice />
      <ProductSection />
   </Fragment>
  )
}

export default App
