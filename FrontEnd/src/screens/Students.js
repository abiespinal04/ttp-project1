import React, { Component } from 'react';
import StudentCard from '../components/StudentCard';
import AddStudentButton from '../components/AddStudentButton'
import Axios from 'axios'


class Student extends Component {
    state = { 
        studentList :[ 
        {firstName:'JOHN', lastName:'SNOW'},
        {firstName:'JOHN', lastName:'WICK'},
        {firstName:'BATMAN', lastName:'KNIGHT-WATCHER'},
        {firstName:'GOKU', lastName:'Z-FIGHTER'},
        {firstName:'VEGETA', lastName:'Z-FIGHTER'},
        {firstName:'GOHAN', lastName:'Z-FIGHTER'},
        {firstName:'KRILLIN', lastName:'Z-FIGHTER'},
        {firstName:'NARUTO', lastName:'UZUMAKI'},
        {firstName:'SASUKE', lastName:'UCHIHA'},
        {firstName:'ITACHI', lastName:'UCHIHA'},
        {firstName:'CHOJI', lastName:'AKIMICHI'},
        {firstName:'JIRAIYA', lastName:'SENSEI'},]
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
                this.state.studentList.map( student =>  
                    <div style={{
                     margin:20,
                     borderStyle:'solid', 
                     borderBottomWidth:3,
                     borderColor:'black'}}
                     >
                         <StudentCard 
                         studentName={student}
                         />
                    </div>
                )
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