import React, { Component } from "react";

export class BoxDataFooter extends Component {
  render() {
    return (
      <div className="box-data__footer">
        <p>
          <span>last update:</span> {this.props.lastUpdate}
        </p>
      </div>
    );
  }
}

export default BoxDataFooter;
