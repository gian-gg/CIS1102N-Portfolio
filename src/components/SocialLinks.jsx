import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const GithubLink = "https://github.com/gian-gg";
const FacebookLink = "https://www.facebook.com/epanto.gg/";

const SocialLinks = () => {
  return (
    <div className="text-dark dark:text-light flex gap-2 lg:gap-3 text-2xl lg:text-3xl">
      <Link to={GithubLink} target="_blank">
        <FaGithub />
      </Link>
      <Link to={FacebookLink} target="_blank">
        <FaFacebook />
      </Link>
    </div>
  );
};

export default SocialLinks;
