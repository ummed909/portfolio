import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGithub,} from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ummed Choudhary</h3>
        <p className="text-lg font-normal text-gray-400">
          React Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Have a quality for adopting new concepts of studies as well as
          responsibilities. I build web releted stuff.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Country: <span className="text-lightText">India</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">9870013330</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ummedc184@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href='https://github.com/ummed909'>
          <span className="bannerIcon">
            <SiGithub />
          </span>
          </a>
          <a href='https://www.instagram.com/ummed303/'>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
          </a>
          <a href='https://www.linkedin.com/in/ummed-choudhary-23b166281/'>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft