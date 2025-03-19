import React, { useState } from "react";
import ServiceContent from "./ServiceContent";
import IT from "/assets/IT.png";
import card1 from "/assets/card1.png";
import card2 from "/assets/card2.png";
import card3 from "/assets/card3.png";
import card4 from "/assets/card4.png";
import card5 from "/assets/card5.png";

const serviceData = [
  { id: 0, title: "IT", content: "We craft IT designs tailored to your needs, helping you visualize and understand your solution.", source: IT },
  { id: 1, title: "Web Development", content: "We specialize in creating responsive, high-performance websites that provide a seamless user experience across all devices.", source: card1 },
  { id: 2, title: "App Development", content: "We build robust mobile applications that offer intuitive interfaces and smooth functionality for both iOS and Android platforms.", source: card2 },
  { id: 3, title: "UI/UX Design", content: "Our design team focuses on crafting beautiful, user-friendly interfaces and experiences that engage your users and promote your brand.", source: card3 },
  { id: 4, title: "Digital Marketing", content: "We help you amplify your online presence with tailored strategies, leveraging SEO, social media, and content marketing to drive traffic and conversions.", source: card4 },
  { id: 5, title: "Ecommerce Solutions", content: "We offer end-to-end eCommerce solutions, from platform development to integrated payment systems, ensuring smooth and scalable online stores.", source: card5 },
];

const ServicesCards = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="h-[70vh] grid grid-cols-1 md:grid-cols-3 p-6 gap-6 relative z-[9999]">
      {/* Mobile View: Horizontal Scrollable Carousel */}
      <div className="md:hidden flex overflow-x-auto gap-4 pb-4 px-4 scrollbar-hide snap-x scroll-smooth">
        {serviceData.map(({ id, title, source }) => (
          <div
            key={id}
            className={`flex flex-col items-center gap-2 p-3 h-[13vh] min-w-[120px] rounded-lg shadow-md cursor-pointer snap-center transition-all duration-300 ${
              selected === id
                ? "bg-gradient-to-br from-[#429ebd] to-indigo-400 text-white scale-105"
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}
            onClick={() => setSelected(id)}
          >
            <img src={source} alt={title} className="h-[40px] w-[40px]" />
            <h3 className="text-xs font-medium text-center">{title}</h3>
          </div>
        ))}
      </div>

      {/* Desktop View: Sidebar Selector */}
      <div className="hidden md:flex flex-col gap-4 p-4 col-span-1">
        {serviceData.map(({ id, title, source }) => (
          <div
            key={id}
            className={`flex items-center gap-4 p-3 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
              selected === id
                ? "bg-gradient-to-br from-[#429ebd] to-indigo-400 text-white translate-x-2"
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}
            onClick={() => setSelected(id)}
          >
            <img src={source} alt={title} className="h-[5vh]" />
            <h3 className="text-sm md:text-lg font-medium uppercase">{title}</h3>
          </div>
        ))}
      </div>

      {/* Content Display */}
      <div className="content bg-[#EFF6FF] col-span-2 p-6 h-full rounded-lg shadow-lg cursor-default">
        <ServiceContent
          heading={serviceData[selected].title}
          content={serviceData[selected].content}
          source={serviceData[selected].source}
        />
      </div>
    </div>
  );
};

export default ServicesCards;
