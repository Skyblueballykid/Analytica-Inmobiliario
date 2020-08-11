import React from 'react';
import styled from 'styled-components';
import TREEMAP from './charts/treemap.png';

const StyledDiv = styled.div`
  min-height: 60vh;
`;

export const Chart2 = () => {
    return(
    <StyledDiv>
    <img src={ TREEMAP } alt="Treemap" className="center"/>
    </StyledDiv>
    )
}
