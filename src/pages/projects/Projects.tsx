import { Gradient } from "../../components/gradient/Gradient";

export const Projects = () => {
  return (
    <div className="w-screen">
      <div className="ml-14 mt-[520px]">
        <h1 className="font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Projects
        </h1>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="green" col1="green" col2="yellow" col3="green" />
      </div>
    </div>
  );
};
