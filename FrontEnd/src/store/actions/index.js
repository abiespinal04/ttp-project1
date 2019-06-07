import {DELETE_STUDENT,ADD_STUDENT} from './types'

export const DeleteStudent = (student) => {

    return{
        type:DELETE_STUDENT,
        payload:student
    }
}

export const AddStudent = (student) => {

    return{
        type:ADD_STUDENT,
        payload:student
    }

}