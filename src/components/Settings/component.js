import React, { Component } from "react";

class  Settings extends Component{
  
  render(){
    const {name, lastname ,updateProfile} = this.props;

    return <div>
      <div>
        <label>Nom    :</label>
        <input onChange={updateProfile} type="text"  value={name} name ="name" ></input>
      </div>
      <div>
        <label>Prenom :</label>
        <input onChange={updateProfile} type="text"  value={lastname} name ="lastname"></input>
      </div>
    </div>
  }
}

export default Settings;