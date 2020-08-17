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

interface IProps {
  beavers?: boolean;
  cubs?: boolean;
  scouts?: boolean;
  explorers?: boolean;
}

const WhosWho: FC<IProps> = ({ beavers, cubs, scouts, explorers}: IProps) => {
  return (
    <Container>
      {beavers ? (  
        <>
          <Profile image='FDL_Blue' smallImage name="Louise Dowell" nickname="King Louie" title="Beaver Leader" accent="Blue" />
          <Profile image='FDL_Blue' smallImage name="Andy Francis" nickname="Sgt. Tibbs" title="Beaver Leader" accent="Blue" />
          <Profile image="jessica" name="Jessica Howard" nickname="Bagheera" title="Assistant Beaver Leader" accent="Blue" />
          <Profile image='FDL_Blue' smallImage name="Zoe Gamble" nickname="Kaa" title="Young Leader" accent="Blue" />
        </>
      ) : null}

      {cubs ? (  
        <>
          <Profile image='FDL_Green' smallImage name="Louise Dowell" nickname="King Louie" title="Beaver Leader" accent="Green" />
          <Profile image='FDL_Green' smallImage name="Andy Francis" nickname="Sgt. Tibbs" title="Beaver Leader" accent="Green" />
          <Profile image='FDL_Green' smallImage name="Jessica Howard" nickname="Bagheera" title="Assistant Beaver Leader" accent="Green" />
          <Profile image='FDL_Green' smallImage name="Zoe Gamble" nickname="Kaa" title="Young Leader" accent="Green" />
        </>
      ) : null}

      {scouts ? (  
        <>
          <Profile name="Louise Dowell" nickname="King Louie" title="Beaver Leader" accent="Green" />
          <Profile name="Andy Francis" nickname="Sgt. Tibbs" title="Beaver Leader" accent="Green" />
          <Profile image="jessica" name="Jessica Howard" nickname="Bagheera" title="Assistant Beaver Leader" accent="Green" />
          <Profile name="Zoe Gamble" nickname="Kaa" title="Young Leader" accent="Green" />
        </>
      ) : null}

      {explorers ? (  
        <>
          <Profile name="Louise Dowell" nickname="King Louie" title="Beaver Leader" accent="Green" />
          <Profile name="Andy Francis" nickname="Sgt. Tibbs" title="Beaver Leader" accent="Green" />
          <Profile image="jessica" name="Jessica Howard" nickname="Bagheera" title="Assistant Beaver Leader" accent="Green" />
          <Profile name="Zoe Gamble" nickname="Kaa" title="Young Leader" accent="Green" />
        </>
      ) : null}
    </Container>
  );
}

export default WhosWho;