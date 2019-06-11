import React, { Component } from "react";
import { Link } from "react-router-dom";

const AddStudentButton = props => {
  return (
    <div>
      <Link to="/addStudent">
        <button className="btn btn-outline-success">Add Student</button>
      </Link>
    </div>
  );
};

export default AddStudentButton;
