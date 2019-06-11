import React, { Component } from 'react';
import {Link} from 'react-router-dom'


const EditStudentBtn = (props) => {

    const handleEditStudent = () => {
        props.handleEdit()
     }
    return ( 
        
    <div>


        <Link to={{
    pathname: '/editCampusScreen',
    state: props.campusName,
    index: props.index
    }}>
        <button style={{backgroundColor:'white',margin:5}}
        // onClick={handleEditStudent}
        >
            Edit
        </button>
        </Link>
    </div>

     );
}
 
export default EditStudentBtn;