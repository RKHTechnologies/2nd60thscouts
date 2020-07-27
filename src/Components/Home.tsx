import React, { FC } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 5em;
`;

// const Test = styled.span`
//   font-size: 2em;
//   color: lightblue;
// `;

const Home: FC = () => {
    return <AppContainer>2nd 60th Home</AppContainer>;
}

export default Home;