import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const NavButton = ({ direction, number }) => {
  const labelCSS = "text-dark dark:text-light";
  const arrowCSS = `${labelCSS} font-pixelifySans text-2xl`;
  let disabled = false;
  if (number < 1 || number > 6) {
    disabled = true;
  }
  return (
    <Link
      to={disabled ? "#" : `/${number}`}
      onClick={() => {
        if (!disabled) {
          scroll.scrollToTop();
        }
      }}
      className={`h-14 w-36 md:h-16 md:w-40 bg-[#DFDFDF] dark:bg-[#19171A] rounded-2xl border-4 border-[#CACACA] dark:border-[#303030] flex justify-between items-center px-4 hover:lg:opacity-60 ${
        disabled ? "cursor-not-allowed opacity-60" : ""
      }`}
    >
      {direction === "next" ? (
        <>
          <p className={labelCSS}>Next</p>
          <h1 className={arrowCSS}>{">"}</h1>
        </>
      ) : (
        <>
          <h1 className={arrowCSS}>{"<"}</h1>
          <p className={labelCSS}>Previous</p>
        </>
      )}
    </Link>
  );
};

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
  const [onThisPage, setOnThisPage] = useState({
    headings: [],
    content: "",
  });

  const markdownFiles = [
    "/portfolios/1.md",
    "/portfolios/2.md",
    "/portfolios/3.md",
    "/portfolios/4.md",
    "/portfolios/5.md",
    "/portfolios/6.md",
  ];

  useEffect(() => {
    const fetchH1 = async () => {
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

    fetchH1();
  }, []);

  useEffect(() => {
    const fetchH2 = async () => {
      const response = await fetch(`/portfolios/${number}.md`);
      const data = await response.text();

      const headings = data.match(/^##\s(.*)$/gm);
      const allHeadings = headings || ["No Heading Found"];

      setOnThisPage({
        headings: allHeadings,
        content: data,
      });
    };

    fetchH2();
  }, [number]);

  return (
    <div className="w-full h-full min-h-screen bg-light dark:bg-dark bg-[url('../assets/images/bg/bgLight.png')] dark:bg-[url('../assets/images/bg/bgDark.png')] bg-repeat-y bg-center">
      <div className="pt-4 flex flex-col items-center">
        {/* NAVBAR */}
        <NavBar page="portfolio" />

        <div className="w-full h-full px-4 md:px-20 mt-20 max-w-[1510px]">
          <div className="bg-light dark:bg-dark border-opacity-30 dark:border-opacity-100 rounded-xl h-full min-h-[580px] screen flex border-4 border-gray">
            {content ? (
              <div className="flex">
                <div className="hidden lg:flex gap-4 w-[22rem] rounded-l-xl flex-col p-8 py-10">
                  <h1 className="font-poppins font-extrabold text-2xl text-dark dark:text-light">
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
                <div className="w-full p-4 flex flex-col items-center">
                  <div className="markdown-container">
                    <ReactMarkdown
                      children={content}
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeSlug]}
                    />
                    ;
                  </div>
                  <hr className="border-light w-4/5 mt-20" />
                  <div className="buttons flex justify-center my-8 gap-16">
                    <NavButton number={parseInt(number) - 1} direction="prev" />
                    <NavButton number={parseInt(number) + 1} direction="next" />
                  </div>
                </div>
                <div className="hidden xl:flex gap-4 w-[22rem] rounded-l-xl flex-col p-8 py-10">
                  <h1 className="font-poppins font-semibold text-lg text-dark dark:text-light">
                    On This Page:
                  </h1>
                  <ul className="font-poppins flex flex-col gap-4">
                    {onThisPage.headings && onThisPage.headings.length > 0 ? (
                      onThisPage.headings.map((heading, index) => {
                        const id = heading
                          .toLowerCase()
                          .slice(1)
                          .replace(/[^a-zA-Z0-9\s]+/g, "")
                          .trim()
                          .replace(/\s+/g, "-");

                        return (
                          <li key={index}>
                            <LinkScroll
                              to={id}
                              smooth={true}
                              className="text-dark dark:text-light opacity-80 hover:dark:text-purpleD hover:text-purpleL font-medium hover:opacity-100 cursor-pointer"
                            >
                              <ReactMarkdown>{heading}</ReactMarkdown>
                            </LinkScroll>
                          </li>
                        );
                      })
                    ) : (
                      <Loading />
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
