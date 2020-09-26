import React from 'react';

import styled from 'styled-components';

import { Typography, Popover, Button, Row, Col, Card } from 'antd';

import Alcaldia1 from './CDMX-photos/city_mexico_mexico_city.jpg';
import Alcaldia2 from './CDMX-photos/giant-mexican-flag-waves.jpg';
import Alcaldia3 from './CDMX-photos/historic_centre_zocalo_mexico.jpg';
import Alcaldia4 from './CDMX-photos/library_mexico_city_university_0.jpg';
import Alcaldia5 from './CDMX-photos/mexico_calaveritas_calavera_holiday.jpg';
import Alcaldia6 from './CDMX-photos/mexico_city_church_mexico.jpg';
import Alcaldia7 from './CDMX-photos/mexico_city_plaza_square.jpg';
import Alcaldia8 from './CDMX-photos/mexico_city_sky_tourism.jpg';
import Alcaldia9 from './CDMX-photos/mexico_dead_holiday_skull.jpg';
import Alcaldia10 from './CDMX-photos/pexels-genaro-servín-763429.jpg';
import Alcaldia11 from './CDMX-photos/pexels-hana-brannigan-3642718.jpg';
import Alcaldia12 from './CDMX-photos/pexels-javier-cruz-2239844.jpg';
import Alcaldia13 from './CDMX-photos/pexels-javier-cruz-2352159.jpg';
import Alcaldia14 from './CDMX-photos/pexels-rafael-guajardo-604661.jpg';
import Alcaldia15 from './CDMX-photos/pexels-ricardo-esquivel-1573471.jpg';
import Alcaldia16 from './CDMX-photos/volcano-mexica.jpg';





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
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia1" src={ Alcaldia1 } />}
        >
        <Popover content={content1} title="ALVARO OBREGON">
        <Button type="secondary">ALVARO OBREGON</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia2" src={ Alcaldia2 } />}
        >
        <Popover content={content2} title="AZCAPOTZALCO">
        <Button type="secondary">AZCAPOTZALCO</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia3" src={ Alcaldia3 } />}
        >
        <Popover content={content3} title="BENITO JUAREZ">
        <Button type="secondary">BENITO JUAREZ</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia4" src={ Alcaldia4 } />}
        >
        <Popover content={content4} title="COYOACAN">
        <Button type="secondary">COYOACAN</Button>
        </Popover>
        </Card>
        </Col>
        </Row>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia5" src={ Alcaldia5 } />}
        >
        <Popover content={content5} title="CUAJIMALPA DE MORELOS">
        <Button type="secondary">CUAJIMALPA DE MORELOS</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia6" src={ Alcaldia6 } />}
        >
        <Popover content={content6} title="CUAUHTEMOC">
        <Button type="secondary">CUAUHTEMOC</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia7" src={ Alcaldia7 } />}
        >
        <Popover content={content7} title="GUSTAVO A. MADERO">
        <Button type="secondary">GUSTAVO A. MADERO</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia8" src={ Alcaldia8 } />}
        >
        <Popover content={content8} title="IZTACALCO">
        <Button type="secondary">IZTACALCO</Button>
        </Popover>
        </Card>
        </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia9" src={ Alcaldia9 } />}
        >
        <Popover content={content9} title="IZTAPALAPA">
        <Button type="secondary">IZTAPALAPA</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia10" src={ Alcaldia10 } />}
        >
        <Popover content={content10} title="MAGDALENA CONTRERAS">
        <Button type="secondary">MAGDALENA CONTRERAS</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia11" src={ Alcaldia11 } />}
        >
        <Popover content={content11} title="MIGUEL HIDALGO">
        <Button type="secondary">MIGUEL HIDALGO</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia12" src={ Alcaldia12 } />}
        >
        <Popover content={content12} title="MILPA ALTA">
        <Button type="secondary">MILPA ALTA</Button>
        </Popover>
        </Card>
        </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia13" src={ Alcaldia13 } />}
        >
        <Popover content={content13} title="TLAHUAC">
        <Button type="secondary">TLAHUAC</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia14" src={ Alcaldia14 } />}
        >
        <Popover content={content14} title="TLALPAN">
        <Button type="secondary">TLALPAN</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia15" src={ Alcaldia15 } />}
        >
        <Popover content={content15} title="VENUSTIANO CARRANZA">
        <Button type="secondary">VENUSTIANO CARRANZA</Button>
        </Popover>
        </Card>
        </Col>
        <Col span={6}>
        <Card 
        hoverable
        style={{width:200}}
        cover={<img alt="Alcaldia16" src={ Alcaldia16 } />}
        >
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