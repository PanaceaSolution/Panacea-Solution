import React, { useState } from "react";

const ExpandingCards = ({ content, contentActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`bg-white h-[50%] z-30 rounded-lg p-2 cursor-pointer transition-all duration-200 ease-in-out ${
        isExpanded ? "w-[30%]" : "w-[15%]"
      }`}
    >
      <p className="text-black transition-opacity duration-300 ease-in-out">
        {isExpanded ? contentActive : content}
      </p>
    </div>
  );
};

export default ExpandingCards;