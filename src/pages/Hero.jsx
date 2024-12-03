import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { PiSpinnerGapDuotone } from "react-icons/pi";

const PortfolioContainer = ({ title, to, number }) => {
  // AOS vs Hover Animations TRADE-OFF 💔💔
  return (
    <Link
      to={to}
      className="w-full homeLG:w-[12rem] h-16 homeLG:h-[12.6rem] rounded-3xl bg-light dark:bg-dark border-4 border-[#B9B9B9] dark:border-gray homeLG:block translate-x-0 p-2 homeLG:p-4 flex gap-3 justify-between hover:scale-110 homeLG:hover:-translate-y-2 transition ease-in-out animate-fade-up"
    >
      <h1 className="text-purpleL dark:text-purpleD font-pixelifySans text-3xl font-extrabold">
        [{number}]
      </h1>
      <h2 className="homeLG:absolute homeLG:bottom-4 text-dark dark:text-light font-pixelifySans text-homeLG md:text-2xl font-bold w-4/5 flex align-middle items-center">
        {title}
      </h2>
      <div className="font-pixelifySans homeLG:absolute homeLG:right-4 homeLG:top-4 text-dark dark:text-light text-2xl font-extrabold w-10 h-10 rounded-full bg-[#B9B9B9] dark:bg-gray flex items-center justify-center">
        {">"}
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

const Hero = () => {
  const [filesContent, setFilesContent] = useState([]);

  const markdownFiles = [
    "/portfolios/1.md",
    "/portfolios/2.md",
    "/portfolios/3.md",
    "/portfolios/4.md",
    "/portfolios/5.md",
    "/portfolios/6.md",
  ];

  useEffect(() => {
    const fetchFiles = async () => {
      const fileContents = await Promise.all(
        markdownFiles.map(async (file) => {
          const response = await fetch(file);
          const data = await response.text();

          const headingMatch = data.match(/^#\s(.*)$/m);
          const heading = headingMatch ? headingMatch[1] : "No Heading Found";

          return {
            heading,
            content: data,
          };
        })
      );

      setFilesContent(fileContents);
    };

    fetchFiles();
  }, []);
  return (
    <div>
      {/* HERO */}
      <div
        className="text-center mt-16 flex flex-col justify-center align-middle items-center"
        data-aos="flip-right"
        data-aos-delay={600}
      >
        <DisplaySubheading text="a compilation of" rotation="right" />
        <h1 className="font-pixelifySans text-[90px] md:text-[158px] lg:text-[220px] font-extrabold text-purpleL dark:text-purpleD leading-[5rem] md:leading-[8rem] lg:leading-[10rem] [text-shadow:_0_0px_256px_#A191B9]  dark:[text-shadow:_0_0px_256px_#CCC2DC]">
          {/* // https://pagedone.io/docs/text-shadow */}
          {/* TEMPORARY HOVER ANIMATION, JUST FOR FUNSIES */}
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out ">
            C
          </span>
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out">
            I
          </span>
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out">
            S
          </span>
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out">
            1
          </span>
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out">
            1
          </span>
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out">
            0
          </span>
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out">
            2
          </span>
          <span className="hover:text-pink-100 hover:blur-lg transition ease-in-out">
            N
          </span>
        </h1>
        <DisplaySubheading text="portfolios." rotation="left" />
      </div>

      {/* PORTFOLIO BUTTONS */}
      <div className="flex gap-4 mt-10 flex-col homeLG:flex-row">
        {filesContent.length > 0 ? (
          filesContent.map((file, index) => (
            <PortfolioContainer
              title={file.heading}
              number={index + 1}
              to={`/${index + 1}`}
              key={index}
              // delay={index * 200}
            />
          ))
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-12 h-12 animate-spin text-light text-6xl flex justify-center items-center align-middle">
              <PiSpinnerGapDuotone />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
