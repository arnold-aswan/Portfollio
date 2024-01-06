import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ projects }) => {
  const { name, imageUrl } = projects;
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:cursor-pointer hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
      <Image
        className="rounded-xl group-hover:opacity-10 w-full"
        src={imageUrl}
        alt="project-thumbnail"
        width={350}
        height={150}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl pb-3 text-white tracking-wider text-center capitalize">
          {name}
        </h3>
        <Link href="/">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
