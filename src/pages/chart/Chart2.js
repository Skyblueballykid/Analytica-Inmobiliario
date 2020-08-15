import React, { Component, createRef } from "react";
import styled from 'styled-components';
import { Treemap } from 'react-vis';


export class Chart2 extends Component {
  render() {
    const myData = {
      "title": "analytics",
      "color": "#12939A",
      "children": [
       {
        "title": "cluster",
        "children": [
         {"title": "AgglomerativeCluster", "color": "#12939A", "size": 39},
         {"title": "CommunityStructure", "color": "#12939A", "size": 38},
         {"title": "HierarchicalCluster", "color": "#12939A", "size": 67},
         {"title": "MergeEdge", "color": "#12939A", "size": 7}
        ]
       },
       {
        "title": "graph",
        "children": [
         {"title": "BetweennessCentrality", "color": "#12939A", "size": 35},
         {"title": "LinkDistance", "color": "#12939A", "size": 57},
         {"title": "MaxFlowMinCut", "color": "#12939A", "size": 78},
         {"title": "ShortestPaths", "color": "#12939A", "size": 59},
         {"title": "SpanningTree", "color": "#12939A", "size": 34}
        ]
       },
       {
        "title": "optimization",
        "children": [
         {"title": "AspectRatioBanker", "color": "#12939A", "size": 70}
        ]
       }
      ]
     }

return <Treemap
title={'My New Treemap'}
width={window.innerWidth}
height={window.innerHeight}
data={myData}
/>;
  }
}


// export class Chart2 extends Component {
//   ref = createRef();
//   render() {
//   const data = { 
//     name: 'root',
//     children: [
//       { label: "MIGUEL HIDALGO", value: 8119.95 },
//       { label: "CUAUHTEMOC", value: 5856.01 },
//       { label: "BENITO JUAREZ", value: 5778.17 },
//       { label: "CUAJIMALPA DE MORELOS", value: 5296.99 },
//       { label: "COYOACAN", value: 3698.84 },
//       { label: "ALVARO OBREGON", value: 3625.2 },
//       { label: "TLALPAN", value: 3286.9 },
//       { label: "VENUSTIANO CARRANZA", value: 3045.59 },
//       { label: "IZTACALCO", value: 2571.29 },
//       { label: "MAGDALENA CONTRERAS", value: 2516.15 },
//       { label: "AZCAPOTZALCO", value: 2493.28 },
//       { label: "GUSTAVO A. MADERO", value: 2277.05 },
//       { label: "IZTAPALAPA", value: 1695.9 },
//       { label: "XOCHIMILCO", value: 1658.76 },
//       { label: "TLAHUAC", value: 1163.6 },
//       { label: "MILPA ALTA", value: 545.91 },
//     ],
//   };

//   processData(data);
//   const config ={ 
//     data,
//     colorField: 'value',
//   };
//   function processData ( data ) {  
//     let sumValue = 0;
//     each(data.children, (d) => {
//       sumValue += d.value;
//     });
//     data.value = sumValue;
//   }
//   return <Treemap {...config} chartRef={this.ref} />;
// }
// }