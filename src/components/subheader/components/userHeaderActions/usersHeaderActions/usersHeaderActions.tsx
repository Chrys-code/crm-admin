import React, { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Button from '../../../../base/button';

const UsersHeaderActions: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/users/user-editor')}>Create</Button>
    </>
  );
};
export default UsersHeaderActions;
