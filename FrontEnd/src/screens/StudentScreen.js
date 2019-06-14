import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class StudentScreen extends Component {
    state = {  }
    render() { 
        return ( 

            <div>
            <div>
                <p>{this.props.location.student.firstName}</p>
                <p>{this.props.location.student.lastName}</p>
                <p>{this.props.location.student.imageURL}</p>
                <p>{this.props.location.student.EMPID}</p>
                <p>{this.props.location.student.description}</p>
            </div>
            <div>
                <Link to='students'>
               <button>GO BACK</button> 
               </Link>
            </div>
            </div>
         );
    }
}
 
export default StudentScreen;