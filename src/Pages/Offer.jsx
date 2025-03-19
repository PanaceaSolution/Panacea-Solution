import React, { useState } from 'react'
import ExpandingCards from '../Components/ExpandingCards'

const Offer = () => {
  return (
        <div className='flex flex-col justify-center items-center h-[50vh] w-[100vw] gap-6 text-white cursor-default z-30'>

        <h1 className='text-2xl text-white text-center tracking-wider font-semibold sm:text-4xl'>We Offer The Best It <span className='text-blue-600'>Services</span></h1>
        <p>Our team is dedicated to simplifying complex issues and providing effective resolutions.</p>
        <div className="cards flex h-[100%] w-[100%] items-center justify-around ">
        <ExpandingCards content={"lorem ipsum"} contentActive={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, qui?"}/>
        <ExpandingCards content={"lorem ipsum"} contentActive={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, qui?"}/>
        <ExpandingCards content={"lorem ipsum"} contentActive={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, qui?"}/>
        </div>
    </div>
  )
}
export default Offer
