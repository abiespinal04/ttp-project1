import React, { Component } from 'react';
import Axios from 'axios'



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

    handleEditSubmit = async () =>{
        // let editCampus = {...this.state}
        // const {data} = await Axios.post()

    }

    render() { 
        return ( 
            <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
                <input placeholder='first name' onChange={(event)=> this.setState({firstName:event.target.value})}/>
                <input placeholder='last name' onChange={(event)=> this.setState({lastName:event.target.value})}/>
                {/* <input placeholder='ImageURL' onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                <textarea placeholder='Description' onChange={(event)=> this.setState({description:event.target.value})}/> */}
                <button style={{backgroundColor:'green'}}>Save Changes</button>
            </div>
         );
    }
}
 
export default EditStudentScreen; 