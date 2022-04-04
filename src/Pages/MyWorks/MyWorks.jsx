import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import Slider from '../../components/Slider/Slider';
import 'react-slideshow-image/dist/styles.css';

import img1 from '../../assets/p1.png';
import img2 from '../../assets/p2.png';
import img3 from '../../assets/p3.png';
import img4 from '../../assets/p4.png';

import dh1 from '../../assets/dh1.png';
import dh2 from '../../assets/dh2.png';
import dh3 from '../../assets/dh3.png';
import dh4 from '../../assets/dh4.png';
import dh5 from '../../assets/dh5.png';
import dh6 from '../../assets/dh6.png';
import dh7 from '../../assets/dh7.png';
import dh8 from '../../assets/dh8.png';
import dh9 from '../../assets/dh9.png';
import dh10 from '../../assets/dh10.png';
import dh11 from '../../assets/dh11.png';
import dh12 from '../../assets/dh12.png';
import dh13 from '../../assets/dh13.png';
import dh14 from '../../assets/dh14.png';

const slider1 = [img1, img2, img3, img4];
const slider2 = [
  dh1,
  dh2,
  dh3,
  dh4,
  dh5,
  dh6,
  dh7,
  dh8,
  dh9,
  dh10,
  dh11,
  dh12,
  dh13,
  dh14,
];

const MyWorks = () => {
  const handleOnIcon = () => {
    window.open('https://github.com/SpagnoloCarlos/Pastry-shop', '_blank');
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '65%', m: 2 }}>
          <Typography
            color="initial"
            textAlign="center"
            sx={{
              m: 1,
              color: '#505172',
              fontWeight: '900',
              fontSize: { xs: '2.4em', sm: '2.4em', md: '3.8em', lg: '3.8em', xl: '3.8em' },
              textShadow: '#b4c5f0 0.1em 0.1em 0.2em',
            }}
          >
            You can view my works here
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '70%', xl: '70%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            color="initial"
            sx={{
              m: 2,
              fontWeight: '800',
              fontSize: {
                xs: '1.4em',
                sm: '1.4em',
                md: '1.9em',
                lg: '1.9em',
                xl: '1.9em',
              },
            }}
          >
            FRONTEND HTML, CSS Y JS
          </Typography>
          <Box sx={{ width: '87%', m: 2 }}>
            <Slider images={slider1} />
          </Box>
          <IconButton
            size="large"
            sx={{ marginBottom: 2, width: '70px', height: '70px' }}
            onClick={handleOnIcon}
          >
            <GitHubIcon
              sx={{ width: '100%', height: 'auto', color: 'black' }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', lg: '70%', xl: '70%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            color="initial"
            sx={{
              m: 2,
              fontWeight: '800',
              fontSize: {
                xs: '1.4em',
                sm: '1.4em',
                md: '1.9em',
                lg: '1.9em',
                xl: '1.9em',
              },
            }}
          >
            FRONTEND + BACKEND
          </Typography>
          <Box sx={{ width: '83%', m: 2 }}>
            <Slider images={slider2} />
          </Box>
          <IconButton
            size="large"
            sx={{ marginBottom: 2, width: '70px', height: '70px' }}
          >
            <GitHubIcon
              sx={{ width: '100%', height: 'auto', color: 'black' }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MyWorks;
