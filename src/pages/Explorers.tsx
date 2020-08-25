import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import explorers from '../img/explorers.png';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import { Section } from './Home';
import { PageLogoGap, PageHeading, Grid, GridItem, Icon, Title, Description, BadgeLayout, DocumentContainer } from './Beavers';
import { faCampground, faChild, faGlobeEurope, faHiking, faMountain, faUsers } from "@fortawesome/free-solid-svg-icons";
import WhosWho from '../Components/WhosWho';
import badges from '../img/Badge_Placement_Explorers.jpeg';
import Document from '../Components/Document';
import Footer from '../Shared/Footer';
import CalendarLink from '../Components/CalendarLink';
import Contact from '../Components/Contact';
import NeedParents from '../Components/NeedParents';

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
  color: ${colours.Red};
`;
const ExplorersTitle = styled(Title)`
  color: #003A82;
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
                <ExplorersTitle>Ages 14 - 18</ExplorersTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an.</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faCampground} size="2x" />
                <ExplorersTitle>Camping</ExplorersTitle>
                <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at </Description>
              </GridItem>
              
              <GridItem>
                <ExplorersIcon icon={faGlobeEurope} size="2x" />
                <ExplorersTitle>International Experiences</ExplorersTitle>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu dissentiet</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faMountain} size="2x" />
                <ExplorersTitle>mountaineering</ExplorersTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant accommodare an.</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faUsers} size="2x" />
                <ExplorersTitle>Leadership Experience</ExplorersTitle>
                <Description>orem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <DocumentContainer>
          <Document name="Parents Guide" description="A Parents Guide to Explorers" filename="ParentsGuidetoExplorers.pdf" accent="Red" />
        </DocumentContainer>

        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho explorers/>
          </div>
        </Section>

        <Section id="calendar">
          <div className="wrapper">
            <CalendarLink border="Red" primary="Red" secondary="Navy" hover="Navy" />
          </div>
        </Section>

        <NeedParents accent="Navy" />

        <Section id="uniform">
          <div className="wrapper">
            <BadgeLayout src={badges} />
          </div>
        </Section>

        <Contact />

        <Footer />
      </PageBodyContainer>
    );
}

export default Explorers;