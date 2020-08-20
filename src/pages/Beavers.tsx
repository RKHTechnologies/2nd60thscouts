import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer, colours, SharedSettings } from '../Shared/SharedStyles';
import { Section } from './Home';
import beavers from '../img/beavers.png';
import badges from '../img/Badge_Placement_Beavers.jpeg';
import WhosWho from '../Components/WhosWho';
import { ImagesDesktop } from '../Shared/ImageLib';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faCampground, faChild, faPaintBrush, faFutbol, faCompass } from "@fortawesome/free-solid-svg-icons";
import Document from '../Components/Document';

interface ILogoProps {
  top: number
}

export const PageHeading = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  margin: 40px auto;
  color: ${colours.dark};
  text-align: center;
`;

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
      top: ${(p:ILogoProps) => `${p.top + 7}%`};
      width: 80%;
      left: 10%;
    }    
`;

export const BadgeLayout = styled.img`
  margin: auto;
  width: 100%;
  max-width: 800px;
`;

export const PageLogoGap = styled.div`
  height: 90px;
`;

const MottoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BeaversCharacters = styled.div`
  width: 500px;
  height: 205px;
  background: url(${ImagesDesktop['characters']});
  background-size: contain;
  background-repeat: no-repeat;

  @media(max-width: 500px) {
    width: 290px;
    height: 119px;
  }
`;

const Motto = styled.div`
  font-size: 4em;
  font-weight: 800;
  font-style: italic;
  color: ${colours.Blue};
  margin-bottom: 20px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2em;
  }
`;





export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${colours.dark};

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 
    'icon title'
    'icon description';
  position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 50px;
  border-radius: 50%;
  margin: 7px 15px 0px;
  color: ${colours.Blue};
  position: absolute;
  right: 0;
`;

export const Title = styled.h2`
  grid-area: title;
  width: 85%;
  margin-top: 18px;
  margin-bottom: 0;
  color: ${colours.Blue};
`;

export const Description = styled.p`
  grid-area: description;
  width: 85%;
  margin-top: 5px;
  line-height: 24px;
`;

export const DocumentContainer = styled.div`
  width: 400px;
  margin: -60px auto 50px;

  @media(max-width: ${SharedSettings.mobile}) {
    width: auto;
    margin-top: -30px;
  }
`;

const Beavers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="beaversHero" />
        <PageLogo src={beavers} top={68} />
        <PageLogoGap />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>Beaver Scouts are our youngest members. They usually meet weekly to take part in a wide range of activities including games, crafts, singing, visits and good turns, along with plenty of outdoor activities. They will also have the opportunity to take part in the fun and excitement of camps and sleepovers. It may be the first time they spend a night away from home so it’s a real adventure for them.</PageHeading>
            <Grid>
              <GridItem>
                <Icon icon={faSmile} size="2x" />
                <Title>Friendly Group</Title>
                <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at </Description>
              </GridItem>
              
              <GridItem>
                <Icon icon={faChild} size="2x" />
                <Title>6 - 8 Year olds</Title>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an.</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faPaintBrush} size="2x" />
                <Title>Arts and Crafts</Title>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu copiosae</Description>
              </GridItem>
              
              <GridItem>
                <Icon icon={faFutbol} size="2x" />
                <Title>Games</Title>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu dissentiet</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faCampground} size="2x" />
                <Title>Camps and Sleepovers</Title>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant accommodare an.</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faCompass} size="2x" />
                <Title>Life Skills</Title>
                <Description>orem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <DocumentContainer>
          <Document name="Parents Guide" description="A Parents Guide to Beavers" filename="ParentsGuidetoBeavers.pdf" accent="Blue" />
        </DocumentContainer>
        
        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho beavers/>
          </div>
        </Section>

        <Section id="uniform">
          <div className="wrapper">
            <BadgeLayout src={badges} />
          </div>
        </Section>
      
        <Section id="characters" fullwidth lastItem>
          <MottoContainer>
            <Motto>"Fun and Friends"</Motto>
            <BeaversCharacters />
          </MottoContainer>
        </Section>
      </PageBodyContainer>
    );
}

export default Beavers;