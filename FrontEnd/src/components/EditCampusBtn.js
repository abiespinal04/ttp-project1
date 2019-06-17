import React, { Component } from "react";
import { Link } from "react-router-dom";

const EditCampusBtn = props => {
  return (
    <div>
      <Link
        to={{
          pathname: "/editCampusScreen",
          campusName: props.campusName
        }}
      >
        <button
          className="btn btn-outline-warning"
          // onClick={handleEditStudent}
        >
          Edit
        </button>
      </Link>
    </div>
  );
};

export default EditCampusBtn;
