import { Container, Typography, Box, CardMedia, Hidden } from '@mui/material';
import imageBody from '../../assets/body1.jpg';
import imageBody2 from '../../assets/body2.jpg';

const Body = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          my: 5,
          minHeight: 'calc(100vh - 500px)',
        }}
      >
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            mx: 2,
          }}
        >
          <Typography variant="h2" textAlign="center" sx={{ my: 5 }}>
            About me
          </Typography>
          <Typography variant="h5" color="initial" textAlign="center">
            I am a Full Stack Web Programmer, oriented to the MERN stack. That
            is, for the frontend I have knowledge in React, HTML, CSS,
            Javascript. For the backend I have knowledge in Node, JavaScript and
            Express. And for the non-relational databases I have knowledge in
            MongoDB. In this site you can see the projects I've worked in.
          </Typography>
        </Box>
        <Hidden only={['xs', 'sm']}>
          <Box sx={{ width: '80%', mx: 2 }}>
            <CardMedia
              component="img"
              height="auto"
              width="100%"
              image={imageBody}
              alt="image2"
            />
          </Box>
        </Hidden>
      </Container>
      <Hidden only={['md', 'lg', 'xl']}>
        <Box sx={{ m: 2 }}>
          <CardMedia
            component="img"
            height="auto"
            width="100%"
            image={imageBody2}
            alt="image2"
          />
        </Box>
      </Hidden>
    </>
  );
};

export default Body;
