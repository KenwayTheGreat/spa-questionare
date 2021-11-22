import React, { useContext } from "react";
import { SPAContext } from "../Context/SPAContext";
import "../Styles/Answer.css";

function Answers({ answersProp, questionText }) {
  const { sectionId, setQuestions, setAnswers } = useContext(SPAContext);

  const answerClick = () => {
    if (sectionId === 1) {
      console.log(answersProp.text);
      answersProp.question_id === 1
        ? setAnswers((prev) => ({ ...prev, answer1_s1: answersProp.text }))
        : answersProp.question_id === 2
        ? setAnswers((prev) => ({ ...prev, answer2_s1: answersProp.text }))
        : setAnswers((prev) => ({ ...prev, answer3_s1: answersProp.text }));

      answersProp.question_id === 1
        ? setQuestions((prev) => ({ ...prev, question1_s1: questionText }))
        : answersProp.question_id === 2
        ? setQuestions((prev) => ({ ...prev, question2_s1: questionText }))
        : setQuestions((prev) => ({ ...prev, question3_s1: questionText }));
    } else {
      setQuestions((prev) => ({ ...prev, question1_s2: questionText }))
      setAnswers((prev) => ({ ...prev, answer1_s2: answersProp.text }));
    }
  };
  return (
    <button className="btn btn-primary text-start" onClick={answerClick}>
      {answersProp.text}
    </button>
  );
}

export default Answers;
