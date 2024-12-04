import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

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

        <div className="w-screen max-w-[1510px] min-h-screen pt-20 px-4 md:px-20 lg:px-40">
          <div className="bg-light rounded-xl h-full max-h-screen min-h-screen flex">
            <div className="sidebar w-1/5 bg-black rounded-l-xl">
              <div className="contents h-[400px] text-white">
                <h1>On this Page:</h1>
              </div>
              <div className="references h-3/5 text-white">
                <h1>References:</h1>
              </div>
            </div>
            <div className="markdown-container w-4/5 overflow-y-auto">
              {content ? (
                <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
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
          ``
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
