import React, { useEffect, useState } from "react";
import img from "/assets/codeyatra.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <nav
        className={`h-[10vh] bg-black text-white font-light z-40 fixed w-[100%] text-sm sm:text-xl xl:text-2xl transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <ul className="flex justify-around items-center h-[100%] w-[100%] text-[10px] cursor-pointer tracking-wide sm:text-xl">
          <img
            src={img}
            alt="Code Yatra Logo"
            className="w-[14vw] transition-transform duration-1000 hover:scale-110"
          />
          <li className="hover:scale-110 hover:font-semibold transition-transform duration-500">
            <a href="#home">Home</a>
          </li>
          <li className="hover:scale-110 hover:font-semibold transition-transform duration-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-110 hover:font-semibold transition-transform duration-500">
            <a href="#team">Our Team</a>
          </li>
          <li className="hover:scale-110 hover:font-semibold transition-transform duration-500">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="hover:scale-110 hover:font-semibold transition-transform duration-500">
            <Link to="/codeofconduct" target="_blank" rel="noopener noreferrer">
              Code of Conduct
            </Link>
          </li>
          <li>
            <button className="bg-orange-500 p-1 rounded-lg cursor-pointer px-3 font-semibold hover:bg-gradient-to-br from-purple-500 to-indigo-400 text-xs sm:text-xl transition-transform duration-500 hover:scale-105">
              <a
                href="https://forms.gle/AdmctKdKMVyAdpxi9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
