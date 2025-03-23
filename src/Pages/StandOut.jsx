import React, { useState, useEffect, useRef } from 'react';

const StandOut = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setContentVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className='h-[50vh] grid grid-cols-1'>
      <div 
        ref={contentRef} 
        className={`content-top flex gap-4 justify-around items-center transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className='text-white font-bold text-left text-2xl md:text-4xl tracking-wider'>
          What Makes us <span className='block text-blue-500'>Stand Out!</span>
        </h2>
        <p className='w-[40%] text-justify text-white text-xs md:text-lg '>
          Our offerings assist you in developing digital solutions and resolving challenges through a comprehensive approach encompassing strategy, technology, and analysis. Our services are particularly enticing due to their visually appealing color combinations and minimalist design concept.
        </p>
      </div>
    </div>
  );
};

export default StandOut;
