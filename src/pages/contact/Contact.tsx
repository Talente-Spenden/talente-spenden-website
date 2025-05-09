import { Gradient } from "../../components/gradient/Gradient";

export const Contact: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="h-screen">
        <h1 className="pl-6 sm:pl-10 pt-[45vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Contact
        </h1>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient
          col0="blue-light"
          col1="yellow-light"
          col2="purple-light"
          col3="yellow-light"
        />
      </div>
    </div>
  );
};
