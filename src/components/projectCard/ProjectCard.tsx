import { Link } from "react-router-dom";
import { ProjectItem } from "../../types/Types";

export const ProjectCard: React.FC<{ project: ProjectItem }> = (props) => {
  const { project } = props;

  return (
    <div className="pb-2 min-w-[320px] max-w-[450px] w-[22vw] my-10 mx-3 cursor-pointer [&>div>a]:hover:bg-yellow [&>div>a]:hover:text-black [&>div>h1]:hover:text-white [&>div>p]:hover:text-white transition-all">
      <div className="relative w-[100%] h-[500px]">
        <img
          src={`src/assets/img/${project.image}`}
          className=" object-cover w-full h-full"
        ></img>
      </div>{" "}
      <div className="mt-3 w-full h-[2px] bg-grey" />
      <div className="">
        <h1 className="text-3xl font-semibold text-grey pt-2">
          {project.name}
        </h1>
        <p className="text-grey py-2">{project.descriptionLong}</p>
        <Link to="" className="text-grey text-xl font-bold">
          <span className="text-2xl">&rarr;</span> Learn more
        </Link>
      </div>
    </div>
  );
};
