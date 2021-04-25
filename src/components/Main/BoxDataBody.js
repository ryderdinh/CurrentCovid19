import React, { Component } from "react";
import DataCovid from "./DataCovid";
import SearchBox from "./SearchBox";
export class BoxDataBody extends Component {
  checkTypeData = (val) => {
    if (val === "data-country") return <SearchBox />;
  };
  render() {
    const { typeData, dataCovid } = this.props;
    console.log("🚀 ~ file: BoxDataBody.js ~ line 10 ~ BoxDataBody ~ render ~ dataCovid", dataCovid)
    
    return (
      <div className="box-data__body">
        {this.checkTypeData(typeData)}
        <DataCovid dataCovid={dataCovid} />
      </div>
    );
  }
}

export default BoxDataBody;
