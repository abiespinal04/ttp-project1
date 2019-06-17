import React, { Component } from "react";
import Delete from "./Delete";
import EditStudentBtn from "./EditStudentBtn";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import EditCampusBtn from "./EditCampusBtn";
import "../CSS/CampusCard.css";
import { Link } from "react-router-dom";

class CampusCard extends Component {
  state = {};

  handleDelete = () => {
    console.log(
      "HandleDeleteAction",
      this.props.index,
      this.props.campusList.campus
    );
    // let newList = this.props.studentList.filter( student => student !== this.props.studentName)

    //actions
    this.props.DeleteCampus(this.props.campusName);
    this.props.handleDelete();
  };

  handleImageURL = () => {
    if (!this.props.campusName.imageURL) {
      return "https://www.w3schools.com/images/picture.jpg";
    } else {
      return this.props.campusName.imageURL;
    }
  };

  render() {
    return (
      <div id="card">
        <div className="campusPic">
          <Link
            to={{
              pathname: "/campusScreen",
              campusName: this.props.campusName
            }}
          >
            <img
              style={{ maxHeight: 250, maxWidth: 200 }}
              src={this.handleImageURL()}
              alt="Mountain"
            />
          </Link>
        </div>
        <div className="schoolNameAndCount">
          <div>
            <h6 style={{ fontFamily: "Futura", marginLeft: 20 }}>School:</h6>
            <h3 style={{ fontFamily: "Papyrus", marginLeft: 20 }}>
              {this.props.campusName.campusName}
            </h3>
          </div>
          <div>
            <h6 style={{ fontFamily: "Futura", marginLeft: 20 }}>#Students:</h6>
            <h3 style={{ fontFamily: "Papyrus", marginLeft: 20 }}>
              {this.props.campusName.studentCount}{" "}
            </h3>
          </div>
        </div>
        <div className="buttons">
          <Delete handleDelete={this.handleDelete} />
          <EditCampusBtn
            index={this.props.index}
            campusName={this.props.campusName}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campusList: state.CampusesList
  };
};

export default connect(
  mapStateToProps,
  actions
)(CampusCard);
