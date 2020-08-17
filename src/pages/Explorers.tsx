import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import explorers from '../img/explorers.png';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import { Section } from './Home';
import { PageLogoGap, PageHeading, Grid, GridItem, Icon, Title, Description, BadgeLayout } from './Beavers';
import { faCampground, faChild,faRoute, faSnowboarding, faGlobeEurope, faHiking } from "@fortawesome/free-solid-svg-icons";
import WhosWho from '../Components/WhosWho';
import badges from '../img/Badge_Placement_Explorers.jpeg';

interface ILogoProps {
  top: number
}

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

const ExplorersIcon = styled(Icon)`
  color: ${colours.Purple};
`;
const ExplorersTitle = styled(Title)`
  color: #004851;
`;

const Explorers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="expeditionHero" />
        <PageLogo src={explorers} top={75} />
        <PageLogoGap />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>Explorers are encouraged to lead themselves in deciding the programme and direction of the Unit, with support and guidance from leaders. The section also includes the Young Leaders’ Scheme, where young people are able to take on a leadership role in one of the younger sections. There is wider scope for activities like offshore sailing, campaigning, performing, parascending, mountaineering and expeditions.</PageHeading>
            <Grid>
              <GridItem>
                <ExplorersIcon icon={faHiking} size="2x" />
                <ExplorersTitle>Self Led</ExplorersTitle>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu copiosae</Description>
              </GridItem>
              
              <GridItem>
                <ExplorersIcon icon={faChild} size="2x" />
                <ExplorersTitle>Ages 10 ½ - 14</ExplorersTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an.</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faCampground} size="2x" />
                <ExplorersTitle>Camping</ExplorersTitle>
                <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at </Description>
              </GridItem>
              
              <GridItem>
                <ExplorersIcon icon={faSnowboarding} size="2x" />
                <ExplorersTitle>Exciting Activities</ExplorersTitle>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu dissentiet</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faGlobeEurope} size="2x" />
                <ExplorersTitle>International Experiences</ExplorersTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant accommodare an.</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faRoute} size="2x" />
                <ExplorersTitle>Advanced Skills</ExplorersTitle>
                <Description>orem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho explorers/>
          </div>
        </Section>

        <Section id="uniform">
          <div className="wrapper">
            <BadgeLayout src={badges} />
          </div>
        </Section>

      </PageBodyContainer>
    );
}

export default Explorers;