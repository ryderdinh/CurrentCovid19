import React, { Component } from "react";

export class InfomationContent extends Component {
  state = {
    dsrc: [
      "https://github.com/mathdroid/covid-19-api",
      "https://www.facebook.com/pastetuaam",
    ],
  };
  render() {
    return (
      <div className="infomation--content">
        <p>
          data source from github:
          <span>
            <a href={this.state.dsrc[0]} target="__blank">
              {this.props.dsrc[0]}
            </a>
          </span>
        </p>
        <p>
          designer & developer current covid19:
          <span>
            <a href={this.state.dsrc[1]} target="__blank">
              {this.props.dsrc[1]}
            </a>
          </span>
        </p>
      </div>
    );
  }
}

export default InfomationContent;
