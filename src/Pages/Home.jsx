import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from './Hero'
import Hackathon from './Hackathon'
import FluidCursor from '../Components/FluidCursor'
import Participants from './Participants'
import CareerFest from './CareerFest'
import About from './About'
import OC from './OC'
import Codeyatra from './CodeYatra'
import Sponsors from './Sponsors'
import Prize from './Prize'
import Team from './Team'
import ContactUs from './ContactUs'
import GetInTouch from './GetInTouch'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-purple-700 from-5% via-black via-50% to-indigo-500 to-80%'>
        <FluidCursor/>
        <NavBar/>
        <Hero/>
        <Hackathon/>
        <Participants/>
        <CareerFest/>
        <About/>
        <OC/>
        <Codeyatra/>
        <Sponsors/>
        <Prize/>
        <Team/>
        <ContactUs/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default Home