import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../store/actions";
import { ADD_STUDENT, ADD_CAMPUS } from "../store/actions/types";
import "../CSS/AddStudentScreen.css";

class AddCampusScreen extends Component {
  state = {
    campusName: "",
    studentCount: "",
    description: "",
    imageURL: ""
  };

  disable = {
    isDisable: true
  };

  handleCampusStudent = () => {
    this.props.AddSchool(this.state);
  };

  // handleDisable = () => {
  //     if(this.state.title ==='' && this.state.studentCount===''){
  //         return this.disable.isDisable === true
  //     } else {
  //         return this.disable.isDisable === false
  //     }
  // }
  render() {
    return (
      <div className="container">
        <h1>Add Campus</h1>
        <div className="row">
          <div className="col-25">
            <label>Campus Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="campusName"
              name="campusName"
              placeholder="Enter Name..."
              onChange={event =>
                this.setState({ campusName: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Student Count</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="studentCount"
              name="studentCount"
              placeholder="Enter student count..."
              onChange={event =>
                this.setState({ studentCount: event.target.value })
              }
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
          <Link
            lassName="link"
            to="/campusListing"
            style={{ float: "right", width: "99%" }}
          >
            <button
              className="submitButton"
              disabled={
                this.state.title === "" || this.state.studentCount === ""
                  ? true
                  : false
              }
              onClick={this.handleCampusStudent}
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
    AddCampus: state.CampusesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCampus: () => dispatch({ type: ADD_CAMPUS })
  };
};

export default connect(
  mapStateToProps,
  action
)(AddCampusScreen);
