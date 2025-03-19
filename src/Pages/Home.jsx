import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from './Hero'
import AboutCompany from './AboutCompany'
import FluidCursor from '../Components/FluidCursor'
import Footer from './Footer'
import Services from './Services'
import Team from './Team'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-[#000a29] from-5% via-[#002f69] via-50% to-[#429ebd] to-80% cursor-none' id='container' >
        <FluidCursor/>
        <NavBar/>
        <Hero/>
        {/* <Offer/> */}
        <AboutCompany/>
        <Services/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home