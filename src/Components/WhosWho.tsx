import React, { FC } from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media(max-width: 1250px) {
    grid-gap: 20px;
  }

  @media(max-width: 780px) {
    grid-gap: 10px;
    grid-template-columns: 1fr;
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
          <Profile image='FDL_Green' smallImage name="Susanne Pickering" nickname="..." title="Cub Leader" accent="Green" />
          <Profile image='FDL_Green' smallImage name="Chris Ardington" nickname="..." title="Cub Leader" accent="Green" />
          <Profile image='FDL_Green' smallImage name="Sarah ..." nickname="..." title="Cub Leader" accent="Green" />
          <Profile image='FDL_Green' smallImage name="James Hawthorn" nickname="..." title="Assistant Cub Leader" accent="Green" />
        </>
      ) : null}

      {scouts ? (  
        <>
          <Profile image='FDL_Purple' smallImage name="Steve Dowell" nickname="Skip" title="Scout Leader" accent="Purple" />
          <Profile image='FDL_Purple' smallImage name="Andy Francis" nickname="..." title="Scout Leader" accent="Purple" />
          <Profile image='FDL_Purple' smallImage name="Chris Ardington" nickname="..." title="Scout Leader" accent="Purple" />
          <Profile image='FDL_Purple' smallImage name="James Hawthorn" nickname="..." title="Assistant Scout Leader" accent="Purple" />
        </>
      ) : null}

      {explorers ? (  
        <>
          <Profile image='FDL_Red' smallImage name="Jacob Illston" nickname="..." title="Explorer Leader" accent="Red" />
          <Profile image='FDL_Red' smallImage name="Rhys Howard" nickname="..." title="Explorer Leader" accent="Red" />
        </>
      ) : null}
    </Container>
  );
}

export default WhosWho;