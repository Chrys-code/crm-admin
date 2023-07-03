import React, { FC } from 'react';
import Button from '../../../base/button';
import { toast } from 'react-toastify';
import {
  Input,
  InputLabel,
  InputWrapper,
  Selector,
} from './createEmailHeaderActions.styles';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const CreateEmailHeaderActions: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const handleSave = () => {
    toast.success('Template Saved!');
    navigate('/email-templates');
  };

  return (
    <>
      <InputWrapper>
        <InputLabel style={{ width: '100%' }} htmlFor="template-title">
          Title:
        </InputLabel>
        <Input id="template-title" name="template-title" />
      </InputWrapper>

      <InputWrapper>
        <InputLabel style={{ width: '100%' }} htmlFor="template-group">
          Group:
        </InputLabel>
        <Selector id="template-group" name="template-group">
          <option>Signups</option>
          <option>Reminders</option>
        </Selector>
      </InputWrapper>

      <Button onClick={handleSave}>Save</Button>
    </>
  );
};
export default CreateEmailHeaderActions;
