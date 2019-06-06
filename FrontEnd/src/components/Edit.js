import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Edit = (props) => {
    return ( 
        <div>
            <Link to="editScreen">
            <button style={{backgroundColor:'white'}}>
                Edit
            </button>
            </Link>
        </div>
     );
}
 
export default Edit;