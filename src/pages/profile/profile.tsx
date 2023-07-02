import React, { FC, PropsWithChildren } from 'react';
import { ProfileContainer } from './profile.styles';
import { ProfileProps } from './profile.types';

const Profile: FC<
  ProfileProps
> = ({}: PropsWithChildren<ProfileProps>): JSX.Element => {
  return (
    <ProfileContainer>
      <span>This will be your profile page</span>
      <ul>
        <li>profile edit btn</li>
      </ul>
      <ul>
        <li>subscription price</li>
      </ul>
      <ul>
        <li>created org (later)</li>
      </ul>
    </ProfileContainer>
  );
};
export default Profile;
