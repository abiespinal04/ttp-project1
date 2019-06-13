import React, { Component } from "react";
import StudentCard from "../components/StudentCard";
import AddStudentButton from "../components/AddStudentButton";
import * as actions from "../store/actions";
import "../CSS/Students.css";
import { connect } from "react-redux";
import Axios from "axios";

class Student extends Component {
  state = {
    studentList: []
  };

  // async componentDidMount(){
  //     const {data} = await Axios.get()
  //     this.setState({studentList:data});
  //  }

  async componentDidMount() {
    console.log("Inside componentDidMount", this.props.StudentsList);
    const {data} = await Axios.get('http://localhost:3000/students')
    this.props.LoadStudents(data)
    this.setState({ studentList: this.props.StudentsList.student });
  }

  handleNewList = newList => {
    this.setState({ studentList: newList });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate")
    return (
      nextProps.StudentsList.student !== 
       this.state.studentList
     );
  }

  // handleAddStudent = () => {
  //   console.log("Inside handleAddStudent")
  //   this.setState({studentList: this.props.StudentsList.users})
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.studentList !== this.props.StudentsList.student) {
      console.log("INSIDE COMPONENT DID UPDATE", this.props.StudentsList.student)
      this.setState({ studentList: this.props.StudentsList.student });
    }
  }
  handleStudentList = () => {
    if (this.state.studentList == 0) {
      return <p>No Students in the database</p>;
    } else {
      return this.state.studentList.map((student, index) => (
        <div>
          <StudentCard  handleAddStudent={this.handleAddStudent} index={index} student={student} />
        </div>
      ));
    }
  };


  render() {
    return (
      <React.Fragment>
        <div id="studentBody">
          <div id="titlePlusAddStudent">
            <div>
              <h1>Students</h1>
            </div>
            <div id="addButton">
              <AddStudentButton handleAddStudent={this.handleAddStudent}/>
            </div>
          </div>
          <div>{this.handleStudentList()}</div>
          {/* <button onClick ={this.handleState}> updateState</button> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    StudentsList: state.StudentsList,
    DeletedStudList: state.DeletedStudent
  };
};

export default connect(
  mapStateToProps,
  actions
)(Student);
