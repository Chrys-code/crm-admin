import React, { FC, PropsWithChildren } from 'react';
import { UsersContainer } from './users.styles';
import { UsersProps } from './users.types';

const Users: FC<
  UsersProps
> = ({}: PropsWithChildren<UsersProps>): JSX.Element => {
  return (
    <UsersContainer>
      <span>Hello this is the users page</span>
    </UsersContainer>
  );
};
export default Users;
