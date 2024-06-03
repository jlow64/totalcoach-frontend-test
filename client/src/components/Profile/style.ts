import { styled, Avatar, Box, Typography, Button } from '@mui/material';

export const ProfileItemsBox = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

export const ProfileIcon = styled(Avatar)`
  color: var(--black);
  font-weight: 700;
`;

export const ProfileMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
`;

export const ProfileName = styled(Typography)`
  font-family: var(--main-font);
  font-weight: 700;
  letter-spacing: var(--letter-space);
`;

export const ExpandButton = styled(Button)`
  min-height: 2rem;
  max-height: 2rem;
  min-width: 2rem;
  max-width: 2rem;
  border-radius: 50%;
  background: var(--easy-white);
  :hover {
    background: var(--light-grey);
  }
`;

export const ExpandIcon = styled(Avatar)`
  height: 2rem;
  width: 2rem;
`;
