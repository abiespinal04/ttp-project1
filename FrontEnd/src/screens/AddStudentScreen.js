import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import * as actions from "../store/actions";
import { ADD_STUDENT, ADD_CAMPUS } from "../store/actions/types";
import "../CSS/AddStudentScreen.css";

class AddStudentScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    EMPID: "",
    imageURL: "",
    description: ""
  };

  disable = {
    isDisable: true
  };

  handleAddStudent = () => {
    this.props.AddStudent(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Add Student Information</h1>
        <div className="row">
          <div className="col-25">
            <label>First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your
          name..."
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last
          name..."
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>EMPID</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="EMPID"
              placeholder="Your EMPID..."
              onChange={event => this.setState({ EMPID: event.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Image URL</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="imgurl"
              placeholder="Provide URL to your image..."
              onChange={event =>
                this.setState({ imageURL: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>About</label>
          </div>
          <div className="col-75">
            <textarea
              id="About"
              name="About"
              placeholder="Write something about yourself.."
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <Link
            className="link"
            to={{
              pathname: "/students",
              studentList: this.props.studentList.student
            }}
          >
            <button
              className="submitButton"
              disabled={
                this.state.firstName === "" ||
                this.state.lastName === "" ||
                this.state.EMPID.length < 8
                  ? true
                  : false
              }
              onClick={this.handleAddStudent}
            >
              Submit
            </button>
          </Link>
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
)(AddStudentScreen);
