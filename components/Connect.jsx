"use client";
import React from "react";
import Socials from "./Socials";

const Connect = () => {
  const classes = "main__social__icons";
  return (
    <section id="contacts" className="w-full h-full">
      <article className="max-w-[1248px] w-full h-full mx-auto px-2 py-16">
        <p className="text-purple uppercase tracking-widest text-xl">
          Lets Connect
        </p>
        <h2 className="py-4 ">Get In Touch</h2>
        <p className="text-xl">
          Feel free to reach out for projects and collaborations.
        </p>
        <div className="py-8">
          <button>
            <a href="mailto:fredyaswan@gmail.com">Say Hello</a>
          </button>
        </div>
        <Socials className={classes} />
      </article>
    </section>
  );
};

export default Connect;
