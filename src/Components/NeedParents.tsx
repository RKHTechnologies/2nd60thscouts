import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { ImagesDesktop } from '../Shared/ImageLib';

const Container = styled.div`
  background: ${colours.Blue};
  display: grid;
  grid-template-columns: 20% 3fr 1fr 15%;
  grid-template-areas: 
    '. title image .'
    '. text image .';
  padding-top: 20px;
  margin-bottom: 40px;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      'title'
      'text'
      'image';
  }
`;

const Title = styled.div`
  grid-area: title;
  width: 100%;
  font-size: 3em;
  color: ${colours.light};

  @media(max-width: ${SharedSettings.mobile}) {
    text-align: center;
    font-size: 2em;
  }
`;

const Text = styled.div`
  grid-area: text;
  font-weight: 400;
  font-size: 1.5em;
  margin: 10px auto 25px;
  color: ${colours.light};

  @media(max-width: ${SharedSettings.mobile}) {
    text-align: center;
    font-size: 1.2em;
    padding: 0 10px;
  }
`;

const Bear = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  background-image: url(${ImagesDesktop['bear']});
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-position-y: bottom;
  background-repeat: no-repeat;

  @media(max-width: ${SharedSettings.mobile}) {
    height: 150px;
  }
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

