import React, { useState, useEffect, useRef } from "react";
import Itclub from "/assets/Itclub.png";
import Hecc from "/assets/hecc.png";
import Hrc from "/assets/Hrc.png";

const OC = () => {
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
      className={`h-[100vh] w-[100vw] flex flex-col justify-around items-center sm:h-[70vh] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Section Heading */}
      <h1
        className={`text-center text-4xl text-white font-semibold tracking-wider my-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        CodeYatra Organizing Club
      </h1>

      {/* Club Logos */}
      <div
        className={`club-logo grid grid-rows-3 gap-6 sm:grid-cols-3 sm:grid-rows-1 transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div
          className={`logo-container flex justify-center items-center transition-transform duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src={Itclub}
            alt="IT Club Logo"
            className="h-[15vh] rounded-full mx-12 z-20 sm:h-[25vh]"
          />
        </div>
        <div
          className={`logo-container flex justify-center items-center transition-transform duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src={Hecc}
            alt="HECC Logo"
            className="h-[15vh] rounded-full z-20 sm:h-[25vh]"
          />
        </div>
        <div
          className={`logo-container flex justify-center items-center transition-transform duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src={Hrc}
            alt="HRC Logo"
            className="h-[15vh] rounded-full z-20 sm:h-[25vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default OC;
