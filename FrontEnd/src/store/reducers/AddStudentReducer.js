import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "../actions/types";

const INITIAL_STATE = {
  users: [
    {
      firstName: "JOHN",
      lastName: "SNOW",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "JOHN",
      lastName: "WICK",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "BATMAN",
      lastName: "KNIGHT-WATCHER",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "GOKU",
      lastName: "Z-FIGHTER",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "VEGETA",
      lastName: "Z-FIGHTER",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "GOHAN",
      lastName: "Z-FIGHTER",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "KRILLIN",
      lastName: "Z-FIGHTER",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "NARUTO",
      lastName: "UZUMAKI",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "SASUKE",
      lastName: "UCHIHA",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "ITACHI",
      lastName: "UCHIHA",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "CHOJI",
      lastName: "AKIMICHI",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    },
    {
      firstName: "JIRAIYA",
      lastName: "SENSEI",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero sapiente hic natus placeat repellat quisquam vel vero, quasi laudantium assumenda. Doloribus facilis et adipisci maxime voluptate saepe placeat ipsum."
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      console.log("Inside AddStudentReducer", action.payload);
      state.users.push(action.payload);
      return state;

    case DELETE_STUDENT:
      delete state.users[action.payload];
      return state;

    case EDIT_STUDENT: {
      console.log("Inside EDIT_STUDENT REDUCER", action.payload);
      state.users[action.payload.index].firstName =
        action.payload.student.firstName;
      state.users[action.payload.index].lastName =
        action.payload.student.lastName;
      return state;
    }

    default: {
      return state;
    }
  }
};
