
//every reducer has a state 

import { TODO_STATE } from "../../constant";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action";

const intitialState={
    todos: [
        {id:1, label:"physics", etat:TODO_STATE.DONE},
        {id:2, label:"Maths", etat:TODO_STATE.INPROGRESS},
        {id:3, label:"Science", etat:TODO_STATE.TODO},
    ]
    ,
    isLoading:false,
}

let id = 4;
const todoReducer =(state=intitialState, action)=> {
    console.log(state, action)
    const {payload, type} = action;
    switch(type){
        case DELETE_TODO :
            return{
                ...state,
                todos: state.todos.filter(todo=> todo.id !== payload.id)
            };
        case ADD_TODO :
            return {
                ...state,
                todos :[...state.todos, {id:++id,  etat:TODO_STATE.TODO}]
            };
        case UPDATE_TODO : 
            return {
                ...state,
                todos :state.todos.map(
                    (todo) => {
                        if(todo.id ===payload.todo.id) return payload.todo;
                        return todo;
                    }
                )
            };
        default: return state;
    }
}

export default todoReducer;
