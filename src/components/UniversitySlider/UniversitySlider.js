import { Container,Box,Link } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import './UniversitySlider.scss';
import {sliderSettings} from '../../data/slider-settings';
import { UniversitySliderData } from '../../data/university-slider';

function UniversitySlider() {
  return (
    <section className='uni-slider'>
        <Container maxWidth="lg">
            <h2 className='uni-title'>Popular universities</h2>
            <Slider {...sliderSettings}>
                {
                    UniversitySliderData.length ? 
                        UniversitySliderData.map(university => 
                        <Box className="uni-item">
                            <Box className="uni-img">
                                <Link href="/">
                                    <img src={university.uniImg} alt={university.uniTitle} title={university.uniTitle} />
                                </Link>
                            </Box>
                            <h4>{university.uniTitle}</h4>
                        </Box>
                    ) 
                    : 
                    <Box>
                        There is no university
                    </Box>
                }
            </Slider>
        </Container>
    </section>
  )
}

export default UniversitySlider