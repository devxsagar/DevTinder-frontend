import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const footerLink = [
  { icon: IconBrandLinkedin, to: "https://www.linkedin.com/in/sagar-mitra19/" },
  { icon: IconBrandX, to: "https://x.com/devxsagar" },
  { icon: IconBrandGithub, to: "https://github.com/devxsagar" },
  { icon: IconBrandInstagram, to: "https://www.instagram.com/devxsagar" },
];

const Footer = () => {
  return (
    <footer className="py-3 mt-10">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm">
          ©{new Date().getFullYear()} DevTinder. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {footerLink.map(({ icon: Icon, to }, i) => {
            return (
              <Link key={i} to={to} target="_blank" rel="noopener noreferrer" >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
