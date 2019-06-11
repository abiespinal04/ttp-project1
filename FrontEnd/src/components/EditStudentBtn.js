import React, { Component } from "react";
import { Link } from "react-router-dom";

const EditStudentBtn = props => {
  const handleEditStudent = () => {
    props.handleEdit();
  };
  return (
    <div>
      <Link
        to={{
          pathname: "/editStudentScreen",
          state: props.studentName,
          index: props.index
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

export default EditStudentBtn;
