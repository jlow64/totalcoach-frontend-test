import { styled, Grid, Typography, Box } from '@mui/material';

export const HomeContainer = styled(Grid)`
  min-height: calc(100svh - 70px);
`;

export const HomeItems = styled(Grid)`
  /* border: 1px dashed blue; */
  font-family: var(--main-font);
  text-shadow: var(--text-shadow);
  color: var(--dark-grey);
  background: var(--background);
  padding: 2rem;
  font-weight: 400;
`;

export const HeadingText = styled(Typography)`
  font-family: var(--main-font);
  text-shadow: var(--text-shadow);
  color: var(--black);
  font-weight: 600;
`;

export const FeedBox = styled(Box)`
  /* border: 1px solid red; */
`;
