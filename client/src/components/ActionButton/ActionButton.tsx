import { StyledActionButton } from './style';
/*
To Make this component reusable as possible, taking in an src for the icon
would allow this to be reusable, alongside have a callback prop to allow
for custom onClick events.
*/
type ActionButtonProps = {
  src: string;
  alt?: string;
  onClick?: () => void;
  height?: string | number;
  width?: string | number;
};
const ActionButton = ({
  src,
  alt = '',
  onClick,
  height = '2rem',
  width = '2rem',
}: ActionButtonProps) => {
  return (
    <StyledActionButton
      onClick={onClick}
      src={src}
      alt={alt}
      sx={{ height: height, width: width }}
    />
  );
};

export default ActionButton;
