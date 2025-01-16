import React from 'react'

const Participants = () => {
  return (
    <div className="h-[20vh] w-[100vw]  flex flex-col justify-around items-center sm:h-[35vh] xl:h-[40vh]">
        <h1 className='text-2xl font-light text-white text-center sm:text-3xl'>Expected Participants For Hackathon</h1>
    <div className="container grid grid-cols-3 justify-center items-center text-white">
        <div className="box flex flex-col justify-center items-center gap-4">
            <h1 className='text-xs sm:text-lg'>2-4 teams</h1>
            <h3  className='text-sm sm:text-xl'>Per Team</h3>
        </div>
        <div className="box flex flex-col justify-center items-center gap-4">
            <h1 className='text-xs sm:text-lg'>100+</h1>
            <h3 className='text-sm sm:text-xl'>Total Participants</h3>
        </div>
        <div className="box flex flex-col justify-center items-center gap-4">
            <h1 className='text-xs sm:text-lg'>25+</h1>
            <h3 className='text-sm sm:text-xl'> Total Team</h3>
        </div>
    </div>
</div>
  )
}

export default Participants