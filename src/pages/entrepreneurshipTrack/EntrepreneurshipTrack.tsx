import { Gradient } from "../../components/gradient/Gradient";

export const EntrepreneurshipTrack = () => {
  return (
    <div className="w-screen">
      <div className="h-screen">
        <h1 className="pl-6 sm:pl-10 pt-[45vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          A new chapter awaits – introducing TSET, soon.
        </h1>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="green" col1="blue" col2="yellow" col3="yellow" />
      </div>
    </div>
  );
};
