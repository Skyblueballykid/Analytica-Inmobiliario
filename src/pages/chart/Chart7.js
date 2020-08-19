import React from 'react';
import styled from 'styled-components';
import ANIO_CONSTRUCCION from './charts/anio_construccion.png';

const StyledDiv = styled.div`
  min-height: 60vh;
`;

export const Chart7 = () => {
    return(
    <StyledDiv>
    <img src={ ANIO_CONSTRUCCION } alt="ANIO_CONSTRUCCION" className="center"/>
    </StyledDiv>
    )
}