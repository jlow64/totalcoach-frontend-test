import { Box } from '@mui/material';
import { StyledNavbar, NavToolbar, NavMenuItem, ProfileBox } from './styles';
import BookButton from 'components/BookButton';
import Profile from 'components/Profile';

const menuOptions = [
  'Home',
  'Favorites',
  'Lessons',
  'Practice',
  "Coach's exercises",
  'Events',
  'Calendar',
  'Support',
  'Account',
];

const Navbar = () => {
  // Will use the MUI App Bar component and override styles from it.
  // The nav bar has a lot of child elements, so most likely will need to find
  // a layout that fits those amount of menu items
  // Will need to also style some components
  return (
    <StyledNavbar position="sticky">
      <NavToolbar
        sx={{
          height: {
            xs: 'fit-content',
            sm: 'fit-content',
            md: '70px',
          },
        }}
      >
        <Box
          component="img"
          alt="logo"
          src="/total-coach-logo.svg"
          width="120px"
        />
        <Box>
          {menuOptions.map((item) => {
            // To add routing functionality, we can add links for each item to redirect to respective routes
            return <NavMenuItem key={item}>{item}</NavMenuItem>;
          })}
        </Box>
        <ProfileBox
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
          }}
        >
          <BookButton />
          <Profile />
        </ProfileBox>
      </NavToolbar>
    </StyledNavbar>
  );
};

export default Navbar;
