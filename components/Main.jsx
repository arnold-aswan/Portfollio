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
            let&#39;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5] ">Arnold</span>
          </h1>
          <h1 className="py-2 text-gray-400">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            I&#39;m a frontend web developer specializing in building
            exceptional digital experiences, currently I&#39;m focused on
            building responsive front-end web applications integrating back-end
            technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="main__social__icons">
              <FaLinkedinIn />
            </div>
            <div className="main__social__icons">
              <FaGithub />
            </div>
            <div className="main__social__icons">
              <AiOutlineMail />
            </div>
            <div className="main__social__icons">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
