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
    // this.props.location.handleAddStudent()
  };

  render() {
    return (
      //backgroundColor:'grey',height:800
      <div class="container">
        <div class="row">
          <div class="col-25">
            <label for="fname">First Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your
          name.."
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last
          name.."
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="fname">EMPID</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your
          name.."
              onChange={event => this.setState({ EMPID: event.target.value })}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="fname">Image URL</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your
          name.."
              onChange={event => this.setState({ EMPID: event.target.value })}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Subject</label>
          </div>
          <div class="col-75">
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </div>
        </div>
        <div class="row">
          <Link
            to={{
              pathname: "/students",
              studentList: this.props.studentList.student
            }}
          >
            <button
              style={{ fontSize: 17, backgroundColor: "grey", color: "white" }}
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
