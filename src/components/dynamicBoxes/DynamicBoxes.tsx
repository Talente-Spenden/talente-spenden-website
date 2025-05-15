import { useState } from "react";
import { MoveUpRight, ArrowRight, ChevronRight } from "lucide-react";

export const DynamicBoxes: React.FC<any> = (props) => {
  let [expandedElement, setExpandedElement] = useState(0);
  return (
    <div>
      <div className="w-full bg-white h-[4px] mb-2" />

      <div className="flex gap-2 w-full h-[800px]">
        <div
          className={`h-full flex flex-col gap-y-2 transition-all ${
            expandedElement == 1 || expandedElement == 2 ? "w-[300%]" : "w-full"
          }`}
        >
          <div
            className={`${
              expandedElement == 1
                ? "h-[300%] bg-black text-black [&>*>*>h1]:!text-purple-mid-light"
                : "h-full bg-white hover:bg-black"
            } group transition-all cursor-pointer py-2 px-4`}
            onClick={() =>
              setExpandedElement((element) => (element == 1 ? 0 : 1))
            }
          >
            {" "}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1
                  className={`text-purple italic font-bold ${
                    expandedElement != 1 && expandedElement != 0
                      ? "text-xl sm:text-4xl"
                      : "text-xl sm:text-6xl"
                  } group-hover:text-purple-mid-light transition-all`}
                >
                  Start a New Project
                </h1>
                {expandedElement != 1 ? (
                  <p className="text-grey-dark w-[60%] mt-10 group-hover:text-grey-light text-xl transition-all">
                    We're always open to hear about your ideas for new projects
                    that make the world a better place - Let us know about yours
                    and we'll help you make it work.
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex justify-end">
                {expandedElement != 1 && (
                  <div className="flex items-center">
                    <ChevronRight className="text-purple w-6 h-6 group-hover:text-purple-mid-light transition-all" />
                    <h1 className="text-purple text-xl group-hover:text-purple-mid-light transition-all">
                      Learn More
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={` ${
              expandedElement == 2
                ? "h-[300%] bg-black [&>*>*>h1]:!text-purple-mid-light"
                : "h-full bg-white hover:bg-black"
            } group transition-all cursor-pointer py-2 px-4`}
            onClick={() =>
              setExpandedElement((element) => (element == 2 ? 0 : 2))
            }
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1
                  className={`text-purple italic font-bold ${
                    expandedElement != 2 && expandedElement != 0
                      ? "text-xl sm:text-4xl"
                      : "text-xl sm:text-6xl"
                  } group-hover:text-purple-mid-light transition-all`}
                >
                  Join an Existing Project
                </h1>
                <p className="text-grey-dark w-[80%] mt-10 group-hover:text-grey-light text-xl transition-all">
                  In our Charity Track, we offer a wide range of projects you
                  can volunteer at. You can register as a volunteer for their
                  events, in some projects, apply for a Project Lead role.
                </p>
              </div>
              <div className="flex justify-end">
                {expandedElement != 2 && (
                  <div className="flex items-center">
                    <ChevronRight className="text-purple w-6 h-6 group-hover:text-purple-mid-light transition-all" />
                    <h1 className="text-purple text-xl group-hover:text-purple-mid-light transition-all">
                      Learn More
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${
            expandedElement == 3
              ? "w-[300%] bg-black [&>*>*>h1]:!text-purple-mid-light"
              : "w-[66%] bg-white hover:bg-black"
          } group h-full transition-all cursor-pointer py-2 px-4`}
          onClick={() =>
            setExpandedElement((element) => (element == 3 ? 0 : 3))
          }
        >
          <div className="flex flex-col justify-between h-full">
            <div className="h-full">
              <h1
                className={`text-purple italic font-bold ${
                  expandedElement != 3 && expandedElement != 0
                    ? "text-xl sm:text-4xl"
                    : "text-xl sm:text-6xl"
                } group-hover:text-purple-mid-light transition-all`}
              >
                Apply to the Talente Spenden Core
              </h1>
              {expandedElement != 3 ? (
                <p className="text-grey-dark mt-10 group-hover:text-grey-light text-xl transition-all">
                  The Talente Spenden Core consists of everyone working on
                  supporting Talente Spenden as a whole. You can apply to join
                  one of our four teams in the fields of Technology, Events,
                  Communication and Entrepreneurship. We require [...]
                </p>
              ) : (
                <div className="">
                  <div>
                    <h2 className="mt-8 text-purple-mid-light font-bold text-2xl ">
                      &rarr; What is the Core?
                    </h2>
                    <div className="w-full my-2 h-[2px] bg-grey-light" />{" "}
                    <p className="text-white mb-4 w-[70%]">
                      The Talente Spenden Core consists of everyone working on
                      supporting Talente Spenden as a whole. Joining the Core
                      provides you with the possibitlity to have a great impact
                      on Talente Spenden. Currently, for each of the following
                      areas there is one team respectively - Communication,
                      Technology, Event and Entrepreneurship. There's also the
                      Management Team consisting of the Team Leads of the former
                      four teams.
                    </p>
                    <h2 className="mt-4 text-purple-mid-light font-bold text-2xl ">
                      &rarr; What are the Core Teams Doing?
                    </h2>
                    <div className="w-full my-2 h-[2px] bg-grey-light" />{" "}
                    <div className="flex justify-between w-[70%]">
                      <p className="text-white font-semibold">
                        Technology Team
                      </p>
                      <p className="text-white w-[80%]">
                        Our Technology Team develops software that creates
                        social value. It's main purpose is to create and manage
                        tools to push Talente Spenden's impact - however also
                        project that directy contribute to social value might be
                        realised.
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between w-[70%]">
                      <p className="text-white font-semibold">Event Team</p>{" "}
                      <p className="text-white w-[80%]">
                        The Event Team organizes and innovates Talente Spenden's
                        event, including our regular events such as our Summer
                        Fest, Semester Kick-Off. The Team also explores and
                        develops brand-new event concepts for Talente Spenden.
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between w-[70%]">
                      <p className="text-white font-semibold">
                        Communication Team
                      </p>
                      <p className="text-white w-[80%]">
                        The Event Team organizes and innovates Talente Spenden's
                        event, including regular events such as our Summer Fest
                        or Kick-Offs. The Team also explores and develops
                        brand-new event concepts for Talente Spenden.
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between w-[70%]">
                      <p className="text-white font-semibold">
                        Entrepreneurship Team
                      </p>
                      <p className="text-white w-[80%]">
                        Our Entrepreneurship Team focusses on how social value
                        can be created in an economically attractive way. It is
                        responsible for our newest Track - the TSET, where
                        supporting innovative Social Entrepreneurship is the
                        goal.
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4 gap-6 w-full">
                    <div className="w-[50%]">
                      <h2 className="mt-4 text-purple-mid-light font-bold text-2xl ">
                        &rarr; How to apply
                      </h2>
                      <div className="w-full my-2 h-[2px] bg-grey-light" />
                      <p className="text-white">
                        Just let us know you’re interested in the position and
                        why its a good fit for you and we’ll take it from there.
                        Also, a brief introduction about yourself would be
                        amazing!
                        <br />
                        <br />
                        You’ll find open roles at Talente Spenden below - we’ll
                        list them there, when we're looking for a specific
                        skill, however, you can still, regardless of the roles
                        listed below, take the initiative and apply if you have
                        an idea on how you could benefit the team with your
                        skillset.
                      </p>
                    </div>
                    <div className="w-[50%]">
                      <h2 className="mt-4 text-purple-mid-light font-bold text-2xl">
                        &rarr; What we expect
                      </h2>
                      <div className="w-full my-2 h-[2px] bg-grey-light" />
                      <p className="text-white">
                        In the Talente Spenden Core, you have the possibitlity
                        to greatly impact Talente Spenden as a whole. We do
                        expect the following from you: <br />
                        <br />- Proactive Working Attitude
                        <br />- Reliability
                        <br />- High Motivation
                        <br />- Good Team Skills
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
                  <h1 className="text-purple text-xl group-hover:text-purple-mid-light transition-all">
                    Learn More
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[4px] mt-2" />
    </div>
  );
};
