import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer h-[45vh] w-[100%] bg-gradient-to-b from-blue-800 from-5 to-black to-80% flex flex-col justify-center items-center py-6 md:h-[30vh] gap-2 my-2' id='footer '>
        <h1 className='text-white text-center text-sm tracking-wide sm:text-xl'>Stay Up To Date with our News and Notifications</h1>
        <div className="logos flex justify-center gap-4 items-center h-[50%]">
          <div className="logo bg-gray-500 rounded-full p-1  z-20 cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=61571496493661" target='_blank'><FaFacebook className='text-white'/></a>
          </div>
          <div className="logo bg-gray-500 rounded-full p-1 z-20 cursor-pointer">
            <a href="https://www.instagram.com/codeyatra_2025/" target='_blank'><FaInstagram className='text-white' /></a>
          </div>
          <div className="logo bg-gray-500 rounded-full p-1 z-20 cursor-pointer">
            <a href="https://www.linkedin.com/company/codeyatra" target='_blank'><FaLinkedin className='text-white' /></a>
          </div>
        </div>
        <p className='text-white font-extralight text-xs sm:text-sm'>Copyright &copy; CodeYatra | All Rights Reserved</p>
        <p className='text-white text-xs sm:text-sm z-20 text-center font-semibold'>Powered By : <span><a href="https://panaceasolutionnepal.com/" target='_blank'> <img src="https://panaceasolutionnepal.com/wp-content/uploads/2024/12/Logo-White-300x225.png" alt="Panacea solution logo"  className='h-24 w-32 my-4'/></a></span></p>
       
    </div>
  )
}

export default Footer