import React from 'react'
import img from "/assets/codeyatra.png"

const NavBar = () => {
  return (
    <div>
        <nav className="h-[7vh] bg-black text-white font-light z-40 fixed w-[100vw] text-sm sm:text-xl xl:text-2xl">
            <ul className='flex justify-around items-center h-[100%] w-[100%] text-xs cursor-pointer tracking-wide sm:text-xl'>
                <img src={img} alt=" code yatra Logo" className='w-[14vw]'/>
                <li className='hover:scale-110 hover:font-semibold'>Home</li>
                <li className='hover:scale-110 hover:font-semibold'>About</li>
                <li className='hover:scale-110 hover:font-semibold'>Gallery</li>
                <li className='hover:scale-110 hover:font-semibold'>Contact</li>
                <li><button className='bg-orange-500 p-1 rounded-lg cursor-pointer px-3 font-semibold hover:bg-gradient-to-br from-purple-500 to-indigo-400 text-xs sm:text-xl'>Join Us</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar