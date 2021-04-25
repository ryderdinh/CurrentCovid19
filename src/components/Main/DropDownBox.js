import React, { Component } from "react";
import DropDowmItem from "./DropDownItem";

export class DropDownBox extends Component {
  render() {
    const { listCountry, active } = this.props;
    return (
      <div className={active}>
        {listCountry.map((value) => (
          <DropDowmItem
            nameCountry={value}
            setValueInput={this.props.setValueInput}
            showDropDown={this.props.showDropDown}
          />
        ))}
      </div>
    );
  }
}

export default DropDownBox;
