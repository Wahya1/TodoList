import { Component } from "react";
import { TODO_STATE } from "../../constant";
import "./style.css";
class Todo extends Component{
    
    //instead of using useState where using constuctors
    constructor(props){
        super(props);
        this.state = {
            id:props.id,
            label:props.label,
            etat: props.etat,
        }
    }
   
    // No need to spread state (...state) → setState
    //[this.props.etat] → Uses computed property syntax to set a dynamic state key.
    handlStateChange = (e)=> {
     this.setState({
        etat: e.target.value,
     })
    }
    
    handLabelChange=(e)=> {
        this.setState({
            label:e.target.value
        })
    }

    handlDeleteTodo =()=> {
        this.props.deleteTodo(this.props.id)
    }
   
    render(){
        
        console.log(this.state);
        return(
           <div>
                <input onChange ={this.handLabelChange}  type="text"  value={this.state.label}/>
                    <select onChange ={this.handlStateChange}  value={this.state.etat}>
                        <option>  {TODO_STATE.DONE}   </option>
                        <option>  {TODO_STATE.INPROGRESS}   </option>
                        <option>  {TODO_STATE.TODO}   </option>
                    </select>
                <button onClick={this.handlDeleteTodo} className="deleteButton">Delete</button>
           </div>
        )
    }
}

export default Todo;