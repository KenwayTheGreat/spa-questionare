import React from "react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      <div className="row p-5 d-flex justify-content-center">
        <div className="col-5 text-center">
          <h1> Welcome to XPovi SPA, Get your business plan on click</h1>
        </div>
      </div>

      <div className="row p-2 d-flex justify-content-center">
        <div className="col-5 text-center">
          <Link to="/questions" className=" btn btn-primary">
            Generate Business Plan
          </Link>
        </div>
      </div>
    </>
  );
}
