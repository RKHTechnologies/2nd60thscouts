import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import { ImagesDesktop } from '../Shared/ImageLib';

const Container = styled.div`
  background: ${colours.Blue};
  display: grid;
  grid-template-columns: 20% 1fr 30%;
  grid-template-areas: 
    '. title image'
    '. text image';
  padding-top: 20px;
`;

const Title = styled.div`
  grid-area: title;
  width: 100%;
  font-size: 3em;
  color: ${colours.light};
`;

const Text = styled.div`
  grid-area: text;
  font-weight: 400;
  font-size: 1.5em;
  margin: 10px auto 25px;
  color: ${colours.light};
`;

const Bear = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  background-image: url(${ImagesDesktop['bear']});
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const NeedParents: FC = () => {
  return (
    <Container>
      <Title>Parents, we need you</Title>
      <Text>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit eume dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an.</Text>
      <Bear />
    </Container>
  );
};

export default NeedParents;

