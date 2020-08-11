import React from 'react';

import styled from 'styled-components';

import { Typography } from 'antd';
// const { Title as BaseTitle, Text as BaseText } = Typography;

const Title = styled(Typography.Title)`
  font-size: 16px;
`;

const Text = styled(Typography.Text)`
  font-size: 16px;
`;

const StyledDiv = styled.div`
  min-height: 60vh;
`;

const Home = () => {
    return(
    <StyledDiv>
    <Title level={4}>Home</Title>
    <Text>Welcome to Analitica Inmobiliario, the premier source for housing price data, analysis and real estate listings in Mexico City.</Text>
    </StyledDiv>
    )
}

export default Home;