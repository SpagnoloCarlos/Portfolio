import { Box, Typography, IconButton, Hidden } from '@mui/material';
import { useState, useEffect } from 'react';
import banner from '../../assets/banner2.3.jpg';
// ICONS
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const MainImage = () => {
  const [h, setH] = useState(0);

  useEffect(() => {
    setH(window.innerHeight + 45);
  }, []);

  const handleOnDown = () => {
    window.scrollTo({
      top: h,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '38.3vw',
          backgroundImage: `url(${banner})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Hidden only={['xs', 'sm']}>
          <Box sx={{ marginTop: '2vw', marginLeft: '5vw', marginBottom: 11.5 }}>
            <Typography
              color="white"
              textAlign="center"
              sx={{
                textShadow: 'black 0.1em 0.1em 0.2em',
                fontSize: '4vw',
                fontWeight: '600',
              }}
            >
              Hi! I'm
            </Typography>
            <Typography
              color="white"
              textAlign="center"
              sx={{
                textShadow: 'black 0.1em 0.1em 0.2em',
                fontSize: '4vw',
                fontWeight: '600',
              }}
            >
              Spagnolo Carlos
            </Typography>
          </Box>
        </Hidden>
      </Box>

      <Box
        sx={{
          bgcolor: '#b4c5f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '5vw',
        }}
      >
        <Hidden only={['xs', 'sm']}>
          <IconButton
            onClick={handleOnDown}
            sx={{
              width: '70px',
              height: '70px',
              marginBottom: '0.5vw',
            }}
          >
            <ExpandCircleDownIcon sx={{ width: '100%', height: 'auto' }} />
          </IconButton>
        </Hidden>
      </Box>
    </>
  );
};

export default MainImage;
