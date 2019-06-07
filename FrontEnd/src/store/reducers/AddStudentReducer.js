import {ADD_STUDENT} from  '../actions/types'

const INITIAL_STATE = {
    users: []
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case ADD_STUDENT:
            return {...state, users:action.payload}

            default:{
                
                return state
                }
    }

}