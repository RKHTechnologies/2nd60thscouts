import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
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
    left: calc(50% - 300px);
    width: 600px;

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

const CubsIcon = styled(Icon)`
  color: ${colours.Green};
`;
const CubsTitle = styled(Title)`
  color: ${colours.Green};
`;

const Cubs: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="cubsHero" />
        <PageLogo src={cubs} top={64} /> 
        <PageLogoGap />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>A Cub Scout Pack can have up to 36 Cub Scouts and is split into smaller groups called Sixes. Cubs take part in a wide range of activities designed to be interesting and challenging. A Cub Scout meeting consists of games and activities with plenty of time spent outdoors. Camps and holidays are some of the most memorable events of the year for Cubs.</PageHeading>
            <Grid>
              <GridItem>
                <CubsIcon icon={faSmile} size="2x" />
                <CubsTitle>Friendly Group</CubsTitle>
                <Description>Above all we are happy to help make your move as seamless as possible</Description>
              </GridItem>
              
              <GridItem>
                <CubsIcon icon={faChild} size="2x" />
                <CubsTitle>6 - 8 Year olds</CubsTitle>
                <Description>We'll sort everything out for you, taking away the stress and hassle of your move</Description>
              </GridItem>

              <GridItem>
                <CubsIcon icon={faPaintBrush} size="2x" />
                <CubsTitle>Arts and Crafts</CubsTitle>
                <Description>Our experienced colleagues can provide help with fitting and adjusting packaged items</Description>
              </GridItem>
              
              <GridItem>
                <CubsIcon icon={faFutbol} size="2x" />
                <CubsTitle>Games</CubsTitle>
                <Description>We love to have a good time, and learn to work as a team</Description>
              </GridItem>

              <GridItem>
                <CubsIcon icon={faCampground} size="2x" />
                <CubsTitle>Camps and Sleepovers</CubsTitle>
                <Description>This cost effective solution allows you to simply pay for the time used</Description>
              </GridItem>

              <GridItem>
                <CubsIcon icon={faCompass} size="2x" />
                <CubsTitle>Life Skills</CubsTitle>
                <Description>As a customer driven organisation, your happiness is our priority</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>


      </PageBodyContainer>
    );
}

export default Cubs;