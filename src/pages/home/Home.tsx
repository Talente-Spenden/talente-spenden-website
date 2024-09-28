import { Gradient } from "../../components/gradient/Gradient";

export const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="ml-14 mt-[520px]">
        <h1 className="font-bold font-['Poppins'] text-9xl text-white">
          Join Hands,
          <br />
          Share Talents,
          <br />
          Make a Difference.
          <br />
        </h1>
      </div>
      <div className="bg-black w-screen h-screen absolute top-0 left-0 z-[-1]">
        <Gradient />
      </div>
    </div>
  );
};
