import { Layout, Menu, PageHeader, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './AppLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { BarChartOutlined, TableOutlined, HomeFilled, HomeOutlined, HomeTwoTone, SolutionOutlined, PhoneOutlined, GlobalOutlined, AppstoreOutlined, MenuUnfoldOutlined,
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
          <a target="_blank" href="http://localhost:4000/registration/new">
          <Button key="register">Sign up</Button>
          </a>,
          <a target="_blank" href="http://localhost:4000/session/new">
          <Button key="login" type="primary">
            Login
          </Button>
          </a>,
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

              <Menu.Item key="table">
              <Link to="/table">
                <TableOutlined />
                <span>Table</span>
              </Link>
            </Menu.Item>
        
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
                <span>Valor Unitario Promedio por m2</span>
                </Link>
                </Menu.Item>
              <Menu.Item key="chart3"><Link to="/chart3">
                <span>Valor Unitario Suelo Promedio</span>
                </Link>
                </Menu.Item>
              <Menu.Item key="chart4"><Link to="/chart4">
                <span>Valor Suelo</span>
                </Link>
                </Menu.Item>
            <Menu.Item key="chart5"><Link to="/chart5">
                <span>Valor por Colonia Cumplimiento</span>
                </Link>
                </Menu.Item>
            <Menu.Item key="chart6"><Link to="/chart6">
                <span>Anio Construccion</span>
                </Link>
                </Menu.Item>
            <Menu.Item key="chart7"><Link to="/chart7">
                <span>Anio Construccion Pie</span>
                </Link>
                </Menu.Item>
            <Menu.Item key="chart8"><Link to="/chart8">
                <span>AM Charts</span>
                </Link>
                </Menu.Item>
            </SubMenu>

        </Menu>
      </Header>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 10 }}
          >
          <Menu.Item key="service">
            <Link to="/service">
            <SolutionOutlined />
            <span>Services</span>
            </Link>
            </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">
            <PhoneOutlined />
            <span>Contact</span>
            </Link>
            </Menu.Item>
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