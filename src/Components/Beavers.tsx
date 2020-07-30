import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const Beavers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="beavers" />
      </PageBodyContainer>
    );
}

export default Beavers;