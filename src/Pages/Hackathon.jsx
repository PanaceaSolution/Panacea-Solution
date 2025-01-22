import React, { useState, useEffect, useRef } from 'react';
import img from '/assets/hackathon_img.png';

const Hackathon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

  return (
    <div
      ref={ref}
      className={`h-[70vh] w-[100vw] flex flex-col justify-around items-center gap-4 sm:h-[90vh] xl:h-[100vh] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000`}
    >
      <img
        src={img}
        alt="Hackathon Card"
        className={`h-[50vh] w-[80vw] rounded-xl z-20 sm:h-[80vh] sm:w-[40vw] xl:w-[30vw] xl:h-[80vh] ${isVisible ? 'scale-100' : 'scale-90'} transition-all duration-1000`}
      />
      <button className="bg-orange-500 p-1 rounded-lg cursor-pointer px-3 font-light tracking-wider hover:bg-gradient-to-br from-purple-500 to-indigo-400 text-white text-sm sm:text-xl !z-20">
        <a href="https://forms.gle/AdmctKdKMVyAdpxi9" target="_blank" rel="noopener noreferrer" >
          Click Here To Register
        </a>
      </button>
    </div>
  );
};

export default Hackathon;
