import { QAItem } from "./QAItem";

export const QA = (props: any) => {
  const { questions } = props;
  return (
    <div className="w-[85vw] md:w-[70%]">
      {questions.map((question: any, index: number) => {
        return <QAItem question={question} index={index} />;
      })}
    </div>
  );
};
