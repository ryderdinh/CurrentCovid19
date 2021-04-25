import React, { Component } from "react";

export class Icon extends Component {
  render() {
    return (
      <div className={`ic ic--${this.props.classN}`}>
        <img src={this.props.src} alt={this.props.classN} />
      </div>
    );
  }
}

export default Icon;
