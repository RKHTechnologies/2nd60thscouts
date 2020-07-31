import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { useMediaQuery } from 'react-responsive';
import { SharedSettings, colours, PageBodyContainer } from '../Shared/SharedStyles';
import skillsForLife from '../img/skillsForLife.png';

export const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 10px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    display: flex;
    /* margin-left: 50px; */
  }
`;

const WelcomeTitle = styled.h1`
  font-size: 5em;
  line-height: 1em;

  span {
    display: block;
    color: ${colours.Teal};
  }
`;

const WelcomeText = styled.p`
  
`;

const SkillsVideo = styled.video`
  width: 80%;
  margin: auto;
`;

const Home: FC = () => {
    const mobile = useMediaQuery({query: '(max-width: 1400px)'});

    console.log("mobile? ", mobile);

    return (
      <PageBodyContainer>
        <Hero image="highRopes"/>
        
        <Section id="welcome">    
          <div className="wrapper">
            <WelcomeTitle>Welcome to <span>2nd 60th Leicester</span></WelcomeTitle>
            <WelcomeText>

            </WelcomeText>
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
      </PageBodyContainer>
    );
}

export default Home;