import React from "react";
import styled from "styled-components";
import { colours, SharedSettings } from "../Shared/SharedStyles";

interface sectionProps {
  dark?: boolean;
  background?: string;
}

const Section = styled.div`
    background: ${(p: sectionProps) => p.dark ? "#000" : "inherit"};
    background: ${(p: sectionProps) => p.background};
    color: ${(p: sectionProps) => p.dark ? colours.light : "inherit"};
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;

    &#about {
        padding-top: 130px;
    }

    @media(max-width: 1100px) {
        padding: 20px;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 100;
  font-size: 1.6em;
`;

const MainHeader = styled.h1`
  font-weight: 500;
  color: ${colours.light};
  font-size: 3em;
  margin: 0;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2.4em;
    -webkit-text-stroke: 2px ${colours.dark};
  }
`;

const SubHeader = styled.div`
  max-width: 1000px;
  color: ${colours.light};
  margin-bottom: 40px;
  margin-top: 10px;
  font-weight: 500;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 0.8em;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;

  @media(max-width: 1100px) {
    width: 95%;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;

  @media(max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;

const FormItem = styled.input`
  width: 100%;
  height: 50px;
  background: ${colours.light};
  border: 0;
  border-radius: 4px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 0.8em;
  font-weight: 400;

  &::placeholder {
    color: #00A794;
  }
`;

const MultiLineForm = styled.textarea`
  width: 100%;
  height: 120px;
  background: ${colours.light};
  border: 0;
  border-radius: 4px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 14px 20px 0;
  font-size: 0.8em;
  font-weight: 400;

  &::placeholder {
    color: #00A794;
  }
`;

export const SubmitButton = styled.input`
  border-radius: 40px;
  background: ${colours.light};
  color: ${colours.Teal};
  border: none;
  font-size: 0.8em;
  cursor: pointer;
  padding: 14px 90px;
  margin-top: 20px;
  font-weight: 800;

  &:hover {
    color: ${colours.Purple};
    background: ${colours.grey5};
  }
`;

const Contact: React.FC = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);

    let newObject: any = {};
    data.forEach((value, key) => {newObject[key] = value});

    //Not currently used - for future API integration
    let json = JSON.stringify(newObject);
    console.dir(json);

    window.open(
      `mailto:admin@2nd60thscouts.org
        ?subject=${newObject.subject}
        &body=%0D%0A
        Name: ${newObject.name}%0D%0A
        Phone: ${newObject.phone}%0D%0A
        Email: ${newObject.email}%0D%0A%0D%0A
        Subject: ${newObject.subject}%0D%0A
        Message: ${newObject.message}`,
        '_blank'
    );
  }

  return (
    <Section background={colours.Teal}>
        <Container>
          <MainHeader>Contact Us</MainHeader>
          <SubHeader>If you're looking to get involved in scouting, or simply wish to get in contact with us; please enter your message below and we will get back to you as soon as possible</SubHeader>

          <FormContainer onSubmit={handleSubmit}>
            <Column>
              <FormItem placeholder="Name" name="name" />
              <FormItem placeholder="Email" name="email" />
              <FormItem placeholder="Phone" name="phone" />
            </Column>

            <Column>
              <FormItem placeholder="Subject" name="subject" />
              <MultiLineForm placeholder="Your Message" name="message"></MultiLineForm>
            </Column>
            <SubmitButton type="submit" value="Submit" />
          </FormContainer>

        </Container>
    </Section>
  );
};

export default Contact;
