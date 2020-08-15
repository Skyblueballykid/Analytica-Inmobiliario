import React, { Component, createRef } from "react";
import { Column } from "@ant-design/charts";

const data = require("./treemap.json")

console.log(data)


export class Chart5 extends Component {
  ref = createRef();
  render() {

    const config = {
      data,
      title: {
        visible: true,
        text: "Valor Unitario Suelo Promedio",
      },
      xField: "colonia_cumpliemiento",
      yField: "Averageofvalor_unitario_suelo",
    };

    return <Column {...config} chartRef={this.ref} />;
  }
}
