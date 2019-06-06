import React, { Component } from 'react';


class AddCampusScreen extends Component {
    state = { 
            school:{name:'',location:'',imageURL:'',campusDescription:''}
     }


    handleAddCampus = (value) => {


    }
    render() { 
        return ( 
            //backgroundColor:'grey',height:800
            <div  style={{marginLeft:10}}  >
                <label style={{fontSize:40, fontWeight:'bold'}}>Campus:</label>
                <input style={{marginLeft:10 }} placeholder="Add Campus" onChange={(event) => this.setState({name:event.target.value})}/>
                <button style={{marginLeft:10,fontSize:17,backgroundColor:'grey', color:'white'}}>Submit</button>
            </div>
         );
    }
}
 
export default AddCampusScreen;