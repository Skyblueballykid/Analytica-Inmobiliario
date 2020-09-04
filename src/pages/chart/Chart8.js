import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export function Chart8(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    x.paddingRight = 20;

    let data = 
        [
            { anio_construccion:"1930",count: "88"},
            { anio_construccion:"1931",count: "55"},
            { anio_construccion:"1932",count: "78"},
            { anio_construccion:"1933",count: "174"},
            { anio_construccion:"1934",count: "61"},
            { anio_construccion:"1935",count: "156"},
            { anio_construccion:"1936",count: "48"},
            { anio_construccion:"1937",count: "79"},
            { anio_construccion:"1938",count: "193"},
            { anio_construccion:"1939",count: "97"},
            { anio_construccion:"1940",count: "669"},
            { anio_construccion:"1941",count: "173"},
            { anio_construccion:"1942",count: "145"},
            { anio_construccion:"1943",count: "166"},
            { anio_construccion:"1944",count: "168"},
            { anio_construccion:"1945",count: "397"},
            { anio_construccion:"1946",count: "279"},
            { anio_construccion:"1947",count: "382"},
            { anio_construccion:"1948",count: "328"},
            { anio_construccion:"1949",count: "394"},
            { anio_construccion:"1950",count: "1446"},
            { anio_construccion:"1951",count: "429"},
            { anio_construccion:"1952",count: "852"},
            { anio_construccion:"1953",count: "875"},
            { anio_construccion:"1954",count: "756"},
            { anio_construccion:"1955",count: "1030"},
            { anio_construccion:"1956",count: "987"},
            { anio_construccion:"1957",count: "1627"},
            { anio_construccion:"1958",count: "1380"},
            { anio_construccion:"1959",count: "5753"},
            { anio_construccion:"1960",count: "3536"},
            { anio_construccion:"1961",count: "2169"},
            { anio_construccion:"1962",count: "3024"},
            { anio_construccion:"1963",count: "3488"},
            { anio_construccion:"1964",count: "2170"},
            { anio_construccion:"1965",count: "23053"},
            { anio_construccion:"1966",count: "18342"},
            { anio_construccion:"1967",count: "27033"},
            { anio_construccion:"1968",count: "21850"},
            { anio_construccion:"1969",count: "17390"},
            { anio_construccion:"1970",count: "33143"},
            { anio_construccion:"1971",count: "68746"},
            { anio_construccion:"1972",count: "27599"},
            { anio_construccion:"1973",count: "27218"},
            { anio_construccion:"1974",count: "39606"},
            { anio_construccion:"1975",count: "32439"},
            { anio_construccion:"1976",count: "52202"},
            { anio_construccion:"1977",count: "34037"},
            { anio_construccion:"1978",count: "34147"},
            { anio_construccion:"1979",count: "60774"},
            { anio_construccion:"1980",count: "42815"},
            { anio_construccion:"1981",count: "68147"},
            { anio_construccion:"1982",count: "32279"},
            { anio_construccion:"1983",count: "38056"},
            { anio_construccion:"1984",count: "61845"},
            { anio_construccion:"1985",count: "86001"},
            { anio_construccion:"1986",count: "51354"},
            { anio_construccion:"1987",count: "35582"},
            { anio_construccion:"1988",count: "34016"},
            { anio_construccion:"1989",count: "32289"},
            { anio_construccion:"1990",count: "42605"},
            { anio_construccion:"1991",count: "42355"},
            { anio_construccion:"1992",count: "37506"},
            { anio_construccion:"1993",count: "61325"},
            { anio_construccion:"1994",count: "61772"},
            { anio_construccion:"1995",count: "75142"},
            { anio_construccion:"1996",count: "77606"},
            { anio_construccion:"1997",count: "82215"},
            { anio_construccion:"1998",count: "76145"},
            { anio_construccion:"1999",count: "48998"},
            { anio_construccion:"2000",count: "50390"},
            { anio_construccion:"2001",count: "41907"},
            { anio_construccion:"2002",count: "28516"},
            { anio_construccion:"2003",count: "46961"},
            { anio_construccion:"2004",count: "76381"},
            { anio_construccion:"2005",count: "52362"},
            { anio_construccion:"2006",count: "37179"},
            { anio_construccion:"2007",count: "58723"},
            { anio_construccion:"2008",count: "25409"},
            { anio_construccion:"2009",count: "50230"},
            { anio_construccion:"2010",count: "24353"},
            { anio_construccion:"2011",count: "18448"},
            { anio_construccion:"2012",count: "26580"},
            { anio_construccion:"2013",count: "25804"},
            { anio_construccion:"2014",count: "24561"},
            { anio_construccion:"2015",count: "21614"},
            { anio_construccion:"2016",count: "12999"},
            { anio_construccion:"2017",count: "7873"},
            { anio_construccion:"2018",count: "27769"},
            { anio_construccion:"2019",count: "14511"},
        ];


    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "anio_construccion";
    series.dataFields.valueY = "count";
    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}

