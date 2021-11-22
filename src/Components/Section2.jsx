import React, { useContext } from "react";
import { SPAContext } from "../Context/SPAContext";
import Question from "./Question";
import { data } from "../Data/Questions";

function Section2() {
  const { setSectionId, answers } = useContext(SPAContext);
  return (
    <>
      <div className="row p-3 ">
        <div className="col-12 p-3 d-flex justify-content-center">
          <Question question={data.sections[1].questions[0]} />
        </div>
      </div>

      <div className="row p-3 ">
        <div className="col-12 p-3 d-flex justify-content-center">
          <Question question={data.sections[1].questions[1]} />
        </div>
      </div>

      {answers.answer1_s2 === "Yes" && answers.answer2_s2 !== "" && (
        <div className="row pb-5 ">
          <div className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                setSectionId(3);
              }}
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}

      {answers.answer1_s2 === "No" && (
        <div className="row pb-5 ">
          <div className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                setSectionId(3);
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

export default Section2;
