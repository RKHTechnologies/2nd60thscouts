import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import beavers from '../img/beavers-singing.jpg';
import cubs from '../img/cubs-marshmallow.jpg';
import scouts from '../img/scouts-in-a-row.jpg';
import explorers from '../img/explorer-teamwork-3.jpg';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  grid-template-areas: 'beavers cubs scouts explorers';

  @media(max-width: 1100px) {
    grid-template-areas: 
      'beavers beavers cubs cubs'
      'scouts scouts explorers explorers';
  }
`;

const SectionBox = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background: ${colours.grey60};
  background-size: cover !important; 
  background-position: center !important;
  color: #fff;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: red;
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:after {
    content: '';
    font-size: 0.4em;
    position: absolute;
    margin-top: 40px;
  }

  &:hover {
    transform: scale(1.15);
  }
`;

const Beavers = styled(SectionBox)`
  grid-area: beavers;
  background: url(${beavers});
  
  &:before {
    content: 'Beavers';
    background: ${colours.Blue};
  }
  &:after { content: '6 - 8 yrs'; }
`;

const Cubs = styled(SectionBox)`
  grid-area: cubs;
  background: url(${cubs});
  
  &:before {
    content: 'Cubs';
    background: ${colours.Green};
  }
  &:after { content: '8 - 10 yrs'; }
`;

const Scouts = styled(SectionBox)`
  grid-area: scouts;
  background: url(${scouts});
  
  &:before {
    content: 'Scouts';
    background: ${colours.Purple};
  }
  &:after { content: '10 - 14 yrs'; }
`;

const Explorers = styled(SectionBox)`
  grid-area: explorers;
  background: url(${explorers});
  
  &:before {
    content: 'Explorers';
    background: ${colours.Red};
  }
  &:after { content: '14 - 18 yrs'; }
`;


const ScoutSection: FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Beavers onClick={() => history.push(`${process.env.PUBLIC_URL}/beavers`)}>Beavers</Beavers>
      <Cubs onClick={() => history.push(`${process.env.PUBLIC_URL}/cubs`)}>Cubs</Cubs>
      <Scouts onClick={() => history.push(`${process.env.PUBLIC_URL}/scouts`)}>Scouts</Scouts>
      <Explorers onClick={() => history.push(`${process.env.PUBLIC_URL}/explorers`)}>Explorers</Explorers>
    </Container>
  );
}

export default ScoutSection;