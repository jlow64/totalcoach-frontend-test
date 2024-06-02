import { styled, Avatar } from '@mui/material';
export const StyledActionButton = styled(Avatar)`
  background: var(--turquoise);
  padding: 0.3rem;
  cursor: pointer;
  transition-duration: 500ms ease;
  &:hover {
    opacity: 0.8;
  }
`;
