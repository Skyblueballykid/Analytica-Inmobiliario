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
import { Spin } from 'antd';
import API from './api';

// const { REACT_APP_API } = process.env;


class SearchTable extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      searchText: '',
      searchedColumn: '',
      page: '1',
    };
  }

  componentDidMount() {
    this.retrieveProperties();
  }

  handlePageChange = (value) => {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveProperties();
      }
    );
  }

  getRequestParams(page) {
    let params = {};

    if(page) {
      params["page"] = page;
    }

    return params;
  }


    async retrieveProperties() {
    const { page } = this.state;
    const params = this.getRequestParams(page);
    this.setState({ isLoading: true});

    API.getAll(params)
    .then((result) => {
    console.log(result.data)

    this.setState({
      data: result.data.data,
      isLoading: false
    });

   })
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
  
  const { page } = this.state;
  
    return (
      <StyledDiv>
        {this.state.isLoading ? (
          <Spin size="large" tip="Loading..."/>
        ) : (
          <React.Fragment>
          <Table
            columns={columns}
            size={'small'}
            dataSource={this.state.data}
            pagination={ false }
            scroll={{ y: '100vh' }}
          />
          <Pagination
          onChange={this.handlePageChange}
          showQuickJumper
          defaultCurrent={this.state.page}
          total={123919}
          showTotal={total => `${total} Pages Total`}
          showSizeChanger={false}
        />
        </React.Fragment>
        )}
      </StyledDiv>
    );
  }
}

export default SearchTable;

