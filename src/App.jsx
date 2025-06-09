import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Home from './components/Home' 
import StatsSection from './components/StatsSection'
import FeaturedDishes from './components/FeaturedDishes'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import QuoteSlider from './components/QuoteSlider'
import FoodMenu from './components/FoodMenu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='w-full flex flex-col items-center justify-center'>
      <Hero />
      <Nav />
      <Home />
      <FeaturedDishes />
      <QuoteSlider />
      <FoodMenu />
      <StatsSection />
      <ContactSection />
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
