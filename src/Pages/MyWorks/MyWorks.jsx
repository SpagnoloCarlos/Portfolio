import { Box, Typography } from '@mui/material';

const MyWorks = () => {
  return (
    <Box>
      <Typography variant="h2" color="initial" textAlign="center">
        You can view my work here
      </Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box>
          <Typography variant="h6" color="initial">
            FRONTEND HTML, CSS Y JS
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="initial">
            FRONTEND + BACKEND h
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyWorks;
