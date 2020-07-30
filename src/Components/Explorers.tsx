import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const Explorers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="expedition" />
      </PageBodyContainer>
    );
}

export default Explorers;