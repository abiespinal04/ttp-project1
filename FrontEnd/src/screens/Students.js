import React, { Component } from 'react';
import StudentCard from '../components/StudentCard';
import Axios from 'axios'


class Student extends Component {
    state = { 
        studentList :[/*{firstName:'Abi', lastName:'espinal'}*/]
     }

    // async componentDidMount(){
    //     const {data} = await Axios.get()
    //     this.setState({studentList:data});
    //  }

    handleStudentList = () => {
        
        if(this.state.studentList.length === 0){
            return <p>No Students in the database</p>
        }else{
        return(
            this.state.studentList.map(student =>  <StudentCard studentName ={student}/>)
        )
        }
    }
    render() { 
        return ( 
            <div>
        <h1>
          Students
        </h1>

        {this.handleStudentList()}
    </div> );
         
    }
}
 
export default Student; 