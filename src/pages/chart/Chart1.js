import React, { Component } from 'react'
import * as d3 from 'd3'

const margin = {top: 20, right: 5, bottom: 20, left: 35};

export class Chart1 extends Component {
  componentDidMount() {
      const data = [
        {label: "MIGUEL HIDALGO", value:	8119.95},
        {label: "CUAUHTEMOC", value:	5856.01},
        {label: "BENITO JUAREZ", value:	5778.17},
        {label: "CUAJIMALPA DE MORELOS", value:	5296.99},
        {label: "COYOACAN", value:	3698.84},
        {label: "ALVARO OBREGON", value:	3625.20},
        {label: "TLALPAN", value:	3286.90},
        {label: "VENUSTIANO CARRANZA", value:	3045.59},
        {label: "IZTACALCO", value:	2571.29},
        {label: "MAGDALENA CONTRERAS", value:	2516.15},
        {label: "AZCAPOTZALCO", value:	2493.28},
        {label: "GUSTAVO A. MADERO", value:	2277.05},
        {label: "IZTAPALAPA", value:	1695.90},
        {label: "XOCHIMILCO", value:	1658.76},
        {label: "TLAHUAC", value:	1163.60},
        {label: "MILPA ALTA", value:	545.91}
      ]
      const values = data.map(value => value.value)
      const labels = data.map(value => value.label)
      this.drawBarChart(values)
      console.log(values)
      console.log(labels)

      const width = 650
      const height = 400
      const xScale = d3.scaleLinear()
      const yScale = d3.scaleBand()
      console.log("xScale", xScale)
      console.log("yScale", yScale)
  }
  drawBarChart(values)  {

const canvasHeight = window.innerHeight 
const canvasWidth = window.innerWidth - 350
const scale = 0.07


const svgCanvas = d3.select(this.refs.canvas)
    .append("svg")
    .attr("width", canvasWidth)
    .attr("height", canvasHeight)
    .attr("margin", margin)
    .style("border", "1px solid black")
    .append("g")
      .attr("transform", "translate(0,30)")

svgCanvas.selectAll("rect")
    .data(values).enter()
        .append("rect")
        .attr("width", canvasWidth/16 - 20)
        .attr("height", (values) => values * scale)
        .attr("fill", "lightgreen")
        .attr("x", (values, iteration) => iteration * 82)
        .attr("y", (values) => canvasHeight - values * scale)

  }
  render() { return <div ref="canvas"></div> }
}

