import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import Hero from './Hero';

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #bbb;
  color: ${colours.Purple};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 900;
  font-size: 5em;
`;

const HomeContainer = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: scroll;
`;

const Home: FC = () => {
    return (
      <HomeContainer>
        <Hero />
      </HomeContainer>
    );
}

export default Home;