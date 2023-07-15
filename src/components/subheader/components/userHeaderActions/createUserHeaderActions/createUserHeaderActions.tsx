import React, { FC } from 'react';
import Button from '../../../../base/button';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateUserHeaderActions: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const { id } = useParams();

  const handleSave = async (): Promise<void> => {
    toast.success('User Saved!');
    navigate('/users');
    // clearCurrentEmail();
  };

  const buttonText: string = id ? 'Update' : 'Save';

  return <Button onClick={handleSave}>{buttonText}</Button>;
};
export default CreateUserHeaderActions;
