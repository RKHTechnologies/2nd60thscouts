import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from './Hero';

const HomeContainer = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: scroll;
`;

const Cubs: FC = () => {
    return (
      <HomeContainer>
        <Hero image="cubs" />
      </HomeContainer>
    );
}

export default Cubs;