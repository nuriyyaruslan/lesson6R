import { Container } from '@mui/material';
import React from 'react';
import './Contact.scss';
import { Title, Cover, Button, SubmitButton } from '../../components/Button/Button.styles';
import styled from 'styled-components';
import { keyframes, createGlobalStyle } from 'styled-components';

function Contact() {

  const scale = keyframes`
    20%{
      transform:scale(1.1);
    }
    40%{
      transform:scale(1.2);
    }
    60%{
      transform:scale(1.4);
    }
  `
  const Scale = styled.div`
    background:orange;
    color:#212121;
    font-weight:bold;
    animation: ${scale} 3s linear infinite;
    width:100px;
    margin-top:20px;
    padding:20px;
    border-radius:10px;
  `;

  const GlobalStyle = createGlobalStyle`
    button{
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    }
  `
  
  return (
    <Container maxWidth="lg">
      <GlobalStyle/>
      <Cover>
        <Title>Contact</Title>
        <Button type='button' active>This is normal button</Button>
        <SubmitButton type="submit" active>This is submit button</SubmitButton>
        <SubmitButton type="submit" as="a" href="#">This is submit button</SubmitButton>
        <Scale>Animation</Scale>
      </Cover>
    </Container>
  )
}

export default Contact;