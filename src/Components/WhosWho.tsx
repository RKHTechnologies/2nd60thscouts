import React, { FC } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media(max-width: 1250px) {
    grid-gap: 20px;
  }

  @media(max-width: 1100px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const WhosWho: FC = () => {
  return (
    <>
      <Container>
        <Profile name="Louise Dowell" nickname="King Louie" title="Beaver Leader" />
        <Profile name="Andy Francis" nickname="Sgt. Tibbs" title="Beaver Leader" />
        <Profile image="jessica" name="Jessica Howard" nickname="Bagheera" title="Assistant Beaver Leader" />
        <Profile name="Zoe Gamble" nickname="Kaa" title="Young Leader" />
      </Container>
    </>
  );
}

export default WhosWho;