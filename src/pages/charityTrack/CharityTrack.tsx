import { useState } from "react";
import { Gradient } from "../../components/gradient/Gradient";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { projects, scrollBandImages } from "../../config/Config";
import { ScrollBandImage } from "../../components/ScrollBand/ScrollBandImage";
import { TagList } from "../../components/tagList/TagList";
import { projectTags } from "../../config/Config";

export const CharityTrack: React.FC = () => {
  const [hiddenTags, setHiddenTags] = useState<string[]>([]);
  return (
    <div className="w-screen">
      <div className="h-[70vh] w-full flex justify-center text-center">
        <h1 className="px-6 sm:px-10 pt-[40vh] font-bold font-['Poppins'] text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          We Create Social Impact.
        </h1>
      </div>
      <div>
        <ScrollBandImage images={scrollBandImages} />
      </div>
      <div className="w-full mt-4 bg-black px-6">
        <h1 className="text-3xl text-white font-bold pt-4">Our Projects</h1>
        <p className="text-grey-light md:text-xl pt-2 mb-10">
          In our Charity Track we offer a wide range of projects you can
          volunteer at. Learn more about them below.
        </p>{" "}
        <div className="mt-2 flex w-full items-center gap-x-4">
          {" "}
          <p className="text-grey md:text-xl font-bold">Filter</p>
          <TagList
            tags={projectTags.map((tag) => tag.name)}
            hiddenTags={hiddenTags}
            setHiddenTags={setHiddenTags}
          />
        </div>
        <div className="flex justify-start">
          <div className="flex flex-wrap justify-center lg:justify-start lg:after:flex-grow max-w-[95vw] mt-4">
            {projects
              .filter((p) => {
                return !p.tags.every((tag) => hiddenTags.includes(tag));
              })
              .map((p) => {
                return <ProjectCard project={p} />;
              })}
          </div>
        </div>
      </div>
      <div className="w-full h-[4px] bg-blue-mid-light" />
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="orange" col1="orange" col2="orange" col3="purple" />
      </div>
    </div>
  );
};
