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
import EditStudentScreen from '../src/screens/EditStudentScreen'
import {createStore, applyMiddleware} from 'redux';
import {connect} from 'react-redux'
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './store/reducers'
import AddStudentScreen from './screens/AddStudentScreen'


function App() {

  const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <React.Fragment>

    <Provider store= {store} >
    <NavBar/>

    <Switch>

    <Route path='/editStudentScreen' component={EditStudentScreen}/>
    <Route path='/editScreen' component={EditScreen}/>
    <Route path='/campusListing' component={CampusListing}/>
    <Route path='/students' component={Students}/>
    <Route path='/addCompus' component={AddCampusScreen}/>
    <Route path='/addStudent' component={AddStudentScreen}/>
    <Route path='/' component={Home}/>
    </Switch>
    </Provider>
  
    </React.Fragment>
  );
}

export default App;
