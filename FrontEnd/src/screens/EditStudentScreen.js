import React, { Component } from 'react';
import Axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../store/actions'



class EditStudentScreen extends Component {
    state = {
        firstName: '',
        lastName:'',
        EMPID: ''
    }
    componentDidMount() {
        this.setState(this.props.location.student)
    }

    handleEditSubmit = () => {
        this.props.EditStudent(this.state)

    }

    render() {

        return (

            <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <input placeholder='first name' onChange={(event) => this.setState({ firstName: event.target.value })} />
                <input placeholder='last name' onChange={(event) => this.setState({ lastName: event.target.value })} />
                <input 
                maxLength={8}
                placeholder='EMPID' onChange={(event) => this.setState({ EMPID: event.target.value })} />
                <textarea placeholder='description' onChange={(event) => this.setState({ description: event.target.value })} />
                {/* <input placeholder='last name' onChange={(event) => this.setState({ lastName: event.target.value })} /> */}
                {/* <input placeholder='ImageURL' onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                <textarea placeholder='Description' onChange={(event)=> this.setState({description:event.target.value})}/> */}

                <Link
                 to={{
                    pathname: "/students",
                    studentList: this.props.studentList.student,
                  }}
                >
                    <button
                    disabled={(this.state.firstName ==='' || this.state.lastName ==='' || this.state.EMPID.length < 8)? true:false}
                        style={{ backgroundColor: 'green' }}
                        onClick={this.handleEditSubmit}
                    >Save Changes</button>
                </Link>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return{

//     }
// }

const mapStateToProps = (state) => {

    return{
        studentList : state.StudentsList
    }
}

export default connect(mapStateToProps, actions)(EditStudentScreen); 