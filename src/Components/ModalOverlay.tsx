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

interface ICardProps {
  open: boolean;
}

const MainCard = styled.div`
  position: fixed;
  transition: all 0.3s ease;
  width: ${(p: ICardProps) => p.open ? "40%" : 0};
  height: ${(p: ICardProps) => p.open ? "50%" : 0};
  top: 24%;
  left: 30%;
  z-index: 3;
  background: #f1f1f1;
`;

const Header = styled.div`
  background: ${colours.Teal};
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  box-sizing: border-box;
  font-size: 2em;
  font-weight: 300;
  position: relative;
`;

const Close = styled.div`
  width: 40px;
  height: 40px;
`;


interface IProps {
  open: boolean;
  title: string;
  close(): void;
}

const ModalOverlay: FC<IProps> = ({ open, title, close }: IProps) => {
  return (
    <>
      {open && <PageBlur />}
      <MainCard open={open}>
        <Header>
          {title}
          <Close onClick={close}>X</Close>
        </Header>
      </MainCard>
    </>
  );
}

export default ModalOverlay;