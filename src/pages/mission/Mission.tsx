import { Gradient } from "../../components/gradient/Gradient";

export const Mission = () => {
  return (
    <div className="w-screen">
      <div className="h-[30vh]">
        <h1 className="pl-6 sm:pl-10 pt-[45vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Mission
        </h1>
      </div>
      <div className="bg-white min-h-[70vh]"></div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="purple" col1="blue" col2="purple" col3="purple" />
      </div>
    </div>
  );
};
