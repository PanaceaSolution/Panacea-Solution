import React, { useState, useEffect, useRef } from 'react';

const Codeyatra = () => {
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
      className={`h-[100vh] w-[100vw] flex flex-col justify-around items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* What is CodeYatra Section */}
      <div
        className={`what h-[40%] flex flex-col justify-around items-center text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h1 className="text-xl font-bold text-center sm:text-3xl">
          What is CodeYatra Hackathon?
        </h1>
        <article className="text-justify w-[70%] text-sm font-light leading-6 sm:text-xl">
          CodeYatra is a flagship initiative that brings together bright minds from universities across Nepal to solve real-world problems using technology, teamwork, and creativity. With your esteemed organization’s support, we aim to make this event a transformative experience for students while fostering meaningful connections between academia and industry.
        </article>
      </div>

      {/* About CodeYatra Section */}
      <div
        className={`about h-[60%] flex flex-col justify-around items-center text-white py-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h1 className="text-xl font-bold text-center sm:text-3xl">
          About CodeYatra 2025
        </h1>
        <article className="text-justify w-[70%] text-sm font-light leading-6 sm:text-xl">
          CodeYatra is a three-day Hackathon event designed to cultivate innovation, technical skill development, and collaboration among university-level students.
          <br />
          <span className="font-semibold">The event includes:</span>
          <li>
            A 48-hour Hackathon where teams of 2–4 students compete to solve practical challenges through creative coding and innovation.
          </li>
          <li>
            An interactive Career Fest featuring company stalls, CV reviews, interviews, and expert-led workshops, providing participants with invaluable industry exposure.
          </li>
        </article>
      </div>
    </div>
  );
};

export default Codeyatra;
