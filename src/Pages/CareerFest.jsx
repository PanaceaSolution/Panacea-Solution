import React from 'react'
import img from '/assets/hackathon.png'

const CareerFest = () => {
  return (
    <div className='h-[60vh] w-[100vw] flex flex-col justify-start items-center gap-4 sm:h-[90vh] xl:h-[100vh]'>
        <img src={img} alt="Hackathon Card" className='h-[50vh] w-[90vw] rounded-xl z-20 sm:h-[75vh] sm:w-[50vw] xl:w-[35vw] xl:h-[80vh]'/>
        <button className='bg-orange-500 p-1 rounded-lg cursor-pointer px-3 font-light tracking-wider hover:bg-gradient-to-br from-purple-500 to-indigo-400 z-20 text-white text-sm sm:text-xl'>Click Here For Registration</button>
    </div>
  )
}

export default CareerFest