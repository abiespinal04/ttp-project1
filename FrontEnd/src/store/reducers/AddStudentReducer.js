import {ADD_STUDENT} from  '../actions/types'

const INITIAL_STATE = {
    users: [ 
        {firstName:'JOHN', lastName:'SNOW'},
        {firstName:'JOHN', lastName:'WICK'},
        {firstName:'BATMAN', lastName:'KNIGHT-WATCHER'},
        {firstName:'GOKU', lastName:'Z-FIGHTER'},
        {firstName:'VEGETA', lastName:'Z-FIGHTER'},
        {firstName:'GOHAN', lastName:'Z-FIGHTER'},
        {firstName:'KRILLIN', lastName:'Z-FIGHTER'},
        {firstName:'NARUTO', lastName:'UZUMAKI'},
        {firstName:'SASUKE', lastName:'UCHIHA'},
        {firstName:'ITACHI', lastName:'UCHIHA'},
        {firstName:'CHOJI', lastName:'AKIMICHI'},
        {firstName:'JIRAIYA', lastName:'SENSEI'},
        ]
     
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case ADD_STUDENT:
            return [...state,...action.payload]

            default:{
                
                return state
                }
    }

}