import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { useMediaQuery } from 'react-responsive';
import { SharedSettings, colours, PageBodyContainer } from '../Shared/SharedStyles';
import skillsForLife from '../img/skillsForLife.png';
import groupImage from '../img/group-of-scouts-in-helmets.jpg';
import { useHistory } from 'react-router-dom';
import ScoutSection from '../Components/ScoutSection';
import JumboCard from '../Shared/JumboCard';
import Footer from '../Shared/Footer';
import Contact from '../Components/Contact';
import CalendarLink from '../Components/CalendarLink';

const mobile = "1100px";

interface SectionProps {
  fullwidth?: boolean;
  lastItem?: boolean;
}

export const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: ${(p: SectionProps) => p.fullwidth ? "20px 0 100px" : "20px 30px 100px"};
  padding-bottom: ${(p: SectionProps) => p.lastItem ? "0 !important" : null};
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: ${mobile}) {
    padding: 20px 0 50px;
  }
`;

const WelcomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas: 
    'title title groupImage'
    'text text groupImage'
    'more more more';

  @media(max-width: ${mobile}) {
    grid-template-areas: 
    'title title title'
    'text text text'
    'groupImage groupImage groupImage'
    'more more more';
  }
`;

const WelcomeTitle = styled.h1`
  grid-area: title;
  font-size: 5em;
  line-height: 1em;
  margin-bottom: 0;

  span {
    display: block;
    color: ${colours.Teal};
  }

  @media(max-width: ${mobile}) { font-size: 3em; }
`;

const WelcomeText = styled.p`
  grid-area: text;
  font-weight: 400;
  font-size: 1.4em;

  @media(max-width: ${mobile}) { font-size: 1em; }
`;

const GroupImage = styled.div`
  grid-area: groupImage;
  margin: 70px;
  background-image: url(${groupImage});
  background-size: cover;
  background-position: center;
  min-height: 200px;
  
  @media(max-width: 1350px) { margin: 10px }
  @media(max-width: ${mobile}) { margin: 0 -2%;  }
`;

const FindOutMore = styled.button`
  grid-area: more;
  width: 300px;
  height: 50px;
  margin: auto;
  border: 0;
  background: ${colours.Green};
  color: #fff;
  font-weight: 600;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    background: ${colours.Green}ad;
  }

  @media(max-width: ${mobile}) {
    width: 100%;
  }
`;



const SkillsVideo = styled.video`
  width: 100%;
  margin: auto;
  display: block;
`;

const Home: FC = () => {
  const history = useHistory();
  const mobile = useMediaQuery({query: '(max-width: 1400px)'});

  console.log("mobile? ", mobile);

  return (
    <PageBodyContainer>
      <Hero image="highRopesHero"/>
      
      <Section id="welcome">    
        <div className="wrapper">
          <WelcomeContainer>
            <WelcomeTitle>Welcome to <span>2nd 60th Leicester</span></WelcomeTitle>
            <WelcomeText>
              Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an.
              <br /><br />
              Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei.
            </WelcomeText>
            <GroupImage />
            <FindOutMore onClick={() => history.push(`${process.env.PUBLIC_URL}/about`)}>Find out more</FindOutMore>
          </WelcomeContainer>
        </div>
      </Section>

      <Section id="sections">
        <div className="wrapper">
          <ScoutSection />
        </div>
      </Section>

      <Section id="calendar">
        <div className="wrapper">
          <CalendarLink border="Teal" primary="Teal" secondary="Purple" hover="Teal" />
        </div>
      </Section>

      <Section id="skillsForLife">
        <div className="wrapper">
          <SkillsVideo 
            poster={skillsForLife} 
            src={`${process.env.PUBLIC_URL}/skills-for-life.mp4`} 
            controls />
        </div>
      </Section>

      <Section id="adultVolunteering">
        <div className="wrapper">
          <JumboCard 
            title="Adult Volunteering" 
            text="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eoscu eum an brute copiosae hendrerit. Eos erant dolorum an."
            buttonText="Join Us"
            link="#joinUs"
            image="leaders"
            colour="Blue"
          />
        </div>
      </Section>

      <Section id="ContactUs" fullwidth lastItem>
        <Contact />
      </Section>

      <Footer />
    </PageBodyContainer>
  );
}

export default Home;