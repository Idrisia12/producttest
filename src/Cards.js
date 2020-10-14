import React from 'react';
import styled from 'styled-components';

export const StyledTestimonial = styled.div`
  background-color: hsl(300, 43%, 22%);
  border-radius: 10px;
  color: hsl(0, 0%, 100%);
  margin-bottom: 1em;
  padding: 2em;
  @media (min-width: 960px) {
    margin-bottom: 0;
    &:nth-child(2) {
      position: relative;
      top: 25px;
    }
    &:last-child {
      position: relative;
      top: 50px;
    }
  }
`;

export const Header = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-areas:
    "avatar name"
    "avatar verified";
  grid-template-columns: 30px 1fr;
  margin-bottom: 1.75em;
  @media (min-width: 960px) {
    grid-template-columns: 50px 1fr;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  grid-area: avatar;
  height: 30px;
  width: 30px;
  @media (min-width: 960px) {
    height: 50px;
    width: 50px;
  }
`;

export const Name = styled.div`
  font-size: 12px;
  font-weight: 500;
  grid-area: name;
  margin-bottom: 5px;
  @media (min-width: 960px) {
    font-size: 15px;
    margin-bottom: 0;
  }
`;

export const Verified = styled.div`
  color: hsl(333, 80%, 67%);
  font-size: 11px;
  grid-area: verified;
  @media (min-width: 960px) {
    font-size: 14px;
  }
`;

export const Body = styled.div`
  font-size: 12px;
  line-height: 1.75em;
  @media (min-width: 960px) {
    font-size: 14px;
  }
`;


export const Testimonial = ({ img, name, text }) => {
  return (
    <StyledTestimonial>
      <Header>
        <Image src={img} alt="person" />
        <Name>{ name }</Name>
        <Verified>Verified Buyer</Verified>
      </Header>
      <Body>{ `"${text}"` }</Body>
    </StyledTestimonial>
  );
};

export default Testimonial;
