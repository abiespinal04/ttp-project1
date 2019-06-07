import React, { Component } from 'react';
import StudentCard from '../components/StudentCard';
import AddStudentButton from '../components/AddStudentButton'
import * as actions from '../store/actions'
import {connect} from 'react-redux'
import Axios from 'axios'


class Student extends Component {
    state = { 
        studentList :[ 

        ]
     }

    // async componentDidMount(){
    //     const {data} = await Axios.get()
    //     this.setState({studentList:data});
    //  }

     componentDidMount(){
        console.log(this.props.StudentsList)
        this.setState({studentList:this.props.StudentsList.users})
     }

     handleNewList = (newList) => {
         this.setState({studentList:newList})
     }
     componentDidUpdate(prevProps) {
         console.log("InsideComponentDidUpdate",prevProps)
         if(prevProps.DeleteStudent !== this.props.DeleteStudent){
            this.handleNewList(this.props.DeletedStudList.users)
         }
     }

    handleStudentList = () => {
        
        if(this.state.studentList.length === 0){
            return <p>No Students in the database</p>
        }else{
        return(
                this.state.studentList.map( student =>  
                    <div style={{
                     margin:20,
                     borderStyle:'solid', 
                     borderBottomWidth:3,
                     borderColor:'black'}}
                     >
                         <StudentCard 
                         studentList = {this.state.studentList}
                         studentName={student}
                         />
                    </div>
                )
        )
        }
    }

    handleState = () => {
        console.log("Inside HANDLESTATE",this.props.DeletedStudList.users)
        this.setState({studentList:this.props.DeletedStudList.users})
    }
    render() { 
        return ( 
            <React.Fragment>
            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
             <div style={{display:'flex', marginTop:10, marginLeft:60,marginRight:'71%',}}>
        <h1 style={{fontFamily:'Impact'}}>
          Students
        </h1>
        </div>
        <div style={{marginTop:10}}>
            <AddStudentButton/>
            </div>
    </div>
    <div>
    {this.handleStudentList()} 
    </div>
    <button onClick ={this.handleState}> updateState</button>
    </React.Fragment>
     );
    }
}

const mapStateToProps = (state) => {

    return{
        StudentsList : state.StudentsList,
        DeletedStudList: state.DeletedStudent
    }
}
 
export default connect(mapStateToProps,actions)(Student); 