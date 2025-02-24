import { connect } from "react-redux";
import TodoList from "./component";
import { addTodo, deleteTodo, updateTodo } from "../../redux/todoReducer/action";

const mapStateToProps =(store) => {
    console.log({store})
    return {todos:store.todo.todos}
}

 const mapDispatchToProps ={
    deleteTodo,
    addTodo,
    updateTodo
}
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);  
export default TodoListContainer ;

