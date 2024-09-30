import { Footer } from "../../components/footer/Footer";
import { Gradient } from "../../components/gradient/Gradient";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-screen">
      <div className="ml-6 sm:ml-10 mt-[520px]">
        <h1 className="font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Join Hands,
          <br />
          Share Talents,
          <br />
          Make a Difference.
          <br />
        </h1>
      </div>
      <div className="absolute top-[100vh] w-full">
        <div className="bg-black py-10">
          <h1 className="ml-[5vw] font-['Inter'] font-medium text-xl lg:text-3xl text-white">
            Latest Stories
          </h1>
          <div className="flex justify-center">
            <div className=" h-[0.10rem] w-[90vw] bg-grey-light" />
          </div>
        </div>
        <div className="bg-blue pt-10 pb-10">
          <h1 className="ml-[5vw] font-['Inter'] font-medium text-xl lg:text-3xl text-white">
            Who we are
          </h1>
          <p></p>
          <div className="flex justify-center">
            <div className=" h-[0.10rem] w-[90vw] bg-grey-light" />
          </div>
        </div>
        <div className="bg-black pt-10 pb-10">
          <h1 className="ml-[5vw] font-['Inter'] font-medium text-xl lg:text-3xl text-white">
            Project Spotlight
          </h1>
          <div className="flex justify-center">
            <div className=" h-[0.10rem] w-[90vw] bg-grey-light" />
          </div>
        </div>
        <div className="py-14 w-full bg-white/50 flex justify-center">
          <div className="w-[90vw]">
            <div className="flex justify-between w-full min-w-[20vw] max-w-[65vw]">
              <h1 className="font-bold font-['Poppins'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                WE
              </h1>
              <span>&nbsp;</span>
              <h1 className="font-bold font-['Poppins'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                {" "}
                MAKE
              </h1>
            </div>
            <div>
              <Link
                to="/mission"
                className="transition-all duration-300 hover:text-yellow font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl italic text-blue font-['Poppins']"
              >
                THE WORLD
              </Link>
            </div>
            <div className="mb-4">
              <h1 className="font-bold font-['Poppins'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                A BETTER PLACE.
              </h1>
            </div>
            <Link
              to="/contact"
              className="p-3 border-black border-2 hover:bg-white transition-all duration-300"
            >
              <span className="text-medium text-l">Join our mission</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient />
      </div>
    </div>
  );
};
