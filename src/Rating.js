import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const StyledRating = styled.div`
  background-color: hsl(300, 24%, 96%);
  border-radius: 10px;
  margin-bottom: 0.7em;
  padding: 1em;
  text-align: center;
  @media(min-width: 960px) {
    display: flex;
    margin-bottom: 1.5em;
    &:first-child {
      position: relative;
      right: 100px;
    }
    &:nth-child(2) {
      position: relative;
      right: 50px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
  @media(min-width: 1200px) {
    &:first-child {
      right: 150px;
    }
    &:nth-child(2) {
      right: 75px;
    }
  }
`;

const StarRatingContainer = styled.div`
  margin-bottom: 1em;
  text-align: center;

`;

const RatingText = styled.div`
font-family: "spartan";
font-weight: 700;
color: hsl(300, 43%, 22%);
padding-left: 15px;
padding-right: 40px;
`;

const RatingBlock = ({ text }) => {
  return (
   <StyledRating>
      <StarRatingContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarRatingContainer>
      <RatingText>
        { text }
      </RatingText>
   </StyledRating>
  );
}

export default RatingBlock;
