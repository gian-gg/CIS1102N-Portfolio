import { useEffect } from "react";

import { Link as LinkScroll, Element as ElementScroll } from "react-scroll";

import About from "./About";
import Hero from "./Hero";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    document.title = `CIS1102N | Home`;
    AOS.init();
  }, []);

  return (
    <div className="w-full min-h-screen h-full bg-light dark:bg-dark bg-[url('../assets/images/bg/bgLight.png')] dark:bg-[url('../assets/images/bg/bgDark.png')] bg-repeat-y bg-center ">
      <div className="pt-4 flex flex-col items-center">
        {/* NAVBAR */}
        <NavBar />

        <div className="w-screen max-w-[1510px] pt-8 px-4 md:px-20 lg:px-40">
          <Hero />

          {/* Floating Scroll Button */}
          <div className="button-container flex justify-center mt-20">
            <LinkScroll
              to="about"
              smooth={true}
              duration={500}
              className="font-pixelifySans text-dark dark:text-light text-5xl font-extrabold w-14 h-14 rounded-full bg-[#B9B9B9] dark:bg-gray flex items-center justify-center border-4 border-[#616363] animate-bounce cursor-pointer"
            >
              v
            </LinkScroll>
          </div>

          <ElementScroll name="about" className="mt-10 md:mt-36">
            <About />
          </ElementScroll>

          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
