import { Layout, Menu, PageHeader } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './AppLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { BarChartOutlined, HomeOutlined, GlobalOutlined, AppstoreOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <PageHeader 
        className="site-page-header"
        title= "Analitica Inmobiliario"/>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Map</Menu.Item>
          <Menu.Item key="3">Charts</Menu.Item>
          <Menu.Item key="4">About</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="/home">
              <Link to="/home">
                <HomeOutlined/>
                <span>Home</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/map">
              <Link to="/map">
                <GlobalOutlined/>
                <span>Map</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/chart">
              <Link to="/chart">
                <BarChartOutlined/>
                <span>Charts</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/about">
              <Link to="/about">
                <AppstoreOutlined />
                <span>About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          </Content>
          <Footer style={{ textAlign: 'center' }}>Analitica Inmobiliario, SA de CV ©2020</Footer>
        </Layout>
      </Layout>
    </Layout>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

export default withRouter(AppLayout);