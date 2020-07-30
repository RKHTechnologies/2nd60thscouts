import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';
import explorers from '../img/explorers.png';
import { Section } from './Home';

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

const Explorers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="expedition" />
        <PageLogo src={explorers} top={75} />
        <Section>
          <div className="wrapper">

          </div>
        </Section>
      </PageBodyContainer>
    );
}

export default Explorers;