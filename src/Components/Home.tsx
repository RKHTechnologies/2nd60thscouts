import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

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
  font-weight: 900;
  font-size: 5em;
`;

const Home: FC = () => {
    return (
      <>
        <AppContainer>2nd 60th Leicester</AppContainer>
      </>
    );
}

export default Home;