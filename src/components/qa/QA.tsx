import { QAItem } from "./QAItem";

export const QA = (props: any) => {
  const { questions } = props;
  return (
    <div className="max-w-[70vw]">
      {questions.map((question, index) => {
        return <QAItem question={question} index={index} />;
      })}
    </div>
  );
};
