import React from "react";
import Image from "next/image";
import autoprefixer from "autoprefixer";

const ProjectItem = ({ projects }) => {
  const { name, imageUrl, demoUrl, gitUrl } = projects;
  return (
    <div className="relative flex items-center justify-center h-auto w-[350px] lg:w-[400px] shadow-xl shadow-gray-400 rounded-xl p-2  group hover:cursor-pointer hover:bg-gradient-to-r from-purple to-[#709dff] ">
      <Image
        className="rounded-xl group-hover:opacity-10 w-full"
        src={imageUrl}
        alt="project-thumbnail"
        objectFit="cover"
        width={700}
        height={700}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
        <h3 className="text-lg pb-3 text-white tracking-wider text-center capitalize">
          {name}
        </h3>

        <div className="flex gap-2 items-center justify-center">
          <a href={demoUrl} target="_blank" className="project__item__link">
            Demo
          </a>

          <a href={gitUrl} target="_blank" className="project__item__link ">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
