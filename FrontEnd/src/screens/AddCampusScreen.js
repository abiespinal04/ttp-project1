import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as action from '../store/actions'

class AddCampusScreen extends Component {
    state = { 
           title:'',studentCount:''
     }

     disable={
            isDisable:true
     }

    handleAddStudent = () => {

        this.props.AddSchool(this.state)

    }

    // handleDisable = () => {
    //     if(this.state.title ==='' && this.state.studentCount===''){
    //         return this.disable.isDisable === true
    //     } else {
    //         return this.disable.isDisable === false
    //     }
    // }
    render() { 
        return ( 
            //backgroundColor:'grey',height:800
            <div  style={{marginLeft:10}}  >
                <input style={{marginLeft:10 }} placeholder="School name" onChange={(event) => this.setState({title:event.target.value})}/>
                <input input type="text" pattern="[0-9]*"  style={{marginLeft:10 }} placeholder="#Students" onChange={(event) => this.setState({studentCount:event.target.value.replace(/\D/,'')})}/>
                <Link to="/campusListing">
                <button 
                style={{marginLeft:10,fontSize:17,backgroundColor:'grey', color:'white'}}
                disabled={(this.state.title ==='' || this.state.studentCount ==='')? true:false}
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
        AddCampus: state.CampusesList
    }
}


export default connect(mapStateToProps,action)(AddCampusScreen);