import React, { useState, useEffect, useRef } from 'react';
import ServicesCards from '../Components/ServicesCards';

const Services = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

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

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        setCardsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        cardsObserver.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <div className='h-[100vh] md:h-[90vh] w-[100vw] z-40 flex flex-col items-center justify-center'>
      <div className="heading">
        <h1
          ref={titleRef}
          className={`text-white font-medium text-center text-xl md:text-3xl xl:text-5xl transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}
        >
          Services We <span className='text-blue-600'>Offer</span>
        </h1>
        <div
          ref={cardsRef}
          className={`transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <ServicesCards/>
        </div>
      </div>
    </div>
  );
};

export default Services;