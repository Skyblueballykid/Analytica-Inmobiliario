import React from 'react';
import styled from 'styled-components';
import ALCALDIA_VALOR_UNITARIO from './charts/alcaldia-valor-unitario.png';

const StyledDiv = styled.div`
  min-height: 60vh;
`;

export const Chart1 = () => {
    return(
    <StyledDiv>
    <img src={ ALCALDIA_VALOR_UNITARIO } alt="VALOR_UNITARIO" className="center"/>
    </StyledDiv>
    )
}