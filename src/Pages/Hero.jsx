import React, { useEffect, useState } from 'react';
import vision from "/assets/vision-pro.png";

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const targetTime = new Date("2025-02-03T00:00:00").getTime();

        const updateCountdown = () => {
            const currentTime = new Date().getTime();
            const difference = targetTime - currentTime;
            setTimeLeft(difference > 0 ? difference : 0);
        };

        updateCountdown();

        const interval = setInterval(() => {
            updateCountdown();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

    return (
        <div className='w-screen h-[70vh] grid grid-rows-2 grid-cols-1 py-12 sm:grid-cols-2 sm:grid-rows-1 sm:h-[80vh] xl:h-[100vh]'>
            <div className="container-welcome uppercase flex flex-col justify-center items-center">
                <div className="text-content text-white flex flex-col gap-4 justify-center items-center py-4 sm:items-start">
                    <h1 className='tracking-wide text-lg font-semibold xl:text-3xl'>Himalaya College of Engineering</h1>
                    <h2 className='tracking-wide text-lg font-extralight xl:text-3xl'>Presents</h2>
                    <h1 className='text-6xl font-bold tracking-widest text-center xl:text-7xl'>Code Yatra</h1>
                    <h2 className='text-lg font-extralight tracking-wide xl:text-3xl'>Journey to Innovation</h2>
                </div>
            </div>
            <div className="container-timer flex justify-start items-start z-30 sm:justify-center sm:items-center">
                <div className="container-text-timer h-[50%] w-[100%] relative cursor-default">
                    <div className="image h-[100%] w-[100%]">
                        <img src={vision} alt="" />
                    </div>
                    <div className="timer-text grid grid-cols-7 h-[20%] w-[60%] text-white tracking-normal absolute top-[50%] left-[19%] p-2 sm:text-2xl sm:top-[45%] sm:left-[17%] xl:left-[10vw] xl:w-[50%] xl:top-[16vh] ">
                        <h2 className='text-2xl font-bold flex items-center justify-center'>{days}</h2>
                        <h2 className='text-2xl font-bold flex items-center justify-center'>:</h2>
                        <h2 className='text-2xl font-bold flex items-center justify-center'>{hours}</h2>
                        <h2 className='text-2xl font-bold flex items-center justify-center'>:</h2>
                        <h2 className='text-2xl font-bold flex items-center justify-center'>{minutes}</h2>
                        <h2 className='text-2xl font-bold flex items-center justify-center'>:</h2>
                        <h2 className='text-2xl font-bold flex items-center justify-center'>{seconds}</h2>
                        <h2>Days</h2>
                        <h2></h2>
                        <h2>Hours</h2>
                        <h2></h2>
                        <h2>Minutes</h2>
                        <h2></h2>
                        <h2>Seconds</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;