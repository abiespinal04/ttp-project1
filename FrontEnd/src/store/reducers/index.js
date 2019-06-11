import {combineReducers} from 'redux'
import DeleteStudentReducer from './DeleteStudentReducer'
import AddStudentReducer from './AddStudentReducer'
import AddCampusReducer from './AddCampusReducer'

export default combineReducers({
    DeletedStudent: DeleteStudentReducer,
    StudentsList : AddStudentReducer,
    CampusesList: AddCampusReducer
})