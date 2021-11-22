import React, { useContext } from "react";
import { SPAContext } from "../Context/SPAContext";
import { Link } from "react-router-dom";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Review from "../Components/Review";

export function QuestionsPage() {
  const { sectionId } = useContext(SPAContext);
  return (
    <>
      {sectionId === 1 && (
        <div className="row p-5 d-flex justify-content-center">
          <div className="col-6 card">
            <Section1 />
          </div>
        </div>
      )}
      {sectionId === 2 && (
        <div className="row p-5 d-flex justify-content-center">
          <div className="col-6 card">
            <Section2 />
          </div>
        </div>
      )}

      {sectionId === 3 && (
        <div className="row p-5 d-flex justify-content-center">
          <div className="col-6 card">
            <Review />
          </div>
        </div>
      )}

      <div className="row p-1 d-flex justify-content-center">
        <div className="col-6 d-grid gap-2">
          <Link to="/" className=" btn btn-primary">
            Go to main page
          </Link>
        </div>
      </div>
    </>
  );
}
