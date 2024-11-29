import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../assets/md.css";
import NavBar from "../components/NavBar";

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
    <div className="w-screen h-screen bg-light dark:bg-dark bg-[url('../assets/images/bg/bgLight.png')] dark:bg-[url('../assets/images/bg/bgDark.png')] bg-repeat-y bg-center">
      <div className="pt-4 flex flex-col items-center"></div>
      <NavBar />

      <div className="w-screen max-w-[1510px] pt-40 px-4 md:px-20 lg:px-40"></div>
      {/* <div className="markdown-container p-4 bg-gray-100 rounded-md shadow-lg">
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </div> */}
    </div>
  );
};

export default Portfolio;
