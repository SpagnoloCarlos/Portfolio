import { Box, Typography } from '@mui/material';
import ContactCard from '../../components/ContactCard/ContactCard';

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          m: 2,
          minHeight: 'calc(100vh - 100px - 64px)',
        }}
      >
        <Typography
          sx={{
            m: 1,
            color: '#505172',
            fontWeight: '900',
            fontSize: { xs: '2.4em', md: '3.8em', lg: '3.8em', xl: '3.8em' },
            textShadow: '#b4c5f0 0.1em 0.1em 0.2em',
          }}
        >
          Contact
        </Typography>
        <ContactCard />
      </Box>
    </>
  );
};

export default Contact;
