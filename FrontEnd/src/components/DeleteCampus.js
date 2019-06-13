import React, { Component } from "react";
import "../CSS/Delete.css";

const DeleteCampus = props => {
  const handleDeleteStudent = () => {
    props.handleDelete(props.student);
  };
  return (
    <div>
      <button
        className="btn btn-outline-danger DeleteContainer"
        onClick={handleDeleteStudent}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteCampus;
