import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1248px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 capitalize">What i&#39;ve built</h2>

        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <ProjectItem key={project.name} projects={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
