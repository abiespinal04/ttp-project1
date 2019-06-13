import { ADD_CAMPUS,DELETE_CAMPUS,EDIT_CAMPUS,LOAD_CAMPUS } from '../actions/types'
const INITIAL_STATE = {
    campus: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOAD_CAMPUS: return {...action.payload}

        case ADD_CAMPUS: {
            const newCampus = action.payload
            // return {...state, newCampus};
            return {...state, campus: [...state.campus, action.payload]}
        }
        case DELETE_CAMPUS: {
            delete state.campus[action.payload]
            return state
        }
        case EDIT_CAMPUS: {
            console.log("Inside EDIT_STUDENT REDUCER", action.payload)
            state.campus[action.payload.index].title = action.payload.campus.title
            state.campus[action.payload.index].studentCount = action.payload.campus.studentCount
            return state
        }

        default: {return state}
    }
}