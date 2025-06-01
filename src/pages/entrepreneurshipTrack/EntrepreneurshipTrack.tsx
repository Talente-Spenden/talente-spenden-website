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
              <span className="bg-yellow text-black">
                TSET Applications are open
              </span>{" "}
              until July 10, 2025.
            </h1>
            <p className="md:text-lg text-white">
              Apply via mail to talente-spenden@tum.de, attach your CV and
              answer our questions.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 px-6 lg:px-12 mt-4 justify-center">
          <a
            href="mailto:talente-spenden@tum.de?subject=TSET 2025 | Application&body=Full%20Name%3A%0AEmail%3A%0AUniversity%3A%0AField%20of%20study%3A%0A%0A---%0A%0ALinks%20to%20your%20GitHub%2C%20personal%20website%2C%20LinkedIn%2C%20%E2%80%A6%0A%0A---%0A%0AWhat%20excites%20you%20about%20building%20a%20startup%20or%20being%20part%20of%20the%20ecosystem%3F%0A%0AWhat%20do%20you%20hope%20to%20get%20out%20of%20TSET%3F%0A%0ADo%20you%20already%20have%20a%20startup%20idea%20or%20a%20project%20in%20mind%3F%0A%0ANo%20is%20completely%20fine%2C%20if%20yes%20then%20introduce%20it%20in%202-3%20sentences%0A%0AWhat%20skills%2C%20interests%2C%20or%20experiences%20do%20you%20think%20you%20would%20bring%20into%20the%20TSET%20cohort%3F%0A%0AAnything%20else%20you%27d%20like%20us%20to%20know%3F"
            target="_blank"
            className="group bg-white max-w-[80vw] min-w-[250px] flex justify-evenly items-center font-bold md:text-xl text-black px-3 py-3 md:px-5 md:py-3 cursor-pointer hover:bg-black hover:text-white transition-all duration-200"
          >
            <h1> &rarr; Apply Now</h1>
          </a>
          <a
            href="#application"
            className="border-white max-w-[80vw] border-[2px] min-w-[250px] flex justify-evenly items-center font-bold md:text-xl text-white px-3 py-3 md:px-5 md:py-3 cursor-pointer hover:border-black hover:text-black transition-all duration-200"
          >
            How to apply?
          </a>
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
                <div className="w-[50px] h-[50px] lg:bg-blue bg-black rounded-full  border-[4px] border-white" />
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
      <div className="lg:bg-blue bg-white h-[4px]" />
      <div id="application" className="bg-black md:flex justify-between">
        <div className="md:w-[70%] px-6 lg:px-12 py-6">
          <h1 className="text-xl lg:text-3xl text-white mb-8 font-bold">
            Application
          </h1>
          <h2 className="text-lg lg:text-xl text-white mb-2 font-bold ">
            Process
          </h2>
          <p className="md:text-lg text-white">
            Simply apply via mail to talente-spenden@tum.de and answer the
            questions from our application template. No motivational letters,
            meaningless phrases or AI generated filler sentences - let's cut the
            fluff and focus on what's truly important - you. <br /> After a
            careful review, the best applications will receive invitations to
            interviews. <br />
            <br />
          </p>
          <h2 className="text-lg lg:text-xl text-white mb-2 font-bold ">
            Your Data is Yours
          </h2>
          <p className="md:text-lg text-white">
            We will retain your data only for as long as necessary to complete
            the selection process. You have the right to access, correct, or
            delete your data at any time. For more information on how we handle
            your data, please read our Privacy Policy. By applying you consent
            to the collection and use of your personal data (including your CV)
            for the purpose of processing your application, as described above.
          </p>{" "}
          <div className="my-8">
            <a
              href="mailto:talente-spenden@tum.de?subject=TSET 2025 | Application&body=Full%20Name%3A%0AEmail%3A%0AUniversity%3A%0AField%20of%20study%3A%0A%0A---%0A%0ALinks%20to%20your%20GitHub%2C%20personal%20website%2C%20LinkedIn%2C%20%E2%80%A6%0A%0A---%0A%0AWhat%20excites%20you%20about%20building%20a%20startup%20or%20being%20part%20of%20the%20ecosystem%3F%0A%0AWhat%20do%20you%20hope%20to%20get%20out%20of%20TSET%3F%0A%0ADo%20you%20already%20have%20a%20startup%20idea%20or%20a%20project%20in%20mind%3F%0A%0ANo%20is%20completely%20fine%2C%20if%20yes%20then%20introduce%20it%20in%202-3%20sentences%0A%0AWhat%20skills%2C%20interests%2C%20or%20experiences%20do%20you%20think%20you%20would%20bring%20into%20the%20TSET%20cohort%3F%0A%0AAnything%20else%20you%27d%20like%20us%20to%20know%3F"
              target="_blank"
              className="bg-white items-center font-bold md:text-xl text-black px-4 py-3 md:px-8 md:py-3 cursor-pointer hover:bg-blue hover:text-white transition-all duration-200"
            >
              &rarr; Apply Now
            </a>
          </div>
        </div>
        <div className="bg-blue px-6 lg:px-12 py-6 w-full">
          <p className="md:text-2xl text-xl text-white font-bold">
            Application Template
          </p>
          <p className="md:text-lg text-white pb-4">
            In your application, please include the following information and
            answer our questions.
          </p>
          <div className="md:text-lg text-white">
            <p className="md:text-xl text-lg pb-4 text-white font-bold">
              01 General information
            </p>
            <div className="flex gap-x-2">
              <p>- </p> Full name
            </div>
            <div className="flex gap-x-2">
              <p>- </p> Email
            </div>
            <div className="flex gap-x-2">
              <p>- </p> University
            </div>
            <div className="flex gap-x-2">
              <p>- </p> Field of study
            </div>
            <div className="flex gap-x-2">
              <p>- </p> Attach your CV
            </div>
          </div>
          <div className="mt-4">
            <p className="md:text-xl text-lg pb-4 text-white font-bold">
              02 Share Your Experience
            </p>
            <p className="md:text-lg text-white">
              <div className="flex gap-x-2">
                <p>- </p> Links to your GitHub, personal website, previous
                projects, ...
              </div>
            </p>
          </div>
          <div className="mt-4">
            <p className="md:text-xl text-lg pb-4 text-white font-bold">
              03 Answer Our Questions
            </p>
            <p className="md:text-lg text-white">
              <div className="flex gap-x-2">
                <p>- </p> What excites you about building a startup or being
                part of the ecosystem?
              </div>
              <div className="flex gap-x-2">
                <p>- </p> What do you hope to get out of TSET?
              </div>
              <div className="flex gap-x-2">
                <p>- </p> Do you already have a startup idea or a project in
                mind?
              </div>
              <div className="flex gap-x-2">
                <p>- </p> No is completely fine, if yes then introduce it in 2-3
                sentences
              </div>
              <div className="flex gap-x-2">
                <p>- </p> What skills, interests, or experiences do you think
                you would bring into the TSET cohort?
              </div>{" "}
              <div className="flex gap-x-2">
                <p>- </p> Anything else you'd like us to know?
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[4px] justify-center bg-blue"></div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-3]">
        <Gradient col0="green" col1="blue" col2="yellow" col3="blue" />
      </div>
    </div>
  );
};
