import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions";
import "../CSS/StudentCard.css"; //using the same styling as studentCard

class EditStudentScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    EMPID: "",
    ImageURL: "",
    description: ""
  };
  componentDidMount() {
    this.setState(this.props.location.student);
  }

  handleEditSubmit = () => {
    this.props.EditStudent(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Edit Student Information</h1>
        <div className="row">
          <div className="col-25">
            <label>First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              defaultValue={this.props.location.student.firstName}
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
              defaultValue={this.props.location.student.lastName}
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
              defaultValue={this.props.location.student.EMPID}
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
              defaultValue={this.props.location.student.imageURL}
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
              defaultValue={this.props.location.student.description}
              style={{ height: "100px" }}
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
              onClick={this.handleEditSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return{

//     }
// }

const mapStateToProps = state => {
  return {
    studentList: state.StudentsList
  };
};

export default connect(
  mapStateToProps,
  actions
)(EditStudentScreen);
