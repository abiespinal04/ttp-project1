import {
    DELETE_STUDENT,
    ADD_STUDENT,
    EDIT_STUDENT, 
    EDIT_CAMPUS,
    ADD_CAMPUS,
    DELETE_CAMPUS,
    LOAD_STUDENTS
} from './types'

import Axios from 'axios'


export const LoadStudents = (students) => {
    console.log("Inside LoadStudent action", students)
    return { type: LOAD_STUDENTS, payload:students}
}


export const DeleteStudent = (student) => {
  
    return async (dispatch) =>{
   const {data} = await Axios.delete(`http://localhost:3000/students/${student.id}`)
   console.log(data)
   dispatch({type:DELETE_STUDENT, payload:student})
    }

//    return (dispatch) =>{
//     Axios.delete(`http://localhost:3000/students/${student.id}`)
//     .then((student) =>{
//      dispatch({type:DELETE_STUDENT, payload:student})
//      console.log('student id:',student.id)
//     })
//     .catch(err => console.log(err))

//    }
   
    // console.log(student)
    // return{
    //     type:DELETE_STUDENT,
    //     payload:student
    // }
}

export const EditStudent = (index,student) => {
    console.log("EditStudent action creator", student)
    return{
        type:EDIT_STUDENT,
        payload:{index,student}
    }
}

export const AddStudent =  (student) => {
    
    return (dispatch) => {
      
        Axios.post('http://localhost:3000/students/addStudent',student)
        .then(student => 
            {
                console.log('INSIDE ADD STUDENT ACTION', student.data)
            dispatch({type:ADD_STUDENT, payload:student.data})
            })
            
            .catch( (error)=>{
                console.log(error)
            })
    }

    // return{
    //     type:ADD_STUDENT,
    //     payload:student
    // }

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