import { Gradient } from "../../components/gradient/Gradient";
import { Link } from "react-router-dom";
import { useViewport } from "../../contexts/ViewportContext";

export const Home = () => {
  const { width } = useViewport();
  return (
    <div className="w-screen">
      <div className="h-screen">
        <div className=" pt-[20vh] flex justify-between pl-10 pr-[10vw]">
          <div>
            <p className="text-purple italic text-lg md:text-3xl font-bold">
              Social Impact
            </p>

            <p className="text-grey text-md md:text-lg">
              &rarr; Significant, positive change by solving social challenges.
            </p>
          </div>{" "}
          {width > 1020 && (
            <p className=" text-grey w-[30vw] text-xl">
              We are a vibrant student community at the
              <a
                href="https://www.tum.de"
                className="font-bold hover:bg-white hover:text-black"
              >
                {" "}
                Technical University of Munich
              </a>{" "}
              striving to create social impact. Our mission is to leverage our
              time and talents to support diverse initiatives, empowering
              students to make{" "}
              <span className="font-bold italic">
                meaningful contributions to society and the environment
              </span>
              .
            </p>
          )}
        </div>
        <div className="pl-6 sm:pl-10 pt-[20vh]">
          <h1 className="font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
            Join Hands,
            <br />
            Share <span className="italic text-purple">Talents</span>,
            <br />
            Make a Difference.
            <br />
          </h1>
          {width < 1020 && (
            <p className="text-grey w-[85vw] md:text-xl text-md pt-10">
              We are a vibrant student community at the
              <a
                href="https://www.tum.de"
                className="font-bold hover:bg-white hover:text-black"
              >
                {" "}
                Technical University of Munich
              </a>{" "}
              striving to create social impact. Our mission is to leverage our
              time and talents to support diverse initiatives, empowering
              students to make{" "}
              <span className="font-bold italic">
                meaningful contributions to society and the environment
              </span>
              .
            </p>
          )}
        </div>
      </div>
      <div className="w-full">
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
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient />
      </div>
    </div>
  );
};
