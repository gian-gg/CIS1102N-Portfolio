import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import ButtonContainer from "../components/ButtonContainer";

import "../assets/md.css";

const Portfolio = () => {
  const { number } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState("");

  useEffect(() => {
    if (!number || isNaN(number) || number < 1 || number > 6) {
      navigate("/");
    }
  }, [number, navigate]);

  useEffect(() => {
    document.title = `CIS1102N | Portfolio #${number}`;

    fetch(`/portfolios/${number}.md`)
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
      });
  }, [number]);

  return (
    <div className="w-full h-full bg-light dark:bg-dark bg-[url('../assets/images/bg/bgLight.png')] dark:bg-[url('../assets/images/bg/bgDark.png')] bg-repeat-y bg-center ">
      <div className="pt-4 flex flex-col items-center">
        {/* NAVBAR */}
        <NavBar />

        <div className="w-full h-full px-4 md:px-20 mt-20">
          <div className="bg-light dark:bg-dark border-opacity-30 dark:border-opacity-100 rounded-xl h-full min-h-[580px] max-h-screen flex border-4 border-gray">
            {content ? (
              <div className="flex">
                <div className="hidden lg:flex p-4 w-1/5 h-screen rounded-l-xl flex-col justify-between items-center align-middle">
                  <div className="on-this-page h-1/2">
                    <h1>On this Page:</h1>
                  </div>
                  <div className="references h-1/2">
                    <h1>References:</h1>
                  </div>
                </div>
                <div className="markdown-container w-full overflow-y-auto p-4">
                  <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
        <div className="buttons flex justify-center my-8 gap-16">
          <Link
            to={`/${parseInt(number) - 1}`}
            className="font-pixelifySans text-dark dark:text-light text-2xl font-extrabold w-10 h-10 rounded-full bg-[#B9B9B9] dark:bg-gray flex items-center justify-center"
          >
            {"<"}
          </Link>
          <Link
            to={`/${parseInt(number) + 1}`}
            className="font-pixelifySans text-dark dark:text-light text-2xl font-extrabold w-10 h-10 rounded-full bg-[#B9B9B9] dark:bg-gray flex items-center justify-center"
          >
            {">"}
          </Link>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
