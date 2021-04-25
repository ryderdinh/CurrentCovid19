import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataCountry } from "../../actions";
export class DropDownItem extends Component {
  render() {
    const { nameCountry } = this.props;
    return (
      <div
        className="drop-down--item"
        onClick={() => {
          this.props.setValueInput(nameCountry);
          this.props.getDataCountry(nameCountry);
          this.props.showDropDown();
        }}
      >
        {nameCountry}
      </div>
    );
  }
}
export default connect(null, { getDataCountry })(DropDownItem);
