import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Axios from 'axios'
import * as actions from '../store/actions'
import { ADD_STUDENT, ADD_CAMPUS } from '../store/actions/types';

class AddStudentScreen extends Component {
    state = { 
           firstName:'',lastName:'',
        //    description:''
     }

     disable={
            isDisable:true
     }

    handleAddStudent = () => {
        this.props.AddStudent(this.state)
        // this.props.location.handleAddStudent()
    }

    render() { 
        return ( 
            //backgroundColor:'grey',height:800
            <div  style={{marginLeft:'30%', marginTop:10, }}  >
                <div style={{marginLeft:70}}>
                <input style={{marginLeft:10 }} placeholder="First Name" onChange={(event) => this.setState({firstName:event.target.value})}/>
                <input style={{marginLeft:10 }} placeholder="Last Name" onChange={(event) => this.setState({lastName:event.target.value})}/>
                </div>
                {/* <div style={{marginLeft:10, paddingTop:20 }} >
                <textarea 
                 style={{width:500, height:200}} placeholder="discription" onChange={(event) => this.setState({description:event.target.value})}/>
                </div> */}
    
                <div style={{marginLeft:'25%'}}>
                <Link
                 to={{
                    pathname: "/students",
                    studentList: this.props.studentList.student,
                  }}
                >
                <button 
                style={{fontSize:17,backgroundColor:'grey', color:'white'}}
                disabled={(this.state.firstName ==='' || this.state.lastName ==='')? true:false}
                onClick = {this.handleAddStudent}
                >
                 Submit
                </button>
                </Link>
                </div>
               
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    
    return{
        studentList: state.StudentsList
    }
}


export default connect(mapStateToProps,actions)(AddStudentScreen);