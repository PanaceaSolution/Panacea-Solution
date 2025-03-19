import React, { useState, useEffect, useRef } from 'react';
import img from '/assets/shreyash.png';

const Hackathon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        setTitleVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <h1
        ref={titleRef}
        className={`text-white text-xl md:text-3xl xl:text-4xl font-medium text-center transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}
      >
        About Our Company
      </h1>
      <div
        ref={ref}
        className={`h-[45vh] w-[100vw] flex justify-around items-center gap-4 sm:h-[50vh] xl:h-[70vh] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}
      >
        <img
          src={img}
          alt="Hackathon Card"
          className={`h-[20vh] hover:scale-105 rounded-custom z-20 object-cover object-center sm:h-[30vh] sm:w-auto xl:w-[22vw] xl:h-[40vh] transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-90'}`}
        />
        <div
          className={`text-white w-[50%] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <p className='text-xs md:text-sm'>
            At Panacea Solution, we strive to deliver innovative, high-quality technology solutions tailored to clients' needs, with a strong emphasis on ethical practices, transparency, and security. We focus on continuous improvement, staying ahead of industry trends, and building trust-based, long-term partnerships.
          </p>
          <h2 className='mt-4 text-blue-300 text-2xl font-medium'>Shreyash Dahal</h2>
          <h3 className='mt-2 text-lg'>CEO</h3>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;