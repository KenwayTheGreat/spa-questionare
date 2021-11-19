import React from "react";
import { Link } from "react-router-dom";

export function QuestionsPage() {
  return (
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-6 d-grid gap-2">
        <Link to="/" className=" btn btn-primary">
          Exit
        </Link>
      </div>
    </div>
  );
}
