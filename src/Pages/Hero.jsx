import React, { useEffect, useState } from 'react';
import vision from "/assets/vision-pro.png";

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
                    className={`text-content text-white flex flex-col gap-4 justify-center items-center py-4 sm:items-start transition-all duration-1000 ${
                        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                >
                    <h1 className='tracking-wide text-lg font-semibold xl:text-3xl'>Himalaya College of Engineering</h1>
                    <h2 className='tracking-wide text-lg font-extralight xl:text-3xl'>Presents</h2>
                    <h1 className='text-6xl font-bold tracking-widest text-center xl:text-7xl'>Code Yatra</h1>
                    <h2 className='text-lg font-extralight tracking-wide xl:text-3xl'>Journey to Innovation</h2>
                </div>
            </div>
            <div className="container-timer flex justify-start items-start z-30 sm:justify-center sm:items-center">
                <div
                    className={`container-text-timer h-[50%] w-[100%] relative cursor-default transition-all duration-1000 ${
                        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                >
                    <div className="image h-[100%] w-[100%]">
                        <img src={vision} alt="" className='transition-transform duration-1000 hover:scale-105' />
                    </div>
                    <div className="timer-text flex justify-center items-center h-[20%] w-[100%] text-white tracking-normal absolute top-[40%] left-[0] p-2 sm:text-xl sm:top-[45%] xl:top-[16vh]">
                        <h2 className='text-3xl font-bold'>Registration Closed</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
