import React, { FC, PropsWithChildren } from 'react';
import { UsersContainer } from './users.styles';
import { UsersProps } from './users.types';
import { getUserRequest } from '../../store/apis/user';
import Button from '../../components/base/button/button';

const Users: FC<
  UsersProps
> = ({}: PropsWithChildren<UsersProps>): JSX.Element => {
  const getUser = async () => {
    const tokn = process.env.REACT_APP_BEARER;
    if (tokn) {
      const response: any = await getUserRequest('6496152e2dbd63f4bf2facdf');
      console.log(response);
    }
  };

  return (
    <UsersContainer>
      <span>Hello this is the users page</span>
      <Button onClick={() => getUser()}>GET USER</Button>
    </UsersContainer>
  );
};
export default Users;
