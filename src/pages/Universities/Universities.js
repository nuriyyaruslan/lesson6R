import { Container } from '@mui/material';
import React from 'react';
import UniversityRatesFunc from '../../components/UniversityRates/UniversityRatesFunc';
// import UniversityRates from '../../components/UniversityRates/UniversityRates';
import UniversitySlider from '../../components/UniversitySlider/UniversitySlider';
import './Universities.scss';

function Universities() {
  return (
    <Container maxWidth="lg">
      <section className='universities-page'>
        <h1 className='university-title'>Universities</h1>
        <UniversityRatesFunc/>
        {/* <UniversityRates/> */}
        <UniversitySlider/>
      </section>
    </Container>
  )
}

export default  Universities;