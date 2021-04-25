import React, { Component } from "react";
import Icon from "./Icon/Icon";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>copyright</p>
        <Icon classN={"copyright"} src={"./images/copyright.svg"} />
        <p>2021 Pastetu</p>
      </footer>
    );
  }
}

export default Footer;
