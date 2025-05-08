import { useEffect, useState } from "react";
import { Gradient } from "../../components/gradient/Gradient";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { projects } from "../../config/Config";

export const CharityTrack = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-screen">
      <div className="h-[70vh] w-full flex justify-center">
        <h1 className="pl-6 sm:pl-10 pt-[40vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          We Create Social Impact.
        </h1>
      </div>{" "}
      <div className="w-full">
        <div
          className={`py-10 transition-all duration-400 ${
            scrollPosition > 100 ? "bg-black" : ""
          }`}
        >
          <div className="flex flex-wrap justify-center">
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
