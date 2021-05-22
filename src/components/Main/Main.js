import React, { Component } from "react";
import BoxDataCountry from "./BoxDataCountry";
import BoxDataGlobal from "./BoxDataGlobal";

export class Main extends Component {
  render() {
    return (
      <main>
        <div className="ctn-ctn">
          <BoxDataCountry />
          <BoxDataGlobal />
        </div>
      </main>
    );
  }
}

export default Main;
