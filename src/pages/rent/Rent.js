import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { Pagination } from 'antd';
import { Card } from 'antd';
import CDMX from './cdmx-logo.png';

const { Meta } = Card;

const StyledDiv = styled.div`
  min-height: 60vh;
`;
  
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  // Carousel component docs
  // https://react-slick.neostack.com/docs/example/lazy-load

const Rent = () => {
    return(


    <StyledDiv>
    <h1>Available Rentals</h1>
    <Row gutter={[8, 8]}>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}><img src={ CDMX } alt="cdmx"></img>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
  </Row>

  <Row gutter={[8, 8]}>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
  </Row>

  <Row gutter={[8, 8]}>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </Col>
  </Row>
  <Pagination
      defaultCurrent={1}
      total={50}
    />
  </StyledDiv>
    )
}

export default Rent;