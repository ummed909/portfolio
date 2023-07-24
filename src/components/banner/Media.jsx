import React from "react";
import { FaInstagram, FaLinkedinIn, FaReact,FaDatabase } from "react-icons/fa";
import { SiGithub, SiGit, SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
const Media = () =>  {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/ummed909">
            <span className="bannerIcon">
              <SiGithub />
            </span>
          </a>
          <a href="https://www.instagram.com/ummed303/">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/ummed-choudhary-23b166281/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiGit />
          </span>
          <span className="bannerIcon">
            <FaDatabase />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
