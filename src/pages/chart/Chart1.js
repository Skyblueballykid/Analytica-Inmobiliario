import React, { Component, createRef } from "react";
import { Chart, Interval, useTheme, registerTheme, getTheme, Slider, Tooltip } from 'bizcharts';
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

export function Chart1()  {

    const [theme, setTheme] = useTheme('my-theme');
    return <Chart height={500} autoFit data={data}theme={theme} interactions={['element-active']} padding={[10, 10, 150, 100]} >
    <Interval position="label*value"/>
    <Tooltip showCrosshairs />
    <Slider/>
    </Chart>
  };