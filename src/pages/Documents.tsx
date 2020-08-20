import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer, colours, SharedSettings } from '../Shared/SharedStyles';
import { Section } from './Home';
import styled from 'styled-components';
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

const GroupContainer = styled.div`
  width: 100%;
  display: Grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;

  @media(max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

const DocumentsGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media(max-width: 660px) {
    grid-template-columns: 1fr;
  }
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

            <GroupContainer>
              <DocumentsGroup>
                <GroupHeader>Forms</GroupHeader>
                <Document name="Membership Form" description="Fill in to sign up" filename="MembershipForm.pdf" accent="Red" />
                <Document name="Order Form" description="Form for Hoodies &amp; Polos" filename="OrderForm.pdf" accent="Red" />
                <Document name="Gift Aid" description="Form for parents" filename="GiftAid.pdf" accent="Red" />
                {/* <Document name="Order Form" description="I'm a file description" filename="PDFtest.pdf" accent="Red" /> */}
              </DocumentsGroup>
              
              <DocumentsGroup>
                <GroupHeader>Parents Guides</GroupHeader>
                <Document name="Beavers Guide" description="A Parents Guide to Beavers" filename="ParentsGuidetoBeavers.pdf" accent="Blue" />
                <Document name="Cubs Guide" description="A Parents Guide to Cubs" filename="ParentsGuidetoCubs.pdf" accent="Blue" />
                <Document name="Scouts Guide" description="A Parents Guide to Scouts" filename="ParentsGuidetoScouts.pdf" accent="Blue" />
                <Document name="Explorers Guide" description="A Parents Guide to Explorers" filename="ParentsGuidetoExplorers.pdf" accent="Blue" />
              </DocumentsGroup>
            </GroupContainer>
          </div>
        </Section>


      </PageBodyContainer>
    );
}

export default Documents;