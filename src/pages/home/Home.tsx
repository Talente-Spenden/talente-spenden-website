import { Gradient } from "../../components/gradient/Gradient";

export const Home = () => {
  return (
    <div className="w-screen">
      <div className="ml-14 mt-[420px]">
        <h1 className="font-bold font-['Poppins'] text-9xl text-white">
          Join Hands,
          <br />
          Share Talents,
          <br />
          Make a Difference.
          <br />
        </h1>
      </div>
      <div className="bg-black absolute top-[100vh] w-full h-[100vh]">
        <h1 className="mt-8 ml-14 font-['Poppins'] font-bold text-8xl text-white">
          News
        </h1>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient />
      </div>
    </div>
  );
};
