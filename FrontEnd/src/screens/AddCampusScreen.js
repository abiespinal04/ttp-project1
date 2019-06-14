import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as action from '../store/actions'
import { ADD_STUDENT, ADD_CAMPUS } from '../store/actions/types';

class AddCampusScreen extends Component {
    state = { 
           campusName:'',studentCount:'', description:'',imageURL:''
     }

     disable={
            isDisable:true
     }

    handleCampusStudent = () => {

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
                <input style={{marginLeft:10 }} placeholder="school name" onChange={(event) => this.setState({campusName:event.target.value})}/>
                <input input type="text" pattern="[0-9]*"  style={{marginLeft:10 }} placeholder="#students" onChange={(event) => this.setState({studentCount:event.target.value.replace(/\D/,'')})}/>
                <input style={{marginLeft:10 }} placeholder="description" onChange={(event) => this.setState({description:event.target.value})}/>
                <input style={{marginLeft:10 }} placeholder="imageURL" onChange={(event) => this.setState({imageURL:event.target.value})}/>
                <Link to="/campusListing">
                <button 
                style={{marginLeft:10,fontSize:17,backgroundColor:'grey', color:'white'}}
                disabled={(this.state.title ==='' || this.state.studentCount ==='')? true:false}
                onClick = {this.handleCampusStudent}
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

const mapDispatchToProps = (dispatch) => {

    return {
        addCampus : () => dispatch({type:ADD_CAMPUS})
    }

}


export default connect(mapStateToProps,action)(AddCampusScreen);