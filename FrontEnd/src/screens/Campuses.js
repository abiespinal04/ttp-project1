import React, { Component } from 'react';
import '../CSS/Campuses.css'
import CampusCard from '../components/CampusCard';
import Delete from '../components/Delete';
import Edit from '../components/EditCampusBtn';
import AddCompus from '../components/AddCompusButton';
import Axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import AddCampusButton from '../components/AddCompusButton';


class Campuses extends Component {
    state = {
        campusesList: []
    }

    async componentDidMount() {
        const { data } = await Axios.get('http://localhost:3000/campuses')
        this.props.LoadCampus(data)
        if (this.state.campusesList !== this.props.CampusesList.campus) {
            this.setState({ campusesList: this.props.CampusesList.campus });
          }
      
    }

    // handleNewList = newList => {
    //     this.setState({ campusesList: newList });
    // };

    handleDelete = () => {
        this.setState({ campusesList: this.props.CampusesList.campus });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("ShouldComponentUpdate")
        return (
          nextProps.CampusesList.campus !==
          this.state.campusesList
        );
      }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.campusesList !== this.props.CampusesList.campus) {
          console.log("INSIDE COMPONENT DID UPDATE", this.props.CampusesList.campus)
          this.setState({ campusesList: this.props.CampusesList.campus });
        }
      }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("INSIDE COMPONENTDIDUPDATE CAMPUSES", this.props.CampusesList);
    //     // if(prevProps.DeletedStudList.users !== this.props.DeletedStudList.users){
    //     //    this.handleNewList(this.props.DeletedStudList.users)
    //     // }
    //     // if(prevProps.DeletedStudList.users !== this.props.DeletedStudList.users){
    //     //     this.handleNewList(this.props.DeletedStudList.users)
    //     //  }

    //     if (prevProps.CampusesList.campus !== this.props.CampusesList.campus) {
    //         this.setState({ campusesList: this.props.CampusesList.campus });
    //       }
    // }
    handleCampusList = () => {
        if (this.state.campusesList == 0) {
            return <p>No campuses in the database</p>;
        } else {
            return this.state.campusesList.map((campus, index) => (
                <div
                    style={{
                        margin: 20,
                        borderStyle: "solid",
                        borderBottomWidth: 3,
                        borderColor: "black"
                    }}
                >
                    <CampusCard
                        handleDelete={this.handleDelete}
                        index={index}
                        campusName={campus} />
                </div>
            ));
        }
    };


    render() {

        return (
            <React.Fragment>
                
                <div id="studentBody">
                    <div id="titlePlusAddStudent">
                        <div
                            style={{
                                display: "flex",
                                marginTop: 10,
                                marginLeft: 60,
                                marginRight: "71%"
                            }}
                        >
                            <h1>Campuses</h1>
                        </div>
                        <div id="addButton">
                            <AddCampusButton 
                                handleRefresh = {this.handleRefresh}
                            />
                         
                        </div>
                    </div>
                    <div>{this.handleCampusList()}</div>
                    {/* <button onClick ={this.handleState}> updateState</button> */}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        CampusesList: state.CampusesList,
    };
};


export default connect(
    mapStateToProps,
    actions
)(Campuses);