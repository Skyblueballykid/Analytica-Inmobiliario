import React, { Component, createRef } from "react";
import { Column } from "@ant-design/charts";

export class Chart1 extends Component {
  ref = createRef();
  render() {
    const data = [
      { label: "MIGUEL HIDALGO", value: 8119.95 },
      { label: "CUAUHTEMOC", value: 5856.01 },
      { label: "BENITO JUAREZ", value: 5778.17 },
      { label: "CUAJIMALPA DE MORELOS", value: 5296.99 },
      { label: "COYOACAN", value: 3698.84 },
      { label: "ALVARO OBREGON", value: 3625.2 },
      { label: "TLALPAN", value: 3286.9 },
      { label: "VENUSTIANO CARRANZA", value: 3045.59 },
      { label: "IZTACALCO", value: 2571.29 },
      { label: "MAGDALENA CONTRERAS", value: 2516.15 },
      { label: "AZCAPOTZALCO", value: 2493.28 },
      { label: "GUSTAVO A. MADERO", value: 2277.05 },
      { label: "IZTAPALAPA", value: 1695.9 },
      { label: "XOCHIMILCO", value: 1658.76 },
      { label: "TLAHUAC", value: 1163.6 },
      { label: "MILPA ALTA", value: 545.91 },

    ];

    const config = {
      data,
      forceFit: true,
      padding: 'auto',
      title: {
        visible: true,
        text: "Valor Unitario Suelo",
      },
      xField: "label",
      yField: "value",
      meta: {
    label: {
      alias: 'Alcaldia',
    },
    value: {
      alias: 'Valor Unitario'
    },
  },
  xAxis: {
    visible: false,
grid: {
    visible: false,
},
line: {
    visible: true
},
tickLine: {
     visible: true,
},
label: {
    visible: true,
    autoRotate: true,
    autoHide: true
},
title: {
    visible: true,
    offset: 12,
},
  },
    label: {
      visible: true,
      style: {
        fill: '#000000',
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.6,
      },
    }
  };

    return <Column {...config} chartRef={this.ref} />;
  }
}