import { Box, Typography, IconButton } from '@mui/material';
// ICONS
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const handleOnIconGitHub = () => {
    window.open('https://github.com/SpagnoloCarlos', '_blank');
  };
  const handleOnIconLinkedin = () => {
    window.open(
      'https://www.linkedin.com/in/carlos-spagnolo-andres/',
      '_blank'
    );
  };

  return (
    <Box
      sx={{
        height: '100px',
        width: '100%',
        bgcolor: '#b4c5f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography textAlign="center" sx={{ fontWeight: '600' }}>
          Contact me!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            sx={{ color: 'black' }}
            onClick={handleOnIconGitHub}
          >
            <GitHubIcon />
            <Typography sx={{ mx: 2 }}>GitHub</Typography>
          </IconButton>

          <IconButton
            size="large"
            sx={{ color: 'black' }}
            onClick={handleOnIconLinkedin}
          >
            <LinkedinIcon />
            <Typography sx={{ mx: 2 }}>Linkedin</Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
