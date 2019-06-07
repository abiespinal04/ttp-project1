import React, { Component } from 'react';
import '../CSS/AddCampus.css'
import {Link} from 'react-router-dom'


const AddStudentButton = (props) => {
    return ( 
        <div>
            <Link to="/addStudent">
            <button className="AddCampusButton">
                +Student
                </button>
                </Link>
        </div>
     );
}
 
export default AddStudentButton;