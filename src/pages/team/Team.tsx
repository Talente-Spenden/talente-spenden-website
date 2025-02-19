import { Gradient } from "../../components/gradient/Gradient";
import { managementTeam } from "../../config/Config";
import { useViewport } from "../../contexts/ViewportContext";

export const Team = () => {
  const { width } = useViewport();

  return (
    <div className="w-screen">
      <div className="h-[30vh] bg-black">
        <h1 className="pl-6 sm:pl-10 pt-[20vh] font-bold font-['Poppins'] text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white">
          Team
        </h1>
      </div>
      <div className="bg-black pl-6 sm:pl-10 pb-10 min-h-[80vh]">
        <div className="w-full flex justify-between">
          {width > 1900 && (
            <h1 className="text-grey font-['Inter'] py-10 text-3xl md:text-4xl font-semibold">
              &rarr; Get to know <br />
              our core team
            </h1>
          )}
          <div className="flex flex-wrap justify-center max-w-[1850px]">
            {managementTeam.map((member) => {
              return (
                <>
                  <div className="w-[390px] mr-16 mt-10">
                    <img src={member.image} className="" />
                    <div className="mt-3 w-full h-[2px] bg-grey" />
                    <p className="text-white font-bold text-2xl pt-2">
                      {member.name}
                    </p>
                    <p className="text-grey-light text-xl font-bold">
                      {member.role}
                    </p>
                    <p className="text-grey">{member.job}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-grey-dark hover:bg-yellow hover:text-black"
                    >
                      &rarr; {member.email}
                    </a>
                  </div>
                  <div className="w-[390px] mr-16 mt-10">
                    <img src={member.image} className="" />
                    <div className="mt-3 w-full h-[2px] bg-grey" />
                    <p className="text-white font-bold text-2xl pt-2">
                      {member.name}
                    </p>
                    <p className="text-grey-light text-xl font-bold">
                      {member.role}
                    </p>
                    <p className="text-grey">{member.job}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-grey-dark hover:bg-yellow hover:text-black"
                    >
                      &rarr; {member.email}
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white pl-6 sm:pl-10 pb-10 min-h-[40vh]"></div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="orange" col1="yellow" col2="orange" col3="orange" />
      </div>
    </div>
  );
};
