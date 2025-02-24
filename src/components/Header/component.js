import React, { Component } from "react";

class Header extends Component{
  render()
  {
    let {name, lastname} = this.props;
    return <>
    <div>Hello {name} {lastname}</div></>
  }
}

export default Header;