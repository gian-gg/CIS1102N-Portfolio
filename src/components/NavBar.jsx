import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

import ButtonContainer from "./ButtonContainer";
import SocialLinks from "./SocialLinks";

const NavBar = () => {
  const [isDarkTheme, setisDarkTheme] = useState(true);

  console.log("NAVBAR RENDERED");

  useEffect(() => {
    if (document.documentElement.classList[0] == "dark") {
      setisDarkTheme(true);
    } else {
      setisDarkTheme(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setisDarkTheme(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setisDarkTheme(true);
    }
  };
  return (
    <header
      className="fixed w-full flex justify-between z-10 px-4 md:px-20 lg:px-40"
      data-aos="fade-down"
      data-aos-delay={300}
    >
      {/* ICON AND NAME */}
      <LinkScroll
        to="about"
        className="cursor-pointer"
        smooth={true}
        duration={500}
      >
        <ButtonContainer className="w-[11.5rem] h-[3rem] md:w-[14rem] md:h-[3.375rem] lg:w-[16.5rem] lg:h-[3.75rem]">
          <div className="p-2 flex justify-center gap-3">
            <img
              src="./logo.png"
              alt="icon"
              className="w-[2.25rem] md:w-[2.5rem] lg:w-[2.75rem]"
            />
            <p className="font-pixelifySans text-dark dark:text-light text-xl md:text-2xl lg:text-3xl">
              gian.epanto
            </p>
          </div>
        </ButtonContainer>
      </LinkScroll>
      {/* OPTIONS */}
      <ButtonContainer className="w-[9rem] h-[3rem] md:w-[10.5rem] md:h-[3.4rem] lg:w-[12rem] lg:h-[3.8rem] flex items-center justify-center gap-3">
        <button
          onClick={toggleTheme}
          className="w-[3rem] h-[1.8rem] md:w-[3.5rem] md:h-[2rem] lg:w-[4rem] lg:h-[2.5rem] bg-[#DFDFDF] dark:bg-[#1A171A] rounded-full border-4 border-[#CACACA] dark:border-[#303030] flex items-center px-1"
        >
          <div
            className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-[#808080] border-4 border-[#9A9A9A] ${
              isDarkTheme ? "" : "translate-x-full"
            }`}
          />
        </button>
        <div className="w-1 h-3/5 bg-gray dark:opacity-100 opacity-20 rounded-full" />
        <SocialLinks />
      </ButtonContainer>
    </header>
  );
};

export default NavBar;
