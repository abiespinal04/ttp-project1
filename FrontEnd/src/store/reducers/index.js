import {combineReducers} from 'redux'
import DeleteStudentReducer from './DeleteStudentReducer'
import AddStudentReducer from './AddStudentReducer'


export default combineReducers({
    DeletedStudent: DeleteStudentReducer,
    StudentsList : AddStudentReducer,
})