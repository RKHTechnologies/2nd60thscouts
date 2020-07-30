import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const Cubs: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="cubs" />
      </PageBodyContainer>
    );
}

export default Cubs;