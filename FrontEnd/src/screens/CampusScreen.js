import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CampusScreen extends Component {
    state = {  }
    render() { 
        return ( 

            <div>
            <div>
                <p>{this.props.location.campusName.campusName}</p>
                <p>{this.props.location.campusName.studentCount}</p>
                <p>{this.props.location.campusName.description}</p>
            </div>
            <div>
                <Link to='campusListing'>
               <button>GO BACK</button> 
               </Link>
            </div>
            </div>
         );
    }
}
 
export default CampusScreen;