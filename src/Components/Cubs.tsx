import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';
import { Section } from './Home';
import cubs from '../img/cubs.png';

interface ILogoProps {
  top: number
}

// To do: 650 width

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
      top: ${(p:ILogoProps) => `${p.top + 9}%`};
      width: 80%;
      left: 10%;
    }    
`;

const Cubs: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="cubs" />
        <PageLogo src={cubs} top={64} /> 
        <Section>
          <div className="wrapper">

          </div>
        </Section>
      </PageBodyContainer>
    );
}

export default Cubs;