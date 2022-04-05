import { Box } from '@mui/material';
import Body from '../../components/Body/Body';
import MainImage from '../../components/MainImage/MainImage';

const Home = () => {
  return (
    <Box sx={{minHeight: 'calc(100vh - 100px - 64px)'}}>
      <MainImage />
      <Body />
    </Box>
  );
};

export default Home;
