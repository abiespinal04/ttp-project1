import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../store/actions'

class AddCampusScreen extends Component {
    state = { 
           firstName:'',lastName:''
     }

     disable={
            isDisable:true
     }

    handleAddStudent = () => {

        this.props.AddStudent(this.state)

    }

    // handleDisable = () => {
    //     if(this.state.firstName ==='' && this.state.lastName===''){
    //         return this.disable.isDisable === true
    //     } else {
    //         return this.disable.isDisable === false
    //     }
    // }
    render() { 
        return ( 
            //backgroundColor:'grey',height:800
            <div  style={{marginLeft:10}}  >
                <input style={{marginLeft:10 }} placeholder="First Name" onChange={(event) => this.setState({firstName:event.target.value})}/>
                <input style={{marginLeft:10 }} placeholder="Last Name" onChange={(event) => this.setState({lastName:event.target.value})}/>
                <button 
                style={{marginLeft:10,fontSize:17,backgroundColor:'grey', color:'white'}}
                disabled={(this.state.firstName ==='' || this.state.lastName ==='')? true:false}
                onClick = {this.handleAddStudent}
                >
                 Submit
                </button>
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