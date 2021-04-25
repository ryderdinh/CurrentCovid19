import React, { Component } from "react";

export class LogoName extends Component {
  state = {
    covid: ["C", "O", "V", "I", "D", 1, 9],
  };
  render() {
    return (
      <div className="logo--name">
        <img src="./images/logo-name.svg" alt="current covid19" />
        <div className="logo-covid">
          {this.state.covid.map((txt, index) => {
            let clsTxt;
            clsTxt = index > 4 ? "txtBlack" : "txtStroke";
            return <p className={clsTxt}>{txt}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default LogoName;
