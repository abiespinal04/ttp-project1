import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const EditCampusBtn = (props) => {

    const handleEditStudent = () => {
        props.handleEdit()
    }
    return (

        <div>


            <Link
                to={{
                    pathname: "/editCampusScreen",
                    campusName: props.campusName
                    }}>
                <button style={{ backgroundColor: 'white', margin: 5 }}
                // onClick={handleEditStudent}
                >
                    Edit
        </button>
            </Link>
        </div>

    );
}

export default EditCampusBtn;