import {
    DELETE_STUDENT,
    ADD_STUDENT,
    EDIT_STUDENT, 
    EDIT_CAMPUS,
    ADD_CAMPUS,
    DELETE_CAMPUS
} from './types'

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



//schools actions

export const AddSchool = (school) => {

    return{
        type:ADD_CAMPUS,
        payload:school
    }

}

export const EditCampus = (index,campus) => {
    console.log("EditStudent action creator", campus)
    return{
        type:EDIT_CAMPUS,
        payload:{index,campus}
    }
}

export const DeleteCampus = (campus) => {
    console.log(campus)
    return{
        type:DELETE_CAMPUS,
        payload:campus
    }
}