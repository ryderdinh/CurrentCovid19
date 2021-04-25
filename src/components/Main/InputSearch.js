import React, { Component } from "react";

export class InputSearch extends Component {
  render() {
    return (
      <input
        autoComplete="off"
        className="search"
        value={this.props.nameCountry}
        placeholder="choose country..."
      />
    );
  }
}

export default InputSearch;
