import {DELETE_STUDENT,ADD_STUDENT,EDIT_STUDENT} from './types'

export const DeleteStudent = (student) => {
    console.log(student)
    return{
        type:DELETE_STUDENT,
        payload:student
    }
}

export const EditStudent = (index,student) => {
    console.log("EditStudent action creator", student)
    return{
        type:EDIT_STUDENT,
        payload:{index,student}
    }
}

export const AddStudent = (student) => {

    return{
        type:ADD_STUDENT,
        payload:student
    }

}