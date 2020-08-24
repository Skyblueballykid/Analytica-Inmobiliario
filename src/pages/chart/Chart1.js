import React, { Component, createRef, useEffect, useState } from "react";
import axios from 'axios';
import { Chart, Interval,useTheme,registerTheme,getTheme } from 'bizcharts';
import { Column } from "@ant-design/charts";

registerTheme('my-theme',{
  defaultColor:'#6DC8EC',
  geometries: {
    interval: {
      rect: {
        default: { style: { fill: '#6DC8EC', fillOpacity: 0.95 } },
        active: { style: { stroke: '#5AD8A6', lineWidth: 1 } },
        inactive: { style: { fillOpacity: 0.3, strokeOpacity: 0.3 } },
        selected: {},
      }}}
})


export function Chart1() {
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:4000/api/properties/filter_alcaldia`);
      console.log(res.data);
      setData(res.data);
    };
    fetchData();
  }, []);

  const config = {
    data,
    title: {
      visible: true,
      text: "Valor Unitario Suelo Promedio",
    },
    xField: "alcaldia_cumplimiento",
    yField: "count",
  };

  return <Column {...config} />;
  }
;



