import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const GithubLink = "https://github.com/gian-gg";
const FacebookLink = "https://www.facebook.com/epanto.gg/";

const SocialLink = ({ to, Child }) => {
  return (
    <Link
      to={to}
      target="_blank"
      className="hover:opacity-80 hover:scale-105 transition ease-in-out delay-150"
    >
      <Child />
    </Link>
  );
};

const SocialLinks = () => {
  return (
    <div className="text-dark dark:text-light flex gap-2 lg:gap-3 text-2xl lg:text-3xl">
      <SocialLink to={GithubLink} Child={FaGithub} />
      <SocialLink to={FacebookLink} Child={FaFacebook} />
    </div>
  );
};

export default SocialLinks;
