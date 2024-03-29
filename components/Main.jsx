"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <section id="home" className="w-full h-screen text-center">
      <div className="max-w-[1248px] w-full h-full p-2 mx-auto flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            let&#39;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m{" "}
            <span className="text-purple ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Arnold",
                  1000,
                  "Aswani",
                  1000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <h1 className="py-2 text-gray-400">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            I&#39;m a frontend web developer specializing in building
            exceptional digital experiences, currently I&#39;m focused on
            building responsive front-end web applications integrating back-end
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
