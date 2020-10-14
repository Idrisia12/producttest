import React from 'react';
import styled from 'styled-components';
import StarSvg from "../src/images/icon-star1.svg";

const StyledStar = styled.img`
  margin-right: .25em;
`;

const Star = () => {
  return <StyledStar src={StarSvg} alt="star" />
}

export default Star;
