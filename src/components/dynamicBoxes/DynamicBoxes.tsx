import { useState } from "react";
import { MoveUpRight, ArrowRight, ChevronRight } from "lucide-react";

export const DynamicBoxes: React.FC<any> = (props) => {
  let [expandedElement, setExpandedElement] = useState(0);
  return (
    <div>
      <div className="w-full bg-black h-[4px] my-2" />

      <div className="flex gap-4 w-full h-[800px]">
        <div
          className={`h-full flex flex-col gap-y-4 transition-all ${
            expandedElement == 1 || expandedElement == 2 ? "w-[300%]" : "w-full"
          }`}
        >
          <div
            className={`bg-black ${
              expandedElement == 1
                ? "h-[300%] bg-blue text-black"
                : "w-full hover:bg-blue"
            } h-full transition-all cursor-pointer py-2 px-4`}
            onClick={() =>
              setExpandedElement((element) => (element == 1 ? 0 : 1))
            }
          >
            <h1 className="text-white font-bold text-xl sm:text-6xl">
              Start a New Project
            </h1>
          </div>
          <div
            className={`bg-black ${
              expandedElement == 2 ? "h-[300%] bg-blue" : "w-full hover:bg-blue"
            } h-full transition-all cursor-pointer py-2 px-4`}
            onClick={() =>
              setExpandedElement((element) => (element == 2 ? 0 : 2))
            }
          >
            <h1 className="text-purple-mid-light font-bold text-xl sm:text-6xl">
              Join an Exisiting Project
            </h1>
          </div>
        </div>
        <div
          className={`bg-black ${
            expandedElement == 3
              ? "w-[300%] bg-blue [&>h1]:text-white"
              : "w-[66%] hover:bg-blue"
          } h-full transition-all cursor-pointer py-2 px-4`}
          onClick={() =>
            setExpandedElement((element) => (element == 3 ? 0 : 3))
          }
        >
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-blue-mid-light font-bold text-xl sm:text-6xl transition-all">
              Apply to the Talente Spenden Core
            </h1>
            <div className="flex justify-end">
              {expandedElement != 3 && (
                <div className="flex items-center">
                  <ChevronRight className="text-white w-6 h-6" />
                  <h1 className="text-white text-xl">Read More</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-[4px] my-2" />
    </div>
  );
};
