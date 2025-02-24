import { connect } from "react-redux";
import TodoList from "./component";
import { deleteTodo, updateTodo } from "../../redux/todoReducer/action";

 const mapDispatchToProps ={
    deleteTodo,
    updateTodo,
}
const TodoContainer = connect(null, mapDispatchToProps)(TodoList); 
export default TodoContainer ;

 