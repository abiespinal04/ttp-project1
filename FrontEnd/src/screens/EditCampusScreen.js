import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import Axios from 'axios'



class EditHomeScreen extends Component {
    state = { 
        title:'',
        studentCount:'',
        // imageURL:'',
        // description:''
     }

    handleEdit = () => {
        this.props.handleEdit()
    
    }

    handleEditSubmit =  () =>{
        this.props.location.state.title = this.state.title
        this.props.location.state.studentCount = this.state.studentCount
       this.props.EditCampus(this.props.location.index,this.props.location.state)


    }

    render() { 
        return ( 
            <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
                <input placeholder='Campus Name' onChange={(event)=> this.setState({title:event.target.value})}/>
                <input placeholder='students count' onChange={(event)=> this.setState({studentCount:event.target.value})}/>
                {/* <input placeholder='ImageURL' onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                <textarea placeholder='Description' onChange={(event)=> this.setState({description:event.target.value})}/> */}
                <Link to="campusListing">
                <button 
                style={{backgroundColor:'green'}}
                onClick={this.handleEditSubmit}
                >Save Changes</button>
                </Link>
            </div>
         );
    }
}
 
export default connect(null, actions)(EditHomeScreen); 
