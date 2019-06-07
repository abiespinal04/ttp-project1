import {DELETE_STUDENT} from '../actions/types'

const INITIAL_STATE = {
    users: []
}

export default (state=INITIAL_STATE, action) => {

    switch(action.action){
        case DELETE_STUDENT:
            return {...state,users:action.users}
            
            default:{
                return state
                }
    }


}