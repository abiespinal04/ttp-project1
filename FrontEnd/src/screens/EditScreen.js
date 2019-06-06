import React, { Component } from 'react';
import Axios from 'axios'



class EditScreen extends Component {
    state = { 
        name:'',
        location:'',
        imageURL:'',
        description:''
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
                <input placeholder='Campus Name' onChange={(event)=> this.setState({name:event.target.value})}/>
                <input placeholder='Location' onChange={(event)=> this.setState({location:event.target.value})}/>
                <input placeholder='ImageURL' onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                <textarea placeholder='Description' onChange={(event)=> this.setState({description:event.target.value})}/>
                <button style={{backgroundColor:'green'}}>Save Changes</button>
            </div>
         );
    }
}
 
export default EditScreen; 