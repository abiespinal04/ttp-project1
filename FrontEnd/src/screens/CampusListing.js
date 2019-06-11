import React, { Component } from 'react';
import Card from '../components/Card';
import Campuses from './Campuses';



class CampusListing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Campuses/>
            </div>
         );
    }
}
 
export default CampusListing;