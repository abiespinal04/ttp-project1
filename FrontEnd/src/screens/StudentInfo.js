import React, { Component,Linking } from 'react';
import {Link} from 'react-router-dom'
import '../CSS/StudentInfo.css'

class StudentInfo extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="StudentContainer">
            <div className="StudentInfo">
            <div className="imageContainer">
                <div className="imageStyle">
            <img
              style={{ maxHeight: 250, maxWidth: 200, }}
              src={this.props.location.student.imageURL}
              alt="Mountain"
            />
             {/* <div className="contactMeContainer">
         <button type="button" class="btn btn-success">Contact Me</button>
         </div> */}
           <h1>{this.props.location.student.firstName}</h1>
           <h4>{this.props.location.student.lastName}</h4>
                <h6>EMPLID: <p style={{display:'inline-block', fontWeight:'lighter', color:'white'}}>{this.props.location.student.EMPID}</p></h6>
            <p style={{fontSize:12}}>Joined: {this.props.location.student.createdAt}</p>
            </div>

          
                </div>
                <div className="paraContainer">
                <h1>ABOUT</h1>
                <p>{this.props.location.student.description}</p>
                </div>
                <div className="buttonStyle" >
                <Link to='students'>
                <button type="button" class="btn btn-dark">GO BACK</button>
               </Link>
               
            </div>
           
            </div>
            </div>
         );
    }
}
 
export default StudentInfo;