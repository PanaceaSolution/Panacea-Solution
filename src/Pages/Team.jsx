import React, { useState, useEffect, useRef } from 'react';
import Profile from '../Components/Profile';
import himani from '/assets/himani.jpg';
import krishna from '/assets/krishna.png';
import asmita from '/assets/asmita.png';
import gagan from '/assets/gagan.png';
import saswat from '/assets/saswat.jpg';
import bidhya from '/assets/bidhya.jpg';
import nitesh from '/assets/nitesh.jpg';

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
    <div ref={ref} className={`flex flex-col justify-center items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`} id="team">
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
        <Profile name="Himani Bhattarai" position="Partnership & Sponsorship Head" source={himani} />
        <Profile name="Krishna Bahadur Thapa" position="Tech Lead" source={krishna} />
        <Profile name="Gagan Pradhan" position="Operation Head" source={gagan} />
        <Profile name="Asmita Sharma" position="Finance & Documentation Head" source={asmita} />
        <Profile name="Bidhya Bhattarai" position="Stall Head" source={bidhya} />
        <Profile name="Nitesh Panthi" position="Marketing Head" source={nitesh} />
        <Profile name="Saswat Poudel" position="Logistics Head" source={saswat} />
      </div>
    </div>
  );
};

export default Team;
