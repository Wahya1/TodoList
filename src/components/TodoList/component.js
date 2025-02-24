import { Component } from "react";

class TodoList extends Component{
   
  // apres qu'on a configurer redux delete et add handlers viennent des props a l aide du HOC connect
   
    render(){
        return <>
           <div>
              <button onClick={this.props.addTodo} >Add Todo</button>
           </div>
          {(this.props.todos).map(todo => (
             <TodoContainer key={todo.id} id={todo.id} label={todo.label} etat={todo.etat} />
          ))} 
        </>
    }
}

export default TodoList;