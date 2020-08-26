/* eslint jsx-a11y/anchor-is-valid: 0 */
/* eslint no-script-url: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button, Space, Pagination } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { StyledDiv } from './styles';

// const { REACT_APP_API } = process.env;

class SearchTable extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      searchText: '',
      searchedColumn: '',
      minValue: 1,
      maxValue: 9
    };
  }

  // PAGINATION
  handleChange = value => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 9
      });
    } else {
      this.setState({
        minValue: this.state.maxValue,
        maxValue: value * 9
      });
    }
  };

  async componentDidMount() {
    this.setState({ isLoading: true});
    try {
    const result = await axios.get(`http://localhost:4000/api/properties?page=1`)
    console.log(result.data)
    this.setState({
      data: result.data.data,
      isLoading: false
    });
    
   } catch(error) {
     this.setState({
     error,
     isLoading: false
   });
 }
}




// SEARCH
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
  const columns = [
    {
      title: "Alcaldia",
      dataIndex: "alcaldia_cumplimiento",
      key: "alcaldia_cumplimiento",
      ...this.getColumnSearchProps('alcaldia_cumplimiento'),
    },
    {
      title: "Colonia",
      dataIndex: "colonia_cumpliemiento",
      key: "colonia_cumpliemiento",
      ...this.getColumnSearchProps('colonia_cumpliemiento'),
    },
    {
      title: "Calle",
      dataIndex: "call_numero",
      key: "call_numero",
      ...this.getColumnSearchProps('call_numero'),
    },
    {
      title: "Codigo Postal",
      dataIndex: "codigo_postal",
      key: "codigo_postal",
      ...this.getColumnSearchProps('codigo_postal'),
    },
    {
      title: "Superficie Construccion",
      dataIndex: "superficie_construccion",
      key: "superficie_construccion"
    },
    {
      title: "Superficie Terreno",
      dataIndex: "superficie_terreno",
      key: "superficie_terreno"
    },
    {
      title: "Valor Suelo (MXN)",
      dataIndex: "valor_suelo",
      key: "valor_suelo"
    },
    {
      title: "Valor Unitario Suelo (MXN)",
      dataIndex: "valor_unitario_suelo",
      key: "valor_unitario_suelo"
    }
  ];
  
  
    return (
      <StyledDiv>
        {this.state.isLoading ? (
          "Loading..."
        ) : (
          <React.Fragment>
          <Table
            columns={columns}
            dataSource={this.state.data}
            pagination={ false }
            scroll={{ y: '100vh' }}
          />
          <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={5000}
          showSizeChanger={false}
        />
        </React.Fragment>
        )}
      </StyledDiv>
    );
  }
}

export default SearchTable;

