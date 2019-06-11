import React, { Component } from 'react';
import '../CSS/Delete.css'



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