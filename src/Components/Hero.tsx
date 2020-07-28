import React, { FC } from 'react';
import styled from 'styled-components';
import img from '../img/hero.jpg';

const HeroBanner = styled.div`
    width: 100%;
    height: 80%;
    text-align: center;
    background: #eee;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
`;

const Hero: FC = () => {
    return (
        <HeroBanner />
    );
}

export default Hero;