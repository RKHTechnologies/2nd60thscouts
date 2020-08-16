import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';
import scouts from '../img/scouts.png';
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
      top: ${(p:ILogoProps) => `${p.top + 1.5}%`};
      width: 600px;
      left: calc(50% - 300px);
    }

    @media(max-width: 620px) {
      top: ${(p:ILogoProps) => `${p.top + 3}%`};
      width: 400px;
      left: calc(50% - 200px);
    }
    
    @media(max-width: 520px) {
      top: ${(p:ILogoProps) => `${p.top + 3.5}%`};
      width: 80%;
      left: 10%;
    }    
`;

const Scouts: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="scoutsHero" />
        <PageLogo src={scouts} top={75} />
        <Section>
          <div className="wrapper">

          </div>
        </Section>
      </PageBodyContainer>
    );
}

export default Scouts;