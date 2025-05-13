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
                <h1 className="text-purple italic font-bold text-xl sm:text-6xl group-hover:text-purple-mid-light transition-all">
                  Start a New Project
                </h1>
                <p className="text-grey-dark w-[60%] mt-10 group-hover:text-grey-light text-xl transition-all">
                  We're always open to hear about your ideas for new projects
                  that make the world a better place - Let us know about yours
                  and we'll help you make it work.
                </p>
              </div>
              <div className="flex justify-end">
                {expandedElement != 1 && (
                  <div className="flex items-center">
                    <ChevronRight className="text-purple w-6 h-6 group-hover:text-purple-mid-light transition-all" />
                    <h1 className="text-purple text-xl group-hover:text-purple-mid-light transition-all">
                      Read More
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
                <h1 className="text-purple italic font-bold text-xl sm:text-6xl group-hover:text-purple-mid-light transition-all">
                  Join an Exisiting Project
                </h1>
                <p className="text-grey-dark w-[60%] mt-10 group-hover:text-grey-light text-xl transition-all">
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
                      Read More
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
            <div>
              <h1 className="text-purple italic font-bold text-xl sm:text-6xl group-hover:text-purple-mid-light transition-all">
                Apply to the Talente Spenden Core
              </h1>
              <p className="text-grey-dark mt-10 group-hover:text-grey-light text-xl transition-all">
                The Talente Spenden Core consists of everyone working on
                supporting Talente Spenden as a whole. Currently, for each of
                the following areas there is one team respectively -
                Communication, Technology, Event and Entrepreneurship as well as
                the Management Team consisting of the Team Leads of the former
                four teams.
                <br />
                Volunteering at Talente Spenden's Core requires regular,
                proactive and reliable commitment.
              </p>
            </div>
            <div className="flex justify-end">
              {expandedElement != 3 && (
                <div className="flex items-center">
                  <ChevronRight className="text-purple w-6 h-6 group-hover:text-purple-mid-light transition-all" />
                  <h1 className="text-purple text-xl group-hover:text-purple-mid-light transition-all">
                    Read More
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
