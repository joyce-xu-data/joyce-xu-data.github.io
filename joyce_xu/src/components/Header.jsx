import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub'; // GitHub icon
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // LinkedIn icon
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // Email icon
import jxlogo from '../images/jxlogo.png';

const pages = ['Projects', 'Blog', 'Resume'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: 'none', md: 'flex' },
              mr: 1,
            }}
            src={jxlogo}
            alt="Joyce Xu"
          />

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Joyce Xu
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s+/g, '')}`} 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="GitHub" color="inherit" component="a" href="https://github.com/joyce-xu-data" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="inherit" component="a" href="https://www.linkedin.com/in/joyce-xu-2141374a" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="Email" color="inherit" component="a" href="mailto:jxucodes@gmail.com">
              <MailOutlineIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: 'inherit', textDecoration: 'none' }}>
                {/* Ensure the Link component wraps the Typography component */}
                <Link 
                  to={`/${page.toLowerCase().replace(/\s+/g, '')}`} 
                  style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <Typography textAlign="center" sx={{ width: '100%' }}>{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
