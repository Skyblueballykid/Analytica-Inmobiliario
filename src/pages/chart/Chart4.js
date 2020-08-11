import React from 'react';
import styled from 'styled-components';
import VALOR_SUELO from './charts/valor-suelo.png';

const StyledDiv = styled.div`
  min-height: 60vh;
`;

export const Chart4 = () => {
    return(
    <StyledDiv>
    <img src={ VALOR_SUELO } alt="VALOR_SUELO" className="center"/>
    </StyledDiv>
    )
}
