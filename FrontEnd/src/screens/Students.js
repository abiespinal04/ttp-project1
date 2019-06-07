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
        console.log("Inside componentDidMount",this.props.StudentsList)
        this.setState({studentList:this.props.StudentsList.users})
     }

     handleNewList = (newList) => {
         this.setState({studentList:newList})
     }

    
    
     shouldComponentUpdate(nextProps, nextState) {
        return this.state.studentList != nextProps.DeletedStudList.users && nextState.studentList
      }

      componentDidUpdate(prevProps,prevState) {
        console.log("New StudentList", this.props.StudentsList)
        // if(prevProps.DeletedStudList.users !== this.props.DeletedStudList.users){
        //    this.handleNewList(this.props.DeletedStudList.users)
        // }
        // if(prevProps.DeletedStudList.users !== this.props.DeletedStudList.users){
        //     this.handleNewList(this.props.DeletedStudList.users)
        //  }

           if(prevProps.StudentsList.users !== this.props.StudentsList.users){
             
            this.setState({studentList:this.props.StudentsList})
           
        }
    }
    handleStudentList = () => {
        
        if(this.state.studentList.length === 0){
            return <p>No Students in the database</p>
        }else{
        return(
                this.state.studentList.map( (student,index) =>  
                    <div style={{
                     margin:20,
                     borderStyle:'solid', 
                     borderBottomWidth:3,
                     borderColor:'black'}}
                     >
                         <StudentCard 
                            index={index}
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
    {/* <button onClick ={this.handleState}> updateState</button> */}
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