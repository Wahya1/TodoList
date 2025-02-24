import { Component } from "react";
import { TODO_STATE } from "../../constant";
import "./style.css";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/todoReducer/action";

class Todo extends Component{
    // No need to spread state (...state) → setState
    //[this.props.etat] → Uses computed property syntax to set a dynamic state key.

    handlStateChange = (e)=> {
     this.props.updateTodo({...this.props,etat : e.target.value })
    }
    
    handLabelChange=(e)=> {
        this.props.updateTodo({...this.props, label : e.target.value})
    }

    handlDeleteTodo =()=> {
        this.props.deleteTodo(this.props.id)
    }
   
    render(){
        const {label, etat} = this.props;
        console.log(this.props)
        return(
           <div>
                <input onChange ={this.handLabelChange}  type="text"  value={label}/>
                    <select onChange ={this.handlStateChange}  value={etat}>
                        <option>  {TODO_STATE.DONE}   </option>
                        <option>  {TODO_STATE.INPROGRESS}   </option>
                        <option>  {TODO_STATE.TODO}   </option>
                    </select>
                <button onClick={this.handlDeleteTodo} className="deleteButton">Delete</button>
           </div>
        )
    }
}


const mapDispatchToProps ={
    deleteTodo,
    updateTodo
}

export default connect(null, mapDispatchToProps)(Todo);