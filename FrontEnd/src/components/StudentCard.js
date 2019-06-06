import React, { Component } from 'react';



class StudentCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h6>{this.props.studentName.firstName}</h6>
                <p>{this.props.studentName.lastName}</p>
            </div>

         );
    }
}
 
export default StudentCard;