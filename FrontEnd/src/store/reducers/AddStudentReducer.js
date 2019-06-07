import {ADD_STUDENT,DELETE_STUDENT, EDIT_STUDENT} from  '../actions/types'

const INITIAL_STATE = {
    users: [ 
        {firstName:'JOHN', lastName:'SNOW'},
        {firstName:'JOHN', lastName:'WICK'},
        {firstName:'BATMAN', lastName:'KNIGHT-WATCHER'},
        {firstName:'GOKU', lastName:'Z-FIGHTER'},
        {firstName:'VEGETA', lastName:'Z-FIGHTER'},
        {firstName:'GOHAN', lastName:'Z-FIGHTER'},
        {firstName:'KRILLIN', lastName:'Z-FIGHTER'},
        {firstName:'NARUTO', lastName:'UZUMAKI'},
        {firstName:'SASUKE', lastName:'UCHIHA'},
        {firstName:'ITACHI', lastName:'UCHIHA'},
        {firstName:'CHOJI', lastName:'AKIMICHI'},
        {firstName:'JIRAIYA', lastName:'SENSEI'},
        ]
     
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_STUDENT:
        console.log("Inside AddStudentReducer", action.payload)
            state.users.push(action.payload);
        return state

        case DELETE_STUDENT:
            delete state.users[action.payload]
            return state

        case EDIT_STUDENT:  {
            console.log("Inside EDIT_STUDENT REDUCER",action.payload)
            state.users[action.payload.index].firstName = action.payload.student.firstName
            state.users[action.payload.index].lastName = action.payload.student.lastName
            return state
        }
            
            default:{
                
                return state
                }
    }

}