import React, { Component } from 'react';
import Axios from 'axios'
import {connect} from 'react-redux';
import * as actions from '../store/actions'



class EditStudentScreen extends Component {
    state = { 
        firstName:'',
        lastName:'',
        // imageURL:'',
        // description:''
     }

    handleEdit = () => {
        this.props.handleEdit()
    }

    handleEditSubmit = () =>{
        this.props.location.state.firstName = this.state.firstName
        this.props.location.state.lastName = this.state.lastName
       this.props.EditStudent(this.props.location.index,this.props.location.state)

    }

    render() { 
        // console.log("State coming from screen",this.props.location.state)
        return ( 
            
            <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
                <input placeholder='first name' onChange={(event)=> this.setState({firstName:event.target.value})}/>
                <input placeholder='last name' onChange={(event)=> this.setState({lastName:event.target.value})}/>
                {/* <input placeholder='ImageURL' onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                <textarea placeholder='Description' onChange={(event)=> this.setState({description:event.target.value})}/> */}
                <button 
                style={{backgroundColor:'green'}}
                onClick={this.handleEditSubmit}
                >Save Changes</button>
            </div>
         );
    }
}
 
// const mapStateToProps = (state) => {
//     return{
        
//     }
// }

export default connect(null, actions)(EditStudentScreen); 