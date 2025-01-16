import React from 'react'
import trophy from "/assets/trophy.png"

const Prize = () => {
  return (
    <>
        <h1 className='text-center text-2xl tracking-wider font-bold text-white py-4 my-4 sm:text-4xl sm:tracking-widest'>Prize Pool</h1>
    <div className='h-[90vh] w-[100vw] flex flex-col justify-start items-center text-white sm:flex-row sm:justify-center sm:items-center sm:gap-12'>
        <div className="prize-cup sm:flex sm:justify-center sm:items-center">
            <img src={trophy} alt="" className='h-[30vh] p-4 sm:h-[45vh]'/>
        </div>
        <div className="prizes grid grid-rows-3 grid-cols-1 py-4 sm:gap-8">
            <div className="first flex justify-center items-center gap-12">
                <img src="/assets/first.png" alt="" className='h-[15vh]'/>
                <div className="text-content">
                    <h1 className='text-lg font-semibold sm:text-2xl sm:my-4'>Winner</h1>
                    <p className='sm:text-lg'>Cash Prize of  RS. 50,000 + Gift Hamper</p>
                </div>
            </div>
            <div className="second flex justify-center items-center gap-12">
                <img src="/assets/second.png" alt="" className='h-[15vh]'/>
                <div className="text-content">
                    <h1 className='text-lg font-semibold sm:text-2xl sm:my-4'>First Runner Up</h1>
                    <p className='sm:text-lg'>Cash Prize of  RS. 30,000
                    + Gift Hamper</p>
                </div>
            </div>
            <div className="third flex justify-center items-center gap-12">
                <img src="/assets/third.png" alt="" className='h-[15vh] mx-2'/>
                <div className="text-content">
                    <h1 className='text-lg font-semibold sm:text-2xl sm:my-4'>Second Runner Up</h1>
                    <p className='sm:text-lg'>Cash Prize of  RS. 20,000
                    + Gift Hamper</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Prize