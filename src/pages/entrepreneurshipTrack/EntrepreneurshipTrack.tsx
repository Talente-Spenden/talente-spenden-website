import { Gradient } from "../../components/gradient/Gradient";
import { Link } from "react-router-dom";

export const EntrepreneurshipTrack = () => {
  return (
    <div className="w-screen">
      <div className="h-screen">
        <div className="ml-6 sm:ml-10 mt-[40vh]">
          <h1 className="font-bold font-['Poppins'] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white">
            A new chapter awaits – introducing TSET, soon.
          </h1>
          <p className="mt-2 md:text-2xl sm:text-xl text-l text-grey-light">
            <Link
              to="/join"
              className="bg-black hover:bg-green hover:text-black p-1"
            >
              <span>&rarr;</span> Join our Discord Server
            </Link>{" "}
            for exlusive updates on our brand-new Entrepreneurship Track.
          </p>
        </div>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="green" col1="blue" col2="yellow" col3="yellow" />
      </div>
    </div>
  );
};
