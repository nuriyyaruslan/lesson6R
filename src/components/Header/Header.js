import { Container,Grid,Link,List,ListItem } from '@mui/material';
import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='main-header'>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Link href="/" className='main-logo'>LOGO</Link>
                </Grid>
                <Grid xs={12} md={6}>
                    <List className="main-nav" sx={{ display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <ListItem> 
                            <NavLink to="/">Home</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="/about">About</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="/universities">Universities</NavLink>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    </header>
  )
}

export default Header;