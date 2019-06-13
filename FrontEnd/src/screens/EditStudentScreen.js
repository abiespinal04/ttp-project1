import React, { Component } from 'react';
import Axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../store/actions'



class EditStudentScreen extends Component {
    state = {
    
    }

    // handleEdit = () => {
    //     this.props.handleEdit()
    // }

    componentDidMount() {
        this.setState(this.props.location.student )
    }

    handleEditSubmit = () => {
        this.props.EditStudent(this.state)

    }

    render() {
        // console.log("State coming from screen",this.props.location.state)
        return (

            <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <input placeholder='first name' onChange={(event) =>this.setState({ firstName: event.target.value })} />
                <input placeholder='last name' onChange={(event) => this.setState({ lastName: event.target.value })} />
                {/* <input placeholder='ImageURL' onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                <textarea placeholder='Description' onChange={(event)=> this.setState({description:event.target.value})}/> */}

                <Link to="students">
                    <button
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

export default connect(null, actions)(EditStudentScreen); 