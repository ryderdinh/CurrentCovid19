import React, { Component } from "react";
import { connect } from "react-redux";
import BoxDataBody from "./BoxDataBody";
import BoxDataFooter from "./BoxDataFooter";
import BoxDataHeader from "./BoxDataHeader";
import { getDataGlobal } from "../../actions";
export class BoxDataGlobal extends Component {
  state = {
    type_data: "data-global",
  };
  componentDidMount() {
    this.props.getDataGlobal();
  }

  render() {
    const { data_global } = this.props;
    const lastUpdate = new Date(data_global._lastUpdate).toLocaleDateString();
    return (
      <div className="box-data box-data-global" id="global">
        <div className="background-texture">
          <img src="./images/bx-tx.svg" alt="bx-tx" />
        </div>
        <BoxDataHeader title="global" />
        <BoxDataBody typeData={this.state.type_data} dataCovid={data_global} />
        <BoxDataFooter lastUpdate={lastUpdate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data_global: state.global._global,
});
export default connect(mapStateToProps, { getDataGlobal })(BoxDataGlobal);
