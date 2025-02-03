import React, { useState, useEffect, useRef } from "react";

const Supported = () => {
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
      className={`flex flex-col justify-center items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1
        className={`text-white text-center text-4xl font-semibold tracking-wider my-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Supported By
      </h1>
      <img
        src="https://hcoe.edu.np/uploads/images/postImages/1(1).jpg"
        alt="FSU Logo"
        className={`h-[15vh] rounded-full transition-transform duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } sm:h-[25vh]`}
      />
    </div>
  );
};

export default Supported;
