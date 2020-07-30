import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { useMediaQuery } from 'react-responsive';
import { SharedSettings, colours } from '../Shared/SharedStyles';

const HomeContainer = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: scroll;
`;

const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 10px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    margin-left: 50px;
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

const Home: FC = () => {
    const mobile = useMediaQuery({query: '(max-width: 1400px)'});

    console.log("mobile? ", mobile);

    return (
      <HomeContainer>
        <Hero image="highRopes"/>
        <Section>    
          <div className="wrapper">
            <WelcomeTitle>Welcome to <span>2nd 60th Leicester</span></WelcomeTitle>
            
          </div>
        </Section>
      </HomeContainer>
    );
}

export default Home;