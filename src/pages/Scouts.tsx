import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import scouts from '../img/scouts.png';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import { Section } from './Home';
import { PageLogoGap, PageHeading, Grid, GridItem, Icon, Title, Description, BadgeLayout, DocumentContainer } from './Beavers';
import { faCampground, faChild,faRoute, faUsers, faSnowboarding, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import WhosWho from '../Components/WhosWho';
import badges from '../img/Badge_Placement_Scouts.jpeg';
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
      top: ${(p:ILogoProps) => `${p.top + 1.5}%`};
      width: 600px;
      left: calc(50% - 300px);
    }

    @media(max-width: 620px) {
      top: ${(p:ILogoProps) => `${p.top + 3}%`};
      width: 400px;
      left: calc(50% - 200px);
    }
    
    @media(max-width: 520px) {
      top: ${(p:ILogoProps) => `${p.top + 3.5}%`};
      width: 80%;
      left: 10%;
    }    
`;

const ScoutsIcon = styled(Icon)`
  color: ${colours.Purple};
`;
const ScoutsTitle = styled(Title)`
  color: #004851;
`;

const Scouts: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="scoutsHero" />
        <PageLogo src={scouts} top={75} />
        <PageLogoGap />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>Each Scout Troop consists of small units of six to eight Scouts called a Patrol, usually led by a Patrol Leader. Outdoor activities feature prominently, with the highlight being camping. Throughout the year, Scouts learn various skills, such as map reading, camp cooking and first aid in preparation for camp. Rock climbing, potholing, gliding, photography and international experiences are just some of the things they get up to.</PageHeading>
            <Grid>
              <GridItem>
                <ScoutsIcon icon={faUsers} size="2x" />
                <ScoutsTitle>Scout Patrols</ScoutsTitle>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu copiosae</Description>
              </GridItem>
              
              <GridItem>
                <ScoutsIcon icon={faChild} size="2x" />
                <ScoutsTitle>Ages 10 ½ - 14</ScoutsTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an.</Description>
              </GridItem>

              <GridItem>
                <ScoutsIcon icon={faCampground} size="2x" />
                <ScoutsTitle>Camping</ScoutsTitle>
                <Description>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at </Description>
              </GridItem>
              
              <GridItem>
                <ScoutsIcon icon={faSnowboarding} size="2x" />
                <ScoutsTitle>Exciting Activities</ScoutsTitle>
                <Description>Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu dissentiet</Description>
              </GridItem>

              <GridItem>
                <ScoutsIcon icon={faGlobeEurope} size="2x" />
                <ScoutsTitle>International Experiences</ScoutsTitle>
                <Description>Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant accommodare an.</Description>
              </GridItem>

              <GridItem>
                <ScoutsIcon icon={faRoute} size="2x" />
                <ScoutsTitle>Advanced Skills</ScoutsTitle>
                <Description>orem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <DocumentContainer>
          <Document name="Parents Guide" description="A Parents Guide to Scouts" filename="ParentsGuidetoScouts.pdf" accent="Purple" />
        </DocumentContainer>

        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho scouts/>
          </div>
        </Section>
        
        <Section id="calendar">
          <div className="wrapper">
            <CalendarLink border="Teal" primary="Teal" secondary="Purple" hover="Teal" />
          </div>
        </Section>

        <NeedParents accent="Purple" />

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

export default Scouts;