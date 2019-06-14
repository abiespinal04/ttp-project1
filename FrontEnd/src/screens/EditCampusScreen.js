import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import Axios from 'axios'



class EditHomeScreen extends Component {
    state = {
        campusName: '',
        studentCount: '',
        description:'',
        ImageURL:''
    }

    componentDidMount() {
        this.setState(this.props.location.campusName)
      
    }

    handleEditSubmit = () => {
        this.props.EditCampus(this.state)

    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <input placeholder='Campus Name' onChange={(event) => this.setState({ campusName: event.target.value })} />
                <input placeholder='student count' onChange={(event) => this.setState({ studentCount: event.target.value })} />
                <input placeholder='description' onChange={(event) => this.setState({ description: event.target.value })} />
                <input style={{marginLeft:10 }} placeholder="imageURL" onChange={(event) => this.setState({imageURL:event.target.value})}/>
                {/* <input placeholder='ImageURL' onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                <textarea placeholder='Description' onChange={(event)=> this.setState({description:event.target.value})}/> */}
                <Link to="campusListing">
                    <button
                        style={{ backgroundColor: 'green' }}
                        onClick={this.handleEditSubmit}
                    >Save Changes</button>
                </Link>
            </div>
        );
    }
}

export default connect(null, actions)(EditHomeScreen); 
