import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const OurCalendar: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="expeditionHero" />
      </PageBodyContainer>
    );
}

export default OurCalendar;