import { BookButtonBox, StyledButton } from './style';
interface BookButtonProps {
  text?: string;
}
const BookButton = ({ text = 'Book Lesson' }: BookButtonProps) => {
  // Need to style the components here
  return (
    <BookButtonBox>
      <StyledButton>{text}</StyledButton>
    </BookButtonBox>
  );
};

export default BookButton;
