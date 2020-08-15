import React, { Component, createRef } from "react";
import { Column } from "@ant-design/charts";

export class Chart4 extends Component {
  ref = createRef();
  render() {
    const data = [
      { label: "ALVARO OBREGON", value: 4929141.42 },
      { label: "CUAJIMALPA DE MORELOS", value: 3005422.28 },
      { label: "TLALPAN", value: 2963513.42 },
      { label: "MIGUEL HIDALGO", value: 2572089.46 },
      { label: "COYOACAN", value: 2389482.29 },
      { label: "AZCAPOTZALCO", value: 1857680.66 },
      { label: "XOCHIMILCO", value: 1051157.61 },
      { label: "CUAUHTEMOC", value: 979024.00 },
      { label: "MAGDALENA CONTRERAS", value: 942455.03 },
      { label: "BENITO JUAREZ", value: 870731.91 },
      { label: "GUSTAVO A. MADERO", value: 822336.58 },
      { label: "VENUSTIANO CARRANZA", value: 553415.70 },
      { label: "IZTACALCO", value: 546295.09 },
      { label: "IZTAPALAPA", value: 504941.98 },
      { label: "TLAHUAC", value: 406501.96 },
      { label: "MILPA ALTA", value: 396242.63 },

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