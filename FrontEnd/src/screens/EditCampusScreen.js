import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Axios from "axios";

class EditHomeScreen extends Component {
  state = {
    campusName: "",
    studentCount: "",
    description: "",
    ImageURL: ""
  };

  componentDidMount() {
    this.setState(this.props.location.campusName);
  }

  handleEditSubmit = () => {
    this.props.EditCampus(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Edit Campus Information</h1>
        <div className="row">
          <div className="col-25">
            <label>Campus Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="campusName"
              name="campusName"
              defaultValue={this.props.location.campusName.campusName}
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
              defaultValue={this.props.location.campusName.studentCount}
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
              defaultValue={this.props.location.campusName.imageURL}
              onChange={event =>
                this.setState({ imageURL: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <Link
            className="link"
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

export default connect(
  null,
  actions
)(EditHomeScreen);
