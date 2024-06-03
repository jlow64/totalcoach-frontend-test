import { ActionIcon, StyledActionButton } from './style';
/*
To Make this component reusable as possible, taking in an src for the icon
would allow this to be reusable, alongside have a callback prop to allow
for custom onClick events.
*/
type ActionButtonProps = {
  src?: string;
  alt?: string;
  text?: string;
  onClick?: () => void;
  height?: string | number;
  width?: string | number;
};
const ActionButton = ({
  src,
  alt = '',
  text = '',
  onClick,
  height = '2rem',
  width = '2rem',
}: ActionButtonProps) => {
  // To overide MUI width/height have to set both the min/max height
  // Adjusted Action button props to take in a text or a src
  return (
    <StyledActionButton
      onClick={onClick}
      variant="contained"
      disableElevation
      width={width}
      height={height}
    >
      {src ? (
        <ActionIcon src={src} alt={alt} width={width} height={height} />
      ) : (
        text
      )}
    </StyledActionButton>
  );
};

export default ActionButton;
