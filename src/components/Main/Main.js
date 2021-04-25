import React, { Component } from "react";
import BoxDataCountry from "./BoxDataCountry";
import BoxDataGlobal from "./BoxDataGlobal";

export class Main extends Component {
  render() {
    return (
      <main>
        <BoxDataCountry />
        <BoxDataGlobal />
      </main>
    );
  }
}

export default Main;
