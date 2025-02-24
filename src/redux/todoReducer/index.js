import { TODO_STATE } from "../../constant";
const intitialState={
    todos: [
        {id:1, label:"physics", etat:TODO_STATE.DONE},
        {id:2, label:"Maths", etat:TODO_STATE.INPROGRESS},
        {id:3, label:"Science", etat:TODO_STATE.TODO},
    ]
    ,
    isLoading:false,
}

const todoReducer =(state=intitialState, action)=> {
return state
}

export default todoReducer;

//every reducer has a state 