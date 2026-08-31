import { Gradient } from "../../components/gradient/Gradient";
import { QA } from "../../components/qa/QA";
import { ScrollBandText } from "../../components/ScrollBand/ScrollBandText";
import { tsetQuestions } from "../../config/Config";

const applicationMailto =
  "mailto:tset.muc@gmail.com?subject=TSET%202026%20%7C%20Application&body=Full%20Name%3A%0AEmail%3A%0AUniversity%3A%0AField%20of%20study%3A%0A%0A---%0A%0ALinks%20to%20your%20GitHub%2C%20personal%20website%2C%20LinkedIn%2C%20%E2%80%A6%0A%0A---%0A%0AWhat%20excites%20you%20about%20building%20a%20startup%20or%20being%20part%20of%20the%20ecosystem%3F%0A%0AWhat%20do%20you%20hope%20to%20get%20out%20of%20TSET%3F%0A%0ADo%20you%20already%20have%20a%20startup%20idea%20or%20a%20project%20in%20mind%3F%0A%0ANo%20is%20completely%20fine%2C%20if%20yes%20then%20introduce%20it%20in%202-3%20sentences%0A%0AWhat%20skills%2C%20interests%2C%20or%20experiences%20do%20you%20think%20you%20would%20bring%20into%20the%20TSET%20cohort%3F%0A%0AAnything%20else%20you%27d%20like%20us%20to%20know%3F";

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

      <div className="bg-blue items-center py-8 justify-center">
        <div className="px-6 lg:px-12 flex justify-center">
          <div className="text-center">
            <h1 className=" font-['Inter'] font-bold text-xl lg:text-2xl text-white">
              <span className="bg-yellow text-black">
                TSET Applications are open
              </span>{" "}
              September 1 - 15, 2026.
            </h1>
            <p className="md:text-lg text-white">
              Apply via mail to tset.muc@gmail.com, attach your CV and answer
              our questions.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 px-6 lg:px-12 mt-4 justify-center">
          <a
            href={applicationMailto}
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
          <figure className="mt-6">
            <img
              src="/tset-batch-2025.png"
              alt="The first TSET batch of 2025 gathered at the kickoff in Munich"
              className="w-full rounded-lg object-cover"
            />
            <figcaption className="mt-2 text-grey-light">
              Our first TSET batch at the kickoff in Munich, 2025.
            </figcaption>
          </figure>
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
          <div className="min-w-[280px] lg:min-w-[450px] lg:mt-0 max-w-[80%] lg:max-w-full text-white">
            <div className="flex gap-x-4 min-h-[170px]">
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] shrink-0 lg:bg-blue bg-white rounded-full  border-[4px] border-white" />
                <div className="flex-1 w-[4px] bg-white" />
              </div>
              <div>
                <div className="flex items-center h-[50px]">
                  <h1 className="font-bold text-xl">01.09. - 15.09.2026</h1>
                </div>
                <div className="flex flex-col pl-2 lg:pl-8 justify-center min-h-[120px] pb-4">
                  <h2 className="text-xl font-semibold">Application Phase</h2>
                  <h2 className="md:text-lg text-grey-light">
                    This is your time to apply for the second round of TSET.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 min-h-[170px]">
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full  border-[4px] border-white" />
                <div className="flex-1 w-[4px] bg-white" />
              </div>
              <div>
                <div className="flex items-center h-[50px]">
                  <h1 className="font-bold text-xl">16.09. - 26.09.2026</h1>
                </div>
                <div className="flex flex-col pl-2 lg:pl-8 justify-center min-h-[120px] pb-4">
                  <h2 className="text-xl font-semibold">Selection Phase</h2>
                  <h2 className="md:text-lg text-grey-light">
                    The most outstanding applications are interviewed and
                    selected.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 min-h-[170px]">
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full  border-[4px] border-white" />
                <div className="flex-1 w-[4px] bg-white" />
              </div>
              <div>
                <div className="flex items-center h-[50px]">
                  <h1 className="font-bold text-xl">Oct 2026 - Jan 2027</h1>
                </div>
                <div className="flex flex-col pl-2 lg:pl-8 justify-center min-h-[120px] pb-4">
                  <h2 className="text-xl font-semibold">
                    Kickoff & Working Phase
                  </h2>
                  <h2 className="md:text-lg text-grey-light">
                    Big kickoff, four months of work on your Real World
                    Challenge, and workshops along the way.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full  border-[4px] border-white" />
                <div className="h-[120px] w-[1px] border-white border-[4px] border-dotted" />
              </div>
              <div className="flex gap-x-4 items-center flex-wrap min-h-[50px]">
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
            Simply apply via mail to tset.muc@gmail.com and answer the
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
              href={applicationMailto}
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
            <div className="md:text-lg text-white">
              <div className="flex gap-x-2">
                <p>- </p> Links to your GitHub, personal website, previous
                projects, ...
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="md:text-xl text-lg pb-4 text-white font-bold">
              03 Answer Our Questions
            </p>
            <div className="md:text-lg text-white">
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
            </div>
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
