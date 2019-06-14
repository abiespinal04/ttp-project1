import {
    DELETE_STUDENT,
    ADD_STUDENT,
    EDIT_STUDENT,
    EDIT_CAMPUS,
    ADD_CAMPUS,
    DELETE_CAMPUS,
    LOAD_STUDENTS,
    LOAD_CAMPUS
} from './types'

import Axios from 'axios'

//LOADS THE SCREEN WITH DATA FROM THE DATABASE
export const LoadStudents = (students) => {
    console.log("Inside LoadStudent action", students)
    return { type: LOAD_STUDENTS, payload: students }
}


//STUDENT ACTION CREATOR
export const DeleteStudent = (student) => {

    return async (dispatch) => {
        const { data } = await Axios.delete(`http://localhost:3000/students/${student.id}`)
        console.log(data)
        dispatch({ type: DELETE_STUDENT, payload: student })
    }
}

export const EditStudent = (student) => {
    console.log("EditStudent action creator", student)
    return async (dispatch) => {
        const { data } = await Axios.patch('http://localhost:3000/students/editStudent', student)
        console.log("EditStudent action newData:", data)
        dispatch({ type: EDIT_STUDENT, payload: student })
    }
}

export const AddStudent = (student) => {
    console.log("AddStudent action creator", student)
    return async (dispatch) => {

        const { data } = await Axios.post('http://localhost:3000/students/addStudent', student)

        console.log("ADD STUDENT ACTION:", data)
        dispatch({ type: ADD_STUDENT, payload: data })
    }
}



//SCHOOLS ACTION CREATOR

export const LoadCampus = (campus) => {
    console.log("Inside LoadStudent action", campus)
    return { type: LOAD_CAMPUS, payload: campus }
}


export const AddSchool = (campus) => {

    console.log("AddSchool action creator", campus)
    return async (dispatch) => {

        const { data } = await Axios.post('http://localhost:3000/campuses/addCampus', campus)

        console.log("ADD CAMPUS ACTION:", data)
        dispatch({ type: ADD_CAMPUS, payload: data })
    }
}

export const EditCampus = (campus) => {
    console.log("E  d i t", campus)
    return async (dispatch) => {
        const { data } = await Axios.patch('http://localhost:3000/campuses/editCampus', campus)
        console.log("EditCampus action newData:", data)
        dispatch({ type: EDIT_CAMPUS, payload: campus })
    }
}

export const DeleteCampus = (campus) => {
    return async (dispatch) => {
        const { data } = await Axios.delete(`http://localhost:3000/campuses/${campus.id}`)
        console.log(data)
        dispatch({ type: DELETE_CAMPUS, payload: campus })
    }
}