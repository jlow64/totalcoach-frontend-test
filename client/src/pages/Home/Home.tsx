import Feed from 'components/Feed';
import { HomeContainer, HomeItems, HeadingText, FlexBox } from './style';

const Home = () => {
  // Need to style the components here
  return (
    <HomeContainer container>
      <HomeItems item xs={12} gap="2rem">
        <FlexBox height="330px" gap="2rem">
          <FlexBox>
            <HeadingText variant="h4">Hello John,</HeadingText>
            Heres what we have for you today.
          </FlexBox>
          <FlexBox height="100%" gap="1rem">
            <HeadingText variant="h5">Invitation Feed</HeadingText>
            <Feed
              apiSource="invitation"
              variant="horizontal"
              background="background"
            />
          </FlexBox>
        </FlexBox>
      </HomeItems>
      <HomeItems item xs={12} lg={6.5}>
        <HeadingText variant="h5">Lesson Map</HeadingText>
      </HomeItems>
      <HomeItems item xs={12} lg={5.5} gap="1rem">
        <HeadingText variant="h5" marginLeft="1.5rem">
          Activity feed
        </HeadingText>
        <Feed apiSource="activity" variant="vertical" background="easyWhite" />
      </HomeItems>
    </HomeContainer>
  );
};

export default Home;
