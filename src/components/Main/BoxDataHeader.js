import React, { Component } from "react";
import Icon from "../Icon/Icon";

export class BoxDataHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="box-data__header">
        <div className="title">
          <p>{title}</p>
          <Icon classN={"arrow"} src={"./images/long_arrow.svg"} />
        </div>
        <div className="btn-reload">
          <Icon classN="reload" src={"./images/reload.svg"} />
        </div>
      </div>
    );
  }
}

export default BoxDataHeader;
