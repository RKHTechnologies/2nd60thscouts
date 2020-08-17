import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { colours, Colour } from '../Shared/SharedStyles';

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
  smallImage?: boolean;
  accent: Colour;
}

const ProfilePic = styled.div`
  grid-area: pic;
  background-color: ${colours.light};
  background-image: url(${(p: ImageProps) => p.image ? ImagesDesktop[p.image] : ImagesDesktop['FDL_Purple'] });
  background-size: ${(p: ImageProps) => p.smallImage ? '80%' : 'cover' };
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid ${(p: INameProps) => colours[p.accent]};
  z-index: 1;
`;

interface INameProps {
  accent: Colour;
}

const Name = styled.div`
  grid-area: name;
  font-weight: 400;
  font-size: 2em;
  color: ${colours.light};
  background: ${(p: INameProps) => colours[p.accent]};
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
  accent: Colour;
  smallImage?: boolean;
}

const Profile: FC<IProps> = ({image, name, nickname, title, accent, smallImage}: IProps) => {
  return (
    <ProfileContainer>
      <ProfilePic image={image} accent={accent} smallImage={smallImage} />
      <Name accent={accent}>{name}</Name>
      <Nickname>"{nickname}"</Nickname>
      <Title>{title}</Title>
    </ProfileContainer>
  );
}

export default Profile;