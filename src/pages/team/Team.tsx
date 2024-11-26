import { Gradient } from "../../components/gradient/Gradient";
import { managementTeam } from "../../config/Config";

export const Team = () => {
  return (
    <div className="w-screen">
      <div className="h-[30vh]">
        <h1 className="pl-6 sm:pl-10 pt-[20vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Team
        </h1>
      </div>{" "}
      <div className="bg-white pl-6 sm:pl-10 pb-10 min-h-[80vh]">
        <h1 className="text-black font-['Poppins'] py-10 text-3xl md:text-4xl font-bold">
          Wanna join Talente Spenden?{" "}
        </h1>
        <h1 className="text-black font-['Poppins'] py-10 text-3xl md:text-4xl font-bold">
          Talente Spenden Management Team
        </h1>
        <div className="flex flex-wrap justify-between max-w-[1900px]">
          {managementTeam.map((member) => {
            return (
              <div className="w-[390px] mr-5 mt-5">
                <img src={member.image} className="" />
                <p className="text-black font-bold text-2xl pt-2">
                  {member.name}
                </p>
                <p className="text-grey-dark text-xl font-bold">
                  {member.role}
                </p>
                <p className="text-grey-dark">{member.job}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-grey-dark hover:bg-yellow hover:text-black"
                >
                  &rarr; {member.email}
                </a>
              </div>
            );
          })}
        </div>
        <h1 className="text-black font-['Poppins'] py-10 text-3xl md:text-4xl font-bold">
          Talente Spenden Core Team Members
        </h1>
        <h1 className="text-black font-['Poppins'] py-10 text-3xl md:text-4xl font-bold">
          Talente Spenden Charity Track - Project Leads
        </h1>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="orange" col1="yellow" col2="orange" col3="orange" />
      </div>
    </div>
  );
};
