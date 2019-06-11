import { ADD_CAMPUS,DELETE_CAMPUS,EDIT_CAMPUS } from '../actions/types'
const INITIAL_STATE = {
    campus: [
        { title: 'Lehman College', studentCount: 50 },
        { title: 'Hunter College', studentCount: 40 },
        { title: 'BMCC College', studentCount: 80 },
        { title: 'Westchester College', studentCount: 50 },
        { title: 'Queens College', studentCount: 40 },
        { title: 'BCC College', studentCount: 80 },
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CAMPUS: {
            state.campus.push(action.payload)
            return state;
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