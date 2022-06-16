import { Container,Box } from '@mui/material';
import React from 'react';
import './About.scss';
import { aboutData } from '../../data/about-data';
import AboutModal from '../../components/AboutModal/AboutModal';

function About() {
  return (
    <section className='about-page'>
        <Container maxWidth="lg" sx={{textAlign:'center'}}>
          <h1 className='about-title'>{aboutData.title}</h1>
          <Box className="about-content">
              <Box className="about-img">
                <img src={aboutData.imgSrc} alt={aboutData.title} title={aboutData.title} />
              </Box>
              <Box className="about-text">
                {aboutData.text}
              </Box>
          </Box>
          <AboutModal/>
        </Container>
    </section>
  )
}
export default About;