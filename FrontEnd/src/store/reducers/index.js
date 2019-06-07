import {combineReducers} from 'redux'
import DeleteStudentReducer from './DeleteStudentReducer'


export default combineReducers({
    DeletedUser: DeleteStudentReducer,
})