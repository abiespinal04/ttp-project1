import React, { Component } from 'react';
import '../CSS/AddCampus.css'
import {Link} from 'react-router-dom'


const AddCampusButton = (props) => {
    return ( 
        <div>
            <Link 
            to={{
              pathname: "/addCampuses",
              handleRefresh: props.handleRefresh
            }}
            >
        <button className="btn btn-outline-success">Add Campus</button>
      </Link>
        </div>
     );
}
 
export default AddCampusButton;