import React from 'react';
import './App.css';
import styled  from 'styled-components';
import anne from "../src/images/anne.jpg";
import cotton from "../src/images/colton.jpg";
import irene from "../src/images/irene.jpg";
import top from "../src/images/bg-pattern-top-desktop1.svg";
import bottom from "../src/images/bg-pattern-bottom-desktop1.svg";
import Testimonial from './Cards';
import RatingBlock from './Rating';

import {GlobalStyle, Section, Title, Text, Ratings, Content} from './Style.js'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 30px 30px 0 30px;
`;

const BottomContainer = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    margin-bottom: 50px;
  }
`;

const StyledTitle = styled.text`
  color: hsl(300, 43%, 22%);
  text-align: center;
`;

const TopContainer = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 40% 1fr 40%;
    grid-column-gap: 20px;
    margin-bottom: 5em;
  }
`;

function App() {
  return (
    <body>
    <div className="App">
        <GlobalStyle />
    <Section>

 <TopContainer>

             <Content>
                <Title>10,000+ of our users love our products.</Title>
                <Text>We only provide great products combined with excellent customer service.See what our satisfied customers are saying about our services.</Text>
                </Content>

                <Ratings>
                   <RatingBlock text="Rated 5 Stars in Reviews" />
                   <RatingBlock text="Rated 5 Stars in Report Guru" />
                   <RatingBlock text="Rated 5 Stars in Best Tech" />
                 </Ratings>
</TopContainer>

        <Container>
            <BottomContainer>
              <Testimonial
                img={cotton}
                name="Colton Smith"
                text="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
              />
              <Testimonial
                img={irene}
                name="Irene Roberts"
                text="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
              />
              <Testimonial
                img={anne}
                name="Anne Wallace"
                text="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
              />
            </BottomContainer>
          </Container>

    </Section>
    </div>
    </body>
  );
}

export default App;
