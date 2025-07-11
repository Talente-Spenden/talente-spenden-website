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
            The Talente Spenden Entrepreneurship Track equips future founders
            with the best tools and access to an exclusive network for driving
            social impact.
          </p>
        </div>
      </div>
      <div className="bg-blue items-center py-8 justify-center">
        <div className="px-6 lg:px-12 flex justify-center">
          <div className="text-center">
            <h1 className=" font-['Inter'] font-bold text-xl lg:text-2xl text-white">
              The application phase for our first TSET iteration has ended.
            </h1>
            <p className="md:text-lg text-white">
              Now, all applications will be carefully reviewed.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black pt-16 lg:pb-16 lg:flex gap-x-8 justify-between">
        <div className="px-6 lg:px-12 pb-16 lg:pb-0">
          <h1 className="font-['Inter'] font-bold text-xl lg:text-3xl text-white mb-4">
            What is TSET?
          </h1>
          <p className="md:text-lg text-white">
            TSET is an exclusive, application-only program for students enrolled
            in Munich universities who want to create startups with real social
            impact. Over the course of six months, you'll join a driven cohort
            of young innovators, get access to top-tier mentors, and develop
            your idea into a fundable business - all backed by a strong
            STEM-powered network.
          </p>
          <p className="text-lg text-white font-bold pt-8 pb-2">
            What you'll achieve
          </p>
          <p className="md:text-lg text-white">
            🎯 Expert-led workshops/ keynotes on entrepreneurship, funding, and
            team building <br />
            💼 One-on-one mentoring & support in crafting your business plan
            <br />
            💸 Pitch coaching with a VC - who is ready to invest in strong ideas
            <br />
            🌐 Access to a unique network of high-achieving students, founders &
            partners
            <br />
            🎤 Final pitch event to showcase your venture
          </p>
          <p className="text-lg text-white font-bold pt-8 pb-2">
            What you'll bring
          </p>
          <p className="md:text-lg text-white">
            We’re not looking for perfection - we’re looking for potential. TSET
            is designed to be flexible - you decide how much time and energy you
            want to invest. Whether you’re ready to go all-in on your idea or
            just starting to explore the world of entrepreneurship, this program
            meets you where you are. What matters more: <br />
            <br />
          </p>
          <p className="md:text-lg text-white">
            🔍 Curiosity about innovation, impact, and how startups work
            <br />
            💡 Interest in founding or being part of a team building a
            meaningful venture
            <br />
            🌍 Openness to explore the Munich startup ecosystem and connect with
            like-minded peers
            <br />
            🎓 Enrollment at a Munich university (any field of study!)
          </p>
        </div>
        <div className="w-full lg:bg-black bg-blue px-6 lg:px-12 lg:py-0 py-12 mt-8 lg:mt-0">
          <div className="flex gap-x-4 min-w-[280px] lg:min-w-[450px] lg:mt-0 max-w-[80%] lg:max-w-full lg-bg-black">
            <div>
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px]  rounded-full  border-[4px] border-white" />
                <div className="h-[120px] w-[4px] bg-white" />
              </div>
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
                <h1 className="font-bold text-xl">01.06.2025</h1>
              </div>
              <div className="flex flex-col pl-2 lg:pl-8 justify-center h-[120px] ">
                <h2 className="text-xl font-semibold">Application Phase</h2>
                <h2 className="md:text-lg text-grey-light">
                  This is your time to apply to our brand-new entrepreneurship
                  program.
                </h2>
              </div>
              <div className="flex gap-x-4 items-center h-[50px]">
                <h1 className="font-bold text-xl">10.07.2025</h1>
              </div>
              <div className="flex flex-col pl-2 lg:pl-8 justify-center h-[120px]">
                <h2 className="text-xl font-semibold">Selection Phase</h2>
                <h2 className="md:text-lg text-grey-light">
                  The most outstanding applications are interviewed and
                  selected.
                </h2>
              </div>
              <div className="flex gap-x-4 items-center h-[50px]">
                <h1 className="font-bold text-xl">01.08.2025</h1>
              </div>
              <div className="flex flex-col pl-2 lg:pl-8 justify-center h-[120px]">
                <h2 className="text-xl font-semibold">Ideation Phase</h2>
                <h2 className="md:text-lg text-grey-light">
                  Exciting keynotes & workshops to prepare you for your TSET
                  projects.
                </h2>
              </div>
              <div className="flex gap-x-4 items-center h-[50px]">
                <h1 className="font-bold text-xl">31.10.2025</h1>
              </div>
              <div className="flex flex-col pl-2 lg:pl-8 justify-center h-[120px]">
                <h2 className="text-xl font-semibold">Working Phase</h2>
                <h2 className="md:text-lg text-grey-light">
                  Develop your ideas into comprehensive concepts and prepare
                  your final pitches.
                </h2>
              </div>
              <div className="flex gap-x-4 items-center flex-wrap h-[50px]">
                <h1 className="font-bold text-xl">End of Jan 2026</h1>
                <h2 className="text-xl">Final Pitches</h2>
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
