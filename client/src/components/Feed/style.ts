import { styled, Box } from '@mui/material';

type FeedContainerProps = {
  variant: 'horizontal' | 'vertical';
  background: 'background' | 'easyWhite';
};

export const FeedContainer = styled(Box)<FeedContainerProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.variant === 'horizontal' ? 'row' : 'column'};
  gap: 2rem;
  height: ${(props) => (props.variant === 'horizontal' ? '100%' : '500px')};
  border-radius: 20px;
  // Custom props to change background depending on the background prop
  background: ${(props) =>
    props.background === 'background'
      ? 'var(--background)'
      : 'var(--light-grey)'};
  overflow: auto;
`;
