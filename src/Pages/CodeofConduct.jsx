import React from "react";
import coc from '/COC.pdf';

const CodeOfConduct = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-700 from-5% via-black via-50% to-indigo-500 to-80% cursor-default gap-8 min-h-screen p-4">
      <h1 className="text-center text-white font-semibold text-3xl md:text-4xl">
        Code of Conduct
      </h1>
      <iframe
        src={coc}
        className="w-[90%] max-w-[800px] h-auto min-h-[400px] md:h-[700px] border rounded-lg shadow-lg"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default CodeOfConduct;
