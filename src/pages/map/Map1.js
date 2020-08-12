import React, { Component, useState } from 'react';
// import { GoogleMapsOverlay } from '@deck.gl/google-maps';
// import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
// import {GeoJsonLayer, ArcLayer} from 'deck.gl';
// import mapStyles from 'map-styles';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import {MapView, FirstPersonView} from '@deck.gl/core';
import MapGL from 'react-map-gl';

const data = require('./geoshape.json')

console.log(data)

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2t5Ymx1ZWJhbGx5a2lkIiwiYSI6ImNrZGpiemxwdzBkZ2YycXBmaTNjc2xodnAifQ.7ccaRRh9q-TCWLF_ujoYbg'


export class Map1 extends Component {
  constructor(props) {
    super(props);

  this.state = {
      viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 19.4326296,
      longitude: -99.1331785,
      zoom: 10,
      pitch: 50,
      bearing: 0
    },
    geojson: data
  };
}

  render() {
    const {viewport, geojson} = this.state;
  return (
    <div className= "DeckGLMap">
    <MapGL
    {...viewport}
    mapboxApiAccessToken={MAPBOX_TOKEN} 
    mapStyle="mapbox://styles/mapbox/dark-v9"
    >
    <DeckGL
    {...viewport}
    />
    </MapGL>
    </div>
);
}
}



// Viewport settings

// const INITIAL_VIEW_STATE = {
//     latitude: 19.4326296,
//     longitude: -99.1331785,
//     zoom: 10,
//     width: '80vw',
//     height: '80vh',
//     pitch: 30,
//     bearing: 0
//   };





// const scatterplot = () => new ScatterplotLayer({
//     id: 'scatter',
//     data: sourceData,
//     opacity: 0.8,
//     filled: true,
//     radiusMinPixels: 1,
//     radiusMaxPixels: 5,
//     getPosition: d => [d.longitude, d.latitude],
//     getFillColor: d => d.valor_unitario_suelo > 4000 ? [200, 0, 40, 150] : [255, 140, 0 ,100],

//     pickable: true,
//     onHover: ({ object, x, y}) => {
//         const el = document.getElementById('tooltip');
//         if (object) {
//             const {fid, call_numero, valor_unitario_suelo, alcaldia_cumplimiento} = object;
//             el.innerHTML = `<h3>ID: ${fid} </br> Calle: ${call_numero} </br> Alcaldia: ${alcaldia_cumplimiento} </br> Valor: ${valor_unitario_suelo}</h3>`
//             el.style.display = 'block';
//             el.style.opacity = 0.9;
//             el.style.left = x + 'px';
//             el.style.top = y + 'px';
//         } else {
//             el.style.opacity = 0.0;
//         }
//     }
// });



// const hexagon = () => new HexagonLayer({
//     id: 'hex',
//     data: sourceData,
//     getPosition: d => [d.longitude, d.latitude],
//     getElevationWeight: d => (d.valor_unitario_suelo),
//     elevationScale: 100,
//     extruded: true,
//     radius: 16,
//     opacity: 0.6,
//     coverage: 0.88,
//     lowerPercentile: 50
// })

// const layer = new HeatmapLayer({
//     id: 'heatmapLayer',
//     data: sourceData,
//     getPosition: d => [d.longitude, d.latitude],
//     getWeight: d => (d.valor_unitario_suelo * 2),
//     radiusPixels: 80,
//     opacity: 0.3
// });

// export default function Map({data}) {

//     const layers = new ScatterplotLayer({
//         id: 'scatter',
//         data: data,
//         pickable: true,
//         opacity: 0.8,
//         filled: true,
//         radiusScale: 6,
//         radiusMinPixels: 1,
//         radiusMaxPixels: 5,
//         getPosition: d => [[d.longitude, d.latitude]],
//         getFillColor: d => d.valor_unitario_suelo > 4000 ? [200, 0, 40, 150] : [255, 140, 0 ,100],    
//       });

//     return(
//         <DeckGL
//         initialViewState={INITIAL_VIEW_STATE}
//         controller={true}
//         layers={layers}
//         >
//         {/* <MapView id="map" width="50%" controller={true}> */}
//         <StaticMap 
//         reuseMaps
//         mapboxApiAccessToken={MAPBOX_TOKEN} 
//         preventStyleDiffing={true}
//         // mapStyle="mapbox://styles/skyblueballykid/ckdjccblw01jn1iqg9g5w2n6x"
//         mapStyle="mapbox://styles/mapbox/dark-v9" />
//         {/* </MapView> */}
//       </DeckGL>
//     );
// }