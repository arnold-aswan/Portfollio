import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 ">
      <article className="max-w-[1248px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-purple ">
            About
          </p>
          <h2 className="py-4 tracking-widest">Who i am</h2>
          <p className="py-2 text-gray-600">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.{" "}
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300  ">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
