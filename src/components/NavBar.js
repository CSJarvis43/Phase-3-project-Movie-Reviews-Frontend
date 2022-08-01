import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './NavBar.css'
import { Link as RouterLink } from 'react-router-dom'

const linkBehaviorHome = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} role={undefined} />
));

const linkBehaviorFav = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/favorites" {...props} role={undefined} />
));

const linkBehaviorTop = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/top-ten" {...props} role={undefined} />
));



const NavBar = () => {


  return (
    <AppBar position="static" className='navBar'>
      <Container maxWidth="xl" className='navBarCont'>
        <Toolbar disableGutters className='toolbar'>
          <img src="https://i.imgur.com/mY6lXmi.png" alt="logo" id="logoImg"/>
          <Typography variant="h6" sx={{mx: 1}}>
            MOVIE REPORT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 1, mx: 1, color: 'white', display: 'block' }}
                component={linkBehaviorHome}
              >
                Home
              </Button>
              <Button
                sx={{ my: 1, mx: 1, color: 'white', display: 'block' }}
                component={linkBehaviorFav}
              >
                  Favorites
              </Button>
              <Button
                sx={{ my: 1, mx: 1, color: 'white', display: 'block' }}
                component={linkBehaviorTop}
              >
                  Top Movies
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;