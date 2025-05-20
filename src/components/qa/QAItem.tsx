import { useState } from "react";
import { QAItem } from "../../types/Types";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const QAElement: React.FC<{ question: QAItem; index: number }> = (
  props
) => {
  const { question, index } = props;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-[2px] bg-grey" />
      <div
        onClick={() => {
          setOpen((state) => {
            return !state;
          });
        }}
        className=" cursor-pointer"
      >
        <div className="w-full flex items-start justify-between pb-10 pt-6">
          <div className="flex justify-start max-w-[90%]">
            <h2 className="text-white text-xl">{`0${index + 1}`}</h2>
            <div className="ml-[5vw] overflow-hidden">
              <h1 className="text-white font-['Inter'] font-medium text-lg lg:text-xl">
                {question.question}
              </h1>{" "}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ type: "spring", duration: 0.2, bounce: 0.1 }}
                  >
                    <p className="text-white pt-6 max-w-[80%] mb-4 lg:text-lg">
                      {question.answer}
                    </p>
                    {question.links.map((link) => {
                      return (
                        <>
                          {" "}
                          {link.type == "internal" ? (
                            <Link
                              to={link.url}
                              className="text-white mb-2  max-w-[80%] lg:text-lg"
                            >
                              <div className="w-fit border-[2px] py-1 border-blue px-3 hover:bg-blue transition-all">
                                &rarr; {link.text}
                              </div>
                            </Link>
                          ) : (
                            <a
                              href={link.url}
                              className="text-white mb-2 max-w-[80%] transition-all lg:text-lg"
                            >
                              <div className="w-fit border-[2px] py-1 border-blue px-3 hover:bg-blue transition-all">
                                &rarr; {link.text}{" "}
                              </div>
                            </a>
                          )}
                        </>
                      );
                    })}{" "}
                    <div className="mt-2 w-full h-[2px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="cursor-pointer w-6 h-6 relative">
            <div
              className={`w-6 h-[2px] bg-white absolute top-0 left-0 right-0 bottom-0 m-auto`}
            />
            <div
              className={`w-[2px] h-6 bg-white absolute top-0 left-0 right-0 bottom-0 m-auto transition-all ${
                open ? "rotate-[-90deg]" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
