import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';
import React from 'react';
import './AppLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { BarChartOutlined, CloudOutlined, NotificationOutlined, AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
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
            <SubMenu key="sub1" icon={<BarChartOutlined />} title="Home">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<CloudOutlined />} title="Map">
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Charts">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<AppstoreOutlined />} title="About">
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
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

export default withRouter(AppLayout);