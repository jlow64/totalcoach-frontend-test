import { styled, Grid, Typography, Box } from '@mui/material';

export const HomeContainer = styled(Grid)`
  min-height: calc(100svh - 70px);
`;

export const HomeItems = styled(Grid)`
  display: flex;
  flex-direction: column;
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
  font-weight: 620;
  letter-spacing: var(--letter-space);
`;

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;
