import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../CSS/StudentScreen.css'

class StudentScreen extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="StudentContainer">
            <div className="StudentInfo">
                <h1>{this.props.location.student.firstName}</h1>
                <h4>{this.props.location.student.lastName}</h4>
                <p>{this.props.location.student.imageURL}</p>
                <p>{this.props.location.student.EMPID}</p>
                <p>{this.props.location.student.description}</p>
            </div>
            <div>
                <Link to='students'>
                <button type="button" class="btn btn-dark">GO BACK</button>

               </Link>
            </div>
            </div>
         );
    }
}
 
export default StudentScreen;