import React, { Component } from "react";
import Delete from "./Delete";
import EditStudentBtn from "./EditStudentBtn";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import "../CSS/StudentCard.css";
import EditCampusBtn from "./EditCampusBtn";

class ProfileCard extends Component {
  state = {};

  handleDelete = () => {
    
    console.log("HandleDeleteAction", this.props.index, this.props.campusList.campus);
    // let newList = this.props.studentList.filter( student => student !== this.props.studentName)
    
    //actions
    this.props.DeleteCampus(this.props.index);
    this.props.handleDelete()
  };

  handleEdit = () => {
    console.log("HandleDeleteAction", this.props.index);
    this.props.EditCampus(this.props.index);
  };
  render() {
    return (
      <div id="card">
        <div>
          <h3 style={{ fontFamily: "Futura", marginLeft: 2 }}>School:</h3>
          <h6 style={{ fontFamily: "Papyrus", marginLeft: 2 }}>
            {this.props.campusName.title}
          </h6>
        </div>
        <div>
          <label style={{ fontFamily: "Futura", marginLeft: 2 }}>
          #students
          </label>
          <p style={{ fontFamily: "Papyrus", marginLeft: 2 }}>
            {this.props.campusName.studentCount}
          </p>
        </div>
        <div>
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
)(ProfileCard);