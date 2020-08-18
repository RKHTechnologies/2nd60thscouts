import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';

const Documents: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="expeditionHero" />

        <a>test</a>
      </PageBodyContainer>
    );
}

export default Documents;