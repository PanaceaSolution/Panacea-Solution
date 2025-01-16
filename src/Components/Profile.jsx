import React from 'react'

const Profile = ({name,position,source}) => {
  return (
    <div className='flex flex-col gap-4 text-white p-4 py-8'>
        <img src={source} className='h-[10vh] w-[10vh] rounded-full sm:h-[15vh] sm:w-[15vh]'/>
        <h1 className='text-lg font-semibold sm:text-xl'>{name}</h1>
        <h1 className='text-sm sm:text-lg'>{position}</h1>
    </div>
  )
}

export default Profile