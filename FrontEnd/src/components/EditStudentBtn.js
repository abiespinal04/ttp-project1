import React, { Component } from 'react';
import {Link} from 'react-router-dom'


const EditStudentBtn = (props) => {
    return ( 
    <div>
        <Link to="editStudentScreen">
        <button style={{backgroundColor:'white',margin:5}}>
            Edit
        </button>
        </Link>
    </div>

     );
}
 
export default EditStudentBtn;