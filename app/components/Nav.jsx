import React from 'react';
import Link from 'next/link';
import { Box, Toolbar, AppBar, Typography, Button, IconButton } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 

function Nav() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <BusinessCenterIcon sx={{ fontSize: 24 }} /> {}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            Portafolio Personal
          </Typography>
        </Box>
        <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
          <Button component={Link} href="/"  variant="contained" sx={{ bgcolor: 'black', ml: 2 }}>
            Inicio
          </Button>
          <Button component={Link} href="/crear-producto"  variant="contained" sx={{ bgcolor: 'black', ml: 2 }}>
            Proyecto
          </Button>
          <Button component={Link} href="/ver-producto" variant="contained" sx={{ bgcolor: 'black', ml: 2 }}>
            Contacto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
