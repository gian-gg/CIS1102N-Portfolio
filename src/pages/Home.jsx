import { useState } from "react";

import ButtonContainer from "../components/ButtonContainer";

import BG from "../assets/images/bg/home.png";
import icon from "../assets/images/logo.png";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const PortfolioContainer = ({ title }) => {
  return <div className="">{title}</div>;
};

const DisplaySubheading = ({ text, rotation, x }) => {
  return (
    <p
      className={`text-light font-gochiHand text-3xl md:text-4xl lg:text-5xl opacity-40 ${
        rotation == "right"
          ? "rotate-3 -translate-x-20 md:-translate-x-40 lg:-translate-x-60"
          : "-rotate-6 translate-x-20 md:translate-x-40 lg:translate-x-60"
      }`}
    >
      {text}
    </p>
  );
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("Dark");

  const toggleTheme = () => {
    console.log(currentTheme);

    if (currentTheme == "Dark") {
      setCurrentTheme("Light");
    } else {
      setCurrentTheme("Dark");
    }
  };

  return (
    <div
      className="bg-dark w-screen h-screen pt-4 flex flex-col items-center"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-screen max-w-[1510px]">
        <header className="w-full px-8 md:px-20 lg:px-40 flex justify-between">
          <ButtonContainer className="w-[11.5rem] h-[3rem] md:w-[14rem] md:h-[3.375rem] lg:w-[16.5rem] lg:h-[3.75rem]">
            <div className="p-2 flex justify-center gap-3">
              <img
                src={icon}
                alt="icon"
                className="w-[2.25rem] md:w-[2.5rem] lg:w-[2.75rem]"
              />
              <p className="font-pixelifySans text-light text-xl md:text-2xl lg:text-3xl">
                gian.epanto
              </p>
            </div>
          </ButtonContainer>
          <ButtonContainer className="w-[9rem] h-[3rem] md:w-[10.5rem] md:h-[3.4rem] lg:w-[12rem] lg:h-[3.8rem] flex items-center justify-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-[3rem] h-[1.8rem] md:w-[3.5rem] md:h-[2rem] lg:w-[4rem] lg:h-[2.5rem] bg-[#1A171A] rounded-full border-4 border-[#303030] flex items-center px-1"
            >
              <div
                className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-[#808080] border-4 border-[#9A9A9A] ${
                  currentTheme == "Dark" ? "" : "translate-x-full"
                }`}
              />
            </button>
            <div className="w-1 h-3/5 bg-gray rounded-full" />
            <div className="text-light flex gap-2 lg:gap-3 text-2xl lg:text-3xl">
              <FaGithub />
              <FaFacebook />
            </div>
          </ButtonContainer>
        </header>

        <div className="text-center mt-20">
          <DisplaySubheading text="a compilation of" rotation="right" />
          <h1 className="font-pixelifySans text-[96px] md:text-[158px] lg:text-[220px] font-extrabold text-purpleD leading-[5rem] md:leading-[8rem] lg:leading-[10rem] [text-shadow:_0_0px_256px_#CCC2DC]">
            CIS1102N
          </h1>
          <DisplaySubheading text="portfolios." rotation="left" />
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
