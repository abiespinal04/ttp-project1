import React, { Component } from 'react';
import Delete from './Delete';
import EditStudentBtn from './EditStudentBtn'



class StudentCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div >
                <h3 style={{fontFamily:'Futura',marginLeft:2}}>First Name</h3>
                <h6 style={{fontFamily:'Papyrus',marginLeft:2}}>{this.props.studentName.firstName}</h6>
                </div>
                <div>
                <label style={{fontFamily:'Futura',marginLeft:2}}>Last Name</label>
                <p style={{fontFamily:'Papyrus',marginLeft:2}}>{this.props.studentName.lastName}</p>
                </div>
                <div>
                    <Delete/>
                    <EditStudentBtn/>
                </div>
            </div>

         );
    }
}
 
export default StudentCard;