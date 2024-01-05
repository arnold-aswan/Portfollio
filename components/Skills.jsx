import Image from "next/image";
import skillStacks from "@/constants";

const Skills = () => {
  return (
    <section className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Skills
        </p>
        <h2 className="py-4 ">What i can do</h2>
       
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {skillStacks.map((skill) => (
            <div
              key={skill.name}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image
                    src={skill.imgUrl}
                    alt="stack"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="capitalize">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
