import { StyledButton, ButtonIcon, ButtonText } from './style';
interface BookButtonProps {
  text?: string;
}
const BookButton = ({ text = 'Book Lesson' }: BookButtonProps) => {
  /* 
    We can override the styled button onClick with a custom callback 
  */
  return (
    <StyledButton variant="contained" size="large">
      <ButtonIcon src="/plus.svg" />
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

export default BookButton;
