import React from 'react';
import styled from 'styled-components';
import USO_CONSTRUCCION from './charts/uso-construccion.png';

const StyledDiv = styled.div`
  min-height: 60vh;
`;

export const Chart3 = () => {
    return(
    <StyledDiv>
    <img src={ USO_CONSTRUCCION } alt="USO_CONSTRUCCION" className="center"/>
    </StyledDiv>
    )
}