import { Gradient } from "../../components/gradient/Gradient";

export const News = () => {
  return (
    <div className="w-screen">
      <div className="ml-14 mt-[520px]">
        <h1 className="font-bold font-['Poppins'] text-9xl text-white">News</h1>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="yellow" col1="yellow" col2="orange" col3="yellow" />
      </div>
    </div>
  );
};
