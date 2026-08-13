import { Gradient } from "../../components/gradient/Gradient";
import { QA } from "../../components/qa/QA";
import { ScrollBandText } from "../../components/ScrollBand/ScrollBandText";
import { tsetQuestions } from "../../config/Config";

export const EntrepreneurshipTrack: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="">
        <div className="pt-[20vh] mb-24 px-[5vw]">
          <h1 className="font-bold font-['Poppins'] text-3xl md:text-4xl lg:text-5xl text-white">
            TSET - Entrepreneurship Meets Social Value
          </h1>
          <p className="mt-2 md:text-xl text-lg text-grey-light max-w-[800px]">
            The Talente Spenden Entrepreneurship Track puts you on a Real World
            Challenge from a partner company for four months, with the tools,
            mentors, and network to turn your solution into a startup.
          </p>
        </div>
      </div>

      <div className="bg-black pt-16 lg:pb-16 lg:flex gap-x-8 justify-between">
        <div className="px-[5vw] lg:pr-12 pb-16 lg:pb-0">
          <h1 className="font-['Inter'] font-bold text-xl lg:text-3xl text-white mb-4">
            What is TSET?
          </h1>
          <p className="md:text-lg text-white">
            TSET is an exclusive, application-only program for students enrolled
            at Munich universities. Over four months, you'll join a driven
            cohort and pick the track that fits you: Explorer, to find out
            whether founding is for you, or Builder, if you're ready to start
            building - all backed by top-tier mentors and a strong STEM-powered
            network.
          </p>
          <div className="mt-6 border-l-4 border-blue bg-blue-dark rounded-r-lg p-5">
            <p className="text-lg md:text-xl text-white font-bold">
              Real World Challenges
            </p>
            <p className="md:text-lg text-grey-light mt-1">
              Four months on a problem a partner company is genuinely working
              on right now, with the potential to turn your solution into your
              own startup.
            </p>
          </div>
          <p className="text-lg text-white font-bold pt-8 pb-2">
            What you'll achieve
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">Workshops & keynotes</p>
              <p className="text-grey-light mt-1">
                Expert-led sessions on entrepreneurship, funding, and team
                building
              </p>
            </div>
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">VC access</p>
              <p className="text-grey-light mt-1">
                Again we will have a VC partner on board this year
              </p>
            </div>
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">Cohort meetings</p>
              <p className="text-grey-light mt-1">
                Regular sessions that keep you connected and accountable across
                the working phase
              </p>
            </div>
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">Network</p>
              <p className="text-grey-light mt-1">
                Access to a unique community of high-achieving students,
                founders & partners
              </p>
            </div>
          </div>
          <p className="text-lg text-white font-bold pt-8 pb-2">
            What you'll bring
          </p>
          <p className="md:text-lg text-white">
            We value potential over polish. You don't need a co-founder or a
            finished idea to apply - teams form inside the program. Whether you
            join the Explorer track to find out if founding is for you or the
            Builder track because you're ready to start building, TSET meets
            you where you are. What matters more:
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">Curiosity</p>
              <p className="text-grey-light mt-1">
                An interest in innovation, impact, and how startups work
              </p>
            </div>
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">Motivation</p>
              <p className="text-grey-light mt-1">
                The drive to found or join a team building a meaningful venture
              </p>
            </div>
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">Openness</p>
              <p className="text-grey-light mt-1">
                The willingness to explore the Munich startup ecosystem and
                connect with like-minded peers
              </p>
            </div>
            <div className="border border-grey-dark rounded-lg p-4">
              <p className="font-bold text-white">Enrollment</p>
              <p className="text-grey-light mt-1">
                You study at a Munich university (any field of study!)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:bg-black bg-blue px-6 lg:px-12 lg:py-0 py-12 mt-8 lg:mt-0">
          <div className="flex gap-x-4 min-w-[280px] lg:min-w-[450px] lg:mt-0 max-w-[80%] lg:max-w-full lg-bg-black">
            <div>
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] lg:bg-blue bg-white rounded-full  border-[4px] border-white" />
                <div className="h-[120px] w-[4px] bg-white" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] rounded-full  border-[4px] border-white" />
                <div className="h-[120px] w-[4px] bg-white" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] rounded-full  border-[4px] border-white" />
                <div className="h-[120px] w-[4px] bg-white" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] rounded-full  border-[4px] border-white" />
                <div className="h-[120px] w-[1px] border-white border-[4px] border-dotted" />
              </div>
            </div>
            <div className="text-white">
              <div className="flex gap-x-4 items-center h-[50px]">
                <h1 className="font-bold text-xl">01.09. - 15.09.2026</h1>
              </div>
              <div className="flex flex-col pl-2 lg:pl-8 justify-center h-[120px] ">
                <h2 className="text-xl font-semibold">Application Phase</h2>
                <h2 className="md:text-lg text-grey-light">
                  This is your time to apply for the second round of TSET.
                </h2>
              </div>
              <div className="flex gap-x-4 items-center h-[50px]">
                <h1 className="font-bold text-xl">16.09. - 26.09.2026</h1>
              </div>
              <div className="flex flex-col pl-2 lg:pl-8 justify-center h-[120px]">
                <h2 className="text-xl font-semibold">Selection Phase</h2>
                <h2 className="md:text-lg text-grey-light">
                  The most outstanding applications are interviewed and
                  selected.
                </h2>
              </div>
              <div className="flex gap-x-4 items-center h-[50px]">
                <h1 className="font-bold text-xl">Oct 2026 - Jan 2027</h1>
              </div>
              <div className="flex flex-col pl-2 lg:pl-8 justify-center h-[120px]">
                <h2 className="text-xl font-semibold">
                  Kickoff & Working Phase
                </h2>
                <h2 className="md:text-lg text-grey-light">
                  Big kickoff, four months of work on your Real World
                  Challenge, and workshops along the way.
                </h2>
              </div>
              <div className="flex gap-x-4 items-center flex-wrap h-[50px]">
                <h1 className="font-bold text-xl">End of Jan 2027</h1>
                <h2 className="text-xl">Potential Pitches</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:bg-blue bg-white h-[4px] w-full" />
      <div className="bg-black h-[9vh] flex items-center justify-center">
        <ScrollBandText
          texts={[
            {
              type: "Instagram",
              text: "@tsetmunich",
              link: "https://www.instagram.com/tsetmunich/",
            },
            {
              type: "LinkedIn",
              text: "@tset-munich",
              link: "https://www.linkedin.com/company/tset-munich",
            },
            {
              type: "Instagram",
              text: "@tsetmunich",
              link: "https://www.instagram.com/tsetmunich/",
            },
            {
              type: "LinkedIn",
              text: "@tset-munich",
              link: "https://www.linkedin.com/company/tset-munich",
            },
            {
              type: "Instagram",
              text: "@tsetmunich",
              link: "https://www.instagram.com/tsetmunich/",
            },
            {
              type: "LinkedIn",
              text: "@tset-munich",
              link: "https://www.linkedin.com/company/tset-munich",
            },
            {
              type: "Instagram",
              text: "@tsetmunich",
              link: "https://www.instagram.com/tsetmunich/",
            },
            {
              type: "LinkedIn",
              text: "@tset-munich",
              link: "https://www.linkedin.com/company/tset-munich",
            },
          ]}
        />
      </div>
      <div className="lg:bg-blue bg-white h-[4px] w-full" />

      <div className="bg-black pt-10 pb-10">
        <h1 className="ml-[5vw] font-['Inter'] font-medium text-xl lg:text-3xl text-white mb-8">
          Q&A
        </h1>
        <div className="w-full flex justify-center md:justify-end md:pr-[5vw]">
          <QA questions={tsetQuestions} />
        </div>
      </div>
      <div className="h-[4px] justify-center bg-blue"></div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-3]">
        <Gradient col0="green" col1="blue" col2="yellow" col3="blue" />
      </div>
    </div>
  );
};
