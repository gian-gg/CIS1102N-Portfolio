import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
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
    <div className="w-full h-full bg-light dark:bg-dark bg-[url('../assets/images/bg/bgLight.png')] dark:bg-[url('../assets/images/bg/bgDark.png')] bg-repeat-y bg-center ">
      <div className="pt-4 flex flex-col items-center">
        {/* NAVBAR */}
        <NavBar />

        <div className="w-full h-full px-4 md:px-20 mt-20">
          <div className="bg-light dark:bg-dark border-opacity-30 dark:border-opacity-100 rounded-xl h-full min-h-[580px] max-h-screen flex border-4 border-gray">
            {content ? (
              <div className="flex">
                <div className="hidden lg:flex gap-4 w-[22rem] rounded-l-xl flex-col p-8 py-10">
                  <h1 className="font-poppins font-extrabold text-2xl">
                    Portfolios:
                  </h1>
                  <ul className="font-poppins flex flex-col gap-4">
                    {filesContent.length > 0 ? (
                      filesContent.map((file, index) => (
                        <li key={index}>
                          <NavLink
                            to={`/${index + 1}`}
                            className={({ isActive }) =>
                              `opacity-80 hover:dark:text-purpleD hover:text-purpleL font-medium hover:opacity-100 ${
                                isActive
                                  ? "text-purpleL dark:text-purpleD opacity-100"
                                  : "text-dark dark:text-light"
                              }`
                            }
                          >
                            {file.heading}
                          </NavLink>
                        </li>
                      ))
                    ) : (
                      <Loading />
                    )}
                  </ul>
                </div>
                <div className="markdown-container w-full overflow-y-auto p-4">
                  <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
                <div className="hidden lg:flex p-4 w-[25rem] h-screen rounded-l-xl flex-col justify-between items-center align-middle">
                  RIGHT
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
