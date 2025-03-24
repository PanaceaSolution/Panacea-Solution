import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mmsn from "/assets/mmsn.png";
import consumereye from "/assets/consumereye.png"

const testimonials = [
  {
    name: "Subarna Adhikari",
    message:
      "Panacea Solution Nepal has demonstrated an exceptional level of professionalism and expertise in delivering solutions that perfectly align with our needs. Their innovative approach and attention to detail have significantly enhanced our operational efficiency and overall effectiveness. From the initial consultation to the implementation of their services, Panacea Solution Nepal has consistently exceeded our expectations.",
    image: mmsn,
  },
  {
    name: "Consumer Eye Nepal",
    message:
      "Consumer Eye Nepal is extremely satisfied with the exceptional designing and website development services provided by Panacea Solution Pvt. Ltd. Their team demonstrated professionalism, creativity, and technical expertise, delivering a sleek, user-friendly website that perfectly aligns with our vision. We highly recommend Panacea Solution for top-notch digital solutions!",
    image: consumereye,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 7000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  return (
    <div className="relative h-[50vh]  w-full max-w-full mx-auto overflow-hidden text-white z-[999] cursor-default">
      <h1 className="text-3xl font-bold text-center mb-6 w-full">Testimonials</h1>
      <div className="relative flex items-center justify-between w-full">
        {/* Left Button */}
        <button
          className="absolute left-4 z-10 p-2 bg-gray-800 rounded-full hover:bg-gray-600"
          onClick={prevSlide}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Testimonial Cards */}
        <div className="flex transition-transform duration-700 ease-in-out transform w-full"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full flex flex-col items-center text-center p-6">
              <img src={testimonial.image} alt={testimonial.name} className="h-[10vh] md:h-[12vh] py-2" />
              <p className="text-sm sm:text-base italic mb-4 max-w-[90%] sm:max-w-[70%] mx-auto">{testimonial.message}</p>
              <h2 className="text-white text-lg sm:text-xl font-medium">{testimonial.name}</h2>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="absolute right-4 p-2 bg-black rounded-full hover:bg-gray-600 z-[9999]"
          onClick={nextSlide}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-110" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
