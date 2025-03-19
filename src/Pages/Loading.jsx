import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="text-white text-lg mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
