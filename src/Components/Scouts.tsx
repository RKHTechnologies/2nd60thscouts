import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const Scouts: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="scouts" />
      </PageBodyContainer>
    );
}

export default Scouts;