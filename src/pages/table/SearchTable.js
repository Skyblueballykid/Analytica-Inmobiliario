/* eslint jsx-a11y/anchor-is-valid: 0 */
/* eslint no-script-url: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Popconfirm, Form } from 'antd';
import PropTypes from 'prop-types';

import EditableCell from './EditableCell';
import { StyledDiv } from './styles';
import COLUMNS from './columns';

// const { REACT_APP_API } = process.env;

function SearchTable() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get("http://localhost:4000/api/properties?page=1").then(
      res => {
        console.log(res);
        setloading(false);
        setstate(
          res.data.data.map(row => ({
            alcaldia_cumplimiento: row.alcaldia_cumplimiento,
            call_numero: row.call_numero,
            codigo_postal: row.codigo_postal,
            colonia_cumpliemiento: row.colonia_cumpliemiento,
            superficie_construccion: row.superficie_construccion,
            superficie_terreno: row.superficie_terreno,
            valor_suelo: row.valor_suelo,
            valor_unitario_suelo: row.valor_unitario_suelo
          }))
        );
      }
    );
  };


  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <Table
          columns={COLUMNS}
          dataSource={state}
          pagination={{ pageSize: 20 }}
          scroll={{ y: 450 }}
        />
      )}
    </div>
  );
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