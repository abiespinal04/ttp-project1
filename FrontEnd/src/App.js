import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import NavBar from './components/NavBar'
import Home from '../src/screens/Home'
import {Route,Switch} from 'react-router-dom'
import CampusListing from './screens/CampusListing';
import AddCampusScreen from './screens/AddCampusScreen';
import Students from '../src/screens/Students'
import EditScreen from '../src/screens/EditScreen'

function App() {
  return (
    <React.Fragment>
    <NavBar/>

    <Switch>
    <Route path='/editScreen' component={EditScreen}/>
    <Route path='/campusListing' component={CampusListing}/>
    <Route path='/students' component={Students}/>
    <Route path='/addCompus' component={AddCampusScreen}/>
    <Route path='/' component={Home}/>
    </Switch>
  
    </React.Fragment>
  );
}

export default App;
