import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT,LOAD_STUDENTS } from "../actions/types";

const INITIAL_STATE = {
  student: [
   
  //   {
  //     firstName: "JOHN",
  //     lastName: "WICK",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "BATMAN",
  //     lastName: "KNIGHT-WATCHER",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "GOKU",
  //     lastName: "Z-FIGHTER",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "VEGETA",
  //     lastName: "Z-FIGHTER",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "GOHAN",
  //     lastName: "Z-FIGHTER",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "KRILLIN",
  //     lastName: "Z-FIGHTER",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "NARUTO",
  //     lastName: "UZUMAKI",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "SASUKE",
  //     lastName: "UCHIHA",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "ITACHI",
  //     lastName: "UCHIHA",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "CHOJI",
  //     lastName: "AKIMICHI",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   },
  //   {
  //     firstName: "JIRAIYA",
  //     lastName: "SENSEI",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
  //   }
  ]

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_STUDENTS: return {...action.payload}

    case ADD_STUDENT:
      const studentData = {
        firstName: '',
        lastName:''
      }
      studentData.firstName = action.payload.firstName;
      studentData.lastName = action.payload.lastName;

      console.log("Inside AddStudentReducer", action.payload);
      state.student.push(action.payload);
      return state;

    case DELETE_STUDENT:
      console.log("Inside delete student reducer", action.payload.id)
        const newState = state.student.filter((student) => student.id !== action.payload.id)
       console.log(state)
        console.log("newState", newState)
        // state = newState
        //grabs the state and pick the object student and give it this new object "newState"
      return {...state, student:newState}

    case EDIT_STUDENT: {
      console.log("Inside EDIT_STUDENT REDUCER", action.payload);
      state.student[action.payload.index].firstName =
        action.payload.student.firstName;
      state.student[action.payload.index].lastName =
        action.payload.student.lastName;
      return state;
    }

    default: {
      return state;
    }
  }
};
