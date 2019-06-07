import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Edit = (props) => {


    return ( 
        <div>
            <Link to="editScreen">
            <button 
            style={{backgroundColor:'white',margin:5}}
            >
                Edit
            </button>
            </Link>
        </div>
     );
}
 
export default Edit;