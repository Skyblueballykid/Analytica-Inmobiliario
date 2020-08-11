import { Layout, Menu, PageHeader } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './AppLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { BarChartOutlined, HomeOutlined, GlobalOutlined, AppstoreOutlined, MenuUnfoldOutlined,
  MenuFoldOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <PageHeader 
        className="site-page-header"
        title= "Analitica Inmobiliario"/>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link to="/home">
              Home
              </Link>
              </Menu.Item>
          <Menu.Item key="2">Map</Menu.Item>
          <Menu.Item key="3">Charts</Menu.Item>
          <Menu.Item key="4">About</Menu.Item>
        </Menu>
      </Header>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 5 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              }
            )}
          </Header>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: '24px 16px',
              minHeight: 280,
            }}
          >
          {this.props.children}
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