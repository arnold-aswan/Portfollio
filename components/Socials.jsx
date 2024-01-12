import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Socials = ({ className }) => {
  const launchWhatsapp = () => {
    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web
    const phone = "+254708581781";

    // if (navigator.userAgent.includes("WhatsApp")) {
    //   // WhatsApp is installed
    if (window.innerWidth < 600) {
      // If the window width is less than 600 pixels, open the WhatsApp client
      window.open(`whatsapp://send?phone=${phone}`);
    } else {
      // If the window width is 600 pixels or more, open WhatsApp Web
      window.open(`https://web.whatsapp.com/send?phone=${phone}`, "_blank");
    }
  };
  return (
    <div className="flex items-center justify-between max-w-[210px] md:max-w-[250px] gap-4 ">
      <a
        href="https://www.linkedin.com/in/arnold-aswani-390187205/"
        target="_blank"
        className={className}>
        <FaLinkedinIn className="icons" />
      </a>
      <a
        href="https://github.com/arnold-aswan/"
        target="_blank"
        className={className}>
        <FaGithub className="icons" />
      </a>
      <a href="mailto:fredyaswan@gmail.com" className={className}>
        <BiLogoGmail className="icons" />
      </a>
      <div onClick={launchWhatsapp} className={className}>
        <IoLogoWhatsapp className="icons" />
      </div>
    </div>
  );
};

export default Socials;
