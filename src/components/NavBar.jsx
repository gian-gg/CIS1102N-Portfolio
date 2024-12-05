import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import useDetectScroll from "@smakss/react-scroll-direction";

import ButtonContainer from "./ButtonContainer";
import SocialLinks from "./SocialLinks";

const FirstButton = () => {
  return (
    <ButtonContainer>
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
  );
};

const NavBar = ({ page = "home" }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const scrollDirection = useDetectScroll();

  useEffect(() => {
    if (scrollDirection.scrollDir === "down") {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
    console.log(scrollDirection.scrollDir);
  }, [scrollDirection, showNavBar]);

  const [isDarkTheme, setisDarkTheme] = useState(true);

  useEffect(() => {
    if (document.documentElement.classList[0] == undefined) {
      document.documentElement.classList.add("dark");
    }
    console.log(document.documentElement.classList[0]);

    if (document.documentElement.classList[0] == "dark") {
      setisDarkTheme(true);
    } else {
      setisDarkTheme(false);
    }
  }, [isDarkTheme]);

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
      className={`animate-fade-down w-full sm:w-full md:w-4/5 max-w-[1430px] fixed flex justify-between align-middle items-center z-10 px-4 lg:gap-8 transition duration-150 ${
        showNavBar ? "-translate-y-[150%]" : ""
      }`}
    >
      {/* ICON AND NAME */}
      {page === "home" ? (
        <LinkScroll
          to="about"
          className="cursor-pointer hover:scale-105 transition ease-in-out delay-150"
          smooth={true}
          duration={500}
        >
          <FirstButton />
        </LinkScroll>
      ) : (
        <Link
          to="/"
          className="cursor-pointer hover:scale-105 transition ease-in-out delay-150"
          smooth={true}
          duration={500}
        >
          <FirstButton />
        </Link>
      )}

      {/* OPTIONS */}
      <ButtonContainer className="flex w-[9rem] h-[3rem] md:w-[10.5rem] md:h-[3.4rem] lg:w-[12rem] lg:h-[3.8rem] items-center justify-center gap-3">
        <button
          onClick={toggleTheme}
          className="w-[3rem] h-[1.8rem] md:w-[3.5rem] md:h-[2rem] lg:w-[4rem] lg:h-[2.5rem] bg-[#DFDFDF] dark:bg-[#1A171A] rounded-full border-4 border-[#CACACA] dark:border-[#303030] flex items-center px-1 hover:scale-105 transition ease-in-out delay-150"
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
