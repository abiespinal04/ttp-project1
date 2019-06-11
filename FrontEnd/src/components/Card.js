import React, { Component } from 'react';
import '../CSS/Card.css'
import Delete from './Delete';
import Edit from './Edit'
import Campuses from '../screens/Campuses'
import ProfileCard from './ProfileCard';
import Axios from 'axios'
import AddCampus from './AddCompusButton';



class Card extends Component {
    state = { 
        campus:[
        {title:'Lehman College', studentCount:50},
        {title:'Hunter College', studentCount:40},
        {title:'BMCC College', studentCount:80},
        {title:'Lehman College', studentCount:50},
        {title:'Hunter College', studentCount:40},
        {title:'BMCC College', studentCount:80},
        {title:'Lehman College', studentCount:50},
        {title:'Hunter College', studentCount:40},
        {title:'BMCC College', studentCount:80},
        {title:'Lehman College', studentCount:50},
        {title:'Hunter College', studentCount:40},
        {title:'BMCC College', studentCount:80},
            ]
     }

     componentDidMount(){
        Axios.get('http://ctp-zip-api.herokuapp.com/zip/:zipcode').then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })

     }

     handleCampusesRender = () => {
         if(this.state.campus.length === 0) {
            return(
                <p>There are no campuses registered in the database</p>
            )
         }
         else {
            return(
                 this.state.campus.map( campus =>  
                    <div class = "mapcard">
                         <Campuses campus={campus}/>
                    </div>
            )
            )
         }
     }
    render() { 
        return ( 
            <React.Fragment>
            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
           
    
           <div style={{display:'flex', marginTop:10, marginLeft:60,marginRight:'69%',}}>
           <h1 style={{fontFamily:'Impact'}}>Campuses</h1>
           </div>
           <div style={{marginTop:10}}>
            <AddCampus/>
            </div>
          
       
        </div>

        <div className="MainContainer">
            
           <div className="CampusCard">
           {this.handleCampusesRender()}
           </div>
           
         
        </div> 
        </React.Fragment>
    
     
        );
    }
}
 
export default Card;