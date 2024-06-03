import { styled, Button, Avatar, Typography } from '@mui/material';

export const ButtonIcon = styled(Avatar)`
  height: 1.5rem;
  width: 1.5rem;
`;
export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--turquoise);
  border-radius: 12px;
  height: 90%;
  gap: 0.8rem;
  :hover {
    background: var(--turquoise);
    opacity: 0.8;
  }
`;

export const ButtonText = styled(Typography)`
  font-size: 1rem;
  font-family: var(--main-font);
  color: var(--easy-white);
  font-weight: 500;
  letter-spacing: var(--letter-space);
  text-transform: none;
  white-space: nowrap;
`;
