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
          student: props.student,
        }}
      >
        <button
          className="btn btn-outline-warning"
        >
          Edit
        </button>
      </Link>
    </div>
  );
};

export default EditStudentBtn;
