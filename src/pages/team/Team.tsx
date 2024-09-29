import { Gradient } from "../../components/gradient/Gradient";

export const Team = () => {
  return (
    <div className="w-screen">
      <div className="ml-14 mt-[520px]">
        <h1 className="font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Team
        </h1>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="orange" col1="yellow" col2="orange" col3="orange" />
      </div>
    </div>
  );
};
