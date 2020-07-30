import React, { FC } from 'react';
import styled from 'styled-components';

import highRopes from '../img/cub-high-ropes.jpg';
import canoes from '../img/canoes.jpg';
import expedition from '../img/explorer-expedition.jpg';
import obstacle from '../img/explorer-obstacle-course.jpg';
import beavers from '../img/beavers-and-leader.jpg';
import cubs from '../img/cubs-marshmallow.jpg';
import scouts from '../img/scouts-in-a-row.jpg';

const images = {
    'highRopes': highRopes,
    'canoes': canoes,
    'expedition': expedition,
    'obstacle': obstacle,
    'beavers': beavers,
    'cubs': cubs,
    'scouts': scouts,
};

interface HeroProps {
    imageUrl: string;
}

const HeroBanner = styled.div`
    width: 100%;
    height: 80%;
    text-align: center;
    background: #eee;
    background-image: url(${(p: HeroProps):string => p.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
`;


interface IProps {
    image: 'highRopes' | 'canoes' | 'expedition' | 'obstacle' | 'beavers' | 'cubs' | 'scouts';
}

const Hero: FC<IProps> = ({image}: IProps) => {
    return (
        <HeroBanner imageUrl={images[image]} />
    );
}

export default Hero;