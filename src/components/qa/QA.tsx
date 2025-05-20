import { QaHomeConfig } from "../../types/Types";
import { QAElement } from "./QAItem";

export const QA: React.FC<{ questions: QaHomeConfig }> = (props) => {
  const { questions } = props;
  return (
    <div className="w-[85vw] md:w-[70%]">
      {questions.map((question: any, index: number) => {
        return <QAElement question={question} index={index} />;
      })}
    </div>
  );
};
