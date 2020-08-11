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
        <h1>
        About Analitica Inmobiliario
        </h1>
  );
};

export default About;
