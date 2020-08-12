import React from 'react';
import styled from 'styled-components';
import KEPLER_HEAT_MAP from './kepler-heat-map.jpeg';

const StyledDiv = styled.div`
  min-height: 60vh;
`;

export const Map3 = () => {
    return(
    <StyledDiv>
    <img src={ KEPLER_HEAT_MAP } alt="VALOR_UNITARIO" className="center"/>
    </StyledDiv>
    )
}