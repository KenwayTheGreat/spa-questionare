import React, { useContext } from "react";
import { SPAContext } from "../Context/SPAContext";
import Question from "./Question";
import { data } from "../Data/Questions";

function Section1() {
  const { answers, setSectionId } = useContext(SPAContext);
  return (
    <>
      <div className="row p-1 ">
        <div className="col-12 p-3 d-flex justify-content-center">
          <h1>Please answer the questions.</h1>
        </div>
      </div>

      <div className="row p-1 ">
        <div className="col-12 p-3 d-flex justify-content-center">
          <Question question={data.sections[0].questions[0]} />
        </div>
      </div>

      {answers.answer1_s1 === "B2B" && (
        <div className="row p-1 ">
          <div className="col-12 p-3 d-flex justify-content-center">
            <Question question={data.sections[0].questions[1]} />
          </div>
        </div>
      )}

      {answers.answer1_s1 === "B2C" && (
        <div className="row p-1 ">
          <div className="col-12 p-3 d-flex justify-content-center">
            <Question question={data.sections[0].questions[2]} />
          </div>
        </div>
      )}

      {answers.answer1_s1 === "Both" && (
        <>
          <div className="row p-1 ">
            <div className="col-12 p-3 d-flex justify-content-center">
              <Question question={data.sections[0].questions[1]} />
            </div>
          </div>

          <div className="row p-1 ">
            <div className="col-12 p-3 d-flex justify-content-center">
              <Question question={data.sections[0].questions[2]} />
            </div>
          </div>
        </>
      )}

      {answers.answer1_s1 !== "" &&
        answers.answer2_s1 !== "" &&
        answers.answer3_s1 !== "" && (
          <div className="row p-2 ">
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSectionId(2);
                }}
              >
                Next{" "}
              </button>
            </div>
          </div>
        )}

      {answers.answer1_s1 === "B2B" &&
        answers.answer2_s1 !== "" &&
        answers.answer3_s1 === "" && (
          <div className="row p-2 ">
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSectionId(2);
                }}
              >
                Next{" "}
              </button>
            </div>
          </div>
        )}

      {answers.answer2_s1 !== "B2C" &&
        answers.answer3_s1 !== "" &&
        answers.answer2_s1 === "" && (
          <div className="row pb-5 ">
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSectionId(2);
                }}
              >
                Next{" "}
              </button>
            </div>
          </div>
        )}
    </>
  );
}

export default Section1;
