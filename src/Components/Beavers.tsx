import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';
import { Section } from './Home';
import beavers from '../img/beavers.png';

interface ILogoProps {
  top: number
}

export const PageLogo = styled.img`
    position: absolute;
    top: ${(p:ILogoProps) => `${p.top}%`};
    left: calc(50% - 400px);
    width: 800px;

    @media(max-width: 850px) {
      top: ${(p:ILogoProps) => `${p.top + 4}%`};
      width: 600px;
      left: calc(50% - 300px);
    }

    @media(max-width: 620px) {
      top: ${(p:ILogoProps) => `${p.top + 8}%`};
      width: 400px;
      left: calc(50% - 200px);
    }
    
    @media(max-width: 520px) {
      top: ${(p:ILogoProps) => `${p.top + 7}%`};
      width: 80%;
      left: 10%;
    }    
`;

const Beavers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="beavers" />
        <PageLogo src={beavers} top={68} />
        <Section>
          <div className="wrapper">

          </div>
        </Section>
      </PageBodyContainer>
    );
}

export default Beavers;