import React, { Component } from "react";
import Delete from "./Delete";
import EditStudentBtn from "./EditStudentBtn";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import "../CSS/StudentCard.css";

class StudentCard extends Component {
  state = {};

  handleDelete = () => {
    console.log("HandleDeleteAction", this.props.index);
    // let newList = this.props.studentList.filter( student => student !== this.props.student)
    this.props.DeleteStudent(this.props.index);
  };

  handleEdit = () => {
    console.log("HandleDeleteAction", this.props.index);
    this.props.EditStudent(this.props.index);
  };
  render() {
    return (
      <div id="card">
        <div className="firstAndLastName">
          <div>
            <h3 style={{ fontFamily: "Futura", marginLeft: 2 }}>First Name</h3>
            <h6 style={{ fontFamily: "Papyrus", marginLeft: 2 }}>
              {this.props.student.firstName}
            </h6>
          </div>
          <div>
            <label style={{ fontFamily: "Futura", marginLeft: 2 }}>
              Last Name
            </label>
            <p style={{ fontFamily: "Papyrus", marginLeft: 2 }}>
              {this.props.student.lastName}
            </p>
          </div>
          <div className="description">
            <p>{this.props.student.description}</p>
          </div>
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
    DeletedStudent: state.DeletedStudent
  };
};

export default connect(
  mapStateToProps,
  actions
)(StudentCard);
