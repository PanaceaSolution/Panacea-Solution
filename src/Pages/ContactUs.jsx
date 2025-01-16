import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[30vh] w-[100vw] p-4 gap-8 sm:h-[50vh]'>
        <h1 className='text-white text-2xl font-semibold tracking-wider sm:text-4xl'>Contact Us</h1>
       <div className="text-content grid grid-cols-4 text-white gap-6 text-sm sm:text-lg sm:gap-12">
            <div className="logo"><FaPhoneAlt /></div>
            <h3>9840923002</h3>
            <h3>Himani Bhattarai</h3>
            <h3>Sponsorship Manager</h3>
            <div className="empty"></div>
            <h3>9863284543</h3>
            <h3>Krishna Bahadur Thapa</h3>
            <h3>Tech Lead</h3>
            <div className="empty"></div>
            <h3>9867401807</h3>
            <h3>Gagan Pardan</h3>
            <h3>Operation Lead</h3>
       </div>
       <div className="email-contact grid grid-cols-2 text-white gap-6 text-sm">
            <div className="logo"><MdOutlineEmail className='text-xl sm:text-2xl'/></div>
            <div className="flex justify-center items-center">
                <h3 className='underline'>codeyatra.official@hcoe.edu.np</h3>
            </div>
       </div>
    </div>
  )
}

export default ContactUs