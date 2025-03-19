import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#000a29] from-5% via-[#002f69] via-50% to-[#429ebd] to-80% cursor-none z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="text-white text-lg md:text-2xl mt-4">Loading Panacea Solution...</p>
      </div>
    </div>
  );
};

export default Loading;
