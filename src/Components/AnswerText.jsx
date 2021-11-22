import React, { useState, useContext } from "react";
import { SPAContext } from "../Context/SPAContext";

function AnswerText({ answersProp, questionText }) {
  const { answers, setQuestions, setAnswers } = useContext(SPAContext);
  const [isNumber, setIsNumber] = useState(false);

  const isPositiveInteger = (s) => {
    return /^\+?[1-9][\d]*$/.test(s);
  };

  return (
    <div className="row p-2 d-flex justify-content">
      <div className="col-12 py-1">
        <h3>{answersProp.text}</h3>
      </div>
      {!isNumber && (
        <div className="col-12 py-1">
          <h4 className="text-danger">Please enter a positive number</h4>
        </div>
      )}

      <div className="col-12 py-1">
        <textarea
          disabled={
            answers.answer1_s2 === "No" || answers.answer1_s2 === ""
              ? true
              : false
          }
          className="form-control"
          rows="1"
          onChange={(event) => {
            if (isPositiveInteger(event.target.value)) {
              setAnswers((prev) => ({
                ...prev,
                answer2_s2: event.target.value,
              }));

              setQuestions((prev) => ({
                ...prev,
                question2_s2: questionText,
              }));
            } else {
              setIsNumber(false);
            }
          }}
        />
      </div>
    </div>
  );
}

export default AnswerText;
