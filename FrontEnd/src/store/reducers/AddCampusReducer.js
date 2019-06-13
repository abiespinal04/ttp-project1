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
            const newState = state.campus.filter((campus) => campus.id !== action.payload.id)
            return {...state, campus:newState}
        }
        case EDIT_CAMPUS: {
            const newArr = {...state}
      
            const indexOf = state.campus.findIndex( campus =>  campus.id === action.payload.id)
               console.log("Inside EDIT_STUDENT REDUCER", indexOf);
            newArr.campus[indexOf].campusName = action.payload.campusName;
            newArr.campus[indexOf].studentCount = action.payload.studentCount;
            newArr.campus[indexOf].description = action.payload.description;
            
           
            return {state,...newArr}
        }

        default: {return state}
    }
}