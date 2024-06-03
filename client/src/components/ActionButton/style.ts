import { styled, Button, Avatar } from '@mui/material';
type SizeProps = {
  height: string | number;
  width: string | number;
};
export const StyledActionButton = styled(Button)<SizeProps>`
  border-radius: 50%;
  background: var(--turquoise);
  font-family: var(--main-font);
  min-width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  max-height: ${(props) => props.height};
  cursor: pointer;
  :hover {
    background: var(--turquoise);
    opacity: 0.8;
  }
`;

export const ActionIcon = styled(Avatar)<SizeProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0.3rem;
`;
