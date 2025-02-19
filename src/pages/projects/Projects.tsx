import { useState } from "react";
import { Gradient } from "../../components/gradient/Gradient";
import { projects, projectTags } from "../../config/Config";
import { TagList } from "../../components/tags/TagList";

export const Projects = () => {
  const [hiddenTags, setHiddenTags] = useState<string[]>([]);

  return (
    <div className="w-screen">
      <div className="h-[30vh]">
        <h1 className="pl-6 sm:pl-10 pt-[20vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Our Projects
        </h1>
      </div>
      <div className="pl-6 bg-white min-h-[70vh]">
        <div className="pt-3">
          <TagList
            tags={projectTags.map((tag) => tag.name)}
            hiddenTags={hiddenTags}
            setHiddenTags={setHiddenTags}
          />
        </div>
        <div>
          {projects
            .filter((p) => {
              return !p.tags.every((tag) => hiddenTags.includes(tag));
            })
            .map((p) => {
              return <p>{p.name}</p>;
            })}
        </div>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="green" col1="green" col2="yellow" col3="green" />
      </div>
    </div>
  );
};
