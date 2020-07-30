import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const About: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="obstacle" />
      </PageBodyContainer>
    );
}

export default About;