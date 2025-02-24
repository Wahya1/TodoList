import React, { Component } from "react";
import TodoList from "./components/TodoList/component";
import "./App.css";

class Header extends Component{
  render()
  {
    let {name, lastname} = this.props;
    return <>
    <div>Hello {name} {lastname}</div></>
  }
}


class  Settings extends Component{
  
  render(){
    const {name, lastname ,handlChange} = this.props;

    return <div>
      <div>
        <label>Nom    :</label>
        <input onChange={handlChange} type="text"  value={name} name ="name" ></input>
      </div>
      <div>
        <label>Prenom :</label>
        <input onChange={handlChange} type="text"  value={lastname} name ="lastname"></input>
      </div>
    </div>
  }
}


class App extends Component{

  constructor()
  {
    super();
    this.state={
      name: "khaoula",
      lastname:"abassi"
    }
  }

  handlChange =(e)=>{
    this.setState({[e.target.name]: e.target.value}) ;
  }

  render(){
  const {name, lastname} =this.state;
      return  (
        <div>
          <div className="Header" >
             <Header name={name} lastname={lastname} />
          </div>
          <div>
             <Settings  name={name} lastname={lastname}  handlChange={this.handlChange}/>
          </div>
          <h2>Todo List</h2>
             <TodoList/>
        </div>
      )
  }
}

export default App;