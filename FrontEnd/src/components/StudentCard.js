import React, { Component } from "react";
import Delete from "./Delete";
import EditStudentBtn from "./EditStudentBtn";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import "../CSS/StudentCard.css";
import { Link } from "react-router-dom";

class StudentCard extends Component {
  state = {};

  handleDelete = () => {
    console.log("HandleDeleteAction", this.props.student.id);
    // let newList = this.props.studentList.filter( student => student !== this.props.student)
    this.props.DeleteStudent(this.props.student);
  };

  handleEdit = () => {
    console.log("HandleDeleteAction", this.props.index);
    this.props.EditStudent(this.props.student);
  };

  handleImageURL = () => {
    if (!this.props.student.imageURL) {
      return "https://www.w3schools.com/images/picture.jpg";
    } else {
      return this.props.student.imageURL;
    }
  };

  render() {
    return (
      <div id="card">
        <div className="studentPic">
          <Link
            to={{
              pathname: "/studentScreen",
              student: this.props.student
            }}
          >
            <img
              style={{ maxHeight: 250, maxWidth: 200 }}
              src={this.handleImageURL()}
              alt="Mountain"
            />
          </Link>
        </div>
        <div className="firstAndLastName">
          <div>
            <h4>First Name</h4>
            <h6>{this.props.student.firstName}</h6>
          </div>
          <div>
            <h4>Last Name</h4>
            <p>{this.props.student.lastName}</p>
          </div>
          <div>
            <h4>EMPID</h4>
            <p>{this.props.student.EMPID}</p>
          </div>
        </div>
        <div className="description">
          <p>{this.props.student.description}</p>
        </div>
        <div className="buttons">
          <Delete handleDelete={this.handleDelete} />
          <EditStudentBtn
            index={this.props.index}
            student={this.props.student}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentList: state.StudentsList
  };
};

export default connect(
  mapStateToProps,
  actions
)(StudentCard);
