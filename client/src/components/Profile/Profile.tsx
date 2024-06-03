import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'src/api';
import {
  ExpandIcon,
  ProfileItemsBox,
  ProfileIcon,
  ProfileMenu,
  ProfileName,
  ExpandButton,
} from './style';
import { Skeleton } from '@mui/material';

const Profile = () => {
  // Need to style the components here
  const { isLoading, data } = useQuery({
    queryKey: ['Profile'],
    queryFn: getProfile,
  });

  return !data || isLoading ? (
    <Skeleton variant="rounded" animation="wave" width="100%" height="100%" />
  ) : (
    <ProfileItemsBox>
      <ProfileIcon>
        {data.firstName.charAt(0) + data.lastName.charAt(0)}
      </ProfileIcon>
      <ProfileMenu>
        <ProfileName>{data.firstName}</ProfileName>
        {data.lastName}
      </ProfileMenu>
      {/* we can create a profile menu popup by overriding the onClick callback*/}
      <ExpandButton variant="contained" disableElevation>
        <ExpandIcon src="/arrow-down.svg" alt="expand profile menu" />
      </ExpandButton>
    </ProfileItemsBox>
  );
};

export default Profile;
