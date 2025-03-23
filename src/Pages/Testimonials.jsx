import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img from "/assets/shreyash.png";

const testimonials = [
  {
    name: "Shreyash Dahal",
    message:
      "At Panacea Solution, we strive to deliver innovative, high-quality technology solutions tailored to clients' needs, with a strong emphasis on ethical practices, transparency, and security.",
    image: img,
  },
  {
    name: "Consumer Eye Nepal",
    message:
      "At Panacea solution received website for Consumer Eye Nepal.",
    image: img,
  },
  {
    name: "Jane Smith",
    message:
      "We believe in continuous learning, innovation, and providing clients with the best software solutions.",
    image: img,
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
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4" />
              <p className="text-sm sm:text-base italic mb-4 max-w-[90%] sm:max-w-[70%] mx-auto">{testimonial.message}</p>
              <h2 className="text-blue-300 text-lg sm:text-xl font-medium">{testimonial.name}</h2>
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
