import { Component } from "react";
import Todo from "../Todo/component";

class TodoList extends Component{
    // apres qu'on a configurer redux delete et add vient des props 
    /**deleteTodo = (id)=>{
        this.setState({todos: this.state.todos.filter((todo=>todo.id !== id))})
    } */

    /**addTodo=() =>{
      this.setState(
        [...this.state.todos, {id:5, label:"physics", etat:TODO_STATE.DONE}] 
      )
    } */

    /**updateTodo = (updatedtodo) => {
       this.setState({ todos: 
        this.state.todos.map((todo) => {
          if(todo.id === updatedtodo.id) return updatedtodo;
          return todo;
        })}
       )
    }
   */

    render(){
        return <>
           <div>
              <button onClick={this.props.addTodo} >Add Todo</button>
           </div>
          {(this.props.todos).map(todo => (
             <Todo key={todo.id} id={todo.id} label={todo.label} etat={todo.etat} />
          ))} 
        </>
    }
}

export default TodoList;