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

const About = () => {
  return (
    <StyledDiv>
        <h1>
        About Analitica Inmobiliario
        </h1>
        <Text>Welcome to Analitica Inmobiliario, the premier source for housing price data, analysis and real estate listings in Mexico City.</Text>
    </StyledDiv>
  );
};

export default About;
