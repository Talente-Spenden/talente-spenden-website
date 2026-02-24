import { Link } from "react-router-dom";
import { Gradient } from "../../components/gradient/Gradient";
import { managementTeam } from "../../config/Config";

export const Team: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="pl-6 sm:pl-10 pt-[20vh] mb-10">
        <h1 className=" font-bold text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Meet our <span className="italic text-blue-mid-light">Team</span>
        </h1>
        <p className="text-grey pb-2 font-semibold md:text-xl max-w-[80vw]">
          We're passionate to create social value. Looking to join the team?
        </p>
        <Link
          to="/join#roles"
          className="text-white hover:bg-blue-mid-light hover:text-black bg-black px-1 py-2 md:text-2xl font-bold"
        >
          &rarr; Open Roles at Talente Spenden
        </Link>
      </div>
      <div className="bg-black pt-12 xl:pl-6 pb-10 min-h-[80vh]">
        <div className="w-screen flex justify-center">
          <div className="flex flex-wrap justify-center md:justify-start h-full gap-8 lg:after:grow px-4">
            {managementTeam.map((member) => {
              return (
                <div className="w-[80%] md:w-[390px] max-w-[95vw]">
                  <div className="w-full md:w-[390px] h-[450px] sm:h-[500px] max-w-[95vw]">
                    <img
                      src={member.image}
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-3 w-full h-[2px] bg-grey" />
                  <p className="text-white font-bold text-2xl pt-2">
                    {member.name}
                  </p>
                  <p className="text-grey-light text-xl font-bold">
                    {member.role}
                  </p>
                  <p className="text-grey">{member.job}</p>
                  {member.email != "" && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-grey-dark hover:bg-yellow hover:text-black"
                    >
                      &rarr; {member.email}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-blue-mid-light h-[4px] w-full" />
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient
          col0="blue"
          col1="blue-mid-light"
          col2="green"
          col3="blue-mid-light"
        />
      </div>
    </div>
  );
};
