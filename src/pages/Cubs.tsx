import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import { Section } from './Home';
import cubs from '../img/cubs.png';
import { PageLogoGap, PageHeading, Grid, GridItem, Icon, Title, Description } from './Beavers';
import { faSmile, faCampground, faChild, faPaintBrush, faFutbol, faCompass, faHiking, faTree, faRoute } from "@fortawesome/free-solid-svg-icons";
import WhosWho from '../Components/WhosWho';

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
                <CubsIcon icon={faCampground} size="2x" />
                <CubsTitle>Camps and Holidays</CubsTitle>
                <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at </Description>
              </GridItem>
              
              <GridItem>
                <CubsIcon icon={faChild} size="2x" />
                <CubsTitle>Ages 8 - 10 ½</CubsTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an.</Description>
              </GridItem>

              <GridItem>
                <CubsIcon icon={faFutbol} size="2x" />
                <CubsTitle>Games</CubsTitle>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu copiosae</Description>
              </GridItem>
              
              <GridItem>
                <CubsIcon icon={faTree} size="2x" />
                <CubsTitle>Time Outdoors</CubsTitle>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu dissentiet</Description>
              </GridItem>

              <GridItem>
                <CubsIcon icon={faCompass} size="2x" />
                <CubsTitle>Life Skills</CubsTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant accommodare an.</Description>
              </GridItem>

              <GridItem>
                <CubsIcon icon={faRoute} size="2x" />
                <CubsTitle>Working as a pack</CubsTitle>
                <Description>orem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho cubs/>
          </div>
        </Section>

      </PageBodyContainer>
    );
}

export default Cubs;