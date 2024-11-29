import { Link } from "react-router-dom";

const GithubLink = "https://github.com/gian-gg";

const Footer = () => {
  return (
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
  );
};

export default Footer;
