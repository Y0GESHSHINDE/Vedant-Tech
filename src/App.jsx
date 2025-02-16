import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <Services/>
    <Projects/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App