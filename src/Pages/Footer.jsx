import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
      className={`footer h-[30vh] w-[100%] bg-black flex flex-col justify-center items-center py-6 md:h-[17vh] md:w-[100vw] gap-2 my-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 cursor-default`}
      id="footer"
    >
      <h1 className="text-white text-center text-sm tracking-wide sm:text-xl">
        Stay Up To Date with our News and Notifications
      </h1>
      <div
        className={`logos flex justify-center gap-4 items-center h-[50%] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}
      >
        <div className="logo bg-blue-500 rounded-full p-2 z-20 cursor-pointer">
          <a href="https://www.facebook.com/PanaceaSolution" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white" />
          </a>
        </div>
        <div className="logo bg-gradient-to-br from-yellow-500 via-pink-500 to-purple-600
 rounded-full p-2 z-20 cursor-pointer">
          <a href="https://www.instagram.com/panaceasolutionnepal/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white" />
          </a>
        </div>
        <div className="logo bg-blue-700 rounded-full p-2 z-20 cursor-pointer">
          <a href="https://www.linkedin.com/company/panacea-solution-nepal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white" />
          </a>
        </div>
      </div>
      <p className="text-white font-extralight text-xs sm:text-sm">
        Copyright &copy; Panacea Solution Pvt. Ltd. | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
