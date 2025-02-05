import React from "react";
import coc from '/COC.pdf'

const CodeOfConduct = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-700 from-5% via-black via-50% to-indigo-500 to-80% cursor-default gap-12 h-[100vh]">
        <h1 className="text-center text-white font-semibold text-4xl">Code of Conduct</h1>
      <iframe
        src={coc}
        width="800"
        height="700"
        allow="autoplay"
        className="border rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default CodeOfConduct;
