import { useEffect, useState } from "react";
import { MoveUpRight, ArrowRight, ChevronRight } from "lucide-react";
import { useViewport } from "../../contexts/ViewportContext";

export const DynamicBoxes: React.FC<any> = (props) => {
  let [expandedElement, setExpandedElement] = useState(0);
  let [showLeft, setShowLeft] = useState(true);
  let [showRight, setShowRight] = useState(true);
  let [showUpper, setShowUpper] = useState(true);
  let [showLower, setShowLower] = useState(true);
  let { width } = useViewport();

  useEffect(() => {
    if (width < 700) {
      if (expandedElement != 0) {
        if (expandedElement == 1) {
          setShowLower(false);
          setShowRight(false);
        } else if (expandedElement == 2) {
          setShowUpper(false);
          setShowRight(false);
        } else {
          setShowLeft(false);
        }
      }
    } else {
      if (expandedElement == 1) {
        setShowLower(true);
        setShowRight(true);
      } else if (expandedElement == 2) {
        setShowUpper(true);
        setShowRight(true);
      } else {
        setShowLeft(true);
      }
    }
  }, [width, expandedElement]);

  return (
    <div>
      <div className="w-full bg-white h-[4px] mb-2" />

      <div className="flex gap-2 w-full h-[600px] lg:h-[700px]">
        {showLeft && (
          <div
            className={`h-full flex flex-col gap-y-2 transition-all ${
              expandedElement == 1 || expandedElement == 2
                ? "w-[300%]"
                : "w-full"
            }`}
          >
            {showUpper && (
              <div
                className={`${
                  expandedElement == 1
                    ? "h-[300%] bg-black text-black [&>*>*>h1]:!text-purple-mid-light"
                    : "h-full bg-white hover:bg-black"
                } group transition-all cursor-pointer py-2 px-4 overflow-scroll`}
                onClick={() => {
                  if (width < 700) {
                    setShowLower((state) => !state);
                    setShowRight((state) => !state);
                  } else {
                    setShowLower(true);
                    setShowRight(true);
                  }
                  setExpandedElement((element) => (element == 1 ? 0 : 1));
                }}
              >
                {" "}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h1
                      className={`text-purple italic font-bold ${
                        expandedElement != 1 && expandedElement != 0
                          ? "text-xl md:text-2xl"
                          : "text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl"
                      } group-hover:text-purple-mid-light transition-all`}
                    >
                      Start a New Project
                    </h1>
                    {expandedElement != 1 ? (
                      <p className="text-grey-dark w-full md:w-[85%] 2xl:w-[60%] lg:text-xl mt-2 lg:mt-10 group-hover:text-grey-light transition-all">
                        Let us know about your idea to make the world a better
                        place - and we'll help you make it work. Share your idea
                        via [...]
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="flex justify-end">
                    {expandedElement != 1 && (
                      <div className="flex items-center">
                        <ChevronRight className="text-purple w-6 h-6 group-hover:text-purple-mid-light transition-all" />
                        <h1 className="text-purple lg:text-xl group-hover:text-purple-mid-light transition-all">
                          Learn More
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {showLower && (
              <div
                className={` ${
                  expandedElement == 2
                    ? "h-[300%] bg-black [&>*>*>h1]:!text-purple-mid-light"
                    : "h-full bg-white hover:bg-black"
                } group transition-all cursor-pointer py-2 px-4 overflow-scroll`}
                onClick={() => {
                  if (width < 700) {
                    setShowUpper((state) => !state);

                    setShowRight((state) => !state);
                  } else {
                    setShowUpper(true);
                    setShowRight(true);
                  }
                  setExpandedElement((element) => (element == 2 ? 0 : 2));
                }}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h1
                      className={`text-purple italic font-bold ${
                        expandedElement != 2 && expandedElement != 0
                          ? "text-xl md:text-2xl"
                          : "text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl"
                      } group-hover:text-purple-mid-light transition-all`}
                    >
                      Join an Existing Project
                    </h1>
                    {expandedElement != 2 ? (
                      <p className="text-grey-dark lg:text-xl w-full md:w-[85%] 2xl:w-[60%] mt-2 lg:mt-10 group-hover:text-grey-light transition-all">
                        We offer a range of already existing project you can
                        volunteer at. To join [...]
                      </p>
                    ) : (
                      <>
                        <h2 className="mt-4 text-purple-mid-light font-bold text-xl lg:text-2xl ">
                          &rarr; How to apply
                        </h2>
                        <div className="w-full my-2 h-[2px] bg-grey-light" />
                        <p className="text-white">
                          <span className="bg-yellow text-black">
                            Just let us know
                          </span>{" "}
                          you’re interested in the position and why its a good
                          fit for you and we’ll take it from there. Also, a
                          brief introduction about yourself would be amazing!
                          <br />
                          <br />
                          You’ll find open roles at Talente Spenden below -
                          we’ll list them there, when we're looking for a
                          specific skill, however, you can still, regardless of
                          the roles listed below, take the initiative and apply
                          if you have an idea on how you could benefit the team
                          with your skillset.
                        </p>
                      </>
                    )}
                  </div>
                  <div className="flex justify-end">
                    {expandedElement != 2 && (
                      <div className="flex items-center">
                        <ChevronRight className="text-purple w-6 h-6 group-hover:text-purple-mid-light transition-all" />
                        <h1 className="text-purple lg:text-xl group-hover:text-purple-mid-light transition-all">
                          Learn More
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {showRight && (
          <div
            className={` ${
              expandedElement == 3
                ? "w-[300%] bg-black [&>*>*>h1]:!text-purple-mid-light"
                : "w-full xl:w-[66%] bg-white hover:bg-black"
            } group h-full transition-all cursor-pointer py-2 px-4 overflow-scroll`}
            onClick={() => {
              if (width < 700) {
                setShowLeft((state) => !state);
              } else {
                setShowLeft(true);
                setShowLower(true);
                setShowRight(true);
              }
              setExpandedElement((element) => (element == 3 ? 0 : 3));
            }}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="h-full">
                <h1
                  className={`text-purple italic font-bold ${
                    expandedElement != 3 && expandedElement != 0
                      ? "text-xl md:text-2xl"
                      : "text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl"
                  } group-hover:text-purple-mid-light transition-all`}
                >
                  Apply to the Talente Spenden Core
                </h1>
                {expandedElement != 3 ? (
                  <p className="text-grey-dark mt-2 lg:mt-10 group-hover:text-grey-light lg:text-xl transition-all">
                    Our Core Teams are the heart of Talente Spenden - and your
                    chance for regularly committment in one of the following
                    area: Technology, Events, Communication and Social
                    Entrepreneurship. We require you to [...]
                  </p>
                ) : (
                  <div className="">
                    <div>
                      <div className="w-full my-2 h-[2px] bg-grey-light" />{" "}
                      <p className="text-white mb-4 w-full 2xl:w-[90%]">
                        The Talente Spenden Core consists of everyone working on
                        supporting Talente Spenden as a whole. Joining the Core
                        provides you with the possibitlity to have a{" "}
                        <span className="bg-white text-black">
                          great impact on Talente Spenden
                        </span>
                        . Currently, for each of the following areas there is
                        one team respectively - Communication, Technology, Event
                        and Entrepreneurship. There's also the Management Team
                        consisting of the Team Leads of the former four teams.
                      </p>
                      <h2 className="mt-4 text-purple-mid-light font-bold text-xl lg:text-2xl ">
                        &rarr; What are the Core Teams Doing?
                      </h2>
                      <div className="w-full my-2 h-[2px] bg-grey-light" />{" "}
                      <div className="lg:flex gap-x-2 justify-between  w-full 2xl:w-[90%]">
                        <p className="text-white font-semibold">Technology</p>
                        <p className="text-white w-full lg:w-[80%]">
                          Our Technology Team develops{" "}
                          <span className="bg-yellow text-black">
                            software that creates social value
                          </span>
                          . It's main purpose is to create and manage tools to
                          push Talente Spenden's impact - however also project
                          that directy contribute to social value might be
                          realised.
                        </p>
                      </div>
                      <div className="mt-3 gap-x-2 lg:flex justify-between w-full 2xl:w-[90%]">
                        <p className="text-white font-semibold">Event</p>{" "}
                        <p className="text-white  w-full lg:w-[80%]">
                          The Event Team organizes and innovates Talente
                          Spenden's events, including our regular events such as
                          our Summer Fest, Semester Kick-Off. The Team also
                          <span className="bg-white text-black">
                            explores and develops brand-new event concepts
                          </span>{" "}
                          for Talente Spenden.
                        </p>
                      </div>
                      <div className="mt-3 gap-x-2 lg:flex justify-between w-full 2xl:w-[90%]">
                        <p className="text-white font-semibold">
                          Communication
                        </p>
                        <p className="text-white w-full lg:w-[80%]">
                          Our Communication Team keeps everyone updated on what
                          happens at Talente Spenden - internally as well as
                          externally. From developing marketing strategies to
                          making creative designs the{" "}
                          <span className="bg-yellow text-black">
                            Communication Team keeps Talente Spenden connected
                          </span>
                          .
                        </p>
                      </div>
                      <div className="mt-3 gap-x-2 lg:flex justify-between w-full 2xl:w-[90%]">
                        <p className="text-white font-semibold">
                          Entrepreneurship
                        </p>
                        <p className="text-white w-full lg:w-[80%]">
                          Our Entrepreneurship Team focusses on how{" "}
                          <span className="bg-white text-black">
                            social value can be created in an economically
                            attractive way
                          </span>
                          . It is responsible for our newest Track - the TSET,
                          where supporting innovative Social Entrepreneurship is
                          the goal.
                        </p>
                      </div>
                    </div>
                    <div className="lg:flex mt-2 gap-6 w-full">
                      <div className="lg:w-[50%]">
                        <h2 className="mt-4 text-purple-mid-light font-bold text-xl lg:text-2xl ">
                          &rarr; How to apply
                        </h2>
                        <div className="w-full my-2 h-[2px] bg-grey-light" />
                        <p className="text-white">
                          <span className="bg-yellow text-black">
                            Just let us know
                          </span>{" "}
                          you’re interested in the position and why its a good
                          fit for you and we’ll take it from there. Also, a
                          brief introduction about yourself would be amazing!
                          <br />
                          <br />
                          You’ll find open roles at Talente Spenden below -
                          we’ll list them there, when we're looking for a
                          specific skill, however, you can still, regardless of
                          the roles listed below, take the initiative and apply
                          if you have an idea on how you could benefit the team
                          with your skillset.
                        </p>
                      </div>
                      <div className="lg:w-[50%]">
                        <h2 className="mt-4 text-purple-mid-light font-bold text-xl lg:text-2xl">
                          &rarr; What we expect
                        </h2>
                        <div className="w-full my-2 h-[2px] bg-grey-light" />
                        <p className="text-white pb-4">
                          In the Talente Spenden Core, you have the possibitlity
                          to greatly impact Talente Spenden as a whole, so we
                          expect the following from you: <br />
                          <br />- Proactive Working Attitude
                          <br />- Reliability
                          <br />- High Motivation
                          <br />- Good Team Skills
                          <br />
                          <br /> There's no fixed amount of hours you have put
                          in each week - we all know how stressful studying can
                          be, so don't worry about that!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                {expandedElement != 3 && (
                  <div className="flex items-center">
                    <ChevronRight className="text-purple w-6 h-6 group-hover:text-purple-mid-light transition-all" />
                    <h1 className="text-purple lg:text-xl group-hover:text-purple-mid-light transition-all">
                      Learn More
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full bg-white h-[4px] mt-2" />
    </div>
  );
};
