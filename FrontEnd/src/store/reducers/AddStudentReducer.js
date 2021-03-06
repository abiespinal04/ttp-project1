import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, LOAD_STUDENTS } from "../actions/types";

const INITIAL_STATE = {
  student: []

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_STUDENTS: return { ...action.payload }

    case ADD_STUDENT:
      const newStudent = action.payload
      // return {...state, newStudent};
      return { ...state, student: [...state.student, action.payload] }

    case DELETE_STUDENT:
      console.log("Inside delete student reducer", action.payload.id)
      const newState = state.student.filter((student) => student.id !== action.payload.id)
      console.log(state)
      console.log("newState", newState)
      return { ...state, student: newState }

    case EDIT_STUDENT: {
      const newArr = { ...state }

      const indexOf = state.student.findIndex(student => student.id === action.payload.id)
      console.log("Inside EDIT_STUDENT REDUCER", indexOf);
      newArr.student[indexOf].firstName = action.payload.firstName;
      newArr.student[indexOf].lastName = action.payload.lastName;
      newArr.student[indexOf].description = action.payload.description;
      newArr.student[indexOf].EMPID = action.payload.EMPID;

      return { state, ...newArr }
    }

    default: {
      return state;
    }
  }
};
