import { useState } from "react";

export const QAItem = (props: any) => {
  const { question, index } = props;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-[2px] bg-grey" />
      <div className="flex justify-between items-center">
        <div className="flex items-center pt-2 pb-6">
          <h2 className="text-white text-xl">{`0${index + 1}`}</h2>
          <h1 className="text-white ml-[5vw] font-['Inter'] font-medium text-xl lg:text-2xl">
            {question.question}
          </h1>
        </div>
        <div
          onClick={() => {
            setOpen((state) => {
              return !state;
            });
          }}
          className="cursor-pointer ml-6 flex justify-center items-center w-6 h-6  relative"
        >
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
      {open && <p className="text-white">{question.answer}</p>}
    </div>
  );
};
