import { Component } from "react";
import Todo from "../Todo/component";
import { TODO_STATE } from "../../constant";

const tododb = [
    {id:1, label:"physics", etat:TODO_STATE.DONE},
    {id:2, label:"Maths", etat:TODO_STATE.INPROGRESS},
    {id:3, label:"Science", etat:TODO_STATE.TODO},
]

class TodoList extends Component{
    constructor(props){
      super(props); // You don't need to pass this to super()
      this.state = {
        todos : tododb
      }
    }

    deleteTodo = (id)=>{
        this.setState({todos: this.state.todos.filter((todo=>todo.id !== id))})
    }

    

    render(){
        return <>
          {this.state.todos.map(e=> (
             <Todo deleteTodo={this.deleteTodo} key={e.id}  id={e.id}  label={e.label} etat={e.etat} />
          ))} 
        </>
    }
}

export default TodoList;