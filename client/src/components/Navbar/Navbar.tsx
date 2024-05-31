import { Toolbar, Box, Button } from '@mui/material';
import { StyledNavbar } from './styles';
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
      <Toolbar
        sx={{
          height: '70px',
          justifyContent: 'space-between',
          background: 'var(--easy-white)',
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
            return (
              <Button
                key={item}
                sx={{ color: 'var(--black)', fontFamily: 'var(--main-font)' }}
              >
                {item}
              </Button>
            );
          })}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          color="var(--black)"
        >
          <BookButton />
          <Profile />
        </Box>
      </Toolbar>
    </StyledNavbar>
  );
};

export default Navbar;
