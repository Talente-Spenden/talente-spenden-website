import { Gradient } from "../../components/gradient/Gradient";
import { Link } from "react-router-dom";
import { useViewport } from "../../contexts/ViewportContext";
import { QA } from "../../components/qa/QA";
import { projects, projectSpotlight, qaHome } from "../../config/Config";
import { ProjectSlider } from "../../components/slider/ProjectSlider";
import { ScrollIndicator } from "../../components/scrollIndicator/ScrollIndicator";

export const Home: React.FC = () => {
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
              <Link to="/charity" className="font-bold italic hover:bg-yellow">
                meaningful contributions to society and the environment
              </Link>
              .
            </p>
          )}
        </div>
        <div className="px-6 sm:px-10 pt-[20vh]">
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
              <Link to="/charity" className="font-bold italic hover:bg-yellow">
                meaningful contributions to society and the environment
              </Link>
              .
            </p>
          )}
          <div className="absolute bottom-10 flex justify-center left-0 w-screen">
            <ScrollIndicator color="white" hideOnScroll={true} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div
          className={`bg-black md:py-24 py-16 px-[5vw] ${
            width > 1200 ? "flex justify-between" : ""
          }`}
        >
          <div className={`${width > 1200 ? "w-[40%]" : "w-[95%]"}`}>
            <p className="md:text-xl text-md mb-7 text-white">
              At Talente Spenden, we create social value. We host multiple
              projects,{" "}
              <span className="text-blue font-semibold">
                tackling diverse challenges of today's world
              </span>
              , including sustainability efforts, blood donation drives,
              educational assistance and many more. Join us in creating a
              lasting impact for a better society.
            </p>
            <Link
              to="/join"
              className="p-3 border-white border-2 hover:bg-blue-mid-light text-white hover:text-black transition-all duration-300"
            >
              <span className="md:text-xl text-md">
                &rarr; Join Talente Spenden
              </span>
            </Link>
          </div>
          <div className={`${width > 1200 ? "w-[40%]" : "w-[95%] mt-20"}`}>
            <div className="my-1 h-[2px] w-full bg-grey-light" />
            <div className="flex justify-between px-4">
              <h1 className="text-grey-light md:text-xl text-md">
                Established in
              </h1>
              <h1 className="text-blue-mid-light font-semibold md:text-4xl text-2xl">
                2014
              </h1>
            </div>{" "}
            <div className="my-1 h-[2px] w-full bg-grey-light" />
            <div className="flex justify-between px-4">
              <h1 className="text-grey-light md:text-xl text-md">
                Current project count
              </h1>
              <h1 className="text-blue-mid-light font-semibold md:text-4xl text-2xl">
                8
              </h1>
            </div>
            <div className="my-1 h-[2px] w-full bg-grey-light" />
            <div className="flex justify-between px-4">
              <h1 className="text-grey-light md:text-xl text-md">
                Students who comitted
              </h1>
              <h1 className="text-blue-mid-light font-semibold md:text-4xl text-2xl">
                {" "}
                &gt; 2000
              </h1>
            </div>
            <div className="my-1 h-[2px] w-full bg-grey-light" />
            <div className="flex justify-between px-4">
              <h1 className="text-grey-light md:text-xl text-md">
                Collectively spent time{" "}
              </h1>
              <h1 className="text-blue-mid-light font-semibold md:text-4xl text-2xl">
                &gt; 16000h
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-blue pt-20 pb-20">
          <h1 className="ml-[5vw] font-['Inter'] font-semibold text-xl lg:text-3xl text-white">
            Our Projects In the Spotlight
          </h1>
          <div className="">
            <div className="w-full">
              <ProjectSlider
                selectedContent={projectSpotlight}
                content={projects}
              />
            </div>
          </div>
        </div>
        <div className="bg-black pt-10 pb-10">
          <h1 className="ml-[5vw] font-['Inter'] font-medium text-xl lg:text-3xl text-white mb-8">
            Q&A
          </h1>
          <div className="w-full flex justify-center md:justify-end md:pr-[5vw]">
            <QA questions={qaHome} />
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
                to="/join"
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
              to="/join"
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
