import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';
import { Section } from './Home';
import cubs from '../img/cubs.png';
import { PageLogoGap, PageHeading, Grid, GridItem, Icon, Title, Description } from './Beavers';
import { faSmile, faCampground, faChild, faPaintBrush, faFutbol, faCompass } from "@fortawesome/free-solid-svg-icons";

interface ILogoProps {
  top: number
}

// To do: 650 width
/* 
  box with 800 width, say 300 height
  position exactly calc(80% - 150px)
  background-image of image
  background contain
*/

export const PageLogo = styled.img`
    position: absolute;
    top: ${(p:ILogoProps) => `${p.top}%`};
    left: calc(50% - 400px);
    width: 800px;

    @media(max-width: 850px) {
      top: ${(p:ILogoProps) => `${p.top + 4}%`};
      width: 600px;
      left: calc(50% - 300px);
    }

    @media(max-width: 620px) {
      top: ${(p:ILogoProps) => `${p.top + 8}%`};
      width: 400px;
      left: calc(50% - 200px);
    }
    
    @media(max-width: 520px) {
      top: ${(p:ILogoProps) => `${p.top + 9}%`};
      width: 80%;
      left: 10%;
    }    
`;

const Cubs: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="cubsHero" />
        <PageLogo src={cubs} top={64} /> 
        <PageLogoGap />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>Beaver Scouts are our youngest members. They usually meet weekly to take part in a wide range of activities including games, crafts, singing, visits and good turns, along with plenty of outdoor activities. They will also have the opportunity to take part in the fun and excitement of camps and sleepovers. It may be the first time they spend a night away from home so it’s a real adventure for them.</PageHeading>
            <Grid>
              <GridItem>
                <Icon icon={faSmile} size="2x" />
                <Title>Friendly Group</Title>
                <Description>Above all we are happy to help make your move as seamless as possible</Description>
              </GridItem>
              
              <GridItem>
                <Icon icon={faChild} size="2x" />
                <Title>6 - 8 Year olds</Title>
                <Description>We'll sort everything out for you, taking away the stress and hassle of your move</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faPaintBrush} size="2x" />
                <Title>Arts and Crafts</Title>
                <Description>Our experienced colleagues can provide help with fitting and adjusting packaged items</Description>
              </GridItem>
              
              <GridItem>
                <Icon icon={faFutbol} size="2x" />
                <Title>Games</Title>
                <Description>We love to have a good time, and learn to work as a team</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faCampground} size="2x" />
                <Title>Camps and Sleepovers</Title>
                <Description>This cost effective solution allows you to simply pay for the time used</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faCompass} size="2x" />
                <Title>Life Skills</Title>
                <Description>As a customer driven organisation, your happiness is our priority</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>


      </PageBodyContainer>
    );
}

export default Cubs;