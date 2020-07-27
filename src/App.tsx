import React from 'react';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>2nd 60th Scouts</AppContainer>
  );
}

export default App;
