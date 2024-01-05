import React from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <section className="w-full h-screen text-center">
      <div className="max-w-[1248px] w-full h-full p-2 mx-auto flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5] ">Arnold</span>
          </h1>
          <h1 className="py-2 text-gray-400">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            I'm a frontend web developer specializing in building exceptional
            digital experiences, currently I’m focused on building responsive
            front-end web applications integrating back-end technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
