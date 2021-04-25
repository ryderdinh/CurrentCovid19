import React, { Component } from "react";
import { connect } from "react-redux";
import BoxDataBody from "./BoxDataBody";
import BoxDataFooter from "./BoxDataFooter";
import BoxDataHeader from "./BoxDataHeader";
export class BoxDataCountry extends Component {
  state = {
    typeData: "data-country",
  };
  render() {
    const { data_country } = this.props;
    return (
      <div className="box-data box-data-country" id="country">
        <div className="background-texture">
          <img src="./images/bx-tx.svg" alt="bx-tx" />
        </div>
        <BoxDataHeader title="<country/>" />
        <BoxDataBody typeData={this.state.typeData} dataCovid={data_country} />
        <BoxDataFooter lastUpdate={data_country._lastUpdate} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data_country: state.country._country,
});
export default connect(mapStateToProps, null)(BoxDataCountry);
