import { connect } from "react-redux";
import TodoList from "./component";
import { addTodo, deleteTodo, updateTodo } from "../../redux/todoReducer/action";

 const mapDispatchToProps ={
    deleteTodo,
    addTodo,
 
}
const TodoContainer = connect(nul, mapDispatchToProps)(TodoList); 
export default TodoContainer ;

