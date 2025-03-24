import React, { useEffect, useState } from 'react';
import vision from "/assets/landing-2.png"
const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className={`w-screen h-[100vh] grid grid-rows-2 grid-cols-1 py-12 sm:grid-cols-2 sm:grid-rows-1 sm:h-[80vh] xl:h-[100vh] transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            id='home'
        >
            <div className="container-welcome uppercase flex flex-col justify-center items-center">
                <div
                    className={`text-content text-white flex flex-col gap-4 gap-y-6 justify-center items-center px-6 md:px-16 py-4 sm:items-start transition-all duration-1000 ${
                        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                >
                    <h1 className='tracking-wide text-lg font-semibold xl:text-3xl'>Panacea Solution Pvt.Ltd.</h1>
                    <h1 className='text-4xl text-center font-bold tracking-widest xl:text-5xl text-wrap sm:text-left sm:text-6xl'>Helping Small businesses grow with IT solutions. 
                    </h1>
                    <button className='bg-blue-700 p-4 rounded-md cursor-pointer px-6 font-semibold hover:bg-gradient-to-br from-[#429ebd] to-indigo-400 text-xs sm:text-xl transition-transform duration-500 hover:scale-105' onClick={() => window.open("https://forms.gle/Z5DtCJjCQtrLSRGT9", "_blank")}>Get Started</button>
                    <h2 className='text-lg font-extralight tracking-wide xl:text-3xl'></h2>
                </div>
            </div>
            <div className="container-timer flex justify-center items-center z-30 sm:justify-center sm:items-center">
                    <div className="image flex items-center justify-center h-[100%] w-[100%]">
                        <img src={vision} alt="" className='transition-transform duration-1000 hover:scale-105 h-[75%] rounded-lg sm:h-[45%]' />
                    </div>
            </div>
        </div>
    );
};

export default Hero;
