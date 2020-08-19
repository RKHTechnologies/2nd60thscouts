import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import { Section } from './Home';
import styled from 'styled-components';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Document from '../Components/Document';

const TextOverlay = styled.div`
  font-size: 6vw;
  font-weight: 400;
  width: 100%;
  height: 65%;
  color: ${colours.light};
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.15);
`;

const DocumentsGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const GroupHeader = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 2em;
  font-weight: 400;
`;


const Documents: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="highRopesHero" small />
        <TextOverlay>Useful Documents</TextOverlay>

        <Section id="Documents">
          <div className="wrapper">

            <DocumentsGroup>
              <GroupHeader>Example Forms</GroupHeader>
              <Document name="Document 1" description="I'm a file description" filename="PDFtest.pdf" accent="Blue" />
              <Document name="Scouts Kit List" description="I'm a file description" filename="PDFtest.pdf" accent="Blue" />
              <Document name="Test Item" description="I'm a file description" filename="PDFtest2.pdf" accent="Red" />
              <Document name="Order Form" description="I'm a file description" filename="PDFtest.pdf" accent="Blue" />
            </DocumentsGroup>

          </div>
        </Section>


      </PageBodyContainer>
    );
}

export default Documents;