import React, { Component } from "react";
import DataCovidItem from "./DataCovidItem";

export class DataCovid extends Component {
  render() {
    const { dataCovid } = this.props;
    return (
      <div className="box-data--data-covid">
        <DataCovidItem type={"confirmed"} number={dataCovid._confirmed} />
        <DataCovidItem type={"deaths"} number={dataCovid._deaths} />
        <DataCovidItem type={"recovered"} number={dataCovid._recovered} />
      </div>
    );
  }
}

export default DataCovid;
