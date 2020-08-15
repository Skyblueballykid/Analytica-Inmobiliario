import { Layout, Menu, PageHeader, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './AppLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { BarChartOutlined, HomeFilled, HomeOutlined, HomeTwoTone, SolutionOutlined, PhoneOutlined, GlobalOutlined, AppstoreOutlined, MenuUnfoldOutlined,
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
          <Button key="register">Sign up</Button>,
          <Button key="login" type="primary">
            Login
          </Button>,
        ]}
        />
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link to="/home">
              {/* <HomeFilled /> */}
              Home
              </Link>
              </Menu.Item>
          <Menu.Item key="sale">
            <Link to="/sale">
            <HomeOutlined />
            For Sale
            </Link>
            </Menu.Item>
          <Menu.Item key="rent">
            <Link to="/rent">
            <HomeFilled />
            For Rent
            </Link>
            </Menu.Item>
          <Menu.Item key="service">
            <Link to="/service">
            <SolutionOutlined />
            Services
            </Link>
            </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">
            <PhoneOutlined />
            Contact
            </Link>
            </Menu.Item>
        </Menu>
      </Header>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="analysis">
              <Link to="/analysis">
                <DotChartOutlined/>
                <span>Analysis</span>
              </Link>
            </Menu.Item>

            <SubMenu key="sub1" icon={<GlobalOutlined />} title="Maps">
            <Menu.Item key="map1"><Link to="/map1">
                <span>Heat Map</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="map2"><Link to="/map2">
                <span>Scatter Plot Map</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="map3"><Link to="/map3">
                <span>Kepler Heat Map</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="map4"><Link to="/map4">
                <span>Kepler Live Map</span>
              </Link>
            </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<BarChartOutlined />} title="Charts">
              <Menu.Item key="chart1"><Link to="/chart1">
                <span>Valor Unitario</span>
                </Link>
                </Menu.Item>
              <Menu.Item key="chart2"><Link to="/chart2">
                Treemap
                </Link>
                </Menu.Item>
              <Menu.Item key="chart3"><Link to="/chart3">
                Uso Construccion
                </Link>
                </Menu.Item>
              <Menu.Item key="chart4"><Link to="/chart4">
                Valor Suelo
                </Link>
                </Menu.Item>
            <Menu.Item key="chart5"><Link to="/chart5">
                Line Chart
                </Link>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="about">
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