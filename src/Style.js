import styled from 'styled-components';
import top from "../src/images/bg-pattern-top-desktop1.svg";
import bottom from "../src/images/bg-pattern-bottom-desktop1.svg";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  Body {
    background-image: url(${top}), url(${bottom});
   background-position: left top, right bottom;
   background-repeat: no-repeat;
   background-size: 100% 200px, 100% 200px;
   font-family: 'Spartan', sans-serif;
   font-size: 15px;
   margin: 0;
   padding: 0;
  }

  @media (min-width: 960px) {
   body {
     background-image: url(${top}), url(${bottom});
     background-size: 40% 60%, 40% 80%;
   }
 }
`
export const Wrapper = styled.div`
   font-size: 17.5px;
   background-position: bottom right;
   background-repeat: no-repeat;
`

export const Title = styled.h1`
font-family: 'Spartan', sans-serif;
font-weight: 600;
font-size: 3.5em;
color: hsl(300, 43%, 22%);
`

export const Text = styled.p`
font-family: "spartan";
font-weight: 500;
color: hsl(303, 10%, 53%);
line-height: 150%;
margin-top: 10px;
`

export const Section = styled.div`
padding: 100px;
height: 100vh;
`

export const Content = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
`;

export const Ratings = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-column: 3 / 4;
`;
