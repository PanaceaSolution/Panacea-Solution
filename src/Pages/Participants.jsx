import React, { useState, useEffect, useRef } from "react";

const Participants = () => {
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
    <div
      ref={ref}
      className={`h-[30vh] w-[100vw] flex flex-col justify-around items-center sm:h-[35vh] xl:h-[40vh] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1
        className={`text-2xl font-light text-white text-center sm:text-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Expected Participants For Hackathon
      </h1>
      <div
        className={`container grid grid-cols-3 justify-center items-center text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div
          className={`box flex flex-col justify-center items-center gap-4 transition-transform duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h1 className="text-xs sm:text-lg">2-4 teams</h1>
          <h3 className="text-sm sm:text-xl">Per Team</h3>
        </div>
        <div
          className={`box flex flex-col justify-center items-center gap-4 transition-transform duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h1 className="text-xs sm:text-lg">100+</h1>
          <h3 className="text-sm sm:text-xl">Total Participants</h3>
        </div>
        <div
          className={`box flex flex-col justify-center items-center gap-4 transition-transform duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h1 className="text-xs sm:text-lg">25+</h1>
          <h3 className="text-sm sm:text-xl">Total Team</h3>
        </div>
      </div>
    </div>
  );
};

export default Participants;
