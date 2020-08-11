import { Layout, Menu, PageHeader, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './AppLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { BarChartOutlined, HomeOutlined, GlobalOutlined, AppstoreOutlined, MenuUnfoldOutlined,
  MenuFoldOutlined, DotChartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
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
        title= "Analitica Inmobiliario"
        extra={[
          <Button key="2">Sign up</Button>,
          <Button key="1" type="primary">
            Login
          </Button>,
        ]}
        />
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link to="/home">
              Home
              </Link>
              </Menu.Item>
          <Menu.Item key="2">For Sale</Menu.Item>
          <Menu.Item key="3">For Rent</Menu.Item>
          <Menu.Item key="4">Services</Menu.Item>
          <Menu.Item key="5">Contact</Menu.Item>
        </Menu>
      </Header>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="/analysis">
              <Link to="/analysis">
                <DotChartOutlined/>
                <span>Analysis</span>
              </Link>
            </Menu.Item>


            <Menu.Item key="/map">
              <Link to="/map">
                <GlobalOutlined/>
                <span>Map</span>
              </Link>
            </Menu.Item>

            <SubMenu key="sub1" icon={<BarChartOutlined />} title="Charts">
              <Menu.Item key="/chart1"><Link to="/chart1">
                Valor Unitario
                </Link>
                </Menu.Item>
              <Menu.Item key="/chart2"><Link to="/chart2">
                Treemap
                </Link>
                </Menu.Item>
              <Menu.Item key="/chart3"><Link to="/chart3">
                Uso Construccion
                </Link>
                </Menu.Item>
              <Menu.Item key="/chart4"><Link to="/chart4">
                Valor Suelo
                </Link>
                </Menu.Item>
            </SubMenu>

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