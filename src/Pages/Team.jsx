import React, { useState, useEffect, useRef } from 'react';
import Profile from '../Components/Profile';
import himani from '/assets/himani.jpg';
import krishna from '/assets/krishna.png';
import shreyash from '/assets/shreyash.png';
import saurashya from '/assets/saurashya.png'
import ujjwal from '/assets/ujjwal.png'
import cherry from '/assets/cherry.png'

const Team = () => {
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
    <div ref={ref} className={`h-[100vh] flex flex-col justify-center items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`} id="team">
      <h1 className="text-white text-4xl font-bold text-center tracking-widest">
        Our Team
      </h1>
      <h2 className="text-white text-lg font-semibold text-center tracking-widest">
        Core Team
      </h2>
      <div
        className={`profiles grid grid-cols-2 gap-12 p-4 sm:grid-cols-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Profile name="Shreyash Dahal" position="CEO" source={shreyash} />
        <Profile name="Ujjwal Timalsina" position="Managing Director" source={ujjwal} />
        <Profile name="Saurashya Singh Rayamajhi" position="CTO" source={saurashya} />
        <Profile name="Himani Bhattarai" position="Human Resource & Creative Head" source={himani} />
        <Profile name="Shushank Gyawali" position="UI/UX Designer" source={cherry} />
        <Profile name="Krishna Bahadur Thapa" position="Project Manager" source={krishna} />
      </div>
    </div>
  );
};

export default Team;
