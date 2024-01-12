"use client";
import React from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Main = () => {
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
    <section id="home" className="w-full h-screen text-center">
      <div className="max-w-[1248px] w-full h-full p-2 mx-auto flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            let&#39;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-purple ">Arnold</span>
          </h1>
          <h1 className="py-2 text-gray-400">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            I&#39;m a frontend web developer specializing in building
            exceptional digital experiences, currently I&#39;m focused on
            building responsive front-end web applications integrating back-end
            technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <a
              href="https://www.linkedin.com/in/arnold-aswani-390187205/"
              target="_blank"
              className="main__social__icons">
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/arnold-aswan/"
              target="_blank"
              className="main__social__icons">
              <FaGithub />
            </a>
            <a
              href="mailto:fredyaswan@gmail.com"
              className="main__social__icons">
              <AiOutlineMail />
            </a>
            <div onClick={launchWhatsapp} className="main__social__icons">
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
