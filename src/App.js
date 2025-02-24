import React, { Component } from "react";
import TodoListContainer from "./components/TodoList";
import SettingsContainer from "./components/Settings";
import HeaderContainer from "./components/Header";

class App extends Component{

  render(){
      return  (
        <div>
            <HeaderContainer/>
            <SettingsContainer/>
            <TodoListContainer/>
        </div>
      )
  }
}

export default App;