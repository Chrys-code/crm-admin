import React, { FC } from 'react';
import Button from '../../../base/button';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const EmailTemplatesHeaderActions: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/email-templates/create-template')}>
        Create
      </Button>
    </>
  );
};
export default EmailTemplatesHeaderActions;
