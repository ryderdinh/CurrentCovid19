import React, { Component } from "react";
import Infomation from "./Infomation";
import Logo from "./Logo";
export class Header extends Component {
  render() {
    return (
      <header>
        <Infomation />
        <Logo />
      </header>
    );
  }
}

export default Header;
