import React, { Component } from "react";
import "../CSS/Delete.css";

const Delete = props => {
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

<<<<<<< HEAD

const Delete = (props) => {

   const handleDeleteStudent = () => {
        props.handleDelete()
    }
    return ( 
        <div>
            <button 
            className="DeleteContainer"
            onClick={handleDeleteStudent}
            >
                Delete
            </button>
        </div>
     );
}
 
export default Delete;
=======
export default Delete;
>>>>>>> student
