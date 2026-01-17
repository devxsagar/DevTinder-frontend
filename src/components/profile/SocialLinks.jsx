import React from "react";
import { Link } from "react-router-dom";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const SocialLinks = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-x-8 text-muted-foreground">
      <Link
        to="https://github.com/JohnDoe"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-all duration-300 ease-linear"
      >
        <IconBrandGithub className="w-5 h-5 lg:w-6 lg:h-6" />
      </Link>
      <Link
        to="https://linkedin.com/JohnDoe"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-all duration-300 ease-linear"
      >
        <IconBrandLinkedin className="w-5 h-5 lg:w-6 lg:h-6" />
      </Link>
      <Link
        to="https://twitter.com/JohnDoe"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-all duration-300 ease-linear"
      >
        <IconBrandX className="w-5 h-5 lg:w-6 lg:h-6" />
      </Link>
    </div>
  );
};

export default SocialLinks;
