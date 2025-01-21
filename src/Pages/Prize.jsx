import React, { useState, useEffect, useRef } from 'react';
import trophy from '/assets/trophy.png';

const Prize = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the component is visible
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

  return (
    <div ref={ref}>
      <h1
        className={`text-center text-2xl tracking-wider font-bold text-white py-4 my-4 sm:text-4xl sm:tracking-widest transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Prize Pool
      </h1>
      <div
        className={`h-[90vh] w-[100vw] flex flex-col justify-start items-center text-white sm:flex-row sm:justify-center sm:items-center sm:gap-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Trophy Section */}
        <div
          className={`prize-cup sm:flex sm:justify-center sm:items-center transition-transform duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img src={trophy} alt="Trophy" className="h-[30vh] p-4 sm:h-[45vh]" />
        </div>

        {/* Prize Details */}
        <div
          className={`prizes grid grid-rows-3 grid-cols-1 py-4 sm:gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Winner Section */}
          <div
            className={`first flex justify-center items-center gap-12 transition-transform duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img src="/assets/first.png" alt="First Prize" className="h-[15vh]" />
            <div className="text-content">
              <h1 className="text-lg font-semibold sm:text-2xl sm:my-4">Winner</h1>
              <p className="sm:text-lg">Cash Prize of RS. 50,000 + Gift Hamper</p>
            </div>
          </div>

          {/* First Runner-Up Section */}
          <div
            className={`second flex justify-center items-center gap-12 transition-transform duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img src="/assets/second.png" alt="Second Prize" className="h-[15vh]" />
            <div className="text-content">
              <h1 className="text-lg font-semibold sm:text-2xl sm:my-4">First Runner Up</h1>
              <p className="sm:text-lg">Cash Prize of RS. 30,000 + Gift Hamper</p>
            </div>
          </div>

          {/* Second Runner-Up Section */}
          <div
            className={`third flex justify-center items-center gap-12 transition-transform duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img src="/assets/third.png" alt="Third Prize" className="h-[15vh] mx-2" />
            <div className="text-content">
              <h1 className="text-lg font-semibold sm:text-2xl sm:my-4">Second Runner Up</h1>
              <p className="sm:text-lg">Cash Prize of RS. 20,000 + Gift Hamper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
