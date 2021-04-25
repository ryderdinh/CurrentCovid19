import React, { Component } from "react";
import Icon from "../Icon/Icon";
import LogoName from "./LogoName";
export class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <LogoName />
        <Icon classN={"covid"} src={"./images/logo.svg"} />
      </div>
    );
  }
}

export default Logo;
