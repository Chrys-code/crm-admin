import React, { ChangeEvent, FC, PropsWithChildren, useState } from 'react';
import Button from '../../../base/button';
import { toast } from 'react-toastify';
import {
  Input,
  InputLabel,
  InputWrapper,
  Selector,
} from './createEmailHeaderActions.styles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../../utils/hooks';
import { CreateEmailHeaderActionsProps } from './createEmailHeaderActions.types';

const CreateEmailHeaderActions: FC<CreateEmailHeaderActionsProps> = ({
  createEmail,
  setCurrentEmailGroup,
  setCurrentEmailTitle,
}: PropsWithChildren<CreateEmailHeaderActionsProps>): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const [title, setTitle] = useState<string | null>(null);

  useDebounce(setCurrentEmailTitle(title), 600, [title]);

  const updateEmailGroup = (group: string): void => {
    setCurrentEmailGroup(group);
  };

  const handleSave = (): void => {
    createEmail(null);
    toast.success('Template Saved!');
    navigate('/email-templates');
  };

  return (
    <>
      <InputWrapper>
        <InputLabel style={{ width: '100%' }} htmlFor="template-title">
          Title:
        </InputLabel>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setTitle(e.target.value)
          }
          id="template-title"
          name="template-title"
        />
      </InputWrapper>

      <InputWrapper>
        <InputLabel style={{ width: '100%' }} htmlFor="template-group">
          Group:
        </InputLabel>
        <Selector
          id="template-group"
          name="template-group"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            updateEmailGroup(e.target.value)
          }
        >
          <option value={'Signups'}>Signups</option>
          <option value={'Reminders'}>Reminders</option>
        </Selector>
      </InputWrapper>

      <Button onClick={handleSave}>Save</Button>
    </>
  );
};
export default CreateEmailHeaderActions;
