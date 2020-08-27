import React from 'react';

import styled from 'styled-components';

import { Typography, Popover, Button, Row, Col, Card } from 'antd';

const Title = styled(Typography.Title)`
  font-size: 16px;
`;

const Text = styled(Typography.Text)`
  font-size: 16px;
`;

const StyledDiv = styled.div`
  min-height: 60vh;
`;


const content1 = (
  <div>
    <p>Number of Properties: 180,236</p>
  </div>
);

const content2 = (
  <div>
    <p>Number of Properties: 117,590</p>
  </div>
);

const content3 = (
  <div>
    <p>Number of Properties: 251,934</p>
  </div>
);

const content4 = (
  <div>
    <p>Number of Properties: 173,295</p>
  </div>
);

const content5 = (
  <div>
    <p>Number of Properties: 69,131</p>
  </div>
);

const content6 = (
  <div>
    <p>Number of Properties: 257,316</p>
  </div>
);

const content7 = (
  <div>
    <p>Number of Properties: 258,038</p>
  </div>
);

const content8 = (
  <div>
    <p>Number of Properties: 103,854</p>
  </div>
);

const content9 = (
  <div>
    <p>Number of Properties: 389,890</p>
  </div>
);

const content10 = (
  <div>
    <p>Number of Properties: 42,969</p>
  </div>
);

const content11 = (
  <div>
    <p>Number of Properties: 187,264</p>
  </div>
);

const content12 = (
  <div>
    <p>Number of Properties: 13,071</p>
  </div>
);

const content13= (
  <div>
    <p>Number of Properties: 74,768</p>
  </div>
);

const content14 = (
  <div>
    <p>Number of Properties: 168,260</p>
  </div>
);

const content15 = (
  <div>
    <p>Number of Properties: 123,573</p>
  </div>
);

const content16 = (
  <div>
    <p>Number of Properties: 67,182</p>
  </div>
);


const Home = () => {
    return(
      <StyledDiv>
        <Title>Choose an Alcaldia</Title>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content1} title="ALVARO OBREGON">
        <Button type="secondary">ALVARO OBREGON</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content2} title="AZCAPOTZALCO">
        <Button type="secondary">AZCAPOTZALCO</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content3} title="BENITO JUAREZ">
        <Button type="secondary">BENITO JUAREZ</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content4} title="COYOACAN">
        <Button type="secondary">COYOACAN</Button>
        </Popover>
        </Card>
        </Col>
        </Row>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content5} title="CUAJIMALPA DE MORELOS">
        <Button type="secondary">CUAJIMALPA DE MORELOS</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content6} title="CUAUHTEMOC">
        <Button type="secondary">CUAUHTEMOC</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content7} title="GUSTAVO A. MADERO">
        <Button type="secondary">GUSTAVO A. MADERO</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content8} title="IZTACALCO">
        <Button type="secondary">IZTACALCO</Button>
        </Popover>
        </Card>
        </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content9} title="IZTAPALAPA">
        <Button type="secondary">IZTAPALAPA</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content10} title="MAGDALENA CONTRERAS">
        <Button type="secondary">MAGDALENA CONTRERAS</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content11} title="MIGUEL HIDALGO">
        <Button type="secondary">MIGUEL HIDALGO</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content12} title="MILPA ALTA">
        <Button type="secondary">MILPA ALTA</Button>
        </Popover>
        </Card>
        </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content13} title="TLAHUAC">
        <Button type="secondary">TLAHUAC</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content14} title="TLALPAN">
        <Button type="secondary">TLALPAN</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content15} title="VENUSTIANO CARRANZA">
        <Button type="secondary">VENUSTIANO CARRANZA</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Alcaldia" bordered={true}>
        <Popover content={content16} title="XOCHIMILCO">
        <Button type="secondary">XOCHIMILCO</Button>
        </Popover>
        </Card>
        </Col>
        </Row>

      </StyledDiv>
    )
}

export default Home;