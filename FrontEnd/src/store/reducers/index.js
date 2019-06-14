import { combineReducers } from 'redux'
import AddStudentReducer from './AddStudentReducer'
import AddCampusReducer from './AddCampusReducer'

export default combineReducers({
    StudentsList: AddStudentReducer,
    CampusesList: AddCampusReducer
})