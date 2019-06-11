import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as action from '../store/actions'

class AddCampusScreen extends Component {
    state = { 
           campusName:'',campusStudents:''
     }

     disable={
            isDisable:true
     }

    handleAddStudent = () => {

        this.props.AddStudent(this.state)

    }

    // handleDisable = () => {
    //     if(this.state.campusName ==='' && this.state.campusStudents===''){
    //         return this.disable.isDisable === true
    //     } else {
    //         return this.disable.isDisable === false
    //     }
    // }
    render() { 
        return ( 
            //backgroundColor:'grey',height:800
            <div  style={{marginLeft:10}}  >
                <input style={{marginLeft:10 }} placeholder="First Name" onChange={(event) => this.setState({campusName:event.target.value})}/>
                <input style={{marginLeft:10 }} placeholder="Last Name" onChange={(event) => this.setState({campusStudents:event.target.value})}/>
                <Link to="/students">
                <button 
                style={{marginLeft:10,fontSize:17,backgroundColor:'grey', color:'white'}}
                disabled={(this.state.campusName ==='' || this.state.campusStudents ==='')? true:false}
                onClick = {this.handleAddStudent}
                >
                 Submit
                </button>
                </Link>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    
    return{
        AddStudent: state.StudentsList
    }
}


export default connect(mapStateToProps,action)(AddCampusScreen);