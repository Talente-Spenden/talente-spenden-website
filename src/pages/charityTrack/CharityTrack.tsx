import { Gradient } from "../../components/gradient/Gradient";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { projects } from "../../config/Config";

export const CharityTrack = () => {
  return (
    <div className="w-screen">
      <div className="h-[70vh] w-full flex justify-center">
        <h1 className="pl-6 sm:pl-10 pt-[40vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          We Create Social Impact.
        </h1>
      </div>{" "}
      <div className="w-full">
        <div className="py-10 flex justify-center">
          <div className="flex flex-wrap justify-between px-10">
            {projects.map((element) => {
              return <ProjectCard project={element} />;
            })}
          </div>
        </div>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="orange" col1="orange" col2="orange" col3="purple" />
      </div>
    </div>
  );
};
