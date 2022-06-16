import { Container,Box } from '@mui/material';
import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="main-footer">
        <Container maxWidth="lg">
            <Box sx={{ textAlign:'center' }}>
                <p className='copyright'>Copyright</p>
            </Box>
        </Container>
    </footer>
  )
}

export default Footer;