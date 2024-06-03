import {
  ExpandIcon,
  ProfileItemsBox,
  ProfileIcon,
  ProfileMenu,
  ProfileName,
  ExpandButton,
} from './style';

// Mock info until API integration
const mockProfile = {
  firstName: 'John',
  lastName: 'Smith',
};

const Profile = () => {
  // Need to style the components here
  // Perhaps there should be an API call here to grab the profile info,
  // maybe with login
  return (
    <ProfileItemsBox>
      <ProfileIcon>
        {mockProfile.firstName.charAt(0) + mockProfile.lastName.charAt(0)}
      </ProfileIcon>
      <ProfileMenu>
        <ProfileName>{mockProfile.firstName}</ProfileName>
        {mockProfile.lastName}
      </ProfileMenu>
      {/* we can create a profile menu popup by overriding the onClick callback*/}
      <ExpandButton variant="contained" disableElevation>
        <ExpandIcon src="/arrow-down.svg" alt="expand profile menu" />
      </ExpandButton>
    </ProfileItemsBox>
  );
};

export default Profile;
