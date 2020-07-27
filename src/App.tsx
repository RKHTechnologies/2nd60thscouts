import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Shared/GlobalStyle';

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

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        2nd 60th Scouts Updated text
      </AppContainer>
    </>
  );
}

export default App;
