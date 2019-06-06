import React, { Component } from 'react';
import StudentCard from '../components/StudentCard';
import AddStudentButton from '../components/AddStudentButton'
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
    </React.Fragment>
     );
    }
}
 
export default Student; 