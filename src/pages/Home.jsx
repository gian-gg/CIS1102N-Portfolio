import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import ButtonContainer from "../components/ButtonContainer";

import icon from "../assets/images/logo.png";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const GithubLink = "https://github.com/gian-gg";
const FacebookLink = "https://www.facebook.com/epanto.gg/";

const PortfolioContainer = ({ title, to, number }) => {
  return (
    <Link
      to={to}
      className="w-full homeLG:w-[12rem] h-16 homeLG:h-[12.6rem] rounded-3xl bg-light dark:bg-dark border-4 border-[#B9B9B9] dark:border-gray homeLG:block translate-x-0 p-2 homeLG:p-4 flex gap-3 justify-between"
    >
      <h1 className="text-purpleL dark:text-purpleD font-pixelifySans text-3xl font-extrabold">
        [{number}]
      </h1>
      <h2 className="homeLG:absolute homeLG:bottom-4 text-dark dark:text-light font-pixelifySans text-homeLG md:text-2xl font-bold w-4/5 flex align-middle items-center">
        {title}
      </h2>
      <div className="homeLG:absolute homeLG:right-4 homeLG:top-4 text-dark dark:text-light text-3xl w-10 h-10 rounded-full bg-[#B9B9B9] dark:bg-gray flex items-center justify-center">
        <FaAngleRight />
      </div>
    </Link>
  );
};

const DisplaySubheading = ({ text, rotation }) => {
  return (
    <p
      className={`text-dark dark:text-light font-gochiHand text-3xl md:text-4xl lg:text-5xl opacity-40 ${
        rotation == "right"
          ? "rotate-3 -translate-x-20 md:-translate-x-40 lg:-translate-x-60"
          : "-rotate-3 translate-x-28 md:translate-x-40 lg:translate-x-60"
      }`}
    >
      {text}
    </p>
  );
};

export default function App() {
  const [isDarkTheme, setisDarkTheme] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("dark");
      setisDarkTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      setisDarkTheme(true);
    }
  };

  return (
    <div
      className="bg-light dark:bg-dark w-screen h-screen pt-4 flex flex-col items-center overflow-x-hidden bg-[url('../assets/images/bg/bgLight.png')] dark:bg-[url('../assets/images/bg/bgDark.png')] bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(${BG})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="w-screen max-w-[1510px] px-4 md:px-20 lg:px-40">
        <header className="w-full flex justify-between">
          <ButtonContainer className="w-[11.5rem] h-[3rem] md:w-[14rem] md:h-[3.375rem] lg:w-[16.5rem] lg:h-[3.75rem]">
            <div className="p-2 flex justify-center gap-3">
              <img
                src={icon}
                alt="icon"
                className="w-[2.25rem] md:w-[2.5rem] lg:w-[2.75rem]"
              />
              <p className="font-pixelifySans text-dark dark:text-light text-xl md:text-2xl lg:text-3xl">
                gian.epanto
              </p>
            </div>
          </ButtonContainer>
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
            <div className="text-dark dark:text-light flex gap-2 lg:gap-3 text-2xl lg:text-3xl">
              <Link to={GithubLink} target="_blank">
                <FaGithub />
              </Link>
              <Link to={FacebookLink} target="_blank">
                <FaFacebook />
              </Link>
            </div>
          </ButtonContainer>
        </header>

        <div className="text-center mt-16">
          <DisplaySubheading text="a compilation of" rotation="right" />
          <h1 className="font-pixelifySans text-[90px] md:text-[158px] lg:text-[220px] font-extrabold text-purpleL dark:text-purpleD leading-[5rem] md:leading-[8rem] lg:leading-[10rem] [text-shadow:_0_0px_256px_#A191B9]  dark:[text-shadow:_0_0px_256px_#CCC2DC]">
            {/* // https://pagedone.io/docs/text-shadow */}
            CIS1102N
          </h1>
          <DisplaySubheading text="portfolios." rotation="left" />
        </div>

        <div className="flex gap-4 mt-10 flex-col homeLG:flex-row">
          <PortfolioContainer
            title="COMPUTER SCIENCE AS A DISCIPLINE."
            number="1"
          />
          <PortfolioContainer
            title="DATA INFORMATION & INFO SYSTEMS."
            number="2"
          />
          <PortfolioContainer title="NUMBER SYSTEMS." number="3" />
          <PortfolioContainer
            title="COMPUTER HARDWARE & SOFTWARE."
            number="4"
          />
          <PortfolioContainer
            title="DIFFERENT TYPES OF MOTHER BOARDS."
            number="5"
          />
          <PortfolioContainer
            title="DIFFERENT TYPES OF MOTHER COMPUTERS."
            number="6"
          />
        </div>

        <div className="flex flex-col justify-center align-middle items-center mt-20 gap-2 mb-10">
          <div className="w-full lg:w-4/5 h-1 rounded-full bg-gray dark:opacity-100 opacity-20" />
          <h1 className="text-purpleL dark:text-purpleD font-jetbrainsMono text-sm lg:text-lg text-center">
            Geri Gian C. Epanto | BS Computer Science - 1 | CIS1102N (G6)
          </h1>
          <p className="font-gochiHand text-dark dark:text-light opacity-60 text-lg lg:text-xl text-center">
            Copyright © 2024,{" "}
            <Link to={GithubLink} target="_blank">
              gian.gg
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
