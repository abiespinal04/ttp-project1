import React, { Component } from 'react';
import '../CSS/Campuses.css'
import ProfileCard from '../components/ProfileCard';
import Delete from '../components/Delete';
import Edit from '../components/Edit';
import AddCompus from '../components/AddCompusButton';


class Campuses extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="CampusesContainer">
            <h6>{this.props.campus.title}</h6>
           <p>{this.props.campus.studentCount}</p>
           <ProfileCard/>
            <Delete />
            <Edit/>
        </div> );
    }
}
 
export default Campuses;