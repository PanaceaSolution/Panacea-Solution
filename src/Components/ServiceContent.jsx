import React from 'react'

const ServiceContent = ({heading,content,source}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-6 gap-6 h-[15vh] md:h-[100%] z-[999]'>
       <div className="content flex flex-col items-start justify-start gap-6">
            <h1 className='text-xl md:text-2xl font-medium'>{heading}</h1>
            <p className='text-xs md:text-sm'>{content}</p>
            <button className='bg-blue-600 text-white font-medium p-2 rounded-lg hover:bg-gradient-to-br from-blue-500 to-indigo-400'>Contact Us</button>
       </div>
       <div className="img-container flex items-start justify-center">
            <img src={source} alt="" className='h-[55%] hidden md:block'/>
       </div>
    </div>
  )
}

export default ServiceContent