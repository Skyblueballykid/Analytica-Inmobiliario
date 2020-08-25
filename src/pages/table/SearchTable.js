/* eslint jsx-a11y/anchor-is-valid: 0 */
/* eslint no-script-url: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { StyledDiv } from "./styles";
import columns from "./columns";

import { Table, Input, Button, Space } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

// const data = [
//   {
//     alcaldia_cumplimiento: "XOCHIMILCO",
//     anio_construccion: "1979.0",
//     call_numero: "Siete Vueltas S. N Cjon",
//     clave_rango_nivel: "2",
//     clave_valor_unitario_suelo: "A160072",
//     codigo_postal: "16080",
//     colonia_cumpliemiento: "BARRIO SAN DIEGO",
//     colonia_predio: "San Diego",
//     fid: "1156094.0",
//     id: 0,
//     instalaciones_especiales: "0",
//     subsidio: "532.297952531872",
//     superficie_construccion: "98.0",
//     superficie_terreno: "164.0",
//     uso_construccion: "H",
//     valor_suelo: "342937.12",
//     valor_unitario_suelo: "2091.08",
//   },
//   {
//     alcaldia_cumplimiento: "XOCHIMILCO",
//     anio_construccion: "1982.0",
//     call_numero: "Dalia 18",
//     clave_rango_nivel: "2",
//     clave_valor_unitario_suelo: "A160072",
//     codigo_postal: "16080",
//     colonia_cumpliemiento: "BARRIO SAN DIEGO",
//     colonia_predio: "Bo Sn Esteban",
//     fid: "1156091.0",
//     id: 1,
//     instalaciones_especiales: "0",
//     subsidio: "489.443571491632",
//     superficie_construccion: "91.0",
//     superficie_terreno: "150.0",
//     uso_construccion: "H",
//     valor_suelo: "313662.0",
//     valor_unitario_suelo: "2091.08",
//   },
//   {
//     alcaldia_cumplimiento: "XOCHIMILCO",
//     anio_construccion: "1986.0",
//     call_numero: "Cjon 7 Vueltas 8",
//     clave_rango_nivel: "2",
//     clave_valor_unitario_suelo: "A160072",
//     codigo_postal: "16080",
//     colonia_cumpliemiento: "BARRIO SAN DIEGO",
//     colonia_predio: "Bo.san Diego",
//     fid: "1156080.0",
//     id: 2,
//     instalaciones_especiales: "0",
//     subsidio: "947.490129592",
//     superficie_construccion: "225.0",
//     superficie_terreno: "90.0",
//     uso_construccion: "H",
//     valor_suelo: "188197.2",
//     valor_unitario_suelo: "2091.08",
//   },
//   {
//     alcaldia_cumplimiento: "XOCHIMILCO",
//     anio_construccion: "1979.0",
//     call_numero: "Cjon las 7 Vueltas 9 Bo San Diego Xoch",
//     clave_rango_nivel: "5",
//     clave_valor_unitario_suelo: "A160072",
//     codigo_postal: "16080",
//     colonia_cumpliemiento: "BARRIO SAN DIEGO",
//     colonia_predio: null,
//     fid: "1156081.0",
//     id: 3,
//     instalaciones_especiales: "1",
//     subsidio: "788.403313386716",
//     superficie_construccion: "275.0",
//     superficie_terreno: "92.0",
//     uso_construccion: "H",
//     valor_suelo: "192379.36",
//     valor_unitario_suelo: "2091.08",
//   },
//   {
//     alcaldia_cumplimiento: "XOCHIMILCO",
//     anio_construccion: "1970.0",
//     call_numero: "Siete Vueltas S. N Cjon",
//     clave_rango_nivel: "2",
//     clave_valor_unitario_suelo: "A160072",
//     codigo_postal: "16080",
//     colonia_cumpliemiento: "BARRIO SAN DIEGO",
//     colonia_predio: "San Diego",
//     fid: "1156078.0",
//     id: 4,
//     instalaciones_especiales: "0",
//     subsidio: "281.808256012",
//     superficie_construccion: "80.0",
//     superficie_terreno: "90.0",
//     uso_construccion: "H",
//     valor_suelo: "188197.2",
//     valor_unitario_suelo: "2091.08",
//   }
// ];

class SearchTable extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: {},
      isLoading: false,
      error: null,
    };
  }

   async componentDidMount() {
     this.setState({ isLoading: true});
     try {
     const result = await axios.get(`http://localhost:4000/api/properties?page=1`)
     
     this.setState({
       data: result.data,
       isLoading: false
     });
     console.log(this.state.data);
    } catch(error) {
      this.setState({
      error,
      isLoading: false
    });
  }
}

  render() {

    const {returnedData, isLoading } = this.state;

    if(isLoading) {
      return<p>Loading...</p>;
    }
    // const data = returnedData.map(id => ({
    //   alcaldia_cumplimiento: id.alcaldia_cumplimiento,
    //   call_numero: id.call_numero,
    //   codigo_postal: id.codigo_postal,
    //   colonia_cumpliemiento: id.colonia_cumpliemiento,
    //   superficie_construccion: id.superficie_construccion,
    //   superficie_terreno: id.superficie_terreno,
    //   valor_suelo: id.valor_suelo,
    //   valor_unitario_suelo: id.valor_unitario_suelo
    // }))

    console.log(returnedData)
    return <Table columns={columns} dataSource={returnedData} />;
  }
}

export default SearchTable;



// MAKE TABLE SEARCHABLE
// getColumnSearchProps = dataIndex => ({
//   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//     <div style={{ padding: 8 }}>
//       <Input
//         ref={node => {
//           this.searchInput = node;
//         }}
//         placeholder={`Search ${dataIndex}`}
//         value={selectedKeys[0]}
//         onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//         onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//         style={{ width: 188, marginBottom: 8, display: 'block' }}
//       />
//       <Space>
//         <Button
//           type="primary"
//           onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//           icon={<SearchOutlined />}
//           size="small"
//           style={{ width: 90 }}
//         >
//           Search
//         </Button>
//         <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//           Reset
//         </Button>
//       </Space>
//     </div>
//   ),
//   filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//   onFilter: (value, record) =>
//     record[dataIndex]
//       ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
//       : '',
//   onFilterDropdownVisibleChange: visible => {
//     if (visible) {
//       setTimeout(() => this.searchInput.select(), 100);
//     }
//   },
//   render: text =>
//     this.state.searchedColumn === dataIndex ? (
//       <Highlighter
//         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//         searchWords={[this.state.searchText]}
//         autoEscape
//         textToHighlight={text ? text.toString() : ''}
//       />
//     ) : (
//       text
//     ),
// });

// handleSearch = (selectedKeys, confirm, dataIndex) => {
//   confirm();
//   this.setState({
//     searchText: selectedKeys[0],
//     searchedColumn: dataIndex,
//   });
// };

// handleReset = clearFilters => {
//   clearFilters();
//   this.setState({ searchText: '' });
// };