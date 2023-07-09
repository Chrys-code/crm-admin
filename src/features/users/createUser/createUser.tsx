import React, { FC, PropsWithChildren } from 'react';
import { CreateUserContainer } from './createUser.styles';
import { CreateUserProps } from './createUser.types';

const CreateUser: FC<
  CreateUserProps
> = ({}: PropsWithChildren<CreateUserProps>): JSX.Element => {
  return <CreateUserContainer></CreateUserContainer>;
};
export default CreateUser;
