import Feed from 'components/Feed';
import { HomeContainer, HomeItems, HeadingText } from './style';
import { Box } from '@mui/material';

const Home = () => {
  // Need to style the components here
  return (
    <HomeContainer container>
      <HomeItems item xs={12}>
        <Box display="flex" flexDirection="column" height="300px" gap={'2rem'}>
          <Box>
            <HeadingText variant="h4">Hello John,</HeadingText>
            Heres what we have for you today.
          </Box>
          <Box>
            <HeadingText variant="h5">Invitation Feed</HeadingText>
            <Feed variant="invitation" />
          </Box>
        </Box>
      </HomeItems>
      <HomeItems height="500px" item xs={12} lg={6.5}>
        <HeadingText variant="h5">Lesson Map</HeadingText>
      </HomeItems>
      <HomeItems height="500px" item xs={12} lg={5.5}>
        <HeadingText variant="h5">Activity feed</HeadingText>
        <Feed variant="activity" />
      </HomeItems>
    </HomeContainer>
  );
};

export default Home;
