import { useEffect, useState } from 'react';
// MATERIAL UI
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
// ICONS
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
// SERVICES
import axios from 'axios';
// STYLES
import styles from './styles';

const fetchGithubData = async ({ setUserData }) => {
  const res = await axios.get('https://api.github.com/users/SpagnoloCarlos');
  setUserData({
    avatar: res.data.avatar_url,
    name: res.data.name,
    user: res.data.login,
    url: res.data.html_url,
    bio: res.data.bio,
  });
};

const ContactCard = () => {
  const [userData, setUserData] = useState({});

  const handleOnIconGitHub = () => {
    window.open('https://github.com/SpagnoloCarlos', '_blank');
  };
  const handleOnIconLinkedin = () => {
    window.open(
      'https://www.linkedin.com/in/carlos-spagnolo-andres/',
      '_blank'
    );
  };

  useEffect(() => {
    fetchGithubData({ setUserData });
  }, []);

  return (
    <Card sx={styles.card}>
      <Box sx={{ marginTop: 2, mx: 2 }}>
        <Typography
          variant="h4"
          textAlign="center"
          color="white"
          sx={{ fontWeight: '600' }}
        >
          GitHub and Linkedin Profile
        </Typography>
      </Box>
      <CardContent sx={styles.cardContent}>
        <Box sx={styles.box_img}>
          <CardMedia
            component="img"
            height="350"
            image={userData.avatar}
            alt="photo"
            sx={styles.cardMedia}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 3,
            mx: 2,
          }}
        >
          <CardContent sx={styles.cardContent_testimonyData}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: '600' }}
            >
              {userData.name}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ marginTop: 2 }}
            >
              {userData.bio}
            </Typography>
          </CardContent>
          <IconButton sx={styles.iconButton} onClick={handleOnIconGitHub}>
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={styles.iconButtonLinkedin}
            onClick={handleOnIconLinkedin}
          >
            <LinkedinIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
