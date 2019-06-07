import {DELETE_STUDENT} from '../actions/types'

const INITIAL_STATE = {
    users: []
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type){
        
        case DELETE_STUDENT:{
                console.log("Inside Delete action", action.payload)
            return {...state,users:action.payload,}
        }
            default:{
                return state
                }
    }


}