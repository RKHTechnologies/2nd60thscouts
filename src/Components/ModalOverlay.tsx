import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const PageBlur = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  opacity: 45%;
  z-index: 2;
`;

const MainCard = styled.div`
  position: fixed;
  width: 40%;
  height: 50%;
  top: 24%;
  left: 30%;
  z-index: 3;
  background: ${colours.Teal}30;
  /* background: #CFEEEB; */
`;

const Header = styled.div`
  background: ${colours.Teal};
  height: 50px;
  width: 100%;
`;

const ModalOverlay: FC = () => {
  return (
    <>
      <PageBlur />
      <MainCard>
        <Header></Header>
      </MainCard>
    </>
  );
}

export default ModalOverlay;