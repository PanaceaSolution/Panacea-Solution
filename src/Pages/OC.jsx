import React from 'react'
import Itclub from "/assets/Itclub.png"
import Hecc from "/assets/hecc.png"
import Hrc from "/assets/Hrc.png"

const OC = () => {
  return (
    <div className='h-[80vh] w-[100vw] flex flex-col justify-around items-center sm:h-[70vh]'>
        <h1 className='text-center text-4xl text-white font-semibold tracking-wider my-12'>CodeYatra Organizing Club</h1>
        <div className="club-logo grid grid-rows-3 gap-6 sm:grid-cols-3 sm:grid-rows-1">
           <div className="logo-container flex justify-center items-center">
            <img src={Itclub} alt="It club Logo"className='h-[15vh] rounded-full mx-12 z-20 sm:h-[25vh]' />
           </div>
           <div className="logo-container flex justify-center items-center">
              <img src={Hecc} alt="Hecc Logo" className='h-[15vh] rounded-full z-20 sm:h-[25vh]'/>
           </div>
           <div className="logo-container flex justify-center items-center">
             <img src={Hrc} alt=" HRC logo" className='h-[15vh] rounded-full z-20 sm:h-[25vh]' />
           </div>
        </div>
    </div>
  )
}

export default OC