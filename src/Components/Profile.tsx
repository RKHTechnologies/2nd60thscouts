import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { colours } from '../Shared/SharedStyles';
import FDL from '../img/FDL_Blue.png';

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 
    'pic name'
    'pic nickname'
    'pic title';
  position: relative;
`;

interface ImageProps {
  image?: imageLib;
}

const ProfilePic = styled.div`
  grid-area: pic;
  background-color: ${colours.light};
  background-image: url(${(p: ImageProps) => p.image ? ImagesDesktop[p.image] : FDL });
  background-size: ${(p: ImageProps) => p.image ? 'cover' : '80%' };
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid ${colours.Blue};
  z-index: 1;
`;

const Name = styled.div`
  grid-area: name;
  font-weight: 400;
  font-size: 2em;
  color: ${colours.light};

  background: ${colours.Blue};
  border-radius: 100px;
  margin-left: -158px;
  margin-top: 0px;
  padding-left: 150px;
  z-index: 0;
  display: flex;
  align-items: center;
  max-height: 70px;
`;

const Nickname = styled.div`
  grid-area: nickname;
  font-weight: 400;
  font-size: 1.4em;
`;

const Title = styled.div`
  grid-area: title;
  font-size: 1.4em;
  font-weight: 600;
  margin-top: -30px;
`;

interface IProps {
  image?: imageLib;
  name: string;
  nickname: string;
  title: string;
}

const Profile: FC<IProps> = ({image, name, nickname, title}: IProps) => {
  return (
    <ProfileContainer>
      <ProfilePic image={image} />
      <Name>{name}</Name>
      <Nickname>"{nickname}"</Nickname>
      <Title>{title}</Title>
    </ProfileContainer>
  );
}

export default Profile;