import React, { Component } from 'react';
import '../CSS/AddCampus.css'
import {Link} from 'react-router-dom'


const AddCampusButton = (props) => {
    return ( 
        <div>
            <Link to="/addCompus">
            <button className="AddCampusButton">
                AddCampus
                </button>
                </Link>
        </div>
     );
}
 
export default AddCampusButton;