import React, { Component } from 'react';
import Delete from './Delete';
import EditStudentBtn from './EditStudentBtn'
import {connect} from 'react-redux';
import * as actions from '../store/actions'



class StudentCard extends Component {
    state = {  }

    handleDelete = () => {
        console.log("HandleDeleteAction",this.props.index)
    // let newList = this.props.studentList.filter( student => student !== this.props.studentName)
        this.props.DeleteStudent(this.props.index);
    }
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
                    <Delete 
                    handleDelete={this.handleDelete}/>
                    <EditStudentBtn/>
                </div>
            </div>

         );
    }
}
 
const mapStateToProps = (state) => {

    return{
        DeletedStudent :state.DeletedStudent
    }

}

export default connect(mapStateToProps,actions)(StudentCard);