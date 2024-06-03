import { styled, AppBar, Toolbar, Box, Button } from '@mui/material';

export const StyledNavbar = styled(AppBar)`
  background: var(--easy-white);
`;

export const NavToolbar = styled(Toolbar)`
  justify-content: space-between;
  background: var(--easy-white);
  gap: 1rem;
  padding: 5px;
`;

export const NavMenuItem = styled(Button)`
  font-family: var(--main-font);
  color: var(--black);
  text-transform: none;
`;

export const ProfileBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  height: 100%;
  padding: 0.2rem;
  gap: 1.5rem;
`;
