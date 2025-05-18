import { Gradient } from "../../components/gradient/Gradient";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

export const EntrepreneurshipTrack: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="min-h-screen">
        <div className="ml-6 sm:ml-10 pt-[40vh]">
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
          <a
            href="https://www.instagram.com/tsetmunich/"
            target="_blank"
            className="flex w-fit items-center bg-black p-1 hover:bg-green hover:text-black gap-x-2 mt-2 md:text-2xl sm:text-xl text-l text-grey-light"
          >
            &rarr; <Instagram /> @tsetmunich
          </a>
          <a
            href="https://www.linkedin.com/company/tset-munich/"
            target="_blank"
            className="flex w-fit items-center bg-black p-1 hover:bg-green hover:text-black gap-x-2 mt-2 md:text-2xl sm:text-xl text-l text-grey-light"
          >
            &rarr; <Linkedin />
            @tset-munich
          </a>
        </div>
      </div>

      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-3]">
        <Gradient col0="green" col1="blue" col2="yellow" col3="blue" />
      </div>
    </div>
  );
};
