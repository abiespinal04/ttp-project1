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

  async componentDidMount() {
    console.log("Inside componentDidMount", this.props.StudentsList);
    const { data } = await Axios.get('http://localhost:3000/students')
    this.props.LoadStudents(data)
    if (this.state.studentList !== this.props.StudentsList || this.state.studentList !== this.props.location.studentList) {
      this.setState({ studentList: this.props.StudentsList.student });
    }

    // if (this.state.studentList !== this.props.location.studentList) {
    //   this.setState({ studentList: this.props.location.studentList });
    // }

  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate")
    return (
      nextProps.StudentsList.student !==
      this.state.studentList
    );
  }

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
          <StudentCard  index={index} student={student} />
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
              <AddStudentButton  />
            </div>
          </div>
          <div>{this.handleStudentList()}</div>

        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    StudentsList: state.StudentsList,

  };
};

export default connect(
  mapStateToProps,
  actions
)(Student);
