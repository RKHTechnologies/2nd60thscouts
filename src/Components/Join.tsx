import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const Join: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="expedition" />
      </PageBodyContainer>
    );
}

export default Join;