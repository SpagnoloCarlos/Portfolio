import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Tab,
  Tabs,
} from '@mui/material';
// ICONS
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';
import './Header.css';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setValue(parseInt(localStorage.getItem('value')));
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('value', newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#b4c5f0', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => navigate('/')}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate('/my-works')}
                >
                  My Works
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate('/contact')}
                >
                  Contact
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flex: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center'}}
          >
            HI! I'm Carlos
          </Typography>

          <Box  sx={{flex: 1, display: { xs: 'flex', md: 'none' }}}>

          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              indicatorColor="secondary"
            >
              <Tab
                disableFocusRipple={true}
                disableRipple={true}
                label="HOME"
                sx={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '16px',
                  textShadow: '0px 0px 5px rgba(150, 150, 150, 1)',
                }}
                onClick={() => navigate('/')}
              />
              <Tab
                disableFocusRipple={true}
                disableRipple={true}
                label="MY WORKS"
                sx={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '16px',
                  textShadow: '0px 0px 5px rgba(150, 150, 150, 1)',
                }}
                onClick={() => navigate('my-works')}
              />
              <Tab
                disableFocusRipple={true}
                disableRipple={true}
                label="CONTACT"
                sx={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '16px',
                  textShadow: '0px 0px 5px rgba(150, 150, 150, 1)',
                }}
                onClick={() => navigate('contact')}
              />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
