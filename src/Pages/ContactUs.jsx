import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
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
      className={`flex flex-col items-center justify-center h-[50vh] w-[100vw] p-4 gap-8 sm:h-[60vh] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}
      id="contact"
    >
      <h1 className="text-white text-2xl font-semibold tracking-wider sm:text-4xl">
        Contact Us
      </h1>
      <div
        className={`text-content grid grid-cols-4 text-white gap-6 text-sm sm:text-lg sm:gap-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}
      >
        <div className="logo">
          <FaPhoneAlt />
        </div>

        <h3>Himani Bhattarai</h3>
        <h3>Sponsorship Manager</h3>
        <h3>9840923002</h3>
        <div className="empty"></div>

        <h3>Krishna Bahadur Thapa</h3>
        <h3>Tech Lead</h3>
        <h3>9863284543</h3>
        <div className="empty"></div>

        <h3>Gagan Pradhan</h3>
        <h3>Operation Lead</h3>
        <h3>9867401807</h3>
      </div>
      <div
        className={`email-contact flex justify-start text-white gap-2 text-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}
      >
        <div className="logo flex justify-start">
          <MdOutlineEmail className="text-xl sm:text-2xl" />
          <h3 className="underline px-4">codeyatra.official@hcoe.edu.np</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
