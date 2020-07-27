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

const Test = styled.span`
  font-size: 2em;
  color: lightblue;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        2nd 60th Scouts Revert <Test>Testing text</Test>
      </AppContainer>
    </>
  );
}

export default App;
