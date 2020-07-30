import React, { FC } from 'react';
import styled from 'styled-components';

import highRopes from '../img/cub-high-ropes.jpg';
import canoes from '../img/canoes.jpg';
import expedition from '../img/explorer-expedition.jpg';

const images = {
    'highRopes': highRopes,
    'canoes': canoes,
    'expedition': expedition,
};

const HeroBanner = styled.div`
    width: 100%;
    height: 80%;
    text-align: center;
    background: #eee;
    background-image: url(${(p: IProps):string => p.imageUrl ?? images['highRopes']});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
`;


interface IProps {
    image?: 'highRopes' | 'canoes' | 'expedition';
    imageUrl?: string;
    small?: boolean;
}

const Hero: FC<IProps> = ({image}: IProps) => {
    return (
        <HeroBanner imageUrl={images[image]} />
    );
}

export default Hero;