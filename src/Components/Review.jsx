import React, { useContext } from "react";
import { SPAContext } from "../Context/SPAContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Review() {
  const { questions, answers } = useContext(SPAContext);
  return (
    <>
      <div className="row p-3">
        <div className="col-12 p-2 text-center">
          <h1>Review of your Answers</h1>
        </div>

        <div className="col-12 p-2 text-center">
          <h2>Section 1</h2>
        </div>

        {questions.question1_s1 !== "" && (
          <>
            <div className="col-12">
              <h3>{questions.question1_s1}</h3>
            </div>

            <div className="col-12 m-2">
              <h3>{answers.answer1_s1}</h3>
            </div>
          </>
        )}

        {questions.question2_s1 !== "" && (
          <>
            <div className="col-12">
              <h3>{questions.question2_s1}</h3>
            </div>

            <div className="col-12 m-2">
              <h3>{answers.answer2_s1}</h3>
            </div>
          </>
        )}

        {questions.question3_s1 !== "" && (
          <>
            <div className="col-12">
              <h3>{questions.question3_s1}</h3>
            </div>

            <div className="col-12 m-2">
              <h3>{answers.answer3_s1}</h3>
            </div>
          </>
        )}

        <div className="col-12 p-2 text-center">
          <h2>Section 2</h2>
        </div>

        {questions.question1_s2 !== "" && (
          <>
            <div className="col-12">
              <h3>{questions.question1_s2}</h3>
            </div>

            <div className="col-12 m-2">
              <h3>{answers.answer1_s2}</h3>
            </div>
          </>
        )}

        {questions.question2_s2 !== "" && (
          <>
            <div className="col-12">
              <h3>{questions.question2_s2}</h3>
            </div>

            <div className="col-12 m-2">
              <h3>{answers.answer2_s2}</h3>
            </div>
          </>
        )}
      </div>

      <div className="col-12 pb-3 d-flex justify-content-center">
        <Link
          to="/final"
          className="btn btn-primary"
          onClick={() => {
            axios
              .post("https://jsonplaceholder.typicode.com/posts/", {
                questions,
                answers,
              })
              .then((res) => console.log(res.data));
          }}
        >
          Submit Answers
        </Link>
      </div>
    </>
  );
}

export default Review;
