import React, { useEffect, useState } from 'react';
import img from "/assets/panacea.png";
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <nav
        className={`h-[10vh] bg-[#122B4B] text-white font-light z-40 fixed w-[100%] text-sm sm:text-xl xl:text-2xl transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <ul className='flex justify-around items-center h-[100%] w-[100%] text-[10px] cursor-pointer tracking-wide sm:text-xl'>
          <img
            src={img}
            alt="code yatra Logo"
            className='w-[5vw] transition-transform duration-1000 hover:scale-110'
          />
            <li className='hover:scale-110 hover:font-semibold transition-transform duration-500'>
              <a href="#home">About Us</a>
            </li>
            <li className='hover:scale-110 hover:font-semibold transition-transform duration-500'>
              <a href="#about">Services</a>
            </li>
            <li className='hover:scale-110 hover:font-semibold transition-transform duration-500'>
              <a href="#team">Courses</a>
            </li>
            <li className='hover:scale-110 hover:font-semibold transition-transform duration-500'>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <button className='bg-blue-500 p-1 rounded-lg cursor-pointer px-3 font-semibold hover:bg-gradient-to-br from-[#429ebd] to-indigo-400 text-xs sm:text-xl transition-transform duration-500 hover:scale-105'>
                <a href="" target='_blank'>
                  Enroll Now
                </a>
              </button>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
