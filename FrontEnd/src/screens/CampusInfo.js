import React, { Component,Linking } from 'react';
import {Link} from 'react-router-dom'
import '../CSS/CampusInfo.css'

class CampusInfo extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="CampusContainer">
            <div className="CampusInfo">
            <div className="imageContainer">
                <div className="imageStyle">
            <img
              style={{ maxHeight: 500, maxWidth: 450, }}
              src={this.props.location.campusName.imageURL}
              alt="Mountain"
            />
             {/* <div className="contactMeContainer">
         <button type="button" class="btn btn-success">Contact Me</button>
         </div> */}
           <h1>{this.props.location.campusName.campusName}</h1>
           <h6>Students #: <p style={{display:'inline-block', fontWeight:'lighter', color:'white'}}>{this.props.location.campusName.studentCount}</p> </h6>
             
            <p style={{fontSize:12}}>Joined: {this.props.location.campusName.createdAt}</p>
            </div>

          
                </div>
                <div className="paraContainer">
                <h1>ABOUT</h1>
                <p>{this.props.location.campusName.description}</p>
                </div>
                <div className="buttonStyle" >
                <Link to='campusListing'>
                <button type="button" class="btn btn-dark">GO BACK</button>
               </Link>
               
            </div>
           
            </div>
            </div>
         );
    }
}
 
export default CampusInfo;
