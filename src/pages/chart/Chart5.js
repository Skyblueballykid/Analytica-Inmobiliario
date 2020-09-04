import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export function Chart5(props) {
  const chart = useRef(null);

    let x = am4core.create("chartdiv", am4charts.XYChart);

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

x.data = data;

let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.tooltip.disabled = false;
categoryAxis.dataFields.category = "label";
categoryAxis.title.text = "Alcaldia";
categoryAxis.renderer.labels.template.fontSize = 6;

let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;
valueAxis.min = 0;
valueAxis.cursorTooltipEnabled = true;
valueAxis.dataFields.value = "value";
valueAxis.title.text = "Value";

let series = x.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "label";

chart.current = x;

return (
<div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
);
}
