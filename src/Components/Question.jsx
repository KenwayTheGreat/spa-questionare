import React from "react";
import AnswersChoose from "./AnswersChoose";
import AnswerText from "./AnswerText";

function Question({ question }) {
  return (
    <div className="col-12 p-2">
      <h3>{question.text}</h3>
      <ol className="px-5">
        {question.answers.map((answer, index) => (
          <li key={index} className="px-3 py-2">
            {question.type === "choose" ? (
              <AnswersChoose
                answersProp={answer}
                questionText={question.text}
              />
            ) : (
              <AnswerText answersProp={answer} questionText={question.text} />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Question;
